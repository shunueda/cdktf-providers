import * as cdktf from 'cdktf';
import { AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies,
azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform,
azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform,
AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesList,
AzureVnetSiteVoltstackClusterArAcceleratedNetworking,
azureVnetSiteVoltstackClusterArAcceleratedNetworkingToTerraform,
azureVnetSiteVoltstackClusterArAcceleratedNetworkingToHclTerraform,
AzureVnetSiteVoltstackClusterArAcceleratedNetworkingOutputReference,
AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies,
azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesToTerraform,
azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesToHclTerraform,
AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesOutputReference } from './structs400'
export interface AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#forward_proxy_policies AzureVnetSite#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesOutputReference | AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesOutputReference | AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies {
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

export function azureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesOutputReference {
    return new AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArActiveNetworkPolicies {
  /**
  * network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#network_policies AzureVnetSite#network_policies}
  */
  readonly networkPolicies: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArActiveNetworkPoliciesToTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesOutputReference | AzureVnetSiteVoltstackClusterArActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_policies: cdktf.listMapper(azureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesToTerraform, true)(struct!.networkPolicies),
  }
}


export function azureVnetSiteVoltstackClusterArActiveNetworkPoliciesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesOutputReference | AzureVnetSiteVoltstackClusterArActiveNetworkPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_policies: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesToHclTerraform, true)(struct!.networkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArActiveNetworkPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicies = this._networkPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArActiveNetworkPolicies | undefined) {
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
  private _networkPolicies = new AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPoliciesList(this, "network_policies", false);
  public get networkPolicies() {
    return this._networkPolicies;
  }
  public putNetworkPolicies(value: AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesNetworkPolicies[] | cdktf.IResolvable) {
    this._networkPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoliciesInput() {
    return this._networkPolicies.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArDcClusterGroup {
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

export function azureVnetSiteVoltstackClusterArDcClusterGroupToTerraform(struct?: AzureVnetSiteVoltstackClusterArDcClusterGroupOutputReference | AzureVnetSiteVoltstackClusterArDcClusterGroup): any {
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


export function azureVnetSiteVoltstackClusterArDcClusterGroupToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArDcClusterGroupOutputReference | AzureVnetSiteVoltstackClusterArDcClusterGroup): any {
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

export class AzureVnetSiteVoltstackClusterArDcClusterGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArDcClusterGroup | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArDcClusterGroup | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#hash_algorithms AzureVnetSite#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling {
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo {
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

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal {
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

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#provider AzureVnetSite#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#url AzureVnetSite#url}
  */
  readonly url: string;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo {
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

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
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


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#name AzureVnetSite#name}
  */
  readonly name: string;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#secret_encoding_type AzureVnetSite#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#blindfold_secret_info AzureVnetSite#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#blindfold_secret_info_internal AzureVnetSite#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#clear_secret_info AzureVnetSite#clear_secret_info}
  */
  readonly clearSecretInfo?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#vault_secret_info AzureVnetSite#vault_secret_info}
  */
  readonly vaultSecretInfo?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#wingman_secret_info AzureVnetSite#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey): any {
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
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyWingmanSecretInfo) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults {
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate {
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
  readonly customHashAlgorithms?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_ocsp_stapling AzureVnetSite#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#private_key AzureVnetSite#private_key}
  */
  readonly privateKey: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#use_system_defaults AzureVnetSite#use_system_defaults}
  */
  readonly useSystemDefaults?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate): any {
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
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingList",
    },
    private_key: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyList",
    },
    use_system_defaults: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate | undefined) {
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
  private _customHashAlgorithms = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateCustomHashAlgorithms) {
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
  private _disableOcspStapling = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateDisableOcspStapling) {
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
  private _privateKey = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificatePrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateUseSystemDefaults) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch {
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

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
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


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules {
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
  readonly domainMatch: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_interception: cdktf.booleanToTerraform(struct!.disableInterception),
    enable_interception: cdktf.booleanToTerraform(struct!.enableInterception),
    domain_match: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToTerraform(struct!.domainMatch),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable): any {
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
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchToHclTerraform(struct!.domainMatch),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules | cdktf.IResolvable | undefined) {
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
  private _domainMatch = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatchOutputReference(this, "domain_match");
  public get domainMatch() {
    return this._domainMatch;
  }
  public putDomainMatch(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesDomainMatch) {
    this._domainMatch.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatchInput() {
    return this._domainMatch.internalValue;
  }
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference {
    return new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy {
  /**
  * interception_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#interception_rules AzureVnetSite#interception_rules}
  */
  readonly interceptionRules: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interception_rules: cdktf.listMapper(azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToTerraform, true)(struct!.interceptionRules),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interception_rules: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesToHclTerraform, true)(struct!.interceptionRules),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interceptionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptionRules = this._interceptionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy | undefined) {
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
  private _interceptionRules = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRulesList(this, "interception_rules", false);
  public get interceptionRules() {
    return this._interceptionRules;
  }
  public putInterceptionRules(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyInterceptionRules[] | cdktf.IResolvable) {
    this._interceptionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptionRulesInput() {
    return this._interceptionRules.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept {
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
  readonly customCertificate?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#policy AzureVnetSite#policy}
  */
  readonly policy?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_for_all_domains: cdktf.booleanToTerraform(struct!.enableForAllDomains),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    volterra_certificate: cdktf.booleanToTerraform(struct!.volterraCertificate),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    custom_certificate: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToTerraform(struct!.customCertificate),
    policy: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToTerraform(struct!.policy),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept): any {
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
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateToHclTerraform(struct!.customCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateList",
    },
    policy: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept | undefined) {
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
  private _customCertificate = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificateOutputReference(this, "custom_certificate");
  public get customCertificate() {
    return this._customCertificate;
  }
  public putCustomCertificate(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptCustomCertificate) {
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
  private _policy = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptPolicy) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy {
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
  readonly tlsIntercept?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
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
    tls_intercept: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToTerraform(struct!.tlsIntercept),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy): any {
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
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptToHclTerraform(struct!.tlsIntercept),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy | undefined) {
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
  private _tlsIntercept = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsInterceptOutputReference(this, "tls_intercept");
  public get tlsIntercept() {
    return this._tlsIntercept;
  }
  public putTlsIntercept(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyTlsIntercept) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn {
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

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr | undefined) {
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
  private _globalVn = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn {
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

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn): any {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr {
  /**
  * global_vn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_vn AzureVnetSite#global_vn}
  */
  readonly globalVn: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_vn: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToTerraform(struct!.globalVn),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_vn: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnToHclTerraform(struct!.globalVn),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalVn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalVn = this._globalVn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr | undefined) {
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
  private _globalVn = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVnOutputReference(this, "global_vn");
  public get globalVn() {
    return this._globalVn;
  }
  public putGlobalVn(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrGlobalVn) {
    this._globalVn.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalVnInput() {
    return this._globalVn.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#disable_forward_proxy AzureVnetSite#disable_forward_proxy}
  */
  readonly disableForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * enable_forward_proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#enable_forward_proxy AzureVnetSite#enable_forward_proxy}
  */
  readonly enableForwardProxy?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy;
  /**
  * sli_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#sli_to_global_dr AzureVnetSite#sli_to_global_dr}
  */
  readonly sliToGlobalDr?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr;
  /**
  * slo_to_global_dr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#slo_to_global_dr AzureVnetSite#slo_to_global_dr}
  */
  readonly sloToGlobalDr?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_forward_proxy: cdktf.booleanToTerraform(struct!.disableForwardProxy),
    enable_forward_proxy: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToTerraform(struct!.enableForwardProxy),
    sli_to_global_dr: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToTerraform(struct!.sliToGlobalDr),
    slo_to_global_dr: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToTerraform(struct!.sloToGlobalDr),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable): any {
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
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyToHclTerraform(struct!.enableForwardProxy),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyList",
    },
    sli_to_global_dr: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrToHclTerraform(struct!.sliToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrList",
    },
    slo_to_global_dr: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrToHclTerraform(struct!.sloToGlobalDr),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections | cdktf.IResolvable | undefined) {
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
  private _enableForwardProxy = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxyOutputReference(this, "enable_forward_proxy");
  public get enableForwardProxy() {
    return this._enableForwardProxy;
  }
  public putEnableForwardProxy(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsEnableForwardProxy) {
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
  private _sliToGlobalDr = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDrOutputReference(this, "sli_to_global_dr");
  public get sliToGlobalDr() {
    return this._sliToGlobalDr;
  }
  public putSliToGlobalDr(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSliToGlobalDr) {
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
  private _sloToGlobalDr = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDrOutputReference(this, "slo_to_global_dr");
  public get sloToGlobalDr() {
    return this._sloToGlobalDr;
  }
  public putSloToGlobalDr(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsSloToGlobalDr) {
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

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsOutputReference {
    return new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct {
  /**
  * global_network_connections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_network_connections AzureVnetSite#global_network_connections}
  */
  readonly globalNetworkConnections: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArGlobalNetworkListStructToTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListStructOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    global_network_connections: cdktf.listMapper(azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsToTerraform, true)(struct!.globalNetworkConnections),
  }
}


export function azureVnetSiteVoltstackClusterArGlobalNetworkListStructToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArGlobalNetworkListStructOutputReference | AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    global_network_connections: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsToHclTerraform, true)(struct!.globalNetworkConnections),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArGlobalNetworkListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._globalNetworkConnections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkConnections = this._globalNetworkConnections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct | undefined) {
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
  private _globalNetworkConnections = new AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnectionsList(this, "global_network_connections", false);
  public get globalNetworkConnections() {
    return this._globalNetworkConnections;
  }
  public putGlobalNetworkConnections(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListGlobalNetworkConnections[] | cdktf.IResolvable) {
    this._globalNetworkConnections.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkConnectionsInput() {
    return this._globalNetworkConnections.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArK8SCluster {
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

export function azureVnetSiteVoltstackClusterArK8SClusterToTerraform(struct?: AzureVnetSiteVoltstackClusterArK8SClusterOutputReference | AzureVnetSiteVoltstackClusterArK8SCluster): any {
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


export function azureVnetSiteVoltstackClusterArK8SClusterToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArK8SClusterOutputReference | AzureVnetSiteVoltstackClusterArK8SCluster): any {
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

export class AzureVnetSiteVoltstackClusterArK8SClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArK8SCluster | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArK8SCluster | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet {
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

export function azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetToTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetOutputReference | AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet): any {
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


export function azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetOutputReference | AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet): any {
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

export class AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: string;
}

export function azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamToTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamOutputReference | AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamOutputReference | AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam): any {
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

export class AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArNodeLocalSubnet {
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet AzureVnetSite#subnet}
  */
  readonly subnet?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnet_param AzureVnetSite#subnet_param}
  */
  readonly subnetParam?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam;
}

export function azureVnetSiteVoltstackClusterArNodeLocalSubnetToTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetOutputReference | AzureVnetSiteVoltstackClusterArNodeLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetToTerraform(struct!.subnet),
    subnet_param: azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function azureVnetSiteVoltstackClusterArNodeLocalSubnetToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeLocalSubnetOutputReference | AzureVnetSiteVoltstackClusterArNodeLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet: {
      value: azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetList",
    },
    subnet_param: {
      value: azureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArNodeLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArNodeLocalSubnet | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArNodeLocalSubnet | undefined) {
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
  private _subnet = new AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnet) {
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
  private _subnetParam = new AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: AzureVnetSiteVoltstackClusterArNodeLocalSubnetSubnetParam) {
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
export interface AzureVnetSiteVoltstackClusterArNode {
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
  readonly localSubnet?: AzureVnetSiteVoltstackClusterArNodeLocalSubnet;
}

export function azureVnetSiteVoltstackClusterArNodeToTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeOutputReference | AzureVnetSiteVoltstackClusterArNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fault_domain: cdktf.numberToTerraform(struct!.faultDomain),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    update_domain: cdktf.numberToTerraform(struct!.updateDomain),
    local_subnet: azureVnetSiteVoltstackClusterArNodeLocalSubnetToTerraform(struct!.localSubnet),
  }
}


export function azureVnetSiteVoltstackClusterArNodeToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArNodeOutputReference | AzureVnetSiteVoltstackClusterArNode): any {
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
      value: azureVnetSiteVoltstackClusterArNodeLocalSubnetToHclTerraform(struct!.localSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArNodeLocalSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArNode | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArNode | undefined) {
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
  private _localSubnet = new AzureVnetSiteVoltstackClusterArNodeLocalSubnetOutputReference(this, "local_subnet");
  public get localSubnet() {
    return this._localSubnet;
  }
  public putLocalSubnet(value: AzureVnetSiteVoltstackClusterArNodeLocalSubnet) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface {
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

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference {
    return new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#addr AzureVnetSite#addr}
  */
  readonly addr?: string;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#type AzureVnetSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#interface AzureVnetSite#interface}
  */
  readonly interface?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#nexthop_address AzureVnetSite#nexthop_address}
  */
  readonly nexthopAddress?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
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
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
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
  private _interface = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
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
  private _nexthopAddress = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#plen AzureVnetSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#prefix AzureVnetSite#prefix}
  */
  readonly prefix?: string;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
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
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv4 AzureVnetSite#ipv4}
  */
  readonly ipv4?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#ipv6 AzureVnetSite#ipv6}
  */
  readonly ipv6?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute {
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
  readonly nexthop?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#subnets AzureVnetSite#subnets}
  */
  readonly subnets: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
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
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
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
  private _nexthop = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
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
  private _subnets = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#simple_static_route AzureVnetSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#custom_static_route AzureVnetSite#custom_static_route}
  */
  readonly customStaticRoute?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
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
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
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
  private _customStaticRoute = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
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

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#static_route_list AzureVnetSite#static_route_list}
  */
  readonly staticRouteList: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function azureVnetSiteVoltstackClusterArOutsideStaticRoutesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesOutputReference | AzureVnetSiteVoltstackClusterArOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutes | undefined) {
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
  private _staticRouteList = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#default_storage_class AzureVnetSite#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#storage_class_name AzureVnetSite#storage_class_name}
  */
  readonly storageClassName: string;
}

export function azureVnetSiteVoltstackClusterArStorageClassListStorageClassesToTerraform(struct?: AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_storage_class: cdktf.booleanToTerraform(struct!.defaultStorageClass),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function azureVnetSiteVoltstackClusterArStorageClassListStorageClassesToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses | cdktf.IResolvable): any {
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

export class AzureVnetSiteVoltstackClusterArStorageClassListStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses | cdktf.IResolvable | undefined) {
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

export class AzureVnetSiteVoltstackClusterArStorageClassListStorageClassesList extends cdktf.ComplexList {
  public internalValue? : AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): AzureVnetSiteVoltstackClusterArStorageClassListStorageClassesOutputReference {
    return new AzureVnetSiteVoltstackClusterArStorageClassListStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureVnetSiteVoltstackClusterArStorageClassListStruct {
  /**
  * storage_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#storage_classes AzureVnetSite#storage_classes}
  */
  readonly storageClasses?: AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses[] | cdktf.IResolvable;
}

export function azureVnetSiteVoltstackClusterArStorageClassListStructToTerraform(struct?: AzureVnetSiteVoltstackClusterArStorageClassListStructOutputReference | AzureVnetSiteVoltstackClusterArStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_classes: cdktf.listMapper(azureVnetSiteVoltstackClusterArStorageClassListStorageClassesToTerraform, true)(struct!.storageClasses),
  }
}


export function azureVnetSiteVoltstackClusterArStorageClassListStructToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArStorageClassListStructOutputReference | AzureVnetSiteVoltstackClusterArStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_classes: {
      value: cdktf.listMapperHcl(azureVnetSiteVoltstackClusterArStorageClassListStorageClassesToHclTerraform, true)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArStorageClassListStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArStorageClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterArStorageClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureVnetSiteVoltstackClusterArStorageClassListStruct | undefined) {
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
  private _storageClasses = new AzureVnetSiteVoltstackClusterArStorageClassListStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: AzureVnetSiteVoltstackClusterArStorageClassListStorageClasses[] | cdktf.IResolvable) {
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
export interface AzureVnetSiteVoltstackClusterAr {
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
  readonly acceleratedNetworking?: AzureVnetSiteVoltstackClusterArAcceleratedNetworking;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_enhanced_firewall_policies AzureVnetSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_forward_proxy_policies AzureVnetSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#active_network_policies AzureVnetSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: AzureVnetSiteVoltstackClusterArActiveNetworkPolicies;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#dc_cluster_group AzureVnetSite#dc_cluster_group}
  */
  readonly dcClusterGroup?: AzureVnetSiteVoltstackClusterArDcClusterGroup;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#global_network_list AzureVnetSite#global_network_list}
  */
  readonly globalNetworkList?: AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct;
  /**
  * k8s_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#k8s_cluster AzureVnetSite#k8s_cluster}
  */
  readonly k8SCluster?: AzureVnetSiteVoltstackClusterArK8SCluster;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#node AzureVnetSite#node}
  */
  readonly nodeAttribute?: AzureVnetSiteVoltstackClusterArNode;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#outside_static_routes AzureVnetSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: AzureVnetSiteVoltstackClusterArOutsideStaticRoutes;
  /**
  * storage_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/azure_vnet_site#storage_class_list AzureVnetSite#storage_class_list}
  */
  readonly storageClassList?: AzureVnetSiteVoltstackClusterArStorageClassListStruct;
}

export function azureVnetSiteVoltstackClusterArToTerraform(struct?: AzureVnetSiteVoltstackClusterArOutputReference | AzureVnetSiteVoltstackClusterAr): any {
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
    accelerated_networking: azureVnetSiteVoltstackClusterArAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    active_enhanced_firewall_policies: azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: azureVnetSiteVoltstackClusterArActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    dc_cluster_group: azureVnetSiteVoltstackClusterArDcClusterGroupToTerraform(struct!.dcClusterGroup),
    global_network_list: azureVnetSiteVoltstackClusterArGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    k8s_cluster: azureVnetSiteVoltstackClusterArK8SClusterToTerraform(struct!.k8SCluster),
    node: azureVnetSiteVoltstackClusterArNodeToTerraform(struct!.nodeAttribute),
    outside_static_routes: azureVnetSiteVoltstackClusterArOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
    storage_class_list: azureVnetSiteVoltstackClusterArStorageClassListStructToTerraform(struct!.storageClassList),
  }
}


export function azureVnetSiteVoltstackClusterArToHclTerraform(struct?: AzureVnetSiteVoltstackClusterArOutputReference | AzureVnetSiteVoltstackClusterAr): any {
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
      value: azureVnetSiteVoltstackClusterArAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArAcceleratedNetworkingList",
    },
    active_enhanced_firewall_policies: {
      value: azureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: azureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: azureVnetSiteVoltstackClusterArActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesList",
    },
    dc_cluster_group: {
      value: azureVnetSiteVoltstackClusterArDcClusterGroupToHclTerraform(struct!.dcClusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArDcClusterGroupList",
    },
    global_network_list: {
      value: azureVnetSiteVoltstackClusterArGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArGlobalNetworkListStructList",
    },
    k8s_cluster: {
      value: azureVnetSiteVoltstackClusterArK8SClusterToHclTerraform(struct!.k8SCluster),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArK8SClusterList",
    },
    node: {
      value: azureVnetSiteVoltstackClusterArNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArNodeList",
    },
    outside_static_routes: {
      value: azureVnetSiteVoltstackClusterArOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArOutsideStaticRoutesList",
    },
    storage_class_list: {
      value: azureVnetSiteVoltstackClusterArStorageClassListStructToHclTerraform(struct!.storageClassList),
      isBlock: true,
      type: "list",
      storageClassType: "AzureVnetSiteVoltstackClusterArStorageClassListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureVnetSiteVoltstackClusterArOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureVnetSiteVoltstackClusterAr | undefined {
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
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
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

  public set internalValue(value: AzureVnetSiteVoltstackClusterAr | undefined) {
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
      this._dcClusterGroup.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._k8SCluster.internalValue = undefined;
      this._node.internalValue = undefined;
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
      this._dcClusterGroup.internalValue = value.dcClusterGroup;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._k8SCluster.internalValue = value.k8SCluster;
      this._node.internalValue = value.nodeAttribute;
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
  private _acceleratedNetworking = new AzureVnetSiteVoltstackClusterArAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: AzureVnetSiteVoltstackClusterArAcceleratedNetworking) {
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
  private _activeEnhancedFirewallPolicies = new AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: AzureVnetSiteVoltstackClusterArActiveEnhancedFirewallPolicies) {
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
  private _activeForwardProxyPolicies = new AzureVnetSiteVoltstackClusterArActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: AzureVnetSiteVoltstackClusterArActiveForwardProxyPolicies) {
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
  private _activeNetworkPolicies = new AzureVnetSiteVoltstackClusterArActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: AzureVnetSiteVoltstackClusterArActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new AzureVnetSiteVoltstackClusterArDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: AzureVnetSiteVoltstackClusterArDcClusterGroup) {
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
  private _globalNetworkList = new AzureVnetSiteVoltstackClusterArGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: AzureVnetSiteVoltstackClusterArGlobalNetworkListStruct) {
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
  private _k8SCluster = new AzureVnetSiteVoltstackClusterArK8SClusterOutputReference(this, "k8s_cluster");
  public get k8SCluster() {
    return this._k8SCluster;
  }
  public putK8SCluster(value: AzureVnetSiteVoltstackClusterArK8SCluster) {
    this._k8SCluster.internalValue = value;
  }
  public resetK8SCluster() {
    this._k8SCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterInput() {
    return this._k8SCluster.internalValue;
  }

  // node - computed: false, optional: true, required: false
  private _node = new AzureVnetSiteVoltstackClusterArNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: AzureVnetSiteVoltstackClusterArNode) {
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
  private _outsideStaticRoutes = new AzureVnetSiteVoltstackClusterArOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: AzureVnetSiteVoltstackClusterArOutsideStaticRoutes) {
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
  private _storageClassList = new AzureVnetSiteVoltstackClusterArStorageClassListStructOutputReference(this, "storage_class_list");
  public get storageClassList() {
    return this._storageClassList;
  }
  public putStorageClassList(value: AzureVnetSiteVoltstackClusterArStorageClassListStruct) {
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
