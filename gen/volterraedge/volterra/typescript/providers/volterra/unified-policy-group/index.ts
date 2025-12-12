// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnifiedPolicyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#annotations UnifiedPolicyGroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#description UnifiedPolicyGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#disable UnifiedPolicyGroup#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#id UnifiedPolicyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#labels UnifiedPolicyGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace: string;
  /**
  * east_west_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#east_west_policy UnifiedPolicyGroup#east_west_policy}
  */
  readonly eastWestPolicy?: UnifiedPolicyGroupEastWestPolicy;
  /**
  * internet_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#internet_policy UnifiedPolicyGroup#internet_policy}
  */
  readonly internetPolicy?: UnifiedPolicyGroupInternetPolicy;
}
export interface UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#tenant UnifiedPolicyGroup#tenant}
  */
  readonly tenant?: string;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#enhanced_firewall_policies UnifiedPolicyGroup#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies | undefined) {
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
  private _enhancedFirewallPolicies = new UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#tenant UnifiedPolicyGroup#tenant}
  */
  readonly tenant?: string;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#forward_proxy_policies UnifiedPolicyGroup#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#tenant UnifiedPolicyGroup#tenant}
  */
  readonly tenant?: string;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable): any {
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


export function unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable): any {
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

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable | undefined) {
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

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesList extends cdktf.ComplexList {
  public internalValue? : UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies[] | cdktf.IResolvable

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
  public get(index: number): UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesOutputReference {
    return new UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies {
  /**
  * service_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#service_policies UnifiedPolicyGroup#service_policies}
  */
  readonly servicePolicies?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies[] | cdktf.IResolvable;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_policies: cdktf.listMapper(unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesToTerraform, true)(struct!.servicePolicies),
  }
}


export function unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_policies: {
      value: cdktf.listMapperHcl(unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesToHclTerraform, true)(struct!.servicePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePolicies = this._servicePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePolicies.internalValue = value.servicePolicies;
    }
  }

  // service_policies - computed: false, optional: true, required: false
  private _servicePolicies = new UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePoliciesList(this, "service_policies", false);
  public get servicePolicies() {
    return this._servicePolicies;
  }
  public putServicePolicies(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesServicePolicies[] | cdktf.IResolvable) {
    this._servicePolicies.internalValue = value;
  }
  public resetServicePolicies() {
    this._servicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoliciesInput() {
    return this._servicePolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupEastWestPolicyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#no_firewall_policy UnifiedPolicyGroup#no_firewall_policy}
  */
  readonly noFirewallPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#no_forward_proxy UnifiedPolicyGroup#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#active_enhanced_firewall_policies UnifiedPolicyGroup#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#active_forward_proxy_policies UnifiedPolicyGroup#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies;
  /**
  * active_service_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#active_service_policies UnifiedPolicyGroup#active_service_policies}
  */
  readonly activeServicePolicies?: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies;
}

export function unifiedPolicyGroupEastWestPolicyPoliciesToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_firewall_policy: cdktf.booleanToTerraform(struct!.noFirewallPolicy),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    active_enhanced_firewall_policies: unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_service_policies: unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesToTerraform(struct!.activeServicePolicies),
  }
}


export function unifiedPolicyGroupEastWestPolicyPoliciesToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyPoliciesOutputReference | UnifiedPolicyGroupEastWestPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_firewall_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noFirewallPolicy),
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
    active_enhanced_firewall_policies: {
      value: unifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: unifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesList",
    },
    active_service_policies: {
      value: unifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesToHclTerraform(struct!.activeServicePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupEastWestPolicyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupEastWestPolicyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noFirewallPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFirewallPolicy = this._noFirewallPolicy;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeServicePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeServicePolicies = this._activeServicePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noFirewallPolicy = undefined;
      this._noForwardProxy = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeServicePolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noFirewallPolicy = value.noFirewallPolicy;
      this._noForwardProxy = value.noForwardProxy;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeServicePolicies.internalValue = value.activeServicePolicies;
    }
  }

  // no_firewall_policy - computed: false, optional: true, required: false
  private _noFirewallPolicy?: boolean | cdktf.IResolvable; 
  public get noFirewallPolicy() {
    return this.getBooleanAttribute('no_firewall_policy');
  }
  public set noFirewallPolicy(value: boolean | cdktf.IResolvable) {
    this._noFirewallPolicy = value;
  }
  public resetNoFirewallPolicy() {
    this._noFirewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFirewallPolicyInput() {
    return this._noFirewallPolicy;
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

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveEnhancedFirewallPolicies) {
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
  private _activeForwardProxyPolicies = new UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_service_policies - computed: false, optional: true, required: false
  private _activeServicePolicies = new UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePoliciesOutputReference(this, "active_service_policies");
  public get activeServicePolicies() {
    return this._activeServicePolicies;
  }
  public putActiveServicePolicies(value: UnifiedPolicyGroupEastWestPolicyPoliciesActiveServicePolicies) {
    this._activeServicePolicies.internalValue = value;
  }
  public resetActiveServicePolicies() {
    this._activeServicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServicePoliciesInput() {
    return this._activeServicePolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupEastWestPolicy {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#policies UnifiedPolicyGroup#policies}
  */
  readonly policies?: UnifiedPolicyGroupEastWestPolicyPolicies;
}

export function unifiedPolicyGroupEastWestPolicyToTerraform(struct?: UnifiedPolicyGroupEastWestPolicyOutputReference | UnifiedPolicyGroupEastWestPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: unifiedPolicyGroupEastWestPolicyPoliciesToTerraform(struct!.policies),
  }
}


export function unifiedPolicyGroupEastWestPolicyToHclTerraform(struct?: UnifiedPolicyGroupEastWestPolicyOutputReference | UnifiedPolicyGroupEastWestPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: unifiedPolicyGroupEastWestPolicyPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupEastWestPolicyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupEastWestPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupEastWestPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupEastWestPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new UnifiedPolicyGroupEastWestPolicyPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: UnifiedPolicyGroupEastWestPolicyPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#tenant UnifiedPolicyGroup#tenant}
  */
  readonly tenant?: string;
}

export function unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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


export function unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable): any {
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

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies | cdktf.IResolvable | undefined) {
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

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList extends cdktf.ComplexList {
  public internalValue? : UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable

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
  public get(index: number): UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference {
    return new UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies {
  /**
  * enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#enhanced_firewall_policies UnifiedPolicyGroup#enhanced_firewall_policies}
  */
  readonly enhancedFirewallPolicies: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable;
}

export function unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enhanced_firewall_policies: cdktf.listMapper(unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToTerraform, true)(struct!.enhancedFirewallPolicies),
  }
}


export function unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enhanced_firewall_policies: {
      value: cdktf.listMapperHcl(unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesToHclTerraform, true)(struct!.enhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedFirewallPolicies = this._enhancedFirewallPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies | undefined) {
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
  private _enhancedFirewallPolicies = new UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPoliciesList(this, "enhanced_firewall_policies", false);
  public get enhancedFirewallPolicies() {
    return this._enhancedFirewallPolicies;
  }
  public putEnhancedFirewallPolicies(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesEnhancedFirewallPolicies[] | cdktf.IResolvable) {
    this._enhancedFirewallPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedFirewallPoliciesInput() {
    return this._enhancedFirewallPolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#tenant UnifiedPolicyGroup#tenant}
  */
  readonly tenant?: string;
}

export function unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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


export function unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable): any {
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

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies | cdktf.IResolvable | undefined) {
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

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesList extends cdktf.ComplexList {
  public internalValue? : UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable

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
  public get(index: number): UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference {
    return new UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies {
  /**
  * forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#forward_proxy_policies UnifiedPolicyGroup#forward_proxy_policies}
  */
  readonly forwardProxyPolicies: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable;
}

export function unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_proxy_policies: cdktf.listMapper(unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToTerraform, true)(struct!.forwardProxyPolicies),
  }
}


export function unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_proxy_policies: {
      value: cdktf.listMapperHcl(unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesToHclTerraform, true)(struct!.forwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyPolicies = this._forwardProxyPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies | undefined) {
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
  private _forwardProxyPolicies = new UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPoliciesList(this, "forward_proxy_policies", false);
  public get forwardProxyPolicies() {
    return this._forwardProxyPolicies;
  }
  public putForwardProxyPolicies(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesForwardProxyPolicies[] | cdktf.IResolvable) {
    this._forwardProxyPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyPoliciesInput() {
    return this._forwardProxyPolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#name UnifiedPolicyGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#namespace UnifiedPolicyGroup#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#tenant UnifiedPolicyGroup#tenant}
  */
  readonly tenant?: string;
}

export function unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable): any {
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


export function unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable): any {
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

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies | cdktf.IResolvable | undefined) {
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

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesList extends cdktf.ComplexList {
  public internalValue? : UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies[] | cdktf.IResolvable

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
  public get(index: number): UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesOutputReference {
    return new UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies {
  /**
  * service_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#service_policies UnifiedPolicyGroup#service_policies}
  */
  readonly servicePolicies?: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies[] | cdktf.IResolvable;
}

export function unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_policies: cdktf.listMapper(unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesToTerraform, true)(struct!.servicePolicies),
  }
}


export function unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_policies: {
      value: cdktf.listMapperHcl(unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesToHclTerraform, true)(struct!.servicePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servicePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePolicies = this._servicePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._servicePolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._servicePolicies.internalValue = value.servicePolicies;
    }
  }

  // service_policies - computed: false, optional: true, required: false
  private _servicePolicies = new UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePoliciesList(this, "service_policies", false);
  public get servicePolicies() {
    return this._servicePolicies;
  }
  public putServicePolicies(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesServicePolicies[] | cdktf.IResolvable) {
    this._servicePolicies.internalValue = value;
  }
  public resetServicePolicies() {
    this._servicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePoliciesInput() {
    return this._servicePolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupInternetPolicyPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#no_firewall_policy UnifiedPolicyGroup#no_firewall_policy}
  */
  readonly noFirewallPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#no_forward_proxy UnifiedPolicyGroup#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#active_enhanced_firewall_policies UnifiedPolicyGroup#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#active_forward_proxy_policies UnifiedPolicyGroup#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies;
  /**
  * active_service_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#active_service_policies UnifiedPolicyGroup#active_service_policies}
  */
  readonly activeServicePolicies?: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies;
}

export function unifiedPolicyGroupInternetPolicyPoliciesToTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_firewall_policy: cdktf.booleanToTerraform(struct!.noFirewallPolicy),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    active_enhanced_firewall_policies: unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_service_policies: unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesToTerraform(struct!.activeServicePolicies),
  }
}


export function unifiedPolicyGroupInternetPolicyPoliciesToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyPoliciesOutputReference | UnifiedPolicyGroupInternetPolicyPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_firewall_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noFirewallPolicy),
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
    active_enhanced_firewall_policies: {
      value: unifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: unifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesList",
    },
    active_service_policies: {
      value: unifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesToHclTerraform(struct!.activeServicePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupInternetPolicyPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupInternetPolicyPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noFirewallPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFirewallPolicy = this._noFirewallPolicy;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeServicePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeServicePolicies = this._activeServicePolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupInternetPolicyPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noFirewallPolicy = undefined;
      this._noForwardProxy = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeServicePolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noFirewallPolicy = value.noFirewallPolicy;
      this._noForwardProxy = value.noForwardProxy;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeServicePolicies.internalValue = value.activeServicePolicies;
    }
  }

  // no_firewall_policy - computed: false, optional: true, required: false
  private _noFirewallPolicy?: boolean | cdktf.IResolvable; 
  public get noFirewallPolicy() {
    return this.getBooleanAttribute('no_firewall_policy');
  }
  public set noFirewallPolicy(value: boolean | cdktf.IResolvable) {
    this._noFirewallPolicy = value;
  }
  public resetNoFirewallPolicy() {
    this._noFirewallPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFirewallPolicyInput() {
    return this._noFirewallPolicy;
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

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveEnhancedFirewallPolicies) {
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
  private _activeForwardProxyPolicies = new UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_service_policies - computed: false, optional: true, required: false
  private _activeServicePolicies = new UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePoliciesOutputReference(this, "active_service_policies");
  public get activeServicePolicies() {
    return this._activeServicePolicies;
  }
  public putActiveServicePolicies(value: UnifiedPolicyGroupInternetPolicyPoliciesActiveServicePolicies) {
    this._activeServicePolicies.internalValue = value;
  }
  public resetActiveServicePolicies() {
    this._activeServicePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServicePoliciesInput() {
    return this._activeServicePolicies.internalValue;
  }
}
export interface UnifiedPolicyGroupInternetPolicy {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#policies UnifiedPolicyGroup#policies}
  */
  readonly policies?: UnifiedPolicyGroupInternetPolicyPolicies;
}

export function unifiedPolicyGroupInternetPolicyToTerraform(struct?: UnifiedPolicyGroupInternetPolicyOutputReference | UnifiedPolicyGroupInternetPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: unifiedPolicyGroupInternetPolicyPoliciesToTerraform(struct!.policies),
  }
}


export function unifiedPolicyGroupInternetPolicyToHclTerraform(struct?: UnifiedPolicyGroupInternetPolicyOutputReference | UnifiedPolicyGroupInternetPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: unifiedPolicyGroupInternetPolicyPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedPolicyGroupInternetPolicyPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedPolicyGroupInternetPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedPolicyGroupInternetPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedPolicyGroupInternetPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new UnifiedPolicyGroupInternetPolicyPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: UnifiedPolicyGroupInternetPolicyPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group volterra_unified_policy_group}
*/
export class UnifiedPolicyGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_unified_policy_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnifiedPolicyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnifiedPolicyGroup to import
  * @param importFromId The id of the existing UnifiedPolicyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnifiedPolicyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_unified_policy_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/unified_policy_group volterra_unified_policy_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnifiedPolicyGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UnifiedPolicyGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_unified_policy_group',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
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
    this._eastWestPolicy.internalValue = config.eastWestPolicy;
    this._internetPolicy.internalValue = config.internetPolicy;
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

  // east_west_policy - computed: false, optional: true, required: false
  private _eastWestPolicy = new UnifiedPolicyGroupEastWestPolicyOutputReference(this, "east_west_policy");
  public get eastWestPolicy() {
    return this._eastWestPolicy;
  }
  public putEastWestPolicy(value: UnifiedPolicyGroupEastWestPolicy) {
    this._eastWestPolicy.internalValue = value;
  }
  public resetEastWestPolicy() {
    this._eastWestPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestPolicyInput() {
    return this._eastWestPolicy.internalValue;
  }

  // internet_policy - computed: false, optional: true, required: false
  private _internetPolicy = new UnifiedPolicyGroupInternetPolicyOutputReference(this, "internet_policy");
  public get internetPolicy() {
    return this._internetPolicy;
  }
  public putInternetPolicy(value: UnifiedPolicyGroupInternetPolicy) {
    this._internetPolicy.internalValue = value;
  }
  public resetInternetPolicy() {
    this._internetPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetPolicyInput() {
    return this._internetPolicy.internalValue;
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
      east_west_policy: unifiedPolicyGroupEastWestPolicyToTerraform(this._eastWestPolicy.internalValue),
      internet_policy: unifiedPolicyGroupInternetPolicyToTerraform(this._internetPolicy.internalValue),
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
      east_west_policy: {
        value: unifiedPolicyGroupEastWestPolicyToHclTerraform(this._eastWestPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UnifiedPolicyGroupEastWestPolicyList",
      },
      internet_policy: {
        value: unifiedPolicyGroupInternetPolicyToHclTerraform(this._internetPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UnifiedPolicyGroupInternetPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
