// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#annotations Discovery#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cluster_id Discovery#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#description Discovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#id Discovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#labels Discovery#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#no_cluster_id Discovery#no_cluster_id}
  */
  readonly noClusterId?: boolean | cdktf.IResolvable;
  /**
  * discovery_cbip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#discovery_cbip Discovery#discovery_cbip}
  */
  readonly discoveryCbip?: DiscoveryDiscoveryCbip;
  /**
  * discovery_consul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#discovery_consul Discovery#discovery_consul}
  */
  readonly discoveryConsul?: DiscoveryDiscoveryConsul;
  /**
  * discovery_k8s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#discovery_k8s Discovery#discovery_k8s}
  */
  readonly discoveryK8S?: DiscoveryDiscoveryK8S;
  /**
  * discovery_third_party block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#discovery_third_party Discovery#discovery_third_party}
  */
  readonly discoveryThirdParty?: DiscoveryDiscoveryThirdParty;
  /**
  * where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#where Discovery#where}
  */
  readonly where: DiscoveryWhere;
}
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo): any {
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


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword): any {
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
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryCbipCbipClustersAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#username Discovery#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#password Discovery#password}
  */
  readonly password: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword;
}

export function discoveryDiscoveryCbipCbipClustersAdminCredentialsToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordToTerraform(struct!.password),
  }
}


export function discoveryDiscoveryCbipCbipClustersAdminCredentialsToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsOutputReference | DiscoveryDiscoveryCbipCbipClustersAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: false, required: true
  private _password = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentialsPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa): any {
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


export function discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#skip_server_verification Discovery#skip_server_verification}
  */
  readonly skipServerVerification?: boolean | cdktf.IResolvable;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#trusted_ca Discovery#trusted_ca}
  */
  readonly trustedCa?: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa;
}

export function discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_server_verification: cdktf.booleanToTerraform(struct!.skipServerVerification),
    trusted_ca: discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_server_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipServerVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca: {
      value: discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipServerVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipServerVerification = this._skipServerVerification;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipServerVerification = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipServerVerification = value.skipServerVerification;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // skip_server_verification - computed: false, optional: true, required: false
  private _skipServerVerification?: boolean | cdktf.IResolvable; 
  public get skipServerVerification() {
    return this.getBooleanAttribute('skip_server_verification');
  }
  public set skipServerVerification(value: boolean | cdktf.IResolvable) {
    this._skipServerVerification = value;
  }
  public resetSkipServerVerification() {
    this._skipServerVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServerVerificationInput() {
    return this._skipServerVerification;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityTrustedCa) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo): any {
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


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword): any {
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
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#username Discovery#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#password Discovery#password}
  */
  readonly password: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordToTerraform(struct!.password),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: false, required: true
  private _password = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa): any {
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


export function discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa): any {
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

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#skip_server_verification Discovery#skip_server_verification}
  */
  readonly skipServerVerification?: boolean | cdktf.IResolvable;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#trusted_ca Discovery#trusted_ca}
  */
  readonly trustedCa?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_server_verification: cdktf.booleanToTerraform(struct!.skipServerVerification),
    trusted_ca: discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_server_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipServerVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipServerVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipServerVerification = this._skipServerVerification;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipServerVerification = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipServerVerification = value.skipServerVerification;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // skip_server_verification - computed: false, optional: true, required: false
  private _skipServerVerification?: boolean | cdktf.IResolvable; 
  public get skipServerVerification() {
    return this.getBooleanAttribute('skip_server_verification');
  }
  public set skipServerVerification(value: boolean | cdktf.IResolvable) {
    this._skipServerVerification = value;
  }
  public resetSkipServerVerification() {
    this._skipServerVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServerVerificationInput() {
    return this._skipServerVerification;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityTrustedCa) {
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#partition_regex Discovery#partition_regex}
  */
  readonly partitionRegex?: string;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    partition_regex: cdktf.stringToTerraform(struct!.partitionRegex),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_regex: {
      value: cdktf.stringToHclTerraform(struct!.partitionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._partitionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionRegex = this._partitionRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._partitionRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._partitionRegex = value.partitionRegex;
    }
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

  // partition_regex - computed: false, optional: true, required: false
  private _partitionRegex?: string; 
  public get partitionRegex() {
    return this.getStringAttribute('partition_regex');
  }
  public set partitionRegex(value: string) {
    this._partitionRegex = value;
  }
  public resetPartitionRegex() {
    this._partitionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionRegexInput() {
    return this._partitionRegex;
  }
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsOutputReference {
    return new DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#items Discovery#items}
  */
  readonly items: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems[] | cdktf.IResolvable;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsToTerraform, true)(struct!.items),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#description_regex Discovery#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#discover_disabled_virtual_servers Discovery#discover_disabled_virtual_servers}
  */
  readonly discoverDisabledVirtualServers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name_regex Discovery#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#port_ranges Discovery#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#protocols Discovery#protocols}
  */
  readonly protocols?: string[];
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_regex: cdktf.stringToTerraform(struct!.descriptionRegex),
    discover_disabled_virtual_servers: cdktf.booleanToTerraform(struct!.discoverDisabledVirtualServers),
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_regex: {
      value: cdktf.stringToHclTerraform(struct!.descriptionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discover_disabled_virtual_servers: {
      value: cdktf.booleanToHclTerraform(struct!.discoverDisabledVirtualServers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionRegex = this._descriptionRegex;
    }
    if (this._discoverDisabledVirtualServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverDisabledVirtualServers = this._discoverDisabledVirtualServers;
    }
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._descriptionRegex = undefined;
      this._discoverDisabledVirtualServers = undefined;
      this._nameRegex = undefined;
      this._portRanges = undefined;
      this._protocols = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._descriptionRegex = value.descriptionRegex;
      this._discoverDisabledVirtualServers = value.discoverDisabledVirtualServers;
      this._nameRegex = value.nameRegex;
      this._portRanges = value.portRanges;
      this._protocols = value.protocols;
    }
  }

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // discover_disabled_virtual_servers - computed: false, optional: true, required: false
  private _discoverDisabledVirtualServers?: boolean | cdktf.IResolvable; 
  public get discoverDisabledVirtualServers() {
    return this.getBooleanAttribute('discover_disabled_virtual_servers');
  }
  public set discoverDisabledVirtualServers(value: boolean | cdktf.IResolvable) {
    this._discoverDisabledVirtualServers = value;
  }
  public resetDiscoverDisabledVirtualServers() {
    this._discoverDisabledVirtualServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverDisabledVirtualServersInput() {
    return this._discoverDisabledVirtualServers;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cbip_mgmt_ip Discovery#cbip_mgmt_ip}
  */
  readonly cbipMgmtIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#default_all Discovery#default_all}
  */
  readonly defaultAll?: boolean | cdktf.IResolvable;
  /**
  * admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#admin_credentials Discovery#admin_credentials}
  */
  readonly adminCredentials: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials;
  /**
  * cbip_certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cbip_certificate_authority Discovery#cbip_certificate_authority}
  */
  readonly cbipCertificateAuthority: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority;
  /**
  * namespace_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace_mapping Discovery#namespace_mapping}
  */
  readonly namespaceMapping?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping;
  /**
  * virtual_server_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#virtual_server_filter Discovery#virtual_server_filter}
  */
  readonly virtualServerFilter?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cbip_mgmt_ip: cdktf.stringToTerraform(struct!.cbipMgmtIp),
    default_all: cdktf.booleanToTerraform(struct!.defaultAll),
    admin_credentials: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsToTerraform(struct!.adminCredentials),
    cbip_certificate_authority: discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityToTerraform(struct!.cbipCertificateAuthority),
    namespace_mapping: discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingToTerraform(struct!.namespaceMapping),
    virtual_server_filter: discoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterToTerraform(struct!.virtualServerFilter),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cbip_mgmt_ip: {
      value: cdktf.stringToHclTerraform(struct!.cbipMgmtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_all: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_credentials: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsToHclTerraform(struct!.adminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsList",
    },
    cbip_certificate_authority: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityToHclTerraform(struct!.cbipCertificateAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityList",
    },
    namespace_mapping: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingToHclTerraform(struct!.namespaceMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingList",
    },
    virtual_server_filter: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterToHclTerraform(struct!.virtualServerFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersCbipDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cbipMgmtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipMgmtIp = this._cbipMgmtIp;
    }
    if (this._defaultAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAll = this._defaultAll;
    }
    if (this._adminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminCredentials = this._adminCredentials?.internalValue;
    }
    if (this._cbipCertificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipCertificateAuthority = this._cbipCertificateAuthority?.internalValue;
    }
    if (this._namespaceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMapping = this._namespaceMapping?.internalValue;
    }
    if (this._virtualServerFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerFilter = this._virtualServerFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cbipMgmtIp = undefined;
      this._defaultAll = undefined;
      this._adminCredentials.internalValue = undefined;
      this._cbipCertificateAuthority.internalValue = undefined;
      this._namespaceMapping.internalValue = undefined;
      this._virtualServerFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cbipMgmtIp = value.cbipMgmtIp;
      this._defaultAll = value.defaultAll;
      this._adminCredentials.internalValue = value.adminCredentials;
      this._cbipCertificateAuthority.internalValue = value.cbipCertificateAuthority;
      this._namespaceMapping.internalValue = value.namespaceMapping;
      this._virtualServerFilter.internalValue = value.virtualServerFilter;
    }
  }

  // cbip_mgmt_ip - computed: false, optional: false, required: true
  private _cbipMgmtIp?: string; 
  public get cbipMgmtIp() {
    return this.getStringAttribute('cbip_mgmt_ip');
  }
  public set cbipMgmtIp(value: string) {
    this._cbipMgmtIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipMgmtIpInput() {
    return this._cbipMgmtIp;
  }

  // default_all - computed: false, optional: true, required: false
  private _defaultAll?: boolean | cdktf.IResolvable; 
  public get defaultAll() {
    return this.getBooleanAttribute('default_all');
  }
  public set defaultAll(value: boolean | cdktf.IResolvable) {
    this._defaultAll = value;
  }
  public resetDefaultAll() {
    this._defaultAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllInput() {
    return this._defaultAll;
  }

  // admin_credentials - computed: false, optional: false, required: true
  private _adminCredentials = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }
  public putAdminCredentials(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials) {
    this._adminCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCredentialsInput() {
    return this._adminCredentials.internalValue;
  }

  // cbip_certificate_authority - computed: false, optional: false, required: true
  private _cbipCertificateAuthority = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthorityOutputReference(this, "cbip_certificate_authority");
  public get cbipCertificateAuthority() {
    return this._cbipCertificateAuthority;
  }
  public putCbipCertificateAuthority(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority) {
    this._cbipCertificateAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipCertificateAuthorityInput() {
    return this._cbipCertificateAuthority.internalValue;
  }

  // namespace_mapping - computed: false, optional: true, required: false
  private _namespaceMapping = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingOutputReference(this, "namespace_mapping");
  public get namespaceMapping() {
    return this._namespaceMapping;
  }
  public putNamespaceMapping(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping) {
    this._namespaceMapping.internalValue = value;
  }
  public resetNamespaceMapping() {
    this._namespaceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMappingInput() {
    return this._namespaceMapping.internalValue;
  }

  // virtual_server_filter - computed: false, optional: true, required: false
  private _virtualServerFilter = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilterOutputReference(this, "virtual_server_filter");
  public get virtualServerFilter() {
    return this._virtualServerFilter;
  }
  public putVirtualServerFilter(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter) {
    this._virtualServerFilter.internalValue = value;
  }
  public resetVirtualServerFilter() {
    this._virtualServerFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerFilterInput() {
    return this._virtualServerFilter.internalValue;
  }
}

export class DiscoveryDiscoveryCbipCbipClustersCbipDevicesList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryCbipCbipClustersCbipDevices[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryCbipCbipClustersCbipDevicesOutputReference {
    return new DiscoveryDiscoveryCbipCbipClustersCbipDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#description Discovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryCbipCbipClustersMetadataToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersMetadataOutputReference | DiscoveryDiscoveryCbipCbipClustersMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryCbipCbipClustersMetadataToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersMetadataOutputReference | DiscoveryDiscoveryCbipCbipClustersMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DiscoveryDiscoveryCbipCbipClustersMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
      this._name = value.name;
    }
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
export interface DiscoveryDiscoveryCbipCbipClustersMgmtPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#port Discovery#port}
  */
  readonly port?: number;
}

export function discoveryDiscoveryCbipCbipClustersMgmtPortToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersMgmtPortOutputReference | DiscoveryDiscoveryCbipCbipClustersMgmtPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function discoveryDiscoveryCbipCbipClustersMgmtPortToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersMgmtPortOutputReference | DiscoveryDiscoveryCbipCbipClustersMgmtPort): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersMgmtPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersMgmtPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersMgmtPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
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
}
export interface DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#partition_regex Discovery#partition_regex}
  */
  readonly partitionRegex?: string;
}

export function discoveryDiscoveryCbipCbipClustersNamespaceMappingItemsToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    partition_regex: cdktf.stringToTerraform(struct!.partitionRegex),
  }
}


export function discoveryDiscoveryCbipCbipClustersNamespaceMappingItemsToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_regex: {
      value: cdktf.stringToHclTerraform(struct!.partitionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._partitionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionRegex = this._partitionRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._partitionRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._partitionRegex = value.partitionRegex;
    }
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

  // partition_regex - computed: false, optional: true, required: false
  private _partitionRegex?: string; 
  public get partitionRegex() {
    return this.getStringAttribute('partition_regex');
  }
  public set partitionRegex(value: string) {
    this._partitionRegex = value;
  }
  public resetPartitionRegex() {
    this._partitionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionRegexInput() {
    return this._partitionRegex;
  }
}

export class DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItemsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItemsOutputReference {
    return new DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersNamespaceMapping {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#items Discovery#items}
  */
  readonly items: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems[] | cdktf.IResolvable;
}

export function discoveryDiscoveryCbipCbipClustersNamespaceMappingToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingOutputReference | DiscoveryDiscoveryCbipCbipClustersNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(discoveryDiscoveryCbipCbipClustersNamespaceMappingItemsToTerraform, true)(struct!.items),
  }
}


export function discoveryDiscoveryCbipCbipClustersNamespaceMappingToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingOutputReference | DiscoveryDiscoveryCbipCbipClustersNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(discoveryDiscoveryCbipCbipClustersNamespaceMappingItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersNamespaceMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersNamespaceMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersNamespaceMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DiscoveryDiscoveryCbipCbipClustersNamespaceMappingItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#description_regex Discovery#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#discover_disabled_virtual_servers Discovery#discover_disabled_virtual_servers}
  */
  readonly discoverDisabledVirtualServers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name_regex Discovery#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#port_ranges Discovery#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#protocols Discovery#protocols}
  */
  readonly protocols?: string[];
}

export function discoveryDiscoveryCbipCbipClustersVirtualServerFilterToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersVirtualServerFilterOutputReference | DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_regex: cdktf.stringToTerraform(struct!.descriptionRegex),
    discover_disabled_virtual_servers: cdktf.booleanToTerraform(struct!.discoverDisabledVirtualServers),
    name_regex: cdktf.stringToTerraform(struct!.nameRegex),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
  }
}


export function discoveryDiscoveryCbipCbipClustersVirtualServerFilterToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersVirtualServerFilterOutputReference | DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_regex: {
      value: cdktf.stringToHclTerraform(struct!.descriptionRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discover_disabled_virtual_servers: {
      value: cdktf.booleanToHclTerraform(struct!.discoverDisabledVirtualServers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_regex: {
      value: cdktf.stringToHclTerraform(struct!.nameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersVirtualServerFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionRegex = this._descriptionRegex;
    }
    if (this._discoverDisabledVirtualServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverDisabledVirtualServers = this._discoverDisabledVirtualServers;
    }
    if (this._nameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameRegex = this._nameRegex;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._descriptionRegex = undefined;
      this._discoverDisabledVirtualServers = undefined;
      this._nameRegex = undefined;
      this._portRanges = undefined;
      this._protocols = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._descriptionRegex = value.descriptionRegex;
      this._discoverDisabledVirtualServers = value.discoverDisabledVirtualServers;
      this._nameRegex = value.nameRegex;
      this._portRanges = value.portRanges;
      this._protocols = value.protocols;
    }
  }

  // description_regex - computed: false, optional: true, required: false
  private _descriptionRegex?: string; 
  public get descriptionRegex() {
    return this.getStringAttribute('description_regex');
  }
  public set descriptionRegex(value: string) {
    this._descriptionRegex = value;
  }
  public resetDescriptionRegex() {
    this._descriptionRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionRegexInput() {
    return this._descriptionRegex;
  }

  // discover_disabled_virtual_servers - computed: false, optional: true, required: false
  private _discoverDisabledVirtualServers?: boolean | cdktf.IResolvable; 
  public get discoverDisabledVirtualServers() {
    return this.getBooleanAttribute('discover_disabled_virtual_servers');
  }
  public set discoverDisabledVirtualServers(value: boolean | cdktf.IResolvable) {
    this._discoverDisabledVirtualServers = value;
  }
  public resetDiscoverDisabledVirtualServers() {
    this._discoverDisabledVirtualServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverDisabledVirtualServersInput() {
    return this._discoverDisabledVirtualServers;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}
export interface DiscoveryDiscoveryCbipCbipClusters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cbip_mgmt_ips Discovery#cbip_mgmt_ips}
  */
  readonly cbipMgmtIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#default_all Discovery#default_all}
  */
  readonly defaultAll?: boolean | cdktf.IResolvable;
  /**
  * admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#admin_credentials Discovery#admin_credentials}
  */
  readonly adminCredentials: DiscoveryDiscoveryCbipCbipClustersAdminCredentials;
  /**
  * cbip_certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cbip_certificate_authority Discovery#cbip_certificate_authority}
  */
  readonly cbipCertificateAuthority: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority;
  /**
  * cbip_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cbip_devices Discovery#cbip_devices}
  */
  readonly cbipDevices: DiscoveryDiscoveryCbipCbipClustersCbipDevices[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#metadata Discovery#metadata}
  */
  readonly metadata: DiscoveryDiscoveryCbipCbipClustersMetadata;
  /**
  * mgmt_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#mgmt_port Discovery#mgmt_port}
  */
  readonly mgmtPort?: DiscoveryDiscoveryCbipCbipClustersMgmtPort;
  /**
  * namespace_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace_mapping Discovery#namespace_mapping}
  */
  readonly namespaceMapping?: DiscoveryDiscoveryCbipCbipClustersNamespaceMapping;
  /**
  * virtual_server_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#virtual_server_filter Discovery#virtual_server_filter}
  */
  readonly virtualServerFilter?: DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter;
}

export function discoveryDiscoveryCbipCbipClustersToTerraform(struct?: DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cbip_mgmt_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cbipMgmtIps),
    default_all: cdktf.booleanToTerraform(struct!.defaultAll),
    admin_credentials: discoveryDiscoveryCbipCbipClustersAdminCredentialsToTerraform(struct!.adminCredentials),
    cbip_certificate_authority: discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityToTerraform(struct!.cbipCertificateAuthority),
    cbip_devices: cdktf.listMapper(discoveryDiscoveryCbipCbipClustersCbipDevicesToTerraform, true)(struct!.cbipDevices),
    metadata: discoveryDiscoveryCbipCbipClustersMetadataToTerraform(struct!.metadata),
    mgmt_port: discoveryDiscoveryCbipCbipClustersMgmtPortToTerraform(struct!.mgmtPort),
    namespace_mapping: discoveryDiscoveryCbipCbipClustersNamespaceMappingToTerraform(struct!.namespaceMapping),
    virtual_server_filter: discoveryDiscoveryCbipCbipClustersVirtualServerFilterToTerraform(struct!.virtualServerFilter),
  }
}


export function discoveryDiscoveryCbipCbipClustersToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cbip_mgmt_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cbipMgmtIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_all: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    admin_credentials: {
      value: discoveryDiscoveryCbipCbipClustersAdminCredentialsToHclTerraform(struct!.adminCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersAdminCredentialsList",
    },
    cbip_certificate_authority: {
      value: discoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityToHclTerraform(struct!.cbipCertificateAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityList",
    },
    cbip_devices: {
      value: cdktf.listMapperHcl(discoveryDiscoveryCbipCbipClustersCbipDevicesToHclTerraform, true)(struct!.cbipDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesList",
    },
    metadata: {
      value: discoveryDiscoveryCbipCbipClustersMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersMetadataList",
    },
    mgmt_port: {
      value: discoveryDiscoveryCbipCbipClustersMgmtPortToHclTerraform(struct!.mgmtPort),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersMgmtPortList",
    },
    namespace_mapping: {
      value: discoveryDiscoveryCbipCbipClustersNamespaceMappingToHclTerraform(struct!.namespaceMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersNamespaceMappingList",
    },
    virtual_server_filter: {
      value: discoveryDiscoveryCbipCbipClustersVirtualServerFilterToHclTerraform(struct!.virtualServerFilter),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersVirtualServerFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipCbipClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cbipMgmtIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipMgmtIps = this._cbipMgmtIps;
    }
    if (this._defaultAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAll = this._defaultAll;
    }
    if (this._adminCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminCredentials = this._adminCredentials?.internalValue;
    }
    if (this._cbipCertificateAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipCertificateAuthority = this._cbipCertificateAuthority?.internalValue;
    }
    if (this._cbipDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipDevices = this._cbipDevices?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mgmtPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtPort = this._mgmtPort?.internalValue;
    }
    if (this._namespaceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMapping = this._namespaceMapping?.internalValue;
    }
    if (this._virtualServerFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerFilter = this._virtualServerFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cbipMgmtIps = undefined;
      this._defaultAll = undefined;
      this._adminCredentials.internalValue = undefined;
      this._cbipCertificateAuthority.internalValue = undefined;
      this._cbipDevices.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._mgmtPort.internalValue = undefined;
      this._namespaceMapping.internalValue = undefined;
      this._virtualServerFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cbipMgmtIps = value.cbipMgmtIps;
      this._defaultAll = value.defaultAll;
      this._adminCredentials.internalValue = value.adminCredentials;
      this._cbipCertificateAuthority.internalValue = value.cbipCertificateAuthority;
      this._cbipDevices.internalValue = value.cbipDevices;
      this._metadata.internalValue = value.metadata;
      this._mgmtPort.internalValue = value.mgmtPort;
      this._namespaceMapping.internalValue = value.namespaceMapping;
      this._virtualServerFilter.internalValue = value.virtualServerFilter;
    }
  }

  // cbip_mgmt_ips - computed: false, optional: false, required: true
  private _cbipMgmtIps?: string[]; 
  public get cbipMgmtIps() {
    return this.getListAttribute('cbip_mgmt_ips');
  }
  public set cbipMgmtIps(value: string[]) {
    this._cbipMgmtIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipMgmtIpsInput() {
    return this._cbipMgmtIps;
  }

  // default_all - computed: false, optional: true, required: false
  private _defaultAll?: boolean | cdktf.IResolvable; 
  public get defaultAll() {
    return this.getBooleanAttribute('default_all');
  }
  public set defaultAll(value: boolean | cdktf.IResolvable) {
    this._defaultAll = value;
  }
  public resetDefaultAll() {
    this._defaultAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllInput() {
    return this._defaultAll;
  }

  // admin_credentials - computed: false, optional: false, required: true
  private _adminCredentials = new DiscoveryDiscoveryCbipCbipClustersAdminCredentialsOutputReference(this, "admin_credentials");
  public get adminCredentials() {
    return this._adminCredentials;
  }
  public putAdminCredentials(value: DiscoveryDiscoveryCbipCbipClustersAdminCredentials) {
    this._adminCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCredentialsInput() {
    return this._adminCredentials.internalValue;
  }

  // cbip_certificate_authority - computed: false, optional: false, required: true
  private _cbipCertificateAuthority = new DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthorityOutputReference(this, "cbip_certificate_authority");
  public get cbipCertificateAuthority() {
    return this._cbipCertificateAuthority;
  }
  public putCbipCertificateAuthority(value: DiscoveryDiscoveryCbipCbipClustersCbipCertificateAuthority) {
    this._cbipCertificateAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipCertificateAuthorityInput() {
    return this._cbipCertificateAuthority.internalValue;
  }

  // cbip_devices - computed: false, optional: false, required: true
  private _cbipDevices = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesList(this, "cbip_devices", false);
  public get cbipDevices() {
    return this._cbipDevices;
  }
  public putCbipDevices(value: DiscoveryDiscoveryCbipCbipClustersCbipDevices[] | cdktf.IResolvable) {
    this._cbipDevices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipDevicesInput() {
    return this._cbipDevices.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DiscoveryDiscoveryCbipCbipClustersMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DiscoveryDiscoveryCbipCbipClustersMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mgmt_port - computed: false, optional: true, required: false
  private _mgmtPort = new DiscoveryDiscoveryCbipCbipClustersMgmtPortOutputReference(this, "mgmt_port");
  public get mgmtPort() {
    return this._mgmtPort;
  }
  public putMgmtPort(value: DiscoveryDiscoveryCbipCbipClustersMgmtPort) {
    this._mgmtPort.internalValue = value;
  }
  public resetMgmtPort() {
    this._mgmtPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtPortInput() {
    return this._mgmtPort.internalValue;
  }

  // namespace_mapping - computed: false, optional: true, required: false
  private _namespaceMapping = new DiscoveryDiscoveryCbipCbipClustersNamespaceMappingOutputReference(this, "namespace_mapping");
  public get namespaceMapping() {
    return this._namespaceMapping;
  }
  public putNamespaceMapping(value: DiscoveryDiscoveryCbipCbipClustersNamespaceMapping) {
    this._namespaceMapping.internalValue = value;
  }
  public resetNamespaceMapping() {
    this._namespaceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMappingInput() {
    return this._namespaceMapping.internalValue;
  }

  // virtual_server_filter - computed: false, optional: true, required: false
  private _virtualServerFilter = new DiscoveryDiscoveryCbipCbipClustersVirtualServerFilterOutputReference(this, "virtual_server_filter");
  public get virtualServerFilter() {
    return this._virtualServerFilter;
  }
  public putVirtualServerFilter(value: DiscoveryDiscoveryCbipCbipClustersVirtualServerFilter) {
    this._virtualServerFilter.internalValue = value;
  }
  public resetVirtualServerFilter() {
    this._virtualServerFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerFilterInput() {
    return this._virtualServerFilter.internalValue;
  }
}

export class DiscoveryDiscoveryCbipCbipClustersList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryCbipCbipClusters[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryCbipCbipClustersOutputReference {
    return new DiscoveryDiscoveryCbipCbipClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryCbipServerCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryDiscoveryCbipServerCaToTerraform(struct?: DiscoveryDiscoveryCbipServerCa | cdktf.IResolvable): any {
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


export function discoveryDiscoveryCbipServerCaToHclTerraform(struct?: DiscoveryDiscoveryCbipServerCa | cdktf.IResolvable): any {
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

export class DiscoveryDiscoveryCbipServerCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryCbipServerCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryCbipServerCa | cdktf.IResolvable | undefined) {
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

export class DiscoveryDiscoveryCbipServerCaList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryCbipServerCa[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryCbipServerCaOutputReference {
    return new DiscoveryDiscoveryCbipServerCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryCbip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#internal_lb_domain Discovery#internal_lb_domain}
  */
  readonly internalLbDomain?: string;
  /**
  * cbip_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#cbip_clusters Discovery#cbip_clusters}
  */
  readonly cbipClusters: DiscoveryDiscoveryCbipCbipClusters[] | cdktf.IResolvable;
  /**
  * server_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#server_ca Discovery#server_ca}
  */
  readonly serverCa?: DiscoveryDiscoveryCbipServerCa[] | cdktf.IResolvable;
}

export function discoveryDiscoveryCbipToTerraform(struct?: DiscoveryDiscoveryCbipOutputReference | DiscoveryDiscoveryCbip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_lb_domain: cdktf.stringToTerraform(struct!.internalLbDomain),
    cbip_clusters: cdktf.listMapper(discoveryDiscoveryCbipCbipClustersToTerraform, true)(struct!.cbipClusters),
    server_ca: cdktf.listMapper(discoveryDiscoveryCbipServerCaToTerraform, true)(struct!.serverCa),
  }
}


export function discoveryDiscoveryCbipToHclTerraform(struct?: DiscoveryDiscoveryCbipOutputReference | DiscoveryDiscoveryCbip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_lb_domain: {
      value: cdktf.stringToHclTerraform(struct!.internalLbDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cbip_clusters: {
      value: cdktf.listMapperHcl(discoveryDiscoveryCbipCbipClustersToHclTerraform, true)(struct!.cbipClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersList",
    },
    server_ca: {
      value: cdktf.listMapperHcl(discoveryDiscoveryCbipServerCaToHclTerraform, true)(struct!.serverCa),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipServerCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryCbipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryCbip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalLbDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalLbDomain = this._internalLbDomain;
    }
    if (this._cbipClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipClusters = this._cbipClusters?.internalValue;
    }
    if (this._serverCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCa = this._serverCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalLbDomain = undefined;
      this._cbipClusters.internalValue = undefined;
      this._serverCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalLbDomain = value.internalLbDomain;
      this._cbipClusters.internalValue = value.cbipClusters;
      this._serverCa.internalValue = value.serverCa;
    }
  }

  // internal_lb_domain - computed: false, optional: true, required: false
  private _internalLbDomain?: string; 
  public get internalLbDomain() {
    return this.getStringAttribute('internal_lb_domain');
  }
  public set internalLbDomain(value: string) {
    this._internalLbDomain = value;
  }
  public resetInternalLbDomain() {
    this._internalLbDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalLbDomainInput() {
    return this._internalLbDomain;
  }

  // cbip_clusters - computed: false, optional: false, required: true
  private _cbipClusters = new DiscoveryDiscoveryCbipCbipClustersList(this, "cbip_clusters", false);
  public get cbipClusters() {
    return this._cbipClusters;
  }
  public putCbipClusters(value: DiscoveryDiscoveryCbipCbipClusters[] | cdktf.IResolvable) {
    this._cbipClusters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipClustersInput() {
    return this._cbipClusters.internalValue;
  }

  // server_ca - computed: false, optional: true, required: false
  private _serverCa = new DiscoveryDiscoveryCbipServerCaList(this, "server_ca", false);
  public get serverCa() {
    return this._serverCa;
  }
  public putServerCa(value: DiscoveryDiscoveryCbipServerCa[] | cdktf.IResolvable) {
    this._serverCa.internalValue = value;
  }
  public resetServerCa() {
    this._serverCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaInput() {
    return this._serverCa.internalValue;
  }
}
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl): any {
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
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl): any {
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
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl): any {
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
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#certificate Discovery#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#server_name Discovery#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#trusted_ca_url Discovery#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * ca_certificate_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#ca_certificate_url Discovery#ca_certificate_url}
  */
  readonly caCertificateUrl?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl;
  /**
  * certificate_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#certificate_url Discovery#certificate_url}
  */
  readonly certificateUrl?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key_url Discovery#key_url}
  */
  readonly keyUrl?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    ca_certificate_url: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlToTerraform(struct!.caCertificateUrl),
    certificate_url: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlToTerraform(struct!.certificateUrl),
    key_url: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo): any {
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
    ca_certificate_url: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlToHclTerraform(struct!.caCertificateUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlList",
    },
    certificate_url: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlToHclTerraform(struct!.certificateUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlList",
    },
    key_url: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._caCertificateUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateUrl = this._caCertificateUrl?.internalValue;
    }
    if (this._certificateUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl?.internalValue;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._serverName = undefined;
      this._trustedCaUrl = undefined;
      this._caCertificateUrl.internalValue = undefined;
      this._certificateUrl.internalValue = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._serverName = value.serverName;
      this._trustedCaUrl = value.trustedCaUrl;
      this._caCertificateUrl.internalValue = value.caCertificateUrl;
      this._certificateUrl.internalValue = value.certificateUrl;
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

  // ca_certificate_url - computed: false, optional: true, required: false
  private _caCertificateUrl = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference(this, "ca_certificate_url");
  public get caCertificateUrl() {
    return this._caCertificateUrl;
  }
  public putCaCertificateUrl(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCaCertificateUrl) {
    this._caCertificateUrl.internalValue = value;
  }
  public resetCaCertificateUrl() {
    this._caCertificateUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateUrlInput() {
    return this._caCertificateUrl.internalValue;
  }

  // certificate_url - computed: false, optional: true, required: false
  private _certificateUrl = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference(this, "certificate_url");
  public get certificateUrl() {
    return this._certificateUrl;
  }
  public putCertificateUrl(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoCertificateUrl) {
    this._certificateUrl.internalValue = value;
  }
  public resetCertificateUrl() {
    this._certificateUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl.internalValue;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl) {
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#api_server Discovery#api_server}
  */
  readonly apiServer: string;
  /**
  * tls_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tls_info Discovery#tls_info}
  */
  readonly tlsInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.stringToTerraform(struct!.apiServer),
    tls_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoToTerraform(struct!.tlsInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.stringToHclTerraform(struct!.apiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoToHclTerraform(struct!.tlsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    if (this._tlsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInfo = this._tlsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
      this._tlsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
      this._tlsInfo.internalValue = value.tlsInfo;
    }
  }

  // api_server - computed: false, optional: false, required: true
  private _apiServer?: string; 
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }
  public set apiServer(value: string) {
    this._apiServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }

  // tls_info - computed: false, optional: true, required: false
  private _tlsInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoOutputReference(this, "tls_info");
  public get tlsInfo() {
    return this._tlsInfo;
  }
  public putTlsInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo) {
    this._tlsInfo.internalValue = value;
  }
  public resetTlsInfo() {
    this._tlsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInfoInput() {
    return this._tlsInfo.internalValue;
  }
}
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl): any {
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
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#user_name Discovery#user_name}
  */
  readonly userName?: string;
  /**
  * passwd_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#passwd_url Discovery#passwd_url}
  */
  readonly passwdUrl?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    passwd_url: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlToTerraform(struct!.passwdUrl),
  }
}


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo): any {
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
    passwd_url: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlToHclTerraform(struct!.passwdUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    if (this._passwdUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwdUrl = this._passwdUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userName = undefined;
      this._passwdUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userName = value.userName;
      this._passwdUrl.internalValue = value.passwdUrl;
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

  // passwd_url - computed: false, optional: true, required: false
  private _passwdUrl = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlOutputReference(this, "passwd_url");
  public get passwdUrl() {
    return this._passwdUrl;
  }
  public putPasswdUrl(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl) {
    this._passwdUrl.internalValue = value;
  }
  public resetPasswdUrl() {
    this._passwdUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdUrlInput() {
    return this._passwdUrl.internalValue;
  }
}
export interface DiscoveryDiscoveryConsulAccessInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#scheme Discovery#scheme}
  */
  readonly scheme?: string;
  /**
  * connection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#connection_info Discovery#connection_info}
  */
  readonly connectionInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfo;
  /**
  * http_basic_auth_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#http_basic_auth_info Discovery#http_basic_auth_info}
  */
  readonly httpBasicAuthInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo;
}

export function discoveryDiscoveryConsulAccessInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoOutputReference | DiscoveryDiscoveryConsulAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheme: cdktf.stringToTerraform(struct!.scheme),
    connection_info: discoveryDiscoveryConsulAccessInfoConnectionInfoToTerraform(struct!.connectionInfo),
    http_basic_auth_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoToTerraform(struct!.httpBasicAuthInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoOutputReference | DiscoveryDiscoveryConsulAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoToHclTerraform(struct!.connectionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoList",
    },
    http_basic_auth_info: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoToHclTerraform(struct!.httpBasicAuthInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulAccessInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulAccessInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._connectionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionInfo = this._connectionInfo?.internalValue;
    }
    if (this._httpBasicAuthInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBasicAuthInfo = this._httpBasicAuthInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheme = undefined;
      this._connectionInfo.internalValue = undefined;
      this._httpBasicAuthInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheme = value.scheme;
      this._connectionInfo.internalValue = value.connectionInfo;
      this._httpBasicAuthInfo.internalValue = value.httpBasicAuthInfo;
    }
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // connection_info - computed: false, optional: true, required: false
  private _connectionInfo = new DiscoveryDiscoveryConsulAccessInfoConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }
  public putConnectionInfo(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfo) {
    this._connectionInfo.internalValue = value;
  }
  public resetConnectionInfo() {
    this._connectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInfoInput() {
    return this._connectionInfo.internalValue;
  }

  // http_basic_auth_info - computed: false, optional: true, required: false
  private _httpBasicAuthInfo = new DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoOutputReference(this, "http_basic_auth_info");
  public get httpBasicAuthInfo() {
    return this._httpBasicAuthInfo;
  }
  public putHttpBasicAuthInfo(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo) {
    this._httpBasicAuthInfo.internalValue = value;
  }
  public resetHttpBasicAuthInfo() {
    this._httpBasicAuthInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBasicAuthInfoInput() {
    return this._httpBasicAuthInfo.internalValue;
  }
}
export interface DiscoveryDiscoveryConsulNamespaceMappingItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace_regex Discovery#namespace_regex}
  */
  readonly namespaceRegex?: string;
}

export function discoveryDiscoveryConsulNamespaceMappingItemsToTerraform(struct?: DiscoveryDiscoveryConsulNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_regex: cdktf.stringToTerraform(struct!.namespaceRegex),
  }
}


export function discoveryDiscoveryConsulNamespaceMappingItemsToHclTerraform(struct?: DiscoveryDiscoveryConsulNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.namespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulNamespaceMappingItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryConsulNamespaceMappingItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceRegex = this._namespaceRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulNamespaceMappingItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._namespaceRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._namespaceRegex = value.namespaceRegex;
    }
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

  // namespace_regex - computed: false, optional: true, required: false
  private _namespaceRegex?: string; 
  public get namespaceRegex() {
    return this.getStringAttribute('namespace_regex');
  }
  public set namespaceRegex(value: string) {
    this._namespaceRegex = value;
  }
  public resetNamespaceRegex() {
    this._namespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceRegexInput() {
    return this._namespaceRegex;
  }
}

export class DiscoveryDiscoveryConsulNamespaceMappingItemsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryConsulNamespaceMappingItems[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryConsulNamespaceMappingItemsOutputReference {
    return new DiscoveryDiscoveryConsulNamespaceMappingItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryConsulNamespaceMapping {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#items Discovery#items}
  */
  readonly items: DiscoveryDiscoveryConsulNamespaceMappingItems[] | cdktf.IResolvable;
}

export function discoveryDiscoveryConsulNamespaceMappingToTerraform(struct?: DiscoveryDiscoveryConsulNamespaceMappingOutputReference | DiscoveryDiscoveryConsulNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(discoveryDiscoveryConsulNamespaceMappingItemsToTerraform, true)(struct!.items),
  }
}


export function discoveryDiscoveryConsulNamespaceMappingToHclTerraform(struct?: DiscoveryDiscoveryConsulNamespaceMappingOutputReference | DiscoveryDiscoveryConsulNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(discoveryDiscoveryConsulNamespaceMappingItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulNamespaceMappingItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulNamespaceMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulNamespaceMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulNamespaceMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DiscoveryDiscoveryConsulNamespaceMappingItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DiscoveryDiscoveryConsulNamespaceMappingItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DiscoveryDiscoveryConsulPublishInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#publish Discovery#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
}

export function discoveryDiscoveryConsulPublishInfoToTerraform(struct?: DiscoveryDiscoveryConsulPublishInfoOutputReference | DiscoveryDiscoveryConsulPublishInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    publish: cdktf.booleanToTerraform(struct!.publish),
  }
}


export function discoveryDiscoveryConsulPublishInfoToHclTerraform(struct?: DiscoveryDiscoveryConsulPublishInfoOutputReference | DiscoveryDiscoveryConsulPublishInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish: {
      value: cdktf.booleanToHclTerraform(struct!.publish),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulPublishInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsulPublishInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._publish !== undefined) {
      hasAnyValues = true;
      internalValueResult.publish = this._publish;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsulPublishInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._publish = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._publish = value.publish;
    }
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

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }
}
export interface DiscoveryDiscoveryConsul {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#default_all Discovery#default_all}
  */
  readonly defaultAll?: boolean | cdktf.IResolvable;
  /**
  * access_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#access_info Discovery#access_info}
  */
  readonly accessInfo: DiscoveryDiscoveryConsulAccessInfo;
  /**
  * namespace_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace_mapping Discovery#namespace_mapping}
  */
  readonly namespaceMapping?: DiscoveryDiscoveryConsulNamespaceMapping;
  /**
  * publish_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#publish_info Discovery#publish_info}
  */
  readonly publishInfo: DiscoveryDiscoveryConsulPublishInfo;
}

export function discoveryDiscoveryConsulToTerraform(struct?: DiscoveryDiscoveryConsulOutputReference | DiscoveryDiscoveryConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_all: cdktf.booleanToTerraform(struct!.defaultAll),
    access_info: discoveryDiscoveryConsulAccessInfoToTerraform(struct!.accessInfo),
    namespace_mapping: discoveryDiscoveryConsulNamespaceMappingToTerraform(struct!.namespaceMapping),
    publish_info: discoveryDiscoveryConsulPublishInfoToTerraform(struct!.publishInfo),
  }
}


export function discoveryDiscoveryConsulToHclTerraform(struct?: DiscoveryDiscoveryConsulOutputReference | DiscoveryDiscoveryConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_all: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_info: {
      value: discoveryDiscoveryConsulAccessInfoToHclTerraform(struct!.accessInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoList",
    },
    namespace_mapping: {
      value: discoveryDiscoveryConsulNamespaceMappingToHclTerraform(struct!.namespaceMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulNamespaceMappingList",
    },
    publish_info: {
      value: discoveryDiscoveryConsulPublishInfoToHclTerraform(struct!.publishInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulPublishInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryConsul | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAll = this._defaultAll;
    }
    if (this._accessInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessInfo = this._accessInfo?.internalValue;
    }
    if (this._namespaceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMapping = this._namespaceMapping?.internalValue;
    }
    if (this._publishInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishInfo = this._publishInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryConsul | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAll = undefined;
      this._accessInfo.internalValue = undefined;
      this._namespaceMapping.internalValue = undefined;
      this._publishInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAll = value.defaultAll;
      this._accessInfo.internalValue = value.accessInfo;
      this._namespaceMapping.internalValue = value.namespaceMapping;
      this._publishInfo.internalValue = value.publishInfo;
    }
  }

  // default_all - computed: false, optional: true, required: false
  private _defaultAll?: boolean | cdktf.IResolvable; 
  public get defaultAll() {
    return this.getBooleanAttribute('default_all');
  }
  public set defaultAll(value: boolean | cdktf.IResolvable) {
    this._defaultAll = value;
  }
  public resetDefaultAll() {
    this._defaultAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllInput() {
    return this._defaultAll;
  }

  // access_info - computed: false, optional: false, required: true
  private _accessInfo = new DiscoveryDiscoveryConsulAccessInfoOutputReference(this, "access_info");
  public get accessInfo() {
    return this._accessInfo;
  }
  public putAccessInfo(value: DiscoveryDiscoveryConsulAccessInfo) {
    this._accessInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInfoInput() {
    return this._accessInfo.internalValue;
  }

  // namespace_mapping - computed: false, optional: true, required: false
  private _namespaceMapping = new DiscoveryDiscoveryConsulNamespaceMappingOutputReference(this, "namespace_mapping");
  public get namespaceMapping() {
    return this._namespaceMapping;
  }
  public putNamespaceMapping(value: DiscoveryDiscoveryConsulNamespaceMapping) {
    this._namespaceMapping.internalValue = value;
  }
  public resetNamespaceMapping() {
    this._namespaceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMappingInput() {
    return this._namespaceMapping.internalValue;
  }

  // publish_info - computed: false, optional: false, required: true
  private _publishInfo = new DiscoveryDiscoveryConsulPublishInfoOutputReference(this, "publish_info");
  public get publishInfo() {
    return this._publishInfo;
  }
  public putPublishInfo(value: DiscoveryDiscoveryConsulPublishInfo) {
    this._publishInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInfoInput() {
    return this._publishInfo.internalValue;
  }
}
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl): any {
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
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl): any {
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
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl): any {
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
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#certificate Discovery#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#server_name Discovery#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#trusted_ca_url Discovery#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * ca_certificate_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#ca_certificate_url Discovery#ca_certificate_url}
  */
  readonly caCertificateUrl?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl;
  /**
  * certificate_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#certificate_url Discovery#certificate_url}
  */
  readonly certificateUrl?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key_url Discovery#key_url}
  */
  readonly keyUrl?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    ca_certificate_url: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlToTerraform(struct!.caCertificateUrl),
    certificate_url: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlToTerraform(struct!.certificateUrl),
    key_url: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlToTerraform(struct!.keyUrl),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo): any {
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
    ca_certificate_url: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlToHclTerraform(struct!.caCertificateUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlList",
    },
    certificate_url: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlToHclTerraform(struct!.certificateUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlList",
    },
    key_url: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlToHclTerraform(struct!.keyUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._caCertificateUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificateUrl = this._caCertificateUrl?.internalValue;
    }
    if (this._certificateUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl?.internalValue;
    }
    if (this._keyUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUrl = this._keyUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificate = undefined;
      this._serverName = undefined;
      this._trustedCaUrl = undefined;
      this._caCertificateUrl.internalValue = undefined;
      this._certificateUrl.internalValue = undefined;
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._serverName = value.serverName;
      this._trustedCaUrl = value.trustedCaUrl;
      this._caCertificateUrl.internalValue = value.caCertificateUrl;
      this._certificateUrl.internalValue = value.certificateUrl;
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

  // ca_certificate_url - computed: false, optional: true, required: false
  private _caCertificateUrl = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrlOutputReference(this, "ca_certificate_url");
  public get caCertificateUrl() {
    return this._caCertificateUrl;
  }
  public putCaCertificateUrl(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCaCertificateUrl) {
    this._caCertificateUrl.internalValue = value;
  }
  public resetCaCertificateUrl() {
    this._caCertificateUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateUrlInput() {
    return this._caCertificateUrl.internalValue;
  }

  // certificate_url - computed: false, optional: true, required: false
  private _certificateUrl = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrlOutputReference(this, "certificate_url");
  public get certificateUrl() {
    return this._certificateUrl;
  }
  public putCertificateUrl(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoCertificateUrl) {
    this._certificateUrl.internalValue = value;
  }
  public resetCertificateUrl() {
    this._certificateUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl.internalValue;
  }

  // key_url - computed: false, optional: true, required: false
  private _keyUrl = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference(this, "key_url");
  public get keyUrl() {
    return this._keyUrl;
  }
  public putKeyUrl(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl) {
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#api_server Discovery#api_server}
  */
  readonly apiServer: string;
  /**
  * tls_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tls_info Discovery#tls_info}
  */
  readonly tlsInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.stringToTerraform(struct!.apiServer),
    tls_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoToTerraform(struct!.tlsInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.stringToHclTerraform(struct!.apiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoToHclTerraform(struct!.tlsInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    if (this._tlsInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInfo = this._tlsInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServer = undefined;
      this._tlsInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServer = value.apiServer;
      this._tlsInfo.internalValue = value.tlsInfo;
    }
  }

  // api_server - computed: false, optional: false, required: true
  private _apiServer?: string; 
  public get apiServer() {
    return this.getStringAttribute('api_server');
  }
  public set apiServer(value: string) {
    this._apiServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }

  // tls_info - computed: false, optional: true, required: false
  private _tlsInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoOutputReference(this, "tls_info");
  public get tlsInfo() {
    return this._tlsInfo;
  }
  public putTlsInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo) {
    this._tlsInfo.internalValue = value;
  }
  public resetTlsInfo() {
    this._tlsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInfoInput() {
    return this._tlsInfo.internalValue;
  }
}
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#store_provider Discovery#store_provider}
  */
  readonly storeProvider?: string;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal): any {
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


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal): any {
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

export class DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#url Discovery#url}
  */
  readonly url: string;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#key Discovery#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding Discovery#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#version Discovery#version}
  */
  readonly version?: number;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo): any {
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


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo): any {
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

export class DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo | undefined) {
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#secret_encoding_type Discovery#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#blindfold_secret_info_internal Discovery#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#vault_secret_info Discovery#vault_secret_info}
  */
  readonly vaultSecretInfo?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#wingman_secret_info Discovery#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: discoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: discoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: discoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl): any {
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
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoList",
    },
    vault_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl | undefined {
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl | undefined) {
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
  private _blindfoldSecretInfo = new DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo) {
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
  private _vaultSecretInfo = new DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlVaultSecretInfo) {
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
  private _wingmanSecretInfo = new DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlWingmanSecretInfo) {
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
export interface DiscoveryDiscoveryK8SAccessInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#in_cluster Discovery#in_cluster}
  */
  readonly inCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#isolated Discovery#isolated}
  */
  readonly isolated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#reachable Discovery#reachable}
  */
  readonly reachable?: boolean | cdktf.IResolvable;
  /**
  * connection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#connection_info Discovery#connection_info}
  */
  readonly connectionInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfo;
  /**
  * kubeconfig_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#kubeconfig_url Discovery#kubeconfig_url}
  */
  readonly kubeconfigUrl?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl;
}

export function discoveryDiscoveryK8SAccessInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoOutputReference | DiscoveryDiscoveryK8SAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in_cluster: cdktf.booleanToTerraform(struct!.inCluster),
    isolated: cdktf.booleanToTerraform(struct!.isolated),
    reachable: cdktf.booleanToTerraform(struct!.reachable),
    connection_info: discoveryDiscoveryK8SAccessInfoConnectionInfoToTerraform(struct!.connectionInfo),
    kubeconfig_url: discoveryDiscoveryK8SAccessInfoKubeconfigUrlToTerraform(struct!.kubeconfigUrl),
  }
}


export function discoveryDiscoveryK8SAccessInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoOutputReference | DiscoveryDiscoveryK8SAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.inCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    isolated: {
      value: cdktf.booleanToHclTerraform(struct!.isolated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reachable: {
      value: cdktf.booleanToHclTerraform(struct!.reachable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoToHclTerraform(struct!.connectionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoList",
    },
    kubeconfig_url: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlToHclTerraform(struct!.kubeconfigUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SAccessInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SAccessInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.inCluster = this._inCluster;
    }
    if (this._isolated !== undefined) {
      hasAnyValues = true;
      internalValueResult.isolated = this._isolated;
    }
    if (this._reachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachable = this._reachable;
    }
    if (this._connectionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionInfo = this._connectionInfo?.internalValue;
    }
    if (this._kubeconfigUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfigUrl = this._kubeconfigUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inCluster = undefined;
      this._isolated = undefined;
      this._reachable = undefined;
      this._connectionInfo.internalValue = undefined;
      this._kubeconfigUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inCluster = value.inCluster;
      this._isolated = value.isolated;
      this._reachable = value.reachable;
      this._connectionInfo.internalValue = value.connectionInfo;
      this._kubeconfigUrl.internalValue = value.kubeconfigUrl;
    }
  }

  // in_cluster - computed: false, optional: true, required: false
  private _inCluster?: boolean | cdktf.IResolvable; 
  public get inCluster() {
    return this.getBooleanAttribute('in_cluster');
  }
  public set inCluster(value: boolean | cdktf.IResolvable) {
    this._inCluster = value;
  }
  public resetInCluster() {
    this._inCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inClusterInput() {
    return this._inCluster;
  }

  // isolated - computed: false, optional: true, required: false
  private _isolated?: boolean | cdktf.IResolvable; 
  public get isolated() {
    return this.getBooleanAttribute('isolated');
  }
  public set isolated(value: boolean | cdktf.IResolvable) {
    this._isolated = value;
  }
  public resetIsolated() {
    this._isolated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedInput() {
    return this._isolated;
  }

  // reachable - computed: false, optional: true, required: false
  private _reachable?: boolean | cdktf.IResolvable; 
  public get reachable() {
    return this.getBooleanAttribute('reachable');
  }
  public set reachable(value: boolean | cdktf.IResolvable) {
    this._reachable = value;
  }
  public resetReachable() {
    this._reachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableInput() {
    return this._reachable;
  }

  // connection_info - computed: false, optional: true, required: false
  private _connectionInfo = new DiscoveryDiscoveryK8SAccessInfoConnectionInfoOutputReference(this, "connection_info");
  public get connectionInfo() {
    return this._connectionInfo;
  }
  public putConnectionInfo(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfo) {
    this._connectionInfo.internalValue = value;
  }
  public resetConnectionInfo() {
    this._connectionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInfoInput() {
    return this._connectionInfo.internalValue;
  }

  // kubeconfig_url - computed: false, optional: true, required: false
  private _kubeconfigUrl = new DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlOutputReference(this, "kubeconfig_url");
  public get kubeconfigUrl() {
    return this._kubeconfigUrl;
  }
  public putKubeconfigUrl(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl) {
    this._kubeconfigUrl.internalValue = value;
  }
  public resetKubeconfigUrl() {
    this._kubeconfigUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfigUrlInput() {
    return this._kubeconfigUrl.internalValue;
  }
}
export interface DiscoveryDiscoveryK8SNamespaceMappingItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace_regex Discovery#namespace_regex}
  */
  readonly namespaceRegex?: string;
}

export function discoveryDiscoveryK8SNamespaceMappingItemsToTerraform(struct?: DiscoveryDiscoveryK8SNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespace_regex: cdktf.stringToTerraform(struct!.namespaceRegex),
  }
}


export function discoveryDiscoveryK8SNamespaceMappingItemsToHclTerraform(struct?: DiscoveryDiscoveryK8SNamespaceMappingItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.namespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SNamespaceMappingItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryDiscoveryK8SNamespaceMappingItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceRegex = this._namespaceRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SNamespaceMappingItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._namespaceRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._namespaceRegex = value.namespaceRegex;
    }
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

  // namespace_regex - computed: false, optional: true, required: false
  private _namespaceRegex?: string; 
  public get namespaceRegex() {
    return this.getStringAttribute('namespace_regex');
  }
  public set namespaceRegex(value: string) {
    this._namespaceRegex = value;
  }
  public resetNamespaceRegex() {
    this._namespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceRegexInput() {
    return this._namespaceRegex;
  }
}

export class DiscoveryDiscoveryK8SNamespaceMappingItemsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryDiscoveryK8SNamespaceMappingItems[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryDiscoveryK8SNamespaceMappingItemsOutputReference {
    return new DiscoveryDiscoveryK8SNamespaceMappingItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryDiscoveryK8SNamespaceMapping {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#items Discovery#items}
  */
  readonly items: DiscoveryDiscoveryK8SNamespaceMappingItems[] | cdktf.IResolvable;
}

export function discoveryDiscoveryK8SNamespaceMappingToTerraform(struct?: DiscoveryDiscoveryK8SNamespaceMappingOutputReference | DiscoveryDiscoveryK8SNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(discoveryDiscoveryK8SNamespaceMappingItemsToTerraform, true)(struct!.items),
  }
}


export function discoveryDiscoveryK8SNamespaceMappingToHclTerraform(struct?: DiscoveryDiscoveryK8SNamespaceMappingOutputReference | DiscoveryDiscoveryK8SNamespaceMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(discoveryDiscoveryK8SNamespaceMappingItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SNamespaceMappingItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SNamespaceMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SNamespaceMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SNamespaceMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new DiscoveryDiscoveryK8SNamespaceMappingItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DiscoveryDiscoveryK8SNamespaceMappingItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DiscoveryDiscoveryK8SPublishInfoDnsDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#dns_mode Discovery#dns_mode}
  */
  readonly dnsMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#subdomain Discovery#subdomain}
  */
  readonly subdomain: string;
}

export function discoveryDiscoveryK8SPublishInfoDnsDelegationToTerraform(struct?: DiscoveryDiscoveryK8SPublishInfoDnsDelegationOutputReference | DiscoveryDiscoveryK8SPublishInfoDnsDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_mode: cdktf.stringToTerraform(struct!.dnsMode),
    subdomain: cdktf.stringToTerraform(struct!.subdomain),
  }
}


export function discoveryDiscoveryK8SPublishInfoDnsDelegationToHclTerraform(struct?: DiscoveryDiscoveryK8SPublishInfoDnsDelegationOutputReference | DiscoveryDiscoveryK8SPublishInfoDnsDelegation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_mode: {
      value: cdktf.stringToHclTerraform(struct!.dnsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subdomain: {
      value: cdktf.stringToHclTerraform(struct!.subdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SPublishInfoDnsDelegationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SPublishInfoDnsDelegation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMode = this._dnsMode;
    }
    if (this._subdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.subdomain = this._subdomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SPublishInfoDnsDelegation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsMode = undefined;
      this._subdomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsMode = value.dnsMode;
      this._subdomain = value.subdomain;
    }
  }

  // dns_mode - computed: false, optional: false, required: true
  private _dnsMode?: string; 
  public get dnsMode() {
    return this.getStringAttribute('dns_mode');
  }
  public set dnsMode(value: string) {
    this._dnsMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsModeInput() {
    return this._dnsMode;
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }
}
export interface DiscoveryDiscoveryK8SPublishInfoPublish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace: string;
}

export function discoveryDiscoveryK8SPublishInfoPublishToTerraform(struct?: DiscoveryDiscoveryK8SPublishInfoPublishOutputReference | DiscoveryDiscoveryK8SPublishInfoPublish): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function discoveryDiscoveryK8SPublishInfoPublishToHclTerraform(struct?: DiscoveryDiscoveryK8SPublishInfoPublishOutputReference | DiscoveryDiscoveryK8SPublishInfoPublish): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SPublishInfoPublishOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SPublishInfoPublish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SPublishInfoPublish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
    }
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
}
export interface DiscoveryDiscoveryK8SPublishInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#publish_fqdns Discovery#publish_fqdns}
  */
  readonly publishFqdns?: boolean | cdktf.IResolvable;
  /**
  * dns_delegation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#dns_delegation Discovery#dns_delegation}
  */
  readonly dnsDelegation?: DiscoveryDiscoveryK8SPublishInfoDnsDelegation;
  /**
  * publish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#publish Discovery#publish}
  */
  readonly publish?: DiscoveryDiscoveryK8SPublishInfoPublish;
}

export function discoveryDiscoveryK8SPublishInfoToTerraform(struct?: DiscoveryDiscoveryK8SPublishInfoOutputReference | DiscoveryDiscoveryK8SPublishInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    publish_fqdns: cdktf.booleanToTerraform(struct!.publishFqdns),
    dns_delegation: discoveryDiscoveryK8SPublishInfoDnsDelegationToTerraform(struct!.dnsDelegation),
    publish: discoveryDiscoveryK8SPublishInfoPublishToTerraform(struct!.publish),
  }
}


export function discoveryDiscoveryK8SPublishInfoToHclTerraform(struct?: DiscoveryDiscoveryK8SPublishInfoOutputReference | DiscoveryDiscoveryK8SPublishInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publish_fqdns: {
      value: cdktf.booleanToHclTerraform(struct!.publishFqdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_delegation: {
      value: discoveryDiscoveryK8SPublishInfoDnsDelegationToHclTerraform(struct!.dnsDelegation),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SPublishInfoDnsDelegationList",
    },
    publish: {
      value: discoveryDiscoveryK8SPublishInfoPublishToHclTerraform(struct!.publish),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SPublishInfoPublishList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SPublishInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8SPublishInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._publishFqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishFqdns = this._publishFqdns;
    }
    if (this._dnsDelegation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDelegation = this._dnsDelegation?.internalValue;
    }
    if (this._publish?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publish = this._publish?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8SPublishInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._publishFqdns = undefined;
      this._dnsDelegation.internalValue = undefined;
      this._publish.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._publishFqdns = value.publishFqdns;
      this._dnsDelegation.internalValue = value.dnsDelegation;
      this._publish.internalValue = value.publish;
    }
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

  // publish_fqdns - computed: false, optional: true, required: false
  private _publishFqdns?: boolean | cdktf.IResolvable; 
  public get publishFqdns() {
    return this.getBooleanAttribute('publish_fqdns');
  }
  public set publishFqdns(value: boolean | cdktf.IResolvable) {
    this._publishFqdns = value;
  }
  public resetPublishFqdns() {
    this._publishFqdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishFqdnsInput() {
    return this._publishFqdns;
  }

  // dns_delegation - computed: false, optional: true, required: false
  private _dnsDelegation = new DiscoveryDiscoveryK8SPublishInfoDnsDelegationOutputReference(this, "dns_delegation");
  public get dnsDelegation() {
    return this._dnsDelegation;
  }
  public putDnsDelegation(value: DiscoveryDiscoveryK8SPublishInfoDnsDelegation) {
    this._dnsDelegation.internalValue = value;
  }
  public resetDnsDelegation() {
    this._dnsDelegation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDelegationInput() {
    return this._dnsDelegation.internalValue;
  }

  // publish - computed: false, optional: true, required: false
  private _publish = new DiscoveryDiscoveryK8SPublishInfoPublishOutputReference(this, "publish");
  public get publish() {
    return this._publish;
  }
  public putPublish(value: DiscoveryDiscoveryK8SPublishInfoPublish) {
    this._publish.internalValue = value;
  }
  public resetPublish() {
    this._publish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish.internalValue;
  }
}
export interface DiscoveryDiscoveryK8S {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#default_all Discovery#default_all}
  */
  readonly defaultAll?: boolean | cdktf.IResolvable;
  /**
  * access_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#access_info Discovery#access_info}
  */
  readonly accessInfo: DiscoveryDiscoveryK8SAccessInfo;
  /**
  * namespace_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace_mapping Discovery#namespace_mapping}
  */
  readonly namespaceMapping?: DiscoveryDiscoveryK8SNamespaceMapping;
  /**
  * publish_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#publish_info Discovery#publish_info}
  */
  readonly publishInfo: DiscoveryDiscoveryK8SPublishInfo;
}

export function discoveryDiscoveryK8SToTerraform(struct?: DiscoveryDiscoveryK8SOutputReference | DiscoveryDiscoveryK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_all: cdktf.booleanToTerraform(struct!.defaultAll),
    access_info: discoveryDiscoveryK8SAccessInfoToTerraform(struct!.accessInfo),
    namespace_mapping: discoveryDiscoveryK8SNamespaceMappingToTerraform(struct!.namespaceMapping),
    publish_info: discoveryDiscoveryK8SPublishInfoToTerraform(struct!.publishInfo),
  }
}


export function discoveryDiscoveryK8SToHclTerraform(struct?: DiscoveryDiscoveryK8SOutputReference | DiscoveryDiscoveryK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_all: {
      value: cdktf.booleanToHclTerraform(struct!.defaultAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_info: {
      value: discoveryDiscoveryK8SAccessInfoToHclTerraform(struct!.accessInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoList",
    },
    namespace_mapping: {
      value: discoveryDiscoveryK8SNamespaceMappingToHclTerraform(struct!.namespaceMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SNamespaceMappingList",
    },
    publish_info: {
      value: discoveryDiscoveryK8SPublishInfoToHclTerraform(struct!.publishInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SPublishInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryK8SOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryK8S | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAll = this._defaultAll;
    }
    if (this._accessInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessInfo = this._accessInfo?.internalValue;
    }
    if (this._namespaceMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceMapping = this._namespaceMapping?.internalValue;
    }
    if (this._publishInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishInfo = this._publishInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryK8S | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultAll = undefined;
      this._accessInfo.internalValue = undefined;
      this._namespaceMapping.internalValue = undefined;
      this._publishInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultAll = value.defaultAll;
      this._accessInfo.internalValue = value.accessInfo;
      this._namespaceMapping.internalValue = value.namespaceMapping;
      this._publishInfo.internalValue = value.publishInfo;
    }
  }

  // default_all - computed: false, optional: true, required: false
  private _defaultAll?: boolean | cdktf.IResolvable; 
  public get defaultAll() {
    return this.getBooleanAttribute('default_all');
  }
  public set defaultAll(value: boolean | cdktf.IResolvable) {
    this._defaultAll = value;
  }
  public resetDefaultAll() {
    this._defaultAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAllInput() {
    return this._defaultAll;
  }

  // access_info - computed: false, optional: false, required: true
  private _accessInfo = new DiscoveryDiscoveryK8SAccessInfoOutputReference(this, "access_info");
  public get accessInfo() {
    return this._accessInfo;
  }
  public putAccessInfo(value: DiscoveryDiscoveryK8SAccessInfo) {
    this._accessInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInfoInput() {
    return this._accessInfo.internalValue;
  }

  // namespace_mapping - computed: false, optional: true, required: false
  private _namespaceMapping = new DiscoveryDiscoveryK8SNamespaceMappingOutputReference(this, "namespace_mapping");
  public get namespaceMapping() {
    return this._namespaceMapping;
  }
  public putNamespaceMapping(value: DiscoveryDiscoveryK8SNamespaceMapping) {
    this._namespaceMapping.internalValue = value;
  }
  public resetNamespaceMapping() {
    this._namespaceMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceMappingInput() {
    return this._namespaceMapping.internalValue;
  }

  // publish_info - computed: false, optional: false, required: true
  private _publishInfo = new DiscoveryDiscoveryK8SPublishInfoOutputReference(this, "publish_info");
  public get publishInfo() {
    return this._publishInfo;
  }
  public putPublishInfo(value: DiscoveryDiscoveryK8SPublishInfo) {
    this._publishInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInfoInput() {
    return this._publishInfo.internalValue;
  }
}
export interface DiscoveryDiscoveryThirdParty {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#applications Discovery#applications}
  */
  readonly applications: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#expiration_timestamp Discovery#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#source_cidr Discovery#source_cidr}
  */
  readonly sourceCidr: string[];
}

export function discoveryDiscoveryThirdPartyToTerraform(struct?: DiscoveryDiscoveryThirdPartyOutputReference | DiscoveryDiscoveryThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    source_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceCidr),
  }
}


export function discoveryDiscoveryThirdPartyToHclTerraform(struct?: DiscoveryDiscoveryThirdPartyOutputReference | DiscoveryDiscoveryThirdParty): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceCidr),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryDiscoveryThirdPartyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryDiscoveryThirdParty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryThirdParty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
      this._expirationTimestamp = undefined;
      this._sourceCidr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
      this._expirationTimestamp = value.expirationTimestamp;
      this._sourceCidr = value.sourceCidr;
    }
  }

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // source_cidr - computed: false, optional: false, required: true
  private _sourceCidr?: string[]; 
  public get sourceCidr() {
    return this.getListAttribute('source_cidr');
  }
  public set sourceCidr(value: string[]) {
    this._sourceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }
}
export interface DiscoveryWhereSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryWhereSiteRefToTerraform(struct?: DiscoveryWhereSiteRef | cdktf.IResolvable): any {
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


export function discoveryWhereSiteRefToHclTerraform(struct?: DiscoveryWhereSiteRef | cdktf.IResolvable): any {
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

export class DiscoveryWhereSiteRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryWhereSiteRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryWhereSiteRef | cdktf.IResolvable | undefined) {
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

export class DiscoveryWhereSiteRefList extends cdktf.ComplexList {
  public internalValue? : DiscoveryWhereSiteRef[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryWhereSiteRefOutputReference {
    return new DiscoveryWhereSiteRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryWhereSiteRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryWhereSiteRefsToTerraform(struct?: DiscoveryWhereSiteRefs | cdktf.IResolvable): any {
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


export function discoveryWhereSiteRefsToHclTerraform(struct?: DiscoveryWhereSiteRefs | cdktf.IResolvable): any {
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

export class DiscoveryWhereSiteRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryWhereSiteRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryWhereSiteRefs | cdktf.IResolvable | undefined) {
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

export class DiscoveryWhereSiteRefsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryWhereSiteRefs[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryWhereSiteRefsOutputReference {
    return new DiscoveryWhereSiteRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#disable_internet_vip Discovery#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#enable_internet_vip Discovery#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#network_type Discovery#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#ref Discovery#ref}
  */
  readonly ref: DiscoveryWhereSiteRef[] | cdktf.IResolvable;
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#refs Discovery#refs}
  */
  readonly refs?: DiscoveryWhereSiteRefs[] | cdktf.IResolvable;
}

export function discoveryWhereSiteToTerraform(struct?: DiscoveryWhereSiteOutputReference | DiscoveryWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ref: cdktf.listMapper(discoveryWhereSiteRefToTerraform, true)(struct!.ref),
    refs: cdktf.listMapper(discoveryWhereSiteRefsToTerraform, true)(struct!.refs),
  }
}


export function discoveryWhereSiteToHclTerraform(struct?: DiscoveryWhereSiteOutputReference | DiscoveryWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.listMapperHcl(discoveryWhereSiteRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereSiteRefList",
    },
    refs: {
      value: cdktf.listMapperHcl(discoveryWhereSiteRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereSiteRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
      this._refs.internalValue = value.refs;
    }
  }

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DiscoveryWhereSiteRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: DiscoveryWhereSiteRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new DiscoveryWhereSiteRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: DiscoveryWhereSiteRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface DiscoveryWhereVirtualNetworkRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryWhereVirtualNetworkRefToTerraform(struct?: DiscoveryWhereVirtualNetworkRef | cdktf.IResolvable): any {
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


export function discoveryWhereVirtualNetworkRefToHclTerraform(struct?: DiscoveryWhereVirtualNetworkRef | cdktf.IResolvable): any {
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

export class DiscoveryWhereVirtualNetworkRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryWhereVirtualNetworkRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryWhereVirtualNetworkRef | cdktf.IResolvable | undefined) {
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

export class DiscoveryWhereVirtualNetworkRefList extends cdktf.ComplexList {
  public internalValue? : DiscoveryWhereVirtualNetworkRef[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryWhereVirtualNetworkRefOutputReference {
    return new DiscoveryWhereVirtualNetworkRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryWhereVirtualNetwork {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#ref Discovery#ref}
  */
  readonly ref: DiscoveryWhereVirtualNetworkRef[] | cdktf.IResolvable;
}

export function discoveryWhereVirtualNetworkToTerraform(struct?: DiscoveryWhereVirtualNetworkOutputReference | DiscoveryWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(discoveryWhereVirtualNetworkRefToTerraform, true)(struct!.ref),
  }
}


export function discoveryWhereVirtualNetworkToHclTerraform(struct?: DiscoveryWhereVirtualNetworkOutputReference | DiscoveryWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(discoveryWhereVirtualNetworkRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereVirtualNetworkRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryWhereVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryWhereVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryWhereVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DiscoveryWhereVirtualNetworkRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: DiscoveryWhereVirtualNetworkRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DiscoveryWhereVirtualSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryWhereVirtualSiteRefToTerraform(struct?: DiscoveryWhereVirtualSiteRef | cdktf.IResolvable): any {
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


export function discoveryWhereVirtualSiteRefToHclTerraform(struct?: DiscoveryWhereVirtualSiteRef | cdktf.IResolvable): any {
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

export class DiscoveryWhereVirtualSiteRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryWhereVirtualSiteRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryWhereVirtualSiteRef | cdktf.IResolvable | undefined) {
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

export class DiscoveryWhereVirtualSiteRefList extends cdktf.ComplexList {
  public internalValue? : DiscoveryWhereVirtualSiteRef[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryWhereVirtualSiteRefOutputReference {
    return new DiscoveryWhereVirtualSiteRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryWhereVirtualSiteRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#tenant Discovery#tenant}
  */
  readonly tenant?: string;
}

export function discoveryWhereVirtualSiteRefsToTerraform(struct?: DiscoveryWhereVirtualSiteRefs | cdktf.IResolvable): any {
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


export function discoveryWhereVirtualSiteRefsToHclTerraform(struct?: DiscoveryWhereVirtualSiteRefs | cdktf.IResolvable): any {
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

export class DiscoveryWhereVirtualSiteRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DiscoveryWhereVirtualSiteRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryWhereVirtualSiteRefs | cdktf.IResolvable | undefined) {
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

export class DiscoveryWhereVirtualSiteRefsList extends cdktf.ComplexList {
  public internalValue? : DiscoveryWhereVirtualSiteRefs[] | cdktf.IResolvable

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
  public get(index: number): DiscoveryWhereVirtualSiteRefsOutputReference {
    return new DiscoveryWhereVirtualSiteRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#disable_internet_vip Discovery#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#enable_internet_vip Discovery#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#network_type Discovery#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#ref Discovery#ref}
  */
  readonly ref: DiscoveryWhereVirtualSiteRef[] | cdktf.IResolvable;
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#refs Discovery#refs}
  */
  readonly refs?: DiscoveryWhereVirtualSiteRefs[] | cdktf.IResolvable;
}

export function discoveryWhereVirtualSiteToTerraform(struct?: DiscoveryWhereVirtualSiteOutputReference | DiscoveryWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_internet_vip: cdktf.booleanToTerraform(struct!.disableInternetVip),
    enable_internet_vip: cdktf.booleanToTerraform(struct!.enableInternetVip),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ref: cdktf.listMapper(discoveryWhereVirtualSiteRefToTerraform, true)(struct!.ref),
    refs: cdktf.listMapper(discoveryWhereVirtualSiteRefsToTerraform, true)(struct!.refs),
  }
}


export function discoveryWhereVirtualSiteToHclTerraform(struct?: DiscoveryWhereVirtualSiteOutputReference | DiscoveryWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_internet_vip: {
      value: cdktf.booleanToHclTerraform(struct!.enableInternetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.listMapperHcl(discoveryWhereVirtualSiteRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereVirtualSiteRefList",
    },
    refs: {
      value: cdktf.listMapperHcl(discoveryWhereVirtualSiteRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereVirtualSiteRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetVip = this._disableInternetVip;
    }
    if (this._enableInternetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInternetVip = this._enableInternetVip;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
      this._refs.internalValue = value.refs;
    }
  }

  // disable_internet_vip - computed: false, optional: true, required: false
  private _disableInternetVip?: boolean | cdktf.IResolvable; 
  public get disableInternetVip() {
    return this.getBooleanAttribute('disable_internet_vip');
  }
  public set disableInternetVip(value: boolean | cdktf.IResolvable) {
    this._disableInternetVip = value;
  }
  public resetDisableInternetVip() {
    this._disableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetVipInput() {
    return this._disableInternetVip;
  }

  // enable_internet_vip - computed: false, optional: true, required: false
  private _enableInternetVip?: boolean | cdktf.IResolvable; 
  public get enableInternetVip() {
    return this.getBooleanAttribute('enable_internet_vip');
  }
  public set enableInternetVip(value: boolean | cdktf.IResolvable) {
    this._enableInternetVip = value;
  }
  public resetEnableInternetVip() {
    this._enableInternetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternetVipInput() {
    return this._enableInternetVip;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DiscoveryWhereVirtualSiteRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: DiscoveryWhereVirtualSiteRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new DiscoveryWhereVirtualSiteRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: DiscoveryWhereVirtualSiteRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface DiscoveryWhere {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#site Discovery#site}
  */
  readonly site?: DiscoveryWhereSite;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#virtual_network Discovery#virtual_network}
  */
  readonly virtualNetwork?: DiscoveryWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#virtual_site Discovery#virtual_site}
  */
  readonly virtualSite?: DiscoveryWhereVirtualSite;
}

export function discoveryWhereToTerraform(struct?: DiscoveryWhereOutputReference | DiscoveryWhere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: discoveryWhereSiteToTerraform(struct!.site),
    virtual_network: discoveryWhereVirtualNetworkToTerraform(struct!.virtualNetwork),
    virtual_site: discoveryWhereVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function discoveryWhereToHclTerraform(struct?: DiscoveryWhereOutputReference | DiscoveryWhere): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: discoveryWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereSiteList",
    },
    virtual_network: {
      value: discoveryWhereVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereVirtualNetworkList",
    },
    virtual_site: {
      value: discoveryWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryWhereVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryWhereOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryWhere | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryWhere | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualNetwork.internalValue = value.virtualNetwork;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new DiscoveryWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: DiscoveryWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new DiscoveryWhereVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: DiscoveryWhereVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new DiscoveryWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DiscoveryWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery volterra_discovery}
*/
export class Discovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Discovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Discovery to import
  * @param importFromId The id of the existing Discovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Discovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/discovery volterra_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_discovery',
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
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noClusterId = config.noClusterId;
    this._discoveryCbip.internalValue = config.discoveryCbip;
    this._discoveryConsul.internalValue = config.discoveryConsul;
    this._discoveryK8S.internalValue = config.discoveryK8S;
    this._discoveryThirdParty.internalValue = config.discoveryThirdParty;
    this._where.internalValue = config.where;
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

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // no_cluster_id - computed: false, optional: true, required: false
  private _noClusterId?: boolean | cdktf.IResolvable; 
  public get noClusterId() {
    return this.getBooleanAttribute('no_cluster_id');
  }
  public set noClusterId(value: boolean | cdktf.IResolvable) {
    this._noClusterId = value;
  }
  public resetNoClusterId() {
    this._noClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClusterIdInput() {
    return this._noClusterId;
  }

  // discovery_cbip - computed: false, optional: true, required: false
  private _discoveryCbip = new DiscoveryDiscoveryCbipOutputReference(this, "discovery_cbip");
  public get discoveryCbip() {
    return this._discoveryCbip;
  }
  public putDiscoveryCbip(value: DiscoveryDiscoveryCbip) {
    this._discoveryCbip.internalValue = value;
  }
  public resetDiscoveryCbip() {
    this._discoveryCbip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryCbipInput() {
    return this._discoveryCbip.internalValue;
  }

  // discovery_consul - computed: false, optional: true, required: false
  private _discoveryConsul = new DiscoveryDiscoveryConsulOutputReference(this, "discovery_consul");
  public get discoveryConsul() {
    return this._discoveryConsul;
  }
  public putDiscoveryConsul(value: DiscoveryDiscoveryConsul) {
    this._discoveryConsul.internalValue = value;
  }
  public resetDiscoveryConsul() {
    this._discoveryConsul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryConsulInput() {
    return this._discoveryConsul.internalValue;
  }

  // discovery_k8s - computed: false, optional: true, required: false
  private _discoveryK8S = new DiscoveryDiscoveryK8SOutputReference(this, "discovery_k8s");
  public get discoveryK8S() {
    return this._discoveryK8S;
  }
  public putDiscoveryK8S(value: DiscoveryDiscoveryK8S) {
    this._discoveryK8S.internalValue = value;
  }
  public resetDiscoveryK8S() {
    this._discoveryK8S.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryK8SInput() {
    return this._discoveryK8S.internalValue;
  }

  // discovery_third_party - computed: false, optional: true, required: false
  private _discoveryThirdParty = new DiscoveryDiscoveryThirdPartyOutputReference(this, "discovery_third_party");
  public get discoveryThirdParty() {
    return this._discoveryThirdParty;
  }
  public putDiscoveryThirdParty(value: DiscoveryDiscoveryThirdParty) {
    this._discoveryThirdParty.internalValue = value;
  }
  public resetDiscoveryThirdParty() {
    this._discoveryThirdParty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryThirdPartyInput() {
    return this._discoveryThirdParty.internalValue;
  }

  // where - computed: false, optional: false, required: true
  private _where = new DiscoveryWhereOutputReference(this, "where");
  public get where() {
    return this._where;
  }
  public putWhere(value: DiscoveryWhere) {
    this._where.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_cluster_id: cdktf.booleanToTerraform(this._noClusterId),
      discovery_cbip: discoveryDiscoveryCbipToTerraform(this._discoveryCbip.internalValue),
      discovery_consul: discoveryDiscoveryConsulToTerraform(this._discoveryConsul.internalValue),
      discovery_k8s: discoveryDiscoveryK8SToTerraform(this._discoveryK8S.internalValue),
      discovery_third_party: discoveryDiscoveryThirdPartyToTerraform(this._discoveryThirdParty.internalValue),
      where: discoveryWhereToTerraform(this._where.internalValue),
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
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      no_cluster_id: {
        value: cdktf.booleanToHclTerraform(this._noClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      discovery_cbip: {
        value: discoveryDiscoveryCbipToHclTerraform(this._discoveryCbip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryDiscoveryCbipList",
      },
      discovery_consul: {
        value: discoveryDiscoveryConsulToHclTerraform(this._discoveryConsul.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryDiscoveryConsulList",
      },
      discovery_k8s: {
        value: discoveryDiscoveryK8SToHclTerraform(this._discoveryK8S.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryDiscoveryK8SList",
      },
      discovery_third_party: {
        value: discoveryDiscoveryThirdPartyToHclTerraform(this._discoveryThirdParty.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryDiscoveryThirdPartyList",
      },
      where: {
        value: discoveryWhereToHclTerraform(this._where.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryWhereList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
