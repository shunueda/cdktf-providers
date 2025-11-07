import * as cdktf from 'cdktf';
export interface CdnLoadbalancerActiveServicePoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#policies CdnLoadbalancer#policies}
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
export interface CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#threshold CdnLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_http_lb_user_id CdnLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ref_user_id CdnLoadbalancer#ref_user_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiRateLimitApiEndpointRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_endpoint_path CdnLoadbalancer#api_endpoint_path}
  */
  readonly apiEndpointPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_endpoint_method CdnLoadbalancer#api_endpoint_method}
  */
  readonly apiEndpointMethod?: CdnLoadbalancerApiRateLimitApiEndpointRulesApiEndpointMethod;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiRateLimitApiEndpointRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#inline_rate_limiter CdnLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: CdnLoadbalancerApiRateLimitApiEndpointRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ref_rate_limiter CdnLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: CdnLoadbalancerApiRateLimitApiEndpointRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
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
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    item: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    item: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsItem) {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher | undefined) {
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
  private _cookieMatchers = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
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
  private _headers = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
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
  private _jwtClaims = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
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
  private _queryParams = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_url CdnLoadbalancer#any_url}
  */
  readonly anyUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_endpoint CdnLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_url: cdktf.booleanToTerraform(struct!.anyUrl),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToTerraform(struct!.apiEndpoint),
    api_groups: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToTerraform(struct!.apiGroups),
    client_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToTerraform(struct!.clientMatcher),
    request_matcher: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable): any {
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
    any_url: {
      value: cdktf.booleanToHclTerraform(struct!.anyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    api_endpoint: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointList",
    },
    api_groups: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsList",
    },
    client_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyUrl = this._anyUrl;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._specificDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificDomain = this._specificDomain;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._clientMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientMatcher = this._clientMatcher?.internalValue;
    }
    if (this._requestMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMatcher = this._requestMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyUrl = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._apiGroups.internalValue = undefined;
      this._clientMatcher.internalValue = undefined;
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
      this._anyUrl = value.anyUrl;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._clientMatcher.internalValue = value.clientMatcher;
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

  // any_url - computed: false, optional: true, required: false
  private _anyUrl?: boolean | cdktf.IResolvable; 
  public get anyUrl() {
    return this.getBooleanAttribute('any_url');
  }
  public set anyUrl(value: boolean | cdktf.IResolvable) {
    this._anyUrl = value;
  }
  public resetAnyUrl() {
    this._anyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyUrlInput() {
    return this._anyUrl;
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

  // api_endpoint - computed: false, optional: false, required: true
  private _apiEndpoint = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesClientMatcher) {
    this._clientMatcher.internalValue = value;
  }
  public resetClientMatcher() {
    this._clientMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMatcherInput() {
    return this._clientMatcher.internalValue;
  }

  // request_matcher - computed: false, optional: true, required: false
  private _requestMatcher = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesRequestMatcher) {
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

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference {
    return new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitBypassRateLimitingRules {
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#bypass_rate_limiting_rules CdnLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_rate_limiting_rules: cdktf.listMapper(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToTerraform, true)(struct!.bypassRateLimitingRules),
  }
}


export function cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference | CdnLoadbalancerApiRateLimitBypassRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_rate_limiting_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesToHclTerraform, true)(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitBypassRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassRateLimitingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
    }
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRulesList(this, "bypass_rate_limiting_rules", false);
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRulesBypassRateLimitingRules[] | cdktf.IResolvable) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#rate_limiter_allowed_prefixes CdnLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimiterAllowedPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimiterAllowedPrefixes.internalValue = value.rateLimiterAllowedPrefixes;
    }
  }

  // rate_limiter_allowed_prefixes - computed: false, optional: false, required: true
  private _rateLimiterAllowedPrefixes = new CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefixes CdnLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function cdnLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function cdnLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerApiRateLimitIpAllowedListStruct): any {
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

export class CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitIpAllowedListStruct | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
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

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_category_list CdnLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined) {
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
  private _asnList = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher) {
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
  private _clientSelector = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector) {
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
  private _ipMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct) {
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
  private _tlsFingerprintMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#threshold CdnLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_http_lb_user_id CdnLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ref_user_id CdnLoadbalancer#ref_user_id}
  */
  readonly refUserId?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined) {
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
  private _refUserId = new CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    item: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
    item: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#jwt_claims CdnLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined) {
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
  private _cookieMatchers = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
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
  private _headers = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
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
  private _jwtClaims = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
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
  private _queryParams = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
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
export interface CdnLoadbalancerApiRateLimitServerUrlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_group CdnLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#base_path CdnLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#specific_domain CdnLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_matcher CdnLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#inline_rate_limiter CdnLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ref_rate_limiter CdnLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_matcher CdnLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher;
}

export function cdnLoadbalancerApiRateLimitServerUrlRulesToTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    client_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function cdnLoadbalancerApiRateLimitServerUrlRulesToHclTerraform(struct?: CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
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
    client_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterList",
    },
    request_matcher: {
      value: cdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitServerUrlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
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
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._specificDomain = value.specificDomain;
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

  // client_matcher - computed: false, optional: true, required: false
  private _clientMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesClientMatcher) {
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
  private _inlineRateLimiter = new CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: CdnLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter) {
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
  private _refRateLimiter = new CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: CdnLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter) {
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
  private _requestMatcher = new CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: CdnLoadbalancerApiRateLimitServerUrlRulesRequestMatcher) {
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

export class CdnLoadbalancerApiRateLimitServerUrlRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerApiRateLimitServerUrlRulesOutputReference {
    return new CdnLoadbalancerApiRateLimitServerUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerApiRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_ip_allowed_list CdnLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_endpoint_rules CdnLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: CdnLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable;
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#bypass_rate_limiting_rules CdnLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: CdnLoadbalancerApiRateLimitBypassRateLimitingRules;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_ip_allowed_list CdnLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_allowed_list CdnLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: CdnLoadbalancerApiRateLimitIpAllowedListStruct;
  /**
  * server_url_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#server_url_rules CdnLoadbalancer#server_url_rules}
  */
  readonly serverUrlRules?: CdnLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerApiRateLimitToTerraform(struct?: CdnLoadbalancerApiRateLimitOutputReference | CdnLoadbalancerApiRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    api_endpoint_rules: cdktf.listMapper(cdnLoadbalancerApiRateLimitApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    bypass_rate_limiting_rules: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct!.bypassRateLimitingRules),
    custom_ip_allowed_list: cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: cdnLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct!.ipAllowedList),
    server_url_rules: cdktf.listMapper(cdnLoadbalancerApiRateLimitServerUrlRulesToTerraform, true)(struct!.serverUrlRules),
  }
}


export function cdnLoadbalancerApiRateLimitToHclTerraform(struct?: CdnLoadbalancerApiRateLimitOutputReference | CdnLoadbalancerApiRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_ip_allowed_list: {
      value: cdktf.booleanToHclTerraform(struct!.noIpAllowedList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_endpoint_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitApiEndpointRulesList",
    },
    bypass_rate_limiting_rules: {
      value: cdnLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitBypassRateLimitingRulesList",
    },
    custom_ip_allowed_list: {
      value: cdnLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: cdnLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitIpAllowedListStructList",
    },
    server_url_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerApiRateLimitServerUrlRulesToHclTerraform, true)(struct!.serverUrlRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerApiRateLimitServerUrlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerApiRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerApiRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noIpAllowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpAllowedList = this._noIpAllowedList;
    }
    if (this._apiEndpointRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpointRules = this._apiEndpointRules?.internalValue;
    }
    if (this._bypassRateLimitingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassRateLimitingRules = this._bypassRateLimitingRules?.internalValue;
    }
    if (this._customIpAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIpAllowedList = this._customIpAllowedList?.internalValue;
    }
    if (this._ipAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowedList = this._ipAllowedList?.internalValue;
    }
    if (this._serverUrlRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverUrlRules = this._serverUrlRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerApiRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noIpAllowedList = undefined;
      this._apiEndpointRules.internalValue = undefined;
      this._bypassRateLimitingRules.internalValue = undefined;
      this._customIpAllowedList.internalValue = undefined;
      this._ipAllowedList.internalValue = undefined;
      this._serverUrlRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noIpAllowedList = value.noIpAllowedList;
      this._apiEndpointRules.internalValue = value.apiEndpointRules;
      this._bypassRateLimitingRules.internalValue = value.bypassRateLimitingRules;
      this._customIpAllowedList.internalValue = value.customIpAllowedList;
      this._ipAllowedList.internalValue = value.ipAllowedList;
      this._serverUrlRules.internalValue = value.serverUrlRules;
    }
  }

  // no_ip_allowed_list - computed: false, optional: true, required: false
  private _noIpAllowedList?: boolean | cdktf.IResolvable; 
  public get noIpAllowedList() {
    return this.getBooleanAttribute('no_ip_allowed_list');
  }
  public set noIpAllowedList(value: boolean | cdktf.IResolvable) {
    this._noIpAllowedList = value;
  }
  public resetNoIpAllowedList() {
    this._noIpAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpAllowedListInput() {
    return this._noIpAllowedList;
  }

  // api_endpoint_rules - computed: false, optional: true, required: false
  private _apiEndpointRules = new CdnLoadbalancerApiRateLimitApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: CdnLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable) {
    this._apiEndpointRules.internalValue = value;
  }
  public resetApiEndpointRules() {
    this._apiEndpointRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointRulesInput() {
    return this._apiEndpointRules.internalValue;
  }

  // bypass_rate_limiting_rules - computed: false, optional: true, required: false
  private _bypassRateLimitingRules = new CdnLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference(this, "bypass_rate_limiting_rules");
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: CdnLoadbalancerApiRateLimitBypassRateLimitingRules) {
    this._bypassRateLimitingRules.internalValue = value;
  }
  public resetBypassRateLimitingRules() {
    this._bypassRateLimitingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRateLimitingRulesInput() {
    return this._bypassRateLimitingRules.internalValue;
  }

  // custom_ip_allowed_list - computed: false, optional: true, required: false
  private _customIpAllowedList = new CdnLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: CdnLoadbalancerApiRateLimitCustomIpAllowedListStruct) {
    this._customIpAllowedList.internalValue = value;
  }
  public resetCustomIpAllowedList() {
    this._customIpAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpAllowedListInput() {
    return this._customIpAllowedList.internalValue;
  }

  // ip_allowed_list - computed: false, optional: true, required: false
  private _ipAllowedList = new CdnLoadbalancerApiRateLimitIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: CdnLoadbalancerApiRateLimitIpAllowedListStruct) {
    this._ipAllowedList.internalValue = value;
  }
  public resetIpAllowedList() {
    this._ipAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowedListInput() {
    return this._ipAllowedList.internalValue;
  }

  // server_url_rules - computed: false, optional: true, required: false
  private _serverUrlRules = new CdnLoadbalancerApiRateLimitServerUrlRulesList(this, "server_url_rules", false);
  public get serverUrlRules() {
    return this._serverUrlRules;
  }
  public putServerUrlRules(value: CdnLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable) {
    this._serverUrlRules.internalValue = value;
  }
  public resetServerUrlRules() {
    this._serverUrlRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlRulesInput() {
    return this._serverUrlRules.internalValue;
  }
}
export interface CdnLoadbalancerAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerAppFirewallToTerraform(struct?: CdnLoadbalancerAppFirewallOutputReference | CdnLoadbalancerAppFirewall): any {
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


export function cdnLoadbalancerAppFirewallToHclTerraform(struct?: CdnLoadbalancerAppFirewallOutputReference | CdnLoadbalancerAppFirewall): any {
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

export class CdnLoadbalancerAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerAppFirewall | undefined {
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

  public set internalValue(value: CdnLoadbalancerAppFirewall | undefined) {
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
export interface CdnLoadbalancerBlockedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact CdnLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerBlockedClientsHttpHeaderHeadersToTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerBlockedClientsHttpHeaderHeadersToHclTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._presence = value.presence;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class CdnLoadbalancerBlockedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference {
    return new CdnLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerBlockedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers: CdnLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function cdnLoadbalancerBlockedClientsHttpHeaderToTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderOutputReference | CdnLoadbalancerBlockedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdnLoadbalancerBlockedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function cdnLoadbalancerBlockedClientsHttpHeaderToHclTerraform(struct?: CdnLoadbalancerBlockedClientsHttpHeaderOutputReference | CdnLoadbalancerBlockedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerBlockedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBlockedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBlockedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBlockedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBlockedClientsHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new CdnLoadbalancerBlockedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CdnLoadbalancerBlockedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerBlockedClientsMetadataToTerraform(struct?: CdnLoadbalancerBlockedClientsMetadataOutputReference | CdnLoadbalancerBlockedClientsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerBlockedClientsMetadataToHclTerraform(struct?: CdnLoadbalancerBlockedClientsMetadataOutputReference | CdnLoadbalancerBlockedClientsMetadata): any {
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

export class CdnLoadbalancerBlockedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerBlockedClientsMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerBlockedClientsMetadata | undefined) {
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
export interface CdnLoadbalancerBlockedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#actions CdnLoadbalancer#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_number CdnLoadbalancer#as_number}
  */
  readonly asNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix CdnLoadbalancer#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefix CdnLoadbalancer#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#user_identifier CdnLoadbalancer#user_identifier}
  */
  readonly userIdentifier?: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#http_header CdnLoadbalancer#http_header}
  */
  readonly httpHeader?: CdnLoadbalancerBlockedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerBlockedClientsMetadata;
}

export function cdnLoadbalancerBlockedClientsToTerraform(struct?: CdnLoadbalancerBlockedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    user_identifier: cdktf.stringToTerraform(struct!.userIdentifier),
    http_header: cdnLoadbalancerBlockedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: cdnLoadbalancerBlockedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerBlockedClientsToHclTerraform(struct?: CdnLoadbalancerBlockedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_identifier: {
      value: cdktf.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdnLoadbalancerBlockedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBlockedClientsHttpHeaderList",
    },
    metadata: {
      value: cdnLoadbalancerBlockedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerBlockedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerBlockedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerBlockedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerBlockedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._asNumber = undefined;
      this._expirationTimestamp = undefined;
      this._ipPrefix = undefined;
      this._ipv6Prefix = undefined;
      this._userIdentifier = undefined;
      this._httpHeader.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._asNumber = value.asNumber;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ipPrefix = value.ipPrefix;
      this._ipv6Prefix = value.ipv6Prefix;
      this._userIdentifier = value.userIdentifier;
      this._httpHeader.internalValue = value.httpHeader;
      this._metadata.internalValue = value.metadata;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
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

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // user_identifier - computed: false, optional: true, required: false
  private _userIdentifier?: string; 
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new CdnLoadbalancerBlockedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: CdnLoadbalancerBlockedClientsHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerBlockedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerBlockedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerBlockedClientsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerBlockedClients[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerBlockedClientsOutputReference {
    return new CdnLoadbalancerBlockedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function cdnLoadbalancerCaptchaChallengeToTerraform(struct?: CdnLoadbalancerCaptchaChallengeOutputReference | CdnLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function cdnLoadbalancerCaptchaChallengeToHclTerraform(struct?: CdnLoadbalancerCaptchaChallengeOutputReference | CdnLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCaptchaChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCaptchaChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface CdnLoadbalancerCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#allow_credentials CdnLoadbalancer#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#allow_headers CdnLoadbalancer#allow_headers}
  */
  readonly allowHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#allow_methods CdnLoadbalancer#allow_methods}
  */
  readonly allowMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#allow_origin CdnLoadbalancer#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#allow_origin_regex CdnLoadbalancer#allow_origin_regex}
  */
  readonly allowOriginRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disabled CdnLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expose_headers CdnLoadbalancer#expose_headers}
  */
  readonly exposeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#maximum_age CdnLoadbalancer#maximum_age}
  */
  readonly maximumAge?: number;
}

export function cdnLoadbalancerCorsPolicyToTerraform(struct?: CdnLoadbalancerCorsPolicyOutputReference | CdnLoadbalancerCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.stringToTerraform(struct!.allowHeaders),
    allow_methods: cdktf.stringToTerraform(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origin_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegex),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.stringToTerraform(struct!.exposeHeaders),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
  }
}


export function cdnLoadbalancerCorsPolicyToHclTerraform(struct?: CdnLoadbalancerCorsPolicyOutputReference | CdnLoadbalancerCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.stringToHclTerraform(struct!.allowHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_methods: {
      value: cdktf.stringToHclTerraform(struct!.allowMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.stringToHclTerraform(struct!.exposeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_age: {
      value: cdktf.numberToHclTerraform(struct!.maximumAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOriginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegex = this._allowOriginRegex;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOriginRegex = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maximumAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOriginRegex = value.allowOriginRegex;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maximumAge = value.maximumAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string; 
  public get allowHeaders() {
    return this.getStringAttribute('allow_headers');
  }
  public set allowHeaders(value: string) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string; 
  public get allowMethods() {
    return this.getStringAttribute('allow_methods');
  }
  public set allowMethods(value: string) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origin_regex - computed: false, optional: true, required: false
  private _allowOriginRegex?: string[]; 
  public get allowOriginRegex() {
    return this.getListAttribute('allow_origin_regex');
  }
  public set allowOriginRegex(value: string[]) {
    this._allowOriginRegex = value;
  }
  public resetAllowOriginRegex() {
    this._allowOriginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexInput() {
    return this._allowOriginRegex;
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

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string; 
  public get exposeHeaders() {
    return this.getStringAttribute('expose_headers');
  }
  public set exposeHeaders(value: string) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // maximum_age - computed: false, optional: true, required: false
  private _maximumAge?: number; 
  public get maximumAge() {
    return this.getNumberAttribute('maximum_age');
  }
  public set maximumAge(value: number) {
    this._maximumAge = value;
  }
  public resetMaximumAge() {
    this._maximumAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAgeInput() {
    return this._maximumAge;
  }
}
export interface CdnLoadbalancerCsrfPolicyCustomDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#domains CdnLoadbalancer#domains}
  */
  readonly domains: string[];
}

export function cdnLoadbalancerCsrfPolicyCustomDomainListStructToTerraform(struct?: CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference | CdnLoadbalancerCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function cdnLoadbalancerCsrfPolicyCustomDomainListStructToHclTerraform(struct?: CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference | CdnLoadbalancerCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCsrfPolicyCustomDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCsrfPolicyCustomDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface CdnLoadbalancerCsrfPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#all_load_balancer_domains CdnLoadbalancer#all_load_balancer_domains}
  */
  readonly allLoadBalancerDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disabled CdnLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * custom_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_domain_list CdnLoadbalancer#custom_domain_list}
  */
  readonly customDomainList?: CdnLoadbalancerCsrfPolicyCustomDomainListStruct;
}

export function cdnLoadbalancerCsrfPolicyToTerraform(struct?: CdnLoadbalancerCsrfPolicyOutputReference | CdnLoadbalancerCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_load_balancer_domains: cdktf.booleanToTerraform(struct!.allLoadBalancerDomains),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    custom_domain_list: cdnLoadbalancerCsrfPolicyCustomDomainListStructToTerraform(struct!.customDomainList),
  }
}


export function cdnLoadbalancerCsrfPolicyToHclTerraform(struct?: CdnLoadbalancerCsrfPolicyOutputReference | CdnLoadbalancerCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_load_balancer_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allLoadBalancerDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_domain_list: {
      value: cdnLoadbalancerCsrfPolicyCustomDomainListStructToHclTerraform(struct!.customDomainList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCsrfPolicyCustomDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCsrfPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCsrfPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allLoadBalancerDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allLoadBalancerDomains = this._allLoadBalancerDomains;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._customDomainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomainList = this._customDomainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCsrfPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allLoadBalancerDomains = undefined;
      this._disabled = undefined;
      this._customDomainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allLoadBalancerDomains = value.allLoadBalancerDomains;
      this._disabled = value.disabled;
      this._customDomainList.internalValue = value.customDomainList;
    }
  }

  // all_load_balancer_domains - computed: false, optional: true, required: false
  private _allLoadBalancerDomains?: boolean | cdktf.IResolvable; 
  public get allLoadBalancerDomains() {
    return this.getBooleanAttribute('all_load_balancer_domains');
  }
  public set allLoadBalancerDomains(value: boolean | cdktf.IResolvable) {
    this._allLoadBalancerDomains = value;
  }
  public resetAllLoadBalancerDomains() {
    this._allLoadBalancerDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allLoadBalancerDomainsInput() {
    return this._allLoadBalancerDomains;
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

  // custom_domain_list - computed: false, optional: true, required: false
  private _customDomainList = new CdnLoadbalancerCsrfPolicyCustomDomainListStructOutputReference(this, "custom_domain_list");
  public get customDomainList() {
    return this._customDomainList;
  }
  public putCustomDomainList(value: CdnLoadbalancerCsrfPolicyCustomDomainListStruct) {
    this._customDomainList.internalValue = value;
  }
  public resetCustomDomainList() {
    this._customDomainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainListInput() {
    return this._customDomainList.internalValue;
  }
}
export interface CdnLoadbalancerCustomCacheRuleCdnCacheRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerCustomCacheRuleCdnCacheRulesToTerraform(struct?: CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable): any {
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


export function cdnLoadbalancerCustomCacheRuleCdnCacheRulesToHclTerraform(struct?: CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable): any {
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

export class CdnLoadbalancerCustomCacheRuleCdnCacheRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerCustomCacheRuleCdnCacheRules | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerCustomCacheRuleCdnCacheRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerCustomCacheRuleCdnCacheRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerCustomCacheRuleCdnCacheRulesOutputReference {
    return new CdnLoadbalancerCustomCacheRuleCdnCacheRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerCustomCacheRule {
  /**
  * cdn_cache_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cdn_cache_rules CdnLoadbalancer#cdn_cache_rules}
  */
  readonly cdnCacheRules?: CdnLoadbalancerCustomCacheRuleCdnCacheRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerCustomCacheRuleToTerraform(struct?: CdnLoadbalancerCustomCacheRuleOutputReference | CdnLoadbalancerCustomCacheRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdn_cache_rules: cdktf.listMapper(cdnLoadbalancerCustomCacheRuleCdnCacheRulesToTerraform, true)(struct!.cdnCacheRules),
  }
}


export function cdnLoadbalancerCustomCacheRuleToHclTerraform(struct?: CdnLoadbalancerCustomCacheRuleOutputReference | CdnLoadbalancerCustomCacheRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdn_cache_rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerCustomCacheRuleCdnCacheRulesToHclTerraform, true)(struct!.cdnCacheRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerCustomCacheRuleCdnCacheRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerCustomCacheRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerCustomCacheRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdnCacheRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdnCacheRules = this._cdnCacheRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerCustomCacheRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdnCacheRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdnCacheRules.internalValue = value.cdnCacheRules;
    }
  }

  // cdn_cache_rules - computed: false, optional: true, required: false
  private _cdnCacheRules = new CdnLoadbalancerCustomCacheRuleCdnCacheRulesList(this, "cdn_cache_rules", false);
  public get cdnCacheRules() {
    return this._cdnCacheRules;
  }
  public putCdnCacheRules(value: CdnLoadbalancerCustomCacheRuleCdnCacheRules[] | cdktf.IResolvable) {
    this._cdnCacheRules.internalValue = value;
  }
  public resetCdnCacheRules() {
    this._cdnCacheRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnCacheRulesInput() {
    return this._cdnCacheRules.internalValue;
  }
}
export interface CdnLoadbalancerDataGuardRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerDataGuardRulesMetadataToTerraform(struct?: CdnLoadbalancerDataGuardRulesMetadataOutputReference | CdnLoadbalancerDataGuardRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerDataGuardRulesMetadataToHclTerraform(struct?: CdnLoadbalancerDataGuardRulesMetadataOutputReference | CdnLoadbalancerDataGuardRulesMetadata): any {
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

export class CdnLoadbalancerDataGuardRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDataGuardRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerDataGuardRulesMetadata | undefined) {
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
export interface CdnLoadbalancerDataGuardRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefix CdnLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerDataGuardRulesPathToTerraform(struct?: CdnLoadbalancerDataGuardRulesPathOutputReference | CdnLoadbalancerDataGuardRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerDataGuardRulesPathToHclTerraform(struct?: CdnLoadbalancerDataGuardRulesPathOutputReference | CdnLoadbalancerDataGuardRulesPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDataGuardRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDataGuardRulesPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDataGuardRulesPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface CdnLoadbalancerDataGuardRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#apply_data_guard CdnLoadbalancer#apply_data_guard}
  */
  readonly applyDataGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#skip_data_guard CdnLoadbalancer#skip_data_guard}
  */
  readonly skipDataGuard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerDataGuardRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path: CdnLoadbalancerDataGuardRulesPath;
}

export function cdnLoadbalancerDataGuardRulesToTerraform(struct?: CdnLoadbalancerDataGuardRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    apply_data_guard: cdktf.booleanToTerraform(struct!.applyDataGuard),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    skip_data_guard: cdktf.booleanToTerraform(struct!.skipDataGuard),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    metadata: cdnLoadbalancerDataGuardRulesMetadataToTerraform(struct!.metadata),
    path: cdnLoadbalancerDataGuardRulesPathToTerraform(struct!.path),
  }
}


export function cdnLoadbalancerDataGuardRulesToHclTerraform(struct?: CdnLoadbalancerDataGuardRules | cdktf.IResolvable): any {
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
    apply_data_guard: {
      value: cdktf.booleanToHclTerraform(struct!.applyDataGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_data_guard: {
      value: cdktf.booleanToHclTerraform(struct!.skipDataGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdnLoadbalancerDataGuardRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDataGuardRulesMetadataList",
    },
    path: {
      value: cdnLoadbalancerDataGuardRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDataGuardRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDataGuardRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerDataGuardRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._applyDataGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyDataGuard = this._applyDataGuard;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._skipDataGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipDataGuard = this._skipDataGuard;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDataGuardRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._applyDataGuard = undefined;
      this._exactValue = undefined;
      this._skipDataGuard = undefined;
      this._suffixValue = undefined;
      this._metadata.internalValue = undefined;
      this._path.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._applyDataGuard = value.applyDataGuard;
      this._exactValue = value.exactValue;
      this._skipDataGuard = value.skipDataGuard;
      this._suffixValue = value.suffixValue;
      this._metadata.internalValue = value.metadata;
      this._path.internalValue = value.path;
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

  // apply_data_guard - computed: false, optional: true, required: false
  private _applyDataGuard?: boolean | cdktf.IResolvable; 
  public get applyDataGuard() {
    return this.getBooleanAttribute('apply_data_guard');
  }
  public set applyDataGuard(value: boolean | cdktf.IResolvable) {
    this._applyDataGuard = value;
  }
  public resetApplyDataGuard() {
    this._applyDataGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyDataGuardInput() {
    return this._applyDataGuard;
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

  // skip_data_guard - computed: false, optional: true, required: false
  private _skipDataGuard?: boolean | cdktf.IResolvable; 
  public get skipDataGuard() {
    return this.getBooleanAttribute('skip_data_guard');
  }
  public set skipDataGuard(value: boolean | cdktf.IResolvable) {
    this._skipDataGuard = value;
  }
  public resetSkipDataGuard() {
    this._skipDataGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDataGuardInput() {
    return this._skipDataGuard;
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerDataGuardRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerDataGuardRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new CdnLoadbalancerDataGuardRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerDataGuardRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class CdnLoadbalancerDataGuardRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerDataGuardRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerDataGuardRulesOutputReference {
    return new CdnLoadbalancerDataGuardRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct): any {
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

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct | undefined) {
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
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher): any {
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

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher): any {
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


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher): any {
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

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher | undefined) {
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
export interface CdnLoadbalancerDdosMitigationRulesDdosClientSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#country_list CdnLoadbalancer#country_list}
  */
  readonly countryList?: string[];
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct;
  /**
  * ja4_tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ja4_tls_fingerprint_matcher CdnLoadbalancer#ja4_tls_fingerprint_matcher}
  */
  readonly ja4TlsFingerprintMatcher?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher;
}

export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryList),
    asn_list: cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToTerraform(struct!.asnList),
    ja4_tls_fingerprint_matcher: cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToTerraform(struct!.ja4TlsFingerprintMatcher),
    tls_fingerprint_matcher: cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerDdosMitigationRulesDdosClientSourceToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference | CdnLoadbalancerDdosMitigationRulesDdosClientSource): any {
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
    asn_list: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructList",
    },
    ja4_tls_fingerprint_matcher: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherToHclTerraform(struct!.ja4TlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesDdosClientSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryList !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryList = this._countryList;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._ja4TlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4TlsFingerprintMatcher = this._ja4TlsFingerprintMatcher?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesDdosClientSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryList = undefined;
      this._asnList.internalValue = undefined;
      this._ja4TlsFingerprintMatcher.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryList = value.countryList;
      this._asnList.internalValue = value.asnList;
      this._ja4TlsFingerprintMatcher.internalValue = value.ja4TlsFingerprintMatcher;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
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

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // ja4_tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _ja4TlsFingerprintMatcher = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcherOutputReference(this, "ja4_tls_fingerprint_matcher");
  public get ja4TlsFingerprintMatcher() {
    return this._ja4TlsFingerprintMatcher;
  }
  public putJa4TlsFingerprintMatcher(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceJa4TlsFingerprintMatcher) {
    this._ja4TlsFingerprintMatcher.internalValue = value;
  }
  public resetJa4TlsFingerprintMatcher() {
    this._ja4TlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintMatcherInput() {
    return this._ja4TlsFingerprintMatcher.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerDdosMitigationRulesDdosClientSourceTlsFingerprintMatcher) {
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
export interface CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference | CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct): any {
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


export function cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference | CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct): any {
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

export class CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct | undefined {
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

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct | undefined) {
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
export interface CdnLoadbalancerDdosMitigationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerDdosMitigationRulesMetadataToTerraform(struct?: CdnLoadbalancerDdosMitigationRulesMetadataOutputReference | CdnLoadbalancerDdosMitigationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerDdosMitigationRulesMetadataToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRulesMetadataOutputReference | CdnLoadbalancerDdosMitigationRulesMetadata): any {
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

export class CdnLoadbalancerDdosMitigationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDdosMitigationRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerDdosMitigationRulesMetadata | undefined) {
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
export interface CdnLoadbalancerDdosMitigationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#block CdnLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * ddos_client_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ddos_client_source CdnLoadbalancer#ddos_client_source}
  */
  readonly ddosClientSource?: CdnLoadbalancerDdosMitigationRulesDdosClientSource;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerDdosMitigationRulesMetadata;
}

export function cdnLoadbalancerDdosMitigationRulesToTerraform(struct?: CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ddos_client_source: cdnLoadbalancerDdosMitigationRulesDdosClientSourceToTerraform(struct!.ddosClientSource),
    ip_prefix_list: cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToTerraform(struct!.ipPrefixList),
    metadata: cdnLoadbalancerDdosMitigationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerDdosMitigationRulesToHclTerraform(struct?: CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddos_client_source: {
      value: cdnLoadbalancerDdosMitigationRulesDdosClientSourceToHclTerraform(struct!.ddosClientSource),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesDdosClientSourceList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerDdosMitigationRulesIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesIpPrefixListStructList",
    },
    metadata: {
      value: cdnLoadbalancerDdosMitigationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerDdosMitigationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDdosMitigationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ddosClientSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosClientSource = this._ddosClientSource?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDdosMitigationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._block = undefined;
      this._expirationTimestamp = undefined;
      this._ddosClientSource.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._block = value.block;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ddosClientSource.internalValue = value.ddosClientSource;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._metadata.internalValue = value.metadata;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
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

  // ddos_client_source - computed: false, optional: true, required: false
  private _ddosClientSource = new CdnLoadbalancerDdosMitigationRulesDdosClientSourceOutputReference(this, "ddos_client_source");
  public get ddosClientSource() {
    return this._ddosClientSource;
  }
  public putDdosClientSource(value: CdnLoadbalancerDdosMitigationRulesDdosClientSource) {
    this._ddosClientSource.internalValue = value;
  }
  public resetDdosClientSource() {
    this._ddosClientSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosClientSourceInput() {
    return this._ddosClientSource.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerDdosMitigationRulesIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerDdosMitigationRulesIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerDdosMitigationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerDdosMitigationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerDdosMitigationRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerDdosMitigationRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerDdosMitigationRulesOutputReference {
    return new CdnLoadbalancerDdosMitigationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerDefaultCacheAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cache_disabled CdnLoadbalancer#cache_disabled}
  */
  readonly cacheDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cache_ttl_default CdnLoadbalancer#cache_ttl_default}
  */
  readonly cacheTtlDefault?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cache_ttl_override CdnLoadbalancer#cache_ttl_override}
  */
  readonly cacheTtlOverride?: string;
}

export function cdnLoadbalancerDefaultCacheActionToTerraform(struct?: CdnLoadbalancerDefaultCacheActionOutputReference | CdnLoadbalancerDefaultCacheAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_disabled: cdktf.booleanToTerraform(struct!.cacheDisabled),
    cache_ttl_default: cdktf.stringToTerraform(struct!.cacheTtlDefault),
    cache_ttl_override: cdktf.stringToTerraform(struct!.cacheTtlOverride),
  }
}


export function cdnLoadbalancerDefaultCacheActionToHclTerraform(struct?: CdnLoadbalancerDefaultCacheActionOutputReference | CdnLoadbalancerDefaultCacheAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.cacheDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_ttl_default: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_ttl_override: {
      value: cdktf.stringToHclTerraform(struct!.cacheTtlOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerDefaultCacheActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerDefaultCacheAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDisabled = this._cacheDisabled;
    }
    if (this._cacheTtlDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlDefault = this._cacheTtlDefault;
    }
    if (this._cacheTtlOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtlOverride = this._cacheTtlOverride;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerDefaultCacheAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheDisabled = undefined;
      this._cacheTtlDefault = undefined;
      this._cacheTtlOverride = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheDisabled = value.cacheDisabled;
      this._cacheTtlDefault = value.cacheTtlDefault;
      this._cacheTtlOverride = value.cacheTtlOverride;
    }
  }

  // cache_disabled - computed: false, optional: true, required: false
  private _cacheDisabled?: boolean | cdktf.IResolvable; 
  public get cacheDisabled() {
    return this.getBooleanAttribute('cache_disabled');
  }
  public set cacheDisabled(value: boolean | cdktf.IResolvable) {
    this._cacheDisabled = value;
  }
  public resetCacheDisabled() {
    this._cacheDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDisabledInput() {
    return this._cacheDisabled;
  }

  // cache_ttl_default - computed: false, optional: true, required: false
  private _cacheTtlDefault?: string; 
  public get cacheTtlDefault() {
    return this.getStringAttribute('cache_ttl_default');
  }
  public set cacheTtlDefault(value: string) {
    this._cacheTtlDefault = value;
  }
  public resetCacheTtlDefault() {
    this._cacheTtlDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlDefaultInput() {
    return this._cacheTtlDefault;
  }

  // cache_ttl_override - computed: false, optional: true, required: false
  private _cacheTtlOverride?: string; 
  public get cacheTtlOverride() {
    return this.getStringAttribute('cache_ttl_override');
  }
  public set cacheTtlOverride(value: string) {
    this._cacheTtlOverride = value;
  }
  public resetCacheTtlOverride() {
    this._cacheTtlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlOverrideInput() {
    return this._cacheTtlOverride;
  }
}
export interface CdnLoadbalancerEnableChallengeCaptchaChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToTerraform(struct?: CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToHclTerraform(struct?: CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallengeCaptchaChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableChallengeCaptchaChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface CdnLoadbalancerEnableChallengeJsChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerEnableChallengeJsChallengeParametersToTerraform(struct?: CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function cdnLoadbalancerEnableChallengeJsChallengeParametersToHclTerraform(struct?: CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference | CdnLoadbalancerEnableChallengeJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallengeJsChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableChallengeJsChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface CdnLoadbalancerEnableChallengeMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerEnableChallengeMaliciousUserMitigationToTerraform(struct?: CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference | CdnLoadbalancerEnableChallengeMaliciousUserMitigation): any {
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


export function cdnLoadbalancerEnableChallengeMaliciousUserMitigationToHclTerraform(struct?: CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference | CdnLoadbalancerEnableChallengeMaliciousUserMitigation): any {
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

export class CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallengeMaliciousUserMitigation | undefined {
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

  public set internalValue(value: CdnLoadbalancerEnableChallengeMaliciousUserMitigation | undefined) {
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
export interface CdnLoadbalancerEnableChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_captcha_challenge_parameters CdnLoadbalancer#default_captcha_challenge_parameters}
  */
  readonly defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_js_challenge_parameters CdnLoadbalancer#default_js_challenge_parameters}
  */
  readonly defaultJsChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_mitigation_settings CdnLoadbalancer#default_mitigation_settings}
  */
  readonly defaultMitigationSettings?: boolean | cdktf.IResolvable;
  /**
  * captcha_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#captcha_challenge_parameters CdnLoadbalancer#captcha_challenge_parameters}
  */
  readonly captchaChallengeParameters?: CdnLoadbalancerEnableChallengeCaptchaChallengeParameters;
  /**
  * js_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#js_challenge_parameters CdnLoadbalancer#js_challenge_parameters}
  */
  readonly jsChallengeParameters?: CdnLoadbalancerEnableChallengeJsChallengeParameters;
  /**
  * malicious_user_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#malicious_user_mitigation CdnLoadbalancer#malicious_user_mitigation}
  */
  readonly maliciousUserMitigation?: CdnLoadbalancerEnableChallengeMaliciousUserMitigation;
}

export function cdnLoadbalancerEnableChallengeToTerraform(struct?: CdnLoadbalancerEnableChallengeOutputReference | CdnLoadbalancerEnableChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_captcha_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultCaptchaChallengeParameters),
    default_js_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultJsChallengeParameters),
    default_mitigation_settings: cdktf.booleanToTerraform(struct!.defaultMitigationSettings),
    captcha_challenge_parameters: cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToTerraform(struct!.captchaChallengeParameters),
    js_challenge_parameters: cdnLoadbalancerEnableChallengeJsChallengeParametersToTerraform(struct!.jsChallengeParameters),
    malicious_user_mitigation: cdnLoadbalancerEnableChallengeMaliciousUserMitigationToTerraform(struct!.maliciousUserMitigation),
  }
}


export function cdnLoadbalancerEnableChallengeToHclTerraform(struct?: CdnLoadbalancerEnableChallengeOutputReference | CdnLoadbalancerEnableChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_captcha_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCaptchaChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_js_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultJsChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_mitigation_settings: {
      value: cdktf.booleanToHclTerraform(struct!.defaultMitigationSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_challenge_parameters: {
      value: cdnLoadbalancerEnableChallengeCaptchaChallengeParametersToHclTerraform(struct!.captchaChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableChallengeCaptchaChallengeParametersList",
    },
    js_challenge_parameters: {
      value: cdnLoadbalancerEnableChallengeJsChallengeParametersToHclTerraform(struct!.jsChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableChallengeJsChallengeParametersList",
    },
    malicious_user_mitigation: {
      value: cdnLoadbalancerEnableChallengeMaliciousUserMitigationToHclTerraform(struct!.maliciousUserMitigation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerEnableChallengeMaliciousUserMitigationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerEnableChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultCaptchaChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCaptchaChallengeParameters = this._defaultCaptchaChallengeParameters;
    }
    if (this._defaultJsChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJsChallengeParameters = this._defaultJsChallengeParameters;
    }
    if (this._defaultMitigationSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMitigationSettings = this._defaultMitigationSettings;
    }
    if (this._captchaChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaChallengeParameters = this._captchaChallengeParameters?.internalValue;
    }
    if (this._jsChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeParameters = this._jsChallengeParameters?.internalValue;
    }
    if (this._maliciousUserMitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUserMitigation = this._maliciousUserMitigation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultCaptchaChallengeParameters = undefined;
      this._defaultJsChallengeParameters = undefined;
      this._defaultMitigationSettings = undefined;
      this._captchaChallengeParameters.internalValue = undefined;
      this._jsChallengeParameters.internalValue = undefined;
      this._maliciousUserMitigation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultCaptchaChallengeParameters = value.defaultCaptchaChallengeParameters;
      this._defaultJsChallengeParameters = value.defaultJsChallengeParameters;
      this._defaultMitigationSettings = value.defaultMitigationSettings;
      this._captchaChallengeParameters.internalValue = value.captchaChallengeParameters;
      this._jsChallengeParameters.internalValue = value.jsChallengeParameters;
      this._maliciousUserMitigation.internalValue = value.maliciousUserMitigation;
    }
  }

  // default_captcha_challenge_parameters - computed: false, optional: true, required: false
  private _defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultCaptchaChallengeParameters() {
    return this.getBooleanAttribute('default_captcha_challenge_parameters');
  }
  public set defaultCaptchaChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultCaptchaChallengeParameters = value;
  }
  public resetDefaultCaptchaChallengeParameters() {
    this._defaultCaptchaChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCaptchaChallengeParametersInput() {
    return this._defaultCaptchaChallengeParameters;
  }

  // default_js_challenge_parameters - computed: false, optional: true, required: false
  private _defaultJsChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultJsChallengeParameters() {
    return this.getBooleanAttribute('default_js_challenge_parameters');
  }
  public set defaultJsChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultJsChallengeParameters = value;
  }
  public resetDefaultJsChallengeParameters() {
    this._defaultJsChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJsChallengeParametersInput() {
    return this._defaultJsChallengeParameters;
  }

  // default_mitigation_settings - computed: false, optional: true, required: false
  private _defaultMitigationSettings?: boolean | cdktf.IResolvable; 
  public get defaultMitigationSettings() {
    return this.getBooleanAttribute('default_mitigation_settings');
  }
  public set defaultMitigationSettings(value: boolean | cdktf.IResolvable) {
    this._defaultMitigationSettings = value;
  }
  public resetDefaultMitigationSettings() {
    this._defaultMitigationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMitigationSettingsInput() {
    return this._defaultMitigationSettings;
  }

  // captcha_challenge_parameters - computed: false, optional: true, required: false
  private _captchaChallengeParameters = new CdnLoadbalancerEnableChallengeCaptchaChallengeParametersOutputReference(this, "captcha_challenge_parameters");
  public get captchaChallengeParameters() {
    return this._captchaChallengeParameters;
  }
  public putCaptchaChallengeParameters(value: CdnLoadbalancerEnableChallengeCaptchaChallengeParameters) {
    this._captchaChallengeParameters.internalValue = value;
  }
  public resetCaptchaChallengeParameters() {
    this._captchaChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaChallengeParametersInput() {
    return this._captchaChallengeParameters.internalValue;
  }

  // js_challenge_parameters - computed: false, optional: true, required: false
  private _jsChallengeParameters = new CdnLoadbalancerEnableChallengeJsChallengeParametersOutputReference(this, "js_challenge_parameters");
  public get jsChallengeParameters() {
    return this._jsChallengeParameters;
  }
  public putJsChallengeParameters(value: CdnLoadbalancerEnableChallengeJsChallengeParameters) {
    this._jsChallengeParameters.internalValue = value;
  }
  public resetJsChallengeParameters() {
    this._jsChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeParametersInput() {
    return this._jsChallengeParameters.internalValue;
  }

  // malicious_user_mitigation - computed: false, optional: true, required: false
  private _maliciousUserMitigation = new CdnLoadbalancerEnableChallengeMaliciousUserMitigationOutputReference(this, "malicious_user_mitigation");
  public get maliciousUserMitigation() {
    return this._maliciousUserMitigation;
  }
  public putMaliciousUserMitigation(value: CdnLoadbalancerEnableChallengeMaliciousUserMitigation) {
    this._maliciousUserMitigation.internalValue = value;
  }
  public resetMaliciousUserMitigation() {
    this._maliciousUserMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUserMitigationInput() {
    return this._maliciousUserMitigation.internalValue;
  }
}
export interface CdnLoadbalancerEnableIpReputation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_threat_categories CdnLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function cdnLoadbalancerEnableIpReputationToTerraform(struct?: CdnLoadbalancerEnableIpReputationOutputReference | CdnLoadbalancerEnableIpReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function cdnLoadbalancerEnableIpReputationToHclTerraform(struct?: CdnLoadbalancerEnableIpReputationOutputReference | CdnLoadbalancerEnableIpReputation): any {
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

export class CdnLoadbalancerEnableIpReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerEnableIpReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerEnableIpReputation | undefined) {
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
export interface CdnLoadbalancerGraphqlRulesGraphqlSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_introspection CdnLoadbalancer#disable_introspection}
  */
  readonly disableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#enable_introspection CdnLoadbalancer#enable_introspection}
  */
  readonly enableIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_batched_queries CdnLoadbalancer#max_batched_queries}
  */
  readonly maxBatchedQueries: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_depth CdnLoadbalancer#max_depth}
  */
  readonly maxDepth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_total_length CdnLoadbalancer#max_total_length}
  */
  readonly maxTotalLength: number;
}

export function cdnLoadbalancerGraphqlRulesGraphqlSettingsToTerraform(struct?: CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference | CdnLoadbalancerGraphqlRulesGraphqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_introspection: cdktf.booleanToTerraform(struct!.disableIntrospection),
    enable_introspection: cdktf.booleanToTerraform(struct!.enableIntrospection),
    max_batched_queries: cdktf.numberToTerraform(struct!.maxBatchedQueries),
    max_depth: cdktf.numberToTerraform(struct!.maxDepth),
    max_total_length: cdktf.numberToTerraform(struct!.maxTotalLength),
  }
}


export function cdnLoadbalancerGraphqlRulesGraphqlSettingsToHclTerraform(struct?: CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference | CdnLoadbalancerGraphqlRulesGraphqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.disableIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_batched_queries: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchedQueries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_total_length: {
      value: cdktf.numberToHclTerraform(struct!.maxTotalLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerGraphqlRulesGraphqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIntrospection = this._disableIntrospection;
    }
    if (this._enableIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntrospection = this._enableIntrospection;
    }
    if (this._maxBatchedQueries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchedQueries = this._maxBatchedQueries;
    }
    if (this._maxDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDepth = this._maxDepth;
    }
    if (this._maxTotalLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTotalLength = this._maxTotalLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerGraphqlRulesGraphqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableIntrospection = undefined;
      this._enableIntrospection = undefined;
      this._maxBatchedQueries = undefined;
      this._maxDepth = undefined;
      this._maxTotalLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableIntrospection = value.disableIntrospection;
      this._enableIntrospection = value.enableIntrospection;
      this._maxBatchedQueries = value.maxBatchedQueries;
      this._maxDepth = value.maxDepth;
      this._maxTotalLength = value.maxTotalLength;
    }
  }

  // disable_introspection - computed: false, optional: true, required: false
  private _disableIntrospection?: boolean | cdktf.IResolvable; 
  public get disableIntrospection() {
    return this.getBooleanAttribute('disable_introspection');
  }
  public set disableIntrospection(value: boolean | cdktf.IResolvable) {
    this._disableIntrospection = value;
  }
  public resetDisableIntrospection() {
    this._disableIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIntrospectionInput() {
    return this._disableIntrospection;
  }

  // enable_introspection - computed: false, optional: true, required: false
  private _enableIntrospection?: boolean | cdktf.IResolvable; 
  public get enableIntrospection() {
    return this.getBooleanAttribute('enable_introspection');
  }
  public set enableIntrospection(value: boolean | cdktf.IResolvable) {
    this._enableIntrospection = value;
  }
  public resetEnableIntrospection() {
    this._enableIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntrospectionInput() {
    return this._enableIntrospection;
  }

  // max_batched_queries - computed: false, optional: false, required: true
  private _maxBatchedQueries?: number; 
  public get maxBatchedQueries() {
    return this.getNumberAttribute('max_batched_queries');
  }
  public set maxBatchedQueries(value: number) {
    this._maxBatchedQueries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchedQueriesInput() {
    return this._maxBatchedQueries;
  }

  // max_depth - computed: false, optional: false, required: true
  private _maxDepth?: number; 
  public get maxDepth() {
    return this.getNumberAttribute('max_depth');
  }
  public set maxDepth(value: number) {
    this._maxDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDepthInput() {
    return this._maxDepth;
  }

  // max_total_length - computed: false, optional: false, required: true
  private _maxTotalLength?: number; 
  public get maxTotalLength() {
    return this.getNumberAttribute('max_total_length');
  }
  public set maxTotalLength(value: number) {
    this._maxTotalLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTotalLengthInput() {
    return this._maxTotalLength;
  }
}
export interface CdnLoadbalancerGraphqlRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerGraphqlRulesMetadataToTerraform(struct?: CdnLoadbalancerGraphqlRulesMetadataOutputReference | CdnLoadbalancerGraphqlRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerGraphqlRulesMetadataToHclTerraform(struct?: CdnLoadbalancerGraphqlRulesMetadataOutputReference | CdnLoadbalancerGraphqlRulesMetadata): any {
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

export class CdnLoadbalancerGraphqlRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerGraphqlRulesMetadata | undefined {
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

  public set internalValue(value: CdnLoadbalancerGraphqlRulesMetadata | undefined) {
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
export interface CdnLoadbalancerGraphqlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_path CdnLoadbalancer#exact_path}
  */
  readonly exactPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#method_get CdnLoadbalancer#method_get}
  */
  readonly methodGet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#method_post CdnLoadbalancer#method_post}
  */
  readonly methodPost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * graphql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#graphql_settings CdnLoadbalancer#graphql_settings}
  */
  readonly graphqlSettings?: CdnLoadbalancerGraphqlRulesGraphqlSettings;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerGraphqlRulesMetadata;
}

export function cdnLoadbalancerGraphqlRulesToTerraform(struct?: CdnLoadbalancerGraphqlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    exact_path: cdktf.stringToTerraform(struct!.exactPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    method_get: cdktf.booleanToTerraform(struct!.methodGet),
    method_post: cdktf.booleanToTerraform(struct!.methodPost),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    graphql_settings: cdnLoadbalancerGraphqlRulesGraphqlSettingsToTerraform(struct!.graphqlSettings),
    metadata: cdnLoadbalancerGraphqlRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerGraphqlRulesToHclTerraform(struct?: CdnLoadbalancerGraphqlRules | cdktf.IResolvable): any {
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
    exact_path: {
      value: cdktf.stringToHclTerraform(struct!.exactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_get: {
      value: cdktf.booleanToHclTerraform(struct!.methodGet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method_post: {
      value: cdktf.booleanToHclTerraform(struct!.methodPost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graphql_settings: {
      value: cdnLoadbalancerGraphqlRulesGraphqlSettingsToHclTerraform(struct!.graphqlSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerGraphqlRulesGraphqlSettingsList",
    },
    metadata: {
      value: cdnLoadbalancerGraphqlRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerGraphqlRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerGraphqlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerGraphqlRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._exactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactPath = this._exactPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._methodGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodGet = this._methodGet;
    }
    if (this._methodPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodPost = this._methodPost;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._graphqlSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphqlSettings = this._graphqlSettings?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerGraphqlRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._exactPath = undefined;
      this._exactValue = undefined;
      this._methodGet = undefined;
      this._methodPost = undefined;
      this._suffixValue = undefined;
      this._graphqlSettings.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._exactPath = value.exactPath;
      this._exactValue = value.exactValue;
      this._methodGet = value.methodGet;
      this._methodPost = value.methodPost;
      this._suffixValue = value.suffixValue;
      this._graphqlSettings.internalValue = value.graphqlSettings;
      this._metadata.internalValue = value.metadata;
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

  // exact_path - computed: false, optional: false, required: true
  private _exactPath?: string; 
  public get exactPath() {
    return this.getStringAttribute('exact_path');
  }
  public set exactPath(value: string) {
    this._exactPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exactPathInput() {
    return this._exactPath;
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

  // method_get - computed: false, optional: true, required: false
  private _methodGet?: boolean | cdktf.IResolvable; 
  public get methodGet() {
    return this.getBooleanAttribute('method_get');
  }
  public set methodGet(value: boolean | cdktf.IResolvable) {
    this._methodGet = value;
  }
  public resetMethodGet() {
    this._methodGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodGetInput() {
    return this._methodGet;
  }

  // method_post - computed: false, optional: true, required: false
  private _methodPost?: boolean | cdktf.IResolvable; 
  public get methodPost() {
    return this.getBooleanAttribute('method_post');
  }
  public set methodPost(value: boolean | cdktf.IResolvable) {
    this._methodPost = value;
  }
  public resetMethodPost() {
    this._methodPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPostInput() {
    return this._methodPost;
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

  // graphql_settings - computed: false, optional: true, required: false
  private _graphqlSettings = new CdnLoadbalancerGraphqlRulesGraphqlSettingsOutputReference(this, "graphql_settings");
  public get graphqlSettings() {
    return this._graphqlSettings;
  }
  public putGraphqlSettings(value: CdnLoadbalancerGraphqlRulesGraphqlSettings) {
    this._graphqlSettings.internalValue = value;
  }
  public resetGraphqlSettings() {
    this._graphqlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphqlSettingsInput() {
    return this._graphqlSettings.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerGraphqlRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerGraphqlRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerGraphqlRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerGraphqlRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerGraphqlRulesOutputReference {
    return new CdnLoadbalancerGraphqlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#dns_volterra_managed CdnLoadbalancer#dns_volterra_managed}
  */
  readonly dnsVolterraManaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#port CdnLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#port_ranges CdnLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
}

export function cdnLoadbalancerHttpToTerraform(struct?: CdnLoadbalancerHttpOutputReference | CdnLoadbalancerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_volterra_managed: cdktf.booleanToTerraform(struct!.dnsVolterraManaged),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function cdnLoadbalancerHttpToHclTerraform(struct?: CdnLoadbalancerHttpOutputReference | CdnLoadbalancerHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_volterra_managed: {
      value: cdktf.booleanToHclTerraform(struct!.dnsVolterraManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class CdnLoadbalancerHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsVolterraManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsVolterraManaged = this._dnsVolterraManaged;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsVolterraManaged = undefined;
      this._port = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsVolterraManaged = value.dnsVolterraManaged;
      this._port = value.port;
      this._portRanges = value.portRanges;
    }
  }

  // dns_volterra_managed - computed: false, optional: true, required: false
  private _dnsVolterraManaged?: boolean | cdktf.IResolvable; 
  public get dnsVolterraManaged() {
    return this.getBooleanAttribute('dns_volterra_managed');
  }
  public set dnsVolterraManaged(value: boolean | cdktf.IResolvable) {
    this._dnsVolterraManaged = value;
  }
  public resetDnsVolterraManaged() {
    this._dnsVolterraManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsVolterraManagedInput() {
    return this._dnsVolterraManaged;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates | cdktf.IResolvable | undefined) {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesOutputReference {
    return new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cipher_suites CdnLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_version CdnLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#min_version CdnLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_security CdnLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#low_security CdnLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#medium_security CdnLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_security CdnLoadbalancer#custom_security}
  */
  readonly customSecurity?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#xfcc_header_elements CdnLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_certificate_optional CdnLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_crl CdnLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#trusted_ca_url CdnLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#xfcc_disabled CdnLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#crl CdnLoadbalancer#crl}
  */
  readonly crl?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#trusted_ca CdnLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#xfcc_options CdnLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
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
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlList",
    },
    trusted_ca: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
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

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_mtls CdnLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#certificates CdnLoadbalancer#certificates}
  */
  readonly certificates: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_mtls CdnLoadbalancer#use_mtls}
  */
  readonly useMtls?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    certificates: cdktf.listMapper(cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToTerraform, true)(struct!.certificates),
    tls_config: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToTerraform(struct!.useMtls),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificates: {
      value: cdktf.listMapperHcl(cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesList",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigList",
    },
    use_mtls: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._certificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._certificates.internalValue = value.certificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#hash_algorithms CdnLoadbalancer#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling {
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyClearSecretInfo) {
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
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults {
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#certificate_url CdnLoadbalancer#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_hash_algorithms CdnLoadbalancer#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_ocsp_stapling CdnLoadbalancer#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#private_key CdnLoadbalancer#private_key}
  */
  readonly privateKey: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_system_defaults CdnLoadbalancer#use_system_defaults}
  */
  readonly useSystemDefaults?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable): any {
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
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _customHashAlgorithms = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesUseSystemDefaults) {
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

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesOutputReference {
    return new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cipher_suites CdnLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_version CdnLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#min_version CdnLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
