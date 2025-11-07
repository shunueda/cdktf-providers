import * as cdktf from 'cdktf';
export interface SecuremeshSiteV2ActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#enhanced_firewall_policies SecuremeshSiteV2#enhanced_firewall_policies}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#forward_proxy_policies SecuremeshSiteV2#forward_proxy_policies}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#decryption_provider SecuremeshSiteV2#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#location SecuremeshSiteV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#store_provider SecuremeshSiteV2#store_provider}
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#provider SecuremeshSiteV2#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#url SecuremeshSiteV2#url}
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
export interface SecuremeshSiteV2AdminUserCredentialsAdminPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#blindfold_secret_info SecuremeshSiteV2#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#clear_secret_info SecuremeshSiteV2#clear_secret_info}
  */
  readonly clearSecretInfo?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfo;
}

export function securemeshSiteV2AdminUserCredentialsAdminPasswordToTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: securemeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function securemeshSiteV2AdminUserCredentialsAdminPasswordToHclTerraform(struct?: SecuremeshSiteV2AdminUserCredentialsAdminPasswordOutputReference | SecuremeshSiteV2AdminUserCredentialsAdminPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: securemeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AdminUserCredentialsAdminPasswordClearSecretInfoList",
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

  public set internalValue(value: SecuremeshSiteV2AdminUserCredentialsAdminPassword | undefined) {
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
}
export interface SecuremeshSiteV2AdminUserCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ssh_key SecuremeshSiteV2#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * admin_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#admin_password SecuremeshSiteV2#admin_password}
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
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
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
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
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
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
export interface SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
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
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
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
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2AwsNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
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
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2AwsNotManaged;
}

export function securemeshSiteV2AwsToTerraform(struct?: SecuremeshSiteV2AwsOutputReference | SecuremeshSiteV2Aws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2AwsNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2AwsToHclTerraform(struct?: SecuremeshSiteV2AwsOutputReference | SecuremeshSiteV2Aws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Aws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
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
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
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
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
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
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface): any {
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

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface | undefined) {
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
export interface SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2AzureNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
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
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
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
  private _bondInterface = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListEthernetInterface) {
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
  private _ipv6AutoConfig = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListIpv6AutoConfig) {
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
  private _monitor = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListMonitor) {
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
  private _networkOption = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIp) {
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
  private _staticIpv6Address = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStaticIpv6Address) {
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
  private _vlanInterface = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListVlanInterface) {
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

export class SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2AzureNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2AzureNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedNodeListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteV2AzureNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2AzureNotManagedNodeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2AzureNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
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
  private _interfaceList = new SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2AzureNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
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

export class SecuremeshSiteV2AzureNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2AzureNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2AzureNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2AzureNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2AzureNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2AzureNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2AzureNotManagedToTerraform(struct?: SecuremeshSiteV2AzureNotManagedOutputReference | SecuremeshSiteV2AzureNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2AzureNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2AzureNotManagedToHclTerraform(struct?: SecuremeshSiteV2AzureNotManagedOutputReference | SecuremeshSiteV2AzureNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2AzureNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2AzureNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2AzureNotManaged | undefined) {
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
  private _nodeList = new SecuremeshSiteV2AzureNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2AzureNotManagedNodeListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteV2Azure {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2AzureNotManaged;
}

export function securemeshSiteV2AzureToTerraform(struct?: SecuremeshSiteV2AzureOutputReference | SecuremeshSiteV2Azure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2AzureNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2AzureToHclTerraform(struct?: SecuremeshSiteV2AzureOutputReference | SecuremeshSiteV2Azure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2AzureNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2AzureNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2AzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Azure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Azure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2AzureNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2AzureNotManaged) {
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
export interface SecuremeshSiteV2BlockedServicesBlockedSevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns SecuremeshSiteV2#dns}
  */
  readonly dns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_type SecuremeshSiteV2#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ssh SecuremeshSiteV2#ssh}
  */
  readonly ssh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#web_user_interface SecuremeshSiteV2#web_user_interface}
  */
  readonly webUserInterface?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2BlockedServicesBlockedSeviceToTerraform(struct?: SecuremeshSiteV2BlockedServicesBlockedSevice | cdktf.IResolvable): any {
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


export function securemeshSiteV2BlockedServicesBlockedSeviceToHclTerraform(struct?: SecuremeshSiteV2BlockedServicesBlockedSevice | cdktf.IResolvable): any {
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

export class SecuremeshSiteV2BlockedServicesBlockedSeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2BlockedServicesBlockedSevice | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2BlockedServicesBlockedSevice | cdktf.IResolvable | undefined) {
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

export class SecuremeshSiteV2BlockedServicesBlockedSeviceList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2BlockedServicesBlockedSevice[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2BlockedServicesBlockedSeviceOutputReference {
    return new SecuremeshSiteV2BlockedServicesBlockedSeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2BlockedServices {
  /**
  * blocked_sevice block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#blocked_sevice SecuremeshSiteV2#blocked_sevice}
  */
  readonly blockedSevice?: SecuremeshSiteV2BlockedServicesBlockedSevice[] | cdktf.IResolvable;
}

export function securemeshSiteV2BlockedServicesToTerraform(struct?: SecuremeshSiteV2BlockedServicesOutputReference | SecuremeshSiteV2BlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_sevice: cdktf.listMapper(securemeshSiteV2BlockedServicesBlockedSeviceToTerraform, true)(struct!.blockedSevice),
  }
}


export function securemeshSiteV2BlockedServicesToHclTerraform(struct?: SecuremeshSiteV2BlockedServicesOutputReference | SecuremeshSiteV2BlockedServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_sevice: {
      value: cdktf.listMapperHcl(securemeshSiteV2BlockedServicesBlockedSeviceToHclTerraform, true)(struct!.blockedSevice),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2BlockedServicesBlockedSeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2BlockedServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2BlockedServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedSevice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedSevice = this._blockedSevice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2BlockedServices | undefined) {
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
  private _blockedSevice = new SecuremeshSiteV2BlockedServicesBlockedSeviceList(this, "blocked_sevice", false);
  public get blockedSevice() {
    return this._blockedSevice;
  }
  public putBlockedSevice(value: SecuremeshSiteV2BlockedServicesBlockedSevice[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#decryption_provider SecuremeshSiteV2#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#location SecuremeshSiteV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#store_provider SecuremeshSiteV2#store_provider}
  */
  readonly storeProvider?: string;
}

export function securemeshSiteV2CustomProxyPasswordBlindfoldSecretInfoToTerraform(struct?: SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfoOutputReference | SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo): any {
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


export function securemeshSiteV2CustomProxyPasswordBlindfoldSecretInfoToHclTerraform(struct?: SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfoOutputReference | SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo): any {
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

export class SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo | undefined) {
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
export interface SecuremeshSiteV2CustomProxyPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#provider SecuremeshSiteV2#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#url SecuremeshSiteV2#url}
  */
  readonly url: string;
}

export function securemeshSiteV2CustomProxyPasswordClearSecretInfoToTerraform(struct?: SecuremeshSiteV2CustomProxyPasswordClearSecretInfoOutputReference | SecuremeshSiteV2CustomProxyPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function securemeshSiteV2CustomProxyPasswordClearSecretInfoToHclTerraform(struct?: SecuremeshSiteV2CustomProxyPasswordClearSecretInfoOutputReference | SecuremeshSiteV2CustomProxyPasswordClearSecretInfo): any {
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

export class SecuremeshSiteV2CustomProxyPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2CustomProxyPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: SecuremeshSiteV2CustomProxyPasswordClearSecretInfo | undefined) {
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
export interface SecuremeshSiteV2CustomProxyPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#blindfold_secret_info SecuremeshSiteV2#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#clear_secret_info SecuremeshSiteV2#clear_secret_info}
  */
  readonly clearSecretInfo?: SecuremeshSiteV2CustomProxyPasswordClearSecretInfo;
}

export function securemeshSiteV2CustomProxyPasswordToTerraform(struct?: SecuremeshSiteV2CustomProxyPasswordOutputReference | SecuremeshSiteV2CustomProxyPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: securemeshSiteV2CustomProxyPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: securemeshSiteV2CustomProxyPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function securemeshSiteV2CustomProxyPasswordToHclTerraform(struct?: SecuremeshSiteV2CustomProxyPasswordOutputReference | SecuremeshSiteV2CustomProxyPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: securemeshSiteV2CustomProxyPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: securemeshSiteV2CustomProxyPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2CustomProxyPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2CustomProxyPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2CustomProxyPassword | undefined {
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

  public set internalValue(value: SecuremeshSiteV2CustomProxyPassword | undefined) {
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
  private _blindfoldSecretInfo = new SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: SecuremeshSiteV2CustomProxyPasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new SecuremeshSiteV2CustomProxyPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: SecuremeshSiteV2CustomProxyPasswordClearSecretInfo) {
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
export interface SecuremeshSiteV2CustomProxy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#disable_re_tunnel SecuremeshSiteV2#disable_re_tunnel}
  */
  readonly disableReTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#enable_re_tunnel SecuremeshSiteV2#enable_re_tunnel}
  */
  readonly enableReTunnel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#proxy_ip_address SecuremeshSiteV2#proxy_ip_address}
  */
  readonly proxyIpAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#proxy_port SecuremeshSiteV2#proxy_port}
  */
  readonly proxyPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#username SecuremeshSiteV2#username}
  */
  readonly username?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#password SecuremeshSiteV2#password}
  */
  readonly password?: SecuremeshSiteV2CustomProxyPassword;
}

export function securemeshSiteV2CustomProxyToTerraform(struct?: SecuremeshSiteV2CustomProxyOutputReference | SecuremeshSiteV2CustomProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_re_tunnel: cdktf.booleanToTerraform(struct!.disableReTunnel),
    enable_re_tunnel: cdktf.booleanToTerraform(struct!.enableReTunnel),
    proxy_ip_address: cdktf.stringToTerraform(struct!.proxyIpAddress),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    username: cdktf.stringToTerraform(struct!.username),
    password: securemeshSiteV2CustomProxyPasswordToTerraform(struct!.password),
  }
}


export function securemeshSiteV2CustomProxyToHclTerraform(struct?: SecuremeshSiteV2CustomProxyOutputReference | SecuremeshSiteV2CustomProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_re_tunnel: {
      value: cdktf.booleanToHclTerraform(struct!.disableReTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_re_tunnel: {
      value: cdktf.booleanToHclTerraform(struct!.enableReTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.proxyIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: securemeshSiteV2CustomProxyPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2CustomProxyPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2CustomProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2CustomProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableReTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReTunnel = this._disableReTunnel;
    }
    if (this._enableReTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReTunnel = this._enableReTunnel;
    }
    if (this._proxyIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyIpAddress = this._proxyIpAddress;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
    }
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

  public set internalValue(value: SecuremeshSiteV2CustomProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableReTunnel = undefined;
      this._enableReTunnel = undefined;
      this._proxyIpAddress = undefined;
      this._proxyPort = undefined;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableReTunnel = value.disableReTunnel;
      this._enableReTunnel = value.enableReTunnel;
      this._proxyIpAddress = value.proxyIpAddress;
      this._proxyPort = value.proxyPort;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // disable_re_tunnel - computed: false, optional: true, required: false
  private _disableReTunnel?: boolean | cdktf.IResolvable; 
  public get disableReTunnel() {
    return this.getBooleanAttribute('disable_re_tunnel');
  }
  public set disableReTunnel(value: boolean | cdktf.IResolvable) {
    this._disableReTunnel = value;
  }
  public resetDisableReTunnel() {
    this._disableReTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReTunnelInput() {
    return this._disableReTunnel;
  }

  // enable_re_tunnel - computed: false, optional: true, required: false
  private _enableReTunnel?: boolean | cdktf.IResolvable; 
  public get enableReTunnel() {
    return this.getBooleanAttribute('enable_re_tunnel');
  }
  public set enableReTunnel(value: boolean | cdktf.IResolvable) {
    this._enableReTunnel = value;
  }
  public resetEnableReTunnel() {
    this._enableReTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReTunnelInput() {
    return this._enableReTunnel;
  }

  // proxy_ip_address - computed: false, optional: false, required: true
  private _proxyIpAddress?: string; 
  public get proxyIpAddress() {
    return this.getStringAttribute('proxy_ip_address');
  }
  public set proxyIpAddress(value: string) {
    this._proxyIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIpAddressInput() {
    return this._proxyIpAddress;
  }

  // proxy_port - computed: false, optional: false, required: true
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: true, required: false
  private _password = new SecuremeshSiteV2CustomProxyPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: SecuremeshSiteV2CustomProxyPassword) {
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
export interface SecuremeshSiteV2CustomProxyBypass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#proxy_bypass SecuremeshSiteV2#proxy_bypass}
  */
  readonly proxyBypass?: string[];
}

export function securemeshSiteV2CustomProxyBypassToTerraform(struct?: SecuremeshSiteV2CustomProxyBypassOutputReference | SecuremeshSiteV2CustomProxyBypass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_bypass: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyBypass),
  }
}


export function securemeshSiteV2CustomProxyBypassToHclTerraform(struct?: SecuremeshSiteV2CustomProxyBypassOutputReference | SecuremeshSiteV2CustomProxyBypass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_bypass: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyBypass),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2CustomProxyBypassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2CustomProxyBypass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBypass = this._proxyBypass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2CustomProxyBypass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyBypass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyBypass = value.proxyBypass;
    }
  }

  // proxy_bypass - computed: false, optional: true, required: false
  private _proxyBypass?: string[]; 
  public get proxyBypass() {
    return this.getListAttribute('proxy_bypass');
  }
  public set proxyBypass(value: string[]) {
    this._proxyBypass = value;
  }
  public resetProxyBypass() {
    this._proxyBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBypassInput() {
    return this._proxyBypass;
  }
}
export interface SecuremeshSiteV2DcClusterGroupSli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2DcClusterGroupSliToTerraform(struct?: SecuremeshSiteV2DcClusterGroupSliOutputReference | SecuremeshSiteV2DcClusterGroupSli): any {
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


export function securemeshSiteV2DcClusterGroupSliToHclTerraform(struct?: SecuremeshSiteV2DcClusterGroupSliOutputReference | SecuremeshSiteV2DcClusterGroupSli): any {
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

export class SecuremeshSiteV2DcClusterGroupSliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2DcClusterGroupSli | undefined {
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

  public set internalValue(value: SecuremeshSiteV2DcClusterGroupSli | undefined) {
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
export interface SecuremeshSiteV2DcClusterGroupSlo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2DcClusterGroupSloToTerraform(struct?: SecuremeshSiteV2DcClusterGroupSloOutputReference | SecuremeshSiteV2DcClusterGroupSlo): any {
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


export function securemeshSiteV2DcClusterGroupSloToHclTerraform(struct?: SecuremeshSiteV2DcClusterGroupSloOutputReference | SecuremeshSiteV2DcClusterGroupSlo): any {
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

export class SecuremeshSiteV2DcClusterGroupSloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2DcClusterGroupSlo | undefined {
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

  public set internalValue(value: SecuremeshSiteV2DcClusterGroupSlo | undefined) {
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
export interface SecuremeshSiteV2DnsNtpConfigCustomDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_servers SecuremeshSiteV2#dns_servers}
  */
  readonly dnsServers?: string[];
}

export function securemeshSiteV2DnsNtpConfigCustomDnsToTerraform(struct?: SecuremeshSiteV2DnsNtpConfigCustomDnsOutputReference | SecuremeshSiteV2DnsNtpConfigCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
  }
}


export function securemeshSiteV2DnsNtpConfigCustomDnsToHclTerraform(struct?: SecuremeshSiteV2DnsNtpConfigCustomDnsOutputReference | SecuremeshSiteV2DnsNtpConfigCustomDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2DnsNtpConfigCustomDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2DnsNtpConfigCustomDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2DnsNtpConfigCustomDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServers = value.dnsServers;
    }
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }
}
export interface SecuremeshSiteV2DnsNtpConfigCustomNtp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ntp_servers SecuremeshSiteV2#ntp_servers}
  */
  readonly ntpServers?: string[];
}

export function securemeshSiteV2DnsNtpConfigCustomNtpToTerraform(struct?: SecuremeshSiteV2DnsNtpConfigCustomNtpOutputReference | SecuremeshSiteV2DnsNtpConfigCustomNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
  }
}


export function securemeshSiteV2DnsNtpConfigCustomNtpToHclTerraform(struct?: SecuremeshSiteV2DnsNtpConfigCustomNtpOutputReference | SecuremeshSiteV2DnsNtpConfigCustomNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2DnsNtpConfigCustomNtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2DnsNtpConfigCustomNtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2DnsNtpConfigCustomNtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntpServers = value.ntpServers;
    }
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }
}
export interface SecuremeshSiteV2DnsNtpConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#f5_dns_default SecuremeshSiteV2#f5_dns_default}
  */
  readonly f5DnsDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#f5_ntp_default SecuremeshSiteV2#f5_ntp_default}
  */
  readonly f5NtpDefault?: boolean | cdktf.IResolvable;
  /**
  * custom_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#custom_dns SecuremeshSiteV2#custom_dns}
  */
  readonly customDns?: SecuremeshSiteV2DnsNtpConfigCustomDns;
  /**
  * custom_ntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#custom_ntp SecuremeshSiteV2#custom_ntp}
  */
  readonly customNtp?: SecuremeshSiteV2DnsNtpConfigCustomNtp;
}

export function securemeshSiteV2DnsNtpConfigToTerraform(struct?: SecuremeshSiteV2DnsNtpConfigOutputReference | SecuremeshSiteV2DnsNtpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_dns_default: cdktf.booleanToTerraform(struct!.f5DnsDefault),
    f5_ntp_default: cdktf.booleanToTerraform(struct!.f5NtpDefault),
    custom_dns: securemeshSiteV2DnsNtpConfigCustomDnsToTerraform(struct!.customDns),
    custom_ntp: securemeshSiteV2DnsNtpConfigCustomNtpToTerraform(struct!.customNtp),
  }
}


export function securemeshSiteV2DnsNtpConfigToHclTerraform(struct?: SecuremeshSiteV2DnsNtpConfigOutputReference | SecuremeshSiteV2DnsNtpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_dns_default: {
      value: cdktf.booleanToHclTerraform(struct!.f5DnsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    f5_ntp_default: {
      value: cdktf.booleanToHclTerraform(struct!.f5NtpDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_dns: {
      value: securemeshSiteV2DnsNtpConfigCustomDnsToHclTerraform(struct!.customDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2DnsNtpConfigCustomDnsList",
    },
    custom_ntp: {
      value: securemeshSiteV2DnsNtpConfigCustomNtpToHclTerraform(struct!.customNtp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2DnsNtpConfigCustomNtpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2DnsNtpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2DnsNtpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5DnsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5DnsDefault = this._f5DnsDefault;
    }
    if (this._f5NtpDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5NtpDefault = this._f5NtpDefault;
    }
    if (this._customDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDns = this._customDns?.internalValue;
    }
    if (this._customNtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNtp = this._customNtp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2DnsNtpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5DnsDefault = undefined;
      this._f5NtpDefault = undefined;
      this._customDns.internalValue = undefined;
      this._customNtp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5DnsDefault = value.f5DnsDefault;
      this._f5NtpDefault = value.f5NtpDefault;
      this._customDns.internalValue = value.customDns;
      this._customNtp.internalValue = value.customNtp;
    }
  }

  // f5_dns_default - computed: false, optional: true, required: false
  private _f5DnsDefault?: boolean | cdktf.IResolvable; 
  public get f5DnsDefault() {
    return this.getBooleanAttribute('f5_dns_default');
  }
  public set f5DnsDefault(value: boolean | cdktf.IResolvable) {
    this._f5DnsDefault = value;
  }
  public resetF5DnsDefault() {
    this._f5DnsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5DnsDefaultInput() {
    return this._f5DnsDefault;
  }

  // f5_ntp_default - computed: false, optional: true, required: false
  private _f5NtpDefault?: boolean | cdktf.IResolvable; 
  public get f5NtpDefault() {
    return this.getBooleanAttribute('f5_ntp_default');
  }
  public set f5NtpDefault(value: boolean | cdktf.IResolvable) {
    this._f5NtpDefault = value;
  }
  public resetF5NtpDefault() {
    this._f5NtpDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5NtpDefaultInput() {
    return this._f5NtpDefault;
  }

  // custom_dns - computed: false, optional: true, required: false
  private _customDns = new SecuremeshSiteV2DnsNtpConfigCustomDnsOutputReference(this, "custom_dns");
  public get customDns() {
    return this._customDns;
  }
  public putCustomDns(value: SecuremeshSiteV2DnsNtpConfigCustomDns) {
    this._customDns.internalValue = value;
  }
  public resetCustomDns() {
    this._customDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDnsInput() {
    return this._customDns.internalValue;
  }

  // custom_ntp - computed: false, optional: true, required: false
  private _customNtp = new SecuremeshSiteV2DnsNtpConfigCustomNtpOutputReference(this, "custom_ntp");
  public get customNtp() {
    return this._customNtp;
  }
  public putCustomNtp(value: SecuremeshSiteV2DnsNtpConfigCustomNtp) {
    this._customNtp.internalValue = value;
  }
  public resetCustomNtp() {
    this._customNtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNtpInput() {
    return this._customNtp.internalValue;
  }
}
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface): any {
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
    lacp: securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface): any {
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
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface | undefined) {
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
  private _lacp = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceLacp) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
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


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
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
  private _configuredList = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
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
  private _localDns = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
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
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
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
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
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

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
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
      value: cdktf.listMapperHcl(securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
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
  private _dhcpNetworks = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
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
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
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
  private _dnsConfig = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
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
  private _stateful = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig): any {
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
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
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
  private _router = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption): any {
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
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption | undefined) {
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
  private _segmentNetwork = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
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
  private _interfaceIpMap = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface): any {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface | undefined) {
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
export interface SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
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
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
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
  private _bondInterface = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListEthernetInterface) {
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
  private _ipv6AutoConfig = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListIpv6AutoConfig) {
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
  private _monitor = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListMonitor) {
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
  private _networkOption = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIp) {
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
  private _staticIpv6Address = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStaticIpv6Address) {
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
  private _vlanInterface = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListVlanInterface) {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2EquinixNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2EquinixNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2EquinixNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2EquinixNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedNodeListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteV2EquinixNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2EquinixNotManagedNodeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2EquinixNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
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
  private _interfaceList = new SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2EquinixNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
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

export class SecuremeshSiteV2EquinixNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2EquinixNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2EquinixNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2EquinixNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2EquinixNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2EquinixNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2EquinixNotManagedToTerraform(struct?: SecuremeshSiteV2EquinixNotManagedOutputReference | SecuremeshSiteV2EquinixNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2EquinixNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2EquinixNotManagedToHclTerraform(struct?: SecuremeshSiteV2EquinixNotManagedOutputReference | SecuremeshSiteV2EquinixNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2EquinixNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2EquinixNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2EquinixNotManaged | undefined) {
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
  private _nodeList = new SecuremeshSiteV2EquinixNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2EquinixNotManagedNodeListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteV2Equinix {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2EquinixNotManaged;
}

export function securemeshSiteV2EquinixToTerraform(struct?: SecuremeshSiteV2EquinixOutputReference | SecuremeshSiteV2Equinix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2EquinixNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2EquinixToHclTerraform(struct?: SecuremeshSiteV2EquinixOutputReference | SecuremeshSiteV2Equinix): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2EquinixNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2EquinixNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2EquinixOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Equinix | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Equinix | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2EquinixNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2EquinixNotManaged) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface): any {
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
    lacp: securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface): any {
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
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface | undefined) {
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
  private _lacp = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceLacp) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_list SecuremeshSiteV2#dns_list}
  */
  readonly dnsList: string[];
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsList),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_address SecuremeshSiteV2#configured_address}
  */
  readonly configuredAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#first_address SecuremeshSiteV2#first_address}
  */
  readonly firstAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#last_address SecuremeshSiteV2#last_address}
  */
  readonly lastAddress?: boolean | cdktf.IResolvable;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
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


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig {
  /**
  * configured_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#configured_list SecuremeshSiteV2#configured_list}
  */
  readonly configuredList?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct;
  /**
  * local_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#local_dns SecuremeshSiteV2#local_dns}
  */
  readonly localDns?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configured_list: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToTerraform(struct!.configuredList),
    local_dns: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToTerraform(struct!.localDns),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configured_list: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructToHclTerraform(struct!.configuredList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructList",
    },
    local_dns: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsToHclTerraform(struct!.localDns),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig | undefined) {
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
  private _configuredList = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStructOutputReference(this, "configured_list");
  public get configuredList() {
    return this._configuredList;
  }
  public putConfiguredList(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigConfiguredListStruct) {
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
  private _localDns = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDnsOutputReference(this, "local_dns");
  public get localDns() {
    return this._localDns;
  }
  public putLocalDns(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigLocalDns) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#end_ip SecuremeshSiteV2#end_ip}
  */
  readonly endIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#start_ip SecuremeshSiteV2#start_ip}
  */
  readonly startIp?: string;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_ip: cdktf.stringToTerraform(struct!.endIp),
    start_ip: cdktf.stringToTerraform(struct!.startIp),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.endIp = this._endIp;
    }
    if (this._startIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIp = this._startIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endIp = undefined;
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference {
    return new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pool_settings SecuremeshSiteV2#pool_settings}
  */
  readonly poolSettings: string;
  /**
  * pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#pools SecuremeshSiteV2#pools}
  */
  readonly pools?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    pool_settings: cdktf.stringToTerraform(struct!.poolSettings),
    pools: cdktf.listMapper(securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToTerraform, true)(struct!.pools),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable): any {
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
    pools: {
      value: cdktf.listMapperHcl(securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsToHclTerraform, true)(struct!.pools),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined {
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
    if (this._pools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pools = this._pools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkPrefix = undefined;
      this._poolSettings = undefined;
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

  // pools - computed: false, optional: true, required: false
  private _pools = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPoolsList(this, "pools", false);
  public get pools() {
    return this._pools;
  }
  public putPools(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksPools[] | cdktf.IResolvable) {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference {
    return new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: { [key: string]: string };
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_end SecuremeshSiteV2#automatic_from_end}
  */
  readonly automaticFromEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#automatic_from_start SecuremeshSiteV2#automatic_from_start}
  */
  readonly automaticFromStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#fixed_ip_map SecuremeshSiteV2#fixed_ip_map}
  */
  readonly fixedIpMap?: { [key: string]: string };
  /**
  * dhcp_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_networks SecuremeshSiteV2#dhcp_networks}
  */
  readonly dhcpNetworks: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable;
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_from_end: cdktf.booleanToTerraform(struct!.automaticFromEnd),
    automatic_from_start: cdktf.booleanToTerraform(struct!.automaticFromStart),
    fixed_ip_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fixedIpMap),
    dhcp_networks: cdktf.listMapper(securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToTerraform, true)(struct!.dhcpNetworks),
    interface_ip_map: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful): any {
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
      value: cdktf.listMapperHcl(securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksToHclTerraform, true)(struct!.dhcpNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList",
    },
    interface_ip_map: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful | undefined) {
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
  private _dhcpNetworks = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworksList(this, "dhcp_networks", false);
  public get dhcpNetworks() {
    return this._dhcpNetworks;
  }
  public putDhcpNetworks(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulDhcpNetworks[] | cdktf.IResolvable) {
    this._dhcpNetworks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpNetworksInput() {
    return this._dhcpNetworks.internalValue;
  }

  // interface_ip_map - computed: false, optional: true, required: false
  private _interfaceIpMap = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulInterfaceIpMap) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_prefix SecuremeshSiteV2#network_prefix}
  */
  readonly networkPrefix?: string;
  /**
  * dns_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dns_config SecuremeshSiteV2#dns_config}
  */
  readonly dnsConfig?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig;
  /**
  * stateful block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#stateful SecuremeshSiteV2#stateful}
  */
  readonly stateful?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_prefix: cdktf.stringToTerraform(struct!.networkPrefix),
    dns_config: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToTerraform(struct!.dnsConfig),
    stateful: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToTerraform(struct!.stateful),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter): any {
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
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigToHclTerraform(struct!.dnsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigList",
    },
    stateful: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulToHclTerraform(struct!.stateful),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter | undefined) {
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
  private _dnsConfig = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterDnsConfig) {
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
  private _stateful = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStatefulOutputReference(this, "stateful");
  public get stateful() {
    return this._stateful;
  }
  public putStateful(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterStateful) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#host SecuremeshSiteV2#host}
  */
  readonly host?: boolean | cdktf.IResolvable;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#router SecuremeshSiteV2#router}
  */
  readonly router?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.booleanToTerraform(struct!.host),
    router: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterToTerraform(struct!.router),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig): any {
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
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterToHclTerraform(struct!.router),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig | undefined) {
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
  private _router = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouterOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigRouter) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor {
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListMonitorToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListMonitorToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitorOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#namespace SecuremeshSiteV2#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#tenant SecuremeshSiteV2#tenant}
  */
  readonly tenant?: string;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_inside_network SecuremeshSiteV2#site_local_inside_network}
  */
  readonly siteLocalInsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_local_network SecuremeshSiteV2#site_local_network}
  */
  readonly siteLocalNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#segment_network SecuremeshSiteV2#segment_network}
  */
  readonly segmentNetwork?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_local_inside_network: cdktf.booleanToTerraform(struct!.siteLocalInsideNetwork),
    site_local_network: cdktf.booleanToTerraform(struct!.siteLocalNetwork),
    segment_network: securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToTerraform(struct!.segmentNetwork),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption): any {
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
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkToHclTerraform(struct!.segmentNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption | undefined) {
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
  private _segmentNetwork = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetworkOutputReference(this, "segment_network");
  public get segmentNetwork() {
    return this._segmentNetwork;
  }
  public putSegmentNetwork(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionSegmentNetwork) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#value SecuremeshSiteV2#value}
  */
  readonly value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToTerraform(struct!.value),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap): any {
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
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap | undefined) {
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
  private _value = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp {
  /**
  * interface_ip_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_ip_map SecuremeshSiteV2#interface_ip_map}
  */
  readonly interfaceIpMap?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_ip_map: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToTerraform(struct!.interfaceIpMap),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_ip_map: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapToHclTerraform(struct!.interfaceIpMap),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceIpMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpMap = this._interfaceIpMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp | undefined) {
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
  private _interfaceIpMap = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMapOutputReference(this, "interface_ip_map");
  public get interfaceIpMap() {
    return this._interfaceIpMap;
  }
  public putInterfaceIpMap(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpInterfaceIpMap) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#default_gw SecuremeshSiteV2#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ip_address SecuremeshSiteV2#ip_address}
  */
  readonly ipAddress: string;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_gw: cdktf.stringToTerraform(struct!.defaultGw),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultGw !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGw = this._defaultGw;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultGw = undefined;
      this._ipAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultGw = value.defaultGw;
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address {
  /**
  * cluster_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#cluster_static_ip SecuremeshSiteV2#cluster_static_ip}
  */
  readonly clusterStaticIp?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp;
  /**
  * node_static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_static_ip SecuremeshSiteV2#node_static_ip}
  */
  readonly nodeStaticIp?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_static_ip: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToTerraform(struct!.clusterStaticIp),
    node_static_ip: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToTerraform(struct!.nodeStaticIp),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_static_ip: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpToHclTerraform(struct!.clusterStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpList",
    },
    node_static_ip: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpToHclTerraform(struct!.nodeStaticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterStaticIp = this._clusterStaticIp?.internalValue;
    }
    if (this._nodeStaticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStaticIp = this._nodeStaticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterStaticIp.internalValue = undefined;
      this._nodeStaticIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterStaticIp.internalValue = value.clusterStaticIp;
      this._nodeStaticIp.internalValue = value.nodeStaticIp;
    }
  }

  // cluster_static_ip - computed: false, optional: true, required: false
  private _clusterStaticIp = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIpOutputReference(this, "cluster_static_ip");
  public get clusterStaticIp() {
    return this._clusterStaticIp;
  }
  public putClusterStaticIp(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressClusterStaticIp) {
    this._clusterStaticIp.internalValue = value;
  }
  public resetClusterStaticIp() {
    this._clusterStaticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterStaticIpInput() {
    return this._clusterStaticIp.internalValue;
  }

  // node_static_ip - computed: false, optional: true, required: false
  private _nodeStaticIp = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIpOutputReference(this, "node_static_ip");
  public get nodeStaticIp() {
    return this._nodeStaticIp;
  }
  public putNodeStaticIp(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressNodeStaticIp) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_id SecuremeshSiteV2#vlan_id}
  */
  readonly vlanId?: number;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceOutputReference | SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface): any {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface | undefined) {
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
export interface SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#description SecuremeshSiteV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#dhcp_client SecuremeshSiteV2#dhcp_client}
  */
  readonly dhcpClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#labels SecuremeshSiteV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor_disabled SecuremeshSiteV2#monitor_disabled}
  */
  readonly monitorDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mtu SecuremeshSiteV2#mtu}
  */
  readonly mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv4_address SecuremeshSiteV2#no_ipv4_address}
  */
  readonly noIpv4Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#no_ipv6_address SecuremeshSiteV2#no_ipv6_address}
  */
  readonly noIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#priority SecuremeshSiteV2#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_disabled SecuremeshSiteV2#site_to_site_connectivity_interface_disabled}
  */
  readonly siteToSiteConnectivityInterfaceDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#site_to_site_connectivity_interface_enabled SecuremeshSiteV2#site_to_site_connectivity_interface_enabled}
  */
  readonly siteToSiteConnectivityInterfaceEnabled?: boolean | cdktf.IResolvable;
  /**
  * bond_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#bond_interface SecuremeshSiteV2#bond_interface}
  */
  readonly bondInterface?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface;
  /**
  * ethernet_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ethernet_interface SecuremeshSiteV2#ethernet_interface}
  */
  readonly ethernetInterface?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface;
  /**
  * ipv6_auto_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#ipv6_auto_config SecuremeshSiteV2#ipv6_auto_config}
  */
  readonly ipv6AutoConfig?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#monitor SecuremeshSiteV2#monitor}
  */
  readonly monitor?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor;
  /**
  * network_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#network_option SecuremeshSiteV2#network_option}
  */
  readonly networkOption: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption;
  /**
  * static_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ip SecuremeshSiteV2#static_ip}
  */
  readonly staticIp?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp;
  /**
  * static_ipv6_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#static_ipv6_address SecuremeshSiteV2#static_ipv6_address}
  */
  readonly staticIpv6Address?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address;
  /**
  * vlan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#vlan_interface SecuremeshSiteV2#vlan_interface}
  */
  readonly vlanInterface?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface;
}

export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStructToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_client: cdktf.booleanToTerraform(struct!.dhcpClient),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    monitor_disabled: cdktf.booleanToTerraform(struct!.monitorDisabled),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    no_ipv4_address: cdktf.booleanToTerraform(struct!.noIpv4Address),
    no_ipv6_address: cdktf.booleanToTerraform(struct!.noIpv6Address),
    priority: cdktf.numberToTerraform(struct!.priority),
    site_to_site_connectivity_interface_disabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceDisabled),
    site_to_site_connectivity_interface_enabled: cdktf.booleanToTerraform(struct!.siteToSiteConnectivityInterfaceEnabled),
    bond_interface: securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct!.bondInterface),
    ethernet_interface: securemeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct!.ethernetInterface),
    ipv6_auto_config: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigToTerraform(struct!.ipv6AutoConfig),
    monitor: securemeshSiteV2GcpNotManagedNodeListInterfaceListMonitorToTerraform(struct!.monitor),
    network_option: securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionToTerraform(struct!.networkOption),
    static_ip: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpToTerraform(struct!.staticIp),
    static_ipv6_address: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressToTerraform(struct!.staticIpv6Address),
    vlan_interface: securemeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceToTerraform(struct!.vlanInterface),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListInterfaceListStructToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct | cdktf.IResolvable): any {
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
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct!.bondInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceList",
    },
    ethernet_interface: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct!.ethernetInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceList",
    },
    ipv6_auto_config: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigToHclTerraform(struct!.ipv6AutoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigList",
    },
    monitor: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListMonitorToHclTerraform(struct!.monitor),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitorList",
    },
    network_option: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionToHclTerraform(struct!.networkOption),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionList",
    },
    static_ip: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpList",
    },
    static_ipv6_address: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressToHclTerraform(struct!.staticIpv6Address),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressList",
    },
    vlan_interface: {
      value: securemeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceToHclTerraform(struct!.vlanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dhcpClient = undefined;
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
  private _bondInterface = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterfaceOutputReference(this, "bond_interface");
  public get bondInterface() {
    return this._bondInterface;
  }
  public putBondInterface(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListBondInterface) {
    this._bondInterface.internalValue = value;
  }
  public resetBondInterface() {
    this._bondInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bondInterfaceInput() {
    return this._bondInterface.internalValue;
  }

  // ethernet_interface - computed: false, optional: true, required: false
  private _ethernetInterface = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterfaceOutputReference(this, "ethernet_interface");
  public get ethernetInterface() {
    return this._ethernetInterface;
  }
  public putEthernetInterface(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListEthernetInterface) {
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
  private _ipv6AutoConfig = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfigOutputReference(this, "ipv6_auto_config");
  public get ipv6AutoConfig() {
    return this._ipv6AutoConfig;
  }
  public putIpv6AutoConfig(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListIpv6AutoConfig) {
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
  private _monitor = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListMonitor) {
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
  private _networkOption = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOptionOutputReference(this, "network_option");
  public get networkOption() {
    return this._networkOption;
  }
  public putNetworkOption(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListNetworkOption) {
    this._networkOption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOptionInput() {
    return this._networkOption.internalValue;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIp) {
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
  private _staticIpv6Address = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6AddressOutputReference(this, "static_ipv6_address");
  public get staticIpv6Address() {
    return this._staticIpv6Address;
  }
  public putStaticIpv6Address(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStaticIpv6Address) {
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
  private _vlanInterface = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterfaceOutputReference(this, "vlan_interface");
  public get vlanInterface() {
    return this._vlanInterface;
  }
  public putVlanInterface(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListVlanInterface) {
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

export class SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStructOutputReference {
    return new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2GcpNotManagedNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#hostname SecuremeshSiteV2#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#public_ip SecuremeshSiteV2#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#type SecuremeshSiteV2#type}
  */
  readonly type?: string;
  /**
  * interface_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#interface_list SecuremeshSiteV2#interface_list}
  */
  readonly interfaceList?: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2GcpNotManagedNodeListStructToTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    type: cdktf.stringToTerraform(struct!.type),
    interface_list: cdktf.listMapper(securemeshSiteV2GcpNotManagedNodeListInterfaceListStructToTerraform, true)(struct!.interfaceList),
  }
}


export function securemeshSiteV2GcpNotManagedNodeListStructToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedNodeListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securemeshSiteV2GcpNotManagedNodeListInterfaceListStructToHclTerraform, true)(struct!.interfaceList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecuremeshSiteV2GcpNotManagedNodeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecuremeshSiteV2GcpNotManagedNodeListStruct | cdktf.IResolvable | undefined) {
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
  private _interfaceList = new SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStructList(this, "interface_list", false);
  public get interfaceList() {
    return this._interfaceList;
  }
  public putInterfaceList(value: SecuremeshSiteV2GcpNotManagedNodeListInterfaceListStruct[] | cdktf.IResolvable) {
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

export class SecuremeshSiteV2GcpNotManagedNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SecuremeshSiteV2GcpNotManagedNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SecuremeshSiteV2GcpNotManagedNodeListStructOutputReference {
    return new SecuremeshSiteV2GcpNotManagedNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecuremeshSiteV2GcpNotManaged {
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#node_list SecuremeshSiteV2#node_list}
  */
  readonly nodeList?: SecuremeshSiteV2GcpNotManagedNodeListStruct[] | cdktf.IResolvable;
}

export function securemeshSiteV2GcpNotManagedToTerraform(struct?: SecuremeshSiteV2GcpNotManagedOutputReference | SecuremeshSiteV2GcpNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_list: cdktf.listMapper(securemeshSiteV2GcpNotManagedNodeListStructToTerraform, true)(struct!.nodeList),
  }
}


export function securemeshSiteV2GcpNotManagedToHclTerraform(struct?: SecuremeshSiteV2GcpNotManagedOutputReference | SecuremeshSiteV2GcpNotManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_list: {
      value: cdktf.listMapperHcl(securemeshSiteV2GcpNotManagedNodeListStructToHclTerraform, true)(struct!.nodeList),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedNodeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpNotManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2GcpNotManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2GcpNotManaged | undefined) {
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
  private _nodeList = new SecuremeshSiteV2GcpNotManagedNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SecuremeshSiteV2GcpNotManagedNodeListStruct[] | cdktf.IResolvable) {
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
export interface SecuremeshSiteV2Gcp {
  /**
  * not_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#not_managed SecuremeshSiteV2#not_managed}
  */
  readonly notManaged?: SecuremeshSiteV2GcpNotManaged;
}

export function securemeshSiteV2GcpToTerraform(struct?: SecuremeshSiteV2GcpOutputReference | SecuremeshSiteV2Gcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_managed: securemeshSiteV2GcpNotManagedToTerraform(struct!.notManaged),
  }
}


export function securemeshSiteV2GcpToHclTerraform(struct?: SecuremeshSiteV2GcpOutputReference | SecuremeshSiteV2Gcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_managed: {
      value: securemeshSiteV2GcpNotManagedToHclTerraform(struct!.notManaged),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2GcpNotManagedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2GcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2Gcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notManaged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notManaged = this._notManaged?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2Gcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notManaged.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notManaged.internalValue = value.notManaged;
    }
  }

  // not_managed - computed: false, optional: true, required: false
  private _notManaged = new SecuremeshSiteV2GcpNotManagedOutputReference(this, "not_managed");
  public get notManaged() {
    return this._notManaged;
  }
  public putNotManaged(value: SecuremeshSiteV2GcpNotManaged) {
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
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#rate SecuremeshSiteV2#rate}
  */
  readonly rate?: number;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate: cdktf.numberToTerraform(struct!.rate),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp): any {
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

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rate !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate = this._rate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp | undefined) {
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
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#active_backup SecuremeshSiteV2#active_backup}
  */
  readonly activeBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#devices SecuremeshSiteV2#devices}
  */
  readonly devices: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_polling_interval SecuremeshSiteV2#link_polling_interval}
  */
  readonly linkPollingInterval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#link_up_delay SecuremeshSiteV2#link_up_delay}
  */
  readonly linkUpDelay: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#name SecuremeshSiteV2#name}
  */
  readonly name: string;
  /**
  * lacp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#lacp SecuremeshSiteV2#lacp}
  */
  readonly lacp?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface): any {
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
    lacp: securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpToTerraform(struct!.lacp),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface): any {
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
      value: securemeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpToHclTerraform(struct!.lacp),
      isBlock: true,
      type: "list",
      storageClassType: "SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterface | undefined) {
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
  private _lacp = new SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacpOutputReference(this, "lacp");
  public get lacp() {
    return this._lacp;
  }
  public putLacp(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListBondInterfaceLacp) {
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
export interface SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#device SecuremeshSiteV2#device}
  */
  readonly device: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/securemesh_site_v2#mac SecuremeshSiteV2#mac}
  */
  readonly mac?: string;
}

export function securemeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceToTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function securemeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceToHclTerraform(struct?: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceOutputReference | SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface): any {
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

export class SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface | undefined {
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

  public set internalValue(value: SecuremeshSiteV2KvmNotManagedNodeListInterfaceListEthernetInterface | undefined) {
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
