// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#id FirewallSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IKE authentication type to use for IPsec (SecureConnect and Machine Authentication). Allowed values are "psk" and "certificate"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#ike_authentication_type FirewallSettings#ike_authentication_type}
  */
  readonly ikeAuthenticationType?: string;
  /**
  * blocked_connection_reject_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#blocked_connection_reject_scopes FirewallSettings#blocked_connection_reject_scopes}
  */
  readonly blockedConnectionRejectScopes?: FirewallSettingsBlockedConnectionRejectScopes[] | cdktf.IResolvable;
  /**
  * containers_inherit_host_policy_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#containers_inherit_host_policy_scopes FirewallSettings#containers_inherit_host_policy_scopes}
  */
  readonly containersInheritHostPolicyScopes?: FirewallSettingsContainersInheritHostPolicyScopes[] | cdktf.IResolvable;
  /**
  * firewall_coexistence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#firewall_coexistence FirewallSettings#firewall_coexistence}
  */
  readonly firewallCoexistence?: FirewallSettingsFirewallCoexistence[] | cdktf.IResolvable;
  /**
  * loopback_interfaces_in_policy_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#loopback_interfaces_in_policy_scopes FirewallSettings#loopback_interfaces_in_policy_scopes}
  */
  readonly loopbackInterfacesInPolicyScopes?: FirewallSettingsLoopbackInterfacesInPolicyScopes[] | cdktf.IResolvable;
  /**
  * static_policy_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#static_policy_scopes FirewallSettings#static_policy_scopes}
  */
  readonly staticPolicyScopes?: FirewallSettingsStaticPolicyScopes[] | cdktf.IResolvable;
}
export interface FirewallSettingsBlockedConnectionRejectScopesLabel {
  /**
  * URI of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsBlockedConnectionRejectScopesLabelToTerraform(struct?: FirewallSettingsBlockedConnectionRejectScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsBlockedConnectionRejectScopesLabelToHclTerraform(struct?: FirewallSettingsBlockedConnectionRejectScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsBlockedConnectionRejectScopesLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsBlockedConnectionRejectScopesLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsBlockedConnectionRejectScopesLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsBlockedConnectionRejectScopesLabelList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsBlockedConnectionRejectScopesLabel[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsBlockedConnectionRejectScopesLabelOutputReference {
    return new FirewallSettingsBlockedConnectionRejectScopesLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsBlockedConnectionRejectScopesLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsBlockedConnectionRejectScopesLabelGroupToTerraform(struct?: FirewallSettingsBlockedConnectionRejectScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsBlockedConnectionRejectScopesLabelGroupToHclTerraform(struct?: FirewallSettingsBlockedConnectionRejectScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsBlockedConnectionRejectScopesLabelGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsBlockedConnectionRejectScopesLabelGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsBlockedConnectionRejectScopesLabelGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsBlockedConnectionRejectScopesLabelGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsBlockedConnectionRejectScopesLabelGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsBlockedConnectionRejectScopesLabelGroupOutputReference {
    return new FirewallSettingsBlockedConnectionRejectScopesLabelGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsBlockedConnectionRejectScopes {
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label FirewallSettings#label}
  */
  readonly label?: FirewallSettingsBlockedConnectionRejectScopesLabel[] | cdktf.IResolvable;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label_group FirewallSettings#label_group}
  */
  readonly labelGroup?: FirewallSettingsBlockedConnectionRejectScopesLabelGroup[] | cdktf.IResolvable;
}

export function firewallSettingsBlockedConnectionRejectScopesToTerraform(struct?: FirewallSettingsBlockedConnectionRejectScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.listMapper(firewallSettingsBlockedConnectionRejectScopesLabelToTerraform, true)(struct!.label),
    label_group: cdktf.listMapper(firewallSettingsBlockedConnectionRejectScopesLabelGroupToTerraform, true)(struct!.labelGroup),
  }
}


export function firewallSettingsBlockedConnectionRejectScopesToHclTerraform(struct?: FirewallSettingsBlockedConnectionRejectScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.listMapperHcl(firewallSettingsBlockedConnectionRejectScopesLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsBlockedConnectionRejectScopesLabelList",
    },
    label_group: {
      value: cdktf.listMapperHcl(firewallSettingsBlockedConnectionRejectScopesLabelGroupToHclTerraform, true)(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsBlockedConnectionRejectScopesLabelGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsBlockedConnectionRejectScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsBlockedConnectionRejectScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsBlockedConnectionRejectScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label = new FirewallSettingsBlockedConnectionRejectScopesLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: FirewallSettingsBlockedConnectionRejectScopesLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new FirewallSettingsBlockedConnectionRejectScopesLabelGroupList(this, "label_group", true);
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: FirewallSettingsBlockedConnectionRejectScopesLabelGroup[] | cdktf.IResolvable) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }
}

export class FirewallSettingsBlockedConnectionRejectScopesList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsBlockedConnectionRejectScopes[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsBlockedConnectionRejectScopesOutputReference {
    return new FirewallSettingsBlockedConnectionRejectScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsContainersInheritHostPolicyScopesLabel {
  /**
  * URI of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsContainersInheritHostPolicyScopesLabelToTerraform(struct?: FirewallSettingsContainersInheritHostPolicyScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsContainersInheritHostPolicyScopesLabelToHclTerraform(struct?: FirewallSettingsContainersInheritHostPolicyScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsContainersInheritHostPolicyScopesLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsContainersInheritHostPolicyScopesLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsContainersInheritHostPolicyScopesLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsContainersInheritHostPolicyScopesLabelList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsContainersInheritHostPolicyScopesLabel[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsContainersInheritHostPolicyScopesLabelOutputReference {
    return new FirewallSettingsContainersInheritHostPolicyScopesLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsContainersInheritHostPolicyScopesLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsContainersInheritHostPolicyScopesLabelGroupToTerraform(struct?: FirewallSettingsContainersInheritHostPolicyScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsContainersInheritHostPolicyScopesLabelGroupToHclTerraform(struct?: FirewallSettingsContainersInheritHostPolicyScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsContainersInheritHostPolicyScopesLabelGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsContainersInheritHostPolicyScopesLabelGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsContainersInheritHostPolicyScopesLabelGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsContainersInheritHostPolicyScopesLabelGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsContainersInheritHostPolicyScopesLabelGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsContainersInheritHostPolicyScopesLabelGroupOutputReference {
    return new FirewallSettingsContainersInheritHostPolicyScopesLabelGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsContainersInheritHostPolicyScopes {
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label FirewallSettings#label}
  */
  readonly label?: FirewallSettingsContainersInheritHostPolicyScopesLabel[] | cdktf.IResolvable;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label_group FirewallSettings#label_group}
  */
  readonly labelGroup?: FirewallSettingsContainersInheritHostPolicyScopesLabelGroup[] | cdktf.IResolvable;
}

export function firewallSettingsContainersInheritHostPolicyScopesToTerraform(struct?: FirewallSettingsContainersInheritHostPolicyScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.listMapper(firewallSettingsContainersInheritHostPolicyScopesLabelToTerraform, true)(struct!.label),
    label_group: cdktf.listMapper(firewallSettingsContainersInheritHostPolicyScopesLabelGroupToTerraform, true)(struct!.labelGroup),
  }
}


export function firewallSettingsContainersInheritHostPolicyScopesToHclTerraform(struct?: FirewallSettingsContainersInheritHostPolicyScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.listMapperHcl(firewallSettingsContainersInheritHostPolicyScopesLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsContainersInheritHostPolicyScopesLabelList",
    },
    label_group: {
      value: cdktf.listMapperHcl(firewallSettingsContainersInheritHostPolicyScopesLabelGroupToHclTerraform, true)(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsContainersInheritHostPolicyScopesLabelGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsContainersInheritHostPolicyScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsContainersInheritHostPolicyScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsContainersInheritHostPolicyScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label = new FirewallSettingsContainersInheritHostPolicyScopesLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: FirewallSettingsContainersInheritHostPolicyScopesLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new FirewallSettingsContainersInheritHostPolicyScopesLabelGroupList(this, "label_group", true);
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: FirewallSettingsContainersInheritHostPolicyScopesLabelGroup[] | cdktf.IResolvable) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }
}

export class FirewallSettingsContainersInheritHostPolicyScopesList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsContainersInheritHostPolicyScopes[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsContainersInheritHostPolicyScopesOutputReference {
    return new FirewallSettingsContainersInheritHostPolicyScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsFirewallCoexistenceScope {
  /**
  * Href of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsFirewallCoexistenceScopeToTerraform(struct?: FirewallSettingsFirewallCoexistenceScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsFirewallCoexistenceScopeToHclTerraform(struct?: FirewallSettingsFirewallCoexistenceScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsFirewallCoexistenceScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsFirewallCoexistenceScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsFirewallCoexistenceScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsFirewallCoexistenceScopeList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsFirewallCoexistenceScope[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsFirewallCoexistenceScopeOutputReference {
    return new FirewallSettingsFirewallCoexistenceScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsFirewallCoexistence {
  /**
  * Whether Illumio is primary firewall or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#illumio_primary FirewallSettings#illumio_primary}
  */
  readonly illumioPrimary: boolean | cdktf.IResolvable;
  /**
  * Match criteria to select workload(s). Allowed values are "enforced" and "illuminated"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#workload_mode FirewallSettings#workload_mode}
  */
  readonly workloadMode?: string;
  /**
  * scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#scope FirewallSettings#scope}
  */
  readonly scope: FirewallSettingsFirewallCoexistenceScope[] | cdktf.IResolvable;
}

export function firewallSettingsFirewallCoexistenceToTerraform(struct?: FirewallSettingsFirewallCoexistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    illumio_primary: cdktf.booleanToTerraform(struct!.illumioPrimary),
    workload_mode: cdktf.stringToTerraform(struct!.workloadMode),
    scope: cdktf.listMapper(firewallSettingsFirewallCoexistenceScopeToTerraform, true)(struct!.scope),
  }
}


export function firewallSettingsFirewallCoexistenceToHclTerraform(struct?: FirewallSettingsFirewallCoexistence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    illumio_primary: {
      value: cdktf.booleanToHclTerraform(struct!.illumioPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    workload_mode: {
      value: cdktf.stringToHclTerraform(struct!.workloadMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(firewallSettingsFirewallCoexistenceScopeToHclTerraform, true)(struct!.scope),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallSettingsFirewallCoexistenceScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsFirewallCoexistenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsFirewallCoexistence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._illumioPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.illumioPrimary = this._illumioPrimary;
    }
    if (this._workloadMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMode = this._workloadMode;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsFirewallCoexistence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._illumioPrimary = undefined;
      this._workloadMode = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._illumioPrimary = value.illumioPrimary;
      this._workloadMode = value.workloadMode;
      this._scope.internalValue = value.scope;
    }
  }

  // illumio_primary - computed: false, optional: false, required: true
  private _illumioPrimary?: boolean | cdktf.IResolvable; 
  public get illumioPrimary() {
    return this.getBooleanAttribute('illumio_primary');
  }
  public set illumioPrimary(value: boolean | cdktf.IResolvable) {
    this._illumioPrimary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get illumioPrimaryInput() {
    return this._illumioPrimary;
  }

  // workload_mode - computed: false, optional: true, required: false
  private _workloadMode?: string; 
  public get workloadMode() {
    return this.getStringAttribute('workload_mode');
  }
  public set workloadMode(value: string) {
    this._workloadMode = value;
  }
  public resetWorkloadMode() {
    this._workloadMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadModeInput() {
    return this._workloadMode;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new FirewallSettingsFirewallCoexistenceScopeList(this, "scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: FirewallSettingsFirewallCoexistenceScope[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}

export class FirewallSettingsFirewallCoexistenceList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsFirewallCoexistence[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsFirewallCoexistenceOutputReference {
    return new FirewallSettingsFirewallCoexistenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsLoopbackInterfacesInPolicyScopesLabel {
  /**
  * URI of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsLoopbackInterfacesInPolicyScopesLabelToTerraform(struct?: FirewallSettingsLoopbackInterfacesInPolicyScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsLoopbackInterfacesInPolicyScopesLabelToHclTerraform(struct?: FirewallSettingsLoopbackInterfacesInPolicyScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsLoopbackInterfacesInPolicyScopesLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsLoopbackInterfacesInPolicyScopesLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsLoopbackInterfacesInPolicyScopesLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsLoopbackInterfacesInPolicyScopesLabelList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsLoopbackInterfacesInPolicyScopesLabel[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsLoopbackInterfacesInPolicyScopesLabelOutputReference {
    return new FirewallSettingsLoopbackInterfacesInPolicyScopesLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupToTerraform(struct?: FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupToHclTerraform(struct?: FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupOutputReference {
    return new FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsLoopbackInterfacesInPolicyScopes {
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label FirewallSettings#label}
  */
  readonly label?: FirewallSettingsLoopbackInterfacesInPolicyScopesLabel[] | cdktf.IResolvable;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label_group FirewallSettings#label_group}
  */
  readonly labelGroup?: FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup[] | cdktf.IResolvable;
}

export function firewallSettingsLoopbackInterfacesInPolicyScopesToTerraform(struct?: FirewallSettingsLoopbackInterfacesInPolicyScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.listMapper(firewallSettingsLoopbackInterfacesInPolicyScopesLabelToTerraform, true)(struct!.label),
    label_group: cdktf.listMapper(firewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupToTerraform, true)(struct!.labelGroup),
  }
}


export function firewallSettingsLoopbackInterfacesInPolicyScopesToHclTerraform(struct?: FirewallSettingsLoopbackInterfacesInPolicyScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.listMapperHcl(firewallSettingsLoopbackInterfacesInPolicyScopesLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsLoopbackInterfacesInPolicyScopesLabelList",
    },
    label_group: {
      value: cdktf.listMapperHcl(firewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupToHclTerraform, true)(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsLoopbackInterfacesInPolicyScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsLoopbackInterfacesInPolicyScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsLoopbackInterfacesInPolicyScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label = new FirewallSettingsLoopbackInterfacesInPolicyScopesLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: FirewallSettingsLoopbackInterfacesInPolicyScopesLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroupList(this, "label_group", true);
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: FirewallSettingsLoopbackInterfacesInPolicyScopesLabelGroup[] | cdktf.IResolvable) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }
}

export class FirewallSettingsLoopbackInterfacesInPolicyScopesList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsLoopbackInterfacesInPolicyScopes[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsLoopbackInterfacesInPolicyScopesOutputReference {
    return new FirewallSettingsLoopbackInterfacesInPolicyScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsStaticPolicyScopesLabel {
  /**
  * URI of Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsStaticPolicyScopesLabelToTerraform(struct?: FirewallSettingsStaticPolicyScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsStaticPolicyScopesLabelToHclTerraform(struct?: FirewallSettingsStaticPolicyScopesLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsStaticPolicyScopesLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsStaticPolicyScopesLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsStaticPolicyScopesLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsStaticPolicyScopesLabelList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsStaticPolicyScopesLabel[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsStaticPolicyScopesLabelOutputReference {
    return new FirewallSettingsStaticPolicyScopesLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsStaticPolicyScopesLabelGroup {
  /**
  * URI of Label Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#href FirewallSettings#href}
  */
  readonly href: string;
}

export function firewallSettingsStaticPolicyScopesLabelGroupToTerraform(struct?: FirewallSettingsStaticPolicyScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function firewallSettingsStaticPolicyScopesLabelGroupToHclTerraform(struct?: FirewallSettingsStaticPolicyScopesLabelGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsStaticPolicyScopesLabelGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsStaticPolicyScopesLabelGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsStaticPolicyScopesLabelGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}

export class FirewallSettingsStaticPolicyScopesLabelGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsStaticPolicyScopesLabelGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsStaticPolicyScopesLabelGroupOutputReference {
    return new FirewallSettingsStaticPolicyScopesLabelGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallSettingsStaticPolicyScopes {
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label FirewallSettings#label}
  */
  readonly label?: FirewallSettingsStaticPolicyScopesLabel[] | cdktf.IResolvable;
  /**
  * label_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#label_group FirewallSettings#label_group}
  */
  readonly labelGroup?: FirewallSettingsStaticPolicyScopesLabelGroup[] | cdktf.IResolvable;
}

export function firewallSettingsStaticPolicyScopesToTerraform(struct?: FirewallSettingsStaticPolicyScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.listMapper(firewallSettingsStaticPolicyScopesLabelToTerraform, true)(struct!.label),
    label_group: cdktf.listMapper(firewallSettingsStaticPolicyScopesLabelGroupToTerraform, true)(struct!.labelGroup),
  }
}


export function firewallSettingsStaticPolicyScopesToHclTerraform(struct?: FirewallSettingsStaticPolicyScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.listMapperHcl(firewallSettingsStaticPolicyScopesLabelToHclTerraform, true)(struct!.label),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsStaticPolicyScopesLabelList",
    },
    label_group: {
      value: cdktf.listMapperHcl(firewallSettingsStaticPolicyScopesLabelGroupToHclTerraform, true)(struct!.labelGroup),
      isBlock: true,
      type: "set",
      storageClassType: "FirewallSettingsStaticPolicyScopesLabelGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsStaticPolicyScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallSettingsStaticPolicyScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label?.internalValue;
    }
    if (this._labelGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelGroup = this._labelGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsStaticPolicyScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label.internalValue = undefined;
      this._labelGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label.internalValue = value.label;
      this._labelGroup.internalValue = value.labelGroup;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label = new FirewallSettingsStaticPolicyScopesLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: FirewallSettingsStaticPolicyScopesLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // label_group - computed: false, optional: true, required: false
  private _labelGroup = new FirewallSettingsStaticPolicyScopesLabelGroupList(this, "label_group", true);
  public get labelGroup() {
    return this._labelGroup;
  }
  public putLabelGroup(value: FirewallSettingsStaticPolicyScopesLabelGroup[] | cdktf.IResolvable) {
    this._labelGroup.internalValue = value;
  }
  public resetLabelGroup() {
    this._labelGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelGroupInput() {
    return this._labelGroup.internalValue;
  }
}

export class FirewallSettingsStaticPolicyScopesList extends cdktf.ComplexList {
  public internalValue? : FirewallSettingsStaticPolicyScopes[] | cdktf.IResolvable

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
  public get(index: number): FirewallSettingsStaticPolicyScopesOutputReference {
    return new FirewallSettingsStaticPolicyScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings illumio-core_firewall_settings}
*/
export class FirewallSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_firewall_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSettings to import
  * @param importFromId The id of the existing FirewallSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_firewall_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/firewall_settings illumio-core_firewall_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_firewall_settings',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ikeAuthenticationType = config.ikeAuthenticationType;
    this._blockedConnectionRejectScopes.internalValue = config.blockedConnectionRejectScopes;
    this._containersInheritHostPolicyScopes.internalValue = config.containersInheritHostPolicyScopes;
    this._firewallCoexistence.internalValue = config.firewallCoexistence;
    this._loopbackInterfacesInPolicyScopes.internalValue = config.loopbackInterfacesInPolicyScopes;
    this._staticPolicyScopes.internalValue = config.staticPolicyScopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // ike_authentication_type - computed: true, optional: true, required: false
  private _ikeAuthenticationType?: string; 
  public get ikeAuthenticationType() {
    return this.getStringAttribute('ike_authentication_type');
  }
  public set ikeAuthenticationType(value: string) {
    this._ikeAuthenticationType = value;
  }
  public resetIkeAuthenticationType() {
    this._ikeAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeAuthenticationTypeInput() {
    return this._ikeAuthenticationType;
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // blocked_connection_reject_scopes - computed: false, optional: true, required: false
  private _blockedConnectionRejectScopes = new FirewallSettingsBlockedConnectionRejectScopesList(this, "blocked_connection_reject_scopes", false);
  public get blockedConnectionRejectScopes() {
    return this._blockedConnectionRejectScopes;
  }
  public putBlockedConnectionRejectScopes(value: FirewallSettingsBlockedConnectionRejectScopes[] | cdktf.IResolvable) {
    this._blockedConnectionRejectScopes.internalValue = value;
  }
  public resetBlockedConnectionRejectScopes() {
    this._blockedConnectionRejectScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedConnectionRejectScopesInput() {
    return this._blockedConnectionRejectScopes.internalValue;
  }

  // containers_inherit_host_policy_scopes - computed: false, optional: true, required: false
  private _containersInheritHostPolicyScopes = new FirewallSettingsContainersInheritHostPolicyScopesList(this, "containers_inherit_host_policy_scopes", false);
  public get containersInheritHostPolicyScopes() {
    return this._containersInheritHostPolicyScopes;
  }
  public putContainersInheritHostPolicyScopes(value: FirewallSettingsContainersInheritHostPolicyScopes[] | cdktf.IResolvable) {
    this._containersInheritHostPolicyScopes.internalValue = value;
  }
  public resetContainersInheritHostPolicyScopes() {
    this._containersInheritHostPolicyScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInheritHostPolicyScopesInput() {
    return this._containersInheritHostPolicyScopes.internalValue;
  }

  // firewall_coexistence - computed: false, optional: true, required: false
  private _firewallCoexistence = new FirewallSettingsFirewallCoexistenceList(this, "firewall_coexistence", false);
  public get firewallCoexistence() {
    return this._firewallCoexistence;
  }
  public putFirewallCoexistence(value: FirewallSettingsFirewallCoexistence[] | cdktf.IResolvable) {
    this._firewallCoexistence.internalValue = value;
  }
  public resetFirewallCoexistence() {
    this._firewallCoexistence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallCoexistenceInput() {
    return this._firewallCoexistence.internalValue;
  }

  // loopback_interfaces_in_policy_scopes - computed: false, optional: true, required: false
  private _loopbackInterfacesInPolicyScopes = new FirewallSettingsLoopbackInterfacesInPolicyScopesList(this, "loopback_interfaces_in_policy_scopes", false);
  public get loopbackInterfacesInPolicyScopes() {
    return this._loopbackInterfacesInPolicyScopes;
  }
  public putLoopbackInterfacesInPolicyScopes(value: FirewallSettingsLoopbackInterfacesInPolicyScopes[] | cdktf.IResolvable) {
    this._loopbackInterfacesInPolicyScopes.internalValue = value;
  }
  public resetLoopbackInterfacesInPolicyScopes() {
    this._loopbackInterfacesInPolicyScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInterfacesInPolicyScopesInput() {
    return this._loopbackInterfacesInPolicyScopes.internalValue;
  }

  // static_policy_scopes - computed: false, optional: true, required: false
  private _staticPolicyScopes = new FirewallSettingsStaticPolicyScopesList(this, "static_policy_scopes", false);
  public get staticPolicyScopes() {
    return this._staticPolicyScopes;
  }
  public putStaticPolicyScopes(value: FirewallSettingsStaticPolicyScopes[] | cdktf.IResolvable) {
    this._staticPolicyScopes.internalValue = value;
  }
  public resetStaticPolicyScopes() {
    this._staticPolicyScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPolicyScopesInput() {
    return this._staticPolicyScopes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ike_authentication_type: cdktf.stringToTerraform(this._ikeAuthenticationType),
      blocked_connection_reject_scopes: cdktf.listMapper(firewallSettingsBlockedConnectionRejectScopesToTerraform, true)(this._blockedConnectionRejectScopes.internalValue),
      containers_inherit_host_policy_scopes: cdktf.listMapper(firewallSettingsContainersInheritHostPolicyScopesToTerraform, true)(this._containersInheritHostPolicyScopes.internalValue),
      firewall_coexistence: cdktf.listMapper(firewallSettingsFirewallCoexistenceToTerraform, true)(this._firewallCoexistence.internalValue),
      loopback_interfaces_in_policy_scopes: cdktf.listMapper(firewallSettingsLoopbackInterfacesInPolicyScopesToTerraform, true)(this._loopbackInterfacesInPolicyScopes.internalValue),
      static_policy_scopes: cdktf.listMapper(firewallSettingsStaticPolicyScopesToTerraform, true)(this._staticPolicyScopes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_authentication_type: {
        value: cdktf.stringToHclTerraform(this._ikeAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocked_connection_reject_scopes: {
        value: cdktf.listMapperHcl(firewallSettingsBlockedConnectionRejectScopesToHclTerraform, true)(this._blockedConnectionRejectScopes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSettingsBlockedConnectionRejectScopesList",
      },
      containers_inherit_host_policy_scopes: {
        value: cdktf.listMapperHcl(firewallSettingsContainersInheritHostPolicyScopesToHclTerraform, true)(this._containersInheritHostPolicyScopes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSettingsContainersInheritHostPolicyScopesList",
      },
      firewall_coexistence: {
        value: cdktf.listMapperHcl(firewallSettingsFirewallCoexistenceToHclTerraform, true)(this._firewallCoexistence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSettingsFirewallCoexistenceList",
      },
      loopback_interfaces_in_policy_scopes: {
        value: cdktf.listMapperHcl(firewallSettingsLoopbackInterfacesInPolicyScopesToHclTerraform, true)(this._loopbackInterfacesInPolicyScopes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSettingsLoopbackInterfacesInPolicyScopesList",
      },
      static_policy_scopes: {
        value: cdktf.listMapperHcl(firewallSettingsStaticPolicyScopesToHclTerraform, true)(this._staticPolicyScopes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallSettingsStaticPolicyScopesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
