import * as cdktf from 'cdktf';
export interface AzureVnetSiteAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#decryption_provider AzureVnetSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#store_provider AzureVnetSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function azureVnetSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct?: AzureVnetSiteAdminPasswordBlindfoldSecretInfoOutputReference | AzureVnetSiteAdminPasswordBlindfoldSecretInfo): any {
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


export function azureVnetSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: AzureVnetSiteAdminPasswordBlindfoldSecretInfoOutputReference | AzureVnetSiteAdminPasswordBlindfoldSecretInfo): any {
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

export class AzureVnetSiteAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface AzureVnetSiteAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#url AzureVnetSite#url}
  */
  readonly url: string;
}

export function azureVnetSiteAdminPasswordClearSecretInfoToTerraform(struct?: AzureVnetSiteAdminPasswordClearSecretInfoOutputReference | AzureVnetSiteAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function azureVnetSiteAdminPasswordClearSecretInfoToHclTerraform(struct?: AzureVnetSiteAdminPasswordClearSecretInfoOutputReference | AzureVnetSiteAdminPasswordClearSecretInfo): any {
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

export class AzureVnetSiteAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteAdminPasswordClearSecretInfo | undefined) {
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
export interface AzureVnetSiteAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#blindfold_secret_info AzureVnetSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AzureVnetSiteAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#clear_secret_info AzureVnetSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AzureVnetSiteAdminPasswordClearSecretInfo;
}

export function azureVnetSiteAdminPasswordToTerraform(struct?: AzureVnetSiteAdminPasswordOutputReference | AzureVnetSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: azureVnetSiteAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: azureVnetSiteAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function azureVnetSiteAdminPasswordToHclTerraform(struct?: AzureVnetSiteAdminPasswordOutputReference | AzureVnetSiteAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: azureVnetSiteAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: azureVnetSiteAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteAdminPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteAdminPassword | undefined {
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

  public set internalValue(value: AzureVnetSiteAdminPassword | undefined) {
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
  private _blindfoldSecretInfo = new AzureVnetSiteAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AzureVnetSiteAdminPasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AzureVnetSiteAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AzureVnetSiteAdminPasswordClearSecretInfo) {
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
export interface AzureVnetSiteAzureCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteAzureCredToTerraform(struct?: AzureVnetSiteAzureCredOutputReference | AzureVnetSiteAzureCred): any {
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


export function azureVnetSiteAzureCredToHclTerraform(struct?: AzureVnetSiteAzureCredOutputReference | AzureVnetSiteAzureCred): any {
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

export class AzureVnetSiteAzureCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteAzureCred | undefined {
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

  public set internalValue(value: AzureVnetSiteAzureCred | undefined) {
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
export interface AzureVnetSiteBlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#dns AzureVnetSite#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#network_type AzureVnetSite#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ssh AzureVnetSite#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#web_user_interface AzureVnetSite#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteBlockedServicesBlockedSeviceToTerraform(struct?: AzureVnetSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.booleanToTerraform(struct!.dns),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    ssh: cdktf.booleanToTerraform(struct!.ssh),
    web_user_interface: cdktf.booleanToTerraform(struct!.webUserInterface),
  }
}


export function azureVnetSiteBlockedServicesBlockedSeviceToHclTerraform(struct?: AzureVnetSiteBlockedServicesBlockedSevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.booleanToHclTerraform(struct!.dns),
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
    ssh: {
      value: cdktf.booleanToHclTerraform(struct!.ssh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_user_interface: {
      value: cdktf.booleanToHclTerraform(struct!.webUserInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteBlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._ssh !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh;
    }
    if (this._webUserInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.webUserInterface = this._webUserInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteBlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._networkType = undefined;
      this._ssh = undefined;
      this._webUserInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._networkType = value.networkType;
      this._ssh = value.ssh;
      this._webUserInterface = value.webUserInterface;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: boolean | cdktf.IResolvable; 
  public get dns() {
    return this.getBooleanAttribute('dns');
  }
  public set dns(value: boolean | cdktf.IResolvable) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // ssh - computed: false, optional: true, required: false
  private _ssh?: boolean | cdktf.IResolvable; 
  public get ssh() {
    return this.getBooleanAttribute('ssh');
  }
  public set ssh(value: boolean | cdktf.IResolvable) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
  }

  // web_user_interface - computed: false, optional: true, required: false
  private _webUserInterface?: boolean | cdktf.IResolvable; 
  public get webUserInterface() {
    return this.getBooleanAttribute('web_user_interface');
  }
  public set webUserInterface(value: boolean | cdktf.IResolvable) {
    this._webUserInterface = value;
  }
  public resetWebUserInterface() {
    this._webUserInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUserInterfaceInput() {
    return this._webUserInterface;
  }
}

export class AzureVnetSiteBlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteBlockedServicesBlockedSeviceOutputReference {
    return new AzureVnetSiteBlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteBlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#blocked_sevice AzureVnetSite#blocked_sevice}
  */
  readonly blockedSevice?: AzureVnetSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function azureVnetSiteBlockedServicesToTerraform(struct?: AzureVnetSiteBlockedServicesOutputReference | AzureVnetSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(azureVnetSiteBlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function azureVnetSiteBlockedServicesToHclTerraform(struct?: AzureVnetSiteBlockedServicesOutputReference | AzureVnetSiteBlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(azureVnetSiteBlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteBlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteBlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteBlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteBlockedServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedSevice.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedSevice.internalValue = value.blockedSevice;
    }
  }

  // blocked_sevice - computed: false, optional: true, required: false
  private _blockedSevice = new AzureVnetSiteBlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: AzureVnetSiteBlockedServicesBlockedSevice[] | cdktf.IResolvable) {
    this._blockedSevice.internalValue = value;
  }
  public resetBlockedSevice() {
    this._blockedSevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedSeviceInput() {
    return this._blockedSevice.internalValue;
  }
}
export interface AzureVnetSiteCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#latitude AzureVnetSite#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#longitude AzureVnetSite#longitude}
  */
  readonly longitude?: number;
}

export function azureVnetSiteCoordinatesToTerraform(struct?: AzureVnetSiteCoordinatesOutputReference | AzureVnetSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function azureVnetSiteCoordinatesToHclTerraform(struct?: AzureVnetSiteCoordinatesOutputReference | AzureVnetSiteCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface AzureVnetSiteCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#inside_nameserver AzureVnetSite#inside_nameserver}
  */
  readonly insideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#inside_nameserver_v6 AzureVnetSite#inside_nameserver_v6}
  */
  readonly insideNameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#outside_nameserver AzureVnetSite#outside_nameserver}
  */
  readonly outsideNameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#outside_nameserver_v6 AzureVnetSite#outside_nameserver_v6}
  */
  readonly outsideNameserverV6?: string;
}

export function azureVnetSiteCustomDnsToTerraform(struct?: AzureVnetSiteCustomDnsOutputReference | AzureVnetSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_nameserver: cdktf.stringToTerraform(struct!.insideNameserver),
    inside_nameserver_v6: cdktf.stringToTerraform(struct!.insideNameserverV6),
    outside_nameserver: cdktf.stringToTerraform(struct!.outsideNameserver),
    outside_nameserver_v6: cdktf.stringToTerraform(struct!.outsideNameserverV6),
  }
}


export function azureVnetSiteCustomDnsToHclTerraform(struct?: AzureVnetSiteCustomDnsOutputReference | AzureVnetSiteCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.insideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_nameserver_v6: {
      value: cdktf.stringToHclTerraform(struct!.outsideNameserverV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserver = this._insideNameserver;
    }
    if (this._insideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNameserverV6 = this._insideNameserverV6;
    }
    if (this._outsideNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserver = this._outsideNameserver;
    }
    if (this._outsideNameserverV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNameserverV6 = this._outsideNameserverV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNameserver = undefined;
      this._insideNameserverV6 = undefined;
      this._outsideNameserver = undefined;
      this._outsideNameserverV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNameserver = value.insideNameserver;
      this._insideNameserverV6 = value.insideNameserverV6;
      this._outsideNameserver = value.outsideNameserver;
      this._outsideNameserverV6 = value.outsideNameserverV6;
    }
  }

  // inside_nameserver - computed: false, optional: true, required: false
  private _insideNameserver?: string; 
  public get insideNameserver() {
    return this.getStringAttribute('inside_nameserver');
  }
  public set insideNameserver(value: string) {
    this._insideNameserver = value;
  }
  public resetInsideNameserver() {
    this._insideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverInput() {
    return this._insideNameserver;
  }

  // inside_nameserver_v6 - computed: false, optional: true, required: false
  private _insideNameserverV6?: string; 
  public get insideNameserverV6() {
    return this.getStringAttribute('inside_nameserver_v6');
  }
  public set insideNameserverV6(value: string) {
    this._insideNameserverV6 = value;
  }
  public resetInsideNameserverV6() {
    this._insideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNameserverV6Input() {
    return this._insideNameserverV6;
  }

  // outside_nameserver - computed: false, optional: true, required: false
  private _outsideNameserver?: string; 
  public get outsideNameserver() {
    return this.getStringAttribute('outside_nameserver');
  }
  public set outsideNameserver(value: string) {
    this._outsideNameserver = value;
  }
  public resetOutsideNameserver() {
    this._outsideNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverInput() {
    return this._outsideNameserver;
  }

  // outside_nameserver_v6 - computed: false, optional: true, required: false
  private _outsideNameserverV6?: string; 
  public get outsideNameserverV6() {
    return this.getStringAttribute('outside_nameserver_v6');
  }
  public set outsideNameserverV6(value: string) {
    this._outsideNameserverV6 = value;
  }
  public resetOutsideNameserverV6() {
    this._outsideNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNameserverV6Input() {
    return this._outsideNameserverV6;
  }
}
export interface AzureVnetSiteIngressEgressGwAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#enable AzureVnetSite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwAcceleratedNetworkingToTerraform(struct?: AzureVnetSiteIngressEgressGwAcceleratedNetworkingOutputReference | AzureVnetSiteIngressEgressGwAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function azureVnetSiteIngressEgressGwAcceleratedNetworkingToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAcceleratedNetworkingOutputReference | AzureVnetSiteIngressEgressGwAcceleratedNetworking): any {
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

export class AzureVnetSiteIngressEgressGwAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAcceleratedNetworking | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAcceleratedNetworking | undefined) {
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
export interface AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#enhanced_firewall_policies AzureVnetSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies | undefined) {
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
  private _enhancedFirewallPolicies = new AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#forward_proxy_policies AzureVnetSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference | AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference | AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#network_policies AzureVnetSite#network_policies}
  */
  readonly networkPolicies: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwActiveNetworkPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesOutputReference | AzureVnetSiteIngressEgressGwActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(azureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function azureVnetSiteIngressEgressGwActiveNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesOutputReference | AzureVnetSiteIngressEgressGwActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwActiveNetworkPolicies | undefined) {
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
  private _networkPolicies = new AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AzureVnetSiteIngressEgressGwActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet): any {
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


export function azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet): any {
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

export class AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet | undefined) {
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
export interface AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam): any {
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

export class AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam | undefined) {
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
export interface AzureVnetSiteIngressEgressGwAzNodesInsideSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwAzNodesInsideSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwAzNodesInsideSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesInsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwAzNodesInsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodesInsideSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodesInsideSubnet | undefined) {
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
  private _subnet = new AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnet) {
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
  private _subnetParam = new AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwAzNodesInsideSubnetSubnetParam) {
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
export interface AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet): any {
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


export function azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet): any {
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

export class AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet | undefined) {
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
export interface AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam): any {
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

export class AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam | undefined) {
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
export interface AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwAzNodesOutsideSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwAzNodesOutsideSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetOutputReference | AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet | undefined) {
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
  private _subnet = new AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnet) {
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
  private _subnetParam = new AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetSubnetParam) {
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
export interface AzureVnetSiteIngressEgressGwAzNodes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#azure_az AzureVnetSite#azure_az}
  */
  readonly azureAz: string;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#inside_subnet AzureVnetSite#inside_subnet}
  */
  readonly insideSubnet?: AzureVnetSiteIngressEgressGwAzNodesInsideSubnet;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#outside_subnet AzureVnetSite#outside_subnet}
  */
  readonly outsideSubnet?: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet;
}

export function azureVnetSiteIngressEgressGwAzNodesToTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_az: cdktf.stringToTerraform(struct!.azureAz),
    inside_subnet: azureVnetSiteIngressEgressGwAzNodesInsideSubnetToTerraform(struct!.insideSubnet),
    outside_subnet: azureVnetSiteIngressEgressGwAzNodesOutsideSubnetToTerraform(struct!.outsideSubnet),
  }
}


export function azureVnetSiteIngressEgressGwAzNodesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwAzNodes | cdktf.IResolvable): any {
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
    inside_subnet: {
      value: azureVnetSiteIngressEgressGwAzNodesInsideSubnetToHclTerraform(struct!.insideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesInsideSubnetList",
    },
    outside_subnet: {
      value: azureVnetSiteIngressEgressGwAzNodesOutsideSubnetToHclTerraform(struct!.outsideSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwAzNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwAzNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAz = this._azureAz;
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwAzNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAz = undefined;
      this._insideSubnet.internalValue = undefined;
      this._outsideSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAz = value.azureAz;
      this._insideSubnet.internalValue = value.insideSubnet;
      this._outsideSubnet.internalValue = value.outsideSubnet;
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

  // inside_subnet - computed: false, optional: true, required: false
  private _insideSubnet = new AzureVnetSiteIngressEgressGwAzNodesInsideSubnetOutputReference(this, "inside_subnet");
  public get insideSubnet() {
    return this._insideSubnet;
  }
  public putInsideSubnet(value: AzureVnetSiteIngressEgressGwAzNodesInsideSubnet) {
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
  private _outsideSubnet = new AzureVnetSiteIngressEgressGwAzNodesOutsideSubnetOutputReference(this, "outside_subnet");
  public get outsideSubnet() {
    return this._outsideSubnet;
  }
  public putOutsideSubnet(value: AzureVnetSiteIngressEgressGwAzNodesOutsideSubnet) {
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

export class AzureVnetSiteIngressEgressGwAzNodesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwAzNodes[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwAzNodesOutputReference {
    return new AzureVnetSiteIngressEgressGwAzNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwDcClusterGroupInsideVnToTerraform(struct?: AzureVnetSiteIngressEgressGwDcClusterGroupInsideVnOutputReference | AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn): any {
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


export function azureVnetSiteIngressEgressGwDcClusterGroupInsideVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwDcClusterGroupInsideVnOutputReference | AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn): any {
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

export class AzureVnetSiteIngressEgressGwDcClusterGroupInsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwDcClusterGroupOutsideVnToTerraform(struct?: AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference | AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn): any {
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


export function azureVnetSiteIngressEgressGwDcClusterGroupOutsideVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference | AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn): any {
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

export class AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
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
  private _globalVn = new AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
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
  private _globalVn = new AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections {
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sli_to_global_dr AzureVnetSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#slo_to_global_dr AzureVnetSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_to_global_dr: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sli_to_global_dr: {
      value: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
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
  private _sloToGlobalDr = new AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
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

export class AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_network_connections AzureVnetSite#global_network_connections}
  */
  readonly globalNetworkConnections: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwGlobalNetworkListStructToTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListStructOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function azureVnetSiteIngressEgressGwGlobalNetworkListStructToHclTerraform(struct?: AzureVnetSiteIngressEgressGwGlobalNetworkListStructOutputReference | AzureVnetSiteIngressEgressGwGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwGlobalNetworkListStruct | undefined) {
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
  private _globalNetworkConnections = new AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: AzureVnetSiteIngressEgressGwGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#description AzureVnetSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name: string;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#decryption_provider AzureVnetSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#store_provider AzureVnetSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo): any {
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


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#url AzureVnetSite#url}
  */
  readonly url: string;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#blindfold_secret_info AzureVnetSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#clear_secret_info AzureVnetSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey | undefined) {
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
  private _blindfoldSecretInfo = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#circuit_id AzureVnetSite#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * authorized_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#authorized_key AzureVnetSite#authorized_key}
  */
  readonly authorizedKey?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    authorized_key: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToTerraform(struct!.authorizedKey),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription): any {
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
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToHclTerraform(struct!.authorizedKey),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription | undefined) {
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
  private _authorizedKey = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference(this, "authorized_key");
  public get authorizedKey() {
    return this._authorizedKey;
  }
  public putAuthorizedKey(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#circuit_id AzureVnetSite#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#weight AzureVnetSite#weight}
  */
  readonly weight?: number;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#metadata AzureVnetSite#metadata}
  */
  readonly metadata: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata;
  /**
  * other_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#other_subscription AzureVnetSite#other_subscription}
  */
  readonly otherSubscription?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    weight: cdktf.numberToTerraform(struct!.weight),
    metadata: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataToTerraform(struct!.metadata),
    other_subscription: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionToTerraform(struct!.otherSubscription),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections | cdktf.IResolvable): any {
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
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataList",
    },
    other_subscription: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionToHclTerraform(struct!.otherSubscription),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections | cdktf.IResolvable | undefined) {
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
  private _metadata = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // other_subscription - computed: false, optional: true, required: false
  private _otherSubscription = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscriptionOutputReference(this, "other_subscription");
  public get otherSubscription() {
    return this._otherSubscription;
  }
  public putOtherSubscription(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOtherSubscription) {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOutputReference {
    return new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    subnet: azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet): any {
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
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet | undefined) {
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
  private _subnet = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnet) {
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
  private _subnetParam = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetSubnetParam) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_resource_grp: cdktf.stringToTerraform(struct!.subnetResourceGrp),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    subnet: azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet): any {
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
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet | undefined) {
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
  private _subnet = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnet) {
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
  private _subnetParam = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetSubnetParam) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#cloudlink_network_name AzureVnetSite#cloudlink_network_name}
  */
  readonly cloudlinkNetworkName: string;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudlink_network_name: cdktf.stringToTerraform(struct!.cloudlinkNetworkName),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute): any {
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

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudlinkNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudlinkNetworkName = this._cloudlinkNetworkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubExpressRouteEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#advertise_to_route_server AzureVnetSite#advertise_to_route_server}
  */
  readonly advertiseToRouteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto_asn AzureVnetSite#auto_asn}
  */
  readonly autoAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#custom_asn AzureVnetSite#custom_asn}
  */
  readonly customAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#do_not_advertise_to_route_server AzureVnetSite#do_not_advertise_to_route_server}
  */
  readonly doNotAdvertiseToRouteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#site_registration_over_internet AzureVnetSite#site_registration_over_internet}
  */
  readonly siteRegistrationOverInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_ergw1az AzureVnetSite#sku_ergw1az}
  */
  readonly skuErgw1Az?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_ergw2az AzureVnetSite#sku_ergw2az}
  */
  readonly skuErgw2Az?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_high_perf AzureVnetSite#sku_high_perf}
  */
  readonly skuHighPerf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_standard AzureVnetSite#sku_standard}
  */
  readonly skuStandard?: boolean | cdktf.IResolvable;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#connections AzureVnetSite#connections}
  */
  readonly connections: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections[] | cdktf.IResolvable;
  /**
  * gateway_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#gateway_subnet AzureVnetSite#gateway_subnet}
  */
  readonly gatewaySubnet?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet;
  /**
  * route_server_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#route_server_subnet AzureVnetSite#route_server_subnet}
  */
  readonly routeServerSubnet?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet;
  /**
  * site_registration_over_express_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#site_registration_over_express_route AzureVnetSite#site_registration_over_express_route}
  */
  readonly siteRegistrationOverExpressRoute?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute;
}

export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledToTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabled): any {
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
    connections: cdktf.listMapper(azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsToTerraform, true)(struct!.connections),
    gateway_subnet: azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetToTerraform(struct!.gatewaySubnet),
    route_server_subnet: azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetToTerraform(struct!.routeServerSubnet),
    site_registration_over_express_route: azureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteToTerraform(struct!.siteRegistrationOverExpressRoute),
  }
}


export function azureVnetSiteIngressEgressGwHubExpressRouteEnabledToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledOutputReference | AzureVnetSiteIngressEgressGwHubExpressRouteEnabled): any {
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
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsToHclTerraform, true)(struct!.connections),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsList",
    },
    gateway_subnet: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetToHclTerraform(struct!.gatewaySubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetList",
    },
    route_server_subnet: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetToHclTerraform(struct!.routeServerSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetList",
    },
    site_registration_over_express_route: {
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteToHclTerraform(struct!.siteRegistrationOverExpressRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubExpressRouteEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubExpressRouteEnabled | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabled | undefined) {
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
  private _connections = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnectionsList(this, "connections", false);
  public get connections() {
    return this._connections;
  }
  public putConnections(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledConnections[] | cdktf.IResolvable) {
    this._connections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // gateway_subnet - computed: false, optional: true, required: false
  private _gatewaySubnet = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnetOutputReference(this, "gateway_subnet");
  public get gatewaySubnet() {
    return this._gatewaySubnet;
  }
  public putGatewaySubnet(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledGatewaySubnet) {
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
  private _routeServerSubnet = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnetOutputReference(this, "route_server_subnet");
  public get routeServerSubnet() {
    return this._routeServerSubnet;
  }
  public putRouteServerSubnet(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledRouteServerSubnet) {
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
  private _siteRegistrationOverExpressRoute = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRouteOutputReference(this, "site_registration_over_express_route");
  public get siteRegistrationOverExpressRoute() {
    return this._siteRegistrationOverExpressRoute;
  }
  public putSiteRegistrationOverExpressRoute(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabledSiteRegistrationOverExpressRoute) {
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
export interface AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#f5_orchestrated_routing AzureVnetSite#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#manual_routing AzureVnetSite#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#resource_group AzureVnetSite#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_name AzureVnetSite#vnet_name}
  */
  readonly vnetName: string;
}

export function azureVnetSiteIngressEgressGwHubSpokeVnetsVnetToTerraform(struct?: AzureVnetSiteIngressEgressGwHubSpokeVnetsVnetOutputReference | AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet): any {
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


export function azureVnetSiteIngressEgressGwHubSpokeVnetsVnetToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubSpokeVnetsVnetOutputReference | AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet): any {
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

export class AzureVnetSiteIngressEgressGwHubSpokeVnetsVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet | undefined) {
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
export interface AzureVnetSiteIngressEgressGwHubSpokeVnets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#manual AzureVnetSite#manual}
  */
  readonly manual?: boolean | cdktf.IResolvable;
  /**
  * vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet AzureVnetSite#vnet}
  */
  readonly vnet?: AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet;
}

export function azureVnetSiteIngressEgressGwHubSpokeVnetsToTerraform(struct?: AzureVnetSiteIngressEgressGwHubSpokeVnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    manual: cdktf.booleanToTerraform(struct!.manual),
    vnet: azureVnetSiteIngressEgressGwHubSpokeVnetsVnetToTerraform(struct!.vnet),
  }
}


export function azureVnetSiteIngressEgressGwHubSpokeVnetsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubSpokeVnets | cdktf.IResolvable): any {
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
      value: azureVnetSiteIngressEgressGwHubSpokeVnetsVnetToHclTerraform(struct!.vnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubSpokeVnetsVnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubSpokeVnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwHubSpokeVnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHubSpokeVnets | cdktf.IResolvable | undefined) {
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
  private _vnet = new AzureVnetSiteIngressEgressGwHubSpokeVnetsVnetOutputReference(this, "vnet");
  public get vnet() {
    return this._vnet;
  }
  public putVnet(value: AzureVnetSiteIngressEgressGwHubSpokeVnetsVnet) {
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

export class AzureVnetSiteIngressEgressGwHubSpokeVnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwHubSpokeVnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwHubSpokeVnetsOutputReference {
    return new AzureVnetSiteIngressEgressGwHubSpokeVnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwHub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#express_route_disabled AzureVnetSite#express_route_disabled}
  */
  readonly expressRouteDisabled?: boolean | cdktf.IResolvable;
  /**
  * express_route_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#express_route_enabled AzureVnetSite#express_route_enabled}
  */
  readonly expressRouteEnabled?: AzureVnetSiteIngressEgressGwHubExpressRouteEnabled;
  /**
  * spoke_vnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#spoke_vnets AzureVnetSite#spoke_vnets}
  */
  readonly spokeVnets?: AzureVnetSiteIngressEgressGwHubSpokeVnets[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwHubToTerraform(struct?: AzureVnetSiteIngressEgressGwHubOutputReference | AzureVnetSiteIngressEgressGwHub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    express_route_disabled: cdktf.booleanToTerraform(struct!.expressRouteDisabled),
    express_route_enabled: azureVnetSiteIngressEgressGwHubExpressRouteEnabledToTerraform(struct!.expressRouteEnabled),
    spoke_vnets: cdktf.listMapper(azureVnetSiteIngressEgressGwHubSpokeVnetsToTerraform, true)(struct!.spokeVnets),
  }
}


export function azureVnetSiteIngressEgressGwHubToHclTerraform(struct?: AzureVnetSiteIngressEgressGwHubOutputReference | AzureVnetSiteIngressEgressGwHub): any {
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
      value: azureVnetSiteIngressEgressGwHubExpressRouteEnabledToHclTerraform(struct!.expressRouteEnabled),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubExpressRouteEnabledList",
    },
    spoke_vnets: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwHubSpokeVnetsToHclTerraform, true)(struct!.spokeVnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubSpokeVnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwHubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwHub | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwHub | undefined) {
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
  private _expressRouteEnabled = new AzureVnetSiteIngressEgressGwHubExpressRouteEnabledOutputReference(this, "express_route_enabled");
  public get expressRouteEnabled() {
    return this._expressRouteEnabled;
  }
  public putExpressRouteEnabled(value: AzureVnetSiteIngressEgressGwHubExpressRouteEnabled) {
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
  private _spokeVnets = new AzureVnetSiteIngressEgressGwHubSpokeVnetsList(this, "spoke_vnets", false);
  public get spokeVnets() {
    return this._spokeVnets;
  }
  public putSpokeVnets(value: AzureVnetSiteIngressEgressGwHubSpokeVnets[] | cdktf.IResolvable) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
  */
  readonly nexthopAddress?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
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
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
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
  private _interface = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
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
  private _nexthopAddress = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#attrs AzureVnetSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#nexthop AzureVnetSite#nexthop}
  */
  readonly nexthop?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
  */
  readonly subnets: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute): any {
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
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
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
  private _nexthop = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
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
  private _subnets = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
  */
  readonly customStaticRoute?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
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
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
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
  private _customStaticRoute = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListCustomStaticRoute) {
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

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructOutputReference {
    return new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwInsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
  */
  readonly staticRouteList: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwInsideStaticRoutesToTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function azureVnetSiteIngressEgressGwInsideStaticRoutesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwInsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwInsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwInsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwInsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwInsideStaticRoutes | undefined) {
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
  private _staticRouteList = new AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AzureVnetSiteIngressEgressGwInsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
  */
  readonly nexthopAddress?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
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
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
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
  private _interface = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
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
  private _nexthopAddress = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
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
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
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
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#attrs AzureVnetSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#nexthop AzureVnetSite#nexthop}
  */
  readonly nexthop?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
  */
  readonly subnets: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
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
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
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
  private _nexthop = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
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
  private _subnets = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
  */
  readonly customStaticRoute?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
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
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
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
  private _customStaticRoute = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
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

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
  */
  readonly staticRouteList: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwOutsideStaticRoutesToTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function azureVnetSiteIngressEgressGwOutsideStaticRoutesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutsideStaticRoutesOutputReference | AzureVnetSiteIngressEgressGwOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutes | undefined) {
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
  private _staticRouteList = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#jumbo AzureVnetSite#jumbo}
  */
  readonly jumbo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_jumbo AzureVnetSite#no_jumbo}
  */
  readonly noJumbo?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct?: AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jumbo: cdktf.booleanToTerraform(struct!.jumbo),
    no_jumbo: cdktf.booleanToTerraform(struct!.noJumbo),
  }
}


export function azureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct?: AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference | AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced): any {
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

export class AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced | undefined) {
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
export interface AzureVnetSiteIngressEgressGwPerformanceEnhancementMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#perf_mode_l7_enhanced AzureVnetSite#perf_mode_l7_enhanced}
  */
  readonly perfModeL7Enhanced?: boolean | cdktf.IResolvable;
  /**
  * perf_mode_l3_enhanced block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#perf_mode_l3_enhanced AzureVnetSite#perf_mode_l3_enhanced}
  */
  readonly perfModeL3Enhanced?: AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced;
}

export function azureVnetSiteIngressEgressGwPerformanceEnhancementModeToTerraform(struct?: AzureVnetSiteIngressEgressGwPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressEgressGwPerformanceEnhancementMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perf_mode_l7_enhanced: cdktf.booleanToTerraform(struct!.perfModeL7Enhanced),
    perf_mode_l3_enhanced: azureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToTerraform(struct!.perfModeL3Enhanced),
  }
}


export function azureVnetSiteIngressEgressGwPerformanceEnhancementModeToHclTerraform(struct?: AzureVnetSiteIngressEgressGwPerformanceEnhancementModeOutputReference | AzureVnetSiteIngressEgressGwPerformanceEnhancementMode): any {
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
      value: azureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedToHclTerraform(struct!.perfModeL3Enhanced),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwPerformanceEnhancementModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwPerformanceEnhancementMode | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwPerformanceEnhancementMode | undefined) {
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
  private _perfModeL3Enhanced = new AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3EnhancedOutputReference(this, "perf_mode_l3_enhanced");
  public get perfModeL3Enhanced() {
    return this._perfModeL3Enhanced;
  }
  public putPerfModeL3Enhanced(value: AzureVnetSiteIngressEgressGwPerformanceEnhancementModePerfModeL3Enhanced) {
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
export interface AzureVnetSiteIngressEgressGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#azure_certified_hw AzureVnetSite#azure_certified_hw}
  */
  readonly azureCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#forward_proxy_allow_all AzureVnetSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_dc_cluster_group AzureVnetSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_forward_proxy AzureVnetSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_global_network AzureVnetSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_inside_static_routes AzureVnetSite#no_inside_static_routes}
  */
  readonly noInsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_network_policy AzureVnetSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#no_outside_static_routes AzureVnetSite#no_outside_static_routes}
  */
  readonly noOutsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#not_hub AzureVnetSite#not_hub}
  */
  readonly notHub?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sm_connection_public_ip AzureVnetSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sm_connection_pvt_ip AzureVnetSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * accelerated_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#accelerated_networking AzureVnetSite#accelerated_networking}
  */
  readonly acceleratedNetworking?: AzureVnetSiteIngressEgressGwAcceleratedNetworking;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#active_enhanced_firewall_policies AzureVnetSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#active_forward_proxy_policies AzureVnetSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#active_network_policies AzureVnetSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: AzureVnetSiteIngressEgressGwActiveNetworkPolicies;
  /**
  * az_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#az_nodes AzureVnetSite#az_nodes}
  */
  readonly azNodes: AzureVnetSiteIngressEgressGwAzNodes[] | cdktf.IResolvable;
  /**
  * dc_cluster_group_inside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#dc_cluster_group_inside_vn AzureVnetSite#dc_cluster_group_inside_vn}
  */
  readonly dcClusterGroupInsideVn?: AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn;
  /**
  * dc_cluster_group_outside_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#dc_cluster_group_outside_vn AzureVnetSite#dc_cluster_group_outside_vn}
  */
  readonly dcClusterGroupOutsideVn?: AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_network_list AzureVnetSite#global_network_list}
  */
  readonly globalNetworkList?: AzureVnetSiteIngressEgressGwGlobalNetworkListStruct;
  /**
  * hub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#hub AzureVnetSite#hub}
  */
  readonly hub?: AzureVnetSiteIngressEgressGwHub;
  /**
  * inside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#inside_static_routes AzureVnetSite#inside_static_routes}
  */
  readonly insideStaticRoutes?: AzureVnetSiteIngressEgressGwInsideStaticRoutes;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#outside_static_routes AzureVnetSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: AzureVnetSiteIngressEgressGwOutsideStaticRoutes;
  /**
  * performance_enhancement_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#performance_enhancement_mode AzureVnetSite#performance_enhancement_mode}
  */
  readonly performanceEnhancementMode?: AzureVnetSiteIngressEgressGwPerformanceEnhancementMode;
}

export function azureVnetSiteIngressEgressGwToTerraform(struct?: AzureVnetSiteIngressEgressGwOutputReference | AzureVnetSiteIngressEgressGw): any {
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
    accelerated_networking: azureVnetSiteIngressEgressGwAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    active_enhanced_firewall_policies: azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: azureVnetSiteIngressEgressGwActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    az_nodes: cdktf.listMapper(azureVnetSiteIngressEgressGwAzNodesToTerraform, true)(struct!.azNodes),
    dc_cluster_group_inside_vn: azureVnetSiteIngressEgressGwDcClusterGroupInsideVnToTerraform(struct!.dcClusterGroupInsideVn),
    dc_cluster_group_outside_vn: azureVnetSiteIngressEgressGwDcClusterGroupOutsideVnToTerraform(struct!.dcClusterGroupOutsideVn),
    global_network_list: azureVnetSiteIngressEgressGwGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    hub: azureVnetSiteIngressEgressGwHubToTerraform(struct!.hub),
    inside_static_routes: azureVnetSiteIngressEgressGwInsideStaticRoutesToTerraform(struct!.insideStaticRoutes),
    outside_static_routes: azureVnetSiteIngressEgressGwOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
    performance_enhancement_mode: azureVnetSiteIngressEgressGwPerformanceEnhancementModeToTerraform(struct!.performanceEnhancementMode),
  }
}


export function azureVnetSiteIngressEgressGwToHclTerraform(struct?: AzureVnetSiteIngressEgressGwOutputReference | AzureVnetSiteIngressEgressGw): any {
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
      value: azureVnetSiteIngressEgressGwAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAcceleratedNetworkingList",
    },
    active_enhanced_firewall_policies: {
      value: azureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: azureVnetSiteIngressEgressGwActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: azureVnetSiteIngressEgressGwActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwActiveNetworkPoliciesList",
    },
    az_nodes: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwAzNodesToHclTerraform, true)(struct!.azNodes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwAzNodesList",
    },
    dc_cluster_group_inside_vn: {
      value: azureVnetSiteIngressEgressGwDcClusterGroupInsideVnToHclTerraform(struct!.dcClusterGroupInsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwDcClusterGroupInsideVnList",
    },
    dc_cluster_group_outside_vn: {
      value: azureVnetSiteIngressEgressGwDcClusterGroupOutsideVnToHclTerraform(struct!.dcClusterGroupOutsideVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVnList",
    },
    global_network_list: {
      value: azureVnetSiteIngressEgressGwGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwGlobalNetworkListStructList",
    },
    hub: {
      value: azureVnetSiteIngressEgressGwHubToHclTerraform(struct!.hub),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwHubList",
    },
    inside_static_routes: {
      value: azureVnetSiteIngressEgressGwInsideStaticRoutesToHclTerraform(struct!.insideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwInsideStaticRoutesList",
    },
    outside_static_routes: {
      value: azureVnetSiteIngressEgressGwOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwOutsideStaticRoutesList",
    },
    performance_enhancement_mode: {
      value: azureVnetSiteIngressEgressGwPerformanceEnhancementModeToHclTerraform(struct!.performanceEnhancementMode),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwPerformanceEnhancementModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGw | undefined {
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
    if (this._azNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azNodes = this._azNodes?.internalValue;
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

  public set internalValue(value: AzureVnetSiteIngressEgressGw | undefined) {
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
      this._azNodes.internalValue = undefined;
      this._dcClusterGroupInsideVn.internalValue = undefined;
      this._dcClusterGroupOutsideVn.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._hub.internalValue = undefined;
      this._insideStaticRoutes.internalValue = undefined;
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
      this._azNodes.internalValue = value.azNodes;
      this._dcClusterGroupInsideVn.internalValue = value.dcClusterGroupInsideVn;
      this._dcClusterGroupOutsideVn.internalValue = value.dcClusterGroupOutsideVn;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._hub.internalValue = value.hub;
      this._insideStaticRoutes.internalValue = value.insideStaticRoutes;
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
  private _acceleratedNetworking = new AzureVnetSiteIngressEgressGwAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: AzureVnetSiteIngressEgressGwAcceleratedNetworking) {
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
  private _activeEnhancedFirewallPolicies = new AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: AzureVnetSiteIngressEgressGwActiveEnhancedFirewallPolicies) {
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
  private _activeForwardProxyPolicies = new AzureVnetSiteIngressEgressGwActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: AzureVnetSiteIngressEgressGwActiveForwardProxyPolicies) {
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
  private _activeNetworkPolicies = new AzureVnetSiteIngressEgressGwActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: AzureVnetSiteIngressEgressGwActiveNetworkPolicies) {
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
  private _azNodes = new AzureVnetSiteIngressEgressGwAzNodesList(this, "az_nodes", false);
  public get azNodes() {
    return this._azNodes;
  }
  public putAzNodes(value: AzureVnetSiteIngressEgressGwAzNodes[] | cdktf.IResolvable) {
    this._azNodes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNodesInput() {
    return this._azNodes.internalValue;
  }

  // dc_cluster_group_inside_vn - computed: false, optional: true, required: false
  private _dcClusterGroupInsideVn = new AzureVnetSiteIngressEgressGwDcClusterGroupInsideVnOutputReference(this, "dc_cluster_group_inside_vn");
  public get dcClusterGroupInsideVn() {
    return this._dcClusterGroupInsideVn;
  }
  public putDcClusterGroupInsideVn(value: AzureVnetSiteIngressEgressGwDcClusterGroupInsideVn) {
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
  private _dcClusterGroupOutsideVn = new AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVnOutputReference(this, "dc_cluster_group_outside_vn");
  public get dcClusterGroupOutsideVn() {
    return this._dcClusterGroupOutsideVn;
  }
  public putDcClusterGroupOutsideVn(value: AzureVnetSiteIngressEgressGwDcClusterGroupOutsideVn) {
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
  private _globalNetworkList = new AzureVnetSiteIngressEgressGwGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: AzureVnetSiteIngressEgressGwGlobalNetworkListStruct) {
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
  private _hub = new AzureVnetSiteIngressEgressGwHubOutputReference(this, "hub");
  public get hub() {
    return this._hub;
  }
  public putHub(value: AzureVnetSiteIngressEgressGwHub) {
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
  private _insideStaticRoutes = new AzureVnetSiteIngressEgressGwInsideStaticRoutesOutputReference(this, "inside_static_routes");
  public get insideStaticRoutes() {
    return this._insideStaticRoutes;
  }
  public putInsideStaticRoutes(value: AzureVnetSiteIngressEgressGwInsideStaticRoutes) {
    this._insideStaticRoutes.internalValue = value;
  }
  public resetInsideStaticRoutes() {
    this._insideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideStaticRoutesInput() {
    return this._insideStaticRoutes.internalValue;
  }

  // outside_static_routes - computed: false, optional: true, required: false
  private _outsideStaticRoutes = new AzureVnetSiteIngressEgressGwOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: AzureVnetSiteIngressEgressGwOutsideStaticRoutes) {
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
  private _performanceEnhancementMode = new AzureVnetSiteIngressEgressGwPerformanceEnhancementModeOutputReference(this, "performance_enhancement_mode");
  public get performanceEnhancementMode() {
    return this._performanceEnhancementMode;
  }
  public putPerformanceEnhancementMode(value: AzureVnetSiteIngressEgressGwPerformanceEnhancementMode) {
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
export interface AzureVnetSiteIngressEgressGwArAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#disable AzureVnetSite#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#enable AzureVnetSite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArAcceleratedNetworkingToTerraform(struct?: AzureVnetSiteIngressEgressGwArAcceleratedNetworkingOutputReference | AzureVnetSiteIngressEgressGwArAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function azureVnetSiteIngressEgressGwArAcceleratedNetworkingToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArAcceleratedNetworkingOutputReference | AzureVnetSiteIngressEgressGwArAcceleratedNetworking): any {
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

export class AzureVnetSiteIngressEgressGwArAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArAcceleratedNetworking | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArAcceleratedNetworking | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#enhanced_firewall_policies AzureVnetSite#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesOutputReference | AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPolicies | undefined) {
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
  private _enhancedFirewallPolicies = new AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: AzureVnetSiteIngressEgressGwArActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#forward_proxy_policies AzureVnetSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesOutputReference | AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesOutputReference | AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AzureVnetSiteIngressEgressGwArActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#network_policies AzureVnetSite#network_policies}
  */
  readonly networkPolicies: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArActiveNetworkPoliciesToTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesOutputReference | AzureVnetSiteIngressEgressGwArActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(azureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function azureVnetSiteIngressEgressGwArActiveNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesOutputReference | AzureVnetSiteIngressEgressGwArActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArActiveNetworkPolicies | undefined) {
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
  private _networkPolicies = new AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AzureVnetSiteIngressEgressGwArActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArDcClusterGroupInsideVnToTerraform(struct?: AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVnOutputReference | AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn): any {
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


export function azureVnetSiteIngressEgressGwArDcClusterGroupInsideVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVnOutputReference | AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn): any {
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

export class AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArDcClusterGroupInsideVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnToTerraform(struct?: AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnOutputReference | AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn): any {
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


export function azureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnOutputReference | AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn): any {
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

export class AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArDcClusterGroupOutsideVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
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
  private _globalVn = new AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
  */
  readonly tenant?: string;
}

export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
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
  private _globalVn = new AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections {
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sli_to_global_dr AzureVnetSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#slo_to_global_dr AzureVnetSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sli_to_global_dr: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sli_to_global_dr: {
      value: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._sliToGlobalDr.internalValue = value.sliToGlobalDr;
      this._sloToGlobalDr.internalValue = value.sloToGlobalDr;
    }
  }

  // sli_to_global_dr - computed: false, optional: true, required: false
  private _sliToGlobalDr = new AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
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
  private _sloToGlobalDr = new AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
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

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#global_network_connections AzureVnetSite#global_network_connections}
  */
  readonly globalNetworkConnections: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function azureVnetSiteIngressEgressGwArGlobalNetworkListStructToTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListStructOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function azureVnetSiteIngressEgressGwArGlobalNetworkListStructToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArGlobalNetworkListStructOutputReference | AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(azureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteIngressEgressGwArGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListStruct | undefined) {
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
  private _globalNetworkConnections = new AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: AzureVnetSiteIngressEgressGwArGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#description AzureVnetSite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata): any {
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

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#decryption_provider AzureVnetSite#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#location AzureVnetSite#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#store_provider AzureVnetSite#store_provider}
  */
  readonly storeProvider?: string;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo): any {
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


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo): any {
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

export class AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo | undefined) {
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#url AzureVnetSite#url}
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
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#blindfold_secret_info AzureVnetSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#clear_secret_info AzureVnetSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfo;
}

export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyToHclTerraform(struct?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyOutputReference | AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: azureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKeyClearSecretInfoList",
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

  public set internalValue(value: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscriptionAuthorizedKey | undefined) {
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
}
export interface AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsOtherSubscription {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#circuit_id AzureVnetSite#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * authorized_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#authorized_key AzureVnetSite#authorized_key}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#circuit_id AzureVnetSite#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#weight AzureVnetSite#weight}
  */
  readonly weight?: number;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#metadata AzureVnetSite#metadata}
  */
  readonly metadata: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnectionsMetadata;
  /**
  * other_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#other_subscription AzureVnetSite#other_subscription}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#cloudlink_network_name AzureVnetSite#cloudlink_network_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#advertise_to_route_server AzureVnetSite#advertise_to_route_server}
  */
  readonly advertiseToRouteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto_asn AzureVnetSite#auto_asn}
  */
  readonly autoAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#custom_asn AzureVnetSite#custom_asn}
  */
  readonly customAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#do_not_advertise_to_route_server AzureVnetSite#do_not_advertise_to_route_server}
  */
  readonly doNotAdvertiseToRouteServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#site_registration_over_internet AzureVnetSite#site_registration_over_internet}
  */
  readonly siteRegistrationOverInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_ergw1az AzureVnetSite#sku_ergw1az}
  */
  readonly skuErgw1Az?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_ergw2az AzureVnetSite#sku_ergw2az}
  */
  readonly skuErgw2Az?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_high_perf AzureVnetSite#sku_high_perf}
  */
  readonly skuHighPerf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#sku_standard AzureVnetSite#sku_standard}
  */
  readonly skuStandard?: boolean | cdktf.IResolvable;
  /**
  * connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#connections AzureVnetSite#connections}
  */
  readonly connections: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledConnections[] | cdktf.IResolvable;
  /**
  * gateway_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#gateway_subnet AzureVnetSite#gateway_subnet}
  */
  readonly gatewaySubnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledGatewaySubnet;
  /**
  * route_server_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#route_server_subnet AzureVnetSite#route_server_subnet}
  */
  readonly routeServerSubnet?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabledRouteServerSubnet;
  /**
  * site_registration_over_express_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#site_registration_over_express_route AzureVnetSite#site_registration_over_express_route}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#f5_orchestrated_routing AzureVnetSite#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#manual_routing AzureVnetSite#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#resource_group AzureVnetSite#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_name AzureVnetSite#vnet_name}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#auto AzureVnetSite#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#manual AzureVnetSite#manual}
  */
  readonly manual?: boolean | cdktf.IResolvable;
  /**
  * vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet AzureVnetSite#vnet}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#express_route_disabled AzureVnetSite#express_route_disabled}
  */
  readonly expressRouteDisabled?: boolean | cdktf.IResolvable;
  /**
  * express_route_enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#express_route_enabled AzureVnetSite#express_route_enabled}
  */
  readonly expressRouteEnabled?: AzureVnetSiteIngressEgressGwArHubExpressRouteEnabled;
  /**
  * spoke_vnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#spoke_vnets AzureVnetSite#spoke_vnets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#attrs AzureVnetSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#labels AzureVnetSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#nexthop AzureVnetSite#nexthop}
  */
  readonly nexthop?: AzureVnetSiteIngressEgressGwArInsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArNodeInsideSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_name AzureVnetSite#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_resource_grp AzureVnetSite#subnet_resource_grp}
  */
  readonly subnetResourceGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#vnet_resource_group AzureVnetSite#vnet_resource_group}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteIngressEgressGwArNodeOutsideSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#fault_domain AzureVnetSite#fault_domain}
  */
  readonly faultDomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#node_number AzureVnetSite#node_number}
  */
  readonly nodeNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#update_domain AzureVnetSite#update_domain}
  */
  readonly updateDomain?: number;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#inside_subnet AzureVnetSite#inside_subnet}
  */
  readonly insideSubnet?: AzureVnetSiteIngressEgressGwArNodeInsideSubnet;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#outside_subnet AzureVnetSite#outside_subnet}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#namespace AzureVnetSite#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#tenant AzureVnetSite#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
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
