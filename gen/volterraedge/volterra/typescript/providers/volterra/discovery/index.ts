// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#annotations Discovery#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#cluster_id Discovery#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#description Discovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#id Discovery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#labels Discovery#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#no_cluster_id Discovery#no_cluster_id}
  */
  readonly noClusterId?: boolean | cdktf.IResolvable;
  /**
  * discovery_cbip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#discovery_cbip Discovery#discovery_cbip}
  */
  readonly discoveryCbip?: DiscoveryDiscoveryCbip;
  /**
  * discovery_consul block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#discovery_consul Discovery#discovery_consul}
  */
  readonly discoveryConsul?: DiscoveryDiscoveryConsul;
  /**
  * discovery_k8s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#discovery_k8s Discovery#discovery_k8s}
  */
  readonly discoveryK8S?: DiscoveryDiscoveryK8S;
  /**
  * where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#where Discovery#where}
  */
  readonly where: DiscoveryWhere;
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#store_provider Discovery#store_provider}
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#url Discovery#url}
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
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfo;
}

export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordToTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordOutputReference | DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPasswordClearSecretInfoList",
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

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentialsPassword | undefined) {
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
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#username Discovery#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#password Discovery#password}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#tenant Discovery#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#skip_server_verification Discovery#skip_server_verification}
  */
  readonly skipServerVerification?: boolean | cdktf.IResolvable;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#trusted_ca Discovery#trusted_ca}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#partition_regex Discovery#partition_regex}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#items Discovery#items}
  */
  readonly items?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems[] | cdktf.IResolvable;
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

  // items - computed: false, optional: true, required: false
  private _items = new DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMappingItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#description_regex Discovery#description_regex}
  */
  readonly descriptionRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#discover_disabled_virtual_servers Discovery#discover_disabled_virtual_servers}
  */
  readonly discoverDisabledVirtualServers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name_regex Discovery#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#port_ranges Discovery#port_ranges}
  */
  readonly portRanges?: string;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClustersCbipDevicesVirtualServerFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._descriptionRegex = undefined;
      this._discoverDisabledVirtualServers = undefined;
      this._nameRegex = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._descriptionRegex = value.descriptionRegex;
      this._discoverDisabledVirtualServers = value.discoverDisabledVirtualServers;
      this._nameRegex = value.nameRegex;
      this._portRanges = value.portRanges;
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
}
export interface DiscoveryDiscoveryCbipCbipClustersCbipDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#cbip_mgmt_ip Discovery#cbip_mgmt_ip}
  */
  readonly cbipMgmtIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#default_all Discovery#default_all}
  */
  readonly defaultAll?: boolean | cdktf.IResolvable;
  /**
  * admin_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#admin_credentials Discovery#admin_credentials}
  */
  readonly adminCredentials: DiscoveryDiscoveryCbipCbipClustersCbipDevicesAdminCredentials;
  /**
  * cbip_certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#cbip_certificate_authority Discovery#cbip_certificate_authority}
  */
  readonly cbipCertificateAuthority: DiscoveryDiscoveryCbipCbipClustersCbipDevicesCbipCertificateAuthority;
  /**
  * namespace_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace_mapping Discovery#namespace_mapping}
  */
  readonly namespaceMapping?: DiscoveryDiscoveryCbipCbipClustersCbipDevicesNamespaceMapping;
  /**
  * virtual_server_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#virtual_server_filter Discovery#virtual_server_filter}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#description Discovery#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name Discovery#name}
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
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
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
export interface DiscoveryDiscoveryCbipCbipClusters {
  /**
  * cbip_devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#cbip_devices Discovery#cbip_devices}
  */
  readonly cbipDevices: DiscoveryDiscoveryCbipCbipClustersCbipDevices[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#metadata Discovery#metadata}
  */
  readonly metadata: DiscoveryDiscoveryCbipCbipClustersMetadata;
}

export function discoveryDiscoveryCbipCbipClustersToTerraform(struct?: DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cbip_devices: cdktf.listMapper(discoveryDiscoveryCbipCbipClustersCbipDevicesToTerraform, true)(struct!.cbipDevices),
    metadata: discoveryDiscoveryCbipCbipClustersMetadataToTerraform(struct!.metadata),
  }
}


export function discoveryDiscoveryCbipCbipClustersToHclTerraform(struct?: DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    if (this._cbipDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipDevices = this._cbipDevices?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbipCbipClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cbipDevices.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cbipDevices.internalValue = value.cbipDevices;
      this._metadata.internalValue = value.metadata;
    }
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
export interface DiscoveryDiscoveryCbip {
  /**
  * cbip_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#cbip_clusters Discovery#cbip_clusters}
  */
  readonly cbipClusters: DiscoveryDiscoveryCbipCbipClusters[] | cdktf.IResolvable;
}

export function discoveryDiscoveryCbipToTerraform(struct?: DiscoveryDiscoveryCbipOutputReference | DiscoveryDiscoveryCbip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cbip_clusters: cdktf.listMapper(discoveryDiscoveryCbipCbipClustersToTerraform, true)(struct!.cbipClusters),
  }
}


export function discoveryDiscoveryCbipToHclTerraform(struct?: DiscoveryDiscoveryCbipOutputReference | DiscoveryDiscoveryCbip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cbip_clusters: {
      value: cdktf.listMapperHcl(discoveryDiscoveryCbipCbipClustersToHclTerraform, true)(struct!.cbipClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryCbipCbipClustersList",
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
    if (this._cbipClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipClusters = this._cbipClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryDiscoveryCbip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cbipClusters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cbipClusters.internalValue = value.cbipClusters;
    }
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
}
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#store_provider Discovery#store_provider}
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#url Discovery#url}
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
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo;
}

export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoList",
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfoKeyUrl | undefined) {
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
}
export interface DiscoveryDiscoveryConsulAccessInfoConnectionInfoTlsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#certificate Discovery#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#server_name Discovery#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#trusted_ca_url Discovery#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#key_url Discovery#key_url}
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
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._serverName = value.serverName;
      this._trustedCaUrl = value.trustedCaUrl;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#api_server Discovery#api_server}
  */
  readonly apiServer: string;
  /**
  * tls_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#tls_info Discovery#tls_info}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#store_provider Discovery#store_provider}
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#url Discovery#url}
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
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfo;
}

export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlToHclTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlOutputReference | DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrlClearSecretInfoList",
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

  public set internalValue(value: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfoPasswdUrl | undefined) {
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
}
export interface DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#user_name Discovery#user_name}
  */
  readonly userName?: string;
  /**
  * passwd_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#passwd_url Discovery#passwd_url}
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
  * connection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#connection_info Discovery#connection_info}
  */
  readonly connectionInfo?: DiscoveryDiscoveryConsulAccessInfoConnectionInfo;
  /**
  * http_basic_auth_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#http_basic_auth_info Discovery#http_basic_auth_info}
  */
  readonly httpBasicAuthInfo?: DiscoveryDiscoveryConsulAccessInfoHttpBasicAuthInfo;
}

export function discoveryDiscoveryConsulAccessInfoToTerraform(struct?: DiscoveryDiscoveryConsulAccessInfoOutputReference | DiscoveryDiscoveryConsulAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
      this._connectionInfo.internalValue = undefined;
      this._httpBasicAuthInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionInfo.internalValue = value.connectionInfo;
      this._httpBasicAuthInfo.internalValue = value.httpBasicAuthInfo;
    }
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
export interface DiscoveryDiscoveryConsulPublishInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#publish Discovery#publish}
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
  * access_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#access_info Discovery#access_info}
  */
  readonly accessInfo: DiscoveryDiscoveryConsulAccessInfo;
  /**
  * publish_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#publish_info Discovery#publish_info}
  */
  readonly publishInfo: DiscoveryDiscoveryConsulPublishInfo;
}

export function discoveryDiscoveryConsulToTerraform(struct?: DiscoveryDiscoveryConsulOutputReference | DiscoveryDiscoveryConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_info: discoveryDiscoveryConsulAccessInfoToTerraform(struct!.accessInfo),
    publish_info: discoveryDiscoveryConsulPublishInfoToTerraform(struct!.publishInfo),
  }
}


export function discoveryDiscoveryConsulToHclTerraform(struct?: DiscoveryDiscoveryConsulOutputReference | DiscoveryDiscoveryConsul): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_info: {
      value: discoveryDiscoveryConsulAccessInfoToHclTerraform(struct!.accessInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryConsulAccessInfoList",
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
    if (this._accessInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessInfo = this._accessInfo?.internalValue;
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
      this._accessInfo.internalValue = undefined;
      this._publishInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessInfo.internalValue = value.accessInfo;
      this._publishInfo.internalValue = value.publishInfo;
    }
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#store_provider Discovery#store_provider}
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#url Discovery#url}
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
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfo;
}

export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrlClearSecretInfoList",
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfoKeyUrl | undefined) {
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
}
export interface DiscoveryDiscoveryK8SAccessInfoConnectionInfoTlsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#certificate Discovery#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#server_name Discovery#server_name}
  */
  readonly serverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#trusted_ca_url Discovery#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * key_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#key_url Discovery#key_url}
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
      this._keyUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificate = value.certificate;
      this._serverName = value.serverName;
      this._trustedCaUrl = value.trustedCaUrl;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#api_server Discovery#api_server}
  */
  readonly apiServer: string;
  /**
  * tls_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#tls_info Discovery#tls_info}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#decryption_provider Discovery#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#location Discovery#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#store_provider Discovery#store_provider}
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#provider Discovery#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#url Discovery#url}
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
export interface DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#blindfold_secret_info Discovery#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#clear_secret_info Discovery#clear_secret_info}
  */
  readonly clearSecretInfo?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfo;
}

export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: discoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function discoveryDiscoveryK8SAccessInfoKubeconfigUrlToHclTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlOutputReference | DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: discoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoKubeconfigUrlClearSecretInfoList",
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

  public set internalValue(value: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl | undefined) {
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
}
export interface DiscoveryDiscoveryK8SAccessInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#isolated Discovery#isolated}
  */
  readonly isolated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#reachable Discovery#reachable}
  */
  readonly reachable?: boolean | cdktf.IResolvable;
  /**
  * connection_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#connection_info Discovery#connection_info}
  */
  readonly connectionInfo?: DiscoveryDiscoveryK8SAccessInfoConnectionInfo;
  /**
  * kubeconfig_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#kubeconfig_url Discovery#kubeconfig_url}
  */
  readonly kubeconfigUrl?: DiscoveryDiscoveryK8SAccessInfoKubeconfigUrl;
}

export function discoveryDiscoveryK8SAccessInfoToTerraform(struct?: DiscoveryDiscoveryK8SAccessInfoOutputReference | DiscoveryDiscoveryK8SAccessInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
      this._isolated = undefined;
      this._reachable = undefined;
      this._connectionInfo.internalValue = undefined;
      this._kubeconfigUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isolated = value.isolated;
      this._reachable = value.reachable;
      this._connectionInfo.internalValue = value.connectionInfo;
      this._kubeconfigUrl.internalValue = value.kubeconfigUrl;
    }
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
export interface DiscoveryDiscoveryK8SPublishInfoDnsDelegation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#dns_mode Discovery#dns_mode}
  */
  readonly dnsMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#subdomain Discovery#subdomain}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#disable Discovery#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#publish_fqdns Discovery#publish_fqdns}
  */
  readonly publishFqdns?: boolean | cdktf.IResolvable;
  /**
  * dns_delegation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#dns_delegation Discovery#dns_delegation}
  */
  readonly dnsDelegation?: DiscoveryDiscoveryK8SPublishInfoDnsDelegation;
  /**
  * publish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#publish Discovery#publish}
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
  * access_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#access_info Discovery#access_info}
  */
  readonly accessInfo: DiscoveryDiscoveryK8SAccessInfo;
  /**
  * publish_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#publish_info Discovery#publish_info}
  */
  readonly publishInfo: DiscoveryDiscoveryK8SPublishInfo;
}

export function discoveryDiscoveryK8SToTerraform(struct?: DiscoveryDiscoveryK8SOutputReference | DiscoveryDiscoveryK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_info: discoveryDiscoveryK8SAccessInfoToTerraform(struct!.accessInfo),
    publish_info: discoveryDiscoveryK8SPublishInfoToTerraform(struct!.publishInfo),
  }
}


export function discoveryDiscoveryK8SToHclTerraform(struct?: DiscoveryDiscoveryK8SOutputReference | DiscoveryDiscoveryK8S): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_info: {
      value: discoveryDiscoveryK8SAccessInfoToHclTerraform(struct!.accessInfo),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryDiscoveryK8SAccessInfoList",
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
    if (this._accessInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessInfo = this._accessInfo?.internalValue;
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
      this._accessInfo.internalValue = undefined;
      this._publishInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessInfo.internalValue = value.accessInfo;
      this._publishInfo.internalValue = value.publishInfo;
    }
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
export interface DiscoveryWhereSiteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#tenant Discovery#tenant}
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
export interface DiscoveryWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#disable_internet_vip Discovery#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#enable_internet_vip Discovery#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#network_type Discovery#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#ref Discovery#ref}
  */
  readonly ref: DiscoveryWhereSiteRef[] | cdktf.IResolvable;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
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
}
export interface DiscoveryWhereVirtualNetworkRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#tenant Discovery#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#ref Discovery#ref}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#name Discovery#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#namespace Discovery#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#tenant Discovery#tenant}
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
export interface DiscoveryWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#disable_internet_vip Discovery#disable_internet_vip}
  */
  readonly disableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#enable_internet_vip Discovery#enable_internet_vip}
  */
  readonly enableInternetVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#network_type Discovery#network_type}
  */
  readonly networkType?: string;
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#ref Discovery#ref}
  */
  readonly ref: DiscoveryWhereVirtualSiteRef[] | cdktf.IResolvable;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableInternetVip = undefined;
      this._enableInternetVip = undefined;
      this._networkType = undefined;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableInternetVip = value.disableInternetVip;
      this._enableInternetVip = value.enableInternetVip;
      this._networkType = value.networkType;
      this._ref.internalValue = value.ref;
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
}
export interface DiscoveryWhere {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#site Discovery#site}
  */
  readonly site?: DiscoveryWhereSite;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#virtual_network Discovery#virtual_network}
  */
  readonly virtualNetwork?: DiscoveryWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#virtual_site Discovery#virtual_site}
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
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery volterra_discovery}
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
  * @param importFromId The id of the existing Discovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Discovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/discovery volterra_discovery} Resource
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
