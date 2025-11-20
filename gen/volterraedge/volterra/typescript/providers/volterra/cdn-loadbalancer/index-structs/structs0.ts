import * as cdktf from 'cdktf';
export interface CdnLoadbalancerActiveServicePoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerActiveServicePoliciesPoliciesToTerraform(struct?: CdnLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable): any {
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


export function cdnLoadbalancerActiveServicePoliciesPoliciesToHclTerraform(struct?: CdnLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable): any {
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

export class CdnLoadbalancerActiveServicePoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerActiveServicePoliciesPolicies | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerActiveServicePoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerActiveServicePoliciesPolicies[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerActiveServicePoliciesPoliciesOutputReference {
    return new CdnLoadbalancerActiveServicePoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerActiveServicePolicies {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#policies CdnLoadbalancer#policies}
  */
  readonly policies: CdnLoadbalancerActiveServicePoliciesPolicies[] | cdktf.IResolvable;
}

export function cdnLoadbalancerActiveServicePoliciesToTerraform(struct?: CdnLoadbalancerActiveServicePoliciesOutputReference | CdnLoadbalancerActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(cdnLoadbalancerActiveServicePoliciesPoliciesToTerraform, true)(struct!.policies),
  }
}


export function cdnLoadbalancerActiveServicePoliciesToHclTerraform(struct?: CdnLoadbalancerActiveServicePoliciesOutputReference | CdnLoadbalancerActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(cdnLoadbalancerActiveServicePoliciesPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerActiveServicePoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerActiveServicePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerActiveServicePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerActiveServicePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new CdnLoadbalancerActiveServicePoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CdnLoadbalancerActiveServicePoliciesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
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


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding CdnLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#version CdnLoadbalancer#version}
  */
  readonly version?: number;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
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


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#secret_encoding_type CdnLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#blindfold_secret_info_internal CdnLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#vault_secret_info CdnLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#wingman_secret_info CdnLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword): any {
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
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordWingmanSecretInfo) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#user CdnLoadbalancer#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#password CdnLoadbalancer#password}
  */
  readonly password?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToTerraform(struct!.password),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: true, required: false
  private _password = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginPassword) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domain CdnLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * simple_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#simple_login CdnLoadbalancer#simple_login}
  */
  readonly simpleLogin?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    simple_login: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToTerraform(struct!.simpleLogin),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    simple_login: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginToHclTerraform(struct!.simpleLogin),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._simpleLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleLogin = this._simpleLogin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._simpleLogin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._simpleLogin.internalValue = value.simpleLogin;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // simple_login - computed: false, optional: true, required: false
  private _simpleLogin = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLoginOutputReference(this, "simple_login");
  public get simpleLogin() {
    return this._simpleLogin;
  }
  public putSimpleLogin(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsSimpleLogin) {
    this._simpleLogin.internalValue = value;
  }
  public resetSimpleLogin() {
    this._simpleLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleLoginInput() {
    return this._simpleLogin.internalValue;
  }
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsOutputReference {
    return new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig {
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#domains CdnLoadbalancer#domains}
  */
  readonly domains: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToTerraform, true)(struct!.domains),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains.internalValue = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_api_crawler CdnLoadbalancer#disable_api_crawler}
  */
  readonly disableApiCrawler?: boolean | cdktf.IResolvable;
  /**
  * api_crawler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_crawler_config CdnLoadbalancer#api_crawler_config}
  */
  readonly apiCrawlerConfig?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_api_crawler: cdktf.booleanToTerraform(struct!.disableApiCrawler),
    api_crawler_config: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToTerraform(struct!.apiCrawlerConfig),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_api_crawler: {
      value: cdktf.booleanToHclTerraform(struct!.disableApiCrawler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler_config: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigToHclTerraform(struct!.apiCrawlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableApiCrawler !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableApiCrawler = this._disableApiCrawler;
    }
    if (this._apiCrawlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawlerConfig = this._apiCrawlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableApiCrawler = undefined;
      this._apiCrawlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableApiCrawler = value.disableApiCrawler;
      this._apiCrawlerConfig.internalValue = value.apiCrawlerConfig;
    }
  }

  // disable_api_crawler - computed: false, optional: true, required: false
  private _disableApiCrawler?: boolean | cdktf.IResolvable; 
  public get disableApiCrawler() {
    return this.getBooleanAttribute('disable_api_crawler');
  }
  public set disableApiCrawler(value: boolean | cdktf.IResolvable) {
    this._disableApiCrawler = value;
  }
  public resetDisableApiCrawler() {
    this._disableApiCrawler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiCrawlerInput() {
    return this._disableApiCrawler;
  }

  // api_crawler_config - computed: false, optional: true, required: false
  private _apiCrawlerConfig = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfigOutputReference(this, "api_crawler_config");
  public get apiCrawlerConfig() {
    return this._apiCrawlerConfig;
  }
  public putApiCrawlerConfig(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerApiCrawlerConfig) {
    this._apiCrawlerConfig.internalValue = value;
  }
  public resetApiCrawlerConfig() {
    this._apiCrawlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerConfigInput() {
    return this._apiCrawlerConfig.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_code_repo CdnLoadbalancer#api_code_repo}
  */
  readonly apiCodeRepo: string[];
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_code_repo: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiCodeRepo),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_code_repo: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiCodeRepo),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiCodeRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCodeRepo = this._apiCodeRepo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiCodeRepo = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiCodeRepo = value.apiCodeRepo;
    }
  }

  // api_code_repo - computed: false, optional: false, required: true
  private _apiCodeRepo?: string[]; 
  public get apiCodeRepo() {
    return this.getListAttribute('api_code_repo');
  }
  public set apiCodeRepo(value: string[]) {
    this._apiCodeRepo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCodeRepoInput() {
    return this._apiCodeRepo;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_repos CdnLoadbalancer#all_repos}
  */
  readonly allRepos?: boolean | cdktf.IResolvable;
  /**
  * code_base_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#code_base_integration CdnLoadbalancer#code_base_integration}
  */
  readonly codeBaseIntegration: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration;
  /**
  * selected_repos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#selected_repos CdnLoadbalancer#selected_repos}
  */
  readonly selectedRepos?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_repos: cdktf.booleanToTerraform(struct!.allRepos),
    code_base_integration: cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToTerraform(struct!.codeBaseIntegration),
    selected_repos: cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToTerraform(struct!.selectedRepos),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_repos: {
      value: cdktf.booleanToHclTerraform(struct!.allRepos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    code_base_integration: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationToHclTerraform(struct!.codeBaseIntegration),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationList",
    },
    selected_repos: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposToHclTerraform(struct!.selectedRepos),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRepos = this._allRepos;
    }
    if (this._codeBaseIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegration = this._codeBaseIntegration?.internalValue;
    }
    if (this._selectedRepos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRepos = this._selectedRepos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allRepos = undefined;
      this._codeBaseIntegration.internalValue = undefined;
      this._selectedRepos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allRepos = value.allRepos;
      this._codeBaseIntegration.internalValue = value.codeBaseIntegration;
      this._selectedRepos.internalValue = value.selectedRepos;
    }
  }

  // all_repos - computed: false, optional: true, required: false
  private _allRepos?: boolean | cdktf.IResolvable; 
  public get allRepos() {
    return this.getBooleanAttribute('all_repos');
  }
  public set allRepos(value: boolean | cdktf.IResolvable) {
    this._allRepos = value;
  }
  public resetAllRepos() {
    this._allRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allReposInput() {
    return this._allRepos;
  }

  // code_base_integration - computed: false, optional: false, required: true
  private _codeBaseIntegration = new CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegrationOutputReference(this, "code_base_integration");
  public get codeBaseIntegration() {
    return this._codeBaseIntegration;
  }
  public putCodeBaseIntegration(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsCodeBaseIntegration) {
    this._codeBaseIntegration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationInput() {
    return this._codeBaseIntegration.internalValue;
  }

  // selected_repos - computed: false, optional: true, required: false
  private _selectedRepos = new CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedReposOutputReference(this, "selected_repos");
  public get selectedRepos() {
    return this._selectedRepos;
  }
  public putSelectedRepos(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsSelectedRepos) {
    this._selectedRepos.internalValue = value;
  }
  public resetSelectedRepos() {
    this._selectedRepos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedReposInput() {
    return this._selectedRepos.internalValue;
  }
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference {
    return new CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan {
  /**
  * code_base_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#code_base_integrations CdnLoadbalancer#code_base_integrations}
  */
  readonly codeBaseIntegrations: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_base_integrations: cdktf.listMapper(cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToTerraform, true)(struct!.codeBaseIntegrations),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_base_integrations: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsToHclTerraform, true)(struct!.codeBaseIntegrations),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeBaseIntegrations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeBaseIntegrations = this._codeBaseIntegrations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codeBaseIntegrations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codeBaseIntegrations.internalValue = value.codeBaseIntegrations;
    }
  }

  // code_base_integrations - computed: false, optional: false, required: true
  private _codeBaseIntegrations = new CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrationsList(this, "code_base_integrations", false);
  public get codeBaseIntegrations() {
    return this._codeBaseIntegrations;
  }
  public putCodeBaseIntegrations(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanCodeBaseIntegrations[] | cdktf.IResolvable) {
    this._codeBaseIntegrations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeBaseIntegrationsInput() {
    return this._codeBaseIntegrations.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef): any {
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


export function cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery {
  /**
  * api_discovery_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_discovery_ref CdnLoadbalancer#api_discovery_ref}
  */
  readonly apiDiscoveryRef: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_discovery_ref: cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToTerraform(struct!.apiDiscoveryRef),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_discovery_ref: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefToHclTerraform(struct!.apiDiscoveryRef),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiDiscoveryRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryRef = this._apiDiscoveryRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiDiscoveryRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiDiscoveryRef.internalValue = value.apiDiscoveryRef;
    }
  }

  // api_discovery_ref - computed: false, optional: false, required: true
  private _apiDiscoveryRef = new CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRefOutputReference(this, "api_discovery_ref");
  public get apiDiscoveryRef() {
    return this._apiDiscoveryRef;
  }
  public putApiDiscoveryRef(value: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryApiDiscoveryRef) {
    this._apiDiscoveryRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryRefInput() {
    return this._apiDiscoveryRef.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#purge_duration_for_inactive_discovered_apis CdnLoadbalancer#purge_duration_for_inactive_discovered_apis}
  */
  readonly purgeDurationForInactiveDiscoveredApis?: number;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    purge_duration_for_inactive_discovered_apis: cdktf.numberToTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    purge_duration_for_inactive_discovered_apis: {
      value: cdktf.numberToHclTerraform(struct!.purgeDurationForInactiveDiscoveredApis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._purgeDurationForInactiveDiscoveredApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.purgeDurationForInactiveDiscoveredApis = this._purgeDurationForInactiveDiscoveredApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._purgeDurationForInactiveDiscoveredApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._purgeDurationForInactiveDiscoveredApis = value.purgeDurationForInactiveDiscoveredApis;
    }
  }

  // purge_duration_for_inactive_discovered_apis - computed: false, optional: true, required: false
  private _purgeDurationForInactiveDiscoveredApis?: number; 
  public get purgeDurationForInactiveDiscoveredApis() {
    return this.getNumberAttribute('purge_duration_for_inactive_discovered_apis');
  }
  public set purgeDurationForInactiveDiscoveredApis(value: number) {
    this._purgeDurationForInactiveDiscoveredApis = value;
  }
  public resetPurgeDurationForInactiveDiscoveredApis() {
    this._purgeDurationForInactiveDiscoveredApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purgeDurationForInactiveDiscoveredApisInput() {
    return this._purgeDurationForInactiveDiscoveredApis;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
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


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods: string[];
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointPath = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointPath = value.apiEndpointPath;
      this._methods = value.methods;
    }
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sections CdnLoadbalancer#custom_sections}
  */
  readonly customSections: string[];
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customSections),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customSections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSections = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSections = value.customSections;
    }
  }

  // custom_sections - computed: false, optional: false, required: true
  private _customSections?: string[]; 
  public get customSections() {
    return this.getListAttribute('custom_sections');
  }
  public set customSections(value: string[]) {
    this._customSections = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
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
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
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
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
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
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern {
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key_pattern CdnLoadbalancer#key_pattern}
  */
  readonly keyPattern: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#value_pattern CdnLoadbalancer#value_pattern}
  */
  readonly valuePattern: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_pattern: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToTerraform(struct!.keyPattern),
    value_pattern: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToTerraform(struct!.valuePattern),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_pattern: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternList",
    },
    value_pattern: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyPattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyPattern.internalValue = value.keyPattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // key_pattern - computed: false, optional: false, required: true
  private _keyPattern = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // value_pattern - computed: false, optional: false, required: true
  private _valuePattern = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternValuePattern) {
    this._valuePattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_value CdnLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    regex_value: cdktf.stringToTerraform(struct!.regexValue),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValue = undefined;
      this._regexValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValue = value.exactValue;
      this._regexValue = value.regexValue;
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
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_request_sections CdnLoadbalancer#all_request_sections}
  */
  readonly allRequestSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_response_sections CdnLoadbalancer#all_response_sections}
  */
  readonly allResponseSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#all_sections CdnLoadbalancer#all_sections}
  */
  readonly allSections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_target CdnLoadbalancer#any_target}
  */
  readonly anyTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_target CdnLoadbalancer#api_endpoint_target}
  */
  readonly apiEndpointTarget?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sections CdnLoadbalancer#custom_sections}
  */
  readonly customSections?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections;
  /**
  * key_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key_pattern CdnLoadbalancer#key_pattern}
  */
  readonly keyPattern?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern;
  /**
  * key_value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key_value_pattern CdnLoadbalancer#key_value_pattern}
  */
  readonly keyValuePattern?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern;
  /**
  * value_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#value_pattern CdnLoadbalancer#value_pattern}
  */
  readonly valuePattern?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_request_sections: cdktf.booleanToTerraform(struct!.allRequestSections),
    all_response_sections: cdktf.booleanToTerraform(struct!.allResponseSections),
    all_sections: cdktf.booleanToTerraform(struct!.allSections),
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_target: cdktf.booleanToTerraform(struct!.anyTarget),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_target: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToTerraform(struct!.apiEndpointTarget),
    custom_sections: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToTerraform(struct!.customSections),
    key_pattern: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToTerraform(struct!.keyPattern),
    key_value_pattern: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToTerraform(struct!.keyValuePattern),
    value_pattern: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToTerraform(struct!.valuePattern),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_request_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allRequestSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_response_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allResponseSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sections: {
      value: cdktf.booleanToHclTerraform(struct!.allSections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_target: {
      value: cdktf.booleanToHclTerraform(struct!.anyTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_target: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetToHclTerraform(struct!.apiEndpointTarget),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetList",
    },
    custom_sections: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsToHclTerraform(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsList",
    },
    key_pattern: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternToHclTerraform(struct!.keyPattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternList",
    },
    key_value_pattern: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternToHclTerraform(struct!.keyValuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternList",
    },
    value_pattern: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternToHclTerraform(struct!.valuePattern),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allRequestSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allRequestSections = this._allRequestSections;
    }
    if (this._allResponseSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allResponseSections = this._allResponseSections;
    }
    if (this._allSections !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSections = this._allSections;
    }
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyTarget = this._anyTarget;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointTarget = this._apiEndpointTarget?.internalValue;
    }
    if (this._customSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections?.internalValue;
    }
    if (this._keyPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPattern = this._keyPattern?.internalValue;
    }
    if (this._keyValuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyValuePattern = this._keyValuePattern?.internalValue;
    }
    if (this._valuePattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePattern = this._valuePattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allRequestSections = undefined;
      this._allResponseSections = undefined;
      this._allSections = undefined;
      this._anyDomain = undefined;
      this._anyTarget = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointTarget.internalValue = undefined;
      this._customSections.internalValue = undefined;
      this._keyPattern.internalValue = undefined;
      this._keyValuePattern.internalValue = undefined;
      this._valuePattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allRequestSections = value.allRequestSections;
      this._allResponseSections = value.allResponseSections;
      this._allSections = value.allSections;
      this._anyDomain = value.anyDomain;
      this._anyTarget = value.anyTarget;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointTarget.internalValue = value.apiEndpointTarget;
      this._customSections.internalValue = value.customSections;
      this._keyPattern.internalValue = value.keyPattern;
      this._keyValuePattern.internalValue = value.keyValuePattern;
      this._valuePattern.internalValue = value.valuePattern;
    }
  }

  // all_request_sections - computed: false, optional: true, required: false
  private _allRequestSections?: boolean | cdktf.IResolvable; 
  public get allRequestSections() {
    return this.getBooleanAttribute('all_request_sections');
  }
  public set allRequestSections(value: boolean | cdktf.IResolvable) {
    this._allRequestSections = value;
  }
  public resetAllRequestSections() {
    this._allRequestSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allRequestSectionsInput() {
    return this._allRequestSections;
  }

  // all_response_sections - computed: false, optional: true, required: false
  private _allResponseSections?: boolean | cdktf.IResolvable; 
  public get allResponseSections() {
    return this.getBooleanAttribute('all_response_sections');
  }
  public set allResponseSections(value: boolean | cdktf.IResolvable) {
    this._allResponseSections = value;
  }
  public resetAllResponseSections() {
    this._allResponseSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allResponseSectionsInput() {
    return this._allResponseSections;
  }

  // all_sections - computed: false, optional: true, required: false
  private _allSections?: boolean | cdktf.IResolvable; 
  public get allSections() {
    return this.getBooleanAttribute('all_sections');
  }
  public set allSections(value: boolean | cdktf.IResolvable) {
    this._allSections = value;
  }
  public resetAllSections() {
    this._allSections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSectionsInput() {
    return this._allSections;
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_target - computed: false, optional: true, required: false
  private _anyTarget?: boolean | cdktf.IResolvable; 
  public get anyTarget() {
    return this.getBooleanAttribute('any_target');
  }
  public set anyTarget(value: boolean | cdktf.IResolvable) {
    this._anyTarget = value;
  }
  public resetAnyTarget() {
    this._anyTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyTargetInput() {
    return this._anyTarget;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_target - computed: false, optional: true, required: false
  private _apiEndpointTarget = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTargetOutputReference(this, "api_endpoint_target");
  public get apiEndpointTarget() {
    return this._apiEndpointTarget;
  }
  public putApiEndpointTarget(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigApiEndpointTarget) {
    this._apiEndpointTarget.internalValue = value;
  }
  public resetApiEndpointTarget() {
    this._apiEndpointTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointTargetInput() {
    return this._apiEndpointTarget.internalValue;
  }

  // custom_sections - computed: false, optional: true, required: false
  private _customSections = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSectionsOutputReference(this, "custom_sections");
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigCustomSections) {
    this._customSections.internalValue = value;
  }
  public resetCustomSections() {
    this._customSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections.internalValue;
  }

  // key_pattern - computed: false, optional: true, required: false
  private _keyPattern = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPatternOutputReference(this, "key_pattern");
  public get keyPattern() {
    return this._keyPattern;
  }
  public putKeyPattern(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyPattern) {
    this._keyPattern.internalValue = value;
  }
  public resetKeyPattern() {
    this._keyPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPatternInput() {
    return this._keyPattern.internalValue;
  }

  // key_value_pattern - computed: false, optional: true, required: false
  private _keyValuePattern = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePatternOutputReference(this, "key_value_pattern");
  public get keyValuePattern() {
    return this._keyValuePattern;
  }
  public putKeyValuePattern(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigKeyValuePattern) {
    this._keyValuePattern.internalValue = value;
  }
  public resetKeyValuePattern() {
    this._keyValuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyValuePatternInput() {
    return this._keyValuePattern.internalValue;
  }

  // value_pattern - computed: false, optional: true, required: false
  private _valuePattern = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePatternOutputReference(this, "value_pattern");
  public get valuePattern() {
    return this._valuePattern;
  }
  public putValuePattern(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigValuePattern) {
    this._valuePattern.internalValue = value;
  }
  public resetValuePattern() {
    this._valuePattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePatternInput() {
    return this._valuePattern.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#type CdnLoadbalancer#type}
  */
  readonly type: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata;
  /**
  * sensitive_data_detection_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_detection_config CdnLoadbalancer#sensitive_data_detection_config}
  */
  readonly sensitiveDataDetectionConfig: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig;
  /**
  * sensitive_data_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_type CdnLoadbalancer#sensitive_data_type}
  */
  readonly sensitiveDataType: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToTerraform(struct!.metadata),
    sensitive_data_detection_config: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToTerraform(struct!.sensitiveDataDetectionConfig),
    sensitive_data_type: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToTerraform(struct!.sensitiveDataType),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataList",
    },
    sensitive_data_detection_config: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigToHclTerraform(struct!.sensitiveDataDetectionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigList",
    },
    sensitive_data_type: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeToHclTerraform(struct!.sensitiveDataType),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._sensitiveDataDetectionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionConfig = this._sensitiveDataDetectionConfig?.internalValue;
    }
    if (this._sensitiveDataType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataType = this._sensitiveDataType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._sensitiveDataDetectionConfig.internalValue = undefined;
      this._sensitiveDataType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._sensitiveDataDetectionConfig.internalValue = value.sensitiveDataDetectionConfig;
      this._sensitiveDataType.internalValue = value.sensitiveDataType;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // sensitive_data_detection_config - computed: false, optional: false, required: true
  private _sensitiveDataDetectionConfig = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfigOutputReference(this, "sensitive_data_detection_config");
  public get sensitiveDataDetectionConfig() {
    return this._sensitiveDataDetectionConfig;
  }
  public putSensitiveDataDetectionConfig(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataDetectionConfig) {
    this._sensitiveDataDetectionConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionConfigInput() {
    return this._sensitiveDataDetectionConfig.internalValue;
  }

  // sensitive_data_type - computed: false, optional: false, required: true
  private _sensitiveDataType = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataTypeOutputReference(this, "sensitive_data_type");
  public get sensitiveDataType() {
    return this._sensitiveDataType;
  }
  public putSensitiveDataType(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesSensitiveDataType) {
    this._sensitiveDataType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataTypeInput() {
    return this._sensitiveDataType.internalValue;
  }
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference {
    return new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference {
    return new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules {
  /**
  * custom_sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_sensitive_data_detection_rules CdnLoadbalancer#custom_sensitive_data_detection_rules}
  */
  readonly customSensitiveDataDetectionRules?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable;
  /**
  * disabled_built_in_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disabled_built_in_rules CdnLoadbalancer#disabled_built_in_rules}
  */
  readonly disabledBuiltInRules?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_sensitive_data_detection_rules: cdktf.listMapper(cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToTerraform, true)(struct!.customSensitiveDataDetectionRules),
    disabled_built_in_rules: cdktf.listMapper(cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesToTerraform, true)(struct!.disabledBuiltInRules),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_sensitive_data_detection_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesToHclTerraform, true)(struct!.customSensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList",
    },
    disabled_built_in_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesToHclTerraform, true)(struct!.disabledBuiltInRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customSensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSensitiveDataDetectionRules = this._customSensitiveDataDetectionRules?.internalValue;
    }
    if (this._disabledBuiltInRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabledBuiltInRules = this._disabledBuiltInRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customSensitiveDataDetectionRules.internalValue = undefined;
      this._disabledBuiltInRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customSensitiveDataDetectionRules.internalValue = value.customSensitiveDataDetectionRules;
      this._disabledBuiltInRules.internalValue = value.disabledBuiltInRules;
    }
  }

  // custom_sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _customSensitiveDataDetectionRules = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRulesList(this, "custom_sensitive_data_detection_rules", false);
  public get customSensitiveDataDetectionRules() {
    return this._customSensitiveDataDetectionRules;
  }
  public putCustomSensitiveDataDetectionRules(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesCustomSensitiveDataDetectionRules[] | cdktf.IResolvable) {
    this._customSensitiveDataDetectionRules.internalValue = value;
  }
  public resetCustomSensitiveDataDetectionRules() {
    this._customSensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSensitiveDataDetectionRulesInput() {
    return this._customSensitiveDataDetectionRules.internalValue;
  }

  // disabled_built_in_rules - computed: false, optional: true, required: false
  private _disabledBuiltInRules = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRulesList(this, "disabled_built_in_rules", false);
  public get disabledBuiltInRules() {
    return this._disabledBuiltInRules;
  }
  public putDisabledBuiltInRules(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesDisabledBuiltInRules[] | cdktf.IResolvable) {
    this._disabledBuiltInRules.internalValue = value;
  }
  public resetDisabledBuiltInRules() {
    this._disabledBuiltInRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledBuiltInRulesInput() {
    return this._disabledBuiltInRules.internalValue;
  }
}
export interface CdnLoadbalancerApiDiscoveryOnCacheMiss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#default_api_auth_discovery CdnLoadbalancer#default_api_auth_discovery}
  */
  readonly defaultApiAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable_learn_from_redirect_traffic CdnLoadbalancer#disable_learn_from_redirect_traffic}
  */
  readonly disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#enable_learn_from_redirect_traffic CdnLoadbalancer#enable_learn_from_redirect_traffic}
  */
  readonly enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable;
  /**
  * api_crawler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_crawler CdnLoadbalancer#api_crawler}
  */
  readonly apiCrawler?: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler;
  /**
  * api_discovery_from_code_scan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_discovery_from_code_scan CdnLoadbalancer#api_discovery_from_code_scan}
  */
  readonly apiDiscoveryFromCodeScan?: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan;
  /**
  * custom_api_auth_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#custom_api_auth_discovery CdnLoadbalancer#custom_api_auth_discovery}
  */
  readonly customApiAuthDiscovery?: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery;
  /**
  * discovered_api_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#discovered_api_settings CdnLoadbalancer#discovered_api_settings}
  */
  readonly discoveredApiSettings?: CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings;
  /**
  * sensitive_data_detection_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#sensitive_data_detection_rules CdnLoadbalancer#sensitive_data_detection_rules}
  */
  readonly sensitiveDataDetectionRules?: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules;
}

export function cdnLoadbalancerApiDiscoveryOnCacheMissToTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_api_auth_discovery: cdktf.booleanToTerraform(struct!.defaultApiAuthDiscovery),
    disable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.disableLearnFromRedirectTraffic),
    enable_learn_from_redirect_traffic: cdktf.booleanToTerraform(struct!.enableLearnFromRedirectTraffic),
    api_crawler: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerToTerraform(struct!.apiCrawler),
    api_discovery_from_code_scan: cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanToTerraform(struct!.apiDiscoveryFromCodeScan),
    custom_api_auth_discovery: cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryToTerraform(struct!.customApiAuthDiscovery),
    discovered_api_settings: cdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsToTerraform(struct!.discoveredApiSettings),
    sensitive_data_detection_rules: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesToTerraform(struct!.sensitiveDataDetectionRules),
  }
}


export function cdnLoadbalancerApiDiscoveryOnCacheMissToHclTerraform(struct?: CdnLoadbalancerApiDiscoveryOnCacheMissOutputReference | CdnLoadbalancerApiDiscoveryOnCacheMiss): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_api_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.defaultApiAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_learn_from_redirect_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableLearnFromRedirectTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_crawler: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerToHclTerraform(struct!.apiCrawler),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerList",
    },
    api_discovery_from_code_scan: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanToHclTerraform(struct!.apiDiscoveryFromCodeScan),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanList",
    },
    custom_api_auth_discovery: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryToHclTerraform(struct!.customApiAuthDiscovery),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryList",
    },
    discovered_api_settings: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsToHclTerraform(struct!.discoveredApiSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsList",
    },
    sensitive_data_detection_rules: {
      value: cdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesToHclTerraform(struct!.sensitiveDataDetectionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiDiscoveryOnCacheMissOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiDiscoveryOnCacheMiss | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultApiAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultApiAuthDiscovery = this._defaultApiAuthDiscovery;
    }
    if (this._disableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLearnFromRedirectTraffic = this._disableLearnFromRedirectTraffic;
    }
    if (this._enableLearnFromRedirectTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLearnFromRedirectTraffic = this._enableLearnFromRedirectTraffic;
    }
    if (this._apiCrawler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiCrawler = this._apiCrawler?.internalValue;
    }
    if (this._apiDiscoveryFromCodeScan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDiscoveryFromCodeScan = this._apiDiscoveryFromCodeScan?.internalValue;
    }
    if (this._customApiAuthDiscovery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApiAuthDiscovery = this._customApiAuthDiscovery?.internalValue;
    }
    if (this._discoveredApiSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredApiSettings = this._discoveredApiSettings?.internalValue;
    }
    if (this._sensitiveDataDetectionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataDetectionRules = this._sensitiveDataDetectionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiDiscoveryOnCacheMiss | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultApiAuthDiscovery = undefined;
      this._disableLearnFromRedirectTraffic = undefined;
      this._enableLearnFromRedirectTraffic = undefined;
      this._apiCrawler.internalValue = undefined;
      this._apiDiscoveryFromCodeScan.internalValue = undefined;
      this._customApiAuthDiscovery.internalValue = undefined;
      this._discoveredApiSettings.internalValue = undefined;
      this._sensitiveDataDetectionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultApiAuthDiscovery = value.defaultApiAuthDiscovery;
      this._disableLearnFromRedirectTraffic = value.disableLearnFromRedirectTraffic;
      this._enableLearnFromRedirectTraffic = value.enableLearnFromRedirectTraffic;
      this._apiCrawler.internalValue = value.apiCrawler;
      this._apiDiscoveryFromCodeScan.internalValue = value.apiDiscoveryFromCodeScan;
      this._customApiAuthDiscovery.internalValue = value.customApiAuthDiscovery;
      this._discoveredApiSettings.internalValue = value.discoveredApiSettings;
      this._sensitiveDataDetectionRules.internalValue = value.sensitiveDataDetectionRules;
    }
  }

  // default_api_auth_discovery - computed: false, optional: true, required: false
  private _defaultApiAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get defaultApiAuthDiscovery() {
    return this.getBooleanAttribute('default_api_auth_discovery');
  }
  public set defaultApiAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._defaultApiAuthDiscovery = value;
  }
  public resetDefaultApiAuthDiscovery() {
    this._defaultApiAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApiAuthDiscoveryInput() {
    return this._defaultApiAuthDiscovery;
  }

  // disable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _disableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get disableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('disable_learn_from_redirect_traffic');
  }
  public set disableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._disableLearnFromRedirectTraffic = value;
  }
  public resetDisableLearnFromRedirectTraffic() {
    this._disableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLearnFromRedirectTrafficInput() {
    return this._disableLearnFromRedirectTraffic;
  }

  // enable_learn_from_redirect_traffic - computed: false, optional: true, required: false
  private _enableLearnFromRedirectTraffic?: boolean | cdktf.IResolvable; 
  public get enableLearnFromRedirectTraffic() {
    return this.getBooleanAttribute('enable_learn_from_redirect_traffic');
  }
  public set enableLearnFromRedirectTraffic(value: boolean | cdktf.IResolvable) {
    this._enableLearnFromRedirectTraffic = value;
  }
  public resetEnableLearnFromRedirectTraffic() {
    this._enableLearnFromRedirectTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnFromRedirectTrafficInput() {
    return this._enableLearnFromRedirectTraffic;
  }

  // api_crawler - computed: false, optional: true, required: false
  private _apiCrawler = new CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawlerOutputReference(this, "api_crawler");
  public get apiCrawler() {
    return this._apiCrawler;
  }
  public putApiCrawler(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiCrawler) {
    this._apiCrawler.internalValue = value;
  }
  public resetApiCrawler() {
    this._apiCrawler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCrawlerInput() {
    return this._apiCrawler.internalValue;
  }

  // api_discovery_from_code_scan - computed: false, optional: true, required: false
  private _apiDiscoveryFromCodeScan = new CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScanOutputReference(this, "api_discovery_from_code_scan");
  public get apiDiscoveryFromCodeScan() {
    return this._apiDiscoveryFromCodeScan;
  }
  public putApiDiscoveryFromCodeScan(value: CdnLoadbalancerApiDiscoveryOnCacheMissApiDiscoveryFromCodeScan) {
    this._apiDiscoveryFromCodeScan.internalValue = value;
  }
  public resetApiDiscoveryFromCodeScan() {
    this._apiDiscoveryFromCodeScan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoveryFromCodeScanInput() {
    return this._apiDiscoveryFromCodeScan.internalValue;
  }

  // custom_api_auth_discovery - computed: false, optional: true, required: false
  private _customApiAuthDiscovery = new CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscoveryOutputReference(this, "custom_api_auth_discovery");
  public get customApiAuthDiscovery() {
    return this._customApiAuthDiscovery;
  }
  public putCustomApiAuthDiscovery(value: CdnLoadbalancerApiDiscoveryOnCacheMissCustomApiAuthDiscovery) {
    this._customApiAuthDiscovery.internalValue = value;
  }
  public resetCustomApiAuthDiscovery() {
    this._customApiAuthDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApiAuthDiscoveryInput() {
    return this._customApiAuthDiscovery.internalValue;
  }

  // discovered_api_settings - computed: false, optional: true, required: false
  private _discoveredApiSettings = new CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettingsOutputReference(this, "discovered_api_settings");
  public get discoveredApiSettings() {
    return this._discoveredApiSettings;
  }
  public putDiscoveredApiSettings(value: CdnLoadbalancerApiDiscoveryOnCacheMissDiscoveredApiSettings) {
    this._discoveredApiSettings.internalValue = value;
  }
  public resetDiscoveredApiSettings() {
    this._discoveredApiSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredApiSettingsInput() {
    return this._discoveredApiSettings.internalValue;
  }

  // sensitive_data_detection_rules - computed: false, optional: true, required: false
  private _sensitiveDataDetectionRules = new CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRulesOutputReference(this, "sensitive_data_detection_rules");
  public get sensitiveDataDetectionRules() {
    return this._sensitiveDataDetectionRules;
  }
  public putSensitiveDataDetectionRules(value: CdnLoadbalancerApiDiscoveryOnCacheMissSensitiveDataDetectionRules) {
    this._sensitiveDataDetectionRules.internalValue = value;
  }
  public resetSensitiveDataDetectionRules() {
    this._sensitiveDataDetectionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataDetectionRulesInput() {
    return this._sensitiveDataDetectionRules.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow CdnLoadbalancer#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#deny CdnLoadbalancer#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesActionToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    deny: cdktf.booleanToTerraform(struct!.deny),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesActionToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._deny = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata): any {
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


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata): any {
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

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action CdnLoadbalancer#action}
  */
  readonly action: CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_method CdnLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher;
}

export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    action: cdnLoadbalancerApiProtectionRulesApiEndpointRulesActionToTerraform(struct!.action),
    api_endpoint_method: cdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToTerraform(struct!.apiEndpointMethod),
    client_matcher: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToTerraform(struct!.clientMatcher),
    metadata: cdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToTerraform(struct!.metadata),
    request_matcher: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiEndpointRulesToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesActionList",
    },
    api_endpoint_method: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodToHclTerraform(struct!.apiEndpointMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodList",
    },
    client_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherList",
    },
    metadata: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._apiEndpointMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointMethod = this._apiEndpointMethod?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiEndpointPath = undefined;
      this._specificDomain = undefined;
      this._action.internalValue = undefined;
      this._apiEndpointMethod.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiEndpointPath = value.apiEndpointPath;
      this._specificDomain = value.specificDomain;
      this._action.internalValue = value.action;
      this._apiEndpointMethod.internalValue = value.apiEndpointMethod;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._metadata.internalValue = value.metadata;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // action - computed: false, optional: false, required: true
  private _action = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // api_endpoint_method - computed: false, optional: true, required: false
  private _apiEndpointMethod = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethodOutputReference(this, "api_endpoint_method");
  public get apiEndpointMethod() {
    return this._apiEndpointMethod;
  }
  public putApiEndpointMethod(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesApiEndpointMethod) {
    this._apiEndpointMethod.internalValue = value;
  }
  public resetApiEndpointMethod() {
    this._apiEndpointMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointMethodInput() {
    return this._apiEndpointMethod.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiProtectionRulesApiEndpointRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiEndpointRulesOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#allow CdnLoadbalancer#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#deny CdnLoadbalancer#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesActionToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    deny: cdktf.booleanToTerraform(struct!.deny),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesActionToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._deny = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._deny = value.deny;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#disable CdnLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata): any {
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


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata): any {
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

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata | undefined) {
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
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference | CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface CdnLoadbalancerApiProtectionRulesApiGroupsRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#action CdnLoadbalancer#action}
  */
  readonly action: CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher;
}

export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesToTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    action: cdnLoadbalancerApiProtectionRulesApiGroupsRulesActionToTerraform(struct!.action),
    client_matcher: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToTerraform(struct!.clientMatcher),
    metadata: cdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToTerraform(struct!.metadata),
    request_matcher: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiProtectionRulesApiGroupsRulesToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesActionList",
    },
    client_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherList",
    },
    metadata: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRulesApiGroupsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._action.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._action.internalValue = value.action;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._metadata.internalValue = value.metadata;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // action - computed: false, optional: false, required: true
  private _action = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiProtectionRulesApiGroupsRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class CdnLoadbalancerApiProtectionRulesApiGroupsRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiProtectionRulesApiGroupsRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiProtectionRulesApiGroupsRulesOutputReference {
    return new CdnLoadbalancerApiProtectionRulesApiGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiProtectionRules {
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_rules CdnLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: CdnLoadbalancerApiProtectionRulesApiEndpointRules[] | cdktf.IResolvable;
  /**
  * api_groups_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups_rules CdnLoadbalancer#api_groups_rules}
  */
  readonly apiGroupsRules?: CdnLoadbalancerApiProtectionRulesApiGroupsRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiProtectionRulesToTerraform(struct?: CdnLoadbalancerApiProtectionRulesOutputReference | CdnLoadbalancerApiProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_endpoint_rules: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    api_groups_rules: cdktf.listMapper(cdnLoadbalancerApiProtectionRulesApiGroupsRulesToTerraform, true)(struct!.apiGroupsRules),
  }
}


export function cdnLoadbalancerApiProtectionRulesToHclTerraform(struct?: CdnLoadbalancerApiProtectionRulesOutputReference | CdnLoadbalancerApiProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_endpoint_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiEndpointRulesList",
    },
    api_groups_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiProtectionRulesApiGroupsRulesToHclTerraform, true)(struct!.apiGroupsRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiProtectionRulesApiGroupsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiProtectionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiProtectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointRules = this._apiEndpointRules?.internalValue;
    }
    if (this._apiGroupsRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroupsRules = this._apiGroupsRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiProtectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEndpointRules.internalValue = undefined;
      this._apiGroupsRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEndpointRules.internalValue = value.apiEndpointRules;
      this._apiGroupsRules.internalValue = value.apiGroupsRules;
    }
  }

  // api_endpoint_rules - computed: false, optional: true, required: false
  private _apiEndpointRules = new CdnLoadbalancerApiProtectionRulesApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: CdnLoadbalancerApiProtectionRulesApiEndpointRules[] | cdktf.IResolvable) {
    this._apiEndpointRules.internalValue = value;
  }
  public resetApiEndpointRules() {
    this._apiEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointRulesInput() {
    return this._apiEndpointRules.internalValue;
  }

  // api_groups_rules - computed: false, optional: true, required: false
  private _apiGroupsRules = new CdnLoadbalancerApiProtectionRulesApiGroupsRulesList(this, "api_groups_rules", false);
  public get apiGroupsRules() {
    return this._apiGroupsRules;
  }
  public putApiGroupsRules(value: CdnLoadbalancerApiProtectionRulesApiGroupsRules[] | cdktf.IResolvable) {
    this._apiGroupsRules.internalValue = value;
  }
  public resetApiGroupsRules() {
    this._apiGroupsRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsRulesInput() {
    return this._apiGroupsRules.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId): any {
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


export function cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId): any {
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

export class CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId | undefined) {
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
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#threshold CdnLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#use_http_lb_user_id CdnLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_user_id CdnLoadbalancer#ref_user_id}
  */
  readonly refUserId?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_http_lb_user_id: {
      value: cdktf.booleanToHclTerraform(struct!.useHttpLbUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ref_user_id: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._useHttpLbUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttpLbUserId = this._useHttpLbUserId;
    }
    if (this._refUserId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refUserId = this._refUserId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._threshold = undefined;
      this._unit = undefined;
      this._useHttpLbUserId = undefined;
      this._refUserId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._threshold = value.threshold;
      this._unit = value.unit;
      this._useHttpLbUserId = value.useHttpLbUserId;
      this._refUserId.internalValue = value.refUserId;
    }
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // use_http_lb_user_id - computed: false, optional: true, required: false
  private _useHttpLbUserId?: boolean | cdktf.IResolvable; 
  public get useHttpLbUserId() {
    return this.getBooleanAttribute('use_http_lb_user_id');
  }
  public set useHttpLbUserId(value: boolean | cdktf.IResolvable) {
    this._useHttpLbUserId = value;
  }
  public resetUseHttpLbUserId() {
    this._useHttpLbUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpLbUserIdInput() {
    return this._useHttpLbUserId;
  }

  // ref_user_id - computed: false, optional: true, required: false
  private _refUserId = new CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterRefUserId) {
    this._refUserId.internalValue = value;
  }
  public resetRefUserId() {
    this._refUserId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refUserIdInput() {
    return this._refUserId.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter): any {
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


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter): any {
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

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter | undefined) {
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
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieMatchers.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._headers.internalValue = value.headers;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitApiEndpointRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_endpoint_method CdnLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#inline_rate_limiter CdnLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ref_rate_limiter CdnLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher;
}

export function cdnLoadbalancerApiRateLimitApiEndpointRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_endpoint_path: cdktf.stringToTerraform(struct!.apiEndpointPath),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint_method: cdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToTerraform(struct!.apiEndpointMethod),
    client_matcher: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: cdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_path: {
      value: cdktf.stringToHclTerraform(struct!.apiEndpointPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_domain: {
      value: cdktf.stringToHclTerraform(struct!.specificDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_endpoint_method: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodToHclTerraform(struct!.apiEndpointMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodList",
    },
    client_matcher: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._apiEndpointPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointPath = this._apiEndpointPath;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpointMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointMethod = this._apiEndpointMethod?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._inlineRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineRateLimiter = this._inlineRateLimiter?.internalValue;
    }
    if (this._refRateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refRateLimiter = this._refRateLimiter?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitApiEndpointRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiEndpointPath = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpointMethod.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
      this._inlineRateLimiter.internalValue = undefined;
      this._refRateLimiter.internalValue = undefined;
      this._requestMatcher.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._apiEndpointPath = value.apiEndpointPath;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpointMethod.internalValue = value.apiEndpointMethod;
      this._clientMatcher.internalValue = value.clientMatcher;
      this._inlineRateLimiter.internalValue = value.inlineRateLimiter;
      this._refRateLimiter.internalValue = value.refRateLimiter;
      this._requestMatcher.internalValue = value.requestMatcher;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // api_endpoint_path - computed: false, optional: false, required: true
  private _apiEndpointPath?: string; 
  public get apiEndpointPath() {
    return this.getStringAttribute('api_endpoint_path');
  }
  public set apiEndpointPath(value: string) {
    this._apiEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointPathInput() {
    return this._apiEndpointPath;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // specific_domain - computed: false, optional: true, required: false
  private _specificDomain?: string; 
  public get specificDomain() {
    return this.getStringAttribute('specific_domain');
  }
  public set specificDomain(value: string) {
    this._specificDomain = value;
  }
  public resetSpecificDomain() {
    this._specificDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificDomainInput() {
    return this._specificDomain;
  }

  // api_endpoint_method - computed: false, optional: true, required: false
  private _apiEndpointMethod = new CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethodOutputReference(this, "api_endpoint_method");
  public get apiEndpointMethod() {
    return this._apiEndpointMethod;
  }
  public putApiEndpointMethod(value: CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod) {
    this._apiEndpointMethod.internalValue = value;
  }
  public resetApiEndpointMethod() {
    this._apiEndpointMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointMethodInput() {
    return this._apiEndpointMethod.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // inline_rate_limiter - computed: false, optional: true, required: false
  private _inlineRateLimiter = new CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter) {
    this._inlineRateLimiter.internalValue = value;
  }
  public resetInlineRateLimiter() {
    this._inlineRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineRateLimiterInput() {
    return this._inlineRateLimiter.internalValue;
  }

  // ref_rate_limiter - computed: false, optional: true, required: false
  private _refRateLimiter = new CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter) {
    this._refRateLimiter.internalValue = value;
  }
  public resetRefRateLimiter() {
    this._refRateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refRateLimiterInput() {
    return this._refRateLimiter.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcher) {
    this._requestMatcher.internalValue = value;
  }
  public resetRequestMatcher() {
    this._requestMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMatcherInput() {
    return this._requestMatcher.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitApiEndpointRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitApiEndpointRulesOutputReference {
    return new CdnLoadbalancerApiRateLimitApiEndpointRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: string;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._methods = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._methods = value.methods;
      this._path = value.path;
    }
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_threat_categories: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipThreatCategories),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipThreatCategories = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipThreatCategories = value.ipThreatCategories;
    }
  }

  // ip_threat_categories - computed: false, optional: false, required: true
  private _ipThreatCategories?: string[]; 
  public get ipThreatCategories() {
    return this.getListAttribute('ip_threat_categories');
  }
  public set ipThreatCategories(value: string[]) {
    this._ipThreatCategories = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoriesInput() {
    return this._ipThreatCategories;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    asn_list: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipThreatCategoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategoryList = this._ipThreatCategoryList?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_threat_category_list - computed: false, optional: true, required: false
  private _ipThreatCategoryList = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    item: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    item: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._presence = value.presence;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
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
    item: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
