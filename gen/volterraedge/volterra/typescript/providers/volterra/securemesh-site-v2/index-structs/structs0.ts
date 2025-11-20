import * as cdktf from 'cdktf';
export interface SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function securemeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2ActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#enhanced_firewall_policies SecuremeshSiteV2#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function securemeshSiteV2ActiveEnhancedFirewallPoliciesToTerraform(struct?: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesOutputReference | SecuremeshSiteV2ActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(securemeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function securemeshSiteV2ActiveEnhancedFirewallPoliciesToHclTerraform(struct?: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesOutputReference | SecuremeshSiteV2ActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(securemeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2ActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2ActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2ActiveEnhancedFirewallPolicies | undefined) {
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
  private _enhancedFirewallPolicies = new SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function securemeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2ActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#forward_proxy_policies SecuremeshSiteV2#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function securemeshSiteV2ActiveForwardProxyPoliciesToTerraform(struct?: SecuremeshSiteV2ActiveForwardProxyPoliciesOutputReference | SecuremeshSiteV2ActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(securemeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function securemeshSiteV2ActiveForwardProxyPoliciesToHclTerraform(struct?: SecuremeshSiteV2ActiveForwardProxyPoliciesOutputReference | SecuremeshSiteV2ActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(securemeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2ActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2ActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2ActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: SecuremeshSiteV2ActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#decryption_provider SecuremeshSiteV2#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#location SecuremeshSiteV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#store_provider SecuremeshSiteV2#store_provider}
  */
  readonly storeProvider?: string;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo): any {
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


export function securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo): any {
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

export class SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo | undefined) {
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#decryption_provider SecuremeshSiteV2#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#location SecuremeshSiteV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#store_provider SecuremeshSiteV2#store_provider}
  */
  readonly storeProvider?: string;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal): any {
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


export function securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal): any {
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

export class SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal | undefined) {
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#provider SecuremeshSiteV2#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#url SecuremeshSiteV2#url}
  */
  readonly url: string;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function securemeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo): any {
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

export class SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo | undefined) {
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#key SecuremeshSiteV2#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#location SecuremeshSiteV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#provider SecuremeshSiteV2#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#secret_encoding SecuremeshSiteV2#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#version SecuremeshSiteV2#version}
  */
  readonly version?: number;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo): any {
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


export function securemeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo): any {
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

export class SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo | undefined) {
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securemeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo): any {
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

export class SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo | undefined) {
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#secret_encoding_type SecuremeshSiteV2#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#blindfold_secret_info SecuremeshSiteV2#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#blindfold_secret_info_internal SecuremeshSiteV2#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#clear_secret_info SecuremeshSiteV2#clear_secret_info}
  */
  readonly clearSecretInfo?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vault_secret_info SecuremeshSiteV2#vault_secret_info}
  */
  readonly vaultSecretInfo?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#wingman_secret_info SecuremeshSiteV2#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: securemeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: securemeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: securemeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function securemeshSiteV2AdminUserCredentialsAdminPasswordToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPassword): any {
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
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoList",
    },
    vault_secret_info: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AdminUserCredentialsAdminPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentialsAdminPassword | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPassword | undefined) {
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
  private _blindfoldSecretInfo = new SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo) {
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
  private _vaultSecretInfo = new SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordVaultSecretInfo) {
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
  private _wingmanSecretInfo = new SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: SecuremeshSiteV2AdminUserCredentialsAdminPasswordWingmanSecretInfo) {
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
export interface SecuremeshSiteV2AdminUserCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ssh_key SecuremeshSiteV2#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#admin_password SecuremeshSiteV2#admin_password}
  */
  readonly adminPassword?: SecuremeshSiteV2AdminUserCredentialsAdminPassword;
}

export function securemeshSiteV2AdminUserCredentialsToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsOutputReference | SecuremeshSiteV2AdminUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    admin_password: securemeshSiteV2AdminUserCredentialsAdminPasswordToTerraform(struct!.adminPassword),
  }
}


export function securemeshSiteV2AdminUserCredentialsToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsOutputReference | SecuremeshSiteV2AdminUserCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordToHclTerraform(struct!.adminPassword),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AdminUserCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AdminUserCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._adminPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshKey = undefined;
      this._adminPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshKey = value.sshKey;
      this._adminPassword.internalValue = value.adminPassword;
    }
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword = new SecuremeshSiteV2AdminUserCredentialsAdminPasswordOutputReference(this, "admin_password");
  public get adminPassword() {
    return this._adminPassword;
  }
  public putAdminPassword(value: SecuremeshSiteV2AdminUserCredentialsAdminPassword) {
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
export interface SecuremeshSiteV2AwsManagedAwsCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsManagedAwsCredToTerraform(struct?: SecuremeshSiteV2AwsManagedAwsCredOutputReference | SecuremeshSiteV2AwsManagedAwsCred): any {
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


export function securemeshSiteV2AwsManagedAwsCredToHclTerraform(struct?: SecuremeshSiteV2AwsManagedAwsCredOutputReference | SecuremeshSiteV2AwsManagedAwsCred): any {
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

export class SecuremeshSiteV2AwsManagedAwsCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedAwsCred | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsManagedAwsCred | undefined) {
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
export interface SecuremeshSiteV2AwsManagedCustomSecurityGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#inside_security_group_id SecuremeshSiteV2#inside_security_group_id}
  */
  readonly insideSecurityGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#outside_security_group_id SecuremeshSiteV2#outside_security_group_id}
  */
  readonly outsideSecurityGroupId?: string;
}

export function securemeshSiteV2AwsManagedCustomSecurityGroupToTerraform(struct?: SecuremeshSiteV2AwsManagedCustomSecurityGroupOutputReference | SecuremeshSiteV2AwsManagedCustomSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_security_group_id: cdktf.stringToTerraform(struct!.insideSecurityGroupId),
    outside_security_group_id: cdktf.stringToTerraform(struct!.outsideSecurityGroupId),
  }
}


export function securemeshSiteV2AwsManagedCustomSecurityGroupToHclTerraform(struct?: SecuremeshSiteV2AwsManagedCustomSecurityGroupOutputReference | SecuremeshSiteV2AwsManagedCustomSecurityGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.insideSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.outsideSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedCustomSecurityGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedCustomSecurityGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSecurityGroupId = this._insideSecurityGroupId;
    }
    if (this._outsideSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSecurityGroupId = this._outsideSecurityGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedCustomSecurityGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideSecurityGroupId = undefined;
      this._outsideSecurityGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideSecurityGroupId = value.insideSecurityGroupId;
      this._outsideSecurityGroupId = value.outsideSecurityGroupId;
    }
  }

  // inside_security_group_id - computed: false, optional: true, required: false
  private _insideSecurityGroupId?: string; 
  public get insideSecurityGroupId() {
    return this.getStringAttribute('inside_security_group_id');
  }
  public set insideSecurityGroupId(value: string) {
    this._insideSecurityGroupId = value;
  }
  public resetInsideSecurityGroupId() {
    this._insideSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSecurityGroupIdInput() {
    return this._insideSecurityGroupId;
  }

  // outside_security_group_id - computed: false, optional: true, required: false
  private _outsideSecurityGroupId?: string; 
  public get outsideSecurityGroupId() {
    return this.getStringAttribute('outside_security_group_id');
  }
  public set outsideSecurityGroupId(value: string) {
    this._outsideSecurityGroupId = value;
  }
  public resetOutsideSecurityGroupId() {
    this._outsideSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSecurityGroupIdInput() {
    return this._outsideSecurityGroupId;
  }
}
export interface SecuremeshSiteV2AwsManagedEgressNatGw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#nat_gw_id SecuremeshSiteV2#nat_gw_id}
  */
  readonly natGwId?: string;
}

export function securemeshSiteV2AwsManagedEgressNatGwToTerraform(struct?: SecuremeshSiteV2AwsManagedEgressNatGwOutputReference | SecuremeshSiteV2AwsManagedEgressNatGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_gw_id: cdktf.stringToTerraform(struct!.natGwId),
  }
}


export function securemeshSiteV2AwsManagedEgressNatGwToHclTerraform(struct?: SecuremeshSiteV2AwsManagedEgressNatGwOutputReference | SecuremeshSiteV2AwsManagedEgressNatGw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_gw_id: {
      value: cdktf.stringToHclTerraform(struct!.natGwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedEgressNatGwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedEgressNatGw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natGwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.natGwId = this._natGwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedEgressNatGw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natGwId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natGwId = value.natGwId;
    }
  }

  // nat_gw_id - computed: false, optional: true, required: false
  private _natGwId?: string; 
  public get natGwId() {
    return this.getStringAttribute('nat_gw_id');
  }
  public set natGwId(value: string) {
    this._natGwId = value;
  }
  public resetNatGwId() {
    this._natGwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natGwIdInput() {
    return this._natGwId;
  }
}
export interface SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vgw_id SecuremeshSiteV2#vgw_id}
  */
  readonly vgwId?: string;
}

export function securemeshSiteV2AwsManagedEgressVirtualPrivateGatewayToTerraform(struct?: SecuremeshSiteV2AwsManagedEgressVirtualPrivateGatewayOutputReference | SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vgw_id: cdktf.stringToTerraform(struct!.vgwId),
  }
}


export function securemeshSiteV2AwsManagedEgressVirtualPrivateGatewayToHclTerraform(struct?: SecuremeshSiteV2AwsManagedEgressVirtualPrivateGatewayOutputReference | SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vgw_id: {
      value: cdktf.stringToHclTerraform(struct!.vgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedEgressVirtualPrivateGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vgwId = this._vgwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vgwId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vgwId = value.vgwId;
    }
  }

  // vgw_id - computed: false, optional: true, required: false
  private _vgwId?: string; 
  public get vgwId() {
    return this.getStringAttribute('vgw_id');
  }
  public set vgwId(value: string) {
    this._vgwId = value;
  }
  public resetVgwId() {
    this._vgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgwIdInput() {
    return this._vgwId;
  }
}
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#autogenerate SecuremeshSiteV2#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv4 SecuremeshSiteV2#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv6 SecuremeshSiteV2#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
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

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._name = value.name;
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
}
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#existing_subnet_id SecuremeshSiteV2#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet_param SecuremeshSiteV2#subnet_param}
  */
  readonly subnetParam?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam) {
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
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet SecuremeshSiteV2#subnet}
  */
  readonly subnet?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    network_option: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    subnet: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct!.subnet),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_option: {
      value: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionList",
    },
    subnet: {
      value: securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._networkOption.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._networkOption.internalValue = value.networkOption;
      this._subnet.internalValue = value.subnet;
    }
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#aws_az_name SecuremeshSiteV2#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._hostname = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._hostname = value.hostname;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // interface_list - computed: false, optional: false, required: true
  private _interfaceList = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructOutputReference {
    return new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListStructToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedMultipleInterface {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct;
}

export function securemeshSiteV2AwsManagedMultipleInterfaceToTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceOutputReference | SecuremeshSiteV2AwsManagedMultipleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: securemeshSiteV2AwsManagedMultipleInterfaceNodeListStructToTerraform(struct!.nodeList),
  }
}


export function securemeshSiteV2AwsManagedMultipleInterfaceToHclTerraform(struct?: SecuremeshSiteV2AwsManagedMultipleInterfaceOutputReference | SecuremeshSiteV2AwsManagedMultipleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: securemeshSiteV2AwsManagedMultipleInterfaceNodeListStructToHclTerraform(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedMultipleInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedMultipleInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedMultipleInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStructOutputReference(this, "node_list");
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AwsManagedMultipleInterfaceNodeListStruct) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedNewVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#allocate_ipv6 SecuremeshSiteV2#allocate_ipv6}
  */
  readonly allocateIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#autogenerate SecuremeshSiteV2#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name_tag SecuremeshSiteV2#name_tag}
  */
  readonly nameTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#primary_ipv4 SecuremeshSiteV2#primary_ipv4}
  */
  readonly primaryIpv4: string;
}

export function securemeshSiteV2AwsManagedNewVpcToTerraform(struct?: SecuremeshSiteV2AwsManagedNewVpcOutputReference | SecuremeshSiteV2AwsManagedNewVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_ipv6: cdktf.booleanToTerraform(struct!.allocateIpv6),
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    name_tag: cdktf.stringToTerraform(struct!.nameTag),
    primary_ipv4: cdktf.stringToTerraform(struct!.primaryIpv4),
  }
}


export function securemeshSiteV2AwsManagedNewVpcToHclTerraform(struct?: SecuremeshSiteV2AwsManagedNewVpcOutputReference | SecuremeshSiteV2AwsManagedNewVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.allocateIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autogenerate: {
      value: cdktf.booleanToHclTerraform(struct!.autogenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_tag: {
      value: cdktf.stringToHclTerraform(struct!.nameTag),
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

export class SecuremeshSiteV2AwsManagedNewVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedNewVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateIpv6 = this._allocateIpv6;
    }
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._nameTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameTag = this._nameTag;
    }
    if (this._primaryIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpv4 = this._primaryIpv4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedNewVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocateIpv6 = undefined;
      this._autogenerate = undefined;
      this._nameTag = undefined;
      this._primaryIpv4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocateIpv6 = value.allocateIpv6;
      this._autogenerate = value.autogenerate;
      this._nameTag = value.nameTag;
      this._primaryIpv4 = value.primaryIpv4;
    }
  }

  // allocate_ipv6 - computed: false, optional: true, required: false
  private _allocateIpv6?: boolean | cdktf.IResolvable; 
  public get allocateIpv6() {
    return this.getBooleanAttribute('allocate_ipv6');
  }
  public set allocateIpv6(value: boolean | cdktf.IResolvable) {
    this._allocateIpv6 = value;
  }
  public resetAllocateIpv6() {
    this._allocateIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateIpv6Input() {
    return this._allocateIpv6;
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

  // name_tag - computed: false, optional: true, required: false
  private _nameTag?: string; 
  public get nameTag() {
    return this.getStringAttribute('name_tag');
  }
  public set nameTag(value: string) {
    this._nameTag = value;
  }
  public resetNameTag() {
    this._nameTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTagInput() {
    return this._nameTag;
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
export interface SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsManagedPrivateConnectivityCloudLinkToTerraform(struct?: SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLinkOutputReference | SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink): any {
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


export function securemeshSiteV2AwsManagedPrivateConnectivityCloudLinkToHclTerraform(struct?: SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLinkOutputReference | SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink): any {
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

export class SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink | undefined) {
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
export interface SecuremeshSiteV2AwsManagedPrivateConnectivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#inside SecuremeshSiteV2#inside}
  */
  readonly inside?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#outside SecuremeshSiteV2#outside}
  */
  readonly outside?: boolean | cdktf.IResolvable;
  /**
  * cloud_link block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#cloud_link SecuremeshSiteV2#cloud_link}
  */
  readonly cloudLink: SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink;
}

export function securemeshSiteV2AwsManagedPrivateConnectivityToTerraform(struct?: SecuremeshSiteV2AwsManagedPrivateConnectivityOutputReference | SecuremeshSiteV2AwsManagedPrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside: cdktf.booleanToTerraform(struct!.inside),
    outside: cdktf.booleanToTerraform(struct!.outside),
    cloud_link: securemeshSiteV2AwsManagedPrivateConnectivityCloudLinkToTerraform(struct!.cloudLink),
  }
}


export function securemeshSiteV2AwsManagedPrivateConnectivityToHclTerraform(struct?: SecuremeshSiteV2AwsManagedPrivateConnectivityOutputReference | SecuremeshSiteV2AwsManagedPrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside: {
      value: cdktf.booleanToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside: {
      value: cdktf.booleanToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_link: {
      value: securemeshSiteV2AwsManagedPrivateConnectivityCloudLinkToHclTerraform(struct!.cloudLink),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedPrivateConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedPrivateConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._cloudLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLink = this._cloudLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedPrivateConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inside = undefined;
      this._outside = undefined;
      this._cloudLink.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inside = value.inside;
      this._outside = value.outside;
      this._cloudLink.internalValue = value.cloudLink;
    }
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: boolean | cdktf.IResolvable; 
  public get inside() {
    return this.getBooleanAttribute('inside');
  }
  public set inside(value: boolean | cdktf.IResolvable) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: boolean | cdktf.IResolvable; 
  public get outside() {
    return this.getBooleanAttribute('outside');
  }
  public set outside(value: boolean | cdktf.IResolvable) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // cloud_link - computed: false, optional: false, required: true
  private _cloudLink = new SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLinkOutputReference(this, "cloud_link");
  public get cloudLink() {
    return this._cloudLink;
  }
  public putCloudLink(value: SecuremeshSiteV2AwsManagedPrivateConnectivityCloudLink) {
    this._cloudLink.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLinkInput() {
    return this._cloudLink.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#autogenerate SecuremeshSiteV2#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv4 SecuremeshSiteV2#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv6 SecuremeshSiteV2#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
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

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
      this._name = value.name;
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
}
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#existing_subnet_id SecuremeshSiteV2#existing_subnet_id}
  */
  readonly existingSubnetId?: string;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet_param SecuremeshSiteV2#subnet_param}
  */
  readonly subnetParam?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet_id: cdktf.stringToTerraform(struct!.existingSubnetId),
    subnet_param: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.existingSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_param: {
      value: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnetId = this._existingSubnetId;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnetId = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnetId = value.existingSubnetId;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet_id - computed: false, optional: true, required: false
  private _existingSubnetId?: string; 
  public get existingSubnetId() {
    return this.getStringAttribute('existing_subnet_id');
  }
  public set existingSubnetId(value: string) {
    this._existingSubnetId = value;
  }
  public resetExistingSubnetId() {
    this._existingSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetIdInput() {
    return this._existingSubnetId;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam) {
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
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet SecuremeshSiteV2#subnet}
  */
  readonly subnet?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    network_option: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    subnet: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct!.subnet),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_option: {
      value: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionList",
    },
    subnet: {
      value: securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._networkOption.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._networkOption.internalValue = value.networkOption;
      this._subnet.internalValue = value.subnet;
    }
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#aws_az_name SecuremeshSiteV2#aws_az_name}
  */
  readonly awsAzName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_az_name: cdktf.stringToTerraform(struct!.awsAzName),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_az_name: {
      value: cdktf.stringToHclTerraform(struct!.awsAzName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAzName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAzName = this._awsAzName;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAzName = undefined;
      this._hostname = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAzName = value.awsAzName;
      this._hostname = value.hostname;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // aws_az_name - computed: false, optional: false, required: true
  private _awsAzName?: string; 
  public get awsAzName() {
    return this.getStringAttribute('aws_az_name');
  }
  public set awsAzName(value: string) {
    this._awsAzName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAzNameInput() {
    return this._awsAzName;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // interface_list - computed: false, optional: false, required: true
  private _interfaceList = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructOutputReference {
    return new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsManagedSingleInterfaceNodeListStructToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedSingleInterface {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct;
}

export function securemeshSiteV2AwsManagedSingleInterfaceToTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceOutputReference | SecuremeshSiteV2AwsManagedSingleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: securemeshSiteV2AwsManagedSingleInterfaceNodeListStructToTerraform(struct!.nodeList),
  }
}


export function securemeshSiteV2AwsManagedSingleInterfaceToHclTerraform(struct?: SecuremeshSiteV2AwsManagedSingleInterfaceOutputReference | SecuremeshSiteV2AwsManagedSingleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: securemeshSiteV2AwsManagedSingleInterfaceNodeListStructToHclTerraform(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedSingleInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedSingleInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedSingleInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStructOutputReference(this, "node_list");
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AwsManagedSingleInterfaceNodeListStruct) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedTgwExistingTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tgw_asn SecuremeshSiteV2#tgw_asn}
  */
  readonly tgwAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tgw_id SecuremeshSiteV2#tgw_id}
  */
  readonly tgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#volterra_site_asn SecuremeshSiteV2#volterra_site_asn}
  */
  readonly volterraSiteAsn?: number;
}

export function securemeshSiteV2AwsManagedTgwExistingTgwToTerraform(struct?: SecuremeshSiteV2AwsManagedTgwExistingTgwOutputReference | SecuremeshSiteV2AwsManagedTgwExistingTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgw_asn: cdktf.numberToTerraform(struct!.tgwAsn),
    tgw_id: cdktf.stringToTerraform(struct!.tgwId),
    volterra_site_asn: cdktf.numberToTerraform(struct!.volterraSiteAsn),
  }
}


export function securemeshSiteV2AwsManagedTgwExistingTgwToHclTerraform(struct?: SecuremeshSiteV2AwsManagedTgwExistingTgwOutputReference | SecuremeshSiteV2AwsManagedTgwExistingTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgw_asn: {
      value: cdktf.numberToHclTerraform(struct!.tgwAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tgw_id: {
      value: cdktf.stringToHclTerraform(struct!.tgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volterra_site_asn: {
      value: cdktf.numberToHclTerraform(struct!.volterraSiteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedTgwExistingTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedTgwExistingTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgwAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAsn = this._tgwAsn;
    }
    if (this._tgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwId = this._tgwId;
    }
    if (this._volterraSiteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSiteAsn = this._volterraSiteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedTgwExistingTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tgwAsn = undefined;
      this._tgwId = undefined;
      this._volterraSiteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tgwAsn = value.tgwAsn;
      this._tgwId = value.tgwId;
      this._volterraSiteAsn = value.volterraSiteAsn;
    }
  }

  // tgw_asn - computed: false, optional: true, required: false
  private _tgwAsn?: number; 
  public get tgwAsn() {
    return this.getNumberAttribute('tgw_asn');
  }
  public set tgwAsn(value: number) {
    this._tgwAsn = value;
  }
  public resetTgwAsn() {
    this._tgwAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAsnInput() {
    return this._tgwAsn;
  }

  // tgw_id - computed: false, optional: true, required: false
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // volterra_site_asn - computed: false, optional: true, required: false
  private _volterraSiteAsn?: number; 
  public get volterraSiteAsn() {
    return this.getNumberAttribute('volterra_site_asn');
  }
  public set volterraSiteAsn(value: number) {
    this._volterraSiteAsn = value;
  }
  public resetVolterraSiteAsn() {
    this._volterraSiteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSiteAsnInput() {
    return this._volterraSiteAsn;
  }
}
export interface SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tgw_asn SecuremeshSiteV2#tgw_asn}
  */
  readonly tgwAsn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#volterra_site_asn SecuremeshSiteV2#volterra_site_asn}
  */
  readonly volterraSiteAsn?: number;
}

export function securemeshSiteV2AwsManagedTgwNewTgwUserAssignedToTerraform(struct?: SecuremeshSiteV2AwsManagedTgwNewTgwUserAssignedOutputReference | SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tgw_asn: cdktf.numberToTerraform(struct!.tgwAsn),
    volterra_site_asn: cdktf.numberToTerraform(struct!.volterraSiteAsn),
  }
}


export function securemeshSiteV2AwsManagedTgwNewTgwUserAssignedToHclTerraform(struct?: SecuremeshSiteV2AwsManagedTgwNewTgwUserAssignedOutputReference | SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tgw_asn: {
      value: cdktf.numberToHclTerraform(struct!.tgwAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volterra_site_asn: {
      value: cdktf.numberToHclTerraform(struct!.volterraSiteAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedTgwNewTgwUserAssignedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tgwAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwAsn = this._tgwAsn;
    }
    if (this._volterraSiteAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraSiteAsn = this._volterraSiteAsn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tgwAsn = undefined;
      this._volterraSiteAsn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tgwAsn = value.tgwAsn;
      this._volterraSiteAsn = value.volterraSiteAsn;
    }
  }

  // tgw_asn - computed: false, optional: true, required: false
  private _tgwAsn?: number; 
  public get tgwAsn() {
    return this.getNumberAttribute('tgw_asn');
  }
  public set tgwAsn(value: number) {
    this._tgwAsn = value;
  }
  public resetTgwAsn() {
    this._tgwAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwAsnInput() {
    return this._tgwAsn;
  }

  // volterra_site_asn - computed: false, optional: true, required: false
  private _volterraSiteAsn?: number; 
  public get volterraSiteAsn() {
    return this.getNumberAttribute('volterra_site_asn');
  }
  public set volterraSiteAsn(value: number) {
    this._volterraSiteAsn = value;
  }
  public resetVolterraSiteAsn() {
    this._volterraSiteAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraSiteAsnInput() {
    return this._volterraSiteAsn;
  }
}
export interface SecuremeshSiteV2AwsManagedTgwNewTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#system_generated SecuremeshSiteV2#system_generated}
  */
  readonly systemGenerated?: boolean | cdktf.IResolvable;
  /**
  * user_assigned block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#user_assigned SecuremeshSiteV2#user_assigned}
  */
  readonly userAssigned?: SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned;
}

export function securemeshSiteV2AwsManagedTgwNewTgwToTerraform(struct?: SecuremeshSiteV2AwsManagedTgwNewTgwOutputReference | SecuremeshSiteV2AwsManagedTgwNewTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_generated: cdktf.booleanToTerraform(struct!.systemGenerated),
    user_assigned: securemeshSiteV2AwsManagedTgwNewTgwUserAssignedToTerraform(struct!.userAssigned),
  }
}


export function securemeshSiteV2AwsManagedTgwNewTgwToHclTerraform(struct?: SecuremeshSiteV2AwsManagedTgwNewTgwOutputReference | SecuremeshSiteV2AwsManagedTgwNewTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_generated: {
      value: cdktf.booleanToHclTerraform(struct!.systemGenerated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_assigned: {
      value: securemeshSiteV2AwsManagedTgwNewTgwUserAssignedToHclTerraform(struct!.userAssigned),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedTgwNewTgwUserAssignedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedTgwNewTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedTgwNewTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemGenerated !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemGenerated = this._systemGenerated;
    }
    if (this._userAssigned?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssigned = this._userAssigned?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedTgwNewTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemGenerated = undefined;
      this._userAssigned.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemGenerated = value.systemGenerated;
      this._userAssigned.internalValue = value.userAssigned;
    }
  }

  // system_generated - computed: false, optional: true, required: false
  private _systemGenerated?: boolean | cdktf.IResolvable; 
  public get systemGenerated() {
    return this.getBooleanAttribute('system_generated');
  }
  public set systemGenerated(value: boolean | cdktf.IResolvable) {
    this._systemGenerated = value;
  }
  public resetSystemGenerated() {
    this._systemGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemGeneratedInput() {
    return this._systemGenerated;
  }

  // user_assigned - computed: false, optional: true, required: false
  private _userAssigned = new SecuremeshSiteV2AwsManagedTgwNewTgwUserAssignedOutputReference(this, "user_assigned");
  public get userAssigned() {
    return this._userAssigned;
  }
  public putUserAssigned(value: SecuremeshSiteV2AwsManagedTgwNewTgwUserAssigned) {
    this._userAssigned.internalValue = value;
  }
  public resetUserAssigned() {
    this._userAssigned.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssignedInput() {
    return this._userAssigned.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManagedTgwTgwCidr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv4 SecuremeshSiteV2#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv6 SecuremeshSiteV2#ipv6}
  */
  readonly ipv6?: string;
}

export function securemeshSiteV2AwsManagedTgwTgwCidrToTerraform(struct?: SecuremeshSiteV2AwsManagedTgwTgwCidrOutputReference | SecuremeshSiteV2AwsManagedTgwTgwCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function securemeshSiteV2AwsManagedTgwTgwCidrToHclTerraform(struct?: SecuremeshSiteV2AwsManagedTgwTgwCidrOutputReference | SecuremeshSiteV2AwsManagedTgwTgwCidr): any {
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

export class SecuremeshSiteV2AwsManagedTgwTgwCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedTgwTgwCidr | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsManagedTgwTgwCidr | undefined) {
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
export interface SecuremeshSiteV2AwsManagedTgw {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#reserved_tgw_cidr SecuremeshSiteV2#reserved_tgw_cidr}
  */
  readonly reservedTgwCidr?: boolean | cdktf.IResolvable;
  /**
  * existing_tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#existing_tgw SecuremeshSiteV2#existing_tgw}
  */
  readonly existingTgw?: SecuremeshSiteV2AwsManagedTgwExistingTgw;
  /**
  * new_tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#new_tgw SecuremeshSiteV2#new_tgw}
  */
  readonly newTgw?: SecuremeshSiteV2AwsManagedTgwNewTgw;
  /**
  * tgw_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tgw_cidr SecuremeshSiteV2#tgw_cidr}
  */
  readonly tgwCidr?: SecuremeshSiteV2AwsManagedTgwTgwCidr;
}

export function securemeshSiteV2AwsManagedTgwToTerraform(struct?: SecuremeshSiteV2AwsManagedTgwOutputReference | SecuremeshSiteV2AwsManagedTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reserved_tgw_cidr: cdktf.booleanToTerraform(struct!.reservedTgwCidr),
    existing_tgw: securemeshSiteV2AwsManagedTgwExistingTgwToTerraform(struct!.existingTgw),
    new_tgw: securemeshSiteV2AwsManagedTgwNewTgwToTerraform(struct!.newTgw),
    tgw_cidr: securemeshSiteV2AwsManagedTgwTgwCidrToTerraform(struct!.tgwCidr),
  }
}


export function securemeshSiteV2AwsManagedTgwToHclTerraform(struct?: SecuremeshSiteV2AwsManagedTgwOutputReference | SecuremeshSiteV2AwsManagedTgw): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reserved_tgw_cidr: {
      value: cdktf.booleanToHclTerraform(struct!.reservedTgwCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    existing_tgw: {
      value: securemeshSiteV2AwsManagedTgwExistingTgwToHclTerraform(struct!.existingTgw),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedTgwExistingTgwList",
    },
    new_tgw: {
      value: securemeshSiteV2AwsManagedTgwNewTgwToHclTerraform(struct!.newTgw),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedTgwNewTgwList",
    },
    tgw_cidr: {
      value: securemeshSiteV2AwsManagedTgwTgwCidrToHclTerraform(struct!.tgwCidr),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedTgwTgwCidrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedTgwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManagedTgw | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reservedTgwCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedTgwCidr = this._reservedTgwCidr;
    }
    if (this._existingTgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingTgw = this._existingTgw?.internalValue;
    }
    if (this._newTgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTgw = this._newTgw?.internalValue;
    }
    if (this._tgwCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgwCidr = this._tgwCidr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManagedTgw | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._reservedTgwCidr = undefined;
      this._existingTgw.internalValue = undefined;
      this._newTgw.internalValue = undefined;
      this._tgwCidr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._reservedTgwCidr = value.reservedTgwCidr;
      this._existingTgw.internalValue = value.existingTgw;
      this._newTgw.internalValue = value.newTgw;
      this._tgwCidr.internalValue = value.tgwCidr;
    }
  }

  // reserved_tgw_cidr - computed: false, optional: true, required: false
  private _reservedTgwCidr?: boolean | cdktf.IResolvable; 
  public get reservedTgwCidr() {
    return this.getBooleanAttribute('reserved_tgw_cidr');
  }
  public set reservedTgwCidr(value: boolean | cdktf.IResolvable) {
    this._reservedTgwCidr = value;
  }
  public resetReservedTgwCidr() {
    this._reservedTgwCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedTgwCidrInput() {
    return this._reservedTgwCidr;
  }

  // existing_tgw - computed: false, optional: true, required: false
  private _existingTgw = new SecuremeshSiteV2AwsManagedTgwExistingTgwOutputReference(this, "existing_tgw");
  public get existingTgw() {
    return this._existingTgw;
  }
  public putExistingTgw(value: SecuremeshSiteV2AwsManagedTgwExistingTgw) {
    this._existingTgw.internalValue = value;
  }
  public resetExistingTgw() {
    this._existingTgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingTgwInput() {
    return this._existingTgw.internalValue;
  }

  // new_tgw - computed: false, optional: true, required: false
  private _newTgw = new SecuremeshSiteV2AwsManagedTgwNewTgwOutputReference(this, "new_tgw");
  public get newTgw() {
    return this._newTgw;
  }
  public putNewTgw(value: SecuremeshSiteV2AwsManagedTgwNewTgw) {
    this._newTgw.internalValue = value;
  }
  public resetNewTgw() {
    this._newTgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTgwInput() {
    return this._newTgw.internalValue;
  }

  // tgw_cidr - computed: false, optional: true, required: false
  private _tgwCidr = new SecuremeshSiteV2AwsManagedTgwTgwCidrOutputReference(this, "tgw_cidr");
  public get tgwCidr() {
    return this._tgwCidr;
  }
  public putTgwCidr(value: SecuremeshSiteV2AwsManagedTgwTgwCidr) {
    this._tgwCidr.internalValue = value;
  }
  public resetTgwCidr() {
    this._tgwCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwCidrInput() {
    return this._tgwCidr.internalValue;
  }
}
export interface SecuremeshSiteV2AwsManaged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#aws_region SecuremeshSiteV2#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#disabled SecuremeshSiteV2#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#disk_size SecuremeshSiteV2#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#egress_gateway_default SecuremeshSiteV2#egress_gateway_default}
  */
  readonly egressGatewayDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#f5xc_security_group SecuremeshSiteV2#f5xc_security_group}
  */
  readonly f5XcSecurityGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#instance_type SecuremeshSiteV2#instance_type}
  */
  readonly instanceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#private_connectivity_disabled SecuremeshSiteV2#private_connectivity_disabled}
  */
  readonly privateConnectivityDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tags SecuremeshSiteV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vpc_id SecuremeshSiteV2#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * aws_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#aws_cred SecuremeshSiteV2#aws_cred}
  */
  readonly awsCred: SecuremeshSiteV2AwsManagedAwsCred;
  /**
  * custom_security_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#custom_security_group SecuremeshSiteV2#custom_security_group}
  */
  readonly customSecurityGroup?: SecuremeshSiteV2AwsManagedCustomSecurityGroup;
  /**
  * egress_nat_gw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#egress_nat_gw SecuremeshSiteV2#egress_nat_gw}
  */
  readonly egressNatGw?: SecuremeshSiteV2AwsManagedEgressNatGw;
  /**
  * egress_virtual_private_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#egress_virtual_private_gateway SecuremeshSiteV2#egress_virtual_private_gateway}
  */
  readonly egressVirtualPrivateGateway?: SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway;
  /**
  * multiple_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#multiple_interface SecuremeshSiteV2#multiple_interface}
  */
  readonly multipleInterface?: SecuremeshSiteV2AwsManagedMultipleInterface;
  /**
  * new_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#new_vpc SecuremeshSiteV2#new_vpc}
  */
  readonly newVpc?: SecuremeshSiteV2AwsManagedNewVpc;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#private_connectivity SecuremeshSiteV2#private_connectivity}
  */
  readonly privateConnectivity?: SecuremeshSiteV2AwsManagedPrivateConnectivity;
  /**
  * single_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#single_interface SecuremeshSiteV2#single_interface}
  */
  readonly singleInterface?: SecuremeshSiteV2AwsManagedSingleInterface;
  /**
  * tgw block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tgw SecuremeshSiteV2#tgw}
  */
  readonly tgw?: SecuremeshSiteV2AwsManagedTgw;
}

export function securemeshSiteV2AwsManagedToTerraform(struct?: SecuremeshSiteV2AwsManagedOutputReference | SecuremeshSiteV2AwsManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    egress_gateway_default: cdktf.booleanToTerraform(struct!.egressGatewayDefault),
    f5xc_security_group: cdktf.booleanToTerraform(struct!.f5XcSecurityGroup),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    private_connectivity_disabled: cdktf.booleanToTerraform(struct!.privateConnectivityDisabled),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    aws_cred: securemeshSiteV2AwsManagedAwsCredToTerraform(struct!.awsCred),
    custom_security_group: securemeshSiteV2AwsManagedCustomSecurityGroupToTerraform(struct!.customSecurityGroup),
    egress_nat_gw: securemeshSiteV2AwsManagedEgressNatGwToTerraform(struct!.egressNatGw),
    egress_virtual_private_gateway: securemeshSiteV2AwsManagedEgressVirtualPrivateGatewayToTerraform(struct!.egressVirtualPrivateGateway),
    multiple_interface: securemeshSiteV2AwsManagedMultipleInterfaceToTerraform(struct!.multipleInterface),
    new_vpc: securemeshSiteV2AwsManagedNewVpcToTerraform(struct!.newVpc),
    private_connectivity: securemeshSiteV2AwsManagedPrivateConnectivityToTerraform(struct!.privateConnectivity),
    single_interface: securemeshSiteV2AwsManagedSingleInterfaceToTerraform(struct!.singleInterface),
    tgw: securemeshSiteV2AwsManagedTgwToTerraform(struct!.tgw),
  }
}


export function securemeshSiteV2AwsManagedToHclTerraform(struct?: SecuremeshSiteV2AwsManagedOutputReference | SecuremeshSiteV2AwsManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_gateway_default: {
      value: cdktf.booleanToHclTerraform(struct!.egressGatewayDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    f5xc_security_group: {
      value: cdktf.booleanToHclTerraform(struct!.f5XcSecurityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_connectivity_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.privateConnectivityDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_cred: {
      value: securemeshSiteV2AwsManagedAwsCredToHclTerraform(struct!.awsCred),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedAwsCredList",
    },
    custom_security_group: {
      value: securemeshSiteV2AwsManagedCustomSecurityGroupToHclTerraform(struct!.customSecurityGroup),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedCustomSecurityGroupList",
    },
    egress_nat_gw: {
      value: securemeshSiteV2AwsManagedEgressNatGwToHclTerraform(struct!.egressNatGw),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedEgressNatGwList",
    },
    egress_virtual_private_gateway: {
      value: securemeshSiteV2AwsManagedEgressVirtualPrivateGatewayToHclTerraform(struct!.egressVirtualPrivateGateway),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedEgressVirtualPrivateGatewayList",
    },
    multiple_interface: {
      value: securemeshSiteV2AwsManagedMultipleInterfaceToHclTerraform(struct!.multipleInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedMultipleInterfaceList",
    },
    new_vpc: {
      value: securemeshSiteV2AwsManagedNewVpcToHclTerraform(struct!.newVpc),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedNewVpcList",
    },
    private_connectivity: {
      value: securemeshSiteV2AwsManagedPrivateConnectivityToHclTerraform(struct!.privateConnectivity),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedPrivateConnectivityList",
    },
    single_interface: {
      value: securemeshSiteV2AwsManagedSingleInterfaceToHclTerraform(struct!.singleInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedSingleInterfaceList",
    },
    tgw: {
      value: securemeshSiteV2AwsManagedTgwToHclTerraform(struct!.tgw),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedTgwList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._egressGatewayDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressGatewayDefault = this._egressGatewayDefault;
    }
    if (this._f5XcSecurityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5XcSecurityGroup = this._f5XcSecurityGroup;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._privateConnectivityDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivityDisabled = this._privateConnectivityDisabled;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._awsCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsCred = this._awsCred?.internalValue;
    }
    if (this._customSecurityGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurityGroup = this._customSecurityGroup?.internalValue;
    }
    if (this._egressNatGw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressNatGw = this._egressNatGw?.internalValue;
    }
    if (this._egressVirtualPrivateGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressVirtualPrivateGateway = this._egressVirtualPrivateGateway?.internalValue;
    }
    if (this._multipleInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleInterface = this._multipleInterface?.internalValue;
    }
    if (this._newVpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newVpc = this._newVpc?.internalValue;
    }
    if (this._privateConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivity = this._privateConnectivity?.internalValue;
    }
    if (this._singleInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleInterface = this._singleInterface?.internalValue;
    }
    if (this._tgw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tgw = this._tgw?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._disabled = undefined;
      this._diskSize = undefined;
      this._egressGatewayDefault = undefined;
      this._f5XcSecurityGroup = undefined;
      this._instanceType = undefined;
      this._privateConnectivityDisabled = undefined;
      this._tags = undefined;
      this._vpcId = undefined;
      this._awsCred.internalValue = undefined;
      this._customSecurityGroup.internalValue = undefined;
      this._egressNatGw.internalValue = undefined;
      this._egressVirtualPrivateGateway.internalValue = undefined;
      this._multipleInterface.internalValue = undefined;
      this._newVpc.internalValue = undefined;
      this._privateConnectivity.internalValue = undefined;
      this._singleInterface.internalValue = undefined;
      this._tgw.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._disabled = value.disabled;
      this._diskSize = value.diskSize;
      this._egressGatewayDefault = value.egressGatewayDefault;
      this._f5XcSecurityGroup = value.f5XcSecurityGroup;
      this._instanceType = value.instanceType;
      this._privateConnectivityDisabled = value.privateConnectivityDisabled;
      this._tags = value.tags;
      this._vpcId = value.vpcId;
      this._awsCred.internalValue = value.awsCred;
      this._customSecurityGroup.internalValue = value.customSecurityGroup;
      this._egressNatGw.internalValue = value.egressNatGw;
      this._egressVirtualPrivateGateway.internalValue = value.egressVirtualPrivateGateway;
      this._multipleInterface.internalValue = value.multipleInterface;
      this._newVpc.internalValue = value.newVpc;
      this._privateConnectivity.internalValue = value.privateConnectivity;
      this._singleInterface.internalValue = value.singleInterface;
      this._tgw.internalValue = value.tgw;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // egress_gateway_default - computed: false, optional: true, required: false
  private _egressGatewayDefault?: boolean | cdktf.IResolvable; 
  public get egressGatewayDefault() {
    return this.getBooleanAttribute('egress_gateway_default');
  }
  public set egressGatewayDefault(value: boolean | cdktf.IResolvable) {
    this._egressGatewayDefault = value;
  }
  public resetEgressGatewayDefault() {
    this._egressGatewayDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressGatewayDefaultInput() {
    return this._egressGatewayDefault;
  }

  // f5xc_security_group - computed: false, optional: true, required: false
  private _f5XcSecurityGroup?: boolean | cdktf.IResolvable; 
  public get f5XcSecurityGroup() {
    return this.getBooleanAttribute('f5xc_security_group');
  }
  public set f5XcSecurityGroup(value: boolean | cdktf.IResolvable) {
    this._f5XcSecurityGroup = value;
  }
  public resetF5XcSecurityGroup() {
    this._f5XcSecurityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5XcSecurityGroupInput() {
    return this._f5XcSecurityGroup;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // private_connectivity_disabled - computed: false, optional: true, required: false
  private _privateConnectivityDisabled?: boolean | cdktf.IResolvable; 
  public get privateConnectivityDisabled() {
    return this.getBooleanAttribute('private_connectivity_disabled');
  }
  public set privateConnectivityDisabled(value: boolean | cdktf.IResolvable) {
    this._privateConnectivityDisabled = value;
  }
  public resetPrivateConnectivityDisabled() {
    this._privateConnectivityDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityDisabledInput() {
    return this._privateConnectivityDisabled;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // aws_cred - computed: false, optional: false, required: true
  private _awsCred = new SecuremeshSiteV2AwsManagedAwsCredOutputReference(this, "aws_cred");
  public get awsCred() {
    return this._awsCred;
  }
  public putAwsCred(value: SecuremeshSiteV2AwsManagedAwsCred) {
    this._awsCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredInput() {
    return this._awsCred.internalValue;
  }

  // custom_security_group - computed: false, optional: true, required: false
  private _customSecurityGroup = new SecuremeshSiteV2AwsManagedCustomSecurityGroupOutputReference(this, "custom_security_group");
  public get customSecurityGroup() {
    return this._customSecurityGroup;
  }
  public putCustomSecurityGroup(value: SecuremeshSiteV2AwsManagedCustomSecurityGroup) {
    this._customSecurityGroup.internalValue = value;
  }
  public resetCustomSecurityGroup() {
    this._customSecurityGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityGroupInput() {
    return this._customSecurityGroup.internalValue;
  }

  // egress_nat_gw - computed: false, optional: true, required: false
  private _egressNatGw = new SecuremeshSiteV2AwsManagedEgressNatGwOutputReference(this, "egress_nat_gw");
  public get egressNatGw() {
    return this._egressNatGw;
  }
  public putEgressNatGw(value: SecuremeshSiteV2AwsManagedEgressNatGw) {
    this._egressNatGw.internalValue = value;
  }
  public resetEgressNatGw() {
    this._egressNatGw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressNatGwInput() {
    return this._egressNatGw.internalValue;
  }

  // egress_virtual_private_gateway - computed: false, optional: true, required: false
  private _egressVirtualPrivateGateway = new SecuremeshSiteV2AwsManagedEgressVirtualPrivateGatewayOutputReference(this, "egress_virtual_private_gateway");
  public get egressVirtualPrivateGateway() {
    return this._egressVirtualPrivateGateway;
  }
  public putEgressVirtualPrivateGateway(value: SecuremeshSiteV2AwsManagedEgressVirtualPrivateGateway) {
    this._egressVirtualPrivateGateway.internalValue = value;
  }
  public resetEgressVirtualPrivateGateway() {
    this._egressVirtualPrivateGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressVirtualPrivateGatewayInput() {
    return this._egressVirtualPrivateGateway.internalValue;
  }

  // multiple_interface - computed: false, optional: true, required: false
  private _multipleInterface = new SecuremeshSiteV2AwsManagedMultipleInterfaceOutputReference(this, "multiple_interface");
  public get multipleInterface() {
    return this._multipleInterface;
  }
  public putMultipleInterface(value: SecuremeshSiteV2AwsManagedMultipleInterface) {
    this._multipleInterface.internalValue = value;
  }
  public resetMultipleInterface() {
    this._multipleInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleInterfaceInput() {
    return this._multipleInterface.internalValue;
  }

  // new_vpc - computed: false, optional: true, required: false
  private _newVpc = new SecuremeshSiteV2AwsManagedNewVpcOutputReference(this, "new_vpc");
  public get newVpc() {
    return this._newVpc;
  }
  public putNewVpc(value: SecuremeshSiteV2AwsManagedNewVpc) {
    this._newVpc.internalValue = value;
  }
  public resetNewVpc() {
    this._newVpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newVpcInput() {
    return this._newVpc.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new SecuremeshSiteV2AwsManagedPrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: SecuremeshSiteV2AwsManagedPrivateConnectivity) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // single_interface - computed: false, optional: true, required: false
  private _singleInterface = new SecuremeshSiteV2AwsManagedSingleInterfaceOutputReference(this, "single_interface");
  public get singleInterface() {
    return this._singleInterface;
  }
  public putSingleInterface(value: SecuremeshSiteV2AwsManagedSingleInterface) {
    this._singleInterface.internalValue = value;
  }
  public resetSingleInterface() {
    this._singleInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInterfaceInput() {
    return this._singleInterface.internalValue;
  }

  // tgw - computed: false, optional: true, required: false
  private _tgw = new SecuremeshSiteV2AwsManagedTgwOutputReference(this, "tgw");
  public get tgw() {
    return this._tgw;
  }
  public putTgw(value: SecuremeshSiteV2AwsManagedTgw) {
    this._tgw.internalValue = value;
  }
  public resetTgw() {
    this._tgw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwInput() {
    return this._tgw.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#exclude SecuremeshSiteV2#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dgw_address SecuremeshSiteV2#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_address SecuremeshSiteV2#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#same_as_dgw SecuremeshSiteV2#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix_allocator SecuremeshSiteV2#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dgw_address: cdktf.stringToTerraform(struct!.dgwAddress),
    dns_address: cdktf.stringToTerraform(struct!.dnsAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    same_as_dgw: cdktf.booleanToTerraform(struct!.sameAsDgw),
    network_prefix_allocator: securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dgw_address: {
      value: cdktf.stringToHclTerraform(struct!.dgwAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_dgw: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsDgw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix_allocator: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dgwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgwAddress = this._dgwAddress;
    }
    if (this._dnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddress = this._dnsAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._sameAsDgw !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsDgw = this._sameAsDgw;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dgwAddress = undefined;
      this._dnsAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._sameAsDgw = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dgwAddress = value.dgwAddress;
      this._dnsAddress = value.dnsAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._sameAsDgw = value.sameAsDgw;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // dgw_address - computed: false, optional: true, required: false
  private _dgwAddress?: string; 
  public get dgwAddress() {
    return this.getStringAttribute('dgw_address');
  }
  public set dgwAddress(value: string) {
    this._dgwAddress = value;
  }
  public resetDgwAddress() {
    this._dgwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgwAddressInput() {
    return this._dgwAddress;
  }

  // dns_address - computed: false, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // same_as_dgw - computed: false, optional: true, required: false
  private _sameAsDgw?: boolean | cdktf.IResolvable; 
  public get sameAsDgw() {
    return this.getBooleanAttribute('same_as_dgw');
  }
  public set sameAsDgw(value: boolean | cdktf.IResolvable) {
    this._sameAsDgw = value;
  }
  public resetSameAsDgw() {
    this._sameAsDgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsDgwInput() {
    return this._sameAsDgw;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksOutputReference {
    return new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_option82_tag SecuremeshSiteV2#dhcp_option82_tag}
  */
  readonly dhcpOption82Tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    dhcp_option82_tag: cdktf.stringToTerraform(struct!.dhcpOption82Tag),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_option82_tag: {
      value: cdktf.stringToHclTerraform(struct!.dhcpOption82Tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._dhcpOption82Tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOption82Tag = this._dhcpOption82Tag;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._dhcpOption82Tag = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._dhcpOption82Tag = value.dhcpOption82Tag;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // dhcp_option82_tag - computed: false, optional: true, required: false
  private _dhcpOption82Tag?: string; 
  public get dhcpOption82Tag() {
    return this.getStringAttribute('dhcp_option82_tag');
  }
  public set dhcpOption82Tag(value: string) {
    this._dhcpOption82Tag = value;
  }
  public resetDhcpOption82Tag() {
    this._dhcpOption82Tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82TagInput() {
    return this._dhcpOption82Tag;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#exclude SecuremeshSiteV2#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix_allocator SecuremeshSiteV2#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    network_prefix_allocator: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix_allocator SecuremeshSiteV2#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * fleet_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#fleet_static_ip SecuremeshSiteV2#fleet_static_ip}
  */
  readonly fleetStaticIp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    fleet_static_ip: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpToTerraform(struct!.fleetStaticIp),
    node_static_ip: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    fleet_static_ip: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpToHclTerraform(struct!.fleetStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._fleetStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetStaticIp = this._fleetStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._fleetStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._fleetStaticIp.internalValue = value.fleetStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // fleet_static_ip - computed: false, optional: true, required: false
  private _fleetStaticIp = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference(this, "fleet_static_ip");
  public get fleetStaticIp() {
    return this._fleetStaticIp;
  }
  public putFleetStaticIp(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp) {
    this._fleetStaticIp.internalValue = value;
  }
  public resetFleetStaticIp() {
    this._fleetStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetStaticIpInput() {
    return this._fleetStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
    this._nodeStaticIp.internalValue = value;
  }
  public resetNodeStaticIp() {
    this._nodeStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStaticIpInput() {
    return this._nodeStaticIp.internalValue;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._vlanId = value.vlanId;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#is_management SecuremeshSiteV2#is_management}
  */
  readonly isManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#is_primary SecuremeshSiteV2#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface;
  /**
  * dhcp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_server SecuremeshSiteV2#dhcp_server}
  */
  readonly dhcpServer?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    is_management: cdktf.booleanToTerraform(struct!.isManagement),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    dhcp_server: securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerToTerraform(struct!.dhcpServer),
    ethernet_interface: securemeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2AwsNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
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
    dhcp_client: {
      value: cdktf.booleanToHclTerraform(struct!.dhcpClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_management: {
      value: cdktf.booleanToHclTerraform(struct!.isManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
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
    monitor_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.monitorDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_ipv4_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.noIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bond_interface: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceList",
    },
    dhcp_server: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerToHclTerraform(struct!.dhcpServer),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerList",
    },
    ethernet_interface: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpClient = this._dhcpClient;
    }
    if (this._isManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.isManagement = this._isManagement;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._monitorDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDisabled = this._monitorDisabled;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._noIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv4Address = this._noIpv4Address;
    }
    if (this._noIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpv6Address = this._noIpv6Address;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._bondInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bondInterface = this._bondInterface?.internalValue;
    }
    if (this._dhcpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer?.internalValue;
    }
    if (this._ethernetInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethernetInterface = this._ethernetInterface?.internalValue;
    }
    if (this._ipv6AutoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AutoConfig = this._ipv6AutoConfig?.internalValue;
    }
    if (this._monitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor?.internalValue;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    if (this._staticIpv6Address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6Address = this._staticIpv6Address?.internalValue;
    }
    if (this._vlanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanInterface = this._vlanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
      this._isManagement = undefined;
      this._isPrimary = undefined;
      this._labels = undefined;
      this._monitorDisabled = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._noIpv4Address = undefined;
      this._noIpv6Address = undefined;
      this._priority = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._bondInterface.internalValue = undefined;
      this._dhcpServer.internalValue = undefined;
      this._ethernetInterface.internalValue = undefined;
      this._ipv6AutoConfig.internalValue = undefined;
      this._monitor.internalValue = undefined;
      this._networkOption.internalValue = undefined;
      this._staticIp.internalValue = undefined;
      this._staticIpv6Address.internalValue = undefined;
      this._vlanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dhcpClient = value.dhcpClient;
      this._isManagement = value.isManagement;
      this._isPrimary = value.isPrimary;
      this._labels = value.labels;
      this._monitorDisabled = value.monitorDisabled;
      this._mtu = value.mtu;
      this._name = value.name;
      this._noIpv4Address = value.noIpv4Address;
      this._noIpv6Address = value.noIpv6Address;
      this._priority = value.priority;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._bondInterface.internalValue = value.bondInterface;
      this._dhcpServer.internalValue = value.dhcpServer;
      this._ethernetInterface.internalValue = value.ethernetInterface;
      this._ipv6AutoConfig.internalValue = value.ipv6AutoConfig;
      this._monitor.internalValue = value.monitor;
      this._networkOption.internalValue = value.networkOption;
      this._staticIp.internalValue = value.staticIp;
      this._staticIpv6Address.internalValue = value.staticIpv6Address;
      this._vlanInterface.internalValue = value.vlanInterface;
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

  // dhcp_client - computed: false, optional: true, required: false
  private _dhcpClient?: boolean | cdktf.IResolvable; 
  public get dhcpClient() {
    return this.getBooleanAttribute('dhcp_client');
  }
  public set dhcpClient(value: boolean | cdktf.IResolvable) {
    this._dhcpClient = value;
  }
  public resetDhcpClient() {
    this._dhcpClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientInput() {
    return this._dhcpClient;
  }

  // is_management - computed: false, optional: true, required: false
  private _isManagement?: boolean | cdktf.IResolvable; 
  public get isManagement() {
    return this.getBooleanAttribute('is_management');
  }
  public set isManagement(value: boolean | cdktf.IResolvable) {
    this._isManagement = value;
  }
  public resetIsManagement() {
    this._isManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isManagementInput() {
    return this._isManagement;
  }

  // is_primary - computed: false, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
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

  // monitor_disabled - computed: false, optional: true, required: false
  private _monitorDisabled?: boolean | cdktf.IResolvable; 
  public get monitorDisabled() {
    return this.getBooleanAttribute('monitor_disabled');
  }
  public set monitorDisabled(value: boolean | cdktf.IResolvable) {
    this._monitorDisabled = value;
  }
  public resetMonitorDisabled() {
    this._monitorDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDisabledInput() {
    return this._monitorDisabled;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // no_ipv4_address - computed: false, optional: true, required: false
  private _noIpv4Address?: boolean | cdktf.IResolvable; 
  public get noIpv4Address() {
    return this.getBooleanAttribute('no_ipv4_address');
  }
  public set noIpv4Address(value: boolean | cdktf.IResolvable) {
    this._noIpv4Address = value;
  }
  public resetNoIpv4Address() {
    this._noIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv4AddressInput() {
    return this._noIpv4Address;
  }

  // no_ipv6_address - computed: false, optional: true, required: false
  private _noIpv6Address?: boolean | cdktf.IResolvable; 
  public get noIpv6Address() {
    return this.getBooleanAttribute('no_ipv6_address');
  }
  public set noIpv6Address(value: boolean | cdktf.IResolvable) {
    this._noIpv6Address = value;
  }
  public resetNoIpv6Address() {
    this._noIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpv6AddressInput() {
    return this._noIpv6Address;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // bond_interface - computed: false, optional: true, required: false
  private _bondInterface = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // dhcp_server - computed: false, optional: true, required: false
  private _dhcpServer = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServerOutputReference(this, "dhcp_server");
  public get dhcpServer() {
    return this._dhcpServer;
  }
  public putDhcpServer(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListDhcpServer) {
    this._dhcpServer.internalValue = value;
  }
  public resetDhcpServer() {
    this._dhcpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface) {
    this._ethernetInterface.internalValue = value;
  }
  public resetEthernetInterface() {
    this._ethernetInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInterfaceInput() {
    return this._ethernetInterface.internalValue;
  }

  // ipv6_auto_config - computed: false, optional: true, required: false
  private _ipv6AutoConfig = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig) {
    this._ipv6AutoConfig.internalValue = value;
  }
  public resetIpv6AutoConfig() {
    this._ipv6AutoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AutoConfigInput() {
    return this._ipv6AutoConfig.internalValue;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }

  // static_ipv6_address - computed: false, optional: true, required: false
  private _staticIpv6Address = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address) {
    this._staticIpv6Address.internalValue = value;
  }
  public resetStaticIpv6Address() {
    this._staticIpv6Address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6AddressInput() {
    return this._staticIpv6Address.internalValue;
  }

  // vlan_interface - computed: false, optional: true, required: false
  private _vlanInterface = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListVlanInterface) {
    this._vlanInterface.internalValue = value;
  }
  public resetVlanInterface() {
    this._vlanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInterfaceInput() {
    return this._vlanInterface.internalValue;
  }
}

export class SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2AwsNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2AwsNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AwsNotManagedNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._publicIp = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._publicIp = value.publicIp;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
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

  // interface_list - computed: false, optional: true, required: false
  private _interfaceList = new SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  public resetInterfaceList() {
    this._interfaceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2AwsNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AwsNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AwsNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2AwsNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AwsNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2AwsNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AwsNotManagedToTerraform(struct?: SecuremeshSiteV2AwsNotManagedOutputReference | SecuremeshSiteV2AwsNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2AwsNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2AwsNotManagedToHclTerraform(struct?: SecuremeshSiteV2AwsNotManagedOutputReference | SecuremeshSiteV2AwsNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AwsNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AwsNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AwsNotManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2AwsNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AwsNotManagedNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2Aws {
  /**
  * managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#managed SecuremeshSiteV2#managed}
  */
  readonly managed?: SecuremeshSiteV2AwsManaged;
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2AwsNotManaged;
}

export function securemeshSiteV2AwsToTerraform(struct?: SecuremeshSiteV2AwsOutputReference | SecuremeshSiteV2Aws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed: securemeshSiteV2AwsManagedToTerraform(struct!.managed),
    not_managed: securemeshSiteV2AwsNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2AwsToHclTerraform(struct?: SecuremeshSiteV2AwsOutputReference | SecuremeshSiteV2Aws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed: {
      value: securemeshSiteV2AwsManagedToHclTerraform(struct!.managed),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsManagedList",
    },
    not_managed: {
      value: securemeshSiteV2AwsNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AwsNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Aws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed?.internalValue;
    }
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Aws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managed.internalValue = undefined;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managed.internalValue = value.managed;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // managed - computed: false, optional: true, required: false
  private _managed = new SecuremeshSiteV2AwsManagedOutputReference(this, "managed");
  public get managed() {
    return this._managed;
  }
  public putManaged(value: SecuremeshSiteV2AwsManaged) {
    this._managed.internalValue = value;
  }
  public resetManaged() {
    this._managed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed.internalValue;
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2AwsNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2AwsNotManaged) {
    this._notManaged.internalValue = value;
  }
  public resetNotManaged() {
    this._notManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notManagedInput() {
    return this._notManaged.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedAcceleratedNetworking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#disable SecuremeshSiteV2#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#enable SecuremeshSiteV2#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedAcceleratedNetworkingToTerraform(struct?: SecuremeshSiteV2AzureManagedAcceleratedNetworkingOutputReference | SecuremeshSiteV2AzureManagedAcceleratedNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function securemeshSiteV2AzureManagedAcceleratedNetworkingToHclTerraform(struct?: SecuremeshSiteV2AzureManagedAcceleratedNetworkingOutputReference | SecuremeshSiteV2AzureManagedAcceleratedNetworking): any {
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

export class SecuremeshSiteV2AzureManagedAcceleratedNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedAcceleratedNetworking | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedAcceleratedNetworking | undefined) {
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
export interface SecuremeshSiteV2AzureManagedAzureCred {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureManagedAzureCredToTerraform(struct?: SecuremeshSiteV2AzureManagedAzureCredOutputReference | SecuremeshSiteV2AzureManagedAzureCred): any {
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


export function securemeshSiteV2AzureManagedAzureCredToHclTerraform(struct?: SecuremeshSiteV2AzureManagedAzureCredOutputReference | SecuremeshSiteV2AzureManagedAzureCred): any {
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

export class SecuremeshSiteV2AzureManagedAzureCredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedAzureCred | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedAzureCred | undefined) {
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
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet_name SecuremeshSiteV2#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vnet_resource_group SecuremeshSiteV2#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet): any {
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

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
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
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#autogenerate SecuremeshSiteV2#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv4 SecuremeshSiteV2#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
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
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
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

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
      this._ipv4 = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
      this._ipv4 = value.ipv4;
      this._name = value.name;
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
}
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet {
  /**
  * existing_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#existing_subnet SecuremeshSiteV2#existing_subnet}
  */
  readonly existingSubnet?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet_param SecuremeshSiteV2#subnet_param}
  */
  readonly subnetParam?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToTerraform(struct!.existingSubnet),
    subnet_param: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToHclTerraform(struct!.existingSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetList",
    },
    subnet_param: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnet = this._existingSubnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnet.internalValue = value.existingSubnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet - computed: false, optional: true, required: false
  private _existingSubnet = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference(this, "existing_subnet");
  public get existingSubnet() {
    return this._existingSubnet;
  }
  public putExistingSubnet(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet) {
    this._existingSubnet.internalValue = value;
  }
  public resetExistingSubnet() {
    this._existingSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetInput() {
    return this._existingSubnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam) {
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
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet SecuremeshSiteV2#subnet}
  */
  readonly subnet?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    network_option: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    subnet: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct!.subnet),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_option: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionList",
    },
    subnet: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._networkOption.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._networkOption.internalValue = value.networkOption;
      this._subnet.internalValue = value.subnet;
    }
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#azure_az SecuremeshSiteV2#azure_az}
  */
  readonly azureAz: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_az: cdktf.stringToTerraform(struct!.azureAz),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAz = this._azureAz;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAz = undefined;
      this._hostname = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAz = value.azureAz;
      this._hostname = value.hostname;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // interface_list - computed: false, optional: false, required: true
  private _interfaceList = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructOutputReference {
    return new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListStructToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedMultipleInterface {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct;
}

export function securemeshSiteV2AzureManagedMultipleInterfaceToTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceOutputReference | SecuremeshSiteV2AzureManagedMultipleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: securemeshSiteV2AzureManagedMultipleInterfaceNodeListStructToTerraform(struct!.nodeList),
  }
}


export function securemeshSiteV2AzureManagedMultipleInterfaceToHclTerraform(struct?: SecuremeshSiteV2AzureManagedMultipleInterfaceOutputReference | SecuremeshSiteV2AzureManagedMultipleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceNodeListStructToHclTerraform(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedMultipleInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedMultipleInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedMultipleInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStructOutputReference(this, "node_list");
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AzureManagedMultipleInterfaceNodeListStruct) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet_name SecuremeshSiteV2#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vnet_resource_group SecuremeshSiteV2#vnet_resource_group}
  */
  readonly vnetResourceGroup?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_resource_group: cdktf.booleanToTerraform(struct!.vnetResourceGroup),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet): any {
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

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
      this._vnetResourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
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
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#autogenerate SecuremeshSiteV2#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ipv4 SecuremeshSiteV2#ipv4}
  */
  readonly ipv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam): any {
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
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
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

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
      this._ipv4 = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
      this._ipv4 = value.ipv4;
      this._name = value.name;
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
}
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet {
  /**
  * existing_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#existing_subnet SecuremeshSiteV2#existing_subnet}
  */
  readonly existingSubnet?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet;
  /**
  * subnet_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet_param SecuremeshSiteV2#subnet_param}
  */
  readonly subnetParam?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToTerraform(struct!.existingSubnet),
    subnet_param: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToTerraform(struct!.subnetParam),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet: {
      value: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetToHclTerraform(struct!.existingSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetList",
    },
    subnet_param: {
      value: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamToHclTerraform(struct!.subnetParam),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnet = this._existingSubnet?.internalValue;
    }
    if (this._subnetParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetParam = this._subnetParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnet.internalValue = undefined;
      this._subnetParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnet.internalValue = value.existingSubnet;
      this._subnetParam.internalValue = value.subnetParam;
    }
  }

  // existing_subnet - computed: false, optional: true, required: false
  private _existingSubnet = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnetOutputReference(this, "existing_subnet");
  public get existingSubnet() {
    return this._existingSubnet;
  }
  public putExistingSubnet(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetExistingSubnet) {
    this._existingSubnet.internalValue = value;
  }
  public resetExistingSubnet() {
    this._existingSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetInput() {
    return this._existingSubnet.internalValue;
  }

  // subnet_param - computed: false, optional: true, required: false
  private _subnetParam = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParamOutputReference(this, "subnet_param");
  public get subnetParam() {
    return this._subnetParam;
  }
  public putSubnetParam(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetSubnetParam) {
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
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#subnet SecuremeshSiteV2#subnet}
  */
  readonly subnet?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtu: cdktf.numberToTerraform(struct!.mtu),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    network_option: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    subnet: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToTerraform(struct!.subnet),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site_to_site_connectivity_interface_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_to_site_connectivity_interface_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_option: {
      value: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionList",
    },
    subnet: {
      value: securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetToHclTerraform(struct!.subnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._siteToSiteConnectivityInterfaceDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceDisabled = this._siteToSiteConnectivityInterfaceDisabled;
    }
    if (this._siteToSiteConnectivityInterfaceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteToSiteConnectivityInterfaceEnabled = this._siteToSiteConnectivityInterfaceEnabled;
    }
    if (this._networkOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOption = this._networkOption?.internalValue;
    }
    if (this._subnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mtu = undefined;
      this._siteToSiteConnectivityInterfaceDisabled = undefined;
      this._siteToSiteConnectivityInterfaceEnabled = undefined;
      this._networkOption.internalValue = undefined;
      this._subnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mtu = value.mtu;
      this._siteToSiteConnectivityInterfaceDisabled = value.siteToSiteConnectivityInterfaceDisabled;
      this._siteToSiteConnectivityInterfaceEnabled = value.siteToSiteConnectivityInterfaceEnabled;
      this._networkOption.internalValue = value.networkOption;
      this._subnet.internalValue = value.subnet;
    }
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // site_to_site_connectivity_interface_disabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceDisabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_disabled');
  }
  public set siteToSiteConnectivityInterfaceDisabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceDisabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceDisabled() {
    this._siteToSiteConnectivityInterfaceDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceDisabledInput() {
    return this._siteToSiteConnectivityInterfaceDisabled;
  }

  // site_to_site_connectivity_interface_enabled - computed: false, optional: true, required: false
  private _siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable; 
  public get siteToSiteConnectivityInterfaceEnabled() {
    return this.getBooleanAttribute('site_to_site_connectivity_interface_enabled');
  }
  public set siteToSiteConnectivityInterfaceEnabled(value: boolean | cdktf.IResolvable) {
    this._siteToSiteConnectivityInterfaceEnabled = value;
  }
  public resetSiteToSiteConnectivityInterfaceEnabled() {
    this._siteToSiteConnectivityInterfaceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteToSiteConnectivityInterfaceEnabledInput() {
    return this._siteToSiteConnectivityInterfaceEnabled;
  }

  // network_option - computed: false, optional: false, required: true
  private _networkOption = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#azure_az SecuremeshSiteV2#azure_az}
  */
  readonly azureAz: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_az: cdktf.stringToTerraform(struct!.azureAz),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAz !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAz = this._azureAz;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceList = this._interfaceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAz = undefined;
      this._hostname = undefined;
      this._type = undefined;
      this._interfaceList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAz = value.azureAz;
      this._hostname = value.hostname;
      this._type = value.type;
      this._interfaceList.internalValue = value.interfaceList;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // interface_list - computed: false, optional: false, required: true
  private _interfaceList = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListInterfaceListStruct[] | cdktf.IResolvable) {
    this._interfaceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList.internalValue;
  }
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructOutputReference {
    return new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureManagedSingleInterfaceNodeListStructToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStructOutputReference | SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedSingleInterface {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct;
}

export function securemeshSiteV2AzureManagedSingleInterfaceToTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceOutputReference | SecuremeshSiteV2AzureManagedSingleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: securemeshSiteV2AzureManagedSingleInterfaceNodeListStructToTerraform(struct!.nodeList),
  }
}


export function securemeshSiteV2AzureManagedSingleInterfaceToHclTerraform(struct?: SecuremeshSiteV2AzureManagedSingleInterfaceOutputReference | SecuremeshSiteV2AzureManagedSingleInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: securemeshSiteV2AzureManagedSingleInterfaceNodeListStructToHclTerraform(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedSingleInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedSingleInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManagedSingleInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeList.internalValue = value.nodeList;
    }
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStructOutputReference(this, "node_list");
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AzureManagedSingleInterfaceNodeListStruct) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }
}
export interface SecuremeshSiteV2AzureManagedVnetExistingVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#f5_orchestrated_routing SecuremeshSiteV2#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#manual_routing SecuremeshSiteV2#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#resource_group SecuremeshSiteV2#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vnet_name SecuremeshSiteV2#vnet_name}
  */
  readonly vnetName: string;
}

export function securemeshSiteV2AzureManagedVnetExistingVnetToTerraform(struct?: SecuremeshSiteV2AzureManagedVnetExistingVnetOutputReference | SecuremeshSiteV2AzureManagedVnetExistingVnet): any {
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


export function securemeshSiteV2AzureManagedVnetExistingVnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedVnetExistingVnetOutputReference | SecuremeshSiteV2AzureManagedVnetExistingVnet): any {
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

export class SecuremeshSiteV2AzureManagedVnetExistingVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedVnetExistingVnet | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedVnetExistingVnet | undefined) {
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
export interface SecuremeshSiteV2AzureManagedVnetNewVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#autogenerate SecuremeshSiteV2#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#primary_ipv4 SecuremeshSiteV2#primary_ipv4}
  */
  readonly primaryIpv4: string;
}

export function securemeshSiteV2AzureManagedVnetNewVnetToTerraform(struct?: SecuremeshSiteV2AzureManagedVnetNewVnetOutputReference | SecuremeshSiteV2AzureManagedVnetNewVnet): any {
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


export function securemeshSiteV2AzureManagedVnetNewVnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedVnetNewVnetOutputReference | SecuremeshSiteV2AzureManagedVnetNewVnet): any {
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

export class SecuremeshSiteV2AzureManagedVnetNewVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedVnetNewVnet | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedVnetNewVnet | undefined) {
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
export interface SecuremeshSiteV2AzureManagedVnet {
  /**
  * existing_vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#existing_vnet SecuremeshSiteV2#existing_vnet}
  */
  readonly existingVnet?: SecuremeshSiteV2AzureManagedVnetExistingVnet;
  /**
  * new_vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#new_vnet SecuremeshSiteV2#new_vnet}
  */
  readonly newVnet?: SecuremeshSiteV2AzureManagedVnetNewVnet;
}

export function securemeshSiteV2AzureManagedVnetToTerraform(struct?: SecuremeshSiteV2AzureManagedVnetOutputReference | SecuremeshSiteV2AzureManagedVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_vnet: securemeshSiteV2AzureManagedVnetExistingVnetToTerraform(struct!.existingVnet),
    new_vnet: securemeshSiteV2AzureManagedVnetNewVnetToTerraform(struct!.newVnet),
  }
}


export function securemeshSiteV2AzureManagedVnetToHclTerraform(struct?: SecuremeshSiteV2AzureManagedVnetOutputReference | SecuremeshSiteV2AzureManagedVnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_vnet: {
      value: securemeshSiteV2AzureManagedVnetExistingVnetToHclTerraform(struct!.existingVnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedVnetExistingVnetList",
    },
    new_vnet: {
      value: securemeshSiteV2AzureManagedVnetNewVnetToHclTerraform(struct!.newVnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedVnetNewVnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedVnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManagedVnet | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureManagedVnet | undefined) {
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
  private _existingVnet = new SecuremeshSiteV2AzureManagedVnetExistingVnetOutputReference(this, "existing_vnet");
  public get existingVnet() {
    return this._existingVnet;
  }
  public putExistingVnet(value: SecuremeshSiteV2AzureManagedVnetExistingVnet) {
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
  private _newVnet = new SecuremeshSiteV2AzureManagedVnetNewVnetOutputReference(this, "new_vnet");
  public get newVnet() {
    return this._newVnet;
  }
  public putNewVnet(value: SecuremeshSiteV2AzureManagedVnetNewVnet) {
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
export interface SecuremeshSiteV2AzureManaged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#azure_region SecuremeshSiteV2#azure_region}
  */
  readonly azureRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#disabled SecuremeshSiteV2#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#disk_size SecuremeshSiteV2#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#enabled SecuremeshSiteV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#machine_type SecuremeshSiteV2#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#resource_group SecuremeshSiteV2#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tags SecuremeshSiteV2#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * accelerated_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#accelerated_networking SecuremeshSiteV2#accelerated_networking}
  */
  readonly acceleratedNetworking?: SecuremeshSiteV2AzureManagedAcceleratedNetworking;
  /**
  * azure_cred block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#azure_cred SecuremeshSiteV2#azure_cred}
  */
  readonly azureCred: SecuremeshSiteV2AzureManagedAzureCred;
  /**
  * multiple_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#multiple_interface SecuremeshSiteV2#multiple_interface}
  */
  readonly multipleInterface?: SecuremeshSiteV2AzureManagedMultipleInterface;
  /**
  * single_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#single_interface SecuremeshSiteV2#single_interface}
  */
  readonly singleInterface?: SecuremeshSiteV2AzureManagedSingleInterface;
  /**
  * vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#vnet SecuremeshSiteV2#vnet}
  */
  readonly vnet: SecuremeshSiteV2AzureManagedVnet;
}

export function securemeshSiteV2AzureManagedToTerraform(struct?: SecuremeshSiteV2AzureManagedOutputReference | SecuremeshSiteV2AzureManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_region: cdktf.stringToTerraform(struct!.azureRegion),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    accelerated_networking: securemeshSiteV2AzureManagedAcceleratedNetworkingToTerraform(struct!.acceleratedNetworking),
    azure_cred: securemeshSiteV2AzureManagedAzureCredToTerraform(struct!.azureCred),
    multiple_interface: securemeshSiteV2AzureManagedMultipleInterfaceToTerraform(struct!.multipleInterface),
    single_interface: securemeshSiteV2AzureManagedSingleInterfaceToTerraform(struct!.singleInterface),
    vnet: securemeshSiteV2AzureManagedVnetToTerraform(struct!.vnet),
  }
}


export function securemeshSiteV2AzureManagedToHclTerraform(struct?: SecuremeshSiteV2AzureManagedOutputReference | SecuremeshSiteV2AzureManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    azure_region: {
      value: cdktf.stringToHclTerraform(struct!.azureRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    accelerated_networking: {
      value: securemeshSiteV2AzureManagedAcceleratedNetworkingToHclTerraform(struct!.acceleratedNetworking),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedAcceleratedNetworkingList",
    },
    azure_cred: {
      value: securemeshSiteV2AzureManagedAzureCredToHclTerraform(struct!.azureCred),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedAzureCredList",
    },
    multiple_interface: {
      value: securemeshSiteV2AzureManagedMultipleInterfaceToHclTerraform(struct!.multipleInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedMultipleInterfaceList",
    },
    single_interface: {
      value: securemeshSiteV2AzureManagedSingleInterfaceToHclTerraform(struct!.singleInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedSingleInterfaceList",
    },
    vnet: {
      value: securemeshSiteV2AzureManagedVnetToHclTerraform(struct!.vnet),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureManagedVnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureRegion = this._azureRegion;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._acceleratedNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking?.internalValue;
    }
    if (this._azureCred?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCred = this._azureCred?.internalValue;
    }
    if (this._multipleInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleInterface = this._multipleInterface?.internalValue;
    }
    if (this._singleInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleInterface = this._singleInterface?.internalValue;
    }
    if (this._vnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._azureRegion = undefined;
      this._disabled = undefined;
      this._diskSize = undefined;
      this._enabled = undefined;
      this._machineType = undefined;
      this._resourceGroup = undefined;
      this._tags = undefined;
      this._acceleratedNetworking.internalValue = undefined;
      this._azureCred.internalValue = undefined;
      this._multipleInterface.internalValue = undefined;
      this._singleInterface.internalValue = undefined;
      this._vnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._azureRegion = value.azureRegion;
      this._disabled = value.disabled;
      this._diskSize = value.diskSize;
      this._enabled = value.enabled;
      this._machineType = value.machineType;
      this._resourceGroup = value.resourceGroup;
      this._tags = value.tags;
      this._acceleratedNetworking.internalValue = value.acceleratedNetworking;
      this._azureCred.internalValue = value.azureCred;
      this._multipleInterface.internalValue = value.multipleInterface;
      this._singleInterface.internalValue = value.singleInterface;
      this._vnet.internalValue = value.vnet;
    }
  }

  // azure_region - computed: false, optional: false, required: true
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking = new SecuremeshSiteV2AzureManagedAcceleratedNetworkingOutputReference(this, "accelerated_networking");
  public get acceleratedNetworking() {
    return this._acceleratedNetworking;
  }
  public putAcceleratedNetworking(value: SecuremeshSiteV2AzureManagedAcceleratedNetworking) {
    this._acceleratedNetworking.internalValue = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking.internalValue;
  }

  // azure_cred - computed: false, optional: false, required: true
  private _azureCred = new SecuremeshSiteV2AzureManagedAzureCredOutputReference(this, "azure_cred");
  public get azureCred() {
    return this._azureCred;
  }
  public putAzureCred(value: SecuremeshSiteV2AzureManagedAzureCred) {
    this._azureCred.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredInput() {
    return this._azureCred.internalValue;
  }

  // multiple_interface - computed: false, optional: true, required: false
  private _multipleInterface = new SecuremeshSiteV2AzureManagedMultipleInterfaceOutputReference(this, "multiple_interface");
  public get multipleInterface() {
    return this._multipleInterface;
  }
  public putMultipleInterface(value: SecuremeshSiteV2AzureManagedMultipleInterface) {
    this._multipleInterface.internalValue = value;
  }
  public resetMultipleInterface() {
    this._multipleInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleInterfaceInput() {
    return this._multipleInterface.internalValue;
  }

  // single_interface - computed: false, optional: true, required: false
  private _singleInterface = new SecuremeshSiteV2AzureManagedSingleInterfaceOutputReference(this, "single_interface");
  public get singleInterface() {
    return this._singleInterface;
  }
  public putSingleInterface(value: SecuremeshSiteV2AzureManagedSingleInterface) {
    this._singleInterface.internalValue = value;
  }
  public resetSingleInterface() {
    this._singleInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleInterfaceInput() {
    return this._singleInterface.internalValue;
  }

  // vnet - computed: false, optional: false, required: true
  private _vnet = new SecuremeshSiteV2AzureManagedVnetOutputReference(this, "vnet");
  public get vnet() {
    return this._vnet;
  }
  public putVnet(value: SecuremeshSiteV2AzureManagedVnet) {
    this._vnet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate: {
      value: cdktf.numberToHclTerraform(struct!.rate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rate = value.rate;
    }
  }

  // rate - computed: false, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_backup: cdktf.booleanToTerraform(struct!.activeBackup),
    devices: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.devices),
    link_polling_interval: cdktf.numberToTerraform(struct!.linkPollingInterval),
    link_up_delay: cdktf.numberToTerraform(struct!.linkUpDelay),
    name: cdktf.stringToTerraform(struct!.name),
    lacp: securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_backup: {
      value: cdktf.booleanToHclTerraform(struct!.activeBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    devices: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.devices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    link_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.linkPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_up_delay: {
      value: cdktf.numberToHclTerraform(struct!.linkUpDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeBackup = this._activeBackup;
    }
    if (this._devices !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices;
    }
    if (this._linkPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkPollingInterval = this._linkPollingInterval;
    }
    if (this._linkUpDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkUpDelay = this._linkUpDelay;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._lacp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacp = this._lacp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeBackup = undefined;
      this._devices = undefined;
      this._linkPollingInterval = undefined;
      this._linkUpDelay = undefined;
      this._name = undefined;
      this._lacp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeBackup = value.activeBackup;
      this._devices = value.devices;
      this._linkPollingInterval = value.linkPollingInterval;
      this._linkUpDelay = value.linkUpDelay;
      this._name = value.name;
      this._lacp.internalValue = value.lacp;
    }
  }

  // active_backup - computed: false, optional: true, required: false
  private _activeBackup?: boolean | cdktf.IResolvable; 
  public get activeBackup() {
    return this.getBooleanAttribute('active_backup');
  }
  public set activeBackup(value: boolean | cdktf.IResolvable) {
    this._activeBackup = value;
  }
  public resetActiveBackup() {
    this._activeBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeBackupInput() {
    return this._activeBackup;
  }

  // devices - computed: false, optional: false, required: true
  private _devices?: string[]; 
  public get devices() {
    return this.getListAttribute('devices');
  }
  public set devices(value: string[]) {
    this._devices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices;
  }

  // link_polling_interval - computed: false, optional: false, required: true
  private _linkPollingInterval?: number; 
  public get linkPollingInterval() {
    return this.getNumberAttribute('link_polling_interval');
  }
  public set linkPollingInterval(value: number) {
    this._linkPollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollingIntervalInput() {
    return this._linkPollingInterval;
  }

  // link_up_delay - computed: false, optional: false, required: true
  private _linkUpDelay?: number; 
  public get linkUpDelay() {
    return this.getNumberAttribute('link_up_delay');
  }
  public set linkUpDelay(value: number) {
    this._linkUpDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUpDelayInput() {
    return this._linkUpDelay;
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

  // lacp - computed: false, optional: true, required: false
  private _lacp = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp) {
    this._lacp.internalValue = value;
  }
  public resetLacp() {
    this._lacp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpInput() {
    return this._lacp.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#exclude SecuremeshSiteV2#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dgw_address SecuremeshSiteV2#dgw_address}
  */
  readonly dgwAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_address SecuremeshSiteV2#dns_address}
  */
  readonly dnsAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#same_as_dgw SecuremeshSiteV2#same_as_dgw}
  */
  readonly sameAsDgw?: boolean | cdktf.IResolvable;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix_allocator SecuremeshSiteV2#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dgw_address: cdktf.stringToTerraform(struct!.dgwAddress),
    dns_address: cdktf.stringToTerraform(struct!.dnsAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    same_as_dgw: cdktf.booleanToTerraform(struct!.sameAsDgw),
    network_prefix_allocator: securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dgw_address: {
      value: cdktf.stringToHclTerraform(struct!.dgwAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_address: {
      value: cdktf.stringToHclTerraform(struct!.dnsAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_as_dgw: {
      value: cdktf.booleanToHclTerraform(struct!.sameAsDgw),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_prefix_allocator: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dgwAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dgwAddress = this._dgwAddress;
    }
    if (this._dnsAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAddress = this._dnsAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._sameAsDgw !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameAsDgw = this._sameAsDgw;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dgwAddress = undefined;
      this._dnsAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._sameAsDgw = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dgwAddress = value.dgwAddress;
      this._dnsAddress = value.dnsAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._sameAsDgw = value.sameAsDgw;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // dgw_address - computed: false, optional: true, required: false
  private _dgwAddress?: string; 
  public get dgwAddress() {
    return this.getStringAttribute('dgw_address');
  }
  public set dgwAddress(value: string) {
    this._dgwAddress = value;
  }
  public resetDgwAddress() {
    this._dgwAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dgwAddressInput() {
    return this._dgwAddress;
  }

  // dns_address - computed: false, optional: true, required: false
  private _dnsAddress?: string; 
  public get dnsAddress() {
    return this.getStringAttribute('dns_address');
  }
  public set dnsAddress(value: string) {
    this._dnsAddress = value;
  }
  public resetDnsAddress() {
    this._dnsAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAddressInput() {
    return this._dnsAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // same_as_dgw - computed: false, optional: true, required: false
  private _sameAsDgw?: boolean | cdktf.IResolvable; 
  public get sameAsDgw() {
    return this.getBooleanAttribute('same_as_dgw');
  }
  public set sameAsDgw(value: boolean | cdktf.IResolvable) {
    this._sameAsDgw = value;
  }
  public resetSameAsDgw() {
    this._sameAsDgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsDgwInput() {
    return this._sameAsDgw;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksOutputReference {
    return new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_option82_tag SecuremeshSiteV2#dhcp_option82_tag}
  */
  readonly dhcpOption82Tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    dhcp_option82_tag: cdktf.stringToTerraform(struct!.dhcpOption82Tag),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp_option82_tag: {
      value: cdktf.stringToHclTerraform(struct!.dhcpOption82Tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._dhcpOption82Tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOption82Tag = this._dhcpOption82Tag;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._dhcpOption82Tag = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._dhcpOption82Tag = value.dhcpOption82Tag;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // dhcp_option82_tag - computed: false, optional: true, required: false
  private _dhcpOption82Tag?: string; 
  public get dhcpOption82Tag() {
    return this.getStringAttribute('dhcp_option82_tag');
  }
  public set dhcpOption82Tag(value: string) {
    this._dhcpOption82Tag = value;
  }
  public resetDhcpOption82Tag() {
    this._dhcpOption82Tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82TagInput() {
    return this._dhcpOption82Tag;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListDhcpServerInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._device = undefined;
      this._mac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._device = value.device;
      this._mac = value.mac;
    }
  }

  // device - computed: false, optional: false, required: true
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsList = value.dnsList;
    }
  }

  // dns_list - computed: false, optional: false, required: true
  private _dnsList?: string[]; 
  public get dnsList() {
    return this.getListAttribute('dns_list');
  }
  public set dnsList(value: string[]) {
    this._dnsList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_address: cdktf.stringToTerraform(struct!.configuredAddress),
    first_address: cdktf.booleanToTerraform(struct!.firstAddress),
    last_address: cdktf.booleanToTerraform(struct!.lastAddress),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_address: {
      value: cdktf.stringToHclTerraform(struct!.configuredAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_address: {
      value: cdktf.booleanToHclTerraform(struct!.firstAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    last_address: {
      value: cdktf.booleanToHclTerraform(struct!.lastAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredAddress = this._configuredAddress;
    }
    if (this._firstAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstAddress = this._firstAddress;
    }
    if (this._lastAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAddress = this._lastAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredAddress = undefined;
      this._firstAddress = undefined;
      this._lastAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredAddress = value.configuredAddress;
      this._firstAddress = value.firstAddress;
      this._lastAddress = value.lastAddress;
    }
  }

  // configured_address - computed: false, optional: true, required: false
  private _configuredAddress?: string; 
  public get configuredAddress() {
    return this.getStringAttribute('configured_address');
  }
  public set configuredAddress(value: string) {
    this._configuredAddress = value;
  }
  public resetConfiguredAddress() {
    this._configuredAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredAddressInput() {
    return this._configuredAddress;
  }

  // first_address - computed: false, optional: true, required: false
  private _firstAddress?: boolean | cdktf.IResolvable; 
  public get firstAddress() {
    return this.getBooleanAttribute('first_address');
  }
  public set firstAddress(value: boolean | cdktf.IResolvable) {
    this._firstAddress = value;
  }
  public resetFirstAddress() {
    this._firstAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstAddressInput() {
    return this._firstAddress;
  }

  // last_address - computed: false, optional: true, required: false
  private _lastAddress?: boolean | cdktf.IResolvable; 
  public get lastAddress() {
    return this.getBooleanAttribute('last_address');
  }
  public set lastAddress(value: boolean | cdktf.IResolvable) {
    this._lastAddress = value;
  }
  public resetLastAddress() {
    this._lastAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAddressInput() {
    return this._lastAddress;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuredList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuredList = this._configuredList?.internalValue;
    }
    if (this._localDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDns = this._localDns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuredList.internalValue = undefined;
      this._localDns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuredList.internalValue = value.configuredList;
      this._localDns.internalValue = value.localDns;
    }
  }

  // configured_list - computed: false, optional: true, required: false
  private _configuredList = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
    this._configuredList.internalValue = value;
  }
  public resetConfiguredList() {
    this._configuredList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configuredListInput() {
    return this._configuredList.internalValue;
  }

  // local_dns - computed: false, optional: true, required: false
  private _localDns = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
    this._localDns.internalValue = value;
  }
  public resetLocalDns() {
    this._localDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDnsInput() {
    return this._localDns.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator): any {
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

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#exclude SecuremeshSiteV2#exclude}
  */
  readonly exclude?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    exclude: cdktf.booleanToTerraform(struct!.exclude),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_ip: {
      value: cdktf.stringToHclTerraform(struct!.endIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.booleanToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_ip: {
      value: cdktf.stringToHclTerraform(struct!.startIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
      this._exclude = undefined;
      this._startIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endIp = value.endIp;
      this._exclude = value.exclude;
      this._startIp = value.startIp;
    }
  }

  // end_ip - computed: false, optional: true, required: false
  private _endIp?: string; 
  public get endIp() {
    return this.getStringAttribute('end_ip');
  }
  public set endIp(value: string) {
    this._endIp = value;
  }
  public resetEndIp() {
    this._endIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endIpInput() {
    return this._endIp;
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: boolean | cdktf.IResolvable; 
  public get exclude() {
    return this.getBooleanAttribute('exclude');
  }
  public set exclude(value: boolean | cdktf.IResolvable) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // start_ip - computed: false, optional: true, required: false
  private _startIp?: string; 
  public get startIp() {
    return this.getStringAttribute('start_ip');
  }
  public set startIp(value: string) {
    this._startIp = value;
  }
  public resetStartIp() {
    this._startIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIpInput() {
    return this._startIp;
  }
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix_allocator SecuremeshSiteV2#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    network_prefix_allocator: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
    pools: cdktf.listMapper(securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_settings: {
      value: cdktf.stringToHclTerraform(struct!.poolSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorList",
    },
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._poolSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSettings = this._poolSettings;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
      this._pools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkPrefix = value.networkPrefix;
      this._poolSettings = value.poolSettings;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
      this._pools.internalValue = value.pools;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // pool_settings - computed: false, optional: false, required: true
  private _poolSettings?: string; 
  public get poolSettings() {
    return this.getStringAttribute('pool_settings');
  }
  public set poolSettings(value: string) {
    this._poolSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSettingsInput() {
    return this._poolSettings;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
    this._pools.internalValue = value;
  }
  public resetPools() {
    this._pools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolsInput() {
    return this._pools.internalValue;
  }
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.interfaceIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap?: { [key: string]: string }; 
  public get interfaceIpMap() {
    return this.getStringMapAttribute('interface_ip_map');
  }
  public set interfaceIpMap(value: { [key: string]: string }) {
    this._interfaceIpMap = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automatic_from_end: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    automatic_from_start: {
      value: cdktf.booleanToHclTerraform(struct!.automaticFromStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fixedIpMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dhcp_networks: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticFromEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromEnd = this._automaticFromEnd;
    }
    if (this._automaticFromStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticFromStart = this._automaticFromStart;
    }
    if (this._fixedIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpMap = this._fixedIpMap;
    }
    if (this._dhcpNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpNetworks = this._dhcpNetworks?.internalValue;
    }
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticFromEnd = undefined;
      this._automaticFromStart = undefined;
      this._fixedIpMap = undefined;
      this._dhcpNetworks.internalValue = undefined;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticFromEnd = value.automaticFromEnd;
      this._automaticFromStart = value.automaticFromStart;
      this._fixedIpMap = value.fixedIpMap;
      this._dhcpNetworks.internalValue = value.dhcpNetworks;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // automatic_from_end - computed: false, optional: true, required: false
  private _automaticFromEnd?: boolean | cdktf.IResolvable; 
  public get automaticFromEnd() {
    return this.getBooleanAttribute('automatic_from_end');
  }
  public set automaticFromEnd(value: boolean | cdktf.IResolvable) {
    this._automaticFromEnd = value;
  }
  public resetAutomaticFromEnd() {
    this._automaticFromEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromEndInput() {
    return this._automaticFromEnd;
  }

  // automatic_from_start - computed: false, optional: true, required: false
  private _automaticFromStart?: boolean | cdktf.IResolvable; 
  public get automaticFromStart() {
    return this.getBooleanAttribute('automatic_from_start');
  }
  public set automaticFromStart(value: boolean | cdktf.IResolvable) {
    this._automaticFromStart = value;
  }
  public resetAutomaticFromStart() {
    this._automaticFromStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticFromStartInput() {
    return this._automaticFromStart;
  }

  // fixed_ip_map - computed: false, optional: true, required: false
  private _fixedIpMap?: { [key: string]: string }; 
  public get fixedIpMap() {
    return this.getStringMapAttribute('fixed_ip_map');
  }
  public set fixedIpMap(value: { [key: string]: string }) {
    this._fixedIpMap = value;
  }
  public resetFixedIpMap() {
    this._fixedIpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpMapInput() {
    return this._fixedIpMap;
  }

  // dhcp_networks - computed: false, optional: false, required: true
  private _dhcpNetworks = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_prefix: {
      value: cdktf.stringToHclTerraform(struct!.networkPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_config: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefix = this._networkPrefix;
    }
    if (this._dnsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsConfig = this._dnsConfig?.internalValue;
    }
    if (this._stateful?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateful = this._stateful?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPrefix = undefined;
      this._dnsConfig.internalValue = undefined;
      this._stateful.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPrefix = value.networkPrefix;
      this._dnsConfig.internalValue = value.dnsConfig;
      this._stateful.internalValue = value.stateful;
    }
  }

  // network_prefix - computed: false, optional: true, required: false
  private _networkPrefix?: string; 
  public get networkPrefix() {
    return this.getStringAttribute('network_prefix');
  }
  public set networkPrefix(value: string) {
    this._networkPrefix = value;
  }
  public resetNetworkPrefix() {
    this._networkPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixInput() {
    return this._networkPrefix;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // stateful - computed: false, optional: true, required: false
  private _stateful = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
    this._stateful.internalValue = value;
  }
  public resetStateful() {
    this._stateful.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulInput() {
    return this._stateful.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.booleanToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._router?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.router = this._router?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._router.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._router.internalValue = value.router;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: boolean | cdktf.IResolvable; 
  public get host() {
    return this.getBooleanAttribute('host');
  }
  public set host(value: boolean | cdktf.IResolvable) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // router - computed: false, optional: true, required: false
  private _router = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_local_inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalInsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    site_local_network: {
      value: cdktf.booleanToHclTerraform(struct!.siteLocalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_network: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteLocalInsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalInsideNetwork = this._siteLocalInsideNetwork;
    }
    if (this._siteLocalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork;
    }
    if (this._segmentNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentNetwork = this._segmentNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._siteLocalInsideNetwork = undefined;
      this._siteLocalNetwork = undefined;
      this._segmentNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._siteLocalInsideNetwork = value.siteLocalInsideNetwork;
      this._siteLocalNetwork = value.siteLocalNetwork;
      this._segmentNetwork.internalValue = value.segmentNetwork;
    }
  }

  // site_local_inside_network - computed: false, optional: true, required: false
  private _siteLocalInsideNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalInsideNetwork() {
    return this.getBooleanAttribute('site_local_inside_network');
  }
  public set siteLocalInsideNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalInsideNetwork = value;
  }
  public resetSiteLocalInsideNetwork() {
    this._siteLocalInsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalInsideNetworkInput() {
    return this._siteLocalInsideNetwork;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork?: boolean | cdktf.IResolvable; 
  public get siteLocalNetwork() {
    return this.getBooleanAttribute('site_local_network');
  }
  public set siteLocalNetwork(value: boolean | cdktf.IResolvable) {
    this._siteLocalNetwork = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork;
  }

  // segment_network - computed: false, optional: true, required: false
  private _segmentNetwork = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
    this._segmentNetwork.internalValue = value;
  }
  public resetSegmentNetwork() {
    this._segmentNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentNetworkInput() {
    return this._segmentNetwork.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceIpMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceIpMap.internalValue = value.interfaceIpMap;
    }
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
    this._interfaceIpMap.internalValue = value;
  }
  public resetInterfaceIpMap() {
    this._interfaceIpMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpMapInput() {
    return this._interfaceIpMap.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator): any {
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

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator | undefined) {
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * network_prefix_allocator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#network_prefix_allocator SecuremeshSiteV2#network_prefix_allocator}
  */
  readonly networkPrefixAllocator?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    network_prefix_allocator: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToTerraform(struct!.networkPrefixAllocator),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_prefix_allocator: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorToHclTerraform(struct!.networkPrefixAllocator),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._networkPrefixAllocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPrefixAllocator = this._networkPrefixAllocator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._networkPrefixAllocator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._networkPrefixAllocator.internalValue = value.networkPrefixAllocator;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // network_prefix_allocator - computed: false, optional: true, required: false
  private _networkPrefixAllocator = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocatorOutputReference(this, "network_prefix_allocator");
  public get networkPrefixAllocator() {
    return this._networkPrefixAllocator;
  }
  public putNetworkPrefixAllocator(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressFleetStaticIpNetworkPrefixAllocator) {
    this._networkPrefixAllocator.internalValue = value;
  }
  public resetNetworkPrefixAllocator() {
    this._networkPrefixAllocator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPrefixAllocatorInput() {
    return this._networkPrefixAllocator.internalValue;
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#dns_server SecuremeshSiteV2#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_gw: {
      value: cdktf.stringToHclTerraform(struct!.defaultGw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_server: {
      value: cdktf.stringToHclTerraform(struct!.dnsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._dnsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._dnsServer = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
      this._dnsServer = value.dnsServer;
      this._ipAddress = value.ipAddress;
    }
  }

  // default_gw - computed: false, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
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
}
