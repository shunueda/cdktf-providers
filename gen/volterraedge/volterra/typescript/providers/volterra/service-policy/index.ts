// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#algo ServicePolicy#algo}
  */
  readonly algo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#allow_all_requests ServicePolicy#allow_all_requests}
  */
  readonly allowAllRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#annotations ServicePolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#any_server ServicePolicy#any_server}
  */
  readonly anyServer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#deny_all_requests ServicePolicy#deny_all_requests}
  */
  readonly denyAllRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#description ServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#disable ServicePolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#id ServicePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#internally_generated ServicePolicy#internally_generated}
  */
  readonly internallyGenerated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#labels ServicePolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#server_name ServicePolicy#server_name}
  */
  readonly serverName?: string;
  /**
  * allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#allow_list ServicePolicy#allow_list}
  */
  readonly allowList?: ServicePolicyAllowListStruct[] | cdktf.IResolvable;
  /**
  * deny_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#deny_list ServicePolicy#deny_list}
  */
  readonly denyList?: ServicePolicyDenyListStruct[] | cdktf.IResolvable;
  /**
  * legacy_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#legacy_rule_list ServicePolicy#legacy_rule_list}
  */
  readonly legacyRuleList?: ServicePolicyLegacyRuleListStruct[] | cdktf.IResolvable;
  /**
  * port_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#port_matcher ServicePolicy#port_matcher}
  */
  readonly portMatcher?: ServicePolicyPortMatcher[] | cdktf.IResolvable;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#rule_list ServicePolicy#rule_list}
  */
  readonly ruleList?: ServicePolicyRuleListStruct[] | cdktf.IResolvable;
  /**
  * server_name_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#server_name_matcher ServicePolicy#server_name_matcher}
  */
  readonly serverNameMatcher?: ServicePolicyServerNameMatcher[] | cdktf.IResolvable;
  /**
  * server_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#server_selector ServicePolicy#server_selector}
  */
  readonly serverSelector?: ServicePolicyServerSelector[] | cdktf.IResolvable;
}
export interface ServicePolicyAllowListAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#as_numbers ServicePolicy#as_numbers}
  */
  readonly asNumbers: number[];
}

export function servicePolicyAllowListAsnListStructToTerraform(struct?: ServicePolicyAllowListAsnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function servicePolicyAllowListAsnListStructToHclTerraform(struct?: ServicePolicyAllowListAsnListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyAllowListAsnListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyAllowListAsnListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyAllowListAsnListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumbers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyAllowListAsnListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyAllowListAsnListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyAllowListAsnListStructOutputReference {
    return new ServicePolicyAllowListAsnListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyAllowListAsnSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyAllowListAsnSetToTerraform(struct?: ServicePolicyAllowListAsnSet | cdktf.IResolvable): any {
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


export function servicePolicyAllowListAsnSetToHclTerraform(struct?: ServicePolicyAllowListAsnSet | cdktf.IResolvable): any {
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

export class ServicePolicyAllowListAsnSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyAllowListAsnSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyAllowListAsnSet | cdktf.IResolvable | undefined) {
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

export class ServicePolicyAllowListAsnSetList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyAllowListAsnSet[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyAllowListAsnSetOutputReference {
    return new ServicePolicyAllowListAsnSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyAllowListIpPrefixSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyAllowListIpPrefixSetToTerraform(struct?: ServicePolicyAllowListIpPrefixSet | cdktf.IResolvable): any {
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


export function servicePolicyAllowListIpPrefixSetToHclTerraform(struct?: ServicePolicyAllowListIpPrefixSet | cdktf.IResolvable): any {
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

export class ServicePolicyAllowListIpPrefixSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyAllowListIpPrefixSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyAllowListIpPrefixSet | cdktf.IResolvable | undefined) {
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

export class ServicePolicyAllowListIpPrefixSetList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyAllowListIpPrefixSet[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyAllowListIpPrefixSetOutputReference {
    return new ServicePolicyAllowListIpPrefixSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyAllowListPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ipv6_prefixes ServicePolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefixes ServicePolicy#prefixes}
  */
  readonly prefixes: string[];
}

export function servicePolicyAllowListPrefixListStructToTerraform(struct?: ServicePolicyAllowListPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function servicePolicyAllowListPrefixListStructToHclTerraform(struct?: ServicePolicyAllowListPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyAllowListPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyAllowListPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyAllowListPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: false, required: true
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}

export class ServicePolicyAllowListPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyAllowListPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyAllowListPrefixListStructOutputReference {
    return new ServicePolicyAllowListPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#country_list ServicePolicy#country_list}
  */
  readonly countryList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#default_action_allow ServicePolicy#default_action_allow}
  */
  readonly defaultActionAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#default_action_deny ServicePolicy#default_action_deny}
  */
  readonly defaultActionDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#default_action_next_policy ServicePolicy#default_action_next_policy}
  */
  readonly defaultActionNextPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tls_fingerprint_classes ServicePolicy#tls_fingerprint_classes}
  */
  readonly tlsFingerprintClasses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tls_fingerprint_values ServicePolicy#tls_fingerprint_values}
  */
  readonly tlsFingerprintValues?: string[];
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_list ServicePolicy#asn_list}
  */
  readonly asnList?: ServicePolicyAllowListAsnListStruct[] | cdktf.IResolvable;
  /**
  * asn_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_set ServicePolicy#asn_set}
  */
  readonly asnSet?: ServicePolicyAllowListAsnSet[] | cdktf.IResolvable;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_prefix_set ServicePolicy#ip_prefix_set}
  */
  readonly ipPrefixSet?: ServicePolicyAllowListIpPrefixSet[] | cdktf.IResolvable;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefix_list ServicePolicy#prefix_list}
  */
  readonly prefixList?: ServicePolicyAllowListPrefixListStruct[] | cdktf.IResolvable;
}

export function servicePolicyAllowListStructToTerraform(struct?: ServicePolicyAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryList),
    default_action_allow: cdktf.booleanToTerraform(struct!.defaultActionAllow),
    default_action_deny: cdktf.booleanToTerraform(struct!.defaultActionDeny),
    default_action_next_policy: cdktf.booleanToTerraform(struct!.defaultActionNextPolicy),
    tls_fingerprint_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsFingerprintClasses),
    tls_fingerprint_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsFingerprintValues),
    asn_list: cdktf.listMapper(servicePolicyAllowListAsnListStructToTerraform, true)(struct!.asnList),
    asn_set: cdktf.listMapper(servicePolicyAllowListAsnSetToTerraform, true)(struct!.asnSet),
    ip_prefix_set: cdktf.listMapper(servicePolicyAllowListIpPrefixSetToTerraform, true)(struct!.ipPrefixSet),
    prefix_list: cdktf.listMapper(servicePolicyAllowListPrefixListStructToTerraform, true)(struct!.prefixList),
  }
}


export function servicePolicyAllowListStructToHclTerraform(struct?: ServicePolicyAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_action_allow: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_deny: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_next_policy: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionNextPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_fingerprint_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsFingerprintClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_fingerprint_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsFingerprintValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asn_list: {
      value: cdktf.listMapperHcl(servicePolicyAllowListAsnListStructToHclTerraform, true)(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyAllowListAsnListStructList",
    },
    asn_set: {
      value: cdktf.listMapperHcl(servicePolicyAllowListAsnSetToHclTerraform, true)(struct!.asnSet),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyAllowListAsnSetList",
    },
    ip_prefix_set: {
      value: cdktf.listMapperHcl(servicePolicyAllowListIpPrefixSetToHclTerraform, true)(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyAllowListIpPrefixSetList",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(servicePolicyAllowListPrefixListStructToHclTerraform, true)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyAllowListPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryList = this._countryList;
    }
    if (this._defaultActionAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionAllow = this._defaultActionAllow;
    }
    if (this._defaultActionDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionDeny = this._defaultActionDeny;
    }
    if (this._defaultActionNextPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionNextPolicy = this._defaultActionNextPolicy;
    }
    if (this._tlsFingerprintClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintClasses = this._tlsFingerprintClasses;
    }
    if (this._tlsFingerprintValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintValues = this._tlsFingerprintValues;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSet = this._asnSet?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryList = undefined;
      this._defaultActionAllow = undefined;
      this._defaultActionDeny = undefined;
      this._defaultActionNextPolicy = undefined;
      this._tlsFingerprintClasses = undefined;
      this._tlsFingerprintValues = undefined;
      this._asnList.internalValue = undefined;
      this._asnSet.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._prefixList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryList = value.countryList;
      this._defaultActionAllow = value.defaultActionAllow;
      this._defaultActionDeny = value.defaultActionDeny;
      this._defaultActionNextPolicy = value.defaultActionNextPolicy;
      this._tlsFingerprintClasses = value.tlsFingerprintClasses;
      this._tlsFingerprintValues = value.tlsFingerprintValues;
      this._asnList.internalValue = value.asnList;
      this._asnSet.internalValue = value.asnSet;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // country_list - computed: false, optional: true, required: false
  private _countryList?: string[]; 
  public get countryList() {
    return this.getListAttribute('country_list');
  }
  public set countryList(value: string[]) {
    this._countryList = value;
  }
  public resetCountryList() {
    this._countryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryListInput() {
    return this._countryList;
  }

  // default_action_allow - computed: false, optional: true, required: false
  private _defaultActionAllow?: boolean | cdktf.IResolvable; 
  public get defaultActionAllow() {
    return this.getBooleanAttribute('default_action_allow');
  }
  public set defaultActionAllow(value: boolean | cdktf.IResolvable) {
    this._defaultActionAllow = value;
  }
  public resetDefaultActionAllow() {
    this._defaultActionAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionAllowInput() {
    return this._defaultActionAllow;
  }

  // default_action_deny - computed: false, optional: true, required: false
  private _defaultActionDeny?: boolean | cdktf.IResolvable; 
  public get defaultActionDeny() {
    return this.getBooleanAttribute('default_action_deny');
  }
  public set defaultActionDeny(value: boolean | cdktf.IResolvable) {
    this._defaultActionDeny = value;
  }
  public resetDefaultActionDeny() {
    this._defaultActionDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionDenyInput() {
    return this._defaultActionDeny;
  }

  // default_action_next_policy - computed: false, optional: true, required: false
  private _defaultActionNextPolicy?: boolean | cdktf.IResolvable; 
  public get defaultActionNextPolicy() {
    return this.getBooleanAttribute('default_action_next_policy');
  }
  public set defaultActionNextPolicy(value: boolean | cdktf.IResolvable) {
    this._defaultActionNextPolicy = value;
  }
  public resetDefaultActionNextPolicy() {
    this._defaultActionNextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionNextPolicyInput() {
    return this._defaultActionNextPolicy;
  }

  // tls_fingerprint_classes - computed: false, optional: true, required: false
  private _tlsFingerprintClasses?: string[]; 
  public get tlsFingerprintClasses() {
    return this.getListAttribute('tls_fingerprint_classes');
  }
  public set tlsFingerprintClasses(value: string[]) {
    this._tlsFingerprintClasses = value;
  }
  public resetTlsFingerprintClasses() {
    this._tlsFingerprintClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintClassesInput() {
    return this._tlsFingerprintClasses;
  }

  // tls_fingerprint_values - computed: false, optional: true, required: false
  private _tlsFingerprintValues?: string[]; 
  public get tlsFingerprintValues() {
    return this.getListAttribute('tls_fingerprint_values');
  }
  public set tlsFingerprintValues(value: string[]) {
    this._tlsFingerprintValues = value;
  }
  public resetTlsFingerprintValues() {
    this._tlsFingerprintValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintValuesInput() {
    return this._tlsFingerprintValues;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new ServicePolicyAllowListAsnListStructList(this, "asn_list", false);
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: ServicePolicyAllowListAsnListStruct[] | cdktf.IResolvable) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_set - computed: false, optional: true, required: false
  private _asnSet = new ServicePolicyAllowListAsnSetList(this, "asn_set", false);
  public get asnSet() {
    return this._asnSet;
  }
  public putAsnSet(value: ServicePolicyAllowListAsnSet[] | cdktf.IResolvable) {
    this._asnSet.internalValue = value;
  }
  public resetAsnSet() {
    this._asnSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetInput() {
    return this._asnSet.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new ServicePolicyAllowListIpPrefixSetList(this, "ip_prefix_set", false);
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: ServicePolicyAllowListIpPrefixSet[] | cdktf.IResolvable) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new ServicePolicyAllowListPrefixListStructList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: ServicePolicyAllowListPrefixListStruct[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}

export class ServicePolicyAllowListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyAllowListStructOutputReference {
    return new ServicePolicyAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyDenyListAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#as_numbers ServicePolicy#as_numbers}
  */
  readonly asNumbers: number[];
}

export function servicePolicyDenyListAsnListStructToTerraform(struct?: ServicePolicyDenyListAsnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function servicePolicyDenyListAsnListStructToHclTerraform(struct?: ServicePolicyDenyListAsnListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyDenyListAsnListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyDenyListAsnListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyDenyListAsnListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumbers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyDenyListAsnListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyDenyListAsnListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyDenyListAsnListStructOutputReference {
    return new ServicePolicyDenyListAsnListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyDenyListAsnSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyDenyListAsnSetToTerraform(struct?: ServicePolicyDenyListAsnSet | cdktf.IResolvable): any {
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


export function servicePolicyDenyListAsnSetToHclTerraform(struct?: ServicePolicyDenyListAsnSet | cdktf.IResolvable): any {
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

export class ServicePolicyDenyListAsnSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyDenyListAsnSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyDenyListAsnSet | cdktf.IResolvable | undefined) {
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

export class ServicePolicyDenyListAsnSetList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyDenyListAsnSet[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyDenyListAsnSetOutputReference {
    return new ServicePolicyDenyListAsnSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyDenyListIpPrefixSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyDenyListIpPrefixSetToTerraform(struct?: ServicePolicyDenyListIpPrefixSet | cdktf.IResolvable): any {
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


export function servicePolicyDenyListIpPrefixSetToHclTerraform(struct?: ServicePolicyDenyListIpPrefixSet | cdktf.IResolvable): any {
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

export class ServicePolicyDenyListIpPrefixSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyDenyListIpPrefixSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyDenyListIpPrefixSet | cdktf.IResolvable | undefined) {
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

export class ServicePolicyDenyListIpPrefixSetList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyDenyListIpPrefixSet[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyDenyListIpPrefixSetOutputReference {
    return new ServicePolicyDenyListIpPrefixSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyDenyListPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ipv6_prefixes ServicePolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefixes ServicePolicy#prefixes}
  */
  readonly prefixes: string[];
}

export function servicePolicyDenyListPrefixListStructToTerraform(struct?: ServicePolicyDenyListPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function servicePolicyDenyListPrefixListStructToHclTerraform(struct?: ServicePolicyDenyListPrefixListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyDenyListPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyDenyListPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyDenyListPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: false, required: true
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}

export class ServicePolicyDenyListPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyDenyListPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyDenyListPrefixListStructOutputReference {
    return new ServicePolicyDenyListPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyDenyListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#country_list ServicePolicy#country_list}
  */
  readonly countryList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#default_action_allow ServicePolicy#default_action_allow}
  */
  readonly defaultActionAllow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#default_action_deny ServicePolicy#default_action_deny}
  */
  readonly defaultActionDeny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#default_action_next_policy ServicePolicy#default_action_next_policy}
  */
  readonly defaultActionNextPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tls_fingerprint_classes ServicePolicy#tls_fingerprint_classes}
  */
  readonly tlsFingerprintClasses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tls_fingerprint_values ServicePolicy#tls_fingerprint_values}
  */
  readonly tlsFingerprintValues?: string[];
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_list ServicePolicy#asn_list}
  */
  readonly asnList?: ServicePolicyDenyListAsnListStruct[] | cdktf.IResolvable;
  /**
  * asn_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_set ServicePolicy#asn_set}
  */
  readonly asnSet?: ServicePolicyDenyListAsnSet[] | cdktf.IResolvable;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_prefix_set ServicePolicy#ip_prefix_set}
  */
  readonly ipPrefixSet?: ServicePolicyDenyListIpPrefixSet[] | cdktf.IResolvable;
  /**
  * prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefix_list ServicePolicy#prefix_list}
  */
  readonly prefixList?: ServicePolicyDenyListPrefixListStruct[] | cdktf.IResolvable;
}

export function servicePolicyDenyListStructToTerraform(struct?: ServicePolicyDenyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryList),
    default_action_allow: cdktf.booleanToTerraform(struct!.defaultActionAllow),
    default_action_deny: cdktf.booleanToTerraform(struct!.defaultActionDeny),
    default_action_next_policy: cdktf.booleanToTerraform(struct!.defaultActionNextPolicy),
    tls_fingerprint_classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsFingerprintClasses),
    tls_fingerprint_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsFingerprintValues),
    asn_list: cdktf.listMapper(servicePolicyDenyListAsnListStructToTerraform, true)(struct!.asnList),
    asn_set: cdktf.listMapper(servicePolicyDenyListAsnSetToTerraform, true)(struct!.asnSet),
    ip_prefix_set: cdktf.listMapper(servicePolicyDenyListIpPrefixSetToTerraform, true)(struct!.ipPrefixSet),
    prefix_list: cdktf.listMapper(servicePolicyDenyListPrefixListStructToTerraform, true)(struct!.prefixList),
  }
}


export function servicePolicyDenyListStructToHclTerraform(struct?: ServicePolicyDenyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    country_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_action_allow: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_deny: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_action_next_policy: {
      value: cdktf.booleanToHclTerraform(struct!.defaultActionNextPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_fingerprint_classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsFingerprintClasses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_fingerprint_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsFingerprintValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asn_list: {
      value: cdktf.listMapperHcl(servicePolicyDenyListAsnListStructToHclTerraform, true)(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyDenyListAsnListStructList",
    },
    asn_set: {
      value: cdktf.listMapperHcl(servicePolicyDenyListAsnSetToHclTerraform, true)(struct!.asnSet),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyDenyListAsnSetList",
    },
    ip_prefix_set: {
      value: cdktf.listMapperHcl(servicePolicyDenyListIpPrefixSetToHclTerraform, true)(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyDenyListIpPrefixSetList",
    },
    prefix_list: {
      value: cdktf.listMapperHcl(servicePolicyDenyListPrefixListStructToHclTerraform, true)(struct!.prefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyDenyListPrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyDenyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyDenyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryList = this._countryList;
    }
    if (this._defaultActionAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionAllow = this._defaultActionAllow;
    }
    if (this._defaultActionDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionDeny = this._defaultActionDeny;
    }
    if (this._defaultActionNextPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultActionNextPolicy = this._defaultActionNextPolicy;
    }
    if (this._tlsFingerprintClasses !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintClasses = this._tlsFingerprintClasses;
    }
    if (this._tlsFingerprintValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintValues = this._tlsFingerprintValues;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSet = this._asnSet?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._prefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyDenyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._countryList = undefined;
      this._defaultActionAllow = undefined;
      this._defaultActionDeny = undefined;
      this._defaultActionNextPolicy = undefined;
      this._tlsFingerprintClasses = undefined;
      this._tlsFingerprintValues = undefined;
      this._asnList.internalValue = undefined;
      this._asnSet.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._prefixList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._countryList = value.countryList;
      this._defaultActionAllow = value.defaultActionAllow;
      this._defaultActionDeny = value.defaultActionDeny;
      this._defaultActionNextPolicy = value.defaultActionNextPolicy;
      this._tlsFingerprintClasses = value.tlsFingerprintClasses;
      this._tlsFingerprintValues = value.tlsFingerprintValues;
      this._asnList.internalValue = value.asnList;
      this._asnSet.internalValue = value.asnSet;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._prefixList.internalValue = value.prefixList;
    }
  }

  // country_list - computed: false, optional: true, required: false
  private _countryList?: string[]; 
  public get countryList() {
    return this.getListAttribute('country_list');
  }
  public set countryList(value: string[]) {
    this._countryList = value;
  }
  public resetCountryList() {
    this._countryList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryListInput() {
    return this._countryList;
  }

  // default_action_allow - computed: false, optional: true, required: false
  private _defaultActionAllow?: boolean | cdktf.IResolvable; 
  public get defaultActionAllow() {
    return this.getBooleanAttribute('default_action_allow');
  }
  public set defaultActionAllow(value: boolean | cdktf.IResolvable) {
    this._defaultActionAllow = value;
  }
  public resetDefaultActionAllow() {
    this._defaultActionAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionAllowInput() {
    return this._defaultActionAllow;
  }

  // default_action_deny - computed: false, optional: true, required: false
  private _defaultActionDeny?: boolean | cdktf.IResolvable; 
  public get defaultActionDeny() {
    return this.getBooleanAttribute('default_action_deny');
  }
  public set defaultActionDeny(value: boolean | cdktf.IResolvable) {
    this._defaultActionDeny = value;
  }
  public resetDefaultActionDeny() {
    this._defaultActionDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionDenyInput() {
    return this._defaultActionDeny;
  }

  // default_action_next_policy - computed: false, optional: true, required: false
  private _defaultActionNextPolicy?: boolean | cdktf.IResolvable; 
  public get defaultActionNextPolicy() {
    return this.getBooleanAttribute('default_action_next_policy');
  }
  public set defaultActionNextPolicy(value: boolean | cdktf.IResolvable) {
    this._defaultActionNextPolicy = value;
  }
  public resetDefaultActionNextPolicy() {
    this._defaultActionNextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionNextPolicyInput() {
    return this._defaultActionNextPolicy;
  }

  // tls_fingerprint_classes - computed: false, optional: true, required: false
  private _tlsFingerprintClasses?: string[]; 
  public get tlsFingerprintClasses() {
    return this.getListAttribute('tls_fingerprint_classes');
  }
  public set tlsFingerprintClasses(value: string[]) {
    this._tlsFingerprintClasses = value;
  }
  public resetTlsFingerprintClasses() {
    this._tlsFingerprintClasses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintClassesInput() {
    return this._tlsFingerprintClasses;
  }

  // tls_fingerprint_values - computed: false, optional: true, required: false
  private _tlsFingerprintValues?: string[]; 
  public get tlsFingerprintValues() {
    return this.getListAttribute('tls_fingerprint_values');
  }
  public set tlsFingerprintValues(value: string[]) {
    this._tlsFingerprintValues = value;
  }
  public resetTlsFingerprintValues() {
    this._tlsFingerprintValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintValuesInput() {
    return this._tlsFingerprintValues;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new ServicePolicyDenyListAsnListStructList(this, "asn_list", false);
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: ServicePolicyDenyListAsnListStruct[] | cdktf.IResolvable) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_set - computed: false, optional: true, required: false
  private _asnSet = new ServicePolicyDenyListAsnSetList(this, "asn_set", false);
  public get asnSet() {
    return this._asnSet;
  }
  public putAsnSet(value: ServicePolicyDenyListAsnSet[] | cdktf.IResolvable) {
    this._asnSet.internalValue = value;
  }
  public resetAsnSet() {
    this._asnSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetInput() {
    return this._asnSet.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new ServicePolicyDenyListIpPrefixSetList(this, "ip_prefix_set", false);
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: ServicePolicyDenyListIpPrefixSet[] | cdktf.IResolvable) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList = new ServicePolicyDenyListPrefixListStructList(this, "prefix_list", false);
  public get prefixList() {
    return this._prefixList;
  }
  public putPrefixList(value: ServicePolicyDenyListPrefixListStruct[] | cdktf.IResolvable) {
    this._prefixList.internalValue = value;
  }
  public resetPrefixList() {
    this._prefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList.internalValue;
  }
}

export class ServicePolicyDenyListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyDenyListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyDenyListStructOutputReference {
    return new ServicePolicyDenyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyLegacyRuleListRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyLegacyRuleListRulesToTerraform(struct?: ServicePolicyLegacyRuleListRules | cdktf.IResolvable): any {
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


export function servicePolicyLegacyRuleListRulesToHclTerraform(struct?: ServicePolicyLegacyRuleListRules | cdktf.IResolvable): any {
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

export class ServicePolicyLegacyRuleListRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyLegacyRuleListRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyLegacyRuleListRules | cdktf.IResolvable | undefined) {
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

export class ServicePolicyLegacyRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyLegacyRuleListRules[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyLegacyRuleListRulesOutputReference {
    return new ServicePolicyLegacyRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyLegacyRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#rules ServicePolicy#rules}
  */
  readonly rules?: ServicePolicyLegacyRuleListRules[] | cdktf.IResolvable;
}

export function servicePolicyLegacyRuleListStructToTerraform(struct?: ServicePolicyLegacyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(servicePolicyLegacyRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function servicePolicyLegacyRuleListStructToHclTerraform(struct?: ServicePolicyLegacyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(servicePolicyLegacyRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyLegacyRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyLegacyRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyLegacyRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyLegacyRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ServicePolicyLegacyRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ServicePolicyLegacyRuleListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class ServicePolicyLegacyRuleListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyLegacyRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyLegacyRuleListStructOutputReference {
    return new ServicePolicyLegacyRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyPortMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ports ServicePolicy#ports}
  */
  readonly ports: string[];
}

export function servicePolicyPortMatcherToTerraform(struct?: ServicePolicyPortMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function servicePolicyPortMatcherToHclTerraform(struct?: ServicePolicyPortMatcher | cdktf.IResolvable): any {
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyPortMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyPortMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyPortMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invertMatcher = value.invertMatcher;
      this._ports = value.ports;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class ServicePolicyPortMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyPortMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyPortMatcherOutputReference {
    return new ServicePolicyPortMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#description ServicePolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#disable ServicePolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
}

export function servicePolicyRuleListRulesMetadataToTerraform(struct?: ServicePolicyRuleListRulesMetadata | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesMetadataToHclTerraform(struct?: ServicePolicyRuleListRulesMetadata | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesMetadataList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesMetadata[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesMetadataOutputReference {
    return new ServicePolicyRuleListRulesMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecApiGroupMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#match ServicePolicy#match}
  */
  readonly match: string[];
}

export function servicePolicyRuleListRulesSpecApiGroupMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecApiGroupMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    match: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.match),
  }
}


export function servicePolicyRuleListRulesSpecApiGroupMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecApiGroupMatcher | cdktf.IResolvable): any {
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
    match: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.match),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecApiGroupMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecApiGroupMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecApiGroupMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invertMatcher = value.invertMatcher;
      this._match = value.match;
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

  // match - computed: false, optional: false, required: true
  private _match?: string[]; 
  public get match() {
    return this.getListAttribute('match');
  }
  public set match(value: string[]) {
    this._match = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class ServicePolicyRuleListRulesSpecApiGroupMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecApiGroupMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecApiGroupMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecApiGroupMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecArgMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecArgMatchersItemToTerraform(struct?: ServicePolicyRuleListRulesSpecArgMatchersItem | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecArgMatchersItemToHclTerraform(struct?: ServicePolicyRuleListRulesSpecArgMatchersItem | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecArgMatchersItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecArgMatchersItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecArgMatchersItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecArgMatchersItemList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecArgMatchersItem[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecArgMatchersItemOutputReference {
    return new ServicePolicyRuleListRulesSpecArgMatchersItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecArgMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_not_present ServicePolicy#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_present ServicePolicy#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#presence ServicePolicy#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#item ServicePolicy#item}
  */
  readonly item?: ServicePolicyRuleListRulesSpecArgMatchersItem[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecArgMatchersToTerraform(struct?: ServicePolicyRuleListRulesSpecArgMatchers | cdktf.IResolvable): any {
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
    item: cdktf.listMapper(servicePolicyRuleListRulesSpecArgMatchersItemToTerraform, true)(struct!.item),
  }
}


export function servicePolicyRuleListRulesSpecArgMatchersToHclTerraform(struct?: ServicePolicyRuleListRulesSpecArgMatchers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecArgMatchersItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecArgMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecArgMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecArgMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecArgMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new ServicePolicyRuleListRulesSpecArgMatchersItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleListRulesSpecArgMatchersItem[] | cdktf.IResolvable) {
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

export class ServicePolicyRuleListRulesSpecArgMatchersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecArgMatchers[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecArgMatchersOutputReference {
    return new ServicePolicyRuleListRulesSpecArgMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#as_numbers ServicePolicy#as_numbers}
  */
  readonly asNumbers: number[];
}

export function servicePolicyRuleListRulesSpecAsnListStructToTerraform(struct?: ServicePolicyRuleListRulesSpecAsnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function servicePolicyRuleListRulesSpecAsnListStructToHclTerraform(struct?: ServicePolicyRuleListRulesSpecAsnListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecAsnListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecAsnListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecAsnListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumbers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecAsnListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecAsnListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecAsnListStructOutputReference {
    return new ServicePolicyRuleListRulesSpecAsnListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecAsnMatcherAsnSetsToTerraform(struct?: ServicePolicyRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecAsnMatcherAsnSetsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecAsnMatcherAsnSetsOutputReference {
    return new ServicePolicyRuleListRulesSpecAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_sets ServicePolicy#asn_sets}
  */
  readonly asnSets: ServicePolicyRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecAsnMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecAsnMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(servicePolicyRuleListRulesSpecAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function servicePolicyRuleListRulesSpecAsnMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecAsnMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecAsnMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecAsnMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecAsnMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new ServicePolicyRuleListRulesSpecAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: ServicePolicyRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecAsnMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecAsnMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecAsnMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecAsnMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecBodyMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecBodyMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecBodyMatcher | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecBodyMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecBodyMatcher | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecBodyMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecBodyMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecBodyMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecBodyMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecBodyMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecBodyMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecBodyMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecBotAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#bot_skip_processing ServicePolicy#bot_skip_processing}
  */
  readonly botSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#none ServicePolicy#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecBotActionToTerraform(struct?: ServicePolicyRuleListRulesSpecBotAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_skip_processing: cdktf.booleanToTerraform(struct!.botSkipProcessing),
    none: cdktf.booleanToTerraform(struct!.none),
  }
}


export function servicePolicyRuleListRulesSpecBotActionToHclTerraform(struct?: ServicePolicyRuleListRulesSpecBotAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.botSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecBotActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecBotAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.botSkipProcessing = this._botSkipProcessing;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecBotAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botSkipProcessing = undefined;
      this._none = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botSkipProcessing = value.botSkipProcessing;
      this._none = value.none;
    }
  }

  // bot_skip_processing - computed: false, optional: true, required: false
  private _botSkipProcessing?: boolean | cdktf.IResolvable; 
  public get botSkipProcessing() {
    return this.getBooleanAttribute('bot_skip_processing');
  }
  public set botSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._botSkipProcessing = value;
  }
  public resetBotSkipProcessing() {
    this._botSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botSkipProcessingInput() {
    return this._botSkipProcessing;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}

export class ServicePolicyRuleListRulesSpecBotActionList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecBotAction[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecBotActionOutputReference {
    return new ServicePolicyRuleListRulesSpecBotActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecClientNameMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecClientNameMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecClientNameMatcher | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecClientNameMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecClientNameMatcher | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecClientNameMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecClientNameMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecClientNameMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecClientNameMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecClientNameMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecClientNameMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecClientNameMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecClientRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#match ServicePolicy#match}
  */
  readonly match?: string;
}

export function servicePolicyRuleListRulesSpecClientRoleToTerraform(struct?: ServicePolicyRuleListRulesSpecClientRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: cdktf.stringToTerraform(struct!.match),
  }
}


export function servicePolicyRuleListRulesSpecClientRoleToHclTerraform(struct?: ServicePolicyRuleListRulesSpecClientRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecClientRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecClientRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecClientRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match = value.match;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }
}

export class ServicePolicyRuleListRulesSpecClientRoleList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecClientRole[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecClientRoleOutputReference {
    return new ServicePolicyRuleListRulesSpecClientRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#expressions ServicePolicy#expressions}
  */
  readonly expressions: string[];
}

export function servicePolicyRuleListRulesSpecClientSelectorToTerraform(struct?: ServicePolicyRuleListRulesSpecClientSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function servicePolicyRuleListRulesSpecClientSelectorToHclTerraform(struct?: ServicePolicyRuleListRulesSpecClientSelector | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecClientSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecClientSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecClientSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecClientSelectorList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecClientSelector[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecClientSelectorOutputReference {
    return new ServicePolicyRuleListRulesSpecClientSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecContentRewriteAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#element_selector ServicePolicy#element_selector}
  */
  readonly elementSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#insert_content ServicePolicy#insert_content}
  */
  readonly insertContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#inserted_types ServicePolicy#inserted_types}
  */
  readonly insertedTypes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#position ServicePolicy#position}
  */
  readonly position?: string;
}

export function servicePolicyRuleListRulesSpecContentRewriteActionToTerraform(struct?: ServicePolicyRuleListRulesSpecContentRewriteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_selector: cdktf.stringToTerraform(struct!.elementSelector),
    insert_content: cdktf.stringToTerraform(struct!.insertContent),
    inserted_types: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.insertedTypes),
    position: cdktf.stringToTerraform(struct!.position),
  }
}


export function servicePolicyRuleListRulesSpecContentRewriteActionToHclTerraform(struct?: ServicePolicyRuleListRulesSpecContentRewriteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_selector: {
      value: cdktf.stringToHclTerraform(struct!.elementSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_content: {
      value: cdktf.stringToHclTerraform(struct!.insertContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inserted_types: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.insertedTypes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecContentRewriteActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecContentRewriteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementSelector = this._elementSelector;
    }
    if (this._insertContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertContent = this._insertContent;
    }
    if (this._insertedTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertedTypes = this._insertedTypes;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecContentRewriteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._elementSelector = undefined;
      this._insertContent = undefined;
      this._insertedTypes = undefined;
      this._position = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._elementSelector = value.elementSelector;
      this._insertContent = value.insertContent;
      this._insertedTypes = value.insertedTypes;
      this._position = value.position;
    }
  }

  // element_selector - computed: false, optional: true, required: false
  private _elementSelector?: string; 
  public get elementSelector() {
    return this.getStringAttribute('element_selector');
  }
  public set elementSelector(value: string) {
    this._elementSelector = value;
  }
  public resetElementSelector() {
    this._elementSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementSelectorInput() {
    return this._elementSelector;
  }

  // insert_content - computed: false, optional: true, required: false
  private _insertContent?: string; 
  public get insertContent() {
    return this.getStringAttribute('insert_content');
  }
  public set insertContent(value: string) {
    this._insertContent = value;
  }
  public resetInsertContent() {
    this._insertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertContentInput() {
    return this._insertContent;
  }

  // inserted_types - computed: false, optional: true, required: false
  private _insertedTypes?: { [key: string]: string }; 
  public get insertedTypes() {
    return this.getStringMapAttribute('inserted_types');
  }
  public set insertedTypes(value: { [key: string]: string }) {
    this._insertedTypes = value;
  }
  public resetInsertedTypes() {
    this._insertedTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertedTypesInput() {
    return this._insertedTypes;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}

export class ServicePolicyRuleListRulesSpecContentRewriteActionList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecContentRewriteAction[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecContentRewriteActionOutputReference {
    return new ServicePolicyRuleListRulesSpecContentRewriteActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecCookieMatchersItemToTerraform(struct?: ServicePolicyRuleListRulesSpecCookieMatchersItem | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecCookieMatchersItemToHclTerraform(struct?: ServicePolicyRuleListRulesSpecCookieMatchersItem | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecCookieMatchersItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecCookieMatchersItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecCookieMatchersItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecCookieMatchersItemList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecCookieMatchersItem[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecCookieMatchersItemOutputReference {
    return new ServicePolicyRuleListRulesSpecCookieMatchersItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_not_present ServicePolicy#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_present ServicePolicy#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#presence ServicePolicy#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#item ServicePolicy#item}
  */
  readonly item?: ServicePolicyRuleListRulesSpecCookieMatchersItem[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecCookieMatchersToTerraform(struct?: ServicePolicyRuleListRulesSpecCookieMatchers | cdktf.IResolvable): any {
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
    item: cdktf.listMapper(servicePolicyRuleListRulesSpecCookieMatchersItemToTerraform, true)(struct!.item),
  }
}


export function servicePolicyRuleListRulesSpecCookieMatchersToHclTerraform(struct?: ServicePolicyRuleListRulesSpecCookieMatchers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecCookieMatchersItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecCookieMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecCookieMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new ServicePolicyRuleListRulesSpecCookieMatchersItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleListRulesSpecCookieMatchersItem[] | cdktf.IResolvable) {
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

export class ServicePolicyRuleListRulesSpecCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecCookieMatchersOutputReference {
    return new ServicePolicyRuleListRulesSpecCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDomainMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecDomainMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecDomainMatcher | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecDomainMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDomainMatcher | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecDomainMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDomainMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecDomainMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecDomainMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDomainMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDomainMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecDomainMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDstAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#as_numbers ServicePolicy#as_numbers}
  */
  readonly asNumbers: number[];
}

export function servicePolicyRuleListRulesSpecDstAsnListStructToTerraform(struct?: ServicePolicyRuleListRulesSpecDstAsnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function servicePolicyRuleListRulesSpecDstAsnListStructToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDstAsnListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecDstAsnListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDstAsnListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecDstAsnListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asNumbers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecDstAsnListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDstAsnListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDstAsnListStructOutputReference {
    return new ServicePolicyRuleListRulesSpecDstAsnListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsToTerraform(struct?: ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsOutputReference {
    return new ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDstAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_sets ServicePolicy#asn_sets}
  */
  readonly asnSets: ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecDstAsnMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecDstAsnMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(servicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function servicePolicyRuleListRulesSpecDstAsnMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDstAsnMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecDstAsnMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDstAsnMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecDstAsnMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asnSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: ServicePolicyRuleListRulesSpecDstAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecDstAsnMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDstAsnMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDstAsnMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecDstAsnMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsToTerraform(struct?: ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsOutputReference {
    return new ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDstIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefix_sets ServicePolicy#prefix_sets}
  */
  readonly prefixSets: ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecDstIpMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecDstIpMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(servicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function servicePolicyRuleListRulesSpecDstIpMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDstIpMatcher | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecDstIpMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDstIpMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecDstIpMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _prefixSets = new ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: ServicePolicyRuleListRulesSpecDstIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecDstIpMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDstIpMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDstIpMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecDstIpMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecDstIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_match ServicePolicy#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_prefixes ServicePolicy#ip_prefixes}
  */
  readonly ipPrefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ipv6_prefixes ServicePolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function servicePolicyRuleListRulesSpecDstIpPrefixListStructToTerraform(struct?: ServicePolicyRuleListRulesSpecDstIpPrefixListStruct | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecDstIpPrefixListStructToHclTerraform(struct?: ServicePolicyRuleListRulesSpecDstIpPrefixListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecDstIpPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecDstIpPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecDstIpPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

  // ip_prefixes - computed: false, optional: false, required: true
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
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

export class ServicePolicyRuleListRulesSpecDstIpPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecDstIpPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecDstIpPrefixListStructOutputReference {
    return new ServicePolicyRuleListRulesSpecDstIpPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecForwardingClass {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecForwardingClassToTerraform(struct?: ServicePolicyRuleListRulesSpecForwardingClass | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecForwardingClassToHclTerraform(struct?: ServicePolicyRuleListRulesSpecForwardingClass | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecForwardingClassOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecForwardingClass | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecForwardingClass | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecForwardingClassList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecForwardingClass[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecForwardingClassOutputReference {
    return new ServicePolicyRuleListRulesSpecForwardingClassOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecGotoPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecGotoPolicyToTerraform(struct?: ServicePolicyRuleListRulesSpecGotoPolicy | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecGotoPolicyToHclTerraform(struct?: ServicePolicyRuleListRulesSpecGotoPolicy | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecGotoPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecGotoPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecGotoPolicy | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecGotoPolicyList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecGotoPolicy[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecGotoPolicyOutputReference {
    return new ServicePolicyRuleListRulesSpecGotoPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecHeadersItemToTerraform(struct?: ServicePolicyRuleListRulesSpecHeadersItem | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecHeadersItemToHclTerraform(struct?: ServicePolicyRuleListRulesSpecHeadersItem | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecHeadersItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecHeadersItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecHeadersItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecHeadersItemList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecHeadersItem[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecHeadersItemOutputReference {
    return new ServicePolicyRuleListRulesSpecHeadersItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_not_present ServicePolicy#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_present ServicePolicy#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#presence ServicePolicy#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#item ServicePolicy#item}
  */
  readonly item?: ServicePolicyRuleListRulesSpecHeadersItem[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecHeadersToTerraform(struct?: ServicePolicyRuleListRulesSpecHeaders | cdktf.IResolvable): any {
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
    item: cdktf.listMapper(servicePolicyRuleListRulesSpecHeadersItemToTerraform, true)(struct!.item),
  }
}


export function servicePolicyRuleListRulesSpecHeadersToHclTerraform(struct?: ServicePolicyRuleListRulesSpecHeaders | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecHeadersItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecHeaders | cdktf.IResolvable | undefined) {
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
  private _item = new ServicePolicyRuleListRulesSpecHeadersItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleListRulesSpecHeadersItem[] | cdktf.IResolvable) {
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

export class ServicePolicyRuleListRulesSpecHeadersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecHeaders[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecHeadersOutputReference {
    return new ServicePolicyRuleListRulesSpecHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecHttpMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#methods ServicePolicy#methods}
  */
  readonly methods?: string[];
}

export function servicePolicyRuleListRulesSpecHttpMethodToTerraform(struct?: ServicePolicyRuleListRulesSpecHttpMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function servicePolicyRuleListRulesSpecHttpMethodToHclTerraform(struct?: ServicePolicyRuleListRulesSpecHttpMethod | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecHttpMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecHttpMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecHttpMethodList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecHttpMethod[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecHttpMethodOutputReference {
    return new ServicePolicyRuleListRulesSpecHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecIpMatcherPrefixSetsToTerraform(struct?: ServicePolicyRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecIpMatcherPrefixSetsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecIpMatcherPrefixSetsOutputReference {
    return new ServicePolicyRuleListRulesSpecIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefix_sets ServicePolicy#prefix_sets}
  */
  readonly prefixSets: ServicePolicyRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecIpMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecIpMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(servicePolicyRuleListRulesSpecIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function servicePolicyRuleListRulesSpecIpMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecIpMatcher | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecIpMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecIpMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecIpMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _prefixSets = new ServicePolicyRuleListRulesSpecIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: ServicePolicyRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecIpMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecIpMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecIpMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecIpMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_match ServicePolicy#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_prefixes ServicePolicy#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ipv6_prefixes ServicePolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function servicePolicyRuleListRulesSpecIpPrefixListStructToTerraform(struct?: ServicePolicyRuleListRulesSpecIpPrefixListStruct | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecIpPrefixListStructToHclTerraform(struct?: ServicePolicyRuleListRulesSpecIpPrefixListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecIpPrefixListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecIpPrefixListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecIpPrefixListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecIpPrefixListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecIpPrefixListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecIpPrefixListStructOutputReference {
    return new ServicePolicyRuleListRulesSpecIpPrefixListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_threat_categories ServicePolicy#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function servicePolicyRuleListRulesSpecIpThreatCategoryListStructToTerraform(struct?: ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function servicePolicyRuleListRulesSpecIpThreatCategoryListStructToHclTerraform(struct?: ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipThreatCategories = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecIpThreatCategoryListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecIpThreatCategoryListStructOutputReference {
    return new ServicePolicyRuleListRulesSpecIpThreatCategoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecJa4TlsFingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
}

export function servicePolicyRuleListRulesSpecJa4TlsFingerprintToTerraform(struct?: ServicePolicyRuleListRulesSpecJa4TlsFingerprint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function servicePolicyRuleListRulesSpecJa4TlsFingerprintToHclTerraform(struct?: ServicePolicyRuleListRulesSpecJa4TlsFingerprint | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecJa4TlsFingerprintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecJa4TlsFingerprint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecJa4TlsFingerprint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValues = value.exactValues;
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
}

export class ServicePolicyRuleListRulesSpecJa4TlsFingerprintList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecJa4TlsFingerprint[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecJa4TlsFingerprintOutputReference {
    return new ServicePolicyRuleListRulesSpecJa4TlsFingerprintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecJwtClaimsItemToTerraform(struct?: ServicePolicyRuleListRulesSpecJwtClaimsItem | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecJwtClaimsItemToHclTerraform(struct?: ServicePolicyRuleListRulesSpecJwtClaimsItem | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecJwtClaimsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecJwtClaimsItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecJwtClaimsItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecJwtClaimsItemList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecJwtClaimsItem[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecJwtClaimsItemOutputReference {
    return new ServicePolicyRuleListRulesSpecJwtClaimsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_not_present ServicePolicy#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_present ServicePolicy#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#item ServicePolicy#item}
  */
  readonly item?: ServicePolicyRuleListRulesSpecJwtClaimsItem[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecJwtClaimsToTerraform(struct?: ServicePolicyRuleListRulesSpecJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdktf.listMapper(servicePolicyRuleListRulesSpecJwtClaimsItemToTerraform, true)(struct!.item),
  }
}


export function servicePolicyRuleListRulesSpecJwtClaimsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecJwtClaims | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecJwtClaimsItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new ServicePolicyRuleListRulesSpecJwtClaimsItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleListRulesSpecJwtClaimsItem[] | cdktf.IResolvable) {
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

export class ServicePolicyRuleListRulesSpecJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecJwtClaimsOutputReference {
    return new ServicePolicyRuleListRulesSpecJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#keys ServicePolicy#keys}
  */
  readonly keys?: string[];
}

export function servicePolicyRuleListRulesSpecLabelMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecLabelMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function servicePolicyRuleListRulesSpecLabelMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecLabelMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecLabelMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecLabelMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecLabelMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

export class ServicePolicyRuleListRulesSpecLabelMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecLabelMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecLabelMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecLabelMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecMumAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#none ServicePolicy#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#skip_processing ServicePolicy#skip_processing}
  */
  readonly skipProcessing?: boolean | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecMumActionToTerraform(struct?: ServicePolicyRuleListRulesSpecMumAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.booleanToTerraform(struct!.none),
    skip_processing: cdktf.booleanToTerraform(struct!.skipProcessing),
  }
}


export function servicePolicyRuleListRulesSpecMumActionToHclTerraform(struct?: ServicePolicyRuleListRulesSpecMumAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.skipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecMumActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecMumAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._skipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipProcessing = this._skipProcessing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecMumAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._skipProcessing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._skipProcessing = value.skipProcessing;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // skip_processing - computed: false, optional: true, required: false
  private _skipProcessing?: boolean | cdktf.IResolvable; 
  public get skipProcessing() {
    return this.getBooleanAttribute('skip_processing');
  }
  public set skipProcessing(value: boolean | cdktf.IResolvable) {
    this._skipProcessing = value;
  }
  public resetSkipProcessing() {
    this._skipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipProcessingInput() {
    return this._skipProcessing;
  }
}

export class ServicePolicyRuleListRulesSpecMumActionList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecMumAction[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecMumActionOutputReference {
    return new ServicePolicyRuleListRulesSpecMumActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#prefix_values ServicePolicy#prefix_values}
  */
  readonly prefixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#suffix_values ServicePolicy#suffix_values}
  */
  readonly suffixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecPathToTerraform(struct?: ServicePolicyRuleListRulesSpecPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    suffix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suffixValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function servicePolicyRuleListRulesSpecPathToHclTerraform(struct?: ServicePolicyRuleListRulesSpecPath | cdktf.IResolvable): any {
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
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixValues),
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
    suffix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suffixValues),
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

export class ServicePolicyRuleListRulesSpecPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixValues = this._prefixValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._suffixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValues = this._suffixValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._invertMatcher = undefined;
      this._prefixValues = undefined;
      this._regexValues = undefined;
      this._suffixValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValues = value.exactValues;
      this._invertMatcher = value.invertMatcher;
      this._prefixValues = value.prefixValues;
      this._regexValues = value.regexValues;
      this._suffixValues = value.suffixValues;
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

  // prefix_values - computed: false, optional: true, required: false
  private _prefixValues?: string[]; 
  public get prefixValues() {
    return this.getListAttribute('prefix_values');
  }
  public set prefixValues(value: string[]) {
    this._prefixValues = value;
  }
  public resetPrefixValues() {
    this._prefixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixValuesInput() {
    return this._prefixValues;
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

  // suffix_values - computed: false, optional: true, required: false
  private _suffixValues?: string[]; 
  public get suffixValues() {
    return this.getListAttribute('suffix_values');
  }
  public set suffixValues(value: string[]) {
    this._suffixValues = value;
  }
  public resetSuffixValues() {
    this._suffixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValuesInput() {
    return this._suffixValues;
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

export class ServicePolicyRuleListRulesSpecPathList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecPath[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecPathOutputReference {
    return new ServicePolicyRuleListRulesSpecPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecPortMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ports ServicePolicy#ports}
  */
  readonly ports: string[];
}

export function servicePolicyRuleListRulesSpecPortMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecPortMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function servicePolicyRuleListRulesSpecPortMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecPortMatcher | cdktf.IResolvable): any {
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
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecPortMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecPortMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecPortMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invertMatcher = value.invertMatcher;
      this._ports = value.ports;
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

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class ServicePolicyRuleListRulesSpecPortMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecPortMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecPortMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecPortMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecQueryParamsItemToTerraform(struct?: ServicePolicyRuleListRulesSpecQueryParamsItem | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecQueryParamsItemToHclTerraform(struct?: ServicePolicyRuleListRulesSpecQueryParamsItem | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecQueryParamsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecQueryParamsItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecQueryParamsItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecQueryParamsItemList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecQueryParamsItem[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecQueryParamsItemOutputReference {
    return new ServicePolicyRuleListRulesSpecQueryParamsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_not_present ServicePolicy#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#check_present ServicePolicy#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#key ServicePolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#presence ServicePolicy#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#item ServicePolicy#item}
  */
  readonly item?: ServicePolicyRuleListRulesSpecQueryParamsItem[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecQueryParamsToTerraform(struct?: ServicePolicyRuleListRulesSpecQueryParams | cdktf.IResolvable): any {
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
    item: cdktf.listMapper(servicePolicyRuleListRulesSpecQueryParamsItemToTerraform, true)(struct!.item),
  }
}


export function servicePolicyRuleListRulesSpecQueryParamsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecQueryParams | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecQueryParamsItemToHclTerraform, true)(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecQueryParams | cdktf.IResolvable | undefined) {
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
  private _item = new ServicePolicyRuleListRulesSpecQueryParamsItemList(this, "item", false);
  public get item() {
    return this._item;
  }
  public putItem(value: ServicePolicyRuleListRulesSpecQueryParamsItem[] | cdktf.IResolvable) {
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

export class ServicePolicyRuleListRulesSpecQueryParamsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecQueryParams[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecQueryParamsOutputReference {
    return new ServicePolicyRuleListRulesSpecQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecRateLimiterToTerraform(struct?: ServicePolicyRuleListRulesSpecRateLimiter | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecRateLimiterToHclTerraform(struct?: ServicePolicyRuleListRulesSpecRateLimiter | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecRateLimiter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecRateLimiter | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecRateLimiterList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecRateLimiter[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecRateLimiterOutputReference {
    return new ServicePolicyRuleListRulesSpecRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecRequestConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_cookie_count_exceeds ServicePolicy#max_cookie_count_exceeds}
  */
  readonly maxCookieCountExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_cookie_count_none ServicePolicy#max_cookie_count_none}
  */
  readonly maxCookieCountNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_cookie_key_size_exceeds ServicePolicy#max_cookie_key_size_exceeds}
  */
  readonly maxCookieKeySizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_cookie_key_size_none ServicePolicy#max_cookie_key_size_none}
  */
  readonly maxCookieKeySizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_cookie_value_size_exceeds ServicePolicy#max_cookie_value_size_exceeds}
  */
  readonly maxCookieValueSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_cookie_value_size_none ServicePolicy#max_cookie_value_size_none}
  */
  readonly maxCookieValueSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_header_count_exceeds ServicePolicy#max_header_count_exceeds}
  */
  readonly maxHeaderCountExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_header_count_none ServicePolicy#max_header_count_none}
  */
  readonly maxHeaderCountNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_header_key_size_exceeds ServicePolicy#max_header_key_size_exceeds}
  */
  readonly maxHeaderKeySizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_header_key_size_none ServicePolicy#max_header_key_size_none}
  */
  readonly maxHeaderKeySizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_header_value_size_exceeds ServicePolicy#max_header_value_size_exceeds}
  */
  readonly maxHeaderValueSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_header_value_size_none ServicePolicy#max_header_value_size_none}
  */
  readonly maxHeaderValueSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_parameter_count_exceeds ServicePolicy#max_parameter_count_exceeds}
  */
  readonly maxParameterCountExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_parameter_count_none ServicePolicy#max_parameter_count_none}
  */
  readonly maxParameterCountNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_parameter_name_size_exceeds ServicePolicy#max_parameter_name_size_exceeds}
  */
  readonly maxParameterNameSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_parameter_name_size_none ServicePolicy#max_parameter_name_size_none}
  */
  readonly maxParameterNameSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_parameter_value_size_exceeds ServicePolicy#max_parameter_value_size_exceeds}
  */
  readonly maxParameterValueSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_parameter_value_size_none ServicePolicy#max_parameter_value_size_none}
  */
  readonly maxParameterValueSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_query_size_exceeds ServicePolicy#max_query_size_exceeds}
  */
  readonly maxQuerySizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_query_size_none ServicePolicy#max_query_size_none}
  */
  readonly maxQuerySizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_request_line_size_exceeds ServicePolicy#max_request_line_size_exceeds}
  */
  readonly maxRequestLineSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_request_line_size_none ServicePolicy#max_request_line_size_none}
  */
  readonly maxRequestLineSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_request_size_exceeds ServicePolicy#max_request_size_exceeds}
  */
  readonly maxRequestSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_request_size_none ServicePolicy#max_request_size_none}
  */
  readonly maxRequestSizeNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_url_size_exceeds ServicePolicy#max_url_size_exceeds}
  */
  readonly maxUrlSizeExceeds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#max_url_size_none ServicePolicy#max_url_size_none}
  */
  readonly maxUrlSizeNone?: boolean | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecRequestConstraintsToTerraform(struct?: ServicePolicyRuleListRulesSpecRequestConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cookie_count_exceeds: cdktf.numberToTerraform(struct!.maxCookieCountExceeds),
    max_cookie_count_none: cdktf.booleanToTerraform(struct!.maxCookieCountNone),
    max_cookie_key_size_exceeds: cdktf.numberToTerraform(struct!.maxCookieKeySizeExceeds),
    max_cookie_key_size_none: cdktf.booleanToTerraform(struct!.maxCookieKeySizeNone),
    max_cookie_value_size_exceeds: cdktf.numberToTerraform(struct!.maxCookieValueSizeExceeds),
    max_cookie_value_size_none: cdktf.booleanToTerraform(struct!.maxCookieValueSizeNone),
    max_header_count_exceeds: cdktf.numberToTerraform(struct!.maxHeaderCountExceeds),
    max_header_count_none: cdktf.booleanToTerraform(struct!.maxHeaderCountNone),
    max_header_key_size_exceeds: cdktf.numberToTerraform(struct!.maxHeaderKeySizeExceeds),
    max_header_key_size_none: cdktf.booleanToTerraform(struct!.maxHeaderKeySizeNone),
    max_header_value_size_exceeds: cdktf.numberToTerraform(struct!.maxHeaderValueSizeExceeds),
    max_header_value_size_none: cdktf.booleanToTerraform(struct!.maxHeaderValueSizeNone),
    max_parameter_count_exceeds: cdktf.numberToTerraform(struct!.maxParameterCountExceeds),
    max_parameter_count_none: cdktf.booleanToTerraform(struct!.maxParameterCountNone),
    max_parameter_name_size_exceeds: cdktf.numberToTerraform(struct!.maxParameterNameSizeExceeds),
    max_parameter_name_size_none: cdktf.booleanToTerraform(struct!.maxParameterNameSizeNone),
    max_parameter_value_size_exceeds: cdktf.numberToTerraform(struct!.maxParameterValueSizeExceeds),
    max_parameter_value_size_none: cdktf.booleanToTerraform(struct!.maxParameterValueSizeNone),
    max_query_size_exceeds: cdktf.numberToTerraform(struct!.maxQuerySizeExceeds),
    max_query_size_none: cdktf.booleanToTerraform(struct!.maxQuerySizeNone),
    max_request_line_size_exceeds: cdktf.numberToTerraform(struct!.maxRequestLineSizeExceeds),
    max_request_line_size_none: cdktf.booleanToTerraform(struct!.maxRequestLineSizeNone),
    max_request_size_exceeds: cdktf.numberToTerraform(struct!.maxRequestSizeExceeds),
    max_request_size_none: cdktf.booleanToTerraform(struct!.maxRequestSizeNone),
    max_url_size_exceeds: cdktf.numberToTerraform(struct!.maxUrlSizeExceeds),
    max_url_size_none: cdktf.booleanToTerraform(struct!.maxUrlSizeNone),
  }
}


export function servicePolicyRuleListRulesSpecRequestConstraintsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecRequestConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cookie_count_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxCookieCountExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cookie_count_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxCookieCountNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cookie_key_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxCookieKeySizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cookie_key_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxCookieKeySizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cookie_value_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxCookieValueSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_cookie_value_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxCookieValueSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_header_count_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderCountExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_count_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxHeaderCountNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_header_key_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderKeySizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_key_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxHeaderKeySizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_header_value_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderValueSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_value_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxHeaderValueSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parameter_count_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxParameterCountExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parameter_count_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxParameterCountNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parameter_name_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxParameterNameSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parameter_name_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxParameterNameSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_parameter_value_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxParameterValueSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parameter_value_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxParameterValueSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_query_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxQuerySizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_query_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxQuerySizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_line_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestLineSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_line_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxRequestLineSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxRequestSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_url_size_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.maxUrlSizeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_url_size_none: {
      value: cdktf.booleanToHclTerraform(struct!.maxUrlSizeNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecRequestConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecRequestConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCookieCountExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieCountExceeds = this._maxCookieCountExceeds;
    }
    if (this._maxCookieCountNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieCountNone = this._maxCookieCountNone;
    }
    if (this._maxCookieKeySizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieKeySizeExceeds = this._maxCookieKeySizeExceeds;
    }
    if (this._maxCookieKeySizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieKeySizeNone = this._maxCookieKeySizeNone;
    }
    if (this._maxCookieValueSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieValueSizeExceeds = this._maxCookieValueSizeExceeds;
    }
    if (this._maxCookieValueSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCookieValueSizeNone = this._maxCookieValueSizeNone;
    }
    if (this._maxHeaderCountExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderCountExceeds = this._maxHeaderCountExceeds;
    }
    if (this._maxHeaderCountNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderCountNone = this._maxHeaderCountNone;
    }
    if (this._maxHeaderKeySizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderKeySizeExceeds = this._maxHeaderKeySizeExceeds;
    }
    if (this._maxHeaderKeySizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderKeySizeNone = this._maxHeaderKeySizeNone;
    }
    if (this._maxHeaderValueSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderValueSizeExceeds = this._maxHeaderValueSizeExceeds;
    }
    if (this._maxHeaderValueSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderValueSizeNone = this._maxHeaderValueSizeNone;
    }
    if (this._maxParameterCountExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterCountExceeds = this._maxParameterCountExceeds;
    }
    if (this._maxParameterCountNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterCountNone = this._maxParameterCountNone;
    }
    if (this._maxParameterNameSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterNameSizeExceeds = this._maxParameterNameSizeExceeds;
    }
    if (this._maxParameterNameSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterNameSizeNone = this._maxParameterNameSizeNone;
    }
    if (this._maxParameterValueSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterValueSizeExceeds = this._maxParameterValueSizeExceeds;
    }
    if (this._maxParameterValueSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParameterValueSizeNone = this._maxParameterValueSizeNone;
    }
    if (this._maxQuerySizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySizeExceeds = this._maxQuerySizeExceeds;
    }
    if (this._maxQuerySizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuerySizeNone = this._maxQuerySizeNone;
    }
    if (this._maxRequestLineSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestLineSizeExceeds = this._maxRequestLineSizeExceeds;
    }
    if (this._maxRequestLineSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestLineSizeNone = this._maxRequestLineSizeNone;
    }
    if (this._maxRequestSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestSizeExceeds = this._maxRequestSizeExceeds;
    }
    if (this._maxRequestSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestSizeNone = this._maxRequestSizeNone;
    }
    if (this._maxUrlSizeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlSizeExceeds = this._maxUrlSizeExceeds;
    }
    if (this._maxUrlSizeNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUrlSizeNone = this._maxUrlSizeNone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecRequestConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCookieCountExceeds = undefined;
      this._maxCookieCountNone = undefined;
      this._maxCookieKeySizeExceeds = undefined;
      this._maxCookieKeySizeNone = undefined;
      this._maxCookieValueSizeExceeds = undefined;
      this._maxCookieValueSizeNone = undefined;
      this._maxHeaderCountExceeds = undefined;
      this._maxHeaderCountNone = undefined;
      this._maxHeaderKeySizeExceeds = undefined;
      this._maxHeaderKeySizeNone = undefined;
      this._maxHeaderValueSizeExceeds = undefined;
      this._maxHeaderValueSizeNone = undefined;
      this._maxParameterCountExceeds = undefined;
      this._maxParameterCountNone = undefined;
      this._maxParameterNameSizeExceeds = undefined;
      this._maxParameterNameSizeNone = undefined;
      this._maxParameterValueSizeExceeds = undefined;
      this._maxParameterValueSizeNone = undefined;
      this._maxQuerySizeExceeds = undefined;
      this._maxQuerySizeNone = undefined;
      this._maxRequestLineSizeExceeds = undefined;
      this._maxRequestLineSizeNone = undefined;
      this._maxRequestSizeExceeds = undefined;
      this._maxRequestSizeNone = undefined;
      this._maxUrlSizeExceeds = undefined;
      this._maxUrlSizeNone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCookieCountExceeds = value.maxCookieCountExceeds;
      this._maxCookieCountNone = value.maxCookieCountNone;
      this._maxCookieKeySizeExceeds = value.maxCookieKeySizeExceeds;
      this._maxCookieKeySizeNone = value.maxCookieKeySizeNone;
      this._maxCookieValueSizeExceeds = value.maxCookieValueSizeExceeds;
      this._maxCookieValueSizeNone = value.maxCookieValueSizeNone;
      this._maxHeaderCountExceeds = value.maxHeaderCountExceeds;
      this._maxHeaderCountNone = value.maxHeaderCountNone;
      this._maxHeaderKeySizeExceeds = value.maxHeaderKeySizeExceeds;
      this._maxHeaderKeySizeNone = value.maxHeaderKeySizeNone;
      this._maxHeaderValueSizeExceeds = value.maxHeaderValueSizeExceeds;
      this._maxHeaderValueSizeNone = value.maxHeaderValueSizeNone;
      this._maxParameterCountExceeds = value.maxParameterCountExceeds;
      this._maxParameterCountNone = value.maxParameterCountNone;
      this._maxParameterNameSizeExceeds = value.maxParameterNameSizeExceeds;
      this._maxParameterNameSizeNone = value.maxParameterNameSizeNone;
      this._maxParameterValueSizeExceeds = value.maxParameterValueSizeExceeds;
      this._maxParameterValueSizeNone = value.maxParameterValueSizeNone;
      this._maxQuerySizeExceeds = value.maxQuerySizeExceeds;
      this._maxQuerySizeNone = value.maxQuerySizeNone;
      this._maxRequestLineSizeExceeds = value.maxRequestLineSizeExceeds;
      this._maxRequestLineSizeNone = value.maxRequestLineSizeNone;
      this._maxRequestSizeExceeds = value.maxRequestSizeExceeds;
      this._maxRequestSizeNone = value.maxRequestSizeNone;
      this._maxUrlSizeExceeds = value.maxUrlSizeExceeds;
      this._maxUrlSizeNone = value.maxUrlSizeNone;
    }
  }

  // max_cookie_count_exceeds - computed: false, optional: true, required: false
  private _maxCookieCountExceeds?: number; 
  public get maxCookieCountExceeds() {
    return this.getNumberAttribute('max_cookie_count_exceeds');
  }
  public set maxCookieCountExceeds(value: number) {
    this._maxCookieCountExceeds = value;
  }
  public resetMaxCookieCountExceeds() {
    this._maxCookieCountExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieCountExceedsInput() {
    return this._maxCookieCountExceeds;
  }

  // max_cookie_count_none - computed: false, optional: true, required: false
  private _maxCookieCountNone?: boolean | cdktf.IResolvable; 
  public get maxCookieCountNone() {
    return this.getBooleanAttribute('max_cookie_count_none');
  }
  public set maxCookieCountNone(value: boolean | cdktf.IResolvable) {
    this._maxCookieCountNone = value;
  }
  public resetMaxCookieCountNone() {
    this._maxCookieCountNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieCountNoneInput() {
    return this._maxCookieCountNone;
  }

  // max_cookie_key_size_exceeds - computed: false, optional: true, required: false
  private _maxCookieKeySizeExceeds?: number; 
  public get maxCookieKeySizeExceeds() {
    return this.getNumberAttribute('max_cookie_key_size_exceeds');
  }
  public set maxCookieKeySizeExceeds(value: number) {
    this._maxCookieKeySizeExceeds = value;
  }
  public resetMaxCookieKeySizeExceeds() {
    this._maxCookieKeySizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieKeySizeExceedsInput() {
    return this._maxCookieKeySizeExceeds;
  }

  // max_cookie_key_size_none - computed: false, optional: true, required: false
  private _maxCookieKeySizeNone?: boolean | cdktf.IResolvable; 
  public get maxCookieKeySizeNone() {
    return this.getBooleanAttribute('max_cookie_key_size_none');
  }
  public set maxCookieKeySizeNone(value: boolean | cdktf.IResolvable) {
    this._maxCookieKeySizeNone = value;
  }
  public resetMaxCookieKeySizeNone() {
    this._maxCookieKeySizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieKeySizeNoneInput() {
    return this._maxCookieKeySizeNone;
  }

  // max_cookie_value_size_exceeds - computed: false, optional: true, required: false
  private _maxCookieValueSizeExceeds?: number; 
  public get maxCookieValueSizeExceeds() {
    return this.getNumberAttribute('max_cookie_value_size_exceeds');
  }
  public set maxCookieValueSizeExceeds(value: number) {
    this._maxCookieValueSizeExceeds = value;
  }
  public resetMaxCookieValueSizeExceeds() {
    this._maxCookieValueSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieValueSizeExceedsInput() {
    return this._maxCookieValueSizeExceeds;
  }

  // max_cookie_value_size_none - computed: false, optional: true, required: false
  private _maxCookieValueSizeNone?: boolean | cdktf.IResolvable; 
  public get maxCookieValueSizeNone() {
    return this.getBooleanAttribute('max_cookie_value_size_none');
  }
  public set maxCookieValueSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxCookieValueSizeNone = value;
  }
  public resetMaxCookieValueSizeNone() {
    this._maxCookieValueSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCookieValueSizeNoneInput() {
    return this._maxCookieValueSizeNone;
  }

  // max_header_count_exceeds - computed: false, optional: true, required: false
  private _maxHeaderCountExceeds?: number; 
  public get maxHeaderCountExceeds() {
    return this.getNumberAttribute('max_header_count_exceeds');
  }
  public set maxHeaderCountExceeds(value: number) {
    this._maxHeaderCountExceeds = value;
  }
  public resetMaxHeaderCountExceeds() {
    this._maxHeaderCountExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderCountExceedsInput() {
    return this._maxHeaderCountExceeds;
  }

  // max_header_count_none - computed: false, optional: true, required: false
  private _maxHeaderCountNone?: boolean | cdktf.IResolvable; 
  public get maxHeaderCountNone() {
    return this.getBooleanAttribute('max_header_count_none');
  }
  public set maxHeaderCountNone(value: boolean | cdktf.IResolvable) {
    this._maxHeaderCountNone = value;
  }
  public resetMaxHeaderCountNone() {
    this._maxHeaderCountNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderCountNoneInput() {
    return this._maxHeaderCountNone;
  }

  // max_header_key_size_exceeds - computed: false, optional: true, required: false
  private _maxHeaderKeySizeExceeds?: number; 
  public get maxHeaderKeySizeExceeds() {
    return this.getNumberAttribute('max_header_key_size_exceeds');
  }
  public set maxHeaderKeySizeExceeds(value: number) {
    this._maxHeaderKeySizeExceeds = value;
  }
  public resetMaxHeaderKeySizeExceeds() {
    this._maxHeaderKeySizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderKeySizeExceedsInput() {
    return this._maxHeaderKeySizeExceeds;
  }

  // max_header_key_size_none - computed: false, optional: true, required: false
  private _maxHeaderKeySizeNone?: boolean | cdktf.IResolvable; 
  public get maxHeaderKeySizeNone() {
    return this.getBooleanAttribute('max_header_key_size_none');
  }
  public set maxHeaderKeySizeNone(value: boolean | cdktf.IResolvable) {
    this._maxHeaderKeySizeNone = value;
  }
  public resetMaxHeaderKeySizeNone() {
    this._maxHeaderKeySizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderKeySizeNoneInput() {
    return this._maxHeaderKeySizeNone;
  }

  // max_header_value_size_exceeds - computed: false, optional: true, required: false
  private _maxHeaderValueSizeExceeds?: number; 
  public get maxHeaderValueSizeExceeds() {
    return this.getNumberAttribute('max_header_value_size_exceeds');
  }
  public set maxHeaderValueSizeExceeds(value: number) {
    this._maxHeaderValueSizeExceeds = value;
  }
  public resetMaxHeaderValueSizeExceeds() {
    this._maxHeaderValueSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderValueSizeExceedsInput() {
    return this._maxHeaderValueSizeExceeds;
  }

  // max_header_value_size_none - computed: false, optional: true, required: false
  private _maxHeaderValueSizeNone?: boolean | cdktf.IResolvable; 
  public get maxHeaderValueSizeNone() {
    return this.getBooleanAttribute('max_header_value_size_none');
  }
  public set maxHeaderValueSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxHeaderValueSizeNone = value;
  }
  public resetMaxHeaderValueSizeNone() {
    this._maxHeaderValueSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderValueSizeNoneInput() {
    return this._maxHeaderValueSizeNone;
  }

  // max_parameter_count_exceeds - computed: false, optional: true, required: false
  private _maxParameterCountExceeds?: number; 
  public get maxParameterCountExceeds() {
    return this.getNumberAttribute('max_parameter_count_exceeds');
  }
  public set maxParameterCountExceeds(value: number) {
    this._maxParameterCountExceeds = value;
  }
  public resetMaxParameterCountExceeds() {
    this._maxParameterCountExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterCountExceedsInput() {
    return this._maxParameterCountExceeds;
  }

  // max_parameter_count_none - computed: false, optional: true, required: false
  private _maxParameterCountNone?: boolean | cdktf.IResolvable; 
  public get maxParameterCountNone() {
    return this.getBooleanAttribute('max_parameter_count_none');
  }
  public set maxParameterCountNone(value: boolean | cdktf.IResolvable) {
    this._maxParameterCountNone = value;
  }
  public resetMaxParameterCountNone() {
    this._maxParameterCountNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterCountNoneInput() {
    return this._maxParameterCountNone;
  }

  // max_parameter_name_size_exceeds - computed: false, optional: true, required: false
  private _maxParameterNameSizeExceeds?: number; 
  public get maxParameterNameSizeExceeds() {
    return this.getNumberAttribute('max_parameter_name_size_exceeds');
  }
  public set maxParameterNameSizeExceeds(value: number) {
    this._maxParameterNameSizeExceeds = value;
  }
  public resetMaxParameterNameSizeExceeds() {
    this._maxParameterNameSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterNameSizeExceedsInput() {
    return this._maxParameterNameSizeExceeds;
  }

  // max_parameter_name_size_none - computed: false, optional: true, required: false
  private _maxParameterNameSizeNone?: boolean | cdktf.IResolvable; 
  public get maxParameterNameSizeNone() {
    return this.getBooleanAttribute('max_parameter_name_size_none');
  }
  public set maxParameterNameSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxParameterNameSizeNone = value;
  }
  public resetMaxParameterNameSizeNone() {
    this._maxParameterNameSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterNameSizeNoneInput() {
    return this._maxParameterNameSizeNone;
  }

  // max_parameter_value_size_exceeds - computed: false, optional: true, required: false
  private _maxParameterValueSizeExceeds?: number; 
  public get maxParameterValueSizeExceeds() {
    return this.getNumberAttribute('max_parameter_value_size_exceeds');
  }
  public set maxParameterValueSizeExceeds(value: number) {
    this._maxParameterValueSizeExceeds = value;
  }
  public resetMaxParameterValueSizeExceeds() {
    this._maxParameterValueSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterValueSizeExceedsInput() {
    return this._maxParameterValueSizeExceeds;
  }

  // max_parameter_value_size_none - computed: false, optional: true, required: false
  private _maxParameterValueSizeNone?: boolean | cdktf.IResolvable; 
  public get maxParameterValueSizeNone() {
    return this.getBooleanAttribute('max_parameter_value_size_none');
  }
  public set maxParameterValueSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxParameterValueSizeNone = value;
  }
  public resetMaxParameterValueSizeNone() {
    this._maxParameterValueSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParameterValueSizeNoneInput() {
    return this._maxParameterValueSizeNone;
  }

  // max_query_size_exceeds - computed: false, optional: true, required: false
  private _maxQuerySizeExceeds?: number; 
  public get maxQuerySizeExceeds() {
    return this.getNumberAttribute('max_query_size_exceeds');
  }
  public set maxQuerySizeExceeds(value: number) {
    this._maxQuerySizeExceeds = value;
  }
  public resetMaxQuerySizeExceeds() {
    this._maxQuerySizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeExceedsInput() {
    return this._maxQuerySizeExceeds;
  }

  // max_query_size_none - computed: false, optional: true, required: false
  private _maxQuerySizeNone?: boolean | cdktf.IResolvable; 
  public get maxQuerySizeNone() {
    return this.getBooleanAttribute('max_query_size_none');
  }
  public set maxQuerySizeNone(value: boolean | cdktf.IResolvable) {
    this._maxQuerySizeNone = value;
  }
  public resetMaxQuerySizeNone() {
    this._maxQuerySizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuerySizeNoneInput() {
    return this._maxQuerySizeNone;
  }

  // max_request_line_size_exceeds - computed: false, optional: true, required: false
  private _maxRequestLineSizeExceeds?: number; 
  public get maxRequestLineSizeExceeds() {
    return this.getNumberAttribute('max_request_line_size_exceeds');
  }
  public set maxRequestLineSizeExceeds(value: number) {
    this._maxRequestLineSizeExceeds = value;
  }
  public resetMaxRequestLineSizeExceeds() {
    this._maxRequestLineSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestLineSizeExceedsInput() {
    return this._maxRequestLineSizeExceeds;
  }

  // max_request_line_size_none - computed: false, optional: true, required: false
  private _maxRequestLineSizeNone?: boolean | cdktf.IResolvable; 
  public get maxRequestLineSizeNone() {
    return this.getBooleanAttribute('max_request_line_size_none');
  }
  public set maxRequestLineSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxRequestLineSizeNone = value;
  }
  public resetMaxRequestLineSizeNone() {
    this._maxRequestLineSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestLineSizeNoneInput() {
    return this._maxRequestLineSizeNone;
  }

  // max_request_size_exceeds - computed: false, optional: true, required: false
  private _maxRequestSizeExceeds?: number; 
  public get maxRequestSizeExceeds() {
    return this.getNumberAttribute('max_request_size_exceeds');
  }
  public set maxRequestSizeExceeds(value: number) {
    this._maxRequestSizeExceeds = value;
  }
  public resetMaxRequestSizeExceeds() {
    this._maxRequestSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestSizeExceedsInput() {
    return this._maxRequestSizeExceeds;
  }

  // max_request_size_none - computed: false, optional: true, required: false
  private _maxRequestSizeNone?: boolean | cdktf.IResolvable; 
  public get maxRequestSizeNone() {
    return this.getBooleanAttribute('max_request_size_none');
  }
  public set maxRequestSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxRequestSizeNone = value;
  }
  public resetMaxRequestSizeNone() {
    this._maxRequestSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestSizeNoneInput() {
    return this._maxRequestSizeNone;
  }

  // max_url_size_exceeds - computed: false, optional: true, required: false
  private _maxUrlSizeExceeds?: number; 
  public get maxUrlSizeExceeds() {
    return this.getNumberAttribute('max_url_size_exceeds');
  }
  public set maxUrlSizeExceeds(value: number) {
    this._maxUrlSizeExceeds = value;
  }
  public resetMaxUrlSizeExceeds() {
    this._maxUrlSizeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlSizeExceedsInput() {
    return this._maxUrlSizeExceeds;
  }

  // max_url_size_none - computed: false, optional: true, required: false
  private _maxUrlSizeNone?: boolean | cdktf.IResolvable; 
  public get maxUrlSizeNone() {
    return this.getBooleanAttribute('max_url_size_none');
  }
  public set maxUrlSizeNone(value: boolean | cdktf.IResolvable) {
    this._maxUrlSizeNone = value;
  }
  public resetMaxUrlSizeNone() {
    this._maxUrlSizeNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUrlSizeNoneInput() {
    return this._maxUrlSizeNone;
  }
}

export class ServicePolicyRuleListRulesSpecRequestConstraintsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecRequestConstraints[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecRequestConstraintsOutputReference {
    return new ServicePolicyRuleListRulesSpecRequestConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#namespace ServicePolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tenant ServicePolicy#tenant}
  */
  readonly tenant?: string;
}

export function servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsToTerraform(struct?: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined) {
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

export class ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsOutputReference {
    return new ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#segments ServicePolicy#segments}
  */
  readonly segments: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsToTerraform(struct?: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segments.internalValue = value.segments;
    }
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsOutputReference {
    return new ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecSegmentPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#src_any ServicePolicy#src_any}
  */
  readonly srcAny?: boolean | cdktf.IResolvable;
  /**
  * src_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#src_segments ServicePolicy#src_segments}
  */
  readonly srcSegments?: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecSegmentPolicyToTerraform(struct?: ServicePolicyRuleListRulesSpecSegmentPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    src_any: cdktf.booleanToTerraform(struct!.srcAny),
    src_segments: cdktf.listMapper(servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsToTerraform, true)(struct!.srcSegments),
  }
}


export function servicePolicyRuleListRulesSpecSegmentPolicyToHclTerraform(struct?: ServicePolicyRuleListRulesSpecSegmentPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    src_any: {
      value: cdktf.booleanToHclTerraform(struct!.srcAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    src_segments: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsToHclTerraform, true)(struct!.srcSegments),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecSegmentPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecSegmentPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._srcAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAny = this._srcAny;
    }
    if (this._srcSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSegments = this._srcSegments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecSegmentPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._srcAny = undefined;
      this._srcSegments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._srcAny = value.srcAny;
      this._srcSegments.internalValue = value.srcSegments;
    }
  }

  // src_any - computed: false, optional: true, required: false
  private _srcAny?: boolean | cdktf.IResolvable; 
  public get srcAny() {
    return this.getBooleanAttribute('src_any');
  }
  public set srcAny(value: boolean | cdktf.IResolvable) {
    this._srcAny = value;
  }
  public resetSrcAny() {
    this._srcAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAnyInput() {
    return this._srcAny;
  }

  // src_segments - computed: false, optional: true, required: false
  private _srcSegments = new ServicePolicyRuleListRulesSpecSegmentPolicySrcSegmentsList(this, "src_segments", false);
  public get srcSegments() {
    return this._srcSegments;
  }
  public putSrcSegments(value: ServicePolicyRuleListRulesSpecSegmentPolicySrcSegments[] | cdktf.IResolvable) {
    this._srcSegments.internalValue = value;
  }
  public resetSrcSegments() {
    this._srcSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSegmentsInput() {
    return this._srcSegments.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecSegmentPolicyList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecSegmentPolicy[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecSegmentPolicyOutputReference {
    return new ServicePolicyRuleListRulesSpecSegmentPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecServerSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#expressions ServicePolicy#expressions}
  */
  readonly expressions: string[];
}

export function servicePolicyRuleListRulesSpecServerSelectorToTerraform(struct?: ServicePolicyRuleListRulesSpecServerSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function servicePolicyRuleListRulesSpecServerSelectorToHclTerraform(struct?: ServicePolicyRuleListRulesSpecServerSelector | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecServerSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecServerSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecServerSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecServerSelectorList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecServerSelector[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecServerSelectorOutputReference {
    return new ServicePolicyRuleListRulesSpecServerSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#body ServicePolicy#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#body_hash ServicePolicy#body_hash}
  */
  readonly bodyHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#status ServicePolicy#status}
  */
  readonly status?: string;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_hash: cdktf.stringToTerraform(struct!.bodyHash),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_hash: {
      value: cdktf.stringToHclTerraform(struct!.bodyHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyHash = this._bodyHash;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._bodyHash = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._bodyHash = value.bodyHash;
      this._status = value.status;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_hash - computed: false, optional: true, required: false
  private _bodyHash?: string; 
  public get bodyHash() {
    return this.getStringAttribute('body_hash');
  }
  public set bodyHash(value: string) {
    this._bodyHash = value;
  }
  public resetBodyHash() {
    this._bodyHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyHashInput() {
    return this._bodyHash;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#auto_type_header_name ServicePolicy#auto_type_header_name}
  */
  readonly autoTypeHeaderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#inference_header_name ServicePolicy#inference_header_name}
  */
  readonly inferenceHeaderName: string;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_type_header_name: cdktf.stringToTerraform(struct!.autoTypeHeaderName),
    inference_header_name: cdktf.stringToTerraform(struct!.inferenceHeaderName),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_type_header_name: {
      value: cdktf.stringToHclTerraform(struct!.autoTypeHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inference_header_name: {
      value: cdktf.stringToHclTerraform(struct!.inferenceHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoTypeHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTypeHeaderName = this._autoTypeHeaderName;
    }
    if (this._inferenceHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inferenceHeaderName = this._inferenceHeaderName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoTypeHeaderName = undefined;
      this._inferenceHeaderName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoTypeHeaderName = value.autoTypeHeaderName;
      this._inferenceHeaderName = value.inferenceHeaderName;
    }
  }

  // auto_type_header_name - computed: false, optional: false, required: true
  private _autoTypeHeaderName?: string; 
  public get autoTypeHeaderName() {
    return this.getStringAttribute('auto_type_header_name');
  }
  public set autoTypeHeaderName(value: string) {
    this._autoTypeHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTypeHeaderNameInput() {
    return this._autoTypeHeaderName;
  }

  // inference_header_name - computed: false, optional: false, required: true
  private _inferenceHeaderName?: string; 
  public get inferenceHeaderName() {
    return this.getStringAttribute('inference_header_name');
  }
  public set inferenceHeaderName(value: string) {
    this._inferenceHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceHeaderNameInput() {
    return this._inferenceHeaderName;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#no_headers ServicePolicy#no_headers}
  */
  readonly noHeaders?: boolean | cdktf.IResolvable;
  /**
  * append_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#append_headers ServicePolicy#append_headers}
  */
  readonly appendHeaders?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_headers: cdktf.booleanToTerraform(struct!.noHeaders),
    append_headers: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersToTerraform, true)(struct!.appendHeaders),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_headers: {
      value: cdktf.booleanToHclTerraform(struct!.noHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    append_headers: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersToHclTerraform, true)(struct!.appendHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.noHeaders = this._noHeaders;
    }
    if (this._appendHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appendHeaders = this._appendHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noHeaders = undefined;
      this._appendHeaders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noHeaders = value.noHeaders;
      this._appendHeaders.internalValue = value.appendHeaders;
    }
  }

  // no_headers - computed: false, optional: true, required: false
  private _noHeaders?: boolean | cdktf.IResolvable; 
  public get noHeaders() {
    return this.getBooleanAttribute('no_headers');
  }
  public set noHeaders(value: boolean | cdktf.IResolvable) {
    this._noHeaders = value;
  }
  public resetNoHeaders() {
    this._noHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noHeadersInput() {
    return this._noHeaders;
  }

  // append_headers - computed: false, optional: true, required: false
  private _appendHeaders = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeadersList(this, "append_headers", false);
  public get appendHeaders() {
    return this._appendHeaders;
  }
  public putAppendHeaders(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagAppendHeaders[] | cdktf.IResolvable) {
    this._appendHeaders.internalValue = value;
  }
  public resetAppendHeaders() {
    this._appendHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendHeadersInput() {
    return this._appendHeaders.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#uri ServicePolicy#uri}
  */
  readonly uri?: string;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#none ServicePolicy#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#block ServicePolicy#block}
  */
  readonly block?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock[] | cdktf.IResolvable;
  /**
  * flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#flag ServicePolicy#flag}
  */
  readonly flag?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag[] | cdktf.IResolvable;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#redirect ServicePolicy#redirect}
  */
  readonly redirect?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.booleanToTerraform(struct!.none),
    block: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockToTerraform, true)(struct!.block),
    flag: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagToTerraform, true)(struct!.flag),
    redirect: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectToTerraform, true)(struct!.redirect),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockToHclTerraform, true)(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockList",
    },
    flag: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagToHclTerraform, true)(struct!.flag),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagList",
    },
    redirect: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectToHclTerraform, true)(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._block?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block?.internalValue;
    }
    if (this._flag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flag = this._flag?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._block.internalValue = undefined;
      this._flag.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._block.internalValue = value.block;
      this._flag.internalValue = value.flag;
      this._redirect.internalValue = value.redirect;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // block - computed: false, optional: true, required: false
  private _block = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlockList(this, "block", false);
  public get block() {
    return this._block;
  }
  public putBlock(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationBlock[] | cdktf.IResolvable) {
    this._block.internalValue = value;
  }
  public resetBlock() {
    this._block.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block.internalValue;
  }

  // flag - computed: false, optional: true, required: false
  private _flag = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlagList(this, "flag", false);
  public get flag() {
    return this._flag;
  }
  public putFlag(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationFlag[] | cdktf.IResolvable) {
    this._flag.internalValue = value;
  }
  public resetFlag() {
    this._flag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagInput() {
    return this._flag.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirectList(this, "redirect", false);
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationRedirect[] | cdktf.IResolvable) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#status ServicePolicy#status}
  */
  readonly status: string;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions | cdktf.IResolvable): any {
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
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexValues = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexValues = value.regexValues;
      this._status = value.status;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#name ServicePolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#status ServicePolicy#status}
  */
  readonly status: string;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions | cdktf.IResolvable): any {
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
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regexValues = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regexValues = value.regexValues;
      this._status = value.status;
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult {
  /**
  * failure_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#failure_conditions ServicePolicy#failure_conditions}
  */
  readonly failureConditions?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions[] | cdktf.IResolvable;
  /**
  * success_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#success_conditions ServicePolicy#success_conditions}
  */
  readonly successConditions?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_conditions: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsToTerraform, true)(struct!.failureConditions),
    success_conditions: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsToTerraform, true)(struct!.successConditions),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_conditions: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsToHclTerraform, true)(struct!.failureConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsList",
    },
    success_conditions: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsToHclTerraform, true)(struct!.successConditions),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureConditions = this._failureConditions?.internalValue;
    }
    if (this._successConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.successConditions = this._successConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failureConditions.internalValue = undefined;
      this._successConditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failureConditions.internalValue = value.failureConditions;
      this._successConditions.internalValue = value.successConditions;
    }
  }

  // failure_conditions - computed: false, optional: true, required: false
  private _failureConditions = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditionsList(this, "failure_conditions", false);
  public get failureConditions() {
    return this._failureConditions;
  }
  public putFailureConditions(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultFailureConditions[] | cdktf.IResolvable) {
    this._failureConditions.internalValue = value;
  }
  public resetFailureConditions() {
    this._failureConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionsInput() {
    return this._failureConditions.internalValue;
  }

  // success_conditions - computed: false, optional: true, required: false
  private _successConditions = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditionsList(this, "success_conditions", false);
  public get successConditions() {
    return this._successConditions;
  }
  public putSuccessConditions(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultSuccessConditions[] | cdktf.IResolvable) {
    this._successConditions.internalValue = value;
  }
  public resetSuccessConditions() {
    this._successConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionsInput() {
    return this._successConditions.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#allow_goodbot ServicePolicy#allow_goodbot}
  */
  readonly allowGoodbot: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#app_traffic_type ServicePolicy#app_traffic_type}
  */
  readonly appTrafficType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#flow_label ServicePolicy#flow_label}
  */
  readonly flowLabel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#web_scraping ServicePolicy#web_scraping}
  */
  readonly webScraping: boolean | cdktf.IResolvable;
  /**
  * mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#mitigation ServicePolicy#mitigation}
  */
  readonly mitigation?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation[] | cdktf.IResolvable;
  /**
  * transaction_result block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transaction_result ServicePolicy#transaction_result}
  */
  readonly transactionResult?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionToTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_goodbot: cdktf.booleanToTerraform(struct!.allowGoodbot),
    app_traffic_type: cdktf.stringToTerraform(struct!.appTrafficType),
    flow_label: cdktf.stringToTerraform(struct!.flowLabel),
    web_scraping: cdktf.booleanToTerraform(struct!.webScraping),
    mitigation: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationToTerraform, true)(struct!.mitigation),
    transaction_result: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultToTerraform, true)(struct!.transactionResult),
  }
}


export function servicePolicyRuleListRulesSpecShapeProtectedEndpointActionToHclTerraform(struct?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_goodbot: {
      value: cdktf.booleanToHclTerraform(struct!.allowGoodbot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_traffic_type: {
      value: cdktf.stringToHclTerraform(struct!.appTrafficType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_label: {
      value: cdktf.stringToHclTerraform(struct!.flowLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_scraping: {
      value: cdktf.booleanToHclTerraform(struct!.webScraping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mitigation: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationToHclTerraform, true)(struct!.mitigation),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationList",
    },
    transaction_result: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultToHclTerraform, true)(struct!.transactionResult),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowGoodbot !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGoodbot = this._allowGoodbot;
    }
    if (this._appTrafficType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appTrafficType = this._appTrafficType;
    }
    if (this._flowLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabel = this._flowLabel;
    }
    if (this._webScraping !== undefined) {
      hasAnyValues = true;
      internalValueResult.webScraping = this._webScraping;
    }
    if (this._mitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigation = this._mitigation?.internalValue;
    }
    if (this._transactionResult?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionResult = this._transactionResult?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowGoodbot = undefined;
      this._appTrafficType = undefined;
      this._flowLabel = undefined;
      this._webScraping = undefined;
      this._mitigation.internalValue = undefined;
      this._transactionResult.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowGoodbot = value.allowGoodbot;
      this._appTrafficType = value.appTrafficType;
      this._flowLabel = value.flowLabel;
      this._webScraping = value.webScraping;
      this._mitigation.internalValue = value.mitigation;
      this._transactionResult.internalValue = value.transactionResult;
    }
  }

  // allow_goodbot - computed: false, optional: false, required: true
  private _allowGoodbot?: boolean | cdktf.IResolvable; 
  public get allowGoodbot() {
    return this.getBooleanAttribute('allow_goodbot');
  }
  public set allowGoodbot(value: boolean | cdktf.IResolvable) {
    this._allowGoodbot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGoodbotInput() {
    return this._allowGoodbot;
  }

  // app_traffic_type - computed: false, optional: true, required: false
  private _appTrafficType?: string; 
  public get appTrafficType() {
    return this.getStringAttribute('app_traffic_type');
  }
  public set appTrafficType(value: string) {
    this._appTrafficType = value;
  }
  public resetAppTrafficType() {
    this._appTrafficType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTrafficTypeInput() {
    return this._appTrafficType;
  }

  // flow_label - computed: false, optional: false, required: true
  private _flowLabel?: string; 
  public get flowLabel() {
    return this.getStringAttribute('flow_label');
  }
  public set flowLabel(value: string) {
    this._flowLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel;
  }

  // web_scraping - computed: false, optional: false, required: true
  private _webScraping?: boolean | cdktf.IResolvable; 
  public get webScraping() {
    return this.getBooleanAttribute('web_scraping');
  }
  public set webScraping(value: boolean | cdktf.IResolvable) {
    this._webScraping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webScrapingInput() {
    return this._webScraping;
  }

  // mitigation - computed: false, optional: true, required: false
  private _mitigation = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigationList(this, "mitigation", false);
  public get mitigation() {
    return this._mitigation;
  }
  public putMitigation(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionMitigation[] | cdktf.IResolvable) {
    this._mitigation.internalValue = value;
  }
  public resetMitigation() {
    this._mitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationInput() {
    return this._mitigation.internalValue;
  }

  // transaction_result - computed: false, optional: true, required: false
  private _transactionResult = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResultList(this, "transaction_result", false);
  public get transactionResult() {
    return this._transactionResult;
  }
  public putTransactionResult(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionTransactionResult[] | cdktf.IResolvable) {
    this._transactionResult.internalValue = value;
  }
  public resetTransactionResult() {
    this._transactionResult.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionResultInput() {
    return this._transactionResult.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionOutputReference {
    return new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#classes ServicePolicy#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#excluded_values ServicePolicy#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function servicePolicyRuleListRulesSpecTlsFingerprintMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecTlsFingerprintMatcher | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecTlsFingerprintMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecTlsFingerprintMatcher | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecTlsFingerprintMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecTlsFingerprintMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecTlsFingerprintMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecTlsFingerprintMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecTlsFingerprintMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecTlsFingerprintMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecUrlMatcherUrlItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#domain_regex ServicePolicy#domain_regex}
  */
  readonly domainRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#domain_value ServicePolicy#domain_value}
  */
  readonly domainValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#path_prefix ServicePolicy#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#path_regex ServicePolicy#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#path_value ServicePolicy#path_value}
  */
  readonly pathValue?: string;
}

export function servicePolicyRuleListRulesSpecUrlMatcherUrlItemsToTerraform(struct?: ServicePolicyRuleListRulesSpecUrlMatcherUrlItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_regex: cdktf.stringToTerraform(struct!.domainRegex),
    domain_value: cdktf.stringToTerraform(struct!.domainValue),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    path_value: cdktf.stringToTerraform(struct!.pathValue),
  }
}


export function servicePolicyRuleListRulesSpecUrlMatcherUrlItemsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecUrlMatcherUrlItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_regex: {
      value: cdktf.stringToHclTerraform(struct!.domainRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_value: {
      value: cdktf.stringToHclTerraform(struct!.domainValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_value: {
      value: cdktf.stringToHclTerraform(struct!.pathValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecUrlMatcherUrlItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecUrlMatcherUrlItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainRegex = this._domainRegex;
    }
    if (this._domainValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainValue = this._domainValue;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._pathValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathValue = this._pathValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecUrlMatcherUrlItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainRegex = undefined;
      this._domainValue = undefined;
      this._pathPrefix = undefined;
      this._pathRegex = undefined;
      this._pathValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainRegex = value.domainRegex;
      this._domainValue = value.domainValue;
      this._pathPrefix = value.pathPrefix;
      this._pathRegex = value.pathRegex;
      this._pathValue = value.pathValue;
    }
  }

  // domain_regex - computed: false, optional: true, required: false
  private _domainRegex?: string; 
  public get domainRegex() {
    return this.getStringAttribute('domain_regex');
  }
  public set domainRegex(value: string) {
    this._domainRegex = value;
  }
  public resetDomainRegex() {
    this._domainRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainRegexInput() {
    return this._domainRegex;
  }

  // domain_value - computed: false, optional: true, required: false
  private _domainValue?: string; 
  public get domainValue() {
    return this.getStringAttribute('domain_value');
  }
  public set domainValue(value: string) {
    this._domainValue = value;
  }
  public resetDomainValue() {
    this._domainValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainValueInput() {
    return this._domainValue;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // path_value - computed: false, optional: true, required: false
  private _pathValue?: string; 
  public get pathValue() {
    return this.getStringAttribute('path_value');
  }
  public set pathValue(value: string) {
    this._pathValue = value;
  }
  public resetPathValue() {
    this._pathValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathValueInput() {
    return this._pathValue;
  }
}

export class ServicePolicyRuleListRulesSpecUrlMatcherUrlItemsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecUrlMatcherUrlItems[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecUrlMatcherUrlItemsOutputReference {
    return new ServicePolicyRuleListRulesSpecUrlMatcherUrlItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecUrlMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#invert_matcher ServicePolicy#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * url_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#url_items ServicePolicy#url_items}
  */
  readonly urlItems?: ServicePolicyRuleListRulesSpecUrlMatcherUrlItems[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecUrlMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecUrlMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    url_items: cdktf.listMapper(servicePolicyRuleListRulesSpecUrlMatcherUrlItemsToTerraform, true)(struct!.urlItems),
  }
}


export function servicePolicyRuleListRulesSpecUrlMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecUrlMatcher | cdktf.IResolvable): any {
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
    url_items: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecUrlMatcherUrlItemsToHclTerraform, true)(struct!.urlItems),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecUrlMatcherUrlItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecUrlMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecUrlMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._urlItems?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlItems = this._urlItems?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecUrlMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invertMatcher = undefined;
      this._urlItems.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invertMatcher = value.invertMatcher;
      this._urlItems.internalValue = value.urlItems;
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

  // url_items - computed: false, optional: true, required: false
  private _urlItems = new ServicePolicyRuleListRulesSpecUrlMatcherUrlItemsList(this, "url_items", false);
  public get urlItems() {
    return this._urlItems;
  }
  public putUrlItems(value: ServicePolicyRuleListRulesSpecUrlMatcherUrlItems[] | cdktf.IResolvable) {
    this._urlItems.internalValue = value;
  }
  public resetUrlItems() {
    this._urlItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlItemsInput() {
    return this._urlItems.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecUrlMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecUrlMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecUrlMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecUrlMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecUserIdentityMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
}

export function servicePolicyRuleListRulesSpecUserIdentityMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecUserIdentityMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function servicePolicyRuleListRulesSpecUserIdentityMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecUserIdentityMatcher | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecUserIdentityMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecUserIdentityMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecUserIdentityMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
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
}

export class ServicePolicyRuleListRulesSpecUserIdentityMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecUserIdentityMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecUserIdentityMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecUserIdentityMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecVirtualHostMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#transformers ServicePolicy#transformers}
  */
  readonly transformers?: string[];
}

export function servicePolicyRuleListRulesSpecVirtualHostMatcherToTerraform(struct?: ServicePolicyRuleListRulesSpecVirtualHostMatcher | cdktf.IResolvable): any {
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


export function servicePolicyRuleListRulesSpecVirtualHostMatcherToHclTerraform(struct?: ServicePolicyRuleListRulesSpecVirtualHostMatcher | cdktf.IResolvable): any {
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

export class ServicePolicyRuleListRulesSpecVirtualHostMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecVirtualHostMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ServicePolicyRuleListRulesSpecVirtualHostMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyRuleListRulesSpecVirtualHostMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecVirtualHostMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecVirtualHostMatcherOutputReference {
    return new ServicePolicyRuleListRulesSpecVirtualHostMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#context ServicePolicy#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#context_name ServicePolicy#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exclude_attack_type ServicePolicy#exclude_attack_type}
  */
  readonly excludeAttackType: string;
}

export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_attack_type: cdktf.stringToTerraform(struct!.excludeAttackType),
  }
}


export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attack_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeAttackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeAttackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackType = this._excludeAttackType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeAttackType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeAttackType = value.excludeAttackType;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_attack_type - computed: false, optional: false, required: true
  private _excludeAttackType?: string; 
  public get excludeAttackType() {
    return this.getStringAttribute('exclude_attack_type');
  }
  public set excludeAttackType(value: string) {
    this._excludeAttackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeInput() {
    return this._excludeAttackType;
  }
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference {
    return new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#bot_name ServicePolicy#bot_name}
  */
  readonly botName: string;
}

export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesToTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_name: cdktf.stringToTerraform(struct!.botName),
  }
}


export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesToHclTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botName = value.botName;
    }
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesOutputReference {
    return new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#context ServicePolicy#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#context_name ServicePolicy#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#signature_id ServicePolicy#signature_id}
  */
  readonly signatureId: number;
}

export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsToTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    signature_id: cdktf.numberToTerraform(struct!.signatureId),
  }
}


export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_id: {
      value: cdktf.numberToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._signatureId = value.signatureId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsOutputReference {
    return new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#context ServicePolicy#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#context_name ServicePolicy#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exclude_violation ServicePolicy#exclude_violation}
  */
  readonly excludeViolation: string;
}

export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsToTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_violation: cdktf.stringToTerraform(struct!.excludeViolation),
  }
}


export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsToHclTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_violation: {
      value: cdktf.stringToHclTerraform(struct!.excludeViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolation = this._excludeViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeViolation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeViolation = value.excludeViolation;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_violation - computed: false, optional: false, required: true
  private _excludeViolation?: string; 
  public get excludeViolation() {
    return this.getStringAttribute('exclude_violation');
  }
  public set excludeViolation(value: string) {
    this._excludeViolation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationInput() {
    return this._excludeViolation;
  }
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsOutputReference {
    return new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl {
  /**
  * exclude_attack_type_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exclude_attack_type_contexts ServicePolicy#exclude_attack_type_contexts}
  */
  readonly excludeAttackTypeContexts?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable;
  /**
  * exclude_bot_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exclude_bot_names ServicePolicy#exclude_bot_names}
  */
  readonly excludeBotNames?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames[] | cdktf.IResolvable;
  /**
  * exclude_signature_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exclude_signature_contexts ServicePolicy#exclude_signature_contexts}
  */
  readonly excludeSignatureContexts?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable;
  /**
  * exclude_violation_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exclude_violation_contexts ServicePolicy#exclude_violation_contexts}
  */
  readonly excludeViolationContexts?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlToTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_attack_type_contexts: cdktf.listMapper(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform, true)(struct!.excludeAttackTypeContexts),
    exclude_bot_names: cdktf.listMapper(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesToTerraform, true)(struct!.excludeBotNames),
    exclude_signature_contexts: cdktf.listMapper(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsToTerraform, true)(struct!.excludeSignatureContexts),
    exclude_violation_contexts: cdktf.listMapper(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsToTerraform, true)(struct!.excludeViolationContexts),
  }
}


export function servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlToHclTerraform(struct?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_attack_type_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform, true)(struct!.excludeAttackTypeContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsList",
    },
    exclude_bot_names: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesToHclTerraform, true)(struct!.excludeBotNames),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesList",
    },
    exclude_signature_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform, true)(struct!.excludeSignatureContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsList",
    },
    exclude_violation_contexts: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsToHclTerraform, true)(struct!.excludeViolationContexts),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAttackTypeContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackTypeContexts = this._excludeAttackTypeContexts?.internalValue;
    }
    if (this._excludeBotNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotNames = this._excludeBotNames?.internalValue;
    }
    if (this._excludeSignatureContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSignatureContexts = this._excludeSignatureContexts?.internalValue;
    }
    if (this._excludeViolationContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolationContexts = this._excludeViolationContexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeAttackTypeContexts.internalValue = undefined;
      this._excludeBotNames.internalValue = undefined;
      this._excludeSignatureContexts.internalValue = undefined;
      this._excludeViolationContexts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeAttackTypeContexts.internalValue = value.excludeAttackTypeContexts;
      this._excludeBotNames.internalValue = value.excludeBotNames;
      this._excludeSignatureContexts.internalValue = value.excludeSignatureContexts;
      this._excludeViolationContexts.internalValue = value.excludeViolationContexts;
    }
  }

  // exclude_attack_type_contexts - computed: false, optional: true, required: false
  private _excludeAttackTypeContexts = new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContextsList(this, "exclude_attack_type_contexts", false);
  public get excludeAttackTypeContexts() {
    return this._excludeAttackTypeContexts;
  }
  public putExcludeAttackTypeContexts(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable) {
    this._excludeAttackTypeContexts.internalValue = value;
  }
  public resetExcludeAttackTypeContexts() {
    this._excludeAttackTypeContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeContextsInput() {
    return this._excludeAttackTypeContexts.internalValue;
  }

  // exclude_bot_names - computed: false, optional: true, required: false
  private _excludeBotNames = new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNamesList(this, "exclude_bot_names", false);
  public get excludeBotNames() {
    return this._excludeBotNames;
  }
  public putExcludeBotNames(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeBotNames[] | cdktf.IResolvable) {
    this._excludeBotNames.internalValue = value;
  }
  public resetExcludeBotNames() {
    this._excludeBotNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotNamesInput() {
    return this._excludeBotNames.internalValue;
  }

  // exclude_signature_contexts - computed: false, optional: true, required: false
  private _excludeSignatureContexts = new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContextsList(this, "exclude_signature_contexts", false);
  public get excludeSignatureContexts() {
    return this._excludeSignatureContexts;
  }
  public putExcludeSignatureContexts(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable) {
    this._excludeSignatureContexts.internalValue = value;
  }
  public resetExcludeSignatureContexts() {
    this._excludeSignatureContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignatureContextsInput() {
    return this._excludeSignatureContexts.internalValue;
  }

  // exclude_violation_contexts - computed: false, optional: true, required: false
  private _excludeViolationContexts = new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContextsList(this, "exclude_violation_contexts", false);
  public get excludeViolationContexts() {
    return this._excludeViolationContexts;
  }
  public putExcludeViolationContexts(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable) {
    this._excludeViolationContexts.internalValue = value;
  }
  public resetExcludeViolationContexts() {
    this._excludeViolationContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationContextsInput() {
    return this._excludeViolationContexts.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlOutputReference {
    return new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpecWafAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#none ServicePolicy#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#waf_in_monitoring_mode ServicePolicy#waf_in_monitoring_mode}
  */
  readonly wafInMonitoringMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#waf_skip_processing ServicePolicy#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * app_firewall_detection_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#app_firewall_detection_control ServicePolicy#app_firewall_detection_control}
  */
  readonly appFirewallDetectionControl?: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecWafActionToTerraform(struct?: ServicePolicyRuleListRulesSpecWafAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.booleanToTerraform(struct!.none),
    waf_in_monitoring_mode: cdktf.booleanToTerraform(struct!.wafInMonitoringMode),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    app_firewall_detection_control: cdktf.listMapper(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlToTerraform, true)(struct!.appFirewallDetectionControl),
  }
}


export function servicePolicyRuleListRulesSpecWafActionToHclTerraform(struct?: ServicePolicyRuleListRulesSpecWafAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waf_in_monitoring_mode: {
      value: cdktf.booleanToHclTerraform(struct!.wafInMonitoringMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall_detection_control: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlToHclTerraform, true)(struct!.appFirewallDetectionControl),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecWafActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpecWafAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._wafInMonitoringMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafInMonitoringMode = this._wafInMonitoringMode;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._appFirewallDetectionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewallDetectionControl = this._appFirewallDetectionControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpecWafAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._wafInMonitoringMode = undefined;
      this._wafSkipProcessing = undefined;
      this._appFirewallDetectionControl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._wafInMonitoringMode = value.wafInMonitoringMode;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._appFirewallDetectionControl.internalValue = value.appFirewallDetectionControl;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // waf_in_monitoring_mode - computed: false, optional: true, required: false
  private _wafInMonitoringMode?: boolean | cdktf.IResolvable; 
  public get wafInMonitoringMode() {
    return this.getBooleanAttribute('waf_in_monitoring_mode');
  }
  public set wafInMonitoringMode(value: boolean | cdktf.IResolvable) {
    this._wafInMonitoringMode = value;
  }
  public resetWafInMonitoringMode() {
    this._wafInMonitoringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInMonitoringModeInput() {
    return this._wafInMonitoringMode;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // app_firewall_detection_control - computed: false, optional: true, required: false
  private _appFirewallDetectionControl = new ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControlList(this, "app_firewall_detection_control", false);
  public get appFirewallDetectionControl() {
    return this._appFirewallDetectionControl;
  }
  public putAppFirewallDetectionControl(value: ServicePolicyRuleListRulesSpecWafActionAppFirewallDetectionControl[] | cdktf.IResolvable) {
    this._appFirewallDetectionControl.internalValue = value;
  }
  public resetAppFirewallDetectionControl() {
    this._appFirewallDetectionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallDetectionControlInput() {
    return this._appFirewallDetectionControl.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecWafActionList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpecWafAction[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecWafActionOutputReference {
    return new ServicePolicyRuleListRulesSpecWafActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRulesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#action ServicePolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#any_asn ServicePolicy#any_asn}
  */
  readonly anyAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#any_client ServicePolicy#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#any_dst_asn ServicePolicy#any_dst_asn}
  */
  readonly anyDstAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#any_dst_ip ServicePolicy#any_dst_ip}
  */
  readonly anyDstIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#any_ip ServicePolicy#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#challenge_action ServicePolicy#challenge_action}
  */
  readonly challengeAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#client_name ServicePolicy#client_name}
  */
  readonly clientName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#expiration_timestamp ServicePolicy#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#scheme ServicePolicy#scheme}
  */
  readonly scheme?: string[];
  /**
  * api_group_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#api_group_matcher ServicePolicy#api_group_matcher}
  */
  readonly apiGroupMatcher?: ServicePolicyRuleListRulesSpecApiGroupMatcher[] | cdktf.IResolvable;
  /**
  * arg_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#arg_matchers ServicePolicy#arg_matchers}
  */
  readonly argMatchers?: ServicePolicyRuleListRulesSpecArgMatchers[] | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_list ServicePolicy#asn_list}
  */
  readonly asnList?: ServicePolicyRuleListRulesSpecAsnListStruct[] | cdktf.IResolvable;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#asn_matcher ServicePolicy#asn_matcher}
  */
  readonly asnMatcher?: ServicePolicyRuleListRulesSpecAsnMatcher[] | cdktf.IResolvable;
  /**
  * body_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#body_matcher ServicePolicy#body_matcher}
  */
  readonly bodyMatcher?: ServicePolicyRuleListRulesSpecBodyMatcher[] | cdktf.IResolvable;
  /**
  * bot_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#bot_action ServicePolicy#bot_action}
  */
  readonly botAction?: ServicePolicyRuleListRulesSpecBotAction[] | cdktf.IResolvable;
  /**
  * client_name_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#client_name_matcher ServicePolicy#client_name_matcher}
  */
  readonly clientNameMatcher?: ServicePolicyRuleListRulesSpecClientNameMatcher[] | cdktf.IResolvable;
  /**
  * client_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#client_role ServicePolicy#client_role}
  */
  readonly clientRole?: ServicePolicyRuleListRulesSpecClientRole[] | cdktf.IResolvable;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#client_selector ServicePolicy#client_selector}
  */
  readonly clientSelector?: ServicePolicyRuleListRulesSpecClientSelector[] | cdktf.IResolvable;
  /**
  * content_rewrite_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#content_rewrite_action ServicePolicy#content_rewrite_action}
  */
  readonly contentRewriteAction?: ServicePolicyRuleListRulesSpecContentRewriteAction[] | cdktf.IResolvable;
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#cookie_matchers ServicePolicy#cookie_matchers}
  */
  readonly cookieMatchers?: ServicePolicyRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable;
  /**
  * domain_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#domain_matcher ServicePolicy#domain_matcher}
  */
  readonly domainMatcher?: ServicePolicyRuleListRulesSpecDomainMatcher[] | cdktf.IResolvable;
  /**
  * dst_asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#dst_asn_list ServicePolicy#dst_asn_list}
  */
  readonly dstAsnList?: ServicePolicyRuleListRulesSpecDstAsnListStruct[] | cdktf.IResolvable;
  /**
  * dst_asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#dst_asn_matcher ServicePolicy#dst_asn_matcher}
  */
  readonly dstAsnMatcher?: ServicePolicyRuleListRulesSpecDstAsnMatcher[] | cdktf.IResolvable;
  /**
  * dst_ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#dst_ip_matcher ServicePolicy#dst_ip_matcher}
  */
  readonly dstIpMatcher?: ServicePolicyRuleListRulesSpecDstIpMatcher[] | cdktf.IResolvable;
  /**
  * dst_ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#dst_ip_prefix_list ServicePolicy#dst_ip_prefix_list}
  */
  readonly dstIpPrefixList?: ServicePolicyRuleListRulesSpecDstIpPrefixListStruct[] | cdktf.IResolvable;
  /**
  * forwarding_class block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#forwarding_class ServicePolicy#forwarding_class}
  */
  readonly forwardingClass?: ServicePolicyRuleListRulesSpecForwardingClass[] | cdktf.IResolvable;
  /**
  * goto_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#goto_policy ServicePolicy#goto_policy}
  */
  readonly gotoPolicy?: ServicePolicyRuleListRulesSpecGotoPolicy[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#headers ServicePolicy#headers}
  */
  readonly headers?: ServicePolicyRuleListRulesSpecHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#http_method ServicePolicy#http_method}
  */
  readonly httpMethod?: ServicePolicyRuleListRulesSpecHttpMethod[] | cdktf.IResolvable;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_matcher ServicePolicy#ip_matcher}
  */
  readonly ipMatcher?: ServicePolicyRuleListRulesSpecIpMatcher[] | cdktf.IResolvable;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_prefix_list ServicePolicy#ip_prefix_list}
  */
  readonly ipPrefixList?: ServicePolicyRuleListRulesSpecIpPrefixListStruct[] | cdktf.IResolvable;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ip_threat_category_list ServicePolicy#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct[] | cdktf.IResolvable;
  /**
  * ja4_tls_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#ja4_tls_fingerprint ServicePolicy#ja4_tls_fingerprint}
  */
  readonly ja4TlsFingerprint?: ServicePolicyRuleListRulesSpecJa4TlsFingerprint[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#jwt_claims ServicePolicy#jwt_claims}
  */
  readonly jwtClaims?: ServicePolicyRuleListRulesSpecJwtClaims[] | cdktf.IResolvable;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#label_matcher ServicePolicy#label_matcher}
  */
  readonly labelMatcher?: ServicePolicyRuleListRulesSpecLabelMatcher[] | cdktf.IResolvable;
  /**
  * mum_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#mum_action ServicePolicy#mum_action}
  */
  readonly mumAction?: ServicePolicyRuleListRulesSpecMumAction[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#path ServicePolicy#path}
  */
  readonly path?: ServicePolicyRuleListRulesSpecPath[] | cdktf.IResolvable;
  /**
  * port_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#port_matcher ServicePolicy#port_matcher}
  */
  readonly portMatcher?: ServicePolicyRuleListRulesSpecPortMatcher[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#query_params ServicePolicy#query_params}
  */
  readonly queryParams?: ServicePolicyRuleListRulesSpecQueryParams[] | cdktf.IResolvable;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#rate_limiter ServicePolicy#rate_limiter}
  */
  readonly rateLimiter?: ServicePolicyRuleListRulesSpecRateLimiter[] | cdktf.IResolvable;
  /**
  * request_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#request_constraints ServicePolicy#request_constraints}
  */
  readonly requestConstraints?: ServicePolicyRuleListRulesSpecRequestConstraints[] | cdktf.IResolvable;
  /**
  * segment_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#segment_policy ServicePolicy#segment_policy}
  */
  readonly segmentPolicy?: ServicePolicyRuleListRulesSpecSegmentPolicy[] | cdktf.IResolvable;
  /**
  * server_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#server_selector ServicePolicy#server_selector}
  */
  readonly serverSelector?: ServicePolicyRuleListRulesSpecServerSelector[] | cdktf.IResolvable;
  /**
  * shape_protected_endpoint_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#shape_protected_endpoint_action ServicePolicy#shape_protected_endpoint_action}
  */
  readonly shapeProtectedEndpointAction?: ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#tls_fingerprint_matcher ServicePolicy#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: ServicePolicyRuleListRulesSpecTlsFingerprintMatcher[] | cdktf.IResolvable;
  /**
  * url_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#url_matcher ServicePolicy#url_matcher}
  */
  readonly urlMatcher?: ServicePolicyRuleListRulesSpecUrlMatcher[] | cdktf.IResolvable;
  /**
  * user_identity_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#user_identity_matcher ServicePolicy#user_identity_matcher}
  */
  readonly userIdentityMatcher?: ServicePolicyRuleListRulesSpecUserIdentityMatcher[] | cdktf.IResolvable;
  /**
  * virtual_host_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#virtual_host_matcher ServicePolicy#virtual_host_matcher}
  */
  readonly virtualHostMatcher?: ServicePolicyRuleListRulesSpecVirtualHostMatcher[] | cdktf.IResolvable;
  /**
  * waf_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#waf_action ServicePolicy#waf_action}
  */
  readonly wafAction?: ServicePolicyRuleListRulesSpecWafAction[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesSpecToTerraform(struct?: ServicePolicyRuleListRulesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    any_asn: cdktf.booleanToTerraform(struct!.anyAsn),
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_dst_asn: cdktf.booleanToTerraform(struct!.anyDstAsn),
    any_dst_ip: cdktf.booleanToTerraform(struct!.anyDstIp),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    challenge_action: cdktf.stringToTerraform(struct!.challengeAction),
    client_name: cdktf.stringToTerraform(struct!.clientName),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    scheme: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scheme),
    api_group_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecApiGroupMatcherToTerraform, true)(struct!.apiGroupMatcher),
    arg_matchers: cdktf.listMapper(servicePolicyRuleListRulesSpecArgMatchersToTerraform, true)(struct!.argMatchers),
    asn_list: cdktf.listMapper(servicePolicyRuleListRulesSpecAsnListStructToTerraform, true)(struct!.asnList),
    asn_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecAsnMatcherToTerraform, true)(struct!.asnMatcher),
    body_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecBodyMatcherToTerraform, true)(struct!.bodyMatcher),
    bot_action: cdktf.listMapper(servicePolicyRuleListRulesSpecBotActionToTerraform, true)(struct!.botAction),
    client_name_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecClientNameMatcherToTerraform, true)(struct!.clientNameMatcher),
    client_role: cdktf.listMapper(servicePolicyRuleListRulesSpecClientRoleToTerraform, true)(struct!.clientRole),
    client_selector: cdktf.listMapper(servicePolicyRuleListRulesSpecClientSelectorToTerraform, true)(struct!.clientSelector),
    content_rewrite_action: cdktf.listMapper(servicePolicyRuleListRulesSpecContentRewriteActionToTerraform, true)(struct!.contentRewriteAction),
    cookie_matchers: cdktf.listMapper(servicePolicyRuleListRulesSpecCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    domain_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecDomainMatcherToTerraform, true)(struct!.domainMatcher),
    dst_asn_list: cdktf.listMapper(servicePolicyRuleListRulesSpecDstAsnListStructToTerraform, true)(struct!.dstAsnList),
    dst_asn_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecDstAsnMatcherToTerraform, true)(struct!.dstAsnMatcher),
    dst_ip_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecDstIpMatcherToTerraform, true)(struct!.dstIpMatcher),
    dst_ip_prefix_list: cdktf.listMapper(servicePolicyRuleListRulesSpecDstIpPrefixListStructToTerraform, true)(struct!.dstIpPrefixList),
    forwarding_class: cdktf.listMapper(servicePolicyRuleListRulesSpecForwardingClassToTerraform, true)(struct!.forwardingClass),
    goto_policy: cdktf.listMapper(servicePolicyRuleListRulesSpecGotoPolicyToTerraform, true)(struct!.gotoPolicy),
    headers: cdktf.listMapper(servicePolicyRuleListRulesSpecHeadersToTerraform, true)(struct!.headers),
    http_method: cdktf.listMapper(servicePolicyRuleListRulesSpecHttpMethodToTerraform, true)(struct!.httpMethod),
    ip_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecIpMatcherToTerraform, true)(struct!.ipMatcher),
    ip_prefix_list: cdktf.listMapper(servicePolicyRuleListRulesSpecIpPrefixListStructToTerraform, true)(struct!.ipPrefixList),
    ip_threat_category_list: cdktf.listMapper(servicePolicyRuleListRulesSpecIpThreatCategoryListStructToTerraform, true)(struct!.ipThreatCategoryList),
    ja4_tls_fingerprint: cdktf.listMapper(servicePolicyRuleListRulesSpecJa4TlsFingerprintToTerraform, true)(struct!.ja4TlsFingerprint),
    jwt_claims: cdktf.listMapper(servicePolicyRuleListRulesSpecJwtClaimsToTerraform, true)(struct!.jwtClaims),
    label_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecLabelMatcherToTerraform, true)(struct!.labelMatcher),
    mum_action: cdktf.listMapper(servicePolicyRuleListRulesSpecMumActionToTerraform, true)(struct!.mumAction),
    path: cdktf.listMapper(servicePolicyRuleListRulesSpecPathToTerraform, true)(struct!.path),
    port_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecPortMatcherToTerraform, true)(struct!.portMatcher),
    query_params: cdktf.listMapper(servicePolicyRuleListRulesSpecQueryParamsToTerraform, true)(struct!.queryParams),
    rate_limiter: cdktf.listMapper(servicePolicyRuleListRulesSpecRateLimiterToTerraform, true)(struct!.rateLimiter),
    request_constraints: cdktf.listMapper(servicePolicyRuleListRulesSpecRequestConstraintsToTerraform, true)(struct!.requestConstraints),
    segment_policy: cdktf.listMapper(servicePolicyRuleListRulesSpecSegmentPolicyToTerraform, true)(struct!.segmentPolicy),
    server_selector: cdktf.listMapper(servicePolicyRuleListRulesSpecServerSelectorToTerraform, true)(struct!.serverSelector),
    shape_protected_endpoint_action: cdktf.listMapper(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionToTerraform, true)(struct!.shapeProtectedEndpointAction),
    tls_fingerprint_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecTlsFingerprintMatcherToTerraform, true)(struct!.tlsFingerprintMatcher),
    url_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecUrlMatcherToTerraform, true)(struct!.urlMatcher),
    user_identity_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecUserIdentityMatcherToTerraform, true)(struct!.userIdentityMatcher),
    virtual_host_matcher: cdktf.listMapper(servicePolicyRuleListRulesSpecVirtualHostMatcherToTerraform, true)(struct!.virtualHostMatcher),
    waf_action: cdktf.listMapper(servicePolicyRuleListRulesSpecWafActionToTerraform, true)(struct!.wafAction),
  }
}


export function servicePolicyRuleListRulesSpecToHclTerraform(struct?: ServicePolicyRuleListRulesSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_asn: {
      value: cdktf.booleanToHclTerraform(struct!.anyAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_dst_asn: {
      value: cdktf.booleanToHclTerraform(struct!.anyDstAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_dst_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyDstIp),
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
    challenge_action: {
      value: cdktf.stringToHclTerraform(struct!.challengeAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_name: {
      value: cdktf.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scheme),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api_group_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecApiGroupMatcherToHclTerraform, true)(struct!.apiGroupMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecApiGroupMatcherList",
    },
    arg_matchers: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecArgMatchersToHclTerraform, true)(struct!.argMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecArgMatchersList",
    },
    asn_list: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecAsnListStructToHclTerraform, true)(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecAsnListStructList",
    },
    asn_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecAsnMatcherToHclTerraform, true)(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecAsnMatcherList",
    },
    body_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecBodyMatcherToHclTerraform, true)(struct!.bodyMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecBodyMatcherList",
    },
    bot_action: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecBotActionToHclTerraform, true)(struct!.botAction),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecBotActionList",
    },
    client_name_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecClientNameMatcherToHclTerraform, true)(struct!.clientNameMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecClientNameMatcherList",
    },
    client_role: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecClientRoleToHclTerraform, true)(struct!.clientRole),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecClientRoleList",
    },
    client_selector: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecClientSelectorToHclTerraform, true)(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecClientSelectorList",
    },
    content_rewrite_action: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecContentRewriteActionToHclTerraform, true)(struct!.contentRewriteAction),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecContentRewriteActionList",
    },
    cookie_matchers: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecCookieMatchersList",
    },
    domain_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDomainMatcherToHclTerraform, true)(struct!.domainMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDomainMatcherList",
    },
    dst_asn_list: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDstAsnListStructToHclTerraform, true)(struct!.dstAsnList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDstAsnListStructList",
    },
    dst_asn_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDstAsnMatcherToHclTerraform, true)(struct!.dstAsnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDstAsnMatcherList",
    },
    dst_ip_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDstIpMatcherToHclTerraform, true)(struct!.dstIpMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDstIpMatcherList",
    },
    dst_ip_prefix_list: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecDstIpPrefixListStructToHclTerraform, true)(struct!.dstIpPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecDstIpPrefixListStructList",
    },
    forwarding_class: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecForwardingClassToHclTerraform, true)(struct!.forwardingClass),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecForwardingClassList",
    },
    goto_policy: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecGotoPolicyToHclTerraform, true)(struct!.gotoPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecGotoPolicyList",
    },
    headers: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecHeadersList",
    },
    http_method: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecHttpMethodToHclTerraform, true)(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecHttpMethodList",
    },
    ip_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecIpMatcherToHclTerraform, true)(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecIpMatcherList",
    },
    ip_prefix_list: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecIpPrefixListStructToHclTerraform, true)(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecIpThreatCategoryListStructToHclTerraform, true)(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecIpThreatCategoryListStructList",
    },
    ja4_tls_fingerprint: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecJa4TlsFingerprintToHclTerraform, true)(struct!.ja4TlsFingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecJa4TlsFingerprintList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecJwtClaimsList",
    },
    label_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecLabelMatcherToHclTerraform, true)(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecLabelMatcherList",
    },
    mum_action: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecMumActionToHclTerraform, true)(struct!.mumAction),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecMumActionList",
    },
    path: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecPathToHclTerraform, true)(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecPathList",
    },
    port_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecPortMatcherToHclTerraform, true)(struct!.portMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecPortMatcherList",
    },
    query_params: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecQueryParamsList",
    },
    rate_limiter: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecRateLimiterToHclTerraform, true)(struct!.rateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecRateLimiterList",
    },
    request_constraints: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecRequestConstraintsToHclTerraform, true)(struct!.requestConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecRequestConstraintsList",
    },
    segment_policy: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecSegmentPolicyToHclTerraform, true)(struct!.segmentPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecSegmentPolicyList",
    },
    server_selector: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecServerSelectorToHclTerraform, true)(struct!.serverSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecServerSelectorList",
    },
    shape_protected_endpoint_action: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecShapeProtectedEndpointActionToHclTerraform, true)(struct!.shapeProtectedEndpointAction),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionList",
    },
    tls_fingerprint_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecTlsFingerprintMatcherToHclTerraform, true)(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecTlsFingerprintMatcherList",
    },
    url_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecUrlMatcherToHclTerraform, true)(struct!.urlMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecUrlMatcherList",
    },
    user_identity_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecUserIdentityMatcherToHclTerraform, true)(struct!.userIdentityMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecUserIdentityMatcherList",
    },
    virtual_host_matcher: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecVirtualHostMatcherToHclTerraform, true)(struct!.virtualHostMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecVirtualHostMatcherList",
    },
    waf_action: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecWafActionToHclTerraform, true)(struct!.wafAction),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecWafActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRulesSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._anyAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyAsn = this._anyAsn;
    }
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyDstAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDstAsn = this._anyDstAsn;
    }
    if (this._anyDstIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDstIp = this._anyDstIp;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._challengeAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeAction = this._challengeAction;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._apiGroupMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroupMatcher = this._apiGroupMatcher?.internalValue;
    }
    if (this._argMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argMatchers = this._argMatchers?.internalValue;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._bodyMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyMatcher = this._bodyMatcher?.internalValue;
    }
    if (this._botAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botAction = this._botAction?.internalValue;
    }
    if (this._clientNameMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNameMatcher = this._clientNameMatcher?.internalValue;
    }
    if (this._clientRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRole = this._clientRole?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._contentRewriteAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRewriteAction = this._contentRewriteAction?.internalValue;
    }
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._domainMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatcher = this._domainMatcher?.internalValue;
    }
    if (this._dstAsnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAsnList = this._dstAsnList?.internalValue;
    }
    if (this._dstAsnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAsnMatcher = this._dstAsnMatcher?.internalValue;
    }
    if (this._dstIpMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpMatcher = this._dstIpMatcher?.internalValue;
    }
    if (this._dstIpPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpPrefixList = this._dstIpPrefixList?.internalValue;
    }
    if (this._forwardingClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingClass = this._forwardingClass?.internalValue;
    }
    if (this._gotoPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotoPolicy = this._gotoPolicy?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
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
    if (this._ja4TlsFingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4TlsFingerprint = this._ja4TlsFingerprint?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    if (this._labelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatcher = this._labelMatcher?.internalValue;
    }
    if (this._mumAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mumAction = this._mumAction?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._portMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMatcher = this._portMatcher?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    if (this._requestConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestConstraints = this._requestConstraints?.internalValue;
    }
    if (this._segmentPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPolicy = this._segmentPolicy?.internalValue;
    }
    if (this._serverSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelector = this._serverSelector?.internalValue;
    }
    if (this._shapeProtectedEndpointAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeProtectedEndpointAction = this._shapeProtectedEndpointAction?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    if (this._urlMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMatcher = this._urlMatcher?.internalValue;
    }
    if (this._userIdentityMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentityMatcher = this._userIdentityMatcher?.internalValue;
    }
    if (this._virtualHostMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHostMatcher = this._virtualHostMatcher?.internalValue;
    }
    if (this._wafAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafAction = this._wafAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRulesSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._anyAsn = undefined;
      this._anyClient = undefined;
      this._anyDstAsn = undefined;
      this._anyDstIp = undefined;
      this._anyIp = undefined;
      this._challengeAction = undefined;
      this._clientName = undefined;
      this._expirationTimestamp = undefined;
      this._scheme = undefined;
      this._apiGroupMatcher.internalValue = undefined;
      this._argMatchers.internalValue = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._bodyMatcher.internalValue = undefined;
      this._botAction.internalValue = undefined;
      this._clientNameMatcher.internalValue = undefined;
      this._clientRole.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._contentRewriteAction.internalValue = undefined;
      this._cookieMatchers.internalValue = undefined;
      this._domainMatcher.internalValue = undefined;
      this._dstAsnList.internalValue = undefined;
      this._dstAsnMatcher.internalValue = undefined;
      this._dstIpMatcher.internalValue = undefined;
      this._dstIpPrefixList.internalValue = undefined;
      this._forwardingClass.internalValue = undefined;
      this._gotoPolicy.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipThreatCategoryList.internalValue = undefined;
      this._ja4TlsFingerprint.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
      this._labelMatcher.internalValue = undefined;
      this._mumAction.internalValue = undefined;
      this._path.internalValue = undefined;
      this._portMatcher.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
      this._requestConstraints.internalValue = undefined;
      this._segmentPolicy.internalValue = undefined;
      this._serverSelector.internalValue = undefined;
      this._shapeProtectedEndpointAction.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
      this._urlMatcher.internalValue = undefined;
      this._userIdentityMatcher.internalValue = undefined;
      this._virtualHostMatcher.internalValue = undefined;
      this._wafAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._anyAsn = value.anyAsn;
      this._anyClient = value.anyClient;
      this._anyDstAsn = value.anyDstAsn;
      this._anyDstIp = value.anyDstIp;
      this._anyIp = value.anyIp;
      this._challengeAction = value.challengeAction;
      this._clientName = value.clientName;
      this._expirationTimestamp = value.expirationTimestamp;
      this._scheme = value.scheme;
      this._apiGroupMatcher.internalValue = value.apiGroupMatcher;
      this._argMatchers.internalValue = value.argMatchers;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._bodyMatcher.internalValue = value.bodyMatcher;
      this._botAction.internalValue = value.botAction;
      this._clientNameMatcher.internalValue = value.clientNameMatcher;
      this._clientRole.internalValue = value.clientRole;
      this._clientSelector.internalValue = value.clientSelector;
      this._contentRewriteAction.internalValue = value.contentRewriteAction;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._domainMatcher.internalValue = value.domainMatcher;
      this._dstAsnList.internalValue = value.dstAsnList;
      this._dstAsnMatcher.internalValue = value.dstAsnMatcher;
      this._dstIpMatcher.internalValue = value.dstIpMatcher;
      this._dstIpPrefixList.internalValue = value.dstIpPrefixList;
      this._forwardingClass.internalValue = value.forwardingClass;
      this._gotoPolicy.internalValue = value.gotoPolicy;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipThreatCategoryList.internalValue = value.ipThreatCategoryList;
      this._ja4TlsFingerprint.internalValue = value.ja4TlsFingerprint;
      this._jwtClaims.internalValue = value.jwtClaims;
      this._labelMatcher.internalValue = value.labelMatcher;
      this._mumAction.internalValue = value.mumAction;
      this._path.internalValue = value.path;
      this._portMatcher.internalValue = value.portMatcher;
      this._queryParams.internalValue = value.queryParams;
      this._rateLimiter.internalValue = value.rateLimiter;
      this._requestConstraints.internalValue = value.requestConstraints;
      this._segmentPolicy.internalValue = value.segmentPolicy;
      this._serverSelector.internalValue = value.serverSelector;
      this._shapeProtectedEndpointAction.internalValue = value.shapeProtectedEndpointAction;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
      this._urlMatcher.internalValue = value.urlMatcher;
      this._userIdentityMatcher.internalValue = value.userIdentityMatcher;
      this._virtualHostMatcher.internalValue = value.virtualHostMatcher;
      this._wafAction.internalValue = value.wafAction;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // any_asn - computed: false, optional: true, required: false
  private _anyAsn?: boolean | cdktf.IResolvable; 
  public get anyAsn() {
    return this.getBooleanAttribute('any_asn');
  }
  public set anyAsn(value: boolean | cdktf.IResolvable) {
    this._anyAsn = value;
  }
  public resetAnyAsn() {
    this._anyAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyAsnInput() {
    return this._anyAsn;
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

  // any_dst_asn - computed: false, optional: true, required: false
  private _anyDstAsn?: boolean | cdktf.IResolvable; 
  public get anyDstAsn() {
    return this.getBooleanAttribute('any_dst_asn');
  }
  public set anyDstAsn(value: boolean | cdktf.IResolvable) {
    this._anyDstAsn = value;
  }
  public resetAnyDstAsn() {
    this._anyDstAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDstAsnInput() {
    return this._anyDstAsn;
  }

  // any_dst_ip - computed: false, optional: true, required: false
  private _anyDstIp?: boolean | cdktf.IResolvable; 
  public get anyDstIp() {
    return this.getBooleanAttribute('any_dst_ip');
  }
  public set anyDstIp(value: boolean | cdktf.IResolvable) {
    this._anyDstIp = value;
  }
  public resetAnyDstIp() {
    this._anyDstIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDstIpInput() {
    return this._anyDstIp;
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

  // challenge_action - computed: false, optional: true, required: false
  private _challengeAction?: string; 
  public get challengeAction() {
    return this.getStringAttribute('challenge_action');
  }
  public set challengeAction(value: string) {
    this._challengeAction = value;
  }
  public resetChallengeAction() {
    this._challengeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeActionInput() {
    return this._challengeAction;
  }

  // client_name - computed: false, optional: true, required: false
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  public resetClientName() {
    this._clientName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string[]; 
  public get scheme() {
    return this.getListAttribute('scheme');
  }
  public set scheme(value: string[]) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // api_group_matcher - computed: false, optional: true, required: false
  private _apiGroupMatcher = new ServicePolicyRuleListRulesSpecApiGroupMatcherList(this, "api_group_matcher", false);
  public get apiGroupMatcher() {
    return this._apiGroupMatcher;
  }
  public putApiGroupMatcher(value: ServicePolicyRuleListRulesSpecApiGroupMatcher[] | cdktf.IResolvable) {
    this._apiGroupMatcher.internalValue = value;
  }
  public resetApiGroupMatcher() {
    this._apiGroupMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupMatcherInput() {
    return this._apiGroupMatcher.internalValue;
  }

  // arg_matchers - computed: false, optional: true, required: false
  private _argMatchers = new ServicePolicyRuleListRulesSpecArgMatchersList(this, "arg_matchers", false);
  public get argMatchers() {
    return this._argMatchers;
  }
  public putArgMatchers(value: ServicePolicyRuleListRulesSpecArgMatchers[] | cdktf.IResolvable) {
    this._argMatchers.internalValue = value;
  }
  public resetArgMatchers() {
    this._argMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argMatchersInput() {
    return this._argMatchers.internalValue;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new ServicePolicyRuleListRulesSpecAsnListStructList(this, "asn_list", false);
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: ServicePolicyRuleListRulesSpecAsnListStruct[] | cdktf.IResolvable) {
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
  private _asnMatcher = new ServicePolicyRuleListRulesSpecAsnMatcherList(this, "asn_matcher", false);
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: ServicePolicyRuleListRulesSpecAsnMatcher[] | cdktf.IResolvable) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // body_matcher - computed: false, optional: true, required: false
  private _bodyMatcher = new ServicePolicyRuleListRulesSpecBodyMatcherList(this, "body_matcher", false);
  public get bodyMatcher() {
    return this._bodyMatcher;
  }
  public putBodyMatcher(value: ServicePolicyRuleListRulesSpecBodyMatcher[] | cdktf.IResolvable) {
    this._bodyMatcher.internalValue = value;
  }
  public resetBodyMatcher() {
    this._bodyMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMatcherInput() {
    return this._bodyMatcher.internalValue;
  }

  // bot_action - computed: false, optional: true, required: false
  private _botAction = new ServicePolicyRuleListRulesSpecBotActionList(this, "bot_action", false);
  public get botAction() {
    return this._botAction;
  }
  public putBotAction(value: ServicePolicyRuleListRulesSpecBotAction[] | cdktf.IResolvable) {
    this._botAction.internalValue = value;
  }
  public resetBotAction() {
    this._botAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botActionInput() {
    return this._botAction.internalValue;
  }

  // client_name_matcher - computed: false, optional: true, required: false
  private _clientNameMatcher = new ServicePolicyRuleListRulesSpecClientNameMatcherList(this, "client_name_matcher", false);
  public get clientNameMatcher() {
    return this._clientNameMatcher;
  }
  public putClientNameMatcher(value: ServicePolicyRuleListRulesSpecClientNameMatcher[] | cdktf.IResolvable) {
    this._clientNameMatcher.internalValue = value;
  }
  public resetClientNameMatcher() {
    this._clientNameMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameMatcherInput() {
    return this._clientNameMatcher.internalValue;
  }

  // client_role - computed: false, optional: true, required: false
  private _clientRole = new ServicePolicyRuleListRulesSpecClientRoleList(this, "client_role", false);
  public get clientRole() {
    return this._clientRole;
  }
  public putClientRole(value: ServicePolicyRuleListRulesSpecClientRole[] | cdktf.IResolvable) {
    this._clientRole.internalValue = value;
  }
  public resetClientRole() {
    this._clientRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRoleInput() {
    return this._clientRole.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new ServicePolicyRuleListRulesSpecClientSelectorList(this, "client_selector", false);
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: ServicePolicyRuleListRulesSpecClientSelector[] | cdktf.IResolvable) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // content_rewrite_action - computed: false, optional: true, required: false
  private _contentRewriteAction = new ServicePolicyRuleListRulesSpecContentRewriteActionList(this, "content_rewrite_action", false);
  public get contentRewriteAction() {
    return this._contentRewriteAction;
  }
  public putContentRewriteAction(value: ServicePolicyRuleListRulesSpecContentRewriteAction[] | cdktf.IResolvable) {
    this._contentRewriteAction.internalValue = value;
  }
  public resetContentRewriteAction() {
    this._contentRewriteAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRewriteActionInput() {
    return this._contentRewriteAction.internalValue;
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new ServicePolicyRuleListRulesSpecCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: ServicePolicyRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // domain_matcher - computed: false, optional: true, required: false
  private _domainMatcher = new ServicePolicyRuleListRulesSpecDomainMatcherList(this, "domain_matcher", false);
  public get domainMatcher() {
    return this._domainMatcher;
  }
  public putDomainMatcher(value: ServicePolicyRuleListRulesSpecDomainMatcher[] | cdktf.IResolvable) {
    this._domainMatcher.internalValue = value;
  }
  public resetDomainMatcher() {
    this._domainMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatcherInput() {
    return this._domainMatcher.internalValue;
  }

  // dst_asn_list - computed: false, optional: true, required: false
  private _dstAsnList = new ServicePolicyRuleListRulesSpecDstAsnListStructList(this, "dst_asn_list", false);
  public get dstAsnList() {
    return this._dstAsnList;
  }
  public putDstAsnList(value: ServicePolicyRuleListRulesSpecDstAsnListStruct[] | cdktf.IResolvable) {
    this._dstAsnList.internalValue = value;
  }
  public resetDstAsnList() {
    this._dstAsnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAsnListInput() {
    return this._dstAsnList.internalValue;
  }

  // dst_asn_matcher - computed: false, optional: true, required: false
  private _dstAsnMatcher = new ServicePolicyRuleListRulesSpecDstAsnMatcherList(this, "dst_asn_matcher", false);
  public get dstAsnMatcher() {
    return this._dstAsnMatcher;
  }
  public putDstAsnMatcher(value: ServicePolicyRuleListRulesSpecDstAsnMatcher[] | cdktf.IResolvable) {
    this._dstAsnMatcher.internalValue = value;
  }
  public resetDstAsnMatcher() {
    this._dstAsnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAsnMatcherInput() {
    return this._dstAsnMatcher.internalValue;
  }

  // dst_ip_matcher - computed: false, optional: true, required: false
  private _dstIpMatcher = new ServicePolicyRuleListRulesSpecDstIpMatcherList(this, "dst_ip_matcher", false);
  public get dstIpMatcher() {
    return this._dstIpMatcher;
  }
  public putDstIpMatcher(value: ServicePolicyRuleListRulesSpecDstIpMatcher[] | cdktf.IResolvable) {
    this._dstIpMatcher.internalValue = value;
  }
  public resetDstIpMatcher() {
    this._dstIpMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpMatcherInput() {
    return this._dstIpMatcher.internalValue;
  }

  // dst_ip_prefix_list - computed: false, optional: true, required: false
  private _dstIpPrefixList = new ServicePolicyRuleListRulesSpecDstIpPrefixListStructList(this, "dst_ip_prefix_list", false);
  public get dstIpPrefixList() {
    return this._dstIpPrefixList;
  }
  public putDstIpPrefixList(value: ServicePolicyRuleListRulesSpecDstIpPrefixListStruct[] | cdktf.IResolvable) {
    this._dstIpPrefixList.internalValue = value;
  }
  public resetDstIpPrefixList() {
    this._dstIpPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpPrefixListInput() {
    return this._dstIpPrefixList.internalValue;
  }

  // forwarding_class - computed: false, optional: true, required: false
  private _forwardingClass = new ServicePolicyRuleListRulesSpecForwardingClassList(this, "forwarding_class", false);
  public get forwardingClass() {
    return this._forwardingClass;
  }
  public putForwardingClass(value: ServicePolicyRuleListRulesSpecForwardingClass[] | cdktf.IResolvable) {
    this._forwardingClass.internalValue = value;
  }
  public resetForwardingClass() {
    this._forwardingClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingClassInput() {
    return this._forwardingClass.internalValue;
  }

  // goto_policy - computed: false, optional: true, required: false
  private _gotoPolicy = new ServicePolicyRuleListRulesSpecGotoPolicyList(this, "goto_policy", false);
  public get gotoPolicy() {
    return this._gotoPolicy;
  }
  public putGotoPolicy(value: ServicePolicyRuleListRulesSpecGotoPolicy[] | cdktf.IResolvable) {
    this._gotoPolicy.internalValue = value;
  }
  public resetGotoPolicy() {
    this._gotoPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotoPolicyInput() {
    return this._gotoPolicy.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new ServicePolicyRuleListRulesSpecHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: ServicePolicyRuleListRulesSpecHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new ServicePolicyRuleListRulesSpecHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: ServicePolicyRuleListRulesSpecHttpMethod[] | cdktf.IResolvable) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new ServicePolicyRuleListRulesSpecIpMatcherList(this, "ip_matcher", false);
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: ServicePolicyRuleListRulesSpecIpMatcher[] | cdktf.IResolvable) {
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
  private _ipPrefixList = new ServicePolicyRuleListRulesSpecIpPrefixListStructList(this, "ip_prefix_list", false);
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: ServicePolicyRuleListRulesSpecIpPrefixListStruct[] | cdktf.IResolvable) {
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
  private _ipThreatCategoryList = new ServicePolicyRuleListRulesSpecIpThreatCategoryListStructList(this, "ip_threat_category_list", false);
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: ServicePolicyRuleListRulesSpecIpThreatCategoryListStruct[] | cdktf.IResolvable) {
    this._ipThreatCategoryList.internalValue = value;
  }
  public resetIpThreatCategoryList() {
    this._ipThreatCategoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatCategoryListInput() {
    return this._ipThreatCategoryList.internalValue;
  }

  // ja4_tls_fingerprint - computed: false, optional: true, required: false
  private _ja4TlsFingerprint = new ServicePolicyRuleListRulesSpecJa4TlsFingerprintList(this, "ja4_tls_fingerprint", false);
  public get ja4TlsFingerprint() {
    return this._ja4TlsFingerprint;
  }
  public putJa4TlsFingerprint(value: ServicePolicyRuleListRulesSpecJa4TlsFingerprint[] | cdktf.IResolvable) {
    this._ja4TlsFingerprint.internalValue = value;
  }
  public resetJa4TlsFingerprint() {
    this._ja4TlsFingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintInput() {
    return this._ja4TlsFingerprint.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new ServicePolicyRuleListRulesSpecJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: ServicePolicyRuleListRulesSpecJwtClaims[] | cdktf.IResolvable) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }

  // label_matcher - computed: false, optional: true, required: false
  private _labelMatcher = new ServicePolicyRuleListRulesSpecLabelMatcherList(this, "label_matcher", false);
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: ServicePolicyRuleListRulesSpecLabelMatcher[] | cdktf.IResolvable) {
    this._labelMatcher.internalValue = value;
  }
  public resetLabelMatcher() {
    this._labelMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }

  // mum_action - computed: false, optional: true, required: false
  private _mumAction = new ServicePolicyRuleListRulesSpecMumActionList(this, "mum_action", false);
  public get mumAction() {
    return this._mumAction;
  }
  public putMumAction(value: ServicePolicyRuleListRulesSpecMumAction[] | cdktf.IResolvable) {
    this._mumAction.internalValue = value;
  }
  public resetMumAction() {
    this._mumAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mumActionInput() {
    return this._mumAction.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new ServicePolicyRuleListRulesSpecPathList(this, "path", false);
  public get path() {
    return this._path;
  }
  public putPath(value: ServicePolicyRuleListRulesSpecPath[] | cdktf.IResolvable) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // port_matcher - computed: false, optional: true, required: false
  private _portMatcher = new ServicePolicyRuleListRulesSpecPortMatcherList(this, "port_matcher", false);
  public get portMatcher() {
    return this._portMatcher;
  }
  public putPortMatcher(value: ServicePolicyRuleListRulesSpecPortMatcher[] | cdktf.IResolvable) {
    this._portMatcher.internalValue = value;
  }
  public resetPortMatcher() {
    this._portMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMatcherInput() {
    return this._portMatcher.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new ServicePolicyRuleListRulesSpecQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: ServicePolicyRuleListRulesSpecQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new ServicePolicyRuleListRulesSpecRateLimiterList(this, "rate_limiter", false);
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: ServicePolicyRuleListRulesSpecRateLimiter[] | cdktf.IResolvable) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }

  // request_constraints - computed: false, optional: true, required: false
  private _requestConstraints = new ServicePolicyRuleListRulesSpecRequestConstraintsList(this, "request_constraints", false);
  public get requestConstraints() {
    return this._requestConstraints;
  }
  public putRequestConstraints(value: ServicePolicyRuleListRulesSpecRequestConstraints[] | cdktf.IResolvable) {
    this._requestConstraints.internalValue = value;
  }
  public resetRequestConstraints() {
    this._requestConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConstraintsInput() {
    return this._requestConstraints.internalValue;
  }

  // segment_policy - computed: false, optional: true, required: false
  private _segmentPolicy = new ServicePolicyRuleListRulesSpecSegmentPolicyList(this, "segment_policy", false);
  public get segmentPolicy() {
    return this._segmentPolicy;
  }
  public putSegmentPolicy(value: ServicePolicyRuleListRulesSpecSegmentPolicy[] | cdktf.IResolvable) {
    this._segmentPolicy.internalValue = value;
  }
  public resetSegmentPolicy() {
    this._segmentPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPolicyInput() {
    return this._segmentPolicy.internalValue;
  }

  // server_selector - computed: false, optional: true, required: false
  private _serverSelector = new ServicePolicyRuleListRulesSpecServerSelectorList(this, "server_selector", false);
  public get serverSelector() {
    return this._serverSelector;
  }
  public putServerSelector(value: ServicePolicyRuleListRulesSpecServerSelector[] | cdktf.IResolvable) {
    this._serverSelector.internalValue = value;
  }
  public resetServerSelector() {
    this._serverSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectorInput() {
    return this._serverSelector.internalValue;
  }

  // shape_protected_endpoint_action - computed: false, optional: true, required: false
  private _shapeProtectedEndpointAction = new ServicePolicyRuleListRulesSpecShapeProtectedEndpointActionList(this, "shape_protected_endpoint_action", false);
  public get shapeProtectedEndpointAction() {
    return this._shapeProtectedEndpointAction;
  }
  public putShapeProtectedEndpointAction(value: ServicePolicyRuleListRulesSpecShapeProtectedEndpointAction[] | cdktf.IResolvable) {
    this._shapeProtectedEndpointAction.internalValue = value;
  }
  public resetShapeProtectedEndpointAction() {
    this._shapeProtectedEndpointAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeProtectedEndpointActionInput() {
    return this._shapeProtectedEndpointAction.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new ServicePolicyRuleListRulesSpecTlsFingerprintMatcherList(this, "tls_fingerprint_matcher", false);
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: ServicePolicyRuleListRulesSpecTlsFingerprintMatcher[] | cdktf.IResolvable) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }

  // url_matcher - computed: false, optional: true, required: false
  private _urlMatcher = new ServicePolicyRuleListRulesSpecUrlMatcherList(this, "url_matcher", false);
  public get urlMatcher() {
    return this._urlMatcher;
  }
  public putUrlMatcher(value: ServicePolicyRuleListRulesSpecUrlMatcher[] | cdktf.IResolvable) {
    this._urlMatcher.internalValue = value;
  }
  public resetUrlMatcher() {
    this._urlMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMatcherInput() {
    return this._urlMatcher.internalValue;
  }

  // user_identity_matcher - computed: false, optional: true, required: false
  private _userIdentityMatcher = new ServicePolicyRuleListRulesSpecUserIdentityMatcherList(this, "user_identity_matcher", false);
  public get userIdentityMatcher() {
    return this._userIdentityMatcher;
  }
  public putUserIdentityMatcher(value: ServicePolicyRuleListRulesSpecUserIdentityMatcher[] | cdktf.IResolvable) {
    this._userIdentityMatcher.internalValue = value;
  }
  public resetUserIdentityMatcher() {
    this._userIdentityMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentityMatcherInput() {
    return this._userIdentityMatcher.internalValue;
  }

  // virtual_host_matcher - computed: false, optional: true, required: false
  private _virtualHostMatcher = new ServicePolicyRuleListRulesSpecVirtualHostMatcherList(this, "virtual_host_matcher", false);
  public get virtualHostMatcher() {
    return this._virtualHostMatcher;
  }
  public putVirtualHostMatcher(value: ServicePolicyRuleListRulesSpecVirtualHostMatcher[] | cdktf.IResolvable) {
    this._virtualHostMatcher.internalValue = value;
  }
  public resetVirtualHostMatcher() {
    this._virtualHostMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostMatcherInput() {
    return this._virtualHostMatcher.internalValue;
  }

  // waf_action - computed: false, optional: true, required: false
  private _wafAction = new ServicePolicyRuleListRulesSpecWafActionList(this, "waf_action", false);
  public get wafAction() {
    return this._wafAction;
  }
  public putWafAction(value: ServicePolicyRuleListRulesSpecWafAction[] | cdktf.IResolvable) {
    this._wafAction.internalValue = value;
  }
  public resetWafAction() {
    this._wafAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafActionInput() {
    return this._wafAction.internalValue;
  }
}

export class ServicePolicyRuleListRulesSpecList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRulesSpec[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesSpecOutputReference {
    return new ServicePolicyRuleListRulesSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#metadata ServicePolicy#metadata}
  */
  readonly metadata: ServicePolicyRuleListRulesMetadata[] | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#spec ServicePolicy#spec}
  */
  readonly spec: ServicePolicyRuleListRulesSpec[] | cdktf.IResolvable;
}

export function servicePolicyRuleListRulesToTerraform(struct?: ServicePolicyRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.listMapper(servicePolicyRuleListRulesMetadataToTerraform, true)(struct!.metadata),
    spec: cdktf.listMapper(servicePolicyRuleListRulesSpecToTerraform, true)(struct!.spec),
  }
}


export function servicePolicyRuleListRulesToHclTerraform(struct?: ServicePolicyRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesMetadataList",
    },
    spec: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesSpecToHclTerraform, true)(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new ServicePolicyRuleListRulesMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ServicePolicyRuleListRulesMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new ServicePolicyRuleListRulesSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ServicePolicyRuleListRulesSpec[] | cdktf.IResolvable) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class ServicePolicyRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListRules[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListRulesOutputReference {
    return new ServicePolicyRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#rules ServicePolicy#rules}
  */
  readonly rules?: ServicePolicyRuleListRules[] | cdktf.IResolvable;
}

export function servicePolicyRuleListStructToTerraform(struct?: ServicePolicyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(servicePolicyRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function servicePolicyRuleListStructToHclTerraform(struct?: ServicePolicyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(servicePolicyRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "ServicePolicyRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new ServicePolicyRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ServicePolicyRuleListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class ServicePolicyRuleListStructList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyRuleListStructOutputReference {
    return new ServicePolicyRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyServerNameMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#exact_values ServicePolicy#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#regex_values ServicePolicy#regex_values}
  */
  readonly regexValues?: string[];
}

export function servicePolicyServerNameMatcherToTerraform(struct?: ServicePolicyServerNameMatcher | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function servicePolicyServerNameMatcherToHclTerraform(struct?: ServicePolicyServerNameMatcher | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicePolicyServerNameMatcherOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyServerNameMatcher | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyServerNameMatcher | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
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
}

export class ServicePolicyServerNameMatcherList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyServerNameMatcher[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyServerNameMatcherOutputReference {
    return new ServicePolicyServerNameMatcherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServicePolicyServerSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#expressions ServicePolicy#expressions}
  */
  readonly expressions: string[];
}

export function servicePolicyServerSelectorToTerraform(struct?: ServicePolicyServerSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function servicePolicyServerSelectorToHclTerraform(struct?: ServicePolicyServerSelector | cdktf.IResolvable): any {
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

export class ServicePolicyServerSelectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicePolicyServerSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicePolicyServerSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class ServicePolicyServerSelectorList extends cdktf.ComplexList {
  public internalValue? : ServicePolicyServerSelector[] | cdktf.IResolvable

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
  public get(index: number): ServicePolicyServerSelectorOutputReference {
    return new ServicePolicyServerSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy volterra_service_policy}
*/
export class ServicePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_service_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicePolicy to import
  * @param importFromId The id of the existing ServicePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_service_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/service_policy volterra_service_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_service_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algo = config.algo;
    this._allowAllRequests = config.allowAllRequests;
    this._annotations = config.annotations;
    this._anyServer = config.anyServer;
    this._denyAllRequests = config.denyAllRequests;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._internallyGenerated = config.internallyGenerated;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._serverName = config.serverName;
    this._allowList.internalValue = config.allowList;
    this._denyList.internalValue = config.denyList;
    this._legacyRuleList.internalValue = config.legacyRuleList;
    this._portMatcher.internalValue = config.portMatcher;
    this._ruleList.internalValue = config.ruleList;
    this._serverNameMatcher.internalValue = config.serverNameMatcher;
    this._serverSelector.internalValue = config.serverSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algo - computed: false, optional: false, required: true
  private _algo?: string; 
  public get algo() {
    return this.getStringAttribute('algo');
  }
  public set algo(value: string) {
    this._algo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algoInput() {
    return this._algo;
  }

  // allow_all_requests - computed: false, optional: true, required: false
  private _allowAllRequests?: boolean | cdktf.IResolvable; 
  public get allowAllRequests() {
    return this.getBooleanAttribute('allow_all_requests');
  }
  public set allowAllRequests(value: boolean | cdktf.IResolvable) {
    this._allowAllRequests = value;
  }
  public resetAllowAllRequests() {
    this._allowAllRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllRequestsInput() {
    return this._allowAllRequests;
  }

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

  // any_server - computed: false, optional: true, required: false
  private _anyServer?: boolean | cdktf.IResolvable; 
  public get anyServer() {
    return this.getBooleanAttribute('any_server');
  }
  public set anyServer(value: boolean | cdktf.IResolvable) {
    this._anyServer = value;
  }
  public resetAnyServer() {
    this._anyServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyServerInput() {
    return this._anyServer;
  }

  // deny_all_requests - computed: false, optional: true, required: false
  private _denyAllRequests?: boolean | cdktf.IResolvable; 
  public get denyAllRequests() {
    return this.getBooleanAttribute('deny_all_requests');
  }
  public set denyAllRequests(value: boolean | cdktf.IResolvable) {
    this._denyAllRequests = value;
  }
  public resetDenyAllRequests() {
    this._denyAllRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllRequestsInput() {
    return this._denyAllRequests;
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

  // internally_generated - computed: false, optional: true, required: false
  private _internallyGenerated?: boolean | cdktf.IResolvable; 
  public get internallyGenerated() {
    return this.getBooleanAttribute('internally_generated');
  }
  public set internallyGenerated(value: boolean | cdktf.IResolvable) {
    this._internallyGenerated = value;
  }
  public resetInternallyGenerated() {
    this._internallyGenerated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internallyGeneratedInput() {
    return this._internallyGenerated;
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

  // allow_list - computed: false, optional: true, required: false
  private _allowList = new ServicePolicyAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: ServicePolicyAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  public resetAllowList() {
    this._allowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // deny_list - computed: false, optional: true, required: false
  private _denyList = new ServicePolicyDenyListStructList(this, "deny_list", false);
  public get denyList() {
    return this._denyList;
  }
  public putDenyList(value: ServicePolicyDenyListStruct[] | cdktf.IResolvable) {
    this._denyList.internalValue = value;
  }
  public resetDenyList() {
    this._denyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyListInput() {
    return this._denyList.internalValue;
  }

  // legacy_rule_list - computed: false, optional: true, required: false
  private _legacyRuleList = new ServicePolicyLegacyRuleListStructList(this, "legacy_rule_list", false);
  public get legacyRuleList() {
    return this._legacyRuleList;
  }
  public putLegacyRuleList(value: ServicePolicyLegacyRuleListStruct[] | cdktf.IResolvable) {
    this._legacyRuleList.internalValue = value;
  }
  public resetLegacyRuleList() {
    this._legacyRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyRuleListInput() {
    return this._legacyRuleList.internalValue;
  }

  // port_matcher - computed: false, optional: true, required: false
  private _portMatcher = new ServicePolicyPortMatcherList(this, "port_matcher", false);
  public get portMatcher() {
    return this._portMatcher;
  }
  public putPortMatcher(value: ServicePolicyPortMatcher[] | cdktf.IResolvable) {
    this._portMatcher.internalValue = value;
  }
  public resetPortMatcher() {
    this._portMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMatcherInput() {
    return this._portMatcher.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new ServicePolicyRuleListStructList(this, "rule_list", false);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: ServicePolicyRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // server_name_matcher - computed: false, optional: true, required: false
  private _serverNameMatcher = new ServicePolicyServerNameMatcherList(this, "server_name_matcher", false);
  public get serverNameMatcher() {
    return this._serverNameMatcher;
  }
  public putServerNameMatcher(value: ServicePolicyServerNameMatcher[] | cdktf.IResolvable) {
    this._serverNameMatcher.internalValue = value;
  }
  public resetServerNameMatcher() {
    this._serverNameMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameMatcherInput() {
    return this._serverNameMatcher.internalValue;
  }

  // server_selector - computed: false, optional: true, required: false
  private _serverSelector = new ServicePolicyServerSelectorList(this, "server_selector", false);
  public get serverSelector() {
    return this._serverSelector;
  }
  public putServerSelector(value: ServicePolicyServerSelector[] | cdktf.IResolvable) {
    this._serverSelector.internalValue = value;
  }
  public resetServerSelector() {
    this._serverSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectorInput() {
    return this._serverSelector.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algo: cdktf.stringToTerraform(this._algo),
      allow_all_requests: cdktf.booleanToTerraform(this._allowAllRequests),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      any_server: cdktf.booleanToTerraform(this._anyServer),
      deny_all_requests: cdktf.booleanToTerraform(this._denyAllRequests),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      internally_generated: cdktf.booleanToTerraform(this._internallyGenerated),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      server_name: cdktf.stringToTerraform(this._serverName),
      allow_list: cdktf.listMapper(servicePolicyAllowListStructToTerraform, true)(this._allowList.internalValue),
      deny_list: cdktf.listMapper(servicePolicyDenyListStructToTerraform, true)(this._denyList.internalValue),
      legacy_rule_list: cdktf.listMapper(servicePolicyLegacyRuleListStructToTerraform, true)(this._legacyRuleList.internalValue),
      port_matcher: cdktf.listMapper(servicePolicyPortMatcherToTerraform, true)(this._portMatcher.internalValue),
      rule_list: cdktf.listMapper(servicePolicyRuleListStructToTerraform, true)(this._ruleList.internalValue),
      server_name_matcher: cdktf.listMapper(servicePolicyServerNameMatcherToTerraform, true)(this._serverNameMatcher.internalValue),
      server_selector: cdktf.listMapper(servicePolicyServerSelectorToTerraform, true)(this._serverSelector.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algo: {
        value: cdktf.stringToHclTerraform(this._algo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_all_requests: {
        value: cdktf.booleanToHclTerraform(this._allowAllRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      any_server: {
        value: cdktf.booleanToHclTerraform(this._anyServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deny_all_requests: {
        value: cdktf.booleanToHclTerraform(this._denyAllRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      internally_generated: {
        value: cdktf.booleanToHclTerraform(this._internallyGenerated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      server_name: {
        value: cdktf.stringToHclTerraform(this._serverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_list: {
        value: cdktf.listMapperHcl(servicePolicyAllowListStructToHclTerraform, true)(this._allowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyAllowListStructList",
      },
      deny_list: {
        value: cdktf.listMapperHcl(servicePolicyDenyListStructToHclTerraform, true)(this._denyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyDenyListStructList",
      },
      legacy_rule_list: {
        value: cdktf.listMapperHcl(servicePolicyLegacyRuleListStructToHclTerraform, true)(this._legacyRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyLegacyRuleListStructList",
      },
      port_matcher: {
        value: cdktf.listMapperHcl(servicePolicyPortMatcherToHclTerraform, true)(this._portMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyPortMatcherList",
      },
      rule_list: {
        value: cdktf.listMapperHcl(servicePolicyRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyRuleListStructList",
      },
      server_name_matcher: {
        value: cdktf.listMapperHcl(servicePolicyServerNameMatcherToHclTerraform, true)(this._serverNameMatcher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyServerNameMatcherList",
      },
      server_selector: {
        value: cdktf.listMapperHcl(servicePolicyServerSelectorToHclTerraform, true)(this._serverSelector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicePolicyServerSelectorList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
