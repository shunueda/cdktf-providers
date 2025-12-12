import * as cdktf from 'cdktf';
import { AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo,
azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToTerraform,
azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToHclTerraform,
AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference,
AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternal,
azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalToTerraform,
azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalToHclTerraform,
AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalOutputReference,
AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata,
azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataToTerraform,
azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataToHclTerraform,
AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataOutputReference,
AzureVnetSiteIngressEgressGwArAcceleratedNetworking,
azureVnetSiteIngressEgressGwArAcceleratedNetworkingToTerraform,
azureVnetSiteIngressEgressGwArAcceleratedNetworkingToHclTerraform,
AzureVnetSiteIngressEgressGwArAcceleratedNetworkingOutputReference,
AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies,
azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesToTerraform,
azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesToHclTerraform,
AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesOutputReference,
AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies,
azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesToTerraform,
azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesToHclTerraform,
AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesOutputReference,
AzureVnetSiteIngressEgressGwArActiveNetworkPolicies,
azureVnetSiteIngressEgressGwArActiveNetworkPoliciesToTerraform,
azureVnetSiteIngressEgressGwArActiveNetworkPoliciesToHclTerraform,
AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesOutputReference,
AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn,
azureVnetSiteIngressEgressGwArDcClusterGroupInsideVnToTerraform,
azureVnetSiteIngressEgressGwArDcClusterGroupInsideVnToHclTerraform,
AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVnOutputReference,
AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn,
azureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnToTerraform,
azureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnToHclTerraform,
AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnOutputReference,
AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct,
azureVnetSiteIngressEgressGwArGlobalNetworkListStructToTerraform,
azureVnetSiteIngressEgressGwArGlobalNetworkListStructToHclTerraform,
AzureVnetSiteIngressEgressGwArGlobalNetworkListStructOutputReference } from './structs0'
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#url AzureVnetSite#url}
  */
  readonly url: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo): any {
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

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#key AzureVnetSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#secret_encoding AzureVnetSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#version AzureVnetSite#version}
  */
  readonly version?: number;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo): any {
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


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo): any {
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

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo): any {
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

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#secret_encoding_type AzureVnetSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#blindfold_secret_info AzureVnetSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#blindfold_secret_info_internal AzureVnetSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#clear_secret_info AzureVnetSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vault_secret_info AzureVnetSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#wingman_secret_info AzureVnetSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey): any {
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
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey | undefined) {
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
  private _blindfoldSecretInfo = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyWingmanSecretInfo) {
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#circuit_id AzureVnetSite#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * authorized_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#authorized_key AzureVnetSite#authorized_key}
  */
  readonly authorizedKey?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    authorized_key: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToTerraform(struct!.authorizedKey),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorized_key: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToHclTerraform(struct!.authorizedKey),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._authorizedKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKey = this._authorizedKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._circuitId = undefined;
      this._authorizedKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._circuitId = value.circuitId;
      this._authorizedKey.internalValue = value.authorizedKey;
    }
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // authorized_key - computed: false, optional: true, required: false
  private _authorizedKey = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference(this, "authorized_key");
  public get authorizedKey() {
    return this._authorizedKey;
  }
  public putAuthorizedKey(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey) {
    this._authorizedKey.internalValue = value;
  }
  public resetAuthorizedKey() {
    this._authorizedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeyInput() {
    return this._authorizedKey.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#circuit_id AzureVnetSite#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#weight AzureVnetSite#weight}
  */
  readonly weight?: number;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#metadata AzureVnetSite#metadata}
  */
  readonly metadata: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata;
  /**
  * other_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#other_subscription AzureVnetSite#other_subscription}
  */
  readonly otherSubscription?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    weight: cdktf.numberToTerraform(struct!.weight),
    metadata: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataToTerraform(struct!.metadata),
    other_subscription: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionToTerraform(struct!.otherSubscription),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataList",
    },
    other_subscription: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionToHclTerraform(struct!.otherSubscription),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._otherSubscription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSubscription = this._otherSubscription?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitId = undefined;
      this._weight = undefined;
      this._metadata.internalValue = undefined;
      this._otherSubscription.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitId = value.circuitId;
      this._weight = value.weight;
      this._metadata.internalValue = value.metadata;
      this._otherSubscription.internalValue = value.otherSubscription;
    }
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // other_subscription - computed: false, optional: true, required: false
  private _otherSubscription = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference(this, "other_subscription");
  public get otherSubscription() {
    return this._otherSubscription;
  }
  public putOtherSubscription(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription) {
    this._otherSubscription.internalValue = value;
  }
  public resetOtherSubscription() {
    this._otherSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSubscriptionInput() {
    return this._otherSubscription.internalValue;
  }
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOutputReference {
    return new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    subnet: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto = undefined;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto = value.auto;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    subnet: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto = undefined;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto = value.auto;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#cloudlink_network_name AzureVnetSite#cloudlink_network_name}
  */
  readonly cloudlinkNetworkName: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudlink_network_name: cdktf.stringToTerraform(struct!.cloudlinkNetworkName),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudlink_network_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudlinkNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudlinkNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudlinkNetworkName = this._cloudlinkNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudlinkNetworkName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudlinkNetworkName = value.cloudlinkNetworkName;
    }
  }

  // cloudlink_network_name - computed: false, optional: false, required: true
  private _cloudlinkNetworkName?: string; 
  public get cloudlinkNetworkName() {
    return this.getStringAttribute('cloudlink_network_name');
  }
  public set cloudlinkNetworkName(value: string) {
    this._cloudlinkNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudlinkNetworkNameInput() {
    return this._cloudlinkNetworkName;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#advertise_to_route_server AzureVnetSite#advertise_to_route_server}
  */
  readonly advertiseToRouteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#auto_asn AzureVnetSite#auto_asn}
  */
  readonly autoAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_asn AzureVnetSite#custom_asn}
  */
  readonly customAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#do_not_advertise_to_route_server AzureVnetSite#do_not_advertise_to_route_server}
  */
  readonly doNotAdvertiseToRouteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#site_registration_over_internet AzureVnetSite#site_registration_over_internet}
  */
  readonly siteRegistrationOverInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sku_ergw1az AzureVnetSite#sku_ergw1az}
  */
  readonly skuErgw1Az?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sku_ergw2az AzureVnetSite#sku_ergw2az}
  */
  readonly skuErgw2Az?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sku_high_perf AzureVnetSite#sku_high_perf}
  */
  readonly skuHighPerf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sku_standard AzureVnetSite#sku_standard}
  */
  readonly skuStandard?: boolean | cdktf.IResolvable;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#connections AzureVnetSite#connections}
  */
  readonly connections: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections[] | cdktf.IResolvable;
  /**
  * gateway_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#gateway_subnet AzureVnetSite#gateway_subnet}
  */
  readonly gatewaySubnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet;
  /**
  * route_server_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#route_server_subnet AzureVnetSite#route_server_subnet}
  */
  readonly routeServerSubnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet;
  /**
  * site_registration_over_express_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#site_registration_over_express_route AzureVnetSite#site_registration_over_express_route}
  */
  readonly siteRegistrationOverExpressRoute?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_to_route_server: cdktf.booleanToTerraform(struct!.advertiseToRouteServer),
    auto_asn: cdktf.booleanToTerraform(struct!.autoAsn),
    custom_asn: cdktf.numberToTerraform(struct!.customAsn),
    do_not_advertise_to_route_server: cdktf.booleanToTerraform(struct!.doNotAdvertiseToRouteServer),
    site_registration_over_internet: cdktf.booleanToTerraform(struct!.siteRegistrationOverInternet),
    sku_ergw1az: cdktf.booleanToTerraform(struct!.skuErgw1Az),
    sku_ergw2az: cdktf.booleanToTerraform(struct!.skuErgw2Az),
    sku_high_perf: cdktf.booleanToTerraform(struct!.skuHighPerf),
    sku_standard: cdktf.booleanToTerraform(struct!.skuStandard),
    connections: cdktf.listMapper(azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsToTerraform, true)(struct!.connections),
    gateway_subnet: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetToTerraform(struct!.gatewaySubnet),
    route_server_subnet: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetToTerraform(struct!.routeServerSubnet),
    site_registration_over_express_route: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteToTerraform(struct!.siteRegistrationOverExpressRoute),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_to_route_server: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseToRouteServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_asn: {
      value: cdktf.booleanToHclTerraform(struct!.autoAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_asn: {
      value: cdktf.numberToHclTerraform(struct!.customAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    do_not_advertise_to_route_server: {
      value: cdktf.booleanToHclTerraform(struct!.doNotAdvertiseToRouteServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_registration_over_internet: {
      value: cdktf.booleanToHclTerraform(struct!.siteRegistrationOverInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sku_ergw1az: {
      value: cdktf.booleanToHclTerraform(struct!.skuErgw1Az),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sku_ergw2az: {
      value: cdktf.booleanToHclTerraform(struct!.skuErgw2Az),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sku_high_perf: {
      value: cdktf.booleanToHclTerraform(struct!.skuHighPerf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sku_standard: {
      value: cdktf.booleanToHclTerraform(struct!.skuStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connections: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsToHclTerraform, true)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsList",
    },
    gateway_subnet: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetToHclTerraform(struct!.gatewaySubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetList",
    },
    route_server_subnet: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetToHclTerraform(struct!.routeServerSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetList",
    },
    site_registration_over_express_route: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteToHclTerraform(struct!.siteRegistrationOverExpressRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseToRouteServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseToRouteServer = this._advertiseToRouteServer;
    }
    if (this._autoAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoAsn = this._autoAsn;
    }
    if (this._customAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAsn = this._customAsn;
    }
    if (this._doNotAdvertiseToRouteServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotAdvertiseToRouteServer = this._doNotAdvertiseToRouteServer;
    }
    if (this._siteRegistrationOverInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRegistrationOverInternet = this._siteRegistrationOverInternet;
    }
    if (this._skuErgw1Az !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuErgw1Az = this._skuErgw1Az;
    }
    if (this._skuErgw2Az !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuErgw2Az = this._skuErgw2Az;
    }
    if (this._skuHighPerf !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuHighPerf = this._skuHighPerf;
    }
    if (this._skuStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.skuStandard = this._skuStandard;
    }
    if (this._connections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connections = this._connections?.internalValue;
    }
    if (this._gatewaySubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewaySubnet = this._gatewaySubnet?.internalValue;
    }
    if (this._routeServerSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerSubnet = this._routeServerSubnet?.internalValue;
    }
    if (this._siteRegistrationOverExpressRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteRegistrationOverExpressRoute = this._siteRegistrationOverExpressRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseToRouteServer = undefined;
      this._autoAsn = undefined;
      this._customAsn = undefined;
      this._doNotAdvertiseToRouteServer = undefined;
      this._siteRegistrationOverInternet = undefined;
      this._skuErgw1Az = undefined;
      this._skuErgw2Az = undefined;
      this._skuHighPerf = undefined;
      this._skuStandard = undefined;
      this._connections.internalValue = undefined;
      this._gatewaySubnet.internalValue = undefined;
      this._routeServerSubnet.internalValue = undefined;
      this._siteRegistrationOverExpressRoute.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseToRouteServer = value.advertiseToRouteServer;
      this._autoAsn = value.autoAsn;
      this._customAsn = value.customAsn;
      this._doNotAdvertiseToRouteServer = value.doNotAdvertiseToRouteServer;
      this._siteRegistrationOverInternet = value.siteRegistrationOverInternet;
      this._skuErgw1Az = value.skuErgw1Az;
      this._skuErgw2Az = value.skuErgw2Az;
      this._skuHighPerf = value.skuHighPerf;
      this._skuStandard = value.skuStandard;
      this._connections.internalValue = value.connections;
      this._gatewaySubnet.internalValue = value.gatewaySubnet;
      this._routeServerSubnet.internalValue = value.routeServerSubnet;
      this._siteRegistrationOverExpressRoute.internalValue = value.siteRegistrationOverExpressRoute;
    }
  }

  // advertise_to_route_server - computed: false, optional: true, required: false
  private _advertiseToRouteServer?: boolean | cdktf.IResolvable; 
  public get advertiseToRouteServer() {
    return this.getBooleanAttribute('advertise_to_route_server');
  }
  public set advertiseToRouteServer(value: boolean | cdktf.IResolvable) {
    this._advertiseToRouteServer = value;
  }
  public resetAdvertiseToRouteServer() {
    this._advertiseToRouteServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseToRouteServerInput() {
    return this._advertiseToRouteServer;
  }

  // auto_asn - computed: false, optional: true, required: false
  private _autoAsn?: boolean | cdktf.IResolvable; 
  public get autoAsn() {
    return this.getBooleanAttribute('auto_asn');
  }
  public set autoAsn(value: boolean | cdktf.IResolvable) {
    this._autoAsn = value;
  }
  public resetAutoAsn() {
    this._autoAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsnInput() {
    return this._autoAsn;
  }

  // custom_asn - computed: false, optional: true, required: false
  private _customAsn?: number; 
  public get customAsn() {
    return this.getNumberAttribute('custom_asn');
  }
  public set customAsn(value: number) {
    this._customAsn = value;
  }
  public resetCustomAsn() {
    this._customAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAsnInput() {
    return this._customAsn;
  }

  // do_not_advertise_to_route_server - computed: false, optional: true, required: false
  private _doNotAdvertiseToRouteServer?: boolean | cdktf.IResolvable; 
  public get doNotAdvertiseToRouteServer() {
    return this.getBooleanAttribute('do_not_advertise_to_route_server');
  }
  public set doNotAdvertiseToRouteServer(value: boolean | cdktf.IResolvable) {
    this._doNotAdvertiseToRouteServer = value;
  }
  public resetDoNotAdvertiseToRouteServer() {
    this._doNotAdvertiseToRouteServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotAdvertiseToRouteServerInput() {
    return this._doNotAdvertiseToRouteServer;
  }

  // site_registration_over_internet - computed: false, optional: true, required: false
  private _siteRegistrationOverInternet?: boolean | cdktf.IResolvable; 
  public get siteRegistrationOverInternet() {
    return this.getBooleanAttribute('site_registration_over_internet');
  }
  public set siteRegistrationOverInternet(value: boolean | cdktf.IResolvable) {
    this._siteRegistrationOverInternet = value;
  }
  public resetSiteRegistrationOverInternet() {
    this._siteRegistrationOverInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRegistrationOverInternetInput() {
    return this._siteRegistrationOverInternet;
  }

  // sku_ergw1az - computed: false, optional: true, required: false
  private _skuErgw1Az?: boolean | cdktf.IResolvable; 
  public get skuErgw1Az() {
    return this.getBooleanAttribute('sku_ergw1az');
  }
  public set skuErgw1Az(value: boolean | cdktf.IResolvable) {
    this._skuErgw1Az = value;
  }
  public resetSkuErgw1Az() {
    this._skuErgw1Az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuErgw1AzInput() {
    return this._skuErgw1Az;
  }

  // sku_ergw2az - computed: false, optional: true, required: false
  private _skuErgw2Az?: boolean | cdktf.IResolvable; 
  public get skuErgw2Az() {
    return this.getBooleanAttribute('sku_ergw2az');
  }
  public set skuErgw2Az(value: boolean | cdktf.IResolvable) {
    this._skuErgw2Az = value;
  }
  public resetSkuErgw2Az() {
    this._skuErgw2Az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuErgw2AzInput() {
    return this._skuErgw2Az;
  }

  // sku_high_perf - computed: false, optional: true, required: false
  private _skuHighPerf?: boolean | cdktf.IResolvable; 
  public get skuHighPerf() {
    return this.getBooleanAttribute('sku_high_perf');
  }
  public set skuHighPerf(value: boolean | cdktf.IResolvable) {
    this._skuHighPerf = value;
  }
  public resetSkuHighPerf() {
    this._skuHighPerf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuHighPerfInput() {
    return this._skuHighPerf;
  }

  // sku_standard - computed: false, optional: true, required: false
  private _skuStandard?: boolean | cdktf.IResolvable; 
  public get skuStandard() {
    return this.getBooleanAttribute('sku_standard');
  }
  public set skuStandard(value: boolean | cdktf.IResolvable) {
    this._skuStandard = value;
  }
  public resetSkuStandard() {
    this._skuStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skuStandardInput() {
    return this._skuStandard;
  }

  // connections - computed: false, optional: false, required: true
  private _connections = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // gateway_subnet - computed: false, optional: true, required: false
  private _gatewaySubnet = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetOutputReference(this, "gateway_subnet");
  public get gatewaySubnet() {
    return this._gatewaySubnet;
  }
  public putGatewaySubnet(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet) {
    this._gatewaySubnet.internalValue = value;
  }
  public resetGatewaySubnet() {
    this._gatewaySubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySubnetInput() {
    return this._gatewaySubnet.internalValue;
  }

  // route_server_subnet - computed: false, optional: true, required: false
  private _routeServerSubnet = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetOutputReference(this, "route_server_subnet");
  public get routeServerSubnet() {
    return this._routeServerSubnet;
  }
  public putRouteServerSubnet(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet) {
    this._routeServerSubnet.internalValue = value;
  }
  public resetRouteServerSubnet() {
    this._routeServerSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerSubnetInput() {
    return this._routeServerSubnet.internalValue;
  }

  // site_registration_over_express_route - computed: false, optional: true, required: false
  private _siteRegistrationOverExpressRoute = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference(this, "site_registration_over_express_route");
  public get siteRegistrationOverExpressRoute() {
    return this._siteRegistrationOverExpressRoute;
  }
  public putSiteRegistrationOverExpressRoute(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledSiteRegistrationOverExpressRoute) {
    this._siteRegistrationOverExpressRoute.internalValue = value;
  }
  public resetSiteRegistrationOverExpressRoute() {
    this._siteRegistrationOverExpressRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteRegistrationOverExpressRouteInput() {
    return this._siteRegistrationOverExpressRoute.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#f5_orchestrated_routing AzureVnetSite#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#manual_routing AzureVnetSite#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#resource_group AzureVnetSite#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_name AzureVnetSite#vnet_name}
  */
  readonly vnetName: string;
}

export function azureVnetSiteIngressEgressGwArHubSpokeVnetsVnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnetOutputReference | AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_orchestrated_routing: cdktf.booleanToTerraform(struct!.f5OrchestratedRouting),
    manual_routing: cdktf.booleanToTerraform(struct!.manualRouting),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
  }
}


export function azureVnetSiteIngressEgressGwArHubSpokeVnetsVnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnetOutputReference | AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_orchestrated_routing: {
      value: cdktf.booleanToHclTerraform(struct!.f5OrchestratedRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_routing: {
      value: cdktf.booleanToHclTerraform(struct!.manualRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5OrchestratedRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5OrchestratedRouting = this._f5OrchestratedRouting;
    }
    if (this._manualRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRouting = this._manualRouting;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5OrchestratedRouting = undefined;
      this._manualRouting = undefined;
      this._resourceGroup = undefined;
      this._vnetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5OrchestratedRouting = value.f5OrchestratedRouting;
      this._manualRouting = value.manualRouting;
      this._resourceGroup = value.resourceGroup;
      this._vnetName = value.vnetName;
    }
  }

  // f5_orchestrated_routing - computed: false, optional: true, required: false
  private _f5OrchestratedRouting?: boolean | cdktf.IResolvable; 
  public get f5OrchestratedRouting() {
    return this.getBooleanAttribute('f5_orchestrated_routing');
  }
  public set f5OrchestratedRouting(value: boolean | cdktf.IResolvable) {
    this._f5OrchestratedRouting = value;
  }
  public resetF5OrchestratedRouting() {
    this._f5OrchestratedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5OrchestratedRoutingInput() {
    return this._f5OrchestratedRouting;
  }

  // manual_routing - computed: false, optional: true, required: false
  private _manualRouting?: boolean | cdktf.IResolvable; 
  public get manualRouting() {
    return this.getBooleanAttribute('manual_routing');
  }
  public set manualRouting(value: boolean | cdktf.IResolvable) {
    this._manualRouting = value;
  }
  public resetManualRouting() {
    this._manualRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRoutingInput() {
    return this._manualRouting;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // vnet_name - computed: false, optional: false, required: true
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubSpokeVnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#manual AzureVnetSite#manual}
  */
  readonly manual?: boolean | cdktf.IResolvable;
  /**
  * vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet AzureVnetSite#vnet}
  */
  readonly vnet?: AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet;
}

export function azureVnetSiteIngressEgressGwArHubSpokeVnetsToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubSpokeVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    manual: cdktf.booleanToTerraform(struct!.manual),
    vnet: azureVnetSiteIngressEgressGwArHubSpokeVnetsVnetToTerraform(struct!.vnet),
  }
}


export function azureVnetSiteIngressEgressGwArHubSpokeVnetsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubSpokeVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    manual: {
      value: cdktf.booleanToHclTerraform(struct!.manual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet: {
      value: azureVnetSiteIngressEgressGwArHubSpokeVnetsVnetToHclTerraform(struct!.vnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubSpokeVnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubSpokeVnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._manual !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual;
    }
    if (this._vnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubSpokeVnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._labels = undefined;
      this._manual = undefined;
      this._vnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._labels = value.labels;
      this._manual = value.manual;
      this._vnet.internalValue = value.vnet;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
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

  // manual - computed: false, optional: true, required: false
  private _manual?: boolean | cdktf.IResolvable; 
  public get manual() {
    return this.getBooleanAttribute('manual');
  }
  public set manual(value: boolean | cdktf.IResolvable) {
    this._manual = value;
  }
  public resetManual() {
    this._manual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual;
  }

  // vnet - computed: false, optional: true, required: false
  private _vnet = new AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnetOutputReference(this, "vnet");
  public get vnet() {
    return this._vnet;
  }
  public putVnet(value: AzureVnetSiteIngressEgressGwArHubSpokeVnetsVnet) {
    this._vnet.internalValue = value;
  }
  public resetVnet() {
    this._vnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet.internalValue;
  }
}

export class AzureVnetSiteIngressEgressGwArHubSpokeVnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArHubSpokeVnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArHubSpokeVnetsOutputReference {
    return new AzureVnetSiteIngressEgressGwArHubSpokeVnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArHub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#express_route_disabled AzureVnetSite#express_route_disabled}
  */
  readonly expressRouteDisabled?: boolean | cdktf.IResolvable;
  /**
  * express_route_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#express_route_enabled AzureVnetSite#express_route_enabled}
  */
  readonly expressRouteEnabled?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled;
  /**
  * spoke_vnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#spoke_vnets AzureVnetSite#spoke_vnets}
  */
  readonly spokeVnets?: AzureVnetSiteIngressEgressGwArHubSpokeVnets[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArHubToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubOutputReference | AzureVnetSiteIngressEgressGwArHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    express_route_disabled: cdktf.booleanToTerraform(struct!.expressRouteDisabled),
    express_route_enabled: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledToTerraform(struct!.expressRouteEnabled),
    spoke_vnets: cdktf.listMapper(azureVnetSiteIngressEgressGwArHubSpokeVnetsToTerraform, true)(struct!.spokeVnets),
  }
}


export function azureVnetSiteIngressEgressGwArHubToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubOutputReference | AzureVnetSiteIngressEgressGwArHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    express_route_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.expressRouteDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    express_route_enabled: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledToHclTerraform(struct!.expressRouteEnabled),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledList",
    },
    spoke_vnets: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArHubSpokeVnetsToHclTerraform, true)(struct!.spokeVnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubSpokeVnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressRouteDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressRouteDisabled = this._expressRouteDisabled;
    }
    if (this._expressRouteEnabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressRouteEnabled = this._expressRouteEnabled?.internalValue;
    }
    if (this._spokeVnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spokeVnets = this._spokeVnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressRouteDisabled = undefined;
      this._expressRouteEnabled.internalValue = undefined;
      this._spokeVnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressRouteDisabled = value.expressRouteDisabled;
      this._expressRouteEnabled.internalValue = value.expressRouteEnabled;
      this._spokeVnets.internalValue = value.spokeVnets;
    }
  }

  // express_route_disabled - computed: false, optional: true, required: false
  private _expressRouteDisabled?: boolean | cdktf.IResolvable; 
  public get expressRouteDisabled() {
    return this.getBooleanAttribute('express_route_disabled');
  }
  public set expressRouteDisabled(value: boolean | cdktf.IResolvable) {
    this._expressRouteDisabled = value;
  }
  public resetExpressRouteDisabled() {
    this._expressRouteDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteDisabledInput() {
    return this._expressRouteDisabled;
  }

  // express_route_enabled - computed: false, optional: true, required: false
  private _expressRouteEnabled = new AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledOutputReference(this, "express_route_enabled");
  public get expressRouteEnabled() {
    return this._expressRouteEnabled;
  }
  public putExpressRouteEnabled(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled) {
    this._expressRouteEnabled.internalValue = value;
  }
  public resetExpressRouteEnabled() {
    this._expressRouteEnabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteEnabledInput() {
    return this._expressRouteEnabled.internalValue;
  }

  // spoke_vnets - computed: false, optional: true, required: false
  private _spokeVnets = new AzureVnetSiteIngressEgressGwArHubSpokeVnetsList(this, "spoke_vnets", false);
  public get spokeVnets() {
    return this._spokeVnets;
  }
  public putSpokeVnets(value: AzureVnetSiteIngressEgressGwArHubSpokeVnets[] | cdktf.IResolvable) {
    this._spokeVnets.internalValue = value;
  }
  public resetSpokeVnets() {
    this._spokeVnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeVnetsInput() {
    return this._spokeVnets.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
  */
  readonly nexthopAddress?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // interface - computed: false, optional: true, required: false
  private _interface = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#attrs AzureVnetSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop AzureVnetSite#nexthop}
  */
  readonly nexthop?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
  */
  readonly subnets: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
  */
  readonly customStaticRoute?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructOutputReference {
    return new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArInsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
  */
  readonly staticRouteList: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArInsideStaticRoutesToTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function azureVnetSiteIngressEgressGwArInsideStaticRoutesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwArInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArInsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArInsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteIngressEgressGwArNodeInsideSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwArNodeInsideSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwArNodeInsideSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeInsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNodeInsideSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNodeInsideSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteIngressEgressGwArNodeOutsideSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwArNodeOutsideSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwArNodeOutsideSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetOutputReference | AzureVnetSiteIngressEgressGwArNodeOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeOutsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNodeOutsideSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNodeOutsideSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#fault_domain AzureVnetSite#fault_domain}
  */
  readonly faultDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#node_number AzureVnetSite#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#update_domain AzureVnetSite#update_domain}
  */
  readonly updateDomain?: number;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#inside_subnet AzureVnetSite#inside_subnet}
  */
  readonly insideSubnet?: AzureVnetSiteIngressEgressGwArNodeInsideSubnet;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#outside_subnet AzureVnetSite#outside_subnet}
  */
  readonly outsideSubnet?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnet;
}

export function azureVnetSiteIngressEgressGwArNodeToTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutputReference | AzureVnetSiteIngressEgressGwArNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fault_domain: cdktf.numberToTerraform(struct!.faultDomain),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    update_domain: cdktf.numberToTerraform(struct!.updateDomain),
    inside_subnet: azureVnetSiteIngressEgressGwArNodeInsideSubnetToTerraform(struct!.insideSubnet),
    outside_subnet: azureVnetSiteIngressEgressGwArNodeOutsideSubnetToTerraform(struct!.outsideSubnet),
  }
}


export function azureVnetSiteIngressEgressGwArNodeToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArNodeOutputReference | AzureVnetSiteIngressEgressGwArNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fault_domain: {
      value: cdktf.numberToHclTerraform(struct!.faultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_domain: {
      value: cdktf.numberToHclTerraform(struct!.updateDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inside_subnet: {
      value: azureVnetSiteIngressEgressGwArNodeInsideSubnetToHclTerraform(struct!.insideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeInsideSubnetList",
    },
    outside_subnet: {
      value: azureVnetSiteIngressEgressGwArNodeOutsideSubnetToHclTerraform(struct!.outsideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeOutsideSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._updateDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDomain = this._updateDomain;
    }
    if (this._insideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnet = this._insideSubnet?.internalValue;
    }
    if (this._outsideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnet = this._outsideSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._faultDomain = undefined;
      this._nodeNumber = undefined;
      this._updateDomain = undefined;
      this._insideSubnet.internalValue = undefined;
      this._outsideSubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._faultDomain = value.faultDomain;
      this._nodeNumber = value.nodeNumber;
      this._updateDomain = value.updateDomain;
      this._insideSubnet.internalValue = value.insideSubnet;
      this._outsideSubnet.internalValue = value.outsideSubnet;
    }
  }

  // fault_domain - computed: false, optional: true, required: false
  private _faultDomain?: number; 
  public get faultDomain() {
    return this.getNumberAttribute('fault_domain');
  }
  public set faultDomain(value: number) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // update_domain - computed: false, optional: true, required: false
  private _updateDomain?: number; 
  public get updateDomain() {
    return this.getNumberAttribute('update_domain');
  }
  public set updateDomain(value: number) {
    this._updateDomain = value;
  }
  public resetUpdateDomain() {
    this._updateDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDomainInput() {
    return this._updateDomain;
  }

  // inside_subnet - computed: false, optional: true, required: false
  private _insideSubnet = new AzureVnetSiteIngressEgressGwArNodeInsideSubnetOutputReference(this, "inside_subnet");
  public get insideSubnet() {
    return this._insideSubnet;
  }
  public putInsideSubnet(value: AzureVnetSiteIngressEgressGwArNodeInsideSubnet) {
    this._insideSubnet.internalValue = value;
  }
  public resetInsideSubnet() {
    this._insideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetInput() {
    return this._insideSubnet.internalValue;
  }

  // outside_subnet - computed: false, optional: true, required: false
  private _outsideSubnet = new AzureVnetSiteIngressEgressGwArNodeOutsideSubnetOutputReference(this, "outside_subnet");
  public get outsideSubnet() {
    return this._outsideSubnet;
  }
  public putOutsideSubnet(value: AzureVnetSiteIngressEgressGwArNodeOutsideSubnet) {
    this._outsideSubnet.internalValue = value;
  }
  public resetOutsideSubnet() {
    this._outsideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetInput() {
    return this._outsideSubnet.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
  */
  readonly nexthopAddress?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // interface - computed: false, optional: true, required: false
  private _interface = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#attrs AzureVnetSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop AzureVnetSite#nexthop}
  */
  readonly nexthop?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
  */
  readonly subnets: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
  */
  readonly customStaticRoute?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
  */
  readonly staticRouteList: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function azureVnetSiteIngressEgressGwArOutsideStaticRoutesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwArOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#jumbo AzureVnetSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_jumbo AzureVnetSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function azureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#perf_mode_l7_enhanced AzureVnetSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#perf_mode_l3_enhanced AzureVnetSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced;
}

export function azureVnetSiteIngressEgressGwArPerformanceEnhancementModeToTerraform(struct?: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: azureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function azureVnetSiteIngressEgressGwArPerformanceEnhancementModeToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: azureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AzureVnetSiteIngressEgressGwArPerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwAr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#azure_certified_hw AzureVnetSite#azure_certified_hw}
  */
  readonly azureCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#forward_proxy_allow_all AzureVnetSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_dc_cluster_group AzureVnetSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_forward_proxy AzureVnetSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_global_network AzureVnetSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_inside_static_routes AzureVnetSite#no_inside_static_routes}
  */
  readonly noInsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_network_policy AzureVnetSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_outside_static_routes AzureVnetSite#no_outside_static_routes}
  */
  readonly noOutsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#not_hub AzureVnetSite#not_hub}
  */
  readonly notHub?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sm_connection_public_ip AzureVnetSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sm_connection_pvt_ip AzureVnetSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * accelerated_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#accelerated_networking AzureVnetSite#accelerated_networking}
  */
  readonly acceleratedNetworking?: AzureVnetSiteIngressEgressGwArAcceleratedNetworking;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_enhanced_firewall_policies AzureVnetSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_forward_proxy_policies AzureVnetSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_network_policies AzureVnetSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: AzureVnetSiteIngressEgressGwArActiveNetworkPolicies;
  /**
  * dc_cluster_group_inside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#dc_cluster_group_inside_vn AzureVnetSite#dc_cluster_group_inside_vn}
  */
  readonly dcClusterGroupInsideVn?: AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn;
  /**
  * dc_cluster_group_outside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#dc_cluster_group_outside_vn AzureVnetSite#dc_cluster_group_outside_vn}
  */
  readonly dcClusterGroupOutsideVn?: AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_network_list AzureVnetSite#global_network_list}
  */
  readonly globalNetworkList?: AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct;
  /**
  * hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#hub AzureVnetSite#hub}
  */
  readonly hub?: AzureVnetSiteIngressEgressGwArHub;
  /**
  * inside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#inside_static_routes AzureVnetSite#inside_static_routes}
  */
  readonly insideStaticRoutes?: AzureVnetSiteIngressEgressGwArInsideStaticRoutes;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#node AzureVnetSite#node}
  */
  readonly nodeAttribute?: AzureVnetSiteIngressEgressGwArNode;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#outside_static_routes AzureVnetSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: AzureVnetSiteIngressEgressGwArOutsideStaticRoutes;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#performance_enhancement_mode AzureVnetSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode;
}

export function azureVnetSiteIngressEgressGwArToTerraform(struct?: AzureVnetSiteIngressEgressGwArOutputReference | AzureVnetSiteIngressEgressGwAr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_certified_hw: cdktf.stringToTerraform(struct!.azureCertifiedHw),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_inside_static_routes: cdktf.booleanToTerraform(struct!.noInsideStaticRoutes),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    no_outside_static_routes: cdktf.booleanToTerraform(struct!.noOutsideStaticRoutes),
    not_hub: cdktf.booleanToTerraform(struct!.notHub),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    accelerated_networking: azureVnetSiteIngressEgressGwArAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    active_enhanced_firewall_policies: azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: azureVnetSiteIngressEgressGwArActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    dc_cluster_group_inside_vn: azureVnetSiteIngressEgressGwArDcClusterGroupInsideVnToTerraform(struct!.dcClusterGroupInsideVn),
    dc_cluster_group_outside_vn: azureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnToTerraform(struct!.dcClusterGroupOutsideVn),
    global_network_list: azureVnetSiteIngressEgressGwArGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    hub: azureVnetSiteIngressEgressGwArHubToTerraform(struct!.hub),
    inside_static_routes: azureVnetSiteIngressEgressGwArInsideStaticRoutesToTerraform(struct!.insideStaticRoutes),
    node: azureVnetSiteIngressEgressGwArNodeToTerraform(struct!.nodeAttribute),
    outside_static_routes: azureVnetSiteIngressEgressGwArOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
    performance_enhancement_mode: azureVnetSiteIngressEgressGwArPerformanceEnhancementModeToTerraform(struct!.performanceEnhancementMode),
  }
}


export function azureVnetSiteIngressEgressGwArToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArOutputReference | AzureVnetSiteIngressEgressGwAr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.azureCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_inside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noInsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_outside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noOutsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    not_hub: {
      value: cdktf.booleanToHclTerraform(struct!.notHub),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accelerated_networking: {
      value: azureVnetSiteIngressEgressGwArAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArAcceleratedNetworkingList",
    },
    active_enhanced_firewall_policies: {
      value: azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: azureVnetSiteIngressEgressGwArActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesList",
    },
    dc_cluster_group_inside_vn: {
      value: azureVnetSiteIngressEgressGwArDcClusterGroupInsideVnToHclTerraform(struct!.dcClusterGroupInsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVnList",
    },
    dc_cluster_group_outside_vn: {
      value: azureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnToHclTerraform(struct!.dcClusterGroupOutsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnList",
    },
    global_network_list: {
      value: azureVnetSiteIngressEgressGwArGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArGlobalNetworkListStructList",
    },
    hub: {
      value: azureVnetSiteIngressEgressGwArHubToHclTerraform(struct!.hub),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubList",
    },
    inside_static_routes: {
      value: azureVnetSiteIngressEgressGwArInsideStaticRoutesToHclTerraform(struct!.insideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArInsideStaticRoutesList",
    },
    node: {
      value: azureVnetSiteIngressEgressGwArNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArNodeList",
    },
    outside_static_routes: {
      value: azureVnetSiteIngressEgressGwArOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArOutsideStaticRoutesList",
    },
    performance_enhancement_mode: {
      value: azureVnetSiteIngressEgressGwArPerformanceEnhancementModeToHclTerraform(struct!.performanceEnhancementMode),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArPerformanceEnhancementModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCertifiedHw = this._azureCertifiedHw;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noInsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInsideStaticRoutes = this._noInsideStaticRoutes;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._noOutsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOutsideStaticRoutes = this._noOutsideStaticRoutes;
    }
    if (this._notHub !== undefined) {
      hasAnyValues = true;
      internalValueResult.notHub = this._notHub;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._acceleratedNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking?.internalValue;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    if (this._dcClusterGroupInsideVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupInsideVn = this._dcClusterGroupInsideVn?.internalValue;
    }
    if (this._dcClusterGroupOutsideVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroupOutsideVn = this._dcClusterGroupOutsideVn?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._hub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hub = this._hub?.internalValue;
    }
    if (this._insideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideStaticRoutes = this._insideStaticRoutes?.internalValue;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._outsideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideStaticRoutes = this._outsideStaticRoutes?.internalValue;
    }
    if (this._performanceEnhancementMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceEnhancementMode = this._performanceEnhancementMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwAr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCertifiedHw = undefined;
      this._forwardProxyAllowAll = undefined;
      this._noDcClusterGroup = undefined;
      this._noForwardProxy = undefined;
      this._noGlobalNetwork = undefined;
      this._noInsideStaticRoutes = undefined;
      this._noNetworkPolicy = undefined;
      this._noOutsideStaticRoutes = undefined;
      this._notHub = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._acceleratedNetworking.internalValue = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
      this._dcClusterGroupInsideVn.internalValue = undefined;
      this._dcClusterGroupOutsideVn.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._hub.internalValue = undefined;
      this._insideStaticRoutes.internalValue = undefined;
      this._node.internalValue = undefined;
      this._outsideStaticRoutes.internalValue = undefined;
      this._performanceEnhancementMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCertifiedHw = value.azureCertifiedHw;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noForwardProxy = value.noForwardProxy;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noInsideStaticRoutes = value.noInsideStaticRoutes;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._noOutsideStaticRoutes = value.noOutsideStaticRoutes;
      this._notHub = value.notHub;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._acceleratedNetworking.internalValue = value.acceleratedNetworking;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
      this._dcClusterGroupInsideVn.internalValue = value.dcClusterGroupInsideVn;
      this._dcClusterGroupOutsideVn.internalValue = value.dcClusterGroupOutsideVn;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._hub.internalValue = value.hub;
      this._insideStaticRoutes.internalValue = value.insideStaticRoutes;
      this._node.internalValue = value.nodeAttribute;
      this._outsideStaticRoutes.internalValue = value.outsideStaticRoutes;
      this._performanceEnhancementMode.internalValue = value.performanceEnhancementMode;
    }
  }

  // azure_certified_hw - computed: false, optional: false, required: true
  private _azureCertifiedHw?: string; 
  public get azureCertifiedHw() {
    return this.getStringAttribute('azure_certified_hw');
  }
  public set azureCertifiedHw(value: string) {
    this._azureCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCertifiedHwInput() {
    return this._azureCertifiedHw;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_inside_static_routes - computed: false, optional: true, required: false
  private _noInsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noInsideStaticRoutes() {
    return this.getBooleanAttribute('no_inside_static_routes');
  }
  public set noInsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noInsideStaticRoutes = value;
  }
  public resetNoInsideStaticRoutes() {
    this._noInsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInsideStaticRoutesInput() {
    return this._noInsideStaticRoutes;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // no_outside_static_routes - computed: false, optional: true, required: false
  private _noOutsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noOutsideStaticRoutes() {
    return this.getBooleanAttribute('no_outside_static_routes');
  }
  public set noOutsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noOutsideStaticRoutes = value;
  }
  public resetNoOutsideStaticRoutes() {
    this._noOutsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOutsideStaticRoutesInput() {
    return this._noOutsideStaticRoutes;
  }

  // not_hub - computed: false, optional: true, required: false
  private _notHub?: boolean | cdktf.IResolvable; 
  public get notHub() {
    return this.getBooleanAttribute('not_hub');
  }
  public set notHub(value: boolean | cdktf.IResolvable) {
    this._notHub = value;
  }
  public resetNotHub() {
    this._notHub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notHubInput() {
    return this._notHub;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking = new AzureVnetSiteIngressEgressGwArAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: AzureVnetSiteIngressEgressGwArAcceleratedNetworking) {
    this._acceleratedNetworking.internalValue = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking.internalValue;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: AzureVnetSiteIngressEgressGwArActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // dc_cluster_group_inside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupInsideVn = new AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVnOutputReference(this, "dc_cluster_group_inside_vn");
  public get dcClusterGroupInsideVn() {
    return this._dcClusterGroupInsideVn;
  }
  public putDcClusterGroupInsideVn(value: AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn) {
    this._dcClusterGroupInsideVn.internalValue = value;
  }
  public resetDcClusterGroupInsideVn() {
    this._dcClusterGroupInsideVn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInsideVnInput() {
    return this._dcClusterGroupInsideVn.internalValue;
  }

  // dc_cluster_group_outside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupOutsideVn = new AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnOutputReference(this, "dc_cluster_group_outside_vn");
  public get dcClusterGroupOutsideVn() {
    return this._dcClusterGroupOutsideVn;
  }
  public putDcClusterGroupOutsideVn(value: AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn) {
    this._dcClusterGroupOutsideVn.internalValue = value;
  }
  public resetDcClusterGroupOutsideVn() {
    this._dcClusterGroupOutsideVn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupOutsideVnInput() {
    return this._dcClusterGroupOutsideVn.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new AzureVnetSiteIngressEgressGwArGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // hub - computed: false, optional: true, required: false
  private _hub = new AzureVnetSiteIngressEgressGwArHubOutputReference(this, "hub");
  public get hub() {
    return this._hub;
  }
  public putHub(value: AzureVnetSiteIngressEgressGwArHub) {
    this._hub.internalValue = value;
  }
  public resetHub() {
    this._hub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubInput() {
    return this._hub.internalValue;
  }

  // inside_static_routes - computed: false, optional: true, required: false
  private _insideStaticRoutes = new AzureVnetSiteIngressEgressGwArInsideStaticRoutesOutputReference(this, "inside_static_routes");
  public get insideStaticRoutes() {
    return this._insideStaticRoutes;
  }
  public putInsideStaticRoutes(value: AzureVnetSiteIngressEgressGwArInsideStaticRoutes) {
    this._insideStaticRoutes.internalValue = value;
  }
  public resetInsideStaticRoutes() {
    this._insideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStaticRoutesInput() {
    return this._insideStaticRoutes.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new AzureVnetSiteIngressEgressGwArNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: AzureVnetSiteIngressEgressGwArNode) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // outside_static_routes - computed: false, optional: true, required: false
  private _outsideStaticRoutes = new AzureVnetSiteIngressEgressGwArOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: AzureVnetSiteIngressEgressGwArOutsideStaticRoutes) {
    this._outsideStaticRoutes.internalValue = value;
  }
  public resetOutsideStaticRoutes() {
    this._outsideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideStaticRoutesInput() {
    return this._outsideStaticRoutes.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new AzureVnetSiteIngressEgressGwArPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AzureVnetSiteIngressEgressGwArPerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }
}
export interface AzureVnetSiteIngressGwAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable AzureVnetSite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressGwAcceleratedNetworkingToTerraform(struct?: AzureVnetSiteIngressGwAcceleratedNetworkingOutputReference | AzureVnetSiteIngressGwAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function azureVnetSiteIngressGwAcceleratedNetworkingToHclTerraform(struct?: AzureVnetSiteIngressGwAcceleratedNetworkingOutputReference | AzureVnetSiteIngressGwAcceleratedNetworking): any {
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

export class AzureVnetSiteIngressGwAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwAcceleratedNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwAcceleratedNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
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

  // enable - computed: false, optional: true, required: false
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
export interface AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressGwAzNodesLocalSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetOutputReference | AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressGwAzNodesLocalSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetOutputReference | AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference | AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference | AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteIngressGwAzNodesLocalSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam;
}

export function azureVnetSiteIngressGwAzNodesLocalSubnetToTerraform(struct?: AzureVnetSiteIngressGwAzNodesLocalSubnetOutputReference | AzureVnetSiteIngressGwAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteIngressGwAzNodesLocalSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressGwAzNodesLocalSubnetToHclTerraform(struct?: AzureVnetSiteIngressGwAzNodesLocalSubnetOutputReference | AzureVnetSiteIngressGwAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteIngressGwAzNodesLocalSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwAzNodesLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwAzNodesLocalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwAzNodesLocalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressGwAzNodesLocalSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteIngressGwAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#azure_az AzureVnetSite#azure_az}
  */
  readonly azureAz: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disk_size AzureVnetSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#local_subnet AzureVnetSite#local_subnet}
  */
  readonly localSubnet?: AzureVnetSiteIngressGwAzNodesLocalSubnet;
}

export function azureVnetSiteIngressGwAzNodesToTerraform(struct?: AzureVnetSiteIngressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_az: cdktf.stringToTerraform(struct!.azureAz),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    local_subnet: azureVnetSiteIngressGwAzNodesLocalSubnetToTerraform(struct!.localSubnet),
  }
}


export function azureVnetSiteIngressGwAzNodesToHclTerraform(struct?: AzureVnetSiteIngressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_az: {
      value: cdktf.stringToHclTerraform(struct!.azureAz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_subnet: {
      value: azureVnetSiteIngressGwAzNodesLocalSubnetToHclTerraform(struct!.localSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwAzNodesLocalSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressGwAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAz = this._azureAz;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._localSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnet = this._localSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAz = undefined;
      this._diskSize = undefined;
      this._localSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAz = value.azureAz;
      this._diskSize = value.diskSize;
      this._localSubnet.internalValue = value.localSubnet;
    }
  }

  // azure_az - computed: false, optional: false, required: true
  private _azureAz?: string; 
  public get azureAz() {
    return this.getStringAttribute('azure_az');
  }
  public set azureAz(value: string) {
    this._azureAz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAzInput() {
    return this._azureAz;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // local_subnet - computed: false, optional: true, required: false
  private _localSubnet = new AzureVnetSiteIngressGwAzNodesLocalSubnetOutputReference(this, "local_subnet");
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: AzureVnetSiteIngressGwAzNodesLocalSubnet) {
    this._localSubnet.internalValue = value;
  }
  public resetLocalSubnet() {
    this._localSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet.internalValue;
  }
}

export class AzureVnetSiteIngressGwAzNodesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressGwAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressGwAzNodesOutputReference {
    return new AzureVnetSiteIngressGwAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#jumbo AzureVnetSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_jumbo AzureVnetSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function azureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface AzureVnetSiteIngressGwPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#perf_mode_l7_enhanced AzureVnetSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#perf_mode_l3_enhanced AzureVnetSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced;
}

export function azureVnetSiteIngressGwPerformanceEnhancementModeToTerraform(struct?: AzureVnetSiteIngressGwPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: azureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function azureVnetSiteIngressGwPerformanceEnhancementModeToHclTerraform(struct?: AzureVnetSiteIngressGwPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: azureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwPerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwPerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AzureVnetSiteIngressGwPerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface AzureVnetSiteIngressGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#azure_certified_hw AzureVnetSite#azure_certified_hw}
  */
  readonly azureCertifiedHw: string;
  /**
  * accelerated_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#accelerated_networking AzureVnetSite#accelerated_networking}
  */
  readonly acceleratedNetworking?: AzureVnetSiteIngressGwAcceleratedNetworking;
  /**
  * az_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#az_nodes AzureVnetSite#az_nodes}
  */
  readonly azNodes: AzureVnetSiteIngressGwAzNodes[] | cdktf.IResolvable;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#performance_enhancement_mode AzureVnetSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AzureVnetSiteIngressGwPerformanceEnhancementMode;
}

export function azureVnetSiteIngressGwToTerraform(struct?: AzureVnetSiteIngressGwOutputReference | AzureVnetSiteIngressGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_certified_hw: cdktf.stringToTerraform(struct!.azureCertifiedHw),
    accelerated_networking: azureVnetSiteIngressGwAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    az_nodes: cdktf.listMapper(azureVnetSiteIngressGwAzNodesToTerraform, true)(struct!.azNodes),
    performance_enhancement_mode: azureVnetSiteIngressGwPerformanceEnhancementModeToTerraform(struct!.performanceEnhancementMode),
  }
}


export function azureVnetSiteIngressGwToHclTerraform(struct?: AzureVnetSiteIngressGwOutputReference | AzureVnetSiteIngressGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.azureCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accelerated_networking: {
      value: azureVnetSiteIngressGwAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwAcceleratedNetworkingList",
    },
    az_nodes: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressGwAzNodesToHclTerraform, true)(struct!.azNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwAzNodesList",
    },
    performance_enhancement_mode: {
      value: azureVnetSiteIngressGwPerformanceEnhancementModeToHclTerraform(struct!.performanceEnhancementMode),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwPerformanceEnhancementModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCertifiedHw = this._azureCertifiedHw;
    }
    if (this._acceleratedNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking?.internalValue;
    }
    if (this._azNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azNodes = this._azNodes?.internalValue;
    }
    if (this._performanceEnhancementMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceEnhancementMode = this._performanceEnhancementMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCertifiedHw = undefined;
      this._acceleratedNetworking.internalValue = undefined;
      this._azNodes.internalValue = undefined;
      this._performanceEnhancementMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCertifiedHw = value.azureCertifiedHw;
      this._acceleratedNetworking.internalValue = value.acceleratedNetworking;
      this._azNodes.internalValue = value.azNodes;
      this._performanceEnhancementMode.internalValue = value.performanceEnhancementMode;
    }
  }

  // azure_certified_hw - computed: false, optional: false, required: true
  private _azureCertifiedHw?: string; 
  public get azureCertifiedHw() {
    return this.getStringAttribute('azure_certified_hw');
  }
  public set azureCertifiedHw(value: string) {
    this._azureCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCertifiedHwInput() {
    return this._azureCertifiedHw;
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking = new AzureVnetSiteIngressGwAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: AzureVnetSiteIngressGwAcceleratedNetworking) {
    this._acceleratedNetworking.internalValue = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking.internalValue;
  }

  // az_nodes - computed: false, optional: false, required: true
  private _azNodes = new AzureVnetSiteIngressGwAzNodesList(this, "az_nodes", false);
  public get azNodes() {
    return this._azNodes;
  }
  public putAzNodes(value: AzureVnetSiteIngressGwAzNodes[] | cdktf.IResolvable) {
    this._azNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNodesInput() {
    return this._azNodes.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new AzureVnetSiteIngressGwPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AzureVnetSiteIngressGwPerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }
}
export interface AzureVnetSiteIngressGwArAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable AzureVnetSite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressGwArAcceleratedNetworkingToTerraform(struct?: AzureVnetSiteIngressGwArAcceleratedNetworkingOutputReference | AzureVnetSiteIngressGwArAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function azureVnetSiteIngressGwArAcceleratedNetworkingToHclTerraform(struct?: AzureVnetSiteIngressGwArAcceleratedNetworkingOutputReference | AzureVnetSiteIngressGwArAcceleratedNetworking): any {
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

export class AzureVnetSiteIngressGwArAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArAcceleratedNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArAcceleratedNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
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

  // enable - computed: false, optional: true, required: false
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
export interface AzureVnetSiteIngressGwArNodeLocalSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressGwArNodeLocalSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetOutputReference | AzureVnetSiteIngressGwArNodeLocalSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressGwArNodeLocalSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetOutputReference | AzureVnetSiteIngressGwArNodeLocalSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArNodeLocalSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArNodeLocalSubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArNodeLocalSubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressGwArNodeLocalSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParamOutputReference | AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressGwArNodeLocalSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParamOutputReference | AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteIngressGwArNodeLocalSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressGwArNodeLocalSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam;
}

export function azureVnetSiteIngressGwArNodeLocalSubnetToTerraform(struct?: AzureVnetSiteIngressGwArNodeLocalSubnetOutputReference | AzureVnetSiteIngressGwArNodeLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteIngressGwArNodeLocalSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressGwArNodeLocalSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressGwArNodeLocalSubnetToHclTerraform(struct?: AzureVnetSiteIngressGwArNodeLocalSubnetOutputReference | AzureVnetSiteIngressGwArNodeLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteIngressGwArNodeLocalSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArNodeLocalSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressGwArNodeLocalSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArNodeLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArNodeLocalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArNodeLocalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteIngressGwArNodeLocalSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressGwArNodeLocalSubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressGwArNodeLocalSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteIngressGwArNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#fault_domain AzureVnetSite#fault_domain}
  */
  readonly faultDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#node_number AzureVnetSite#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#update_domain AzureVnetSite#update_domain}
  */
  readonly updateDomain?: number;
  /**
  * local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#local_subnet AzureVnetSite#local_subnet}
  */
  readonly localSubnet?: AzureVnetSiteIngressGwArNodeLocalSubnet;
}

export function azureVnetSiteIngressGwArNodeToTerraform(struct?: AzureVnetSiteIngressGwArNodeOutputReference | AzureVnetSiteIngressGwArNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fault_domain: cdktf.numberToTerraform(struct!.faultDomain),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    update_domain: cdktf.numberToTerraform(struct!.updateDomain),
    local_subnet: azureVnetSiteIngressGwArNodeLocalSubnetToTerraform(struct!.localSubnet),
  }
}


export function azureVnetSiteIngressGwArNodeToHclTerraform(struct?: AzureVnetSiteIngressGwArNodeOutputReference | AzureVnetSiteIngressGwArNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fault_domain: {
      value: cdktf.numberToHclTerraform(struct!.faultDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_domain: {
      value: cdktf.numberToHclTerraform(struct!.updateDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_subnet: {
      value: azureVnetSiteIngressGwArNodeLocalSubnetToHclTerraform(struct!.localSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArNodeLocalSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._faultDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomain = this._faultDomain;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._updateDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDomain = this._updateDomain;
    }
    if (this._localSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnet = this._localSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._faultDomain = undefined;
      this._nodeNumber = undefined;
      this._updateDomain = undefined;
      this._localSubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._faultDomain = value.faultDomain;
      this._nodeNumber = value.nodeNumber;
      this._updateDomain = value.updateDomain;
      this._localSubnet.internalValue = value.localSubnet;
    }
  }

  // fault_domain - computed: false, optional: true, required: false
  private _faultDomain?: number; 
  public get faultDomain() {
    return this.getNumberAttribute('fault_domain');
  }
  public set faultDomain(value: number) {
    this._faultDomain = value;
  }
  public resetFaultDomain() {
    this._faultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainInput() {
    return this._faultDomain;
  }

  // node_number - computed: false, optional: false, required: true
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // update_domain - computed: false, optional: true, required: false
  private _updateDomain?: number; 
  public get updateDomain() {
    return this.getNumberAttribute('update_domain');
  }
  public set updateDomain(value: number) {
    this._updateDomain = value;
  }
  public resetUpdateDomain() {
    this._updateDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDomainInput() {
    return this._updateDomain;
  }

  // local_subnet - computed: false, optional: true, required: false
  private _localSubnet = new AzureVnetSiteIngressGwArNodeLocalSubnetOutputReference(this, "local_subnet");
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: AzureVnetSiteIngressGwArNodeLocalSubnet) {
    this._localSubnet.internalValue = value;
  }
  public resetLocalSubnet() {
    this._localSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet.internalValue;
  }
}
export interface AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#jumbo AzureVnetSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_jumbo AzureVnetSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function azureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.jumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_jumbo: {
      value: cdktf.booleanToHclTerraform(struct!.noJumbo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumbo = this._jumbo;
    }
    if (this._noJumbo !== undefined) {
      hasAnyValues = true;
      internalValueResult.noJumbo = this._noJumbo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jumbo = undefined;
      this._noJumbo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jumbo = value.jumbo;
      this._noJumbo = value.noJumbo;
    }
  }

  // jumbo - computed: false, optional: true, required: false
  private _jumbo?: boolean | cdktf.IResolvable; 
  public get jumbo() {
    return this.getBooleanAttribute('jumbo');
  }
  public set jumbo(value: boolean | cdktf.IResolvable) {
    this._jumbo = value;
  }
  public resetJumbo() {
    this._jumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInput() {
    return this._jumbo;
  }

  // no_jumbo - computed: false, optional: true, required: false
  private _noJumbo?: boolean | cdktf.IResolvable; 
  public get noJumbo() {
    return this.getBooleanAttribute('no_jumbo');
  }
  public set noJumbo(value: boolean | cdktf.IResolvable) {
    this._noJumbo = value;
  }
  public resetNoJumbo() {
    this._noJumbo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noJumboInput() {
    return this._noJumbo;
  }
}
export interface AzureVnetSiteIngressGwArPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#perf_mode_l7_enhanced AzureVnetSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#perf_mode_l3_enhanced AzureVnetSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced;
}

export function azureVnetSiteIngressGwArPerformanceEnhancementModeToTerraform(struct?: AzureVnetSiteIngressGwArPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressGwArPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: azureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function azureVnetSiteIngressGwArPerformanceEnhancementModeToHclTerraform(struct?: AzureVnetSiteIngressGwArPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressGwArPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perf_mode_l7_enhanced: {
      value: cdktf.booleanToHclTerraform(struct!.perfModeL7Enhanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    perf_mode_l3_enhanced: {
      value: azureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwArPerformanceEnhancementMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perfModeL7Enhanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL7Enhanced = this._perfModeL7Enhanced;
    }
    if (this._perfModeL3Enhanced?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perfModeL3Enhanced = this._perfModeL3Enhanced?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwArPerformanceEnhancementMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perfModeL7Enhanced = undefined;
      this._perfModeL3Enhanced.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perfModeL7Enhanced = value.perfModeL7Enhanced;
      this._perfModeL3Enhanced.internalValue = value.perfModeL3Enhanced;
    }
  }

  // perf_mode_l7_enhanced - computed: false, optional: true, required: false
  private _perfModeL7Enhanced?: boolean | cdktf.IResolvable; 
  public get perfModeL7Enhanced() {
    return this.getBooleanAttribute('perf_mode_l7_enhanced');
  }
  public set perfModeL7Enhanced(value: boolean | cdktf.IResolvable) {
    this._perfModeL7Enhanced = value;
  }
  public resetPerfModeL7Enhanced() {
    this._perfModeL7Enhanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL7EnhancedInput() {
    return this._perfModeL7Enhanced;
  }

  // perf_mode_l3_enhanced - computed: false, optional: true, required: false
  private _perfModeL3Enhanced = new AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AzureVnetSiteIngressGwArPerformanceEnhancementModePerfModeL3Enhanced) {
    this._perfModeL3Enhanced.internalValue = value;
  }
  public resetPerfModeL3Enhanced() {
    this._perfModeL3Enhanced.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfModeL3EnhancedInput() {
    return this._perfModeL3Enhanced.internalValue;
  }
}
export interface AzureVnetSiteIngressGwAr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#azure_certified_hw AzureVnetSite#azure_certified_hw}
  */
  readonly azureCertifiedHw: string;
  /**
  * accelerated_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#accelerated_networking AzureVnetSite#accelerated_networking}
  */
  readonly acceleratedNetworking?: AzureVnetSiteIngressGwArAcceleratedNetworking;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#node AzureVnetSite#node}
  */
  readonly nodeAttribute?: AzureVnetSiteIngressGwArNode;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#performance_enhancement_mode AzureVnetSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AzureVnetSiteIngressGwArPerformanceEnhancementMode;
}

export function azureVnetSiteIngressGwArToTerraform(struct?: AzureVnetSiteIngressGwArOutputReference | AzureVnetSiteIngressGwAr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_certified_hw: cdktf.stringToTerraform(struct!.azureCertifiedHw),
    accelerated_networking: azureVnetSiteIngressGwArAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    node: azureVnetSiteIngressGwArNodeToTerraform(struct!.nodeAttribute),
    performance_enhancement_mode: azureVnetSiteIngressGwArPerformanceEnhancementModeToTerraform(struct!.performanceEnhancementMode),
  }
}


export function azureVnetSiteIngressGwArToHclTerraform(struct?: AzureVnetSiteIngressGwArOutputReference | AzureVnetSiteIngressGwAr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.azureCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accelerated_networking: {
      value: azureVnetSiteIngressGwArAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArAcceleratedNetworkingList",
    },
    node: {
      value: azureVnetSiteIngressGwArNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArNodeList",
    },
    performance_enhancement_mode: {
      value: azureVnetSiteIngressGwArPerformanceEnhancementModeToHclTerraform(struct!.performanceEnhancementMode),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressGwArPerformanceEnhancementModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressGwArOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressGwAr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCertifiedHw = this._azureCertifiedHw;
    }
    if (this._acceleratedNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking?.internalValue;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._performanceEnhancementMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceEnhancementMode = this._performanceEnhancementMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressGwAr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCertifiedHw = undefined;
      this._acceleratedNetworking.internalValue = undefined;
      this._node.internalValue = undefined;
      this._performanceEnhancementMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCertifiedHw = value.azureCertifiedHw;
      this._acceleratedNetworking.internalValue = value.acceleratedNetworking;
      this._node.internalValue = value.nodeAttribute;
      this._performanceEnhancementMode.internalValue = value.performanceEnhancementMode;
    }
  }

  // azure_certified_hw - computed: false, optional: false, required: true
  private _azureCertifiedHw?: string; 
  public get azureCertifiedHw() {
    return this.getStringAttribute('azure_certified_hw');
  }
  public set azureCertifiedHw(value: string) {
    this._azureCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCertifiedHwInput() {
    return this._azureCertifiedHw;
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking = new AzureVnetSiteIngressGwArAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: AzureVnetSiteIngressGwArAcceleratedNetworking) {
    this._acceleratedNetworking.internalValue = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new AzureVnetSiteIngressGwArNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: AzureVnetSiteIngressGwArNode) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // performance_enhancement_mode - computed: false, optional: true, required: false
  private _performanceEnhancementMode = new AzureVnetSiteIngressGwArPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AzureVnetSiteIngressGwArPerformanceEnhancementMode) {
    this._performanceEnhancementMode.internalValue = value;
  }
  public resetPerformanceEnhancementMode() {
    this._performanceEnhancementMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceEnhancementModeInput() {
    return this._performanceEnhancementMode.internalValue;
  }
}
export interface AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_vega_upgrade_mode AzureVnetSite#disable_vega_upgrade_mode}
  */
  readonly disableVegaUpgradeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#drain_max_unavailable_node_count AzureVnetSite#drain_max_unavailable_node_count}
  */
  readonly drainMaxUnavailableNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#drain_max_unavailable_node_percentage AzureVnetSite#drain_max_unavailable_node_percentage}
  */
  readonly drainMaxUnavailableNodePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#drain_node_timeout AzureVnetSite#drain_node_timeout}
  */
  readonly drainNodeTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_vega_upgrade_mode AzureVnetSite#enable_vega_upgrade_mode}
  */
  readonly enableVegaUpgradeMode?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct?: AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.disableVegaUpgradeMode),
    drain_max_unavailable_node_count: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodeCount),
    drain_max_unavailable_node_percentage: cdktf.numberToTerraform(struct!.drainMaxUnavailableNodePercentage),
    drain_node_timeout: cdktf.numberToTerraform(struct!.drainNodeTimeout),
    enable_vega_upgrade_mode: cdktf.booleanToTerraform(struct!.enableVegaUpgradeMode),
  }
}


export function azureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct?: AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference | AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.disableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drain_max_unavailable_node_count: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_max_unavailable_node_percentage: {
      value: cdktf.numberToHclTerraform(struct!.drainMaxUnavailableNodePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drain_node_timeout: {
      value: cdktf.numberToHclTerraform(struct!.drainNodeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_vega_upgrade_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableVegaUpgradeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVegaUpgradeMode = this._disableVegaUpgradeMode;
    }
    if (this._drainMaxUnavailableNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodeCount = this._drainMaxUnavailableNodeCount;
    }
    if (this._drainMaxUnavailableNodePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainMaxUnavailableNodePercentage = this._drainMaxUnavailableNodePercentage;
    }
    if (this._drainNodeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.drainNodeTimeout = this._drainNodeTimeout;
    }
    if (this._enableVegaUpgradeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVegaUpgradeMode = this._enableVegaUpgradeMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableVegaUpgradeMode = undefined;
      this._drainMaxUnavailableNodeCount = undefined;
      this._drainMaxUnavailableNodePercentage = undefined;
      this._drainNodeTimeout = undefined;
      this._enableVegaUpgradeMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableVegaUpgradeMode = value.disableVegaUpgradeMode;
      this._drainMaxUnavailableNodeCount = value.drainMaxUnavailableNodeCount;
      this._drainMaxUnavailableNodePercentage = value.drainMaxUnavailableNodePercentage;
      this._drainNodeTimeout = value.drainNodeTimeout;
      this._enableVegaUpgradeMode = value.enableVegaUpgradeMode;
    }
  }

  // disable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _disableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get disableVegaUpgradeMode() {
    return this.getBooleanAttribute('disable_vega_upgrade_mode');
  }
  public set disableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._disableVegaUpgradeMode = value;
  }
  public resetDisableVegaUpgradeMode() {
    this._disableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVegaUpgradeModeInput() {
    return this._disableVegaUpgradeMode;
  }

  // drain_max_unavailable_node_count - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodeCount?: number; 
  public get drainMaxUnavailableNodeCount() {
    return this.getNumberAttribute('drain_max_unavailable_node_count');
  }
  public set drainMaxUnavailableNodeCount(value: number) {
    this._drainMaxUnavailableNodeCount = value;
  }
  public resetDrainMaxUnavailableNodeCount() {
    this._drainMaxUnavailableNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodeCountInput() {
    return this._drainMaxUnavailableNodeCount;
  }

  // drain_max_unavailable_node_percentage - computed: false, optional: true, required: false
  private _drainMaxUnavailableNodePercentage?: number; 
  public get drainMaxUnavailableNodePercentage() {
    return this.getNumberAttribute('drain_max_unavailable_node_percentage');
  }
  public set drainMaxUnavailableNodePercentage(value: number) {
    this._drainMaxUnavailableNodePercentage = value;
  }
  public resetDrainMaxUnavailableNodePercentage() {
    this._drainMaxUnavailableNodePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainMaxUnavailableNodePercentageInput() {
    return this._drainMaxUnavailableNodePercentage;
  }

  // drain_node_timeout - computed: false, optional: false, required: true
  private _drainNodeTimeout?: number; 
  public get drainNodeTimeout() {
    return this.getNumberAttribute('drain_node_timeout');
  }
  public set drainNodeTimeout(value: number) {
    this._drainNodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNodeTimeoutInput() {
    return this._drainNodeTimeout;
  }

  // enable_vega_upgrade_mode - computed: false, optional: true, required: false
  private _enableVegaUpgradeMode?: boolean | cdktf.IResolvable; 
  public get enableVegaUpgradeMode() {
    return this.getBooleanAttribute('enable_vega_upgrade_mode');
  }
  public set enableVegaUpgradeMode(value: boolean | cdktf.IResolvable) {
    this._enableVegaUpgradeMode = value;
  }
  public resetEnableVegaUpgradeMode() {
    this._enableVegaUpgradeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVegaUpgradeModeInput() {
    return this._enableVegaUpgradeMode;
  }
}
export interface AzureVnetSiteKubernetesUpgradeDrain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_upgrade_drain AzureVnetSite#disable_upgrade_drain}
  */
  readonly disableUpgradeDrain?: boolean | cdktf.IResolvable;
  /**
  * enable_upgrade_drain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_upgrade_drain AzureVnetSite#enable_upgrade_drain}
  */
  readonly enableUpgradeDrain?: AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain;
}

export function azureVnetSiteKubernetesUpgradeDrainToTerraform(struct?: AzureVnetSiteKubernetesUpgradeDrainOutputReference | AzureVnetSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_upgrade_drain: cdktf.booleanToTerraform(struct!.disableUpgradeDrain),
    enable_upgrade_drain: azureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainToTerraform(struct!.enableUpgradeDrain),
  }
}


export function azureVnetSiteKubernetesUpgradeDrainToHclTerraform(struct?: AzureVnetSiteKubernetesUpgradeDrainOutputReference | AzureVnetSiteKubernetesUpgradeDrain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_upgrade_drain: {
      value: cdktf.booleanToHclTerraform(struct!.disableUpgradeDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_upgrade_drain: {
      value: azureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainToHclTerraform(struct!.enableUpgradeDrain),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteKubernetesUpgradeDrainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteKubernetesUpgradeDrain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableUpgradeDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUpgradeDrain = this._disableUpgradeDrain;
    }
    if (this._enableUpgradeDrain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableUpgradeDrain = this._enableUpgradeDrain?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteKubernetesUpgradeDrain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableUpgradeDrain = undefined;
      this._enableUpgradeDrain.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableUpgradeDrain = value.disableUpgradeDrain;
      this._enableUpgradeDrain.internalValue = value.enableUpgradeDrain;
    }
  }

  // disable_upgrade_drain - computed: false, optional: true, required: false
  private _disableUpgradeDrain?: boolean | cdktf.IResolvable; 
  public get disableUpgradeDrain() {
    return this.getBooleanAttribute('disable_upgrade_drain');
  }
  public set disableUpgradeDrain(value: boolean | cdktf.IResolvable) {
    this._disableUpgradeDrain = value;
  }
  public resetDisableUpgradeDrain() {
    this._disableUpgradeDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeDrainInput() {
    return this._disableUpgradeDrain;
  }

  // enable_upgrade_drain - computed: false, optional: true, required: false
  private _enableUpgradeDrain = new AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrainOutputReference(this, "enable_upgrade_drain");
  public get enableUpgradeDrain() {
    return this._enableUpgradeDrain;
  }
  public putEnableUpgradeDrain(value: AzureVnetSiteKubernetesUpgradeDrainEnableUpgradeDrain) {
    this._enableUpgradeDrain.internalValue = value;
  }
  public resetEnableUpgradeDrain() {
    this._enableUpgradeDrain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpgradeDrainInput() {
    return this._enableUpgradeDrain.internalValue;
  }
}
export interface AzureVnetSiteLogReceiver {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteLogReceiverToTerraform(struct?: AzureVnetSiteLogReceiverOutputReference | AzureVnetSiteLogReceiver): any {
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


export function azureVnetSiteLogReceiverToHclTerraform(struct?: AzureVnetSiteLogReceiverOutputReference | AzureVnetSiteLogReceiver): any {
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

export class AzureVnetSiteLogReceiverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteLogReceiver | undefined {
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

  public set internalValue(value: AzureVnetSiteLogReceiver | undefined) {
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
export interface AzureVnetSiteOfflineSurvivabilityMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_offline_survivability_mode AzureVnetSite#enable_offline_survivability_mode}
  */
  readonly enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_offline_survivability_mode AzureVnetSite#no_offline_survivability_mode}
  */
  readonly noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteOfflineSurvivabilityModeToTerraform(struct?: AzureVnetSiteOfflineSurvivabilityModeOutputReference | AzureVnetSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_offline_survivability_mode: cdktf.booleanToTerraform(struct!.enableOfflineSurvivabilityMode),
    no_offline_survivability_mode: cdktf.booleanToTerraform(struct!.noOfflineSurvivabilityMode),
  }
}


export function azureVnetSiteOfflineSurvivabilityModeToHclTerraform(struct?: AzureVnetSiteOfflineSurvivabilityModeOutputReference | AzureVnetSiteOfflineSurvivabilityMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_offline_survivability_mode: {
      value: cdktf.booleanToHclTerraform(struct!.noOfflineSurvivabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteOfflineSurvivabilityModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteOfflineSurvivabilityMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOfflineSurvivabilityMode = this._enableOfflineSurvivabilityMode;
    }
    if (this._noOfflineSurvivabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOfflineSurvivabilityMode = this._noOfflineSurvivabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteOfflineSurvivabilityMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOfflineSurvivabilityMode = undefined;
      this._noOfflineSurvivabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOfflineSurvivabilityMode = value.enableOfflineSurvivabilityMode;
      this._noOfflineSurvivabilityMode = value.noOfflineSurvivabilityMode;
    }
  }

  // enable_offline_survivability_mode - computed: false, optional: true, required: false
  private _enableOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get enableOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('enable_offline_survivability_mode');
  }
  public set enableOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._enableOfflineSurvivabilityMode = value;
  }
  public resetEnableOfflineSurvivabilityMode() {
    this._enableOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOfflineSurvivabilityModeInput() {
    return this._enableOfflineSurvivabilityMode;
  }

  // no_offline_survivability_mode - computed: false, optional: true, required: false
  private _noOfflineSurvivabilityMode?: boolean | cdktf.IResolvable; 
  public get noOfflineSurvivabilityMode() {
    return this.getBooleanAttribute('no_offline_survivability_mode');
  }
  public set noOfflineSurvivabilityMode(value: boolean | cdktf.IResolvable) {
    this._noOfflineSurvivabilityMode = value;
  }
  public resetNoOfflineSurvivabilityMode() {
    this._noOfflineSurvivabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfflineSurvivabilityModeInput() {
    return this._noOfflineSurvivabilityMode;
  }
}
export interface AzureVnetSiteOs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#default_os_version AzureVnetSite#default_os_version}
  */
  readonly defaultOsVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#operating_system_version AzureVnetSite#operating_system_version}
  */
  readonly operatingSystemVersion?: string;
}

export function azureVnetSiteOsToTerraform(struct?: AzureVnetSiteOsOutputReference | AzureVnetSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_os_version: cdktf.booleanToTerraform(struct!.defaultOsVersion),
    operating_system_version: cdktf.stringToTerraform(struct!.operatingSystemVersion),
  }
}


export function azureVnetSiteOsToHclTerraform(struct?: AzureVnetSiteOsOutputReference | AzureVnetSiteOs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_os_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_system_version: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystemVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteOsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteOs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOsVersion = this._defaultOsVersion;
    }
    if (this._operatingSystemVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystemVersion = this._operatingSystemVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteOs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultOsVersion = undefined;
      this._operatingSystemVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultOsVersion = value.defaultOsVersion;
      this._operatingSystemVersion = value.operatingSystemVersion;
    }
  }

  // default_os_version - computed: false, optional: true, required: false
  private _defaultOsVersion?: boolean | cdktf.IResolvable; 
  public get defaultOsVersion() {
    return this.getBooleanAttribute('default_os_version');
  }
  public set defaultOsVersion(value: boolean | cdktf.IResolvable) {
    this._defaultOsVersion = value;
  }
  public resetDefaultOsVersion() {
    this._defaultOsVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOsVersionInput() {
    return this._defaultOsVersion;
  }

  // operating_system_version - computed: false, optional: true, required: false
  private _operatingSystemVersion?: string; 
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
  public set operatingSystemVersion(value: string) {
    this._operatingSystemVersion = value;
  }
  public resetOperatingSystemVersion() {
    this._operatingSystemVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemVersionInput() {
    return this._operatingSystemVersion;
  }
}
export interface AzureVnetSiteSw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#default_sw_version AzureVnetSite#default_sw_version}
  */
  readonly defaultSwVersion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#volterra_software_version AzureVnetSite#volterra_software_version}
  */
  readonly volterraSoftwareVersion?: string;
}

export function azureVnetSiteSwToTerraform(struct?: AzureVnetSiteSwOutputReference | AzureVnetSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_sw_version: cdktf.booleanToTerraform(struct!.defaultSwVersion),
    volterra_software_version: cdktf.stringToTerraform(struct!.volterraSoftwareVersion),
  }
}


export function azureVnetSiteSwToHclTerraform(struct?: AzureVnetSiteSwOutputReference | AzureVnetSiteSw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_sw_version: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSwVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_software_version: {
      value: cdktf.stringToHclTerraform(struct!.volterraSoftwareVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteSwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteSw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSwVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSwVersion = this._defaultSwVersion;
    }
    if (this._volterraSoftwareVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSoftwareVersion = this._volterraSoftwareVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteSw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSwVersion = undefined;
      this._volterraSoftwareVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSwVersion = value.defaultSwVersion;
      this._volterraSoftwareVersion = value.volterraSoftwareVersion;
    }
  }

  // default_sw_version - computed: false, optional: true, required: false
  private _defaultSwVersion?: boolean | cdktf.IResolvable; 
  public get defaultSwVersion() {
    return this.getBooleanAttribute('default_sw_version');
  }
  public set defaultSwVersion(value: boolean | cdktf.IResolvable) {
    this._defaultSwVersion = value;
  }
  public resetDefaultSwVersion() {
    this._defaultSwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSwVersionInput() {
    return this._defaultSwVersion;
  }

  // volterra_software_version - computed: false, optional: true, required: false
  private _volterraSoftwareVersion?: string; 
  public get volterraSoftwareVersion() {
    return this.getStringAttribute('volterra_software_version');
  }
  public set volterraSoftwareVersion(value: string) {
    this._volterraSoftwareVersion = value;
  }
  public resetVolterraSoftwareVersion() {
    this._volterraSoftwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSoftwareVersionInput() {
    return this._volterraSoftwareVersion;
  }
}
export interface AzureVnetSiteVnetExistingVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#f5_orchestrated_routing AzureVnetSite#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#manual_routing AzureVnetSite#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#resource_group AzureVnetSite#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_name AzureVnetSite#vnet_name}
  */
  readonly vnetName: string;
}

export function azureVnetSiteVnetExistingVnetToTerraform(struct?: AzureVnetSiteVnetExistingVnetOutputReference | AzureVnetSiteVnetExistingVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_orchestrated_routing: cdktf.booleanToTerraform(struct!.f5OrchestratedRouting),
    manual_routing: cdktf.booleanToTerraform(struct!.manualRouting),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
  }
}


export function azureVnetSiteVnetExistingVnetToHclTerraform(struct?: AzureVnetSiteVnetExistingVnetOutputReference | AzureVnetSiteVnetExistingVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_orchestrated_routing: {
      value: cdktf.booleanToHclTerraform(struct!.f5OrchestratedRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_routing: {
      value: cdktf.booleanToHclTerraform(struct!.manualRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVnetExistingVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVnetExistingVnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5OrchestratedRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5OrchestratedRouting = this._f5OrchestratedRouting;
    }
    if (this._manualRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRouting = this._manualRouting;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVnetExistingVnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5OrchestratedRouting = undefined;
      this._manualRouting = undefined;
      this._resourceGroup = undefined;
      this._vnetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5OrchestratedRouting = value.f5OrchestratedRouting;
      this._manualRouting = value.manualRouting;
      this._resourceGroup = value.resourceGroup;
      this._vnetName = value.vnetName;
    }
  }

  // f5_orchestrated_routing - computed: false, optional: true, required: false
  private _f5OrchestratedRouting?: boolean | cdktf.IResolvable; 
  public get f5OrchestratedRouting() {
    return this.getBooleanAttribute('f5_orchestrated_routing');
  }
  public set f5OrchestratedRouting(value: boolean | cdktf.IResolvable) {
    this._f5OrchestratedRouting = value;
  }
  public resetF5OrchestratedRouting() {
    this._f5OrchestratedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5OrchestratedRoutingInput() {
    return this._f5OrchestratedRouting;
  }

  // manual_routing - computed: false, optional: true, required: false
  private _manualRouting?: boolean | cdktf.IResolvable; 
  public get manualRouting() {
    return this.getBooleanAttribute('manual_routing');
  }
  public set manualRouting(value: boolean | cdktf.IResolvable) {
    this._manualRouting = value;
  }
  public resetManualRouting() {
    this._manualRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRoutingInput() {
    return this._manualRouting;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // vnet_name - computed: false, optional: false, required: true
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }
}
export interface AzureVnetSiteVnetNewVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#autogenerate AzureVnetSite#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#primary_ipv4 AzureVnetSite#primary_ipv4}
  */
  readonly primaryIpv4: string;
}

export function azureVnetSiteVnetNewVnetToTerraform(struct?: AzureVnetSiteVnetNewVnetOutputReference | AzureVnetSiteVnetNewVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    name: cdktf.stringToTerraform(struct!.name),
    primary_ipv4: cdktf.stringToTerraform(struct!.primaryIpv4),
  }
}


export function azureVnetSiteVnetNewVnetToHclTerraform(struct?: AzureVnetSiteVnetNewVnetOutputReference | AzureVnetSiteVnetNewVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerate: {
      value: cdktf.booleanToHclTerraform(struct!.autogenerate),
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
    primary_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.primaryIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVnetNewVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVnetNewVnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpv4 = this._primaryIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVnetNewVnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
      this._name = undefined;
      this._primaryIpv4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
      this._name = value.name;
      this._primaryIpv4 = value.primaryIpv4;
    }
  }

  // autogenerate - computed: false, optional: true, required: false
  private _autogenerate?: boolean | cdktf.IResolvable; 
  public get autogenerate() {
    return this.getBooleanAttribute('autogenerate');
  }
  public set autogenerate(value: boolean | cdktf.IResolvable) {
    this._autogenerate = value;
  }
  public resetAutogenerate() {
    this._autogenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateInput() {
    return this._autogenerate;
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

  // primary_ipv4 - computed: false, optional: false, required: true
  private _primaryIpv4?: string; 
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }
  public set primaryIpv4(value: string) {
    this._primaryIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv4Input() {
    return this._primaryIpv4;
  }
}
export interface AzureVnetSiteVnet {
  /**
  * existing_vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#existing_vnet AzureVnetSite#existing_vnet}
  */
  readonly existingVnet?: AzureVnetSiteVnetExistingVnet;
  /**
  * new_vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#new_vnet AzureVnetSite#new_vnet}
  */
  readonly newVnet?: AzureVnetSiteVnetNewVnet;
}

export function azureVnetSiteVnetToTerraform(struct?: AzureVnetSiteVnetOutputReference | AzureVnetSiteVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_vnet: azureVnetSiteVnetExistingVnetToTerraform(struct!.existingVnet),
    new_vnet: azureVnetSiteVnetNewVnetToTerraform(struct!.newVnet),
  }
}


export function azureVnetSiteVnetToHclTerraform(struct?: AzureVnetSiteVnetOutputReference | AzureVnetSiteVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_vnet: {
      value: azureVnetSiteVnetExistingVnetToHclTerraform(struct!.existingVnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVnetExistingVnetList",
    },
    new_vnet: {
      value: azureVnetSiteVnetNewVnetToHclTerraform(struct!.newVnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVnetNewVnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingVnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingVnet = this._existingVnet?.internalValue;
    }
    if (this._newVnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newVnet = this._newVnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingVnet.internalValue = undefined;
      this._newVnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingVnet.internalValue = value.existingVnet;
      this._newVnet.internalValue = value.newVnet;
    }
  }

  // existing_vnet - computed: false, optional: true, required: false
  private _existingVnet = new AzureVnetSiteVnetExistingVnetOutputReference(this, "existing_vnet");
  public get existingVnet() {
    return this._existingVnet;
  }
  public putExistingVnet(value: AzureVnetSiteVnetExistingVnet) {
    this._existingVnet.internalValue = value;
  }
  public resetExistingVnet() {
    this._existingVnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingVnetInput() {
    return this._existingVnet.internalValue;
  }

  // new_vnet - computed: false, optional: true, required: false
  private _newVnet = new AzureVnetSiteVnetNewVnetOutputReference(this, "new_vnet");
  public get newVnet() {
    return this._newVnet;
  }
  public putNewVnet(value: AzureVnetSiteVnetNewVnet) {
    this._newVnet.internalValue = value;
  }
  public resetNewVnet() {
    this._newVnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVnetInput() {
    return this._newVnet.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable AzureVnetSite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterAcceleratedNetworkingToTerraform(struct?: AzureVnetSiteVoltstackClusterAcceleratedNetworkingOutputReference | AzureVnetSiteVoltstackClusterAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function azureVnetSiteVoltstackClusterAcceleratedNetworkingToHclTerraform(struct?: AzureVnetSiteVoltstackClusterAcceleratedNetworkingOutputReference | AzureVnetSiteVoltstackClusterAcceleratedNetworking): any {
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

export class AzureVnetSiteVoltstackClusterAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterAcceleratedNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterAcceleratedNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
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

  // enable - computed: false, optional: true, required: false
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
export interface AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enhanced_firewall_policies AzureVnetSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#forward_proxy_policies AzureVnetSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference | AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference | AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardProxyPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardProxyPolicies.internalValue = value.forwardProxyPolicies;
    }
  }

  // forward_proxy_policies - computed: false, optional: false, required: true
  private _forwardProxyPolicies = new AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#network_policies AzureVnetSite#network_policies}
  */
  readonly networkPolicies: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterActiveNetworkPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesOutputReference | AzureVnetSiteVoltstackClusterActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(azureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function azureVnetSiteVoltstackClusterActiveNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesOutputReference | AzureVnetSiteVoltstackClusterActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterActiveNetworkPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPolicies.internalValue = value.networkPolicies;
    }
  }

  // network_policies - computed: false, optional: false, required: true
  private _networkPolicies = new AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AzureVnetSiteVoltstackClusterActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetToTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetOutputReference | AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetToHclTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetOutputReference | AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_resource_grp: {
      value: cdktf.stringToHclTerraform(struct!.subnetResourceGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.booleanToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._subnetResourceGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetResourceGrp = this._subnetResourceGrp;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._subnetResourceGrp = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
      this._subnetResourceGrp = value.subnetResourceGrp;
      this._vnetResourceGroup = value.vnetResourceGroup;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // subnet_resource_grp - computed: false, optional: true, required: false
  private _subnetResourceGrp?: string; 
  public get subnetResourceGrp() {
    return this.getStringAttribute('subnet_resource_grp');
  }
  public set subnetResourceGrp(value: string) {
    this._subnetResourceGrp = value;
  }
  public resetSubnetResourceGrp() {
    this._subnetResourceGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetResourceGrpInput() {
    return this._subnetResourceGrp;
  }

  // vnet_resource_group - computed: false, optional: true, required: false
  private _vnetResourceGroup?: boolean | cdktf.IResolvable; 
  public get vnetResourceGroup() {
    return this.getBooleanAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: boolean | cdktf.IResolvable) {
    this._vnetResourceGroup = value;
  }
  public resetVnetResourceGroup() {
    this._vnetResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }
}
export interface AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference | AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference | AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface AzureVnetSiteVoltstackClusterAzNodesLocalSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam;
}

export function azureVnetSiteVoltstackClusterAzNodesLocalSubnetToTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetOutputReference | AzureVnetSiteVoltstackClusterAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteVoltstackClusterAzNodesLocalSubnetToHclTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetOutputReference | AzureVnetSiteVoltstackClusterAzNodesLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterAzNodesLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterAzNodesLocalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterAzNodesLocalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnet.internalValue = value.subnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteVoltstackClusterAzNodesLocalSubnetSubnetParam) {
    this._subnetParam.internalValue = value;
  }
  public resetSubnetParam() {
    this._subnetParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetParamInput() {
    return this._subnetParam.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#azure_az AzureVnetSite#azure_az}
  */
  readonly azureAz: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disk_size AzureVnetSite#disk_size}
  */
  readonly diskSize?: number;
  /**
  * local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#local_subnet AzureVnetSite#local_subnet}
  */
  readonly localSubnet?: AzureVnetSiteVoltstackClusterAzNodesLocalSubnet;
}

export function azureVnetSiteVoltstackClusterAzNodesToTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_az: cdktf.stringToTerraform(struct!.azureAz),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    local_subnet: azureVnetSiteVoltstackClusterAzNodesLocalSubnetToTerraform(struct!.localSubnet),
  }
}


export function azureVnetSiteVoltstackClusterAzNodesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_az: {
      value: cdktf.stringToHclTerraform(struct!.azureAz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_subnet: {
      value: azureVnetSiteVoltstackClusterAzNodesLocalSubnetToHclTerraform(struct!.localSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterAzNodesLocalSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAz = this._azureAz;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._localSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSubnet = this._localSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAz = undefined;
      this._diskSize = undefined;
      this._localSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAz = value.azureAz;
      this._diskSize = value.diskSize;
      this._localSubnet.internalValue = value.localSubnet;
    }
  }

  // azure_az - computed: false, optional: false, required: true
  private _azureAz?: string; 
  public get azureAz() {
    return this.getStringAttribute('azure_az');
  }
  public set azureAz(value: string) {
    this._azureAz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAzInput() {
    return this._azureAz;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // local_subnet - computed: false, optional: true, required: false
  private _localSubnet = new AzureVnetSiteVoltstackClusterAzNodesLocalSubnetOutputReference(this, "local_subnet");
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: AzureVnetSiteVoltstackClusterAzNodesLocalSubnet) {
    this._localSubnet.internalValue = value;
  }
  public resetLocalSubnet() {
    this._localSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet.internalValue;
  }
}

export class AzureVnetSiteVoltstackClusterAzNodesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterAzNodesOutputReference {
    return new AzureVnetSiteVoltstackClusterAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterDcClusterGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterDcClusterGroupToTerraform(struct?: AzureVnetSiteVoltstackClusterDcClusterGroupOutputReference | AzureVnetSiteVoltstackClusterDcClusterGroup): any {
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


export function azureVnetSiteVoltstackClusterDcClusterGroupToHclTerraform(struct?: AzureVnetSiteVoltstackClusterDcClusterGroupOutputReference | AzureVnetSiteVoltstackClusterDcClusterGroup): any {
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

export class AzureVnetSiteVoltstackClusterDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterDcClusterGroup | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterDcClusterGroup | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#hash_algorithms AzureVnetSite#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling {
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#decryption_provider AzureVnetSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#store_provider AzureVnetSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#decryption_provider AzureVnetSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#store_provider AzureVnetSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#url AzureVnetSite#url}
  */
  readonly url: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#key AzureVnetSite#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#secret_encoding AzureVnetSite#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#version AzureVnetSite#version}
  */
  readonly version?: number;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
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


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#secret_encoding_type AzureVnetSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#blindfold_secret_info AzureVnetSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#blindfold_secret_info_internal AzureVnetSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#clear_secret_info AzureVnetSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vault_secret_info AzureVnetSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#wingman_secret_info AzureVnetSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
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
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults {
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#certificate_url AzureVnetSite#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#description AzureVnetSite#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_hash_algorithms AzureVnetSite#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_ocsp_stapling AzureVnetSite#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#private_key AzureVnetSite#private_key}
  */
  readonly privateKey: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#use_system_defaults AzureVnetSite#use_system_defaults}
  */
  readonly useSystemDefaults?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingList",
    },
    private_key: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyList",
    },
    use_system_defaults: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#exact_value AzureVnetSite#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#regex_value AzureVnetSite#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#suffix_value AzureVnetSite#suffix_value}
  */
  readonly suffixValue?: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_value: {
      value: cdktf.stringToHclTerraform(struct!.regexValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._regexValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValue = this._regexValue;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
      this._suffixValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
      this._suffixValue = value.suffixValue;
    }
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // regex_value - computed: false, optional: true, required: false
  private _regexValue?: string; 
  public get regexValue() {
    return this.getStringAttribute('regex_value');
  }
  public set regexValue(value: string) {
    this._regexValue = value;
  }
  public resetRegexValue() {
    this._regexValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValueInput() {
    return this._regexValue;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_interception AzureVnetSite#disable_interception}
  */
  readonly disableInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_interception AzureVnetSite#enable_interception}
  */
  readonly enableInterception?: boolean | cdktf.IResolvable;
  /**
  * domain_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#domain_match AzureVnetSite#domain_match}
  */
  readonly domainMatch: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_interception: cdktf.booleanToTerraform(struct!.disableInterception),
    enable_interception: cdktf.booleanToTerraform(struct!.enableInterception),
    domain_match: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct!.domainMatch),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.disableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interception: {
      value: cdktf.booleanToHclTerraform(struct!.enableInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_match: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct!.domainMatch),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInterception = this._disableInterception;
    }
    if (this._enableInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInterception = this._enableInterception;
    }
    if (this._domainMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatch = this._domainMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableInterception = undefined;
      this._enableInterception = undefined;
      this._domainMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableInterception = value.disableInterception;
      this._enableInterception = value.enableInterception;
      this._domainMatch.internalValue = value.domainMatch;
    }
  }

  // disable_interception - computed: false, optional: true, required: false
  private _disableInterception?: boolean | cdktf.IResolvable; 
  public get disableInterception() {
    return this.getBooleanAttribute('disable_interception');
  }
  public set disableInterception(value: boolean | cdktf.IResolvable) {
    this._disableInterception = value;
  }
  public resetDisableInterception() {
    this._disableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInterceptionInput() {
    return this._disableInterception;
  }

  // enable_interception - computed: false, optional: true, required: false
  private _enableInterception?: boolean | cdktf.IResolvable; 
  public get enableInterception() {
    return this.getBooleanAttribute('enable_interception');
  }
  public set enableInterception(value: boolean | cdktf.IResolvable) {
    this._enableInterception = value;
  }
  public resetEnableInterception() {
    this._enableInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInterceptionInput() {
    return this._enableInterception;
  }

  // domain_match - computed: false, optional: false, required: true
  private _domainMatch = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference(this, "domain_match");
  public get domainMatch() {
    return this._domainMatch;
  }
  public putDomainMatch(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch) {
    this._domainMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchInput() {
    return this._domainMatch.internalValue;
  }
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference {
    return new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy {
  /**
  * interception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#interception_rules AzureVnetSite#interception_rules}
  */
  readonly interceptionRules: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_rules: cdktf.listMapper(azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform, true)(struct!.interceptionRules),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_rules: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform, true)(struct!.interceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionRules = this._interceptionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interceptionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interceptionRules.internalValue = value.interceptionRules;
    }
  }

  // interception_rules - computed: false, optional: false, required: true
  private _interceptionRules = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList(this, "interception_rules", false);
  public get interceptionRules() {
    return this._interceptionRules;
  }
  public putInterceptionRules(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable) {
    this._interceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionRulesInput() {
    return this._interceptionRules.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_for_all_domains AzureVnetSite#enable_for_all_domains}
  */
  readonly enableForAllDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#trusted_ca_url AzureVnetSite#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#volterra_certificate AzureVnetSite#volterra_certificate}
  */
  readonly volterraCertificate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#volterra_trusted_ca AzureVnetSite#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * custom_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_certificate AzureVnetSite#custom_certificate}
  */
  readonly customCertificate?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#policy AzureVnetSite#policy}
  */
  readonly policy?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_for_all_domains: cdktf.booleanToTerraform(struct!.enableForAllDomains),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_certificate: cdktf.booleanToTerraform(struct!.volterraCertificate),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    custom_certificate: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct!.customCertificate),
    policy: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct!.policy),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_for_all_domains: {
      value: cdktf.booleanToHclTerraform(struct!.enableForAllDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.volterraCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_certificate: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateList",
    },
    policy: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableForAllDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForAllDomains = this._enableForAllDomains;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._volterraCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraCertificate = this._volterraCertificate;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._customCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCertificate = this._customCertificate?.internalValue;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableForAllDomains = undefined;
      this._trustedCaUrl = undefined;
      this._volterraCertificate = undefined;
      this._volterraTrustedCa = undefined;
      this._customCertificate.internalValue = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableForAllDomains = value.enableForAllDomains;
      this._trustedCaUrl = value.trustedCaUrl;
      this._volterraCertificate = value.volterraCertificate;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._customCertificate.internalValue = value.customCertificate;
      this._policy.internalValue = value.policy;
    }
  }

  // enable_for_all_domains - computed: false, optional: true, required: false
  private _enableForAllDomains?: boolean | cdktf.IResolvable; 
  public get enableForAllDomains() {
    return this.getBooleanAttribute('enable_for_all_domains');
  }
  public set enableForAllDomains(value: boolean | cdktf.IResolvable) {
    this._enableForAllDomains = value;
  }
  public resetEnableForAllDomains() {
    this._enableForAllDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForAllDomainsInput() {
    return this._enableForAllDomains;
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

  // volterra_certificate - computed: false, optional: true, required: false
  private _volterraCertificate?: boolean | cdktf.IResolvable; 
  public get volterraCertificate() {
    return this.getBooleanAttribute('volterra_certificate');
  }
  public set volterraCertificate(value: boolean | cdktf.IResolvable) {
    this._volterraCertificate = value;
  }
  public resetVolterraCertificate() {
    this._volterraCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraCertificateInput() {
    return this._volterraCertificate;
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

  // custom_certificate - computed: false, optional: true, required: false
  private _customCertificate = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate) {
    this._customCertificate.internalValue = value;
  }
  public resetCustomCertificate() {
    this._customCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCertificateInput() {
    return this._customCertificate.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#connection_timeout AzureVnetSite#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#max_connect_attempts AzureVnetSite#max_connect_attempts}
  */
  readonly maxConnectAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_interception AzureVnetSite#no_interception}
  */
  readonly noInterception?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#white_listed_ports AzureVnetSite#white_listed_ports}
  */
  readonly whiteListedPorts?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#white_listed_prefixes AzureVnetSite#white_listed_prefixes}
  */
  readonly whiteListedPrefixes?: string[];
  /**
  * tls_intercept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tls_intercept AzureVnetSite#tls_intercept}
  */
  readonly tlsIntercept?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    max_connect_attempts: cdktf.numberToTerraform(struct!.maxConnectAttempts),
    no_interception: cdktf.booleanToTerraform(struct!.noInterception),
    white_listed_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.whiteListedPorts),
    white_listed_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.whiteListedPrefixes),
    tls_intercept: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct!.tlsIntercept),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connect_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_interception: {
      value: cdktf.booleanToHclTerraform(struct!.noInterception),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    white_listed_ports: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.whiteListedPorts),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    white_listed_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.whiteListedPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_intercept: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct!.tlsIntercept),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._maxConnectAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectAttempts = this._maxConnectAttempts;
    }
    if (this._noInterception !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInterception = this._noInterception;
    }
    if (this._whiteListedPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPorts = this._whiteListedPorts;
    }
    if (this._whiteListedPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteListedPrefixes = this._whiteListedPrefixes;
    }
    if (this._tlsIntercept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsIntercept = this._tlsIntercept?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionTimeout = undefined;
      this._maxConnectAttempts = undefined;
      this._noInterception = undefined;
      this._whiteListedPorts = undefined;
      this._whiteListedPrefixes = undefined;
      this._tlsIntercept.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionTimeout = value.connectionTimeout;
      this._maxConnectAttempts = value.maxConnectAttempts;
      this._noInterception = value.noInterception;
      this._whiteListedPorts = value.whiteListedPorts;
      this._whiteListedPrefixes = value.whiteListedPrefixes;
      this._tlsIntercept.internalValue = value.tlsIntercept;
    }
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // max_connect_attempts - computed: false, optional: true, required: false
  private _maxConnectAttempts?: number; 
  public get maxConnectAttempts() {
    return this.getNumberAttribute('max_connect_attempts');
  }
  public set maxConnectAttempts(value: number) {
    this._maxConnectAttempts = value;
  }
  public resetMaxConnectAttempts() {
    this._maxConnectAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectAttemptsInput() {
    return this._maxConnectAttempts;
  }

  // no_interception - computed: false, optional: true, required: false
  private _noInterception?: boolean | cdktf.IResolvable; 
  public get noInterception() {
    return this.getBooleanAttribute('no_interception');
  }
  public set noInterception(value: boolean | cdktf.IResolvable) {
    this._noInterception = value;
  }
  public resetNoInterception() {
    this._noInterception = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInterceptionInput() {
    return this._noInterception;
  }

  // white_listed_ports - computed: false, optional: true, required: false
  private _whiteListedPorts?: number[]; 
  public get whiteListedPorts() {
    return this.getNumberListAttribute('white_listed_ports');
  }
  public set whiteListedPorts(value: number[]) {
    this._whiteListedPorts = value;
  }
  public resetWhiteListedPorts() {
    this._whiteListedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPortsInput() {
    return this._whiteListedPorts;
  }

  // white_listed_prefixes - computed: false, optional: true, required: false
  private _whiteListedPrefixes?: string[]; 
  public get whiteListedPrefixes() {
    return this.getListAttribute('white_listed_prefixes');
  }
  public set whiteListedPrefixes(value: string[]) {
    this._whiteListedPrefixes = value;
  }
  public resetWhiteListedPrefixes() {
    this._whiteListedPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListedPrefixesInput() {
    return this._whiteListedPrefixes;
  }

  // tls_intercept - computed: false, optional: true, required: false
  private _tlsIntercept = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference(this, "tls_intercept");
  public get tlsIntercept() {
    return this._tlsIntercept;
  }
  public putTlsIntercept(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept) {
    this._tlsIntercept.internalValue = value;
  }
  public resetTlsIntercept() {
    this._tlsIntercept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInterceptInput() {
    return this._tlsIntercept.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalVn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalVn.internalValue = value.globalVn;
    }
  }

  // global_vn - computed: false, optional: false, required: true
  private _globalVn = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_forward_proxy AzureVnetSite#disable_forward_proxy}
  */
  readonly disableForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * enable_forward_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_forward_proxy AzureVnetSite#enable_forward_proxy}
  */
  readonly enableForwardProxy?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy;
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sli_to_global_dr AzureVnetSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#slo_to_global_dr AzureVnetSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_forward_proxy: cdktf.booleanToTerraform(struct!.disableForwardProxy),
    enable_forward_proxy: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct!.enableForwardProxy),
    sli_to_global_dr: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.disableForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_forward_proxy: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct!.enableForwardProxy),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyList",
    },
    sli_to_global_dr: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableForwardProxy = this._disableForwardProxy;
    }
    if (this._enableForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableForwardProxy = this._enableForwardProxy?.internalValue;
    }
    if (this._sliToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sliToGlobalDr = this._sliToGlobalDr?.internalValue;
    }
    if (this._sloToGlobalDr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloToGlobalDr = this._sloToGlobalDr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableForwardProxy = undefined;
      this._enableForwardProxy.internalValue = undefined;
      this._sliToGlobalDr.internalValue = undefined;
      this._sloToGlobalDr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableForwardProxy = value.disableForwardProxy;
      this._enableForwardProxy.internalValue = value.enableForwardProxy;
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // disable_forward_proxy - computed: false, optional: true, required: false
  private _disableForwardProxy?: boolean | cdktf.IResolvable; 
  public get disableForwardProxy() {
    return this.getBooleanAttribute('disable_forward_proxy');
  }
  public set disableForwardProxy(value: boolean | cdktf.IResolvable) {
    this._disableForwardProxy = value;
  }
  public resetDisableForwardProxy() {
    this._disableForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForwardProxyInput() {
    return this._disableForwardProxy;
  }

  // enable_forward_proxy - computed: false, optional: true, required: false
  private _enableForwardProxy = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference(this, "enable_forward_proxy");
  public get enableForwardProxy() {
    return this._enableForwardProxy;
  }
  public putEnableForwardProxy(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy) {
    this._enableForwardProxy.internalValue = value;
  }
  public resetEnableForwardProxy() {
    this._enableForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableForwardProxyInput() {
    return this._enableForwardProxy.internalValue;
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
    this._sliToGlobalDr.internalValue = value;
  }
  public resetSliToGlobalDr() {
    this._sliToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sliToGlobalDrInput() {
    return this._sliToGlobalDr.internalValue;
  }

  // slo_to_global_dr - computed: false, optional: true, required: false
  private _sloToGlobalDr = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
    this._sloToGlobalDr.internalValue = value;
  }
  public resetSloToGlobalDr() {
    this._sloToGlobalDr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloToGlobalDrInput() {
    return this._sloToGlobalDr.internalValue;
  }
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_network_connections AzureVnetSite#global_network_connections}
  */
  readonly globalNetworkConnections: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterGlobalNetworkListStructToTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListStructOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function azureVnetSiteVoltstackClusterGlobalNetworkListStructToHclTerraform(struct?: AzureVnetSiteVoltstackClusterGlobalNetworkListStructOutputReference | AzureVnetSiteVoltstackClusterGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterGlobalNetworkListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._globalNetworkConnections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._globalNetworkConnections.internalValue = value.globalNetworkConnections;
    }
  }

  // global_network_connections - computed: false, optional: false, required: true
  private _globalNetworkConnections = new AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: AzureVnetSiteVoltstackClusterGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterK8SCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterK8SClusterToTerraform(struct?: AzureVnetSiteVoltstackClusterK8SClusterOutputReference | AzureVnetSiteVoltstackClusterK8SCluster): any {
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


export function azureVnetSiteVoltstackClusterK8SClusterToHclTerraform(struct?: AzureVnetSiteVoltstackClusterK8SClusterOutputReference | AzureVnetSiteVoltstackClusterK8SCluster): any {
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

export class AzureVnetSiteVoltstackClusterK8SClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterK8SCluster | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterK8SCluster | undefined) {
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
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
  */
  readonly nexthopAddress?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // interface - computed: false, optional: true, required: false
  private _interface = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#attrs AzureVnetSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop AzureVnetSite#nexthop}
  */
  readonly nexthop?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
  */
  readonly subnets: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
  */
  readonly customStaticRoute?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
  */
  readonly staticRouteList: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterOutsideStaticRoutesToTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function azureVnetSiteVoltstackClusterOutsideStaticRoutesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutsideStaticRoutesOutputReference | AzureVnetSiteVoltstackClusterOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterStorageClassListStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#default_storage_class AzureVnetSite#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#storage_class_name AzureVnetSite#storage_class_name}
  */
  readonly storageClassName: string;
}

export function azureVnetSiteVoltstackClusterStorageClassListStorageClassesToTerraform(struct?: AzureVnetSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_storage_class: cdktf.booleanToTerraform(struct!.defaultStorageClass),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function azureVnetSiteVoltstackClusterStorageClassListStorageClassesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_storage_class: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterStorageClassListStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorageClass = this._defaultStorageClass;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultStorageClass = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultStorageClass = value.defaultStorageClass;
      this._storageClassName = value.storageClassName;
    }
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: boolean | cdktf.IResolvable; 
  public get defaultStorageClass() {
    return this.getBooleanAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: boolean | cdktf.IResolvable) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}

export class AzureVnetSiteVoltstackClusterStorageClassListStorageClassesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterStorageClassListStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterStorageClassListStorageClassesOutputReference {
    return new AzureVnetSiteVoltstackClusterStorageClassListStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterStorageClassListStruct {
  /**
  * storage_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#storage_classes AzureVnetSite#storage_classes}
  */
  readonly storageClasses?: AzureVnetSiteVoltstackClusterStorageClassListStorageClasses[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterStorageClassListStructToTerraform(struct?: AzureVnetSiteVoltstackClusterStorageClassListStructOutputReference | AzureVnetSiteVoltstackClusterStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_classes: cdktf.listMapper(azureVnetSiteVoltstackClusterStorageClassListStorageClassesToTerraform, true)(struct!.storageClasses),
  }
}


export function azureVnetSiteVoltstackClusterStorageClassListStructToHclTerraform(struct?: AzureVnetSiteVoltstackClusterStorageClassListStructOutputReference | AzureVnetSiteVoltstackClusterStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_classes: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterStorageClassListStorageClassesToHclTerraform, true)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterStorageClassListStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterStorageClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterStorageClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterStorageClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClasses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new AzureVnetSiteVoltstackClusterStorageClassListStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: AzureVnetSiteVoltstackClusterStorageClassListStorageClasses[] | cdktf.IResolvable) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}
export interface AzureVnetSiteVoltstackCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#azure_certified_hw AzureVnetSite#azure_certified_hw}
  */
  readonly azureCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#default_storage AzureVnetSite#default_storage}
  */
  readonly defaultStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#forward_proxy_allow_all AzureVnetSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_dc_cluster_group AzureVnetSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_forward_proxy AzureVnetSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_global_network AzureVnetSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_k8s_cluster AzureVnetSite#no_k8s_cluster}
  */
  readonly noK8SCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_network_policy AzureVnetSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#no_outside_static_routes AzureVnetSite#no_outside_static_routes}
  */
  readonly noOutsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sm_connection_public_ip AzureVnetSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sm_connection_pvt_ip AzureVnetSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * accelerated_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#accelerated_networking AzureVnetSite#accelerated_networking}
  */
  readonly acceleratedNetworking?: AzureVnetSiteVoltstackClusterAcceleratedNetworking;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_enhanced_firewall_policies AzureVnetSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_forward_proxy_policies AzureVnetSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_network_policies AzureVnetSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: AzureVnetSiteVoltstackClusterActiveNetworkPolicies;
  /**
  * az_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#az_nodes AzureVnetSite#az_nodes}
  */
  readonly azNodes: AzureVnetSiteVoltstackClusterAzNodes[] | cdktf.IResolvable;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#dc_cluster_group AzureVnetSite#dc_cluster_group}
  */
  readonly dcClusterGroup?: AzureVnetSiteVoltstackClusterDcClusterGroup;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_network_list AzureVnetSite#global_network_list}
  */
  readonly globalNetworkList?: AzureVnetSiteVoltstackClusterGlobalNetworkListStruct;
  /**
  * k8s_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#k8s_cluster AzureVnetSite#k8s_cluster}
  */
  readonly k8SCluster?: AzureVnetSiteVoltstackClusterK8SCluster;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#outside_static_routes AzureVnetSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: AzureVnetSiteVoltstackClusterOutsideStaticRoutes;
  /**
  * storage_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#storage_class_list AzureVnetSite#storage_class_list}
  */
  readonly storageClassList?: AzureVnetSiteVoltstackClusterStorageClassListStruct;
}

export function azureVnetSiteVoltstackClusterToTerraform(struct?: AzureVnetSiteVoltstackClusterOutputReference | AzureVnetSiteVoltstackCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_certified_hw: cdktf.stringToTerraform(struct!.azureCertifiedHw),
    default_storage: cdktf.booleanToTerraform(struct!.defaultStorage),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_k8s_cluster: cdktf.booleanToTerraform(struct!.noK8SCluster),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    no_outside_static_routes: cdktf.booleanToTerraform(struct!.noOutsideStaticRoutes),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    accelerated_networking: azureVnetSiteVoltstackClusterAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    active_enhanced_firewall_policies: azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: azureVnetSiteVoltstackClusterActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    az_nodes: cdktf.listMapper(azureVnetSiteVoltstackClusterAzNodesToTerraform, true)(struct!.azNodes),
    dc_cluster_group: azureVnetSiteVoltstackClusterDcClusterGroupToTerraform(struct!.dcClusterGroup),
    global_network_list: azureVnetSiteVoltstackClusterGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    k8s_cluster: azureVnetSiteVoltstackClusterK8SClusterToTerraform(struct!.k8SCluster),
    outside_static_routes: azureVnetSiteVoltstackClusterOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
    storage_class_list: azureVnetSiteVoltstackClusterStorageClassListStructToTerraform(struct!.storageClassList),
  }
}


export function azureVnetSiteVoltstackClusterToHclTerraform(struct?: AzureVnetSiteVoltstackClusterOutputReference | AzureVnetSiteVoltstackCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.azureCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_storage: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_k8s_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.noK8SCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_outside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noOutsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accelerated_networking: {
      value: azureVnetSiteVoltstackClusterAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterAcceleratedNetworkingList",
    },
    active_enhanced_firewall_policies: {
      value: azureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: azureVnetSiteVoltstackClusterActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: azureVnetSiteVoltstackClusterActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterActiveNetworkPoliciesList",
    },
    az_nodes: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterAzNodesToHclTerraform, true)(struct!.azNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterAzNodesList",
    },
    dc_cluster_group: {
      value: azureVnetSiteVoltstackClusterDcClusterGroupToHclTerraform(struct!.dcClusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterDcClusterGroupList",
    },
    global_network_list: {
      value: azureVnetSiteVoltstackClusterGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterGlobalNetworkListStructList",
    },
    k8s_cluster: {
      value: azureVnetSiteVoltstackClusterK8SClusterToHclTerraform(struct!.k8SCluster),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterK8SClusterList",
    },
    outside_static_routes: {
      value: azureVnetSiteVoltstackClusterOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterOutsideStaticRoutesList",
    },
    storage_class_list: {
      value: azureVnetSiteVoltstackClusterStorageClassListStructToHclTerraform(struct!.storageClassList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterStorageClassListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCertifiedHw = this._azureCertifiedHw;
    }
    if (this._defaultStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorage = this._defaultStorage;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noK8SCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.noK8SCluster = this._noK8SCluster;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._noOutsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOutsideStaticRoutes = this._noOutsideStaticRoutes;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._acceleratedNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking?.internalValue;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    if (this._azNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azNodes = this._azNodes?.internalValue;
    }
    if (this._dcClusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroup = this._dcClusterGroup?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._k8SCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SCluster = this._k8SCluster?.internalValue;
    }
    if (this._outsideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideStaticRoutes = this._outsideStaticRoutes?.internalValue;
    }
    if (this._storageClassList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassList = this._storageClassList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureCertifiedHw = undefined;
      this._defaultStorage = undefined;
      this._forwardProxyAllowAll = undefined;
      this._noDcClusterGroup = undefined;
      this._noForwardProxy = undefined;
      this._noGlobalNetwork = undefined;
      this._noK8SCluster = undefined;
      this._noNetworkPolicy = undefined;
      this._noOutsideStaticRoutes = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._acceleratedNetworking.internalValue = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
      this._azNodes.internalValue = undefined;
      this._dcClusterGroup.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._k8SCluster.internalValue = undefined;
      this._outsideStaticRoutes.internalValue = undefined;
      this._storageClassList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureCertifiedHw = value.azureCertifiedHw;
      this._defaultStorage = value.defaultStorage;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noForwardProxy = value.noForwardProxy;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noK8SCluster = value.noK8SCluster;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._noOutsideStaticRoutes = value.noOutsideStaticRoutes;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._acceleratedNetworking.internalValue = value.acceleratedNetworking;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
      this._azNodes.internalValue = value.azNodes;
      this._dcClusterGroup.internalValue = value.dcClusterGroup;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._k8SCluster.internalValue = value.k8SCluster;
      this._outsideStaticRoutes.internalValue = value.outsideStaticRoutes;
      this._storageClassList.internalValue = value.storageClassList;
    }
  }

  // azure_certified_hw - computed: false, optional: false, required: true
  private _azureCertifiedHw?: string; 
  public get azureCertifiedHw() {
    return this.getStringAttribute('azure_certified_hw');
  }
  public set azureCertifiedHw(value: string) {
    this._azureCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCertifiedHwInput() {
    return this._azureCertifiedHw;
  }

  // default_storage - computed: false, optional: true, required: false
  private _defaultStorage?: boolean | cdktf.IResolvable; 
  public get defaultStorage() {
    return this.getBooleanAttribute('default_storage');
  }
  public set defaultStorage(value: boolean | cdktf.IResolvable) {
    this._defaultStorage = value;
  }
  public resetDefaultStorage() {
    this._defaultStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageInput() {
    return this._defaultStorage;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_k8s_cluster - computed: false, optional: true, required: false
  private _noK8SCluster?: boolean | cdktf.IResolvable; 
  public get noK8SCluster() {
    return this.getBooleanAttribute('no_k8s_cluster');
  }
  public set noK8SCluster(value: boolean | cdktf.IResolvable) {
    this._noK8SCluster = value;
  }
  public resetNoK8SCluster() {
    this._noK8SCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noK8SClusterInput() {
    return this._noK8SCluster;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // no_outside_static_routes - computed: false, optional: true, required: false
  private _noOutsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noOutsideStaticRoutes() {
    return this.getBooleanAttribute('no_outside_static_routes');
  }
  public set noOutsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noOutsideStaticRoutes = value;
  }
  public resetNoOutsideStaticRoutes() {
    this._noOutsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOutsideStaticRoutesInput() {
    return this._noOutsideStaticRoutes;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking = new AzureVnetSiteVoltstackClusterAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: AzureVnetSiteVoltstackClusterAcceleratedNetworking) {
    this._acceleratedNetworking.internalValue = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking.internalValue;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: AzureVnetSiteVoltstackClusterActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new AzureVnetSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: AzureVnetSiteVoltstackClusterActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new AzureVnetSiteVoltstackClusterActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: AzureVnetSiteVoltstackClusterActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // az_nodes - computed: false, optional: false, required: true
  private _azNodes = new AzureVnetSiteVoltstackClusterAzNodesList(this, "az_nodes", false);
  public get azNodes() {
    return this._azNodes;
  }
  public putAzNodes(value: AzureVnetSiteVoltstackClusterAzNodes[] | cdktf.IResolvable) {
    this._azNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNodesInput() {
    return this._azNodes.internalValue;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new AzureVnetSiteVoltstackClusterDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: AzureVnetSiteVoltstackClusterDcClusterGroup) {
    this._dcClusterGroup.internalValue = value;
  }
  public resetDcClusterGroup() {
    this._dcClusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInput() {
    return this._dcClusterGroup.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new AzureVnetSiteVoltstackClusterGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: AzureVnetSiteVoltstackClusterGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // k8s_cluster - computed: false, optional: true, required: false
  private _k8SCluster = new AzureVnetSiteVoltstackClusterK8SClusterOutputReference(this, "k8s_cluster");
  public get k8SCluster() {
    return this._k8SCluster;
  }
  public putK8SCluster(value: AzureVnetSiteVoltstackClusterK8SCluster) {
    this._k8SCluster.internalValue = value;
  }
  public resetK8SCluster() {
    this._k8SCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterInput() {
    return this._k8SCluster.internalValue;
  }

  // outside_static_routes - computed: false, optional: true, required: false
  private _outsideStaticRoutes = new AzureVnetSiteVoltstackClusterOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: AzureVnetSiteVoltstackClusterOutsideStaticRoutes) {
    this._outsideStaticRoutes.internalValue = value;
  }
  public resetOutsideStaticRoutes() {
    this._outsideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideStaticRoutesInput() {
    return this._outsideStaticRoutes.internalValue;
  }

  // storage_class_list - computed: false, optional: true, required: false
  private _storageClassList = new AzureVnetSiteVoltstackClusterStorageClassListStructOutputReference(this, "storage_class_list");
  public get storageClassList() {
    return this._storageClassList;
  }
  public putStorageClassList(value: AzureVnetSiteVoltstackClusterStorageClassListStruct) {
    this._storageClassList.internalValue = value;
  }
  public resetStorageClassList() {
    this._storageClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassListInput() {
    return this._storageClassList.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable AzureVnetSite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArAcceleratedNetworkingToTerraform(struct?: AzureVnetSiteVoltstackClusterArAcceleratedNetworkingOutputReference | AzureVnetSiteVoltstackClusterArAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function azureVnetSiteVoltstackClusterArAcceleratedNetworkingToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArAcceleratedNetworkingOutputReference | AzureVnetSiteVoltstackClusterArAcceleratedNetworking): any {
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

export class AzureVnetSiteVoltstackClusterArAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArAcceleratedNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArAcceleratedNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enable = value.enable;
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

  // enable - computed: false, optional: true, required: false
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
export interface AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enhanced_firewall_policies AzureVnetSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enhancedFirewallPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enhancedFirewallPolicies.internalValue = value.enhancedFirewallPolicies;
    }
  }

  // enhanced_firewall_policies - computed: false, optional: false, required: true
  private _enhancedFirewallPolicies = new AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
