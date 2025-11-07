import * as cdktf from 'cdktf';
import { HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct,
httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform,
httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform,
HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference,
HttpLoadbalancerApiRateLimitApiEndpointRules,
httpLoadbalancerApiRateLimitApiEndpointRulesToTerraform,
httpLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform,
HttpLoadbalancerApiRateLimitApiEndpointRulesList,
HttpLoadbalancerApiRateLimitBypassRateLimitingRules,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform,
httpLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform,
HttpLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference,
HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct,
httpLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform,
httpLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform,
HttpLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference,
HttpLoadbalancerApiRateLimitIpAllowedListStruct,
httpLoadbalancerApiRateLimitIpAllowedListStructToTerraform,
httpLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform,
HttpLoadbalancerApiRateLimitIpAllowedListStructOutputReference } from './structs0'
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher | undefined) {
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
  private _asnSets = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_threat_categories HttpLoadbalancer#ip_threat_categories}
  */
  readonly ipThreatCategories: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_threat_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipThreatCategories),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipThreatCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatCategories = this._ipThreatCategories;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct;
  /**
  * ip_threat_category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_threat_category_list HttpLoadbalancer#ip_threat_category_list}
  */
  readonly ipThreatCategoryList?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    asn_list: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToTerraform(struct!.asnMatcher),
    client_selector: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_threat_category_list: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToTerraform(struct!.ipThreatCategoryList),
    tls_fingerprint_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructList",
    },
    ip_threat_category_list: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructToHclTerraform(struct!.ipThreatCategoryList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher | undefined) {
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
  private _asnList = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherAsnMatcher) {
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
  private _clientSelector = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherClientSelector) {
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
  private _ipMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpPrefixListStruct) {
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
  private _ipThreatCategoryList = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStructOutputReference(this, "ip_threat_category_list");
  public get ipThreatCategoryList() {
    return this._ipThreatCategoryList;
  }
  public putIpThreatCategoryList(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherIpThreatCategoryListStruct) {
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
  private _tlsFingerprintMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherTlsFingerprintMatcher) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#threshold HttpLoadbalancer#threshold}
  */
  readonly threshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#unit HttpLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#use_http_lb_user_id HttpLoadbalancer#use_http_lb_user_id}
  */
  readonly useHttpLbUserId?: boolean | cdktf.IResolvable;
  /**
  * ref_user_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ref_user_id HttpLoadbalancer#ref_user_id}
  */
  readonly refUserId?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    threshold: cdktf.numberToTerraform(struct!.threshold),
    unit: cdktf.stringToTerraform(struct!.unit),
    use_http_lb_user_id: cdktf.booleanToTerraform(struct!.useHttpLbUserId),
    ref_user_id: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToTerraform(struct!.refUserId),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdToHclTerraform(struct!.refUserId),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter | undefined) {
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
  private _refUserId = new HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserIdOutputReference(this, "ref_user_id");
  public get refUserId() {
    return this._refUserId;
  }
  public putRefUserId(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterRefUserId) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem): any {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    item: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsItem) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher {
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#jwt_claims HttpLoadbalancer#jwt_claims}
  */
  readonly jwtClaims?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_matchers: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    headers: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToTerraform, true)(struct!.headers),
    jwt_claims: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToTerraform, true)(struct!.jwtClaims),
    query_params: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference | HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList",
    },
    jwt_claims: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsToHclTerraform, true)(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher | undefined) {
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
  private _cookieMatchers = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherCookieMatchers[] | cdktf.IResolvable) {
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
  private _headers = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherHeaders[] | cdktf.IResolvable) {
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
  private _jwtClaims = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaimsList(this, "jwt_claims", false);
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherJwtClaims[] | cdktf.IResolvable) {
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
  private _queryParams = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherQueryParams[] | cdktf.IResolvable) {
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
export interface HttpLoadbalancerApiRateLimitServerUrlRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * client_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#client_matcher HttpLoadbalancer#client_matcher}
  */
  readonly clientMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher;
  /**
  * inline_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#inline_rate_limiter HttpLoadbalancer#inline_rate_limiter}
  */
  readonly inlineRateLimiter?: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter;
  /**
  * ref_rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ref_rate_limiter HttpLoadbalancer#ref_rate_limiter}
  */
  readonly refRateLimiter?: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter;
  /**
  * request_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#request_matcher HttpLoadbalancer#request_matcher}
  */
  readonly requestMatcher?: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher;
}

export function httpLoadbalancerApiRateLimitServerUrlRulesToTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    client_matcher: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToTerraform(struct!.clientMatcher),
    inline_rate_limiter: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToTerraform(struct!.inlineRateLimiter),
    ref_rate_limiter: httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToTerraform(struct!.refRateLimiter),
    request_matcher: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToTerraform(struct!.requestMatcher),
  }
}


export function httpLoadbalancerApiRateLimitServerUrlRulesToHclTerraform(struct?: HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable): any {
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
      value: httpLoadbalancerApiRateLimitServerUrlRulesClientMatcherToHclTerraform(struct!.clientMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherList",
    },
    inline_rate_limiter: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterToHclTerraform(struct!.inlineRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterList",
    },
    ref_rate_limiter: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterToHclTerraform(struct!.refRateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterList",
    },
    request_matcher: {
      value: httpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherToHclTerraform(struct!.requestMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitServerUrlRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimitServerUrlRules | cdktf.IResolvable | undefined) {
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
  private _clientMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcherOutputReference(this, "client_matcher");
  public get clientMatcher() {
    return this._clientMatcher;
  }
  public putClientMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesClientMatcher) {
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
  private _inlineRateLimiter = new HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiterOutputReference(this, "inline_rate_limiter");
  public get inlineRateLimiter() {
    return this._inlineRateLimiter;
  }
  public putInlineRateLimiter(value: HttpLoadbalancerApiRateLimitServerUrlRulesInlineRateLimiter) {
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
  private _refRateLimiter = new HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiterOutputReference(this, "ref_rate_limiter");
  public get refRateLimiter() {
    return this._refRateLimiter;
  }
  public putRefRateLimiter(value: HttpLoadbalancerApiRateLimitServerUrlRulesRefRateLimiter) {
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
  private _requestMatcher = new HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcherOutputReference(this, "request_matcher");
  public get requestMatcher() {
    return this._requestMatcher;
  }
  public putRequestMatcher(value: HttpLoadbalancerApiRateLimitServerUrlRulesRequestMatcher) {
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

export class HttpLoadbalancerApiRateLimitServerUrlRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiRateLimitServerUrlRulesOutputReference {
    return new HttpLoadbalancerApiRateLimitServerUrlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#no_ip_allowed_list HttpLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * api_endpoint_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_endpoint_rules HttpLoadbalancer#api_endpoint_rules}
  */
  readonly apiEndpointRules?: HttpLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable;
  /**
  * bypass_rate_limiting_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#bypass_rate_limiting_rules HttpLoadbalancer#bypass_rate_limiting_rules}
  */
  readonly bypassRateLimitingRules?: HttpLoadbalancerApiRateLimitBypassRateLimitingRules;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#custom_ip_allowed_list HttpLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_allowed_list HttpLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: HttpLoadbalancerApiRateLimitIpAllowedListStruct;
  /**
  * server_url_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#server_url_rules HttpLoadbalancer#server_url_rules}
  */
  readonly serverUrlRules?: HttpLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiRateLimitToTerraform(struct?: HttpLoadbalancerApiRateLimitOutputReference | HttpLoadbalancerApiRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    api_endpoint_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitApiEndpointRulesToTerraform, true)(struct!.apiEndpointRules),
    bypass_rate_limiting_rules: httpLoadbalancerApiRateLimitBypassRateLimitingRulesToTerraform(struct!.bypassRateLimitingRules),
    custom_ip_allowed_list: httpLoadbalancerApiRateLimitCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: httpLoadbalancerApiRateLimitIpAllowedListStructToTerraform(struct!.ipAllowedList),
    server_url_rules: cdktf.listMapper(httpLoadbalancerApiRateLimitServerUrlRulesToTerraform, true)(struct!.serverUrlRules),
  }
}


export function httpLoadbalancerApiRateLimitToHclTerraform(struct?: HttpLoadbalancerApiRateLimitOutputReference | HttpLoadbalancerApiRateLimit): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitApiEndpointRulesToHclTerraform, true)(struct!.apiEndpointRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitApiEndpointRulesList",
    },
    bypass_rate_limiting_rules: {
      value: httpLoadbalancerApiRateLimitBypassRateLimitingRulesToHclTerraform(struct!.bypassRateLimitingRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitBypassRateLimitingRulesList",
    },
    custom_ip_allowed_list: {
      value: httpLoadbalancerApiRateLimitCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: httpLoadbalancerApiRateLimitIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitIpAllowedListStructList",
    },
    server_url_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiRateLimitServerUrlRulesToHclTerraform, true)(struct!.serverUrlRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiRateLimitServerUrlRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiRateLimit | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiRateLimit | undefined) {
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
  private _apiEndpointRules = new HttpLoadbalancerApiRateLimitApiEndpointRulesList(this, "api_endpoint_rules", false);
  public get apiEndpointRules() {
    return this._apiEndpointRules;
  }
  public putApiEndpointRules(value: HttpLoadbalancerApiRateLimitApiEndpointRules[] | cdktf.IResolvable) {
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
  private _bypassRateLimitingRules = new HttpLoadbalancerApiRateLimitBypassRateLimitingRulesOutputReference(this, "bypass_rate_limiting_rules");
  public get bypassRateLimitingRules() {
    return this._bypassRateLimitingRules;
  }
  public putBypassRateLimitingRules(value: HttpLoadbalancerApiRateLimitBypassRateLimitingRules) {
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
  private _customIpAllowedList = new HttpLoadbalancerApiRateLimitCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: HttpLoadbalancerApiRateLimitCustomIpAllowedListStruct) {
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
  private _ipAllowedList = new HttpLoadbalancerApiRateLimitIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: HttpLoadbalancerApiRateLimitIpAllowedListStruct) {
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
  private _serverUrlRules = new HttpLoadbalancerApiRateLimitServerUrlRulesList(this, "server_url_rules", false);
  public get serverUrlRules() {
    return this._serverUrlRules;
  }
  public putServerUrlRules(value: HttpLoadbalancerApiRateLimitServerUrlRules[] | cdktf.IResolvable) {
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
export interface HttpLoadbalancerApiSpecificationApiDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerApiSpecificationApiDefinitionToTerraform(struct?: HttpLoadbalancerApiSpecificationApiDefinitionOutputReference | HttpLoadbalancerApiSpecificationApiDefinition): any {
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


export function httpLoadbalancerApiSpecificationApiDefinitionToHclTerraform(struct?: HttpLoadbalancerApiSpecificationApiDefinitionOutputReference | HttpLoadbalancerApiSpecificationApiDefinition): any {
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

export class HttpLoadbalancerApiSpecificationApiDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationApiDefinition | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationApiDefinition | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
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

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#action_block HttpLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#action_report HttpLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#action_skip HttpLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_block: cdktf.booleanToTerraform(struct!.actionBlock),
    action_report: cdktf.booleanToTerraform(struct!.actionReport),
    action_skip: cdktf.booleanToTerraform(struct!.actionSkip),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    api_endpoint: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_block: {
      value: cdktf.booleanToHclTerraform(struct!.actionBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_report: {
      value: cdktf.booleanToHclTerraform(struct!.actionReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_skip: {
      value: cdktf.booleanToHclTerraform(struct!.actionSkip),
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
    api_endpoint: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock;
    }
    if (this._actionReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionReport = this._actionReport;
    }
    if (this._actionSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSkip = this._actionSkip;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionBlock = undefined;
      this._actionReport = undefined;
      this._actionSkip = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionBlock = value.actionBlock;
      this._actionReport = value.actionReport;
      this._actionSkip = value.actionSkip;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
    }
  }

  // action_block - computed: false, optional: true, required: false
  private _actionBlock?: boolean | cdktf.IResolvable; 
  public get actionBlock() {
    return this.getBooleanAttribute('action_block');
  }
  public set actionBlock(value: boolean | cdktf.IResolvable) {
    this._actionBlock = value;
  }
  public resetActionBlock() {
    this._actionBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock;
  }

  // action_report - computed: false, optional: true, required: false
  private _actionReport?: boolean | cdktf.IResolvable; 
  public get actionReport() {
    return this.getBooleanAttribute('action_report');
  }
  public set actionReport(value: boolean | cdktf.IResolvable) {
    this._actionReport = value;
  }
  public resetActionReport() {
    this._actionReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionReportInput() {
    return this._actionReport;
  }

  // action_skip - computed: false, optional: true, required: false
  private _actionSkip?: boolean | cdktf.IResolvable; 
  public get actionSkip() {
    return this.getBooleanAttribute('action_skip');
  }
  public set actionSkip(value: boolean | cdktf.IResolvable) {
    this._actionSkip = value;
  }
  public resetActionSkip() {
    this._actionSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSkipInput() {
    return this._actionSkip;
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

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#open_api_validation_rules HttpLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._openApiValidationRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
    }
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#fall_through_mode_allow HttpLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#fall_through_mode_custom HttpLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_through_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.fallThroughModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fall_through_mode_custom: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallThroughModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughModeAllow = this._fallThroughModeAllow;
    }
    if (this._fallThroughModeCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughModeCustom = this._fallThroughModeCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallThroughModeAllow = undefined;
      this._fallThroughModeCustom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallThroughModeAllow = value.fallThroughModeAllow;
      this._fallThroughModeCustom.internalValue = value.fallThroughModeCustom;
    }
  }

  // fall_through_mode_allow - computed: false, optional: true, required: false
  private _fallThroughModeAllow?: boolean | cdktf.IResolvable; 
  public get fallThroughModeAllow() {
    return this.getBooleanAttribute('fall_through_mode_allow');
  }
  public set fallThroughModeAllow(value: boolean | cdktf.IResolvable) {
    this._fallThroughModeAllow = value;
  }
  public resetFallThroughModeAllow() {
    this._fallThroughModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeAllowInput() {
    return this._fallThroughModeAllow;
  }

  // fall_through_mode_custom - computed: false, optional: true, required: false
  private _fallThroughModeCustom = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeFallThroughModeCustom) {
    this._fallThroughModeCustom.internalValue = value;
  }
  public resetFallThroughModeCustom() {
    this._fallThroughModeCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeCustomInput() {
    return this._fallThroughModeCustom.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#allow_additional_parameters HttpLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#disallow_additional_parameters HttpLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_additional_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.allowAdditionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_additional_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.disallowAdditionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdditionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdditionalParameters = this._allowAdditionalParameters;
    }
    if (this._disallowAdditionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowAdditionalParameters = this._disallowAdditionalParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdditionalParameters = undefined;
      this._disallowAdditionalParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdditionalParameters = value.allowAdditionalParameters;
      this._disallowAdditionalParameters = value.disallowAdditionalParameters;
    }
  }

  // allow_additional_parameters - computed: false, optional: true, required: false
  private _allowAdditionalParameters?: boolean | cdktf.IResolvable; 
  public get allowAdditionalParameters() {
    return this.getBooleanAttribute('allow_additional_parameters');
  }
  public set allowAdditionalParameters(value: boolean | cdktf.IResolvable) {
    this._allowAdditionalParameters = value;
  }
  public resetAllowAdditionalParameters() {
    this._allowAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdditionalParametersInput() {
    return this._allowAdditionalParameters;
  }

  // disallow_additional_parameters - computed: false, optional: true, required: false
  private _disallowAdditionalParameters?: boolean | cdktf.IResolvable; 
  public get disallowAdditionalParameters() {
    return this.getBooleanAttribute('disallow_additional_parameters');
  }
  public set disallowAdditionalParameters(value: boolean | cdktf.IResolvable) {
    this._disallowAdditionalParameters = value;
  }
  public resetDisallowAdditionalParameters() {
    this._disallowAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowAdditionalParametersInput() {
    return this._disallowAdditionalParameters;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom {
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#query_parameters HttpLoadbalancer#query_parameters}
  */
  readonly queryParameters?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_parameters: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_parameters: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomQueryParameters) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#oversized_body_fail_validation HttpLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#oversized_body_skip_validation HttpLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#property_validation_settings_default HttpLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#property_validation_settings_custom HttpLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    property_validation_settings_default: cdktf.booleanToTerraform(struct!.propertyValidationSettingsDefault),
    property_validation_settings_custom: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oversized_body_fail_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodyFailValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oversized_body_skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodySkipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property_validation_settings_default: {
      value: cdktf.booleanToHclTerraform(struct!.propertyValidationSettingsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property_validation_settings_custom: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedBodyFailValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodyFailValidation = this._oversizedBodyFailValidation;
    }
    if (this._oversizedBodySkipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodySkipValidation = this._oversizedBodySkipValidation;
    }
    if (this._propertyValidationSettingsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValidationSettingsDefault = this._propertyValidationSettingsDefault;
    }
    if (this._propertyValidationSettingsCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValidationSettingsCustom = this._propertyValidationSettingsCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedBodyFailValidation = undefined;
      this._oversizedBodySkipValidation = undefined;
      this._propertyValidationSettingsDefault = undefined;
      this._propertyValidationSettingsCustom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedBodyFailValidation = value.oversizedBodyFailValidation;
      this._oversizedBodySkipValidation = value.oversizedBodySkipValidation;
      this._propertyValidationSettingsDefault = value.propertyValidationSettingsDefault;
      this._propertyValidationSettingsCustom.internalValue = value.propertyValidationSettingsCustom;
    }
  }

  // oversized_body_fail_validation - computed: false, optional: true, required: false
  private _oversizedBodyFailValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodyFailValidation() {
    return this.getBooleanAttribute('oversized_body_fail_validation');
  }
  public set oversizedBodyFailValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodyFailValidation = value;
  }
  public resetOversizedBodyFailValidation() {
    this._oversizedBodyFailValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodyFailValidationInput() {
    return this._oversizedBodyFailValidation;
  }

  // oversized_body_skip_validation - computed: false, optional: true, required: false
  private _oversizedBodySkipValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodySkipValidation() {
    return this.getBooleanAttribute('oversized_body_skip_validation');
  }
  public set oversizedBodySkipValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodySkipValidation = value;
  }
  public resetOversizedBodySkipValidation() {
    this._oversizedBodySkipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodySkipValidationInput() {
    return this._oversizedBodySkipValidation;
  }

  // property_validation_settings_default - computed: false, optional: true, required: false
  private _propertyValidationSettingsDefault?: boolean | cdktf.IResolvable; 
  public get propertyValidationSettingsDefault() {
    return this.getBooleanAttribute('property_validation_settings_default');
  }
  public set propertyValidationSettingsDefault(value: boolean | cdktf.IResolvable) {
    this._propertyValidationSettingsDefault = value;
  }
  public resetPropertyValidationSettingsDefault() {
    this._propertyValidationSettingsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValidationSettingsDefaultInput() {
    return this._propertyValidationSettingsDefault;
  }

  // property_validation_settings_custom - computed: false, optional: true, required: false
  private _propertyValidationSettingsCustom = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsPropertyValidationSettingsCustom) {
    this._propertyValidationSettingsCustom.internalValue = value;
  }
  public resetPropertyValidationSettingsCustom() {
    this._propertyValidationSettingsCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValidationSettingsCustomInput() {
    return this._propertyValidationSettingsCustom.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_block HttpLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_report HttpLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#response_validation_properties HttpLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_block: cdktf.booleanToTerraform(struct!.enforcementBlock),
    enforcement_report: cdktf.booleanToTerraform(struct!.enforcementReport),
    response_validation_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseValidationProperties),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_block: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_report: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_validation_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseValidationProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementBlock = this._enforcementBlock;
    }
    if (this._enforcementReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementReport = this._enforcementReport;
    }
    if (this._responseValidationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseValidationProperties = this._responseValidationProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementBlock = undefined;
      this._enforcementReport = undefined;
      this._responseValidationProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementBlock = value.enforcementBlock;
      this._enforcementReport = value.enforcementReport;
      this._responseValidationProperties = value.responseValidationProperties;
    }
  }

  // enforcement_block - computed: false, optional: true, required: false
  private _enforcementBlock?: boolean | cdktf.IResolvable; 
  public get enforcementBlock() {
    return this.getBooleanAttribute('enforcement_block');
  }
  public set enforcementBlock(value: boolean | cdktf.IResolvable) {
    this._enforcementBlock = value;
  }
  public resetEnforcementBlock() {
    this._enforcementBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementBlockInput() {
    return this._enforcementBlock;
  }

  // enforcement_report - computed: false, optional: true, required: false
  private _enforcementReport?: boolean | cdktf.IResolvable; 
  public get enforcementReport() {
    return this.getBooleanAttribute('enforcement_report');
  }
  public set enforcementReport(value: boolean | cdktf.IResolvable) {
    this._enforcementReport = value;
  }
  public resetEnforcementReport() {
    this._enforcementReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementReportInput() {
    return this._enforcementReport;
  }

  // response_validation_properties - computed: false, optional: false, required: true
  private _responseValidationProperties?: string[]; 
  public get responseValidationProperties() {
    return this.getListAttribute('response_validation_properties');
  }
  public set responseValidationProperties(value: string[]) {
    this._responseValidationProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseValidationPropertiesInput() {
    return this._responseValidationProperties;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_block HttpLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_report HttpLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#request_validation_properties HttpLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_block: cdktf.booleanToTerraform(struct!.enforcementBlock),
    enforcement_report: cdktf.booleanToTerraform(struct!.enforcementReport),
    request_validation_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestValidationProperties),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_block: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_report: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_validation_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestValidationProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementBlock = this._enforcementBlock;
    }
    if (this._enforcementReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementReport = this._enforcementReport;
    }
    if (this._requestValidationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestValidationProperties = this._requestValidationProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementBlock = undefined;
      this._enforcementReport = undefined;
      this._requestValidationProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementBlock = value.enforcementBlock;
      this._enforcementReport = value.enforcementReport;
      this._requestValidationProperties = value.requestValidationProperties;
    }
  }

  // enforcement_block - computed: false, optional: true, required: false
  private _enforcementBlock?: boolean | cdktf.IResolvable; 
  public get enforcementBlock() {
    return this.getBooleanAttribute('enforcement_block');
  }
  public set enforcementBlock(value: boolean | cdktf.IResolvable) {
    this._enforcementBlock = value;
  }
  public resetEnforcementBlock() {
    this._enforcementBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementBlockInput() {
    return this._enforcementBlock;
  }

  // enforcement_report - computed: false, optional: true, required: false
  private _enforcementReport?: boolean | cdktf.IResolvable; 
  public get enforcementReport() {
    return this.getBooleanAttribute('enforcement_report');
  }
  public set enforcementReport(value: boolean | cdktf.IResolvable) {
    this._enforcementReport = value;
  }
  public resetEnforcementReport() {
    this._enforcementReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementReportInput() {
    return this._enforcementReport;
  }

  // request_validation_properties - computed: false, optional: false, required: true
  private _requestValidationProperties?: string[]; 
  public get requestValidationProperties() {
    return this.getListAttribute('request_validation_properties');
  }
  public set requestValidationProperties(value: string[]) {
    this._requestValidationProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestValidationPropertiesInput() {
    return this._requestValidationProperties;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#skip_response_validation HttpLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#skip_validation HttpLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#response_validation_mode_active HttpLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_mode_active HttpLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_response_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipResponseValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_validation_mode_active: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipResponseValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipResponseValidation = this._skipResponseValidation;
    }
    if (this._skipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipValidation = this._skipValidation;
    }
    if (this._responseValidationModeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseValidationModeActive = this._responseValidationModeActive?.internalValue;
    }
    if (this._validationModeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationModeActive = this._validationModeActive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipResponseValidation = undefined;
      this._skipValidation = undefined;
      this._responseValidationModeActive.internalValue = undefined;
      this._validationModeActive.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipResponseValidation = value.skipResponseValidation;
      this._skipValidation = value.skipValidation;
      this._responseValidationModeActive.internalValue = value.responseValidationModeActive;
      this._validationModeActive.internalValue = value.validationModeActive;
    }
  }

  // skip_response_validation - computed: false, optional: true, required: false
  private _skipResponseValidation?: boolean | cdktf.IResolvable; 
  public get skipResponseValidation() {
    return this.getBooleanAttribute('skip_response_validation');
  }
  public set skipResponseValidation(value: boolean | cdktf.IResolvable) {
    this._skipResponseValidation = value;
  }
  public resetSkipResponseValidation() {
    this._skipResponseValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResponseValidationInput() {
    return this._skipResponseValidation;
  }

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // response_validation_mode_active - computed: false, optional: true, required: false
  private _responseValidationModeActive = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeResponseValidationModeActive) {
    this._responseValidationModeActive.internalValue = value;
  }
  public resetResponseValidationModeActive() {
    this._responseValidationModeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseValidationModeActiveInput() {
    return this._responseValidationModeActive.internalValue;
  }

  // validation_mode_active - computed: false, optional: true, required: false
  private _validationModeActive = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeValidationModeActive) {
    this._validationModeActive.internalValue = value;
  }
  public resetValidationModeActive() {
    this._validationModeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeActiveInput() {
    return this._validationModeActive.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints {
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#fall_through_mode HttpLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#settings HttpLoadbalancer#settings}
  */
  readonly settings?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_mode HttpLoadbalancer#validation_mode}
  */
  readonly validationMode: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode;
}

export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToTerraform(struct!.fallThroughMode),
    settings: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToTerraform(struct!.settings),
    validation_mode: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToTerraform(struct!.validationMode),
  }
}


export function httpLoadbalancerApiSpecificationValidationAllSpecEndpointsToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference | HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_through_mode: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeList",
    },
    settings: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsList",
    },
    validation_mode: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallThroughMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughMode = this._fallThroughMode?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    if (this._validationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallThroughMode.internalValue = undefined;
      this._settings.internalValue = undefined;
      this._validationMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallThroughMode.internalValue = value.fallThroughMode;
      this._settings.internalValue = value.settings;
      this._validationMode.internalValue = value.validationMode;
    }
  }

  // fall_through_mode - computed: false, optional: false, required: true
  private _fallThroughMode = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // validation_mode - computed: false, optional: false, required: true
  private _validationMode = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint): any {
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

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata): any {
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

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#action_block HttpLoadbalancer#action_block}
  */
  readonly actionBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#action_report HttpLoadbalancer#action_report}
  */
  readonly actionReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#action_skip HttpLoadbalancer#action_skip}
  */
  readonly actionSkip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_block: cdktf.booleanToTerraform(struct!.actionBlock),
    action_report: cdktf.booleanToTerraform(struct!.actionReport),
    action_skip: cdktf.booleanToTerraform(struct!.actionSkip),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    api_endpoint: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_block: {
      value: cdktf.booleanToHclTerraform(struct!.actionBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_report: {
      value: cdktf.booleanToHclTerraform(struct!.actionReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_skip: {
      value: cdktf.booleanToHclTerraform(struct!.actionSkip),
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
    api_endpoint: {
      value: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock;
    }
    if (this._actionReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionReport = this._actionReport;
    }
    if (this._actionSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSkip = this._actionSkip;
    }
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionBlock = undefined;
      this._actionReport = undefined;
      this._actionSkip = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionBlock = value.actionBlock;
      this._actionReport = value.actionReport;
      this._actionSkip = value.actionSkip;
      this._apiGroup = value.apiGroup;
      this._basePath = value.basePath;
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
    }
  }

  // action_block - computed: false, optional: true, required: false
  private _actionBlock?: boolean | cdktf.IResolvable; 
  public get actionBlock() {
    return this.getBooleanAttribute('action_block');
  }
  public set actionBlock(value: boolean | cdktf.IResolvable) {
    this._actionBlock = value;
  }
  public resetActionBlock() {
    this._actionBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock;
  }

  // action_report - computed: false, optional: true, required: false
  private _actionReport?: boolean | cdktf.IResolvable; 
  public get actionReport() {
    return this.getBooleanAttribute('action_report');
  }
  public set actionReport(value: boolean | cdktf.IResolvable) {
    this._actionReport = value;
  }
  public resetActionReport() {
    this._actionReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionReportInput() {
    return this._actionReport;
  }

  // action_skip - computed: false, optional: true, required: false
  private _actionSkip?: boolean | cdktf.IResolvable; 
  public get actionSkip() {
    return this.getBooleanAttribute('action_skip');
  }
  public set actionSkip(value: boolean | cdktf.IResolvable) {
    this._actionSkip = value;
  }
  public resetActionSkip() {
    this._actionSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSkipInput() {
    return this._actionSkip;
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

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference {
    return new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom {
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#open_api_validation_rules HttpLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_api_validation_rules: cdktf.listMapper(httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._openApiValidationRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
    }
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#fall_through_mode_allow HttpLoadbalancer#fall_through_mode_allow}
  */
  readonly fallThroughModeAllow?: boolean | cdktf.IResolvable;
  /**
  * fall_through_mode_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#fall_through_mode_custom HttpLoadbalancer#fall_through_mode_custom}
  */
  readonly fallThroughModeCustom?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom;
}

export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode_allow: cdktf.booleanToTerraform(struct!.fallThroughModeAllow),
    fall_through_mode_custom: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToTerraform(struct!.fallThroughModeCustom),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_through_mode_allow: {
      value: cdktf.booleanToHclTerraform(struct!.fallThroughModeAllow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fall_through_mode_custom: {
      value: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomToHclTerraform(struct!.fallThroughModeCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallThroughModeAllow !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughModeAllow = this._fallThroughModeAllow;
    }
    if (this._fallThroughModeCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughModeCustom = this._fallThroughModeCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallThroughModeAllow = undefined;
      this._fallThroughModeCustom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallThroughModeAllow = value.fallThroughModeAllow;
      this._fallThroughModeCustom.internalValue = value.fallThroughModeCustom;
    }
  }

  // fall_through_mode_allow - computed: false, optional: true, required: false
  private _fallThroughModeAllow?: boolean | cdktf.IResolvable; 
  public get fallThroughModeAllow() {
    return this.getBooleanAttribute('fall_through_mode_allow');
  }
  public set fallThroughModeAllow(value: boolean | cdktf.IResolvable) {
    this._fallThroughModeAllow = value;
  }
  public resetFallThroughModeAllow() {
    this._fallThroughModeAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeAllowInput() {
    return this._fallThroughModeAllow;
  }

  // fall_through_mode_custom - computed: false, optional: true, required: false
  private _fallThroughModeCustom = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustomOutputReference(this, "fall_through_mode_custom");
  public get fallThroughModeCustom() {
    return this._fallThroughModeCustom;
  }
  public putFallThroughModeCustom(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeFallThroughModeCustom) {
    this._fallThroughModeCustom.internalValue = value;
  }
  public resetFallThroughModeCustom() {
    this._fallThroughModeCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeCustomInput() {
    return this._fallThroughModeCustom.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint): any {
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

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata): any {
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

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata | undefined) {
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
export interface HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_block HttpLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_report HttpLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#response_validation_properties HttpLoadbalancer#response_validation_properties}
  */
  readonly responseValidationProperties: string[];
}

export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_block: cdktf.booleanToTerraform(struct!.enforcementBlock),
    enforcement_report: cdktf.booleanToTerraform(struct!.enforcementReport),
    response_validation_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseValidationProperties),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_block: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_report: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_validation_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseValidationProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementBlock = this._enforcementBlock;
    }
    if (this._enforcementReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementReport = this._enforcementReport;
    }
    if (this._responseValidationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseValidationProperties = this._responseValidationProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementBlock = undefined;
      this._enforcementReport = undefined;
      this._responseValidationProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementBlock = value.enforcementBlock;
      this._enforcementReport = value.enforcementReport;
      this._responseValidationProperties = value.responseValidationProperties;
    }
  }

  // enforcement_block - computed: false, optional: true, required: false
  private _enforcementBlock?: boolean | cdktf.IResolvable; 
  public get enforcementBlock() {
    return this.getBooleanAttribute('enforcement_block');
  }
  public set enforcementBlock(value: boolean | cdktf.IResolvable) {
    this._enforcementBlock = value;
  }
  public resetEnforcementBlock() {
    this._enforcementBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementBlockInput() {
    return this._enforcementBlock;
  }

  // enforcement_report - computed: false, optional: true, required: false
  private _enforcementReport?: boolean | cdktf.IResolvable; 
  public get enforcementReport() {
    return this.getBooleanAttribute('enforcement_report');
  }
  public set enforcementReport(value: boolean | cdktf.IResolvable) {
    this._enforcementReport = value;
  }
  public resetEnforcementReport() {
    this._enforcementReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementReportInput() {
    return this._enforcementReport;
  }

  // response_validation_properties - computed: false, optional: false, required: true
  private _responseValidationProperties?: string[]; 
  public get responseValidationProperties() {
    return this.getListAttribute('response_validation_properties');
  }
  public set responseValidationProperties(value: string[]) {
    this._responseValidationProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseValidationPropertiesInput() {
    return this._responseValidationProperties;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_block HttpLoadbalancer#enforcement_block}
  */
  readonly enforcementBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#enforcement_report HttpLoadbalancer#enforcement_report}
  */
  readonly enforcementReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#request_validation_properties HttpLoadbalancer#request_validation_properties}
  */
  readonly requestValidationProperties: string[];
}

export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_block: cdktf.booleanToTerraform(struct!.enforcementBlock),
    enforcement_report: cdktf.booleanToTerraform(struct!.enforcementReport),
    request_validation_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestValidationProperties),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_block: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforcement_report: {
      value: cdktf.booleanToHclTerraform(struct!.enforcementReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_validation_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestValidationProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementBlock = this._enforcementBlock;
    }
    if (this._enforcementReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementReport = this._enforcementReport;
    }
    if (this._requestValidationProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestValidationProperties = this._requestValidationProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementBlock = undefined;
      this._enforcementReport = undefined;
      this._requestValidationProperties = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementBlock = value.enforcementBlock;
      this._enforcementReport = value.enforcementReport;
      this._requestValidationProperties = value.requestValidationProperties;
    }
  }

  // enforcement_block - computed: false, optional: true, required: false
  private _enforcementBlock?: boolean | cdktf.IResolvable; 
  public get enforcementBlock() {
    return this.getBooleanAttribute('enforcement_block');
  }
  public set enforcementBlock(value: boolean | cdktf.IResolvable) {
    this._enforcementBlock = value;
  }
  public resetEnforcementBlock() {
    this._enforcementBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementBlockInput() {
    return this._enforcementBlock;
  }

  // enforcement_report - computed: false, optional: true, required: false
  private _enforcementReport?: boolean | cdktf.IResolvable; 
  public get enforcementReport() {
    return this.getBooleanAttribute('enforcement_report');
  }
  public set enforcementReport(value: boolean | cdktf.IResolvable) {
    this._enforcementReport = value;
  }
  public resetEnforcementReport() {
    this._enforcementReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementReportInput() {
    return this._enforcementReport;
  }

  // request_validation_properties - computed: false, optional: false, required: true
  private _requestValidationProperties?: string[]; 
  public get requestValidationProperties() {
    return this.getListAttribute('request_validation_properties');
  }
  public set requestValidationProperties(value: string[]) {
    this._requestValidationProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestValidationPropertiesInput() {
    return this._requestValidationProperties;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#skip_response_validation HttpLoadbalancer#skip_response_validation}
  */
  readonly skipResponseValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#skip_validation HttpLoadbalancer#skip_validation}
  */
  readonly skipValidation?: boolean | cdktf.IResolvable;
  /**
  * response_validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#response_validation_mode_active HttpLoadbalancer#response_validation_mode_active}
  */
  readonly responseValidationModeActive?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive;
  /**
  * validation_mode_active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_mode_active HttpLoadbalancer#validation_mode_active}
  */
  readonly validationModeActive?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive;
}

export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_response_validation: cdktf.booleanToTerraform(struct!.skipResponseValidation),
    skip_validation: cdktf.booleanToTerraform(struct!.skipValidation),
    response_validation_mode_active: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToTerraform(struct!.responseValidationModeActive),
    validation_mode_active: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToTerraform(struct!.validationModeActive),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_response_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipResponseValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_validation_mode_active: {
      value: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveToHclTerraform(struct!.responseValidationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveList",
    },
    validation_mode_active: {
      value: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveToHclTerraform(struct!.validationModeActive),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipResponseValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipResponseValidation = this._skipResponseValidation;
    }
    if (this._skipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipValidation = this._skipValidation;
    }
    if (this._responseValidationModeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseValidationModeActive = this._responseValidationModeActive?.internalValue;
    }
    if (this._validationModeActive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationModeActive = this._validationModeActive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipResponseValidation = undefined;
      this._skipValidation = undefined;
      this._responseValidationModeActive.internalValue = undefined;
      this._validationModeActive.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipResponseValidation = value.skipResponseValidation;
      this._skipValidation = value.skipValidation;
      this._responseValidationModeActive.internalValue = value.responseValidationModeActive;
      this._validationModeActive.internalValue = value.validationModeActive;
    }
  }

  // skip_response_validation - computed: false, optional: true, required: false
  private _skipResponseValidation?: boolean | cdktf.IResolvable; 
  public get skipResponseValidation() {
    return this.getBooleanAttribute('skip_response_validation');
  }
  public set skipResponseValidation(value: boolean | cdktf.IResolvable) {
    this._skipResponseValidation = value;
  }
  public resetSkipResponseValidation() {
    this._skipResponseValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipResponseValidationInput() {
    return this._skipResponseValidation;
  }

  // skip_validation - computed: false, optional: true, required: false
  private _skipValidation?: boolean | cdktf.IResolvable; 
  public get skipValidation() {
    return this.getBooleanAttribute('skip_validation');
  }
  public set skipValidation(value: boolean | cdktf.IResolvable) {
    this._skipValidation = value;
  }
  public resetSkipValidation() {
    this._skipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipValidationInput() {
    return this._skipValidation;
  }

  // response_validation_mode_active - computed: false, optional: true, required: false
  private _responseValidationModeActive = new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActiveOutputReference(this, "response_validation_mode_active");
  public get responseValidationModeActive() {
    return this._responseValidationModeActive;
  }
  public putResponseValidationModeActive(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeResponseValidationModeActive) {
    this._responseValidationModeActive.internalValue = value;
  }
  public resetResponseValidationModeActive() {
    this._responseValidationModeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseValidationModeActiveInput() {
    return this._responseValidationModeActive.internalValue;
  }

  // validation_mode_active - computed: false, optional: true, required: false
  private _validationModeActive = new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActiveOutputReference(this, "validation_mode_active");
  public get validationModeActive() {
    return this._validationModeActive;
  }
  public putValidationModeActive(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeValidationModeActive) {
    this._validationModeActive.internalValue = value;
  }
  public resetValidationModeActive() {
    this._validationModeActive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeActiveInput() {
    return this._validationModeActive.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_group HttpLoadbalancer#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#base_path HttpLoadbalancer#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#specific_domain HttpLoadbalancer#specific_domain}
  */
  readonly specificDomain?: string;
  /**
  * api_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_endpoint HttpLoadbalancer#api_endpoint}
  */
  readonly apiEndpoint?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata;
  /**
  * validation_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_mode HttpLoadbalancer#validation_mode}
  */
  readonly validationMode: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode;
}

export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    specific_domain: cdktf.stringToTerraform(struct!.specificDomain),
    api_endpoint: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToTerraform(struct!.apiEndpoint),
    metadata: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToTerraform(struct!.metadata),
    validation_mode: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToTerraform(struct!.validationMode),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable): any {
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
    api_endpoint: {
      value: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointToHclTerraform(struct!.apiEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointList",
    },
    metadata: {
      value: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataList",
    },
    validation_mode: {
      value: httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeToHclTerraform(struct!.validationMode),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable | undefined {
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
    if (this._apiEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEndpoint = this._apiEndpoint?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._validationMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationMode = this._validationMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._apiGroup = undefined;
      this._basePath = undefined;
      this._specificDomain = undefined;
      this._apiEndpoint.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._validationMode.internalValue = undefined;
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
      this._apiEndpoint.internalValue = value.apiEndpoint;
      this._metadata.internalValue = value.metadata;
      this._validationMode.internalValue = value.validationMode;
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

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint = new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpointOutputReference(this, "api_endpoint");
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public putApiEndpoint(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesApiEndpoint) {
    this._apiEndpoint.internalValue = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // validation_mode - computed: false, optional: false, required: true
  private _validationMode = new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationModeOutputReference(this, "validation_mode");
  public get validationMode() {
    return this._validationMode;
  }
  public putValidationMode(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesValidationMode) {
    this._validationMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validationModeInput() {
    return this._validationMode.internalValue;
  }
}

export class HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesOutputReference {
    return new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#allow_additional_parameters HttpLoadbalancer#allow_additional_parameters}
  */
  readonly allowAdditionalParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#disallow_additional_parameters HttpLoadbalancer#disallow_additional_parameters}
  */
  readonly disallowAdditionalParameters?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_additional_parameters: cdktf.booleanToTerraform(struct!.allowAdditionalParameters),
    disallow_additional_parameters: cdktf.booleanToTerraform(struct!.disallowAdditionalParameters),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_additional_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.allowAdditionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disallow_additional_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.disallowAdditionalParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAdditionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAdditionalParameters = this._allowAdditionalParameters;
    }
    if (this._disallowAdditionalParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowAdditionalParameters = this._disallowAdditionalParameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAdditionalParameters = undefined;
      this._disallowAdditionalParameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAdditionalParameters = value.allowAdditionalParameters;
      this._disallowAdditionalParameters = value.disallowAdditionalParameters;
    }
  }

  // allow_additional_parameters - computed: false, optional: true, required: false
  private _allowAdditionalParameters?: boolean | cdktf.IResolvable; 
  public get allowAdditionalParameters() {
    return this.getBooleanAttribute('allow_additional_parameters');
  }
  public set allowAdditionalParameters(value: boolean | cdktf.IResolvable) {
    this._allowAdditionalParameters = value;
  }
  public resetAllowAdditionalParameters() {
    this._allowAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAdditionalParametersInput() {
    return this._allowAdditionalParameters;
  }

  // disallow_additional_parameters - computed: false, optional: true, required: false
  private _disallowAdditionalParameters?: boolean | cdktf.IResolvable; 
  public get disallowAdditionalParameters() {
    return this.getBooleanAttribute('disallow_additional_parameters');
  }
  public set disallowAdditionalParameters(value: boolean | cdktf.IResolvable) {
    this._disallowAdditionalParameters = value;
  }
  public resetDisallowAdditionalParameters() {
    this._disallowAdditionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowAdditionalParametersInput() {
    return this._disallowAdditionalParameters;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom {
  /**
  * query_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#query_parameters HttpLoadbalancer#query_parameters}
  */
  readonly queryParameters?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters;
}

export function httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_parameters: httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToTerraform(struct!.queryParameters),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_parameters: {
      value: httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersToHclTerraform(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryParameters.internalValue = value.queryParameters;
    }
  }

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParametersOutputReference(this, "query_parameters");
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomQueryParameters) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#oversized_body_fail_validation HttpLoadbalancer#oversized_body_fail_validation}
  */
  readonly oversizedBodyFailValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#oversized_body_skip_validation HttpLoadbalancer#oversized_body_skip_validation}
  */
  readonly oversizedBodySkipValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#property_validation_settings_default HttpLoadbalancer#property_validation_settings_default}
  */
  readonly propertyValidationSettingsDefault?: boolean | cdktf.IResolvable;
  /**
  * property_validation_settings_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#property_validation_settings_custom HttpLoadbalancer#property_validation_settings_custom}
  */
  readonly propertyValidationSettingsCustom?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom;
}

export function httpLoadbalancerApiSpecificationValidationCustomListSettingsToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversized_body_fail_validation: cdktf.booleanToTerraform(struct!.oversizedBodyFailValidation),
    oversized_body_skip_validation: cdktf.booleanToTerraform(struct!.oversizedBodySkipValidation),
    property_validation_settings_default: cdktf.booleanToTerraform(struct!.propertyValidationSettingsDefault),
    property_validation_settings_custom: httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToTerraform(struct!.propertyValidationSettingsCustom),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListSettingsToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oversized_body_fail_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodyFailValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    oversized_body_skip_validation: {
      value: cdktf.booleanToHclTerraform(struct!.oversizedBodySkipValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property_validation_settings_default: {
      value: cdktf.booleanToHclTerraform(struct!.propertyValidationSettingsDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    property_validation_settings_custom: {
      value: httpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomToHclTerraform(struct!.propertyValidationSettingsCustom),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizedBodyFailValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodyFailValidation = this._oversizedBodyFailValidation;
    }
    if (this._oversizedBodySkipValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizedBodySkipValidation = this._oversizedBodySkipValidation;
    }
    if (this._propertyValidationSettingsDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValidationSettingsDefault = this._propertyValidationSettingsDefault;
    }
    if (this._propertyValidationSettingsCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValidationSettingsCustom = this._propertyValidationSettingsCustom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizedBodyFailValidation = undefined;
      this._oversizedBodySkipValidation = undefined;
      this._propertyValidationSettingsDefault = undefined;
      this._propertyValidationSettingsCustom.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizedBodyFailValidation = value.oversizedBodyFailValidation;
      this._oversizedBodySkipValidation = value.oversizedBodySkipValidation;
      this._propertyValidationSettingsDefault = value.propertyValidationSettingsDefault;
      this._propertyValidationSettingsCustom.internalValue = value.propertyValidationSettingsCustom;
    }
  }

  // oversized_body_fail_validation - computed: false, optional: true, required: false
  private _oversizedBodyFailValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodyFailValidation() {
    return this.getBooleanAttribute('oversized_body_fail_validation');
  }
  public set oversizedBodyFailValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodyFailValidation = value;
  }
  public resetOversizedBodyFailValidation() {
    this._oversizedBodyFailValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodyFailValidationInput() {
    return this._oversizedBodyFailValidation;
  }

  // oversized_body_skip_validation - computed: false, optional: true, required: false
  private _oversizedBodySkipValidation?: boolean | cdktf.IResolvable; 
  public get oversizedBodySkipValidation() {
    return this.getBooleanAttribute('oversized_body_skip_validation');
  }
  public set oversizedBodySkipValidation(value: boolean | cdktf.IResolvable) {
    this._oversizedBodySkipValidation = value;
  }
  public resetOversizedBodySkipValidation() {
    this._oversizedBodySkipValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizedBodySkipValidationInput() {
    return this._oversizedBodySkipValidation;
  }

  // property_validation_settings_default - computed: false, optional: true, required: false
  private _propertyValidationSettingsDefault?: boolean | cdktf.IResolvable; 
  public get propertyValidationSettingsDefault() {
    return this.getBooleanAttribute('property_validation_settings_default');
  }
  public set propertyValidationSettingsDefault(value: boolean | cdktf.IResolvable) {
    this._propertyValidationSettingsDefault = value;
  }
  public resetPropertyValidationSettingsDefault() {
    this._propertyValidationSettingsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValidationSettingsDefaultInput() {
    return this._propertyValidationSettingsDefault;
  }

  // property_validation_settings_custom - computed: false, optional: true, required: false
  private _propertyValidationSettingsCustom = new HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustomOutputReference(this, "property_validation_settings_custom");
  public get propertyValidationSettingsCustom() {
    return this._propertyValidationSettingsCustom;
  }
  public putPropertyValidationSettingsCustom(value: HttpLoadbalancerApiSpecificationValidationCustomListSettingsPropertyValidationSettingsCustom) {
    this._propertyValidationSettingsCustom.internalValue = value;
  }
  public resetPropertyValidationSettingsCustom() {
    this._propertyValidationSettingsCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValidationSettingsCustomInput() {
    return this._propertyValidationSettingsCustom.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecificationValidationCustomListStruct {
  /**
  * fall_through_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#fall_through_mode HttpLoadbalancer#fall_through_mode}
  */
  readonly fallThroughMode: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode;
  /**
  * open_api_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#open_api_validation_rules HttpLoadbalancer#open_api_validation_rules}
  */
  readonly openApiValidationRules: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#settings HttpLoadbalancer#settings}
  */
  readonly settings?: HttpLoadbalancerApiSpecificationValidationCustomListSettings;
}

export function httpLoadbalancerApiSpecificationValidationCustomListStructToTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListStructOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fall_through_mode: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeToTerraform(struct!.fallThroughMode),
    open_api_validation_rules: cdktf.listMapper(httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToTerraform, true)(struct!.openApiValidationRules),
    settings: httpLoadbalancerApiSpecificationValidationCustomListSettingsToTerraform(struct!.settings),
  }
}


export function httpLoadbalancerApiSpecificationValidationCustomListStructToHclTerraform(struct?: HttpLoadbalancerApiSpecificationValidationCustomListStructOutputReference | HttpLoadbalancerApiSpecificationValidationCustomListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fall_through_mode: {
      value: httpLoadbalancerApiSpecificationValidationCustomListFallThroughModeToHclTerraform(struct!.fallThroughMode),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeList",
    },
    open_api_validation_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesToHclTerraform, true)(struct!.openApiValidationRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesList",
    },
    settings: {
      value: httpLoadbalancerApiSpecificationValidationCustomListSettingsToHclTerraform(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationValidationCustomListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecificationValidationCustomListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallThroughMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallThroughMode = this._fallThroughMode?.internalValue;
    }
    if (this._openApiValidationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiValidationRules = this._openApiValidationRules?.internalValue;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecificationValidationCustomListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallThroughMode.internalValue = undefined;
      this._openApiValidationRules.internalValue = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallThroughMode.internalValue = value.fallThroughMode;
      this._openApiValidationRules.internalValue = value.openApiValidationRules;
      this._settings.internalValue = value.settings;
    }
  }

  // fall_through_mode - computed: false, optional: false, required: true
  private _fallThroughMode = new HttpLoadbalancerApiSpecificationValidationCustomListFallThroughModeOutputReference(this, "fall_through_mode");
  public get fallThroughMode() {
    return this._fallThroughMode;
  }
  public putFallThroughMode(value: HttpLoadbalancerApiSpecificationValidationCustomListFallThroughMode) {
    this._fallThroughMode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallThroughModeInput() {
    return this._fallThroughMode.internalValue;
  }

  // open_api_validation_rules - computed: false, optional: false, required: true
  private _openApiValidationRules = new HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRulesList(this, "open_api_validation_rules", false);
  public get openApiValidationRules() {
    return this._openApiValidationRules;
  }
  public putOpenApiValidationRules(value: HttpLoadbalancerApiSpecificationValidationCustomListOpenApiValidationRules[] | cdktf.IResolvable) {
    this._openApiValidationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiValidationRulesInput() {
    return this._openApiValidationRules.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new HttpLoadbalancerApiSpecificationValidationCustomListSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: HttpLoadbalancerApiSpecificationValidationCustomListSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface HttpLoadbalancerApiSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_disabled HttpLoadbalancer#validation_disabled}
  */
  readonly validationDisabled?: boolean | cdktf.IResolvable;
  /**
  * api_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_definition HttpLoadbalancer#api_definition}
  */
  readonly apiDefinition: HttpLoadbalancerApiSpecificationApiDefinition;
  /**
  * validation_all_spec_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_all_spec_endpoints HttpLoadbalancer#validation_all_spec_endpoints}
  */
  readonly validationAllSpecEndpoints?: HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints;
  /**
  * validation_custom_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#validation_custom_list HttpLoadbalancer#validation_custom_list}
  */
  readonly validationCustomList?: HttpLoadbalancerApiSpecificationValidationCustomListStruct;
}

export function httpLoadbalancerApiSpecificationToTerraform(struct?: HttpLoadbalancerApiSpecificationOutputReference | HttpLoadbalancerApiSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    validation_disabled: cdktf.booleanToTerraform(struct!.validationDisabled),
    api_definition: httpLoadbalancerApiSpecificationApiDefinitionToTerraform(struct!.apiDefinition),
    validation_all_spec_endpoints: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsToTerraform(struct!.validationAllSpecEndpoints),
    validation_custom_list: httpLoadbalancerApiSpecificationValidationCustomListStructToTerraform(struct!.validationCustomList),
  }
}


export function httpLoadbalancerApiSpecificationToHclTerraform(struct?: HttpLoadbalancerApiSpecificationOutputReference | HttpLoadbalancerApiSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    validation_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_definition: {
      value: httpLoadbalancerApiSpecificationApiDefinitionToHclTerraform(struct!.apiDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationApiDefinitionList",
    },
    validation_all_spec_endpoints: {
      value: httpLoadbalancerApiSpecificationValidationAllSpecEndpointsToHclTerraform(struct!.validationAllSpecEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsList",
    },
    validation_custom_list: {
      value: httpLoadbalancerApiSpecificationValidationCustomListStructToHclTerraform(struct!.validationCustomList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiSpecificationValidationCustomListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validationDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationDisabled = this._validationDisabled;
    }
    if (this._apiDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiDefinition = this._apiDefinition?.internalValue;
    }
    if (this._validationAllSpecEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationAllSpecEndpoints = this._validationAllSpecEndpoints?.internalValue;
    }
    if (this._validationCustomList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCustomList = this._validationCustomList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._validationDisabled = undefined;
      this._apiDefinition.internalValue = undefined;
      this._validationAllSpecEndpoints.internalValue = undefined;
      this._validationCustomList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._validationDisabled = value.validationDisabled;
      this._apiDefinition.internalValue = value.apiDefinition;
      this._validationAllSpecEndpoints.internalValue = value.validationAllSpecEndpoints;
      this._validationCustomList.internalValue = value.validationCustomList;
    }
  }

  // validation_disabled - computed: false, optional: true, required: false
  private _validationDisabled?: boolean | cdktf.IResolvable; 
  public get validationDisabled() {
    return this.getBooleanAttribute('validation_disabled');
  }
  public set validationDisabled(value: boolean | cdktf.IResolvable) {
    this._validationDisabled = value;
  }
  public resetValidationDisabled() {
    this._validationDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDisabledInput() {
    return this._validationDisabled;
  }

  // api_definition - computed: false, optional: false, required: true
  private _apiDefinition = new HttpLoadbalancerApiSpecificationApiDefinitionOutputReference(this, "api_definition");
  public get apiDefinition() {
    return this._apiDefinition;
  }
  public putApiDefinition(value: HttpLoadbalancerApiSpecificationApiDefinition) {
    this._apiDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDefinitionInput() {
    return this._apiDefinition.internalValue;
  }

  // validation_all_spec_endpoints - computed: false, optional: true, required: false
  private _validationAllSpecEndpoints = new HttpLoadbalancerApiSpecificationValidationAllSpecEndpointsOutputReference(this, "validation_all_spec_endpoints");
  public get validationAllSpecEndpoints() {
    return this._validationAllSpecEndpoints;
  }
  public putValidationAllSpecEndpoints(value: HttpLoadbalancerApiSpecificationValidationAllSpecEndpoints) {
    this._validationAllSpecEndpoints.internalValue = value;
  }
  public resetValidationAllSpecEndpoints() {
    this._validationAllSpecEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationAllSpecEndpointsInput() {
    return this._validationAllSpecEndpoints.internalValue;
  }

  // validation_custom_list - computed: false, optional: true, required: false
  private _validationCustomList = new HttpLoadbalancerApiSpecificationValidationCustomListStructOutputReference(this, "validation_custom_list");
  public get validationCustomList() {
    return this._validationCustomList;
  }
  public putValidationCustomList(value: HttpLoadbalancerApiSpecificationValidationCustomListStruct) {
    this._validationCustomList.internalValue = value;
  }
  public resetValidationCustomList() {
    this._validationCustomList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCustomListInput() {
    return this._validationCustomList.internalValue;
  }
}
export interface HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo): any {
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


export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo;
}

export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueClearSecretInfo) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsApiKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue;
}

export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueToTerraform(struct!.value),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsApiKeyToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsApiKey): any {
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
    value: {
      value: httpLoadbalancerApiTestingDomainsCredentialsApiKeyValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._value.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._value.internalValue = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value = new HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKeyValue) {
    this._value.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo): any {
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


export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordClearSecretInfo) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#user HttpLoadbalancer#user}
  */
  readonly user: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#password HttpLoadbalancer#password}
  */
  readonly password: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user: cdktf.stringToTerraform(struct!.user),
    password: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordToTerraform(struct!.password),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsBasicAuthToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth): any {
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
      value: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth | undefined) {
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // password - computed: false, optional: false, required: true
  private _password = new HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo): any {
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


export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenClearSecretInfo) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsBearerToken {
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#token HttpLoadbalancer#token}
  */
  readonly token: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken;
}

export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenToTerraform(struct!.token),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsBearerTokenToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsBearerToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsBearerToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token.internalValue = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token = new HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenToken) {
    this._token.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo): any {
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


export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo): any {
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

export class HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo;
}

export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload | undefined {
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

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadClearSecretInfo) {
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
export interface HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#method HttpLoadbalancer#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#token_response_key HttpLoadbalancer#token_response_key}
  */
  readonly tokenResponseKey: string;
  /**
  * json_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#json_payload HttpLoadbalancer#json_payload}
  */
  readonly jsonPayload: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload;
}

export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    token_response_key: cdktf.stringToTerraform(struct!.tokenResponseKey),
    json_payload: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadToTerraform(struct!.jsonPayload),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointOutputReference | HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_response_key: {
      value: cdktf.stringToHclTerraform(struct!.tokenResponseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json_payload: {
      value: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadToHclTerraform(struct!.jsonPayload),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._tokenResponseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenResponseKey = this._tokenResponseKey;
    }
    if (this._jsonPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPayload = this._jsonPayload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._path = undefined;
      this._tokenResponseKey = undefined;
      this._jsonPayload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._path = value.path;
      this._tokenResponseKey = value.tokenResponseKey;
      this._jsonPayload.internalValue = value.jsonPayload;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // token_response_key - computed: false, optional: false, required: true
  private _tokenResponseKey?: string; 
  public get tokenResponseKey() {
    return this.getStringAttribute('token_response_key');
  }
  public set tokenResponseKey(value: string) {
    this._tokenResponseKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenResponseKeyInput() {
    return this._tokenResponseKey;
  }

  // json_payload - computed: false, optional: false, required: true
  private _jsonPayload = new HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayloadOutputReference(this, "json_payload");
  public get jsonPayload() {
    return this._jsonPayload;
  }
  public putJsonPayload(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointJsonPayload) {
    this._jsonPayload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPayloadInput() {
    return this._jsonPayload.internalValue;
  }
}
export interface HttpLoadbalancerApiTestingDomainsCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#admin HttpLoadbalancer#admin}
  */
  readonly admin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#credential_name HttpLoadbalancer#credential_name}
  */
  readonly credentialName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#standard HttpLoadbalancer#standard}
  */
  readonly standard?: boolean | cdktf.IResolvable;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#api_key HttpLoadbalancer#api_key}
  */
  readonly apiKey?: HttpLoadbalancerApiTestingDomainsCredentialsApiKey;
  /**
  * basic_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#basic_auth HttpLoadbalancer#basic_auth}
  */
  readonly basicAuth?: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth;
  /**
  * bearer_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#bearer_token HttpLoadbalancer#bearer_token}
  */
  readonly bearerToken?: HttpLoadbalancerApiTestingDomainsCredentialsBearerToken;
  /**
  * login_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#login_endpoint HttpLoadbalancer#login_endpoint}
  */
  readonly loginEndpoint?: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint;
}

export function httpLoadbalancerApiTestingDomainsCredentialsToTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: cdktf.booleanToTerraform(struct!.admin),
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    standard: cdktf.booleanToTerraform(struct!.standard),
    api_key: httpLoadbalancerApiTestingDomainsCredentialsApiKeyToTerraform(struct!.apiKey),
    basic_auth: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthToTerraform(struct!.basicAuth),
    bearer_token: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenToTerraform(struct!.bearerToken),
    login_endpoint: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointToTerraform(struct!.loginEndpoint),
  }
}


export function httpLoadbalancerApiTestingDomainsCredentialsToHclTerraform(struct?: HttpLoadbalancerApiTestingDomainsCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: cdktf.booleanToHclTerraform(struct!.admin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard: {
      value: cdktf.booleanToHclTerraform(struct!.standard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_key: {
      value: httpLoadbalancerApiTestingDomainsCredentialsApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsApiKeyList",
    },
    basic_auth: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthList",
    },
    bearer_token: {
      value: httpLoadbalancerApiTestingDomainsCredentialsBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenList",
    },
    login_endpoint: {
      value: httpLoadbalancerApiTestingDomainsCredentialsLoginEndpointToHclTerraform(struct!.loginEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomainsCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin;
    }
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._standard !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    if (this._loginEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginEndpoint = this._loginEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiTestingDomainsCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admin = undefined;
      this._credentialName = undefined;
      this._standard = undefined;
      this._apiKey.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerToken.internalValue = undefined;
      this._loginEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admin = value.admin;
      this._credentialName = value.credentialName;
      this._standard = value.standard;
      this._apiKey.internalValue = value.apiKey;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerToken.internalValue = value.bearerToken;
      this._loginEndpoint.internalValue = value.loginEndpoint;
    }
  }

  // admin - computed: false, optional: true, required: false
  private _admin?: boolean | cdktf.IResolvable; 
  public get admin() {
    return this.getBooleanAttribute('admin');
  }
  public set admin(value: boolean | cdktf.IResolvable) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // credential_name - computed: false, optional: false, required: true
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // standard - computed: false, optional: true, required: false
  private _standard?: boolean | cdktf.IResolvable; 
  public get standard() {
    return this.getBooleanAttribute('standard');
  }
  public set standard(value: boolean | cdktf.IResolvable) {
    this._standard = value;
  }
  public resetStandard() {
    this._standard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new HttpLoadbalancerApiTestingDomainsCredentialsApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: HttpLoadbalancerApiTestingDomainsCredentialsApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new HttpLoadbalancerApiTestingDomainsCredentialsBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: HttpLoadbalancerApiTestingDomainsCredentialsBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken = new HttpLoadbalancerApiTestingDomainsCredentialsBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: HttpLoadbalancerApiTestingDomainsCredentialsBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }

  // login_endpoint - computed: false, optional: true, required: false
  private _loginEndpoint = new HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpointOutputReference(this, "login_endpoint");
  public get loginEndpoint() {
    return this._loginEndpoint;
  }
  public putLoginEndpoint(value: HttpLoadbalancerApiTestingDomainsCredentialsLoginEndpoint) {
    this._loginEndpoint.internalValue = value;
  }
  public resetLoginEndpoint() {
    this._loginEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginEndpointInput() {
    return this._loginEndpoint.internalValue;
  }
}

export class HttpLoadbalancerApiTestingDomainsCredentialsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiTestingDomainsCredentials[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiTestingDomainsCredentialsOutputReference {
    return new HttpLoadbalancerApiTestingDomainsCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiTestingDomains {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#allow_destructive_methods HttpLoadbalancer#allow_destructive_methods}
  */
  readonly allowDestructiveMethods?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#credentials HttpLoadbalancer#credentials}
  */
  readonly credentials: HttpLoadbalancerApiTestingDomainsCredentials[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiTestingDomainsToTerraform(struct?: HttpLoadbalancerApiTestingDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_destructive_methods: cdktf.booleanToTerraform(struct!.allowDestructiveMethods),
    domain: cdktf.stringToTerraform(struct!.domain),
    credentials: cdktf.listMapper(httpLoadbalancerApiTestingDomainsCredentialsToTerraform, true)(struct!.credentials),
  }
}


export function httpLoadbalancerApiTestingDomainsToHclTerraform(struct?: HttpLoadbalancerApiTestingDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_destructive_methods: {
      value: cdktf.booleanToHclTerraform(struct!.allowDestructiveMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiTestingDomainsCredentialsToHclTerraform, true)(struct!.credentials),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerApiTestingDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDestructiveMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDestructiveMethods = this._allowDestructiveMethods;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiTestingDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDestructiveMethods = undefined;
      this._domain = undefined;
      this._credentials.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDestructiveMethods = value.allowDestructiveMethods;
      this._domain = value.domain;
      this._credentials.internalValue = value.credentials;
    }
  }

  // allow_destructive_methods - computed: false, optional: true, required: false
  private _allowDestructiveMethods?: boolean | cdktf.IResolvable; 
  public get allowDestructiveMethods() {
    return this.getBooleanAttribute('allow_destructive_methods');
  }
  public set allowDestructiveMethods(value: boolean | cdktf.IResolvable) {
    this._allowDestructiveMethods = value;
  }
  public resetAllowDestructiveMethods() {
    this._allowDestructiveMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDestructiveMethodsInput() {
    return this._allowDestructiveMethods;
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

  // credentials - computed: false, optional: false, required: true
  private _credentials = new HttpLoadbalancerApiTestingDomainsCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: HttpLoadbalancerApiTestingDomainsCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }
}

export class HttpLoadbalancerApiTestingDomainsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerApiTestingDomains[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerApiTestingDomainsOutputReference {
    return new HttpLoadbalancerApiTestingDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerApiTesting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#custom_header_value HttpLoadbalancer#custom_header_value}
  */
  readonly customHeaderValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#every_day HttpLoadbalancer#every_day}
  */
  readonly everyDay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#every_month HttpLoadbalancer#every_month}
  */
  readonly everyMonth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#every_week HttpLoadbalancer#every_week}
  */
  readonly everyWeek?: boolean | cdktf.IResolvable;
  /**
  * domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domains HttpLoadbalancer#domains}
  */
  readonly domains: HttpLoadbalancerApiTestingDomains[] | cdktf.IResolvable;
}

export function httpLoadbalancerApiTestingToTerraform(struct?: HttpLoadbalancerApiTestingOutputReference | HttpLoadbalancerApiTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_header_value: cdktf.stringToTerraform(struct!.customHeaderValue),
    every_day: cdktf.booleanToTerraform(struct!.everyDay),
    every_month: cdktf.booleanToTerraform(struct!.everyMonth),
    every_week: cdktf.booleanToTerraform(struct!.everyWeek),
    domains: cdktf.listMapper(httpLoadbalancerApiTestingDomainsToTerraform, true)(struct!.domains),
  }
}


export function httpLoadbalancerApiTestingToHclTerraform(struct?: HttpLoadbalancerApiTestingOutputReference | HttpLoadbalancerApiTesting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_header_value: {
      value: cdktf.stringToHclTerraform(struct!.customHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    every_day: {
      value: cdktf.booleanToHclTerraform(struct!.everyDay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every_month: {
      value: cdktf.booleanToHclTerraform(struct!.everyMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every_week: {
      value: cdktf.booleanToHclTerraform(struct!.everyWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domains: {
      value: cdktf.listMapperHcl(httpLoadbalancerApiTestingDomainsToHclTerraform, true)(struct!.domains),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerApiTestingDomainsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerApiTestingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerApiTesting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHeaderValue = this._customHeaderValue;
    }
    if (this._everyDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyDay = this._everyDay;
    }
    if (this._everyMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyMonth = this._everyMonth;
    }
    if (this._everyWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.everyWeek = this._everyWeek;
    }
    if (this._domains?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerApiTesting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customHeaderValue = undefined;
      this._everyDay = undefined;
      this._everyMonth = undefined;
      this._everyWeek = undefined;
      this._domains.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customHeaderValue = value.customHeaderValue;
      this._everyDay = value.everyDay;
      this._everyMonth = value.everyMonth;
      this._everyWeek = value.everyWeek;
      this._domains.internalValue = value.domains;
    }
  }

  // custom_header_value - computed: false, optional: true, required: false
  private _customHeaderValue?: string; 
  public get customHeaderValue() {
    return this.getStringAttribute('custom_header_value');
  }
  public set customHeaderValue(value: string) {
    this._customHeaderValue = value;
  }
  public resetCustomHeaderValue() {
    this._customHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeaderValueInput() {
    return this._customHeaderValue;
  }

  // every_day - computed: false, optional: true, required: false
  private _everyDay?: boolean | cdktf.IResolvable; 
  public get everyDay() {
    return this.getBooleanAttribute('every_day');
  }
  public set everyDay(value: boolean | cdktf.IResolvable) {
    this._everyDay = value;
  }
  public resetEveryDay() {
    this._everyDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyDayInput() {
    return this._everyDay;
  }

  // every_month - computed: false, optional: true, required: false
  private _everyMonth?: boolean | cdktf.IResolvable; 
  public get everyMonth() {
    return this.getBooleanAttribute('every_month');
  }
  public set everyMonth(value: boolean | cdktf.IResolvable) {
    this._everyMonth = value;
  }
  public resetEveryMonth() {
    this._everyMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyMonthInput() {
    return this._everyMonth;
  }

  // every_week - computed: false, optional: true, required: false
  private _everyWeek?: boolean | cdktf.IResolvable; 
  public get everyWeek() {
    return this.getBooleanAttribute('every_week');
  }
  public set everyWeek(value: boolean | cdktf.IResolvable) {
    this._everyWeek = value;
  }
  public resetEveryWeek() {
    this._everyWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyWeekInput() {
    return this._everyWeek;
  }

  // domains - computed: false, optional: false, required: true
  private _domains = new HttpLoadbalancerApiTestingDomainsList(this, "domains", false);
  public get domains() {
    return this._domains;
  }
  public putDomains(value: HttpLoadbalancerApiTestingDomains[] | cdktf.IResolvable) {
    this._domains.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains.internalValue;
  }
}
export interface HttpLoadbalancerAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerAppFirewallToTerraform(struct?: HttpLoadbalancerAppFirewallOutputReference | HttpLoadbalancerAppFirewall): any {
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


export function httpLoadbalancerAppFirewallToHclTerraform(struct?: HttpLoadbalancerAppFirewallOutputReference | HttpLoadbalancerAppFirewall): any {
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

export class HttpLoadbalancerAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerAppFirewall | undefined {
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

  public set internalValue(value: HttpLoadbalancerAppFirewall | undefined) {
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
export interface HttpLoadbalancerBlockedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact HttpLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerBlockedClientsHttpHeaderHeadersToTerraform(struct?: HttpLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
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


export function httpLoadbalancerBlockedClientsHttpHeaderHeadersToHclTerraform(struct?: HttpLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
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

export class HttpLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerBlockedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerBlockedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference {
    return new HttpLoadbalancerBlockedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBlockedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers: HttpLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function httpLoadbalancerBlockedClientsHttpHeaderToTerraform(struct?: HttpLoadbalancerBlockedClientsHttpHeaderOutputReference | HttpLoadbalancerBlockedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(httpLoadbalancerBlockedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function httpLoadbalancerBlockedClientsHttpHeaderToHclTerraform(struct?: HttpLoadbalancerBlockedClientsHttpHeaderOutputReference | HttpLoadbalancerBlockedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerBlockedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBlockedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBlockedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBlockedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBlockedClientsHttpHeader | undefined) {
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
  private _headers = new HttpLoadbalancerBlockedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerBlockedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface HttpLoadbalancerBlockedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerBlockedClientsMetadataToTerraform(struct?: HttpLoadbalancerBlockedClientsMetadataOutputReference | HttpLoadbalancerBlockedClientsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerBlockedClientsMetadataToHclTerraform(struct?: HttpLoadbalancerBlockedClientsMetadataOutputReference | HttpLoadbalancerBlockedClientsMetadata): any {
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

export class HttpLoadbalancerBlockedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBlockedClientsMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerBlockedClientsMetadata | undefined) {
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
export interface HttpLoadbalancerBlockedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#actions HttpLoadbalancer#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#as_number HttpLoadbalancer#as_number}
  */
  readonly asNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#expiration_timestamp HttpLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ip_prefix HttpLoadbalancer#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#ipv6_prefix HttpLoadbalancer#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#user_identifier HttpLoadbalancer#user_identifier}
  */
  readonly userIdentifier?: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#http_header HttpLoadbalancer#http_header}
  */
  readonly httpHeader?: HttpLoadbalancerBlockedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerBlockedClientsMetadata;
}

export function httpLoadbalancerBlockedClientsToTerraform(struct?: HttpLoadbalancerBlockedClients | cdktf.IResolvable): any {
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
    http_header: httpLoadbalancerBlockedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: httpLoadbalancerBlockedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerBlockedClientsToHclTerraform(struct?: HttpLoadbalancerBlockedClients | cdktf.IResolvable): any {
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
      value: httpLoadbalancerBlockedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBlockedClientsHttpHeaderList",
    },
    metadata: {
      value: httpLoadbalancerBlockedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBlockedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBlockedClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBlockedClients | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerBlockedClients | cdktf.IResolvable | undefined) {
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
  private _httpHeader = new HttpLoadbalancerBlockedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: HttpLoadbalancerBlockedClientsHttpHeader) {
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
  private _metadata = new HttpLoadbalancerBlockedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerBlockedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerBlockedClientsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBlockedClients[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBlockedClientsOutputReference {
    return new HttpLoadbalancerBlockedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyJsInsertAllPages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#javascript_location HttpLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertAllPages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }
}
export interface HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
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


export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
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


export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath;
}

export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
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
      this._domain.internalValue = value.domain;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#javascript_location HttpLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exclude_list HttpLoadbalancer#exclude_list}
  */
  readonly excludeList?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    exclude_list: cdktf.listMapper(httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_list: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain): any {
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


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath): any {
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


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainList",
    },
    metadata: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataList",
    },
    path: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
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
      this._domain.internalValue = value.domain;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructOutputReference {
    return new HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain): any {
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


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath): any {
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


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath): any {
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

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#javascript_location HttpLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    domain: httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable): any {
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
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainList",
    },
    metadata: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataList",
    },
    path: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._javascriptLocation = undefined;
      this._domain.internalValue = undefined;
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
      this._javascriptLocation = value.javascriptLocation;
      this._domain.internalValue = value.domain;
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

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesOutputReference {
    return new HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyJsInsertionRules {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exclude_list HttpLoadbalancer#exclude_list}
  */
  readonly excludeList?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#rules HttpLoadbalancer#rules}
  */
  readonly rules: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyJsInsertionRulesToTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToTerraform, true)(struct!.excludeList),
    rules: cdktf.listMapper(httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesToTerraform, true)(struct!.rules),
  }
}


export function httpLoadbalancerBotDefensePolicyJsInsertionRulesToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference | HttpLoadbalancerBotDefensePolicyJsInsertionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructList",
    },
    rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyJsInsertionRulesRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyJsInsertionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyJsInsertionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
      this._rules.internalValue = value.rules;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttpLoadbalancerBotDefensePolicyJsInsertionRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference | HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem): any {
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


export function httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference | HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem): any {
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

export class HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem;
}

export function httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
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
  private _item = new HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersItem) {
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

export class HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersOutputReference {
    return new HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference | HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToTerraform, true)(struct!.headers),
  }
}


export function httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference | HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface HttpLoadbalancerBotDefensePolicyMobileSdkConfig {
  /**
  * mobile_identifier block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#mobile_identifier HttpLoadbalancer#mobile_identifier}
  */
  readonly mobileIdentifier?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier;
}

export function httpLoadbalancerBotDefensePolicyMobileSdkConfigToTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference | HttpLoadbalancerBotDefensePolicyMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_identifier: httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToTerraform(struct!.mobileIdentifier),
  }
}


export function httpLoadbalancerBotDefensePolicyMobileSdkConfigToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference | HttpLoadbalancerBotDefensePolicyMobileSdkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_identifier: {
      value: httpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierToHclTerraform(struct!.mobileIdentifier),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyMobileSdkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileIdentifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileIdentifier.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileIdentifier.internalValue = value.mobileIdentifier;
    }
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier = new HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifierOutputReference(this, "mobile_identifier");
  public get mobileIdentifier() {
    return this._mobileIdentifier;
  }
  public putMobileIdentifier(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfigMobileIdentifier) {
    this._mobileIdentifier.internalValue = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier.internalValue;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain): any {
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


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#create HttpLoadbalancer#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#password_reset HttpLoadbalancer#password_reset}
  */
  readonly passwordReset?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    password_reset: cdktf.booleanToTerraform(struct!.passwordReset),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_reset: {
      value: cdktf.booleanToHclTerraform(struct!.passwordReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._passwordReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordReset = this._passwordReset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._passwordReset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._passwordReset = value.passwordReset;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // password_reset - computed: false, optional: true, required: false
  private _passwordReset?: boolean | cdktf.IResolvable; 
  public get passwordReset() {
    return this.getBooleanAttribute('password_reset');
  }
  public set passwordReset(value: boolean | cdktf.IResolvable) {
    this._passwordReset = value;
  }
  public resetPasswordReset() {
    this._passwordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetInput() {
    return this._passwordReset;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin {
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#login_mfa HttpLoadbalancer#login_mfa}
  */
  readonly loginMfa?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#login_partner HttpLoadbalancer#login_partner}
  */
  readonly loginPartner?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#logout HttpLoadbalancer#logout}
  */
  readonly logout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#token_refresh HttpLoadbalancer#token_refresh}
  */
  readonly tokenRefresh?: boolean | cdktf.IResolvable;
  /**
  * login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#login HttpLoadbalancer#login}
  */
  readonly login?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_mfa: cdktf.booleanToTerraform(struct!.loginMfa),
    login_partner: cdktf.booleanToTerraform(struct!.loginPartner),
    logout: cdktf.booleanToTerraform(struct!.logout),
    token_refresh: cdktf.booleanToTerraform(struct!.tokenRefresh),
    login: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToTerraform(struct!.login),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_mfa: {
      value: cdktf.booleanToHclTerraform(struct!.loginMfa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_partner: {
      value: cdktf.booleanToHclTerraform(struct!.loginPartner),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout: {
      value: cdktf.booleanToHclTerraform(struct!.logout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.tokenRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginToHclTerraform(struct!.login),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginMfa !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginMfa = this._loginMfa;
    }
    if (this._loginPartner !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPartner = this._loginPartner;
    }
    if (this._logout !== undefined) {
      hasAnyValues = true;
      internalValueResult.logout = this._logout;
    }
    if (this._tokenRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenRefresh = this._tokenRefresh;
    }
    if (this._login?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.login = this._login?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginMfa = undefined;
      this._loginPartner = undefined;
      this._logout = undefined;
      this._tokenRefresh = undefined;
      this._login.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginMfa = value.loginMfa;
      this._loginPartner = value.loginPartner;
      this._logout = value.logout;
      this._tokenRefresh = value.tokenRefresh;
      this._login.internalValue = value.login;
    }
  }

  // login_mfa - computed: false, optional: true, required: false
  private _loginMfa?: boolean | cdktf.IResolvable; 
  public get loginMfa() {
    return this.getBooleanAttribute('login_mfa');
  }
  public set loginMfa(value: boolean | cdktf.IResolvable) {
    this._loginMfa = value;
  }
  public resetLoginMfa() {
    this._loginMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMfaInput() {
    return this._loginMfa;
  }

  // login_partner - computed: false, optional: true, required: false
  private _loginPartner?: boolean | cdktf.IResolvable; 
  public get loginPartner() {
    return this.getBooleanAttribute('login_partner');
  }
  public set loginPartner(value: boolean | cdktf.IResolvable) {
    this._loginPartner = value;
  }
  public resetLoginPartner() {
    this._loginPartner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPartnerInput() {
    return this._loginPartner;
  }

  // logout - computed: false, optional: true, required: false
  private _logout?: boolean | cdktf.IResolvable; 
  public get logout() {
    return this.getBooleanAttribute('logout');
  }
  public set logout(value: boolean | cdktf.IResolvable) {
    this._logout = value;
  }
  public resetLogout() {
    this._logout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutInput() {
    return this._logout;
  }

  // token_refresh - computed: false, optional: true, required: false
  private _tokenRefresh?: boolean | cdktf.IResolvable; 
  public get tokenRefresh() {
    return this.getBooleanAttribute('token_refresh');
  }
  public set tokenRefresh(value: boolean | cdktf.IResolvable) {
    this._tokenRefresh = value;
  }
  public resetTokenRefresh() {
    this._tokenRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenRefreshInput() {
    return this._tokenRefresh;
  }

  // login - computed: false, optional: true, required: false
  private _login = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLoginOutputReference(this, "login");
  public get login() {
    return this._login;
  }
  public putLogin(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationLogin) {
    this._login.internalValue = value;
  }
  public resetLogin() {
    this._login.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login.internalValue;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#apply HttpLoadbalancer#apply}
  */
  readonly apply?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#money_transfer HttpLoadbalancer#money_transfer}
  */
  readonly moneyTransfer?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.booleanToTerraform(struct!.apply),
    money_transfer: cdktf.booleanToTerraform(struct!.moneyTransfer),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.booleanToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    money_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.moneyTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    if (this._moneyTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.moneyTransfer = this._moneyTransfer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apply = undefined;
      this._moneyTransfer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apply = value.apply;
      this._moneyTransfer = value.moneyTransfer;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: boolean | cdktf.IResolvable; 
  public get apply() {
    return this.getBooleanAttribute('apply');
  }
  public set apply(value: boolean | cdktf.IResolvable) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // money_transfer - computed: false, optional: true, required: false
  private _moneyTransfer?: boolean | cdktf.IResolvable; 
  public get moneyTransfer() {
    return this.getBooleanAttribute('money_transfer');
  }
  public set moneyTransfer(value: boolean | cdktf.IResolvable) {
    this._moneyTransfer = value;
  }
  public resetMoneyTransfer() {
    this._moneyTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moneyTransferInput() {
    return this._moneyTransfer;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#checkin HttpLoadbalancer#checkin}
  */
  readonly checkin?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkin: cdktf.booleanToTerraform(struct!.checkin),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkin: {
      value: cdktf.booleanToHclTerraform(struct!.checkin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkin !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkin = this._checkin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkin = value.checkin;
    }
  }

  // checkin - computed: false, optional: true, required: false
  private _checkin?: boolean | cdktf.IResolvable; 
  public get checkin() {
    return this.getBooleanAttribute('checkin');
  }
  public set checkin(value: boolean | cdktf.IResolvable) {
    this._checkin = value;
  }
  public resetCheckin() {
    this._checkin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkinInput() {
    return this._checkin;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#create HttpLoadbalancer#create}
  */
  readonly create?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#update HttpLoadbalancer#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#view HttpLoadbalancer#view}
  */
  readonly view?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.booleanToTerraform(struct!.create),
    update: cdktf.booleanToTerraform(struct!.update),
    view: cdktf.booleanToTerraform(struct!.view),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.booleanToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update: {
      value: cdktf.booleanToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.booleanToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._update = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._update = value.update;
      this._view = value.view;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: boolean | cdktf.IResolvable; 
  public get create() {
    return this.getBooleanAttribute('create');
  }
  public set create(value: boolean | cdktf.IResolvable) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // view - computed: false, optional: true, required: false
  private _view?: boolean | cdktf.IResolvable; 
  public get view() {
    return this.getBooleanAttribute('view');
  }
  public set view(value: boolean | cdktf.IResolvable) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#flight_search HttpLoadbalancer#flight_search}
  */
  readonly flightSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#product_search HttpLoadbalancer#product_search}
  */
  readonly productSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#reservation_search HttpLoadbalancer#reservation_search}
  */
  readonly reservationSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#room_search HttpLoadbalancer#room_search}
  */
  readonly roomSearch?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flight_search: cdktf.booleanToTerraform(struct!.flightSearch),
    product_search: cdktf.booleanToTerraform(struct!.productSearch),
    reservation_search: cdktf.booleanToTerraform(struct!.reservationSearch),
    room_search: cdktf.booleanToTerraform(struct!.roomSearch),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flight_search: {
      value: cdktf.booleanToHclTerraform(struct!.flightSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    product_search: {
      value: cdktf.booleanToHclTerraform(struct!.productSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reservation_search: {
      value: cdktf.booleanToHclTerraform(struct!.reservationSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    room_search: {
      value: cdktf.booleanToHclTerraform(struct!.roomSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flightSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.flightSearch = this._flightSearch;
    }
    if (this._productSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSearch = this._productSearch;
    }
    if (this._reservationSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationSearch = this._reservationSearch;
    }
    if (this._roomSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.roomSearch = this._roomSearch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flightSearch = undefined;
      this._productSearch = undefined;
      this._reservationSearch = undefined;
      this._roomSearch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flightSearch = value.flightSearch;
      this._productSearch = value.productSearch;
      this._reservationSearch = value.reservationSearch;
      this._roomSearch = value.roomSearch;
    }
  }

  // flight_search - computed: false, optional: true, required: false
  private _flightSearch?: boolean | cdktf.IResolvable; 
  public get flightSearch() {
    return this.getBooleanAttribute('flight_search');
  }
  public set flightSearch(value: boolean | cdktf.IResolvable) {
    this._flightSearch = value;
  }
  public resetFlightSearch() {
    this._flightSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flightSearchInput() {
    return this._flightSearch;
  }

  // product_search - computed: false, optional: true, required: false
  private _productSearch?: boolean | cdktf.IResolvable; 
  public get productSearch() {
    return this.getBooleanAttribute('product_search');
  }
  public set productSearch(value: boolean | cdktf.IResolvable) {
    this._productSearch = value;
  }
  public resetProductSearch() {
    this._productSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSearchInput() {
    return this._productSearch;
  }

  // reservation_search - computed: false, optional: true, required: false
  private _reservationSearch?: boolean | cdktf.IResolvable; 
  public get reservationSearch() {
    return this.getBooleanAttribute('reservation_search');
  }
  public set reservationSearch(value: boolean | cdktf.IResolvable) {
    this._reservationSearch = value;
  }
  public resetReservationSearch() {
    this._reservationSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationSearchInput() {
    return this._reservationSearch;
  }

  // room_search - computed: false, optional: true, required: false
  private _roomSearch?: boolean | cdktf.IResolvable; 
  public get roomSearch() {
    return this.getBooleanAttribute('room_search');
  }
  public set roomSearch(value: boolean | cdktf.IResolvable) {
    this._roomSearch = value;
  }
  public resetRoomSearch() {
    this._roomSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roomSearchInput() {
    return this._roomSearch;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#gift_card_make_purchase_with_gift_card HttpLoadbalancer#gift_card_make_purchase_with_gift_card}
  */
  readonly giftCardMakePurchaseWithGiftCard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#gift_card_validation HttpLoadbalancer#gift_card_validation}
  */
  readonly giftCardValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_add_to_cart HttpLoadbalancer#shop_add_to_cart}
  */
  readonly shopAddToCart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_checkout HttpLoadbalancer#shop_checkout}
  */
  readonly shopCheckout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_choose_seat HttpLoadbalancer#shop_choose_seat}
  */
  readonly shopChooseSeat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_enter_drawing_submission HttpLoadbalancer#shop_enter_drawing_submission}
  */
  readonly shopEnterDrawingSubmission?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_make_payment HttpLoadbalancer#shop_make_payment}
  */
  readonly shopMakePayment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_order HttpLoadbalancer#shop_order}
  */
  readonly shopOrder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_price_inquiry HttpLoadbalancer#shop_price_inquiry}
  */
  readonly shopPriceInquiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_promo_code_validation HttpLoadbalancer#shop_promo_code_validation}
  */
  readonly shopPromoCodeValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_purchase_gift_card HttpLoadbalancer#shop_purchase_gift_card}
  */
  readonly shopPurchaseGiftCard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shop_update_quantity HttpLoadbalancer#shop_update_quantity}
  */
  readonly shopUpdateQuantity?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gift_card_make_purchase_with_gift_card: cdktf.booleanToTerraform(struct!.giftCardMakePurchaseWithGiftCard),
    gift_card_validation: cdktf.booleanToTerraform(struct!.giftCardValidation),
    shop_add_to_cart: cdktf.booleanToTerraform(struct!.shopAddToCart),
    shop_checkout: cdktf.booleanToTerraform(struct!.shopCheckout),
    shop_choose_seat: cdktf.booleanToTerraform(struct!.shopChooseSeat),
    shop_enter_drawing_submission: cdktf.booleanToTerraform(struct!.shopEnterDrawingSubmission),
    shop_make_payment: cdktf.booleanToTerraform(struct!.shopMakePayment),
    shop_order: cdktf.booleanToTerraform(struct!.shopOrder),
    shop_price_inquiry: cdktf.booleanToTerraform(struct!.shopPriceInquiry),
    shop_promo_code_validation: cdktf.booleanToTerraform(struct!.shopPromoCodeValidation),
    shop_purchase_gift_card: cdktf.booleanToTerraform(struct!.shopPurchaseGiftCard),
    shop_update_quantity: cdktf.booleanToTerraform(struct!.shopUpdateQuantity),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gift_card_make_purchase_with_gift_card: {
      value: cdktf.booleanToHclTerraform(struct!.giftCardMakePurchaseWithGiftCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gift_card_validation: {
      value: cdktf.booleanToHclTerraform(struct!.giftCardValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_add_to_cart: {
      value: cdktf.booleanToHclTerraform(struct!.shopAddToCart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_checkout: {
      value: cdktf.booleanToHclTerraform(struct!.shopCheckout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_choose_seat: {
      value: cdktf.booleanToHclTerraform(struct!.shopChooseSeat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_enter_drawing_submission: {
      value: cdktf.booleanToHclTerraform(struct!.shopEnterDrawingSubmission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_make_payment: {
      value: cdktf.booleanToHclTerraform(struct!.shopMakePayment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_order: {
      value: cdktf.booleanToHclTerraform(struct!.shopOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_price_inquiry: {
      value: cdktf.booleanToHclTerraform(struct!.shopPriceInquiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_promo_code_validation: {
      value: cdktf.booleanToHclTerraform(struct!.shopPromoCodeValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_purchase_gift_card: {
      value: cdktf.booleanToHclTerraform(struct!.shopPurchaseGiftCard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shop_update_quantity: {
      value: cdktf.booleanToHclTerraform(struct!.shopUpdateQuantity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._giftCardMakePurchaseWithGiftCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.giftCardMakePurchaseWithGiftCard = this._giftCardMakePurchaseWithGiftCard;
    }
    if (this._giftCardValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.giftCardValidation = this._giftCardValidation;
    }
    if (this._shopAddToCart !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopAddToCart = this._shopAddToCart;
    }
    if (this._shopCheckout !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopCheckout = this._shopCheckout;
    }
    if (this._shopChooseSeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopChooseSeat = this._shopChooseSeat;
    }
    if (this._shopEnterDrawingSubmission !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopEnterDrawingSubmission = this._shopEnterDrawingSubmission;
    }
    if (this._shopMakePayment !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopMakePayment = this._shopMakePayment;
    }
    if (this._shopOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopOrder = this._shopOrder;
    }
    if (this._shopPriceInquiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPriceInquiry = this._shopPriceInquiry;
    }
    if (this._shopPromoCodeValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPromoCodeValidation = this._shopPromoCodeValidation;
    }
    if (this._shopPurchaseGiftCard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopPurchaseGiftCard = this._shopPurchaseGiftCard;
    }
    if (this._shopUpdateQuantity !== undefined) {
      hasAnyValues = true;
      internalValueResult.shopUpdateQuantity = this._shopUpdateQuantity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._giftCardMakePurchaseWithGiftCard = undefined;
      this._giftCardValidation = undefined;
      this._shopAddToCart = undefined;
      this._shopCheckout = undefined;
      this._shopChooseSeat = undefined;
      this._shopEnterDrawingSubmission = undefined;
      this._shopMakePayment = undefined;
      this._shopOrder = undefined;
      this._shopPriceInquiry = undefined;
      this._shopPromoCodeValidation = undefined;
      this._shopPurchaseGiftCard = undefined;
      this._shopUpdateQuantity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._giftCardMakePurchaseWithGiftCard = value.giftCardMakePurchaseWithGiftCard;
      this._giftCardValidation = value.giftCardValidation;
      this._shopAddToCart = value.shopAddToCart;
      this._shopCheckout = value.shopCheckout;
      this._shopChooseSeat = value.shopChooseSeat;
      this._shopEnterDrawingSubmission = value.shopEnterDrawingSubmission;
      this._shopMakePayment = value.shopMakePayment;
      this._shopOrder = value.shopOrder;
      this._shopPriceInquiry = value.shopPriceInquiry;
      this._shopPromoCodeValidation = value.shopPromoCodeValidation;
      this._shopPurchaseGiftCard = value.shopPurchaseGiftCard;
      this._shopUpdateQuantity = value.shopUpdateQuantity;
    }
  }

  // gift_card_make_purchase_with_gift_card - computed: false, optional: true, required: false
  private _giftCardMakePurchaseWithGiftCard?: boolean | cdktf.IResolvable; 
  public get giftCardMakePurchaseWithGiftCard() {
    return this.getBooleanAttribute('gift_card_make_purchase_with_gift_card');
  }
  public set giftCardMakePurchaseWithGiftCard(value: boolean | cdktf.IResolvable) {
    this._giftCardMakePurchaseWithGiftCard = value;
  }
  public resetGiftCardMakePurchaseWithGiftCard() {
    this._giftCardMakePurchaseWithGiftCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giftCardMakePurchaseWithGiftCardInput() {
    return this._giftCardMakePurchaseWithGiftCard;
  }

  // gift_card_validation - computed: false, optional: true, required: false
  private _giftCardValidation?: boolean | cdktf.IResolvable; 
  public get giftCardValidation() {
    return this.getBooleanAttribute('gift_card_validation');
  }
  public set giftCardValidation(value: boolean | cdktf.IResolvable) {
    this._giftCardValidation = value;
  }
  public resetGiftCardValidation() {
    this._giftCardValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giftCardValidationInput() {
    return this._giftCardValidation;
  }

  // shop_add_to_cart - computed: false, optional: true, required: false
  private _shopAddToCart?: boolean | cdktf.IResolvable; 
  public get shopAddToCart() {
    return this.getBooleanAttribute('shop_add_to_cart');
  }
  public set shopAddToCart(value: boolean | cdktf.IResolvable) {
    this._shopAddToCart = value;
  }
  public resetShopAddToCart() {
    this._shopAddToCart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopAddToCartInput() {
    return this._shopAddToCart;
  }

  // shop_checkout - computed: false, optional: true, required: false
  private _shopCheckout?: boolean | cdktf.IResolvable; 
  public get shopCheckout() {
    return this.getBooleanAttribute('shop_checkout');
  }
  public set shopCheckout(value: boolean | cdktf.IResolvable) {
    this._shopCheckout = value;
  }
  public resetShopCheckout() {
    this._shopCheckout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopCheckoutInput() {
    return this._shopCheckout;
  }

  // shop_choose_seat - computed: false, optional: true, required: false
  private _shopChooseSeat?: boolean | cdktf.IResolvable; 
  public get shopChooseSeat() {
    return this.getBooleanAttribute('shop_choose_seat');
  }
  public set shopChooseSeat(value: boolean | cdktf.IResolvable) {
    this._shopChooseSeat = value;
  }
  public resetShopChooseSeat() {
    this._shopChooseSeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopChooseSeatInput() {
    return this._shopChooseSeat;
  }

  // shop_enter_drawing_submission - computed: false, optional: true, required: false
  private _shopEnterDrawingSubmission?: boolean | cdktf.IResolvable; 
  public get shopEnterDrawingSubmission() {
    return this.getBooleanAttribute('shop_enter_drawing_submission');
  }
  public set shopEnterDrawingSubmission(value: boolean | cdktf.IResolvable) {
    this._shopEnterDrawingSubmission = value;
  }
  public resetShopEnterDrawingSubmission() {
    this._shopEnterDrawingSubmission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopEnterDrawingSubmissionInput() {
    return this._shopEnterDrawingSubmission;
  }

  // shop_make_payment - computed: false, optional: true, required: false
  private _shopMakePayment?: boolean | cdktf.IResolvable; 
  public get shopMakePayment() {
    return this.getBooleanAttribute('shop_make_payment');
  }
  public set shopMakePayment(value: boolean | cdktf.IResolvable) {
    this._shopMakePayment = value;
  }
  public resetShopMakePayment() {
    this._shopMakePayment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopMakePaymentInput() {
    return this._shopMakePayment;
  }

  // shop_order - computed: false, optional: true, required: false
  private _shopOrder?: boolean | cdktf.IResolvable; 
  public get shopOrder() {
    return this.getBooleanAttribute('shop_order');
  }
  public set shopOrder(value: boolean | cdktf.IResolvable) {
    this._shopOrder = value;
  }
  public resetShopOrder() {
    this._shopOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopOrderInput() {
    return this._shopOrder;
  }

  // shop_price_inquiry - computed: false, optional: true, required: false
  private _shopPriceInquiry?: boolean | cdktf.IResolvable; 
  public get shopPriceInquiry() {
    return this.getBooleanAttribute('shop_price_inquiry');
  }
  public set shopPriceInquiry(value: boolean | cdktf.IResolvable) {
    this._shopPriceInquiry = value;
  }
  public resetShopPriceInquiry() {
    this._shopPriceInquiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPriceInquiryInput() {
    return this._shopPriceInquiry;
  }

  // shop_promo_code_validation - computed: false, optional: true, required: false
  private _shopPromoCodeValidation?: boolean | cdktf.IResolvable; 
  public get shopPromoCodeValidation() {
    return this.getBooleanAttribute('shop_promo_code_validation');
  }
  public set shopPromoCodeValidation(value: boolean | cdktf.IResolvable) {
    this._shopPromoCodeValidation = value;
  }
  public resetShopPromoCodeValidation() {
    this._shopPromoCodeValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPromoCodeValidationInput() {
    return this._shopPromoCodeValidation;
  }

  // shop_purchase_gift_card - computed: false, optional: true, required: false
  private _shopPurchaseGiftCard?: boolean | cdktf.IResolvable; 
  public get shopPurchaseGiftCard() {
    return this.getBooleanAttribute('shop_purchase_gift_card');
  }
  public set shopPurchaseGiftCard(value: boolean | cdktf.IResolvable) {
    this._shopPurchaseGiftCard = value;
  }
  public resetShopPurchaseGiftCard() {
    this._shopPurchaseGiftCard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopPurchaseGiftCardInput() {
    return this._shopPurchaseGiftCard;
  }

  // shop_update_quantity - computed: false, optional: true, required: false
  private _shopUpdateQuantity?: boolean | cdktf.IResolvable; 
  public get shopUpdateQuantity() {
    return this.getBooleanAttribute('shop_update_quantity');
  }
  public set shopUpdateQuantity(value: boolean | cdktf.IResolvable) {
    this._shopUpdateQuantity = value;
  }
  public resetShopUpdateQuantity() {
    this._shopUpdateQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shopUpdateQuantityInput() {
    return this._shopUpdateQuantity;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel {
  /**
  * account_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#account_management HttpLoadbalancer#account_management}
  */
  readonly accountManagement?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#authentication HttpLoadbalancer#authentication}
  */
  readonly authentication?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication;
  /**
  * financial_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#financial_services HttpLoadbalancer#financial_services}
  */
  readonly financialServices?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices;
  /**
  * flight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#flight HttpLoadbalancer#flight}
  */
  readonly flight?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight;
  /**
  * profile_management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#profile_management HttpLoadbalancer#profile_management}
  */
  readonly profileManagement?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement;
  /**
  * search block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#search HttpLoadbalancer#search}
  */
  readonly search?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch;
  /**
  * shopping_gift_cards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#shopping_gift_cards HttpLoadbalancer#shopping_gift_cards}
  */
  readonly shoppingGiftCards?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_management: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToTerraform(struct!.accountManagement),
    authentication: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToTerraform(struct!.authentication),
    financial_services: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToTerraform(struct!.financialServices),
    flight: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToTerraform(struct!.flight),
    profile_management: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToTerraform(struct!.profileManagement),
    search: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToTerraform(struct!.search),
    shopping_gift_cards: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToTerraform(struct!.shoppingGiftCards),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_management: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementToHclTerraform(struct!.accountManagement),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementList",
    },
    authentication: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationList",
    },
    financial_services: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesToHclTerraform(struct!.financialServices),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesList",
    },
    flight: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightToHclTerraform(struct!.flight),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightList",
    },
    profile_management: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementToHclTerraform(struct!.profileManagement),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementList",
    },
    search: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchToHclTerraform(struct!.search),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchList",
    },
    shopping_gift_cards: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsToHclTerraform(struct!.shoppingGiftCards),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountManagement = this._accountManagement?.internalValue;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._financialServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.financialServices = this._financialServices?.internalValue;
    }
    if (this._flight?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flight = this._flight?.internalValue;
    }
    if (this._profileManagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileManagement = this._profileManagement?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    if (this._shoppingGiftCards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shoppingGiftCards = this._shoppingGiftCards?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountManagement.internalValue = undefined;
      this._authentication.internalValue = undefined;
      this._financialServices.internalValue = undefined;
      this._flight.internalValue = undefined;
      this._profileManagement.internalValue = undefined;
      this._search.internalValue = undefined;
      this._shoppingGiftCards.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountManagement.internalValue = value.accountManagement;
      this._authentication.internalValue = value.authentication;
      this._financialServices.internalValue = value.financialServices;
      this._flight.internalValue = value.flight;
      this._profileManagement.internalValue = value.profileManagement;
      this._search.internalValue = value.search;
      this._shoppingGiftCards.internalValue = value.shoppingGiftCards;
    }
  }

  // account_management - computed: false, optional: true, required: false
  private _accountManagement = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagementOutputReference(this, "account_management");
  public get accountManagement() {
    return this._accountManagement;
  }
  public putAccountManagement(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAccountManagement) {
    this._accountManagement.internalValue = value;
  }
  public resetAccountManagement() {
    this._accountManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountManagementInput() {
    return this._accountManagement.internalValue;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // financial_services - computed: false, optional: true, required: false
  private _financialServices = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServicesOutputReference(this, "financial_services");
  public get financialServices() {
    return this._financialServices;
  }
  public putFinancialServices(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFinancialServices) {
    this._financialServices.internalValue = value;
  }
  public resetFinancialServices() {
    this._financialServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialServicesInput() {
    return this._financialServices.internalValue;
  }

  // flight - computed: false, optional: true, required: false
  private _flight = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlightOutputReference(this, "flight");
  public get flight() {
    return this._flight;
  }
  public putFlight(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelFlight) {
    this._flight.internalValue = value;
  }
  public resetFlight() {
    this._flight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flightInput() {
    return this._flight.internalValue;
  }

  // profile_management - computed: false, optional: true, required: false
  private _profileManagement = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagementOutputReference(this, "profile_management");
  public get profileManagement() {
    return this._profileManagement;
  }
  public putProfileManagement(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelProfileManagement) {
    this._profileManagement.internalValue = value;
  }
  public resetProfileManagement() {
    this._profileManagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileManagementInput() {
    return this._profileManagement.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }

  // shopping_gift_cards - computed: false, optional: true, required: false
  private _shoppingGiftCards = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCardsOutputReference(this, "shopping_gift_cards");
  public get shoppingGiftCards() {
    return this._shoppingGiftCards;
  }
  public putShoppingGiftCards(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelShoppingGiftCards) {
    this._shoppingGiftCards.internalValue = value;
  }
  public resetShoppingGiftCards() {
    this._shoppingGiftCards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shoppingGiftCardsInput() {
    return this._shoppingGiftCards.internalValue;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem): any {
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


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable): any {
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
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersItem) {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersOutputReference {
    return new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#body HttpLoadbalancer#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#status HttpLoadbalancer#status}
  */
  readonly status?: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._status = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#auto_type_header_name HttpLoadbalancer#auto_type_header_name}
  */
  readonly autoTypeHeaderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#inference_header_name HttpLoadbalancer#inference_header_name}
  */
  readonly inferenceHeaderName: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_type_header_name: cdktf.stringToTerraform(struct!.autoTypeHeaderName),
    inference_header_name: cdktf.stringToTerraform(struct!.inferenceHeaderName),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoTypeHeaderName = undefined;
      this._inferenceHeaderName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#no_headers HttpLoadbalancer#no_headers}
  */
  readonly noHeaders?: boolean | cdktf.IResolvable;
  /**
  * append_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#append_headers HttpLoadbalancer#append_headers}
  */
  readonly appendHeaders?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_headers: cdktf.booleanToTerraform(struct!.noHeaders),
    append_headers: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToTerraform(struct!.appendHeaders),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag): any {
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
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersToHclTerraform(struct!.appendHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noHeaders = undefined;
      this._appendHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _appendHeaders = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeadersOutputReference(this, "append_headers");
  public get appendHeaders() {
    return this._appendHeaders;
  }
  public putAppendHeaders(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagAppendHeaders) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#uri HttpLoadbalancer#uri}
  */
  readonly uri: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation {
  /**
  * block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#block HttpLoadbalancer#block}
  */
  readonly block?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock;
  /**
  * flag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#flag HttpLoadbalancer#flag}
  */
  readonly flag?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#redirect HttpLoadbalancer#redirect}
  */
  readonly redirect?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToTerraform(struct!.block),
    flag: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToTerraform(struct!.flag),
    redirect: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToTerraform(struct!.redirect),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockToHclTerraform(struct!.block),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockList",
    },
    flag: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagToHclTerraform(struct!.flag),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagList",
    },
    redirect: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block.internalValue = undefined;
      this._flag.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block.internalValue = value.block;
      this._flag.internalValue = value.flag;
      this._redirect.internalValue = value.redirect;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlockOutputReference(this, "block");
  public get block() {
    return this._block;
  }
  public putBlock(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationBlock) {
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
  private _flag = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlagOutputReference(this, "flag");
  public get flag() {
    return this._flag;
  }
  public putFlag(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationFlag) {
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
  private _redirect = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationRedirect) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath): any {
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


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem): any {
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


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem): any {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    item: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable): any {
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
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsItem) {
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

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsOutputReference {
    return new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#mobile_identifier HttpLoadbalancer#mobile_identifier}
  */
  readonly mobileIdentifier?: string;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mobile_identifier: cdktf.stringToTerraform(struct!.mobileIdentifier),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference | HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mobile_identifier: {
      value: cdktf.stringToHclTerraform(struct!.mobileIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mobileIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileIdentifier = this._mobileIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mobileIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mobileIdentifier = value.mobileIdentifier;
    }
  }

  // mobile_identifier - computed: false, optional: true, required: false
  private _mobileIdentifier?: string; 
  public get mobileIdentifier() {
    return this.getStringAttribute('mobile_identifier');
  }
  public set mobileIdentifier(value: string) {
    this._mobileIdentifier = value;
  }
  public resetMobileIdentifier() {
    this._mobileIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileIdentifierInput() {
    return this._mobileIdentifier;
  }
}
export interface HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#allow_good_bots HttpLoadbalancer#allow_good_bots}
  */
  readonly allowGoodBots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#http_methods HttpLoadbalancer#http_methods}
  */
  readonly httpMethods: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#mitigate_good_bots HttpLoadbalancer#mitigate_good_bots}
  */
  readonly mitigateGoodBots?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#mobile HttpLoadbalancer#mobile}
  */
  readonly mobile?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#protocol HttpLoadbalancer#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#undefined_flow_label HttpLoadbalancer#undefined_flow_label}
  */
  readonly undefinedFlowLabel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#web HttpLoadbalancer#web}
  */
  readonly web?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain;
  /**
  * flow_label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#flow_label HttpLoadbalancer#flow_label}
  */
  readonly flowLabel?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata;
  /**
  * mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#mitigation HttpLoadbalancer#mitigation}
  */
  readonly mitigation: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams[] | cdktf.IResolvable;
  /**
  * web_mobile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#web_mobile HttpLoadbalancer#web_mobile}
  */
  readonly webMobile?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile;
}

export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsToTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_good_bots: cdktf.booleanToTerraform(struct!.allowGoodBots),
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    http_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpMethods),
    mitigate_good_bots: cdktf.booleanToTerraform(struct!.mitigateGoodBots),
    mobile: cdktf.booleanToTerraform(struct!.mobile),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    undefined_flow_label: cdktf.booleanToTerraform(struct!.undefinedFlowLabel),
    web: cdktf.booleanToTerraform(struct!.web),
    domain: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToTerraform(struct!.domain),
    flow_label: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToTerraform(struct!.flowLabel),
    headers: cdktf.listMapper(httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToTerraform, true)(struct!.headers),
    metadata: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToTerraform(struct!.metadata),
    mitigation: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToTerraform(struct!.mitigation),
    path: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToTerraform, true)(struct!.queryParams),
    web_mobile: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToTerraform(struct!.webMobile),
  }
}


export function httpLoadbalancerBotDefensePolicyProtectedAppEndpointsToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_good_bots: {
      value: cdktf.booleanToHclTerraform(struct!.allowGoodBots),
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
    http_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mitigate_good_bots: {
      value: cdktf.booleanToHclTerraform(struct!.mitigateGoodBots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mobile: {
      value: cdktf.booleanToHclTerraform(struct!.mobile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    undefined_flow_label: {
      value: cdktf.booleanToHclTerraform(struct!.undefinedFlowLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web: {
      value: cdktf.booleanToHclTerraform(struct!.web),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainList",
    },
    flow_label: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelToHclTerraform(struct!.flowLabel),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersList",
    },
    metadata: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataList",
    },
    mitigation: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationToHclTerraform(struct!.mitigation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationList",
    },
    path: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsList",
    },
    web_mobile: {
      value: httpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileToHclTerraform(struct!.webMobile),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowGoodBots = this._allowGoodBots;
    }
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._httpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethods = this._httpMethods;
    }
    if (this._mitigateGoodBots !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigateGoodBots = this._mitigateGoodBots;
    }
    if (this._mobile !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobile = this._mobile;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._undefinedFlowLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.undefinedFlowLabel = this._undefinedFlowLabel;
    }
    if (this._web !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._flowLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowLabel = this._flowLabel?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigation = this._mitigation?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._webMobile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webMobile = this._webMobile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowGoodBots = undefined;
      this._anyDomain = undefined;
      this._httpMethods = undefined;
      this._mitigateGoodBots = undefined;
      this._mobile = undefined;
      this._protocol = undefined;
      this._undefinedFlowLabel = undefined;
      this._web = undefined;
      this._domain.internalValue = undefined;
      this._flowLabel.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._mitigation.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._webMobile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowGoodBots = value.allowGoodBots;
      this._anyDomain = value.anyDomain;
      this._httpMethods = value.httpMethods;
      this._mitigateGoodBots = value.mitigateGoodBots;
      this._mobile = value.mobile;
      this._protocol = value.protocol;
      this._undefinedFlowLabel = value.undefinedFlowLabel;
      this._web = value.web;
      this._domain.internalValue = value.domain;
      this._flowLabel.internalValue = value.flowLabel;
      this._headers.internalValue = value.headers;
      this._metadata.internalValue = value.metadata;
      this._mitigation.internalValue = value.mitigation;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
      this._webMobile.internalValue = value.webMobile;
    }
  }

  // allow_good_bots - computed: false, optional: true, required: false
  private _allowGoodBots?: boolean | cdktf.IResolvable; 
  public get allowGoodBots() {
    return this.getBooleanAttribute('allow_good_bots');
  }
  public set allowGoodBots(value: boolean | cdktf.IResolvable) {
    this._allowGoodBots = value;
  }
  public resetAllowGoodBots() {
    this._allowGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGoodBotsInput() {
    return this._allowGoodBots;
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

  // http_methods - computed: false, optional: false, required: true
  private _httpMethods?: string[]; 
  public get httpMethods() {
    return this.getListAttribute('http_methods');
  }
  public set httpMethods(value: string[]) {
    this._httpMethods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodsInput() {
    return this._httpMethods;
  }

  // mitigate_good_bots - computed: false, optional: true, required: false
  private _mitigateGoodBots?: boolean | cdktf.IResolvable; 
  public get mitigateGoodBots() {
    return this.getBooleanAttribute('mitigate_good_bots');
  }
  public set mitigateGoodBots(value: boolean | cdktf.IResolvable) {
    this._mitigateGoodBots = value;
  }
  public resetMitigateGoodBots() {
    this._mitigateGoodBots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigateGoodBotsInput() {
    return this._mitigateGoodBots;
  }

  // mobile - computed: false, optional: true, required: false
  private _mobile?: boolean | cdktf.IResolvable; 
  public get mobile() {
    return this.getBooleanAttribute('mobile');
  }
  public set mobile(value: boolean | cdktf.IResolvable) {
    this._mobile = value;
  }
  public resetMobile() {
    this._mobile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileInput() {
    return this._mobile;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // undefined_flow_label - computed: false, optional: true, required: false
  private _undefinedFlowLabel?: boolean | cdktf.IResolvable; 
  public get undefinedFlowLabel() {
    return this.getBooleanAttribute('undefined_flow_label');
  }
  public set undefinedFlowLabel(value: boolean | cdktf.IResolvable) {
    this._undefinedFlowLabel = value;
  }
  public resetUndefinedFlowLabel() {
    this._undefinedFlowLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefinedFlowLabelInput() {
    return this._undefinedFlowLabel;
  }

  // web - computed: false, optional: true, required: false
  private _web?: boolean | cdktf.IResolvable; 
  public get web() {
    return this.getBooleanAttribute('web');
  }
  public set web(value: boolean | cdktf.IResolvable) {
    this._web = value;
  }
  public resetWeb() {
    this._web = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web;
  }

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // flow_label - computed: false, optional: true, required: false
  private _flowLabel = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabelOutputReference(this, "flow_label");
  public get flowLabel() {
    return this._flowLabel;
  }
  public putFlowLabel(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsFlowLabel) {
    this._flowLabel.internalValue = value;
  }
  public resetFlowLabel() {
    this._flowLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLabelInput() {
    return this._flowLabel.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mitigation - computed: false, optional: false, required: true
  private _mitigation = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigationOutputReference(this, "mitigation");
  public get mitigation() {
    return this._mitigation;
  }
  public putMitigation(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsMitigation) {
    this._mitigation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationInput() {
    return this._mitigation.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // web_mobile - computed: false, optional: true, required: false
  private _webMobile = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobileOutputReference(this, "web_mobile");
  public get webMobile() {
    return this._webMobile;
  }
  public putWebMobile(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsWebMobile) {
    this._webMobile.internalValue = value;
  }
  public resetWebMobile() {
    this._webMobile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webMobileInput() {
    return this._webMobile.internalValue;
  }
}

export class HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsOutputReference {
    return new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerBotDefensePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#disable_js_insert HttpLoadbalancer#disable_js_insert}
  */
  readonly disableJsInsert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#disable_mobile_sdk HttpLoadbalancer#disable_mobile_sdk}
  */
  readonly disableMobileSdk?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#javascript_mode HttpLoadbalancer#javascript_mode}
  */
  readonly javascriptMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#js_download_path HttpLoadbalancer#js_download_path}
  */
  readonly jsDownloadPath?: string;
  /**
  * js_insert_all_pages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#js_insert_all_pages HttpLoadbalancer#js_insert_all_pages}
  */
  readonly jsInsertAllPages?: HttpLoadbalancerBotDefensePolicyJsInsertAllPages;
  /**
  * js_insert_all_pages_except block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#js_insert_all_pages_except HttpLoadbalancer#js_insert_all_pages_except}
  */
  readonly jsInsertAllPagesExcept?: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept;
  /**
  * js_insertion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#js_insertion_rules HttpLoadbalancer#js_insertion_rules}
  */
  readonly jsInsertionRules?: HttpLoadbalancerBotDefensePolicyJsInsertionRules;
  /**
  * mobile_sdk_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#mobile_sdk_config HttpLoadbalancer#mobile_sdk_config}
  */
  readonly mobileSdkConfig?: HttpLoadbalancerBotDefensePolicyMobileSdkConfig;
  /**
  * protected_app_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#protected_app_endpoints HttpLoadbalancer#protected_app_endpoints}
  */
  readonly protectedAppEndpoints: HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints[] | cdktf.IResolvable;
}

export function httpLoadbalancerBotDefensePolicyToTerraform(struct?: HttpLoadbalancerBotDefensePolicyOutputReference | HttpLoadbalancerBotDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_js_insert: cdktf.booleanToTerraform(struct!.disableJsInsert),
    disable_mobile_sdk: cdktf.booleanToTerraform(struct!.disableMobileSdk),
    javascript_mode: cdktf.stringToTerraform(struct!.javascriptMode),
    js_download_path: cdktf.stringToTerraform(struct!.jsDownloadPath),
    js_insert_all_pages: httpLoadbalancerBotDefensePolicyJsInsertAllPagesToTerraform(struct!.jsInsertAllPages),
    js_insert_all_pages_except: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToTerraform(struct!.jsInsertAllPagesExcept),
    js_insertion_rules: httpLoadbalancerBotDefensePolicyJsInsertionRulesToTerraform(struct!.jsInsertionRules),
    mobile_sdk_config: httpLoadbalancerBotDefensePolicyMobileSdkConfigToTerraform(struct!.mobileSdkConfig),
    protected_app_endpoints: cdktf.listMapper(httpLoadbalancerBotDefensePolicyProtectedAppEndpointsToTerraform, true)(struct!.protectedAppEndpoints),
  }
}


export function httpLoadbalancerBotDefensePolicyToHclTerraform(struct?: HttpLoadbalancerBotDefensePolicyOutputReference | HttpLoadbalancerBotDefensePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_js_insert: {
      value: cdktf.booleanToHclTerraform(struct!.disableJsInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_mobile_sdk: {
      value: cdktf.booleanToHclTerraform(struct!.disableMobileSdk),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    javascript_mode: {
      value: cdktf.stringToHclTerraform(struct!.javascriptMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_download_path: {
      value: cdktf.stringToHclTerraform(struct!.jsDownloadPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_insert_all_pages: {
      value: httpLoadbalancerBotDefensePolicyJsInsertAllPagesToHclTerraform(struct!.jsInsertAllPages),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertAllPagesList",
    },
    js_insert_all_pages_except: {
      value: httpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct!.jsInsertAllPagesExcept),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptList",
    },
    js_insertion_rules: {
      value: httpLoadbalancerBotDefensePolicyJsInsertionRulesToHclTerraform(struct!.jsInsertionRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyJsInsertionRulesList",
    },
    mobile_sdk_config: {
      value: httpLoadbalancerBotDefensePolicyMobileSdkConfigToHclTerraform(struct!.mobileSdkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyMobileSdkConfigList",
    },
    protected_app_endpoints: {
      value: cdktf.listMapperHcl(httpLoadbalancerBotDefensePolicyProtectedAppEndpointsToHclTerraform, true)(struct!.protectedAppEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefensePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefensePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableJsInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableJsInsert = this._disableJsInsert;
    }
    if (this._disableMobileSdk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMobileSdk = this._disableMobileSdk;
    }
    if (this._javascriptMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptMode = this._javascriptMode;
    }
    if (this._jsDownloadPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsDownloadPath = this._jsDownloadPath;
    }
    if (this._jsInsertAllPages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPages = this._jsInsertAllPages?.internalValue;
    }
    if (this._jsInsertAllPagesExcept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertAllPagesExcept = this._jsInsertAllPagesExcept?.internalValue;
    }
    if (this._jsInsertionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsInsertionRules = this._jsInsertionRules?.internalValue;
    }
    if (this._mobileSdkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileSdkConfig = this._mobileSdkConfig?.internalValue;
    }
    if (this._protectedAppEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedAppEndpoints = this._protectedAppEndpoints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefensePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableJsInsert = undefined;
      this._disableMobileSdk = undefined;
      this._javascriptMode = undefined;
      this._jsDownloadPath = undefined;
      this._jsInsertAllPages.internalValue = undefined;
      this._jsInsertAllPagesExcept.internalValue = undefined;
      this._jsInsertionRules.internalValue = undefined;
      this._mobileSdkConfig.internalValue = undefined;
      this._protectedAppEndpoints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableJsInsert = value.disableJsInsert;
      this._disableMobileSdk = value.disableMobileSdk;
      this._javascriptMode = value.javascriptMode;
      this._jsDownloadPath = value.jsDownloadPath;
      this._jsInsertAllPages.internalValue = value.jsInsertAllPages;
      this._jsInsertAllPagesExcept.internalValue = value.jsInsertAllPagesExcept;
      this._jsInsertionRules.internalValue = value.jsInsertionRules;
      this._mobileSdkConfig.internalValue = value.mobileSdkConfig;
      this._protectedAppEndpoints.internalValue = value.protectedAppEndpoints;
    }
  }

  // disable_js_insert - computed: false, optional: true, required: false
  private _disableJsInsert?: boolean | cdktf.IResolvable; 
  public get disableJsInsert() {
    return this.getBooleanAttribute('disable_js_insert');
  }
  public set disableJsInsert(value: boolean | cdktf.IResolvable) {
    this._disableJsInsert = value;
  }
  public resetDisableJsInsert() {
    this._disableJsInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableJsInsertInput() {
    return this._disableJsInsert;
  }

  // disable_mobile_sdk - computed: false, optional: true, required: false
  private _disableMobileSdk?: boolean | cdktf.IResolvable; 
  public get disableMobileSdk() {
    return this.getBooleanAttribute('disable_mobile_sdk');
  }
  public set disableMobileSdk(value: boolean | cdktf.IResolvable) {
    this._disableMobileSdk = value;
  }
  public resetDisableMobileSdk() {
    this._disableMobileSdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMobileSdkInput() {
    return this._disableMobileSdk;
  }

  // javascript_mode - computed: false, optional: false, required: true
  private _javascriptMode?: string; 
  public get javascriptMode() {
    return this.getStringAttribute('javascript_mode');
  }
  public set javascriptMode(value: string) {
    this._javascriptMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptModeInput() {
    return this._javascriptMode;
  }

  // js_download_path - computed: false, optional: true, required: false
  private _jsDownloadPath?: string; 
  public get jsDownloadPath() {
    return this.getStringAttribute('js_download_path');
  }
  public set jsDownloadPath(value: string) {
    this._jsDownloadPath = value;
  }
  public resetJsDownloadPath() {
    this._jsDownloadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsDownloadPathInput() {
    return this._jsDownloadPath;
  }

  // js_insert_all_pages - computed: false, optional: true, required: false
  private _jsInsertAllPages = new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesOutputReference(this, "js_insert_all_pages");
  public get jsInsertAllPages() {
    return this._jsInsertAllPages;
  }
  public putJsInsertAllPages(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPages) {
    this._jsInsertAllPages.internalValue = value;
  }
  public resetJsInsertAllPages() {
    this._jsInsertAllPages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesInput() {
    return this._jsInsertAllPages.internalValue;
  }

  // js_insert_all_pages_except - computed: false, optional: true, required: false
  private _jsInsertAllPagesExcept = new HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExceptOutputReference(this, "js_insert_all_pages_except");
  public get jsInsertAllPagesExcept() {
    return this._jsInsertAllPagesExcept;
  }
  public putJsInsertAllPagesExcept(value: HttpLoadbalancerBotDefensePolicyJsInsertAllPagesExcept) {
    this._jsInsertAllPagesExcept.internalValue = value;
  }
  public resetJsInsertAllPagesExcept() {
    this._jsInsertAllPagesExcept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertAllPagesExceptInput() {
    return this._jsInsertAllPagesExcept.internalValue;
  }

  // js_insertion_rules - computed: false, optional: true, required: false
  private _jsInsertionRules = new HttpLoadbalancerBotDefensePolicyJsInsertionRulesOutputReference(this, "js_insertion_rules");
  public get jsInsertionRules() {
    return this._jsInsertionRules;
  }
  public putJsInsertionRules(value: HttpLoadbalancerBotDefensePolicyJsInsertionRules) {
    this._jsInsertionRules.internalValue = value;
  }
  public resetJsInsertionRules() {
    this._jsInsertionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsInsertionRulesInput() {
    return this._jsInsertionRules.internalValue;
  }

  // mobile_sdk_config - computed: false, optional: true, required: false
  private _mobileSdkConfig = new HttpLoadbalancerBotDefensePolicyMobileSdkConfigOutputReference(this, "mobile_sdk_config");
  public get mobileSdkConfig() {
    return this._mobileSdkConfig;
  }
  public putMobileSdkConfig(value: HttpLoadbalancerBotDefensePolicyMobileSdkConfig) {
    this._mobileSdkConfig.internalValue = value;
  }
  public resetMobileSdkConfig() {
    this._mobileSdkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileSdkConfigInput() {
    return this._mobileSdkConfig.internalValue;
  }

  // protected_app_endpoints - computed: false, optional: false, required: true
  private _protectedAppEndpoints = new HttpLoadbalancerBotDefensePolicyProtectedAppEndpointsList(this, "protected_app_endpoints", false);
  public get protectedAppEndpoints() {
    return this._protectedAppEndpoints;
  }
  public putProtectedAppEndpoints(value: HttpLoadbalancerBotDefensePolicyProtectedAppEndpoints[] | cdktf.IResolvable) {
    this._protectedAppEndpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedAppEndpointsInput() {
    return this._protectedAppEndpoints.internalValue;
  }
}
export interface HttpLoadbalancerBotDefense {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regional_endpoint HttpLoadbalancer#regional_endpoint}
  */
  readonly regionalEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#timeout HttpLoadbalancer#timeout}
  */
  readonly timeout?: number;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#policy HttpLoadbalancer#policy}
  */
  readonly policy: HttpLoadbalancerBotDefensePolicy;
}

export function httpLoadbalancerBotDefenseToTerraform(struct?: HttpLoadbalancerBotDefenseOutputReference | HttpLoadbalancerBotDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regional_endpoint: cdktf.stringToTerraform(struct!.regionalEndpoint),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    policy: httpLoadbalancerBotDefensePolicyToTerraform(struct!.policy),
  }
}


export function httpLoadbalancerBotDefenseToHclTerraform(struct?: HttpLoadbalancerBotDefenseOutputReference | HttpLoadbalancerBotDefense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    regional_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.regionalEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy: {
      value: httpLoadbalancerBotDefensePolicyToHclTerraform(struct!.policy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerBotDefensePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerBotDefenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerBotDefense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionalEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionalEndpoint = this._regionalEndpoint;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._policy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerBotDefense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regionalEndpoint = undefined;
      this._timeout = undefined;
      this._policy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regionalEndpoint = value.regionalEndpoint;
      this._timeout = value.timeout;
      this._policy.internalValue = value.policy;
    }
  }

  // regional_endpoint - computed: false, optional: false, required: true
  private _regionalEndpoint?: string; 
  public get regionalEndpoint() {
    return this.getStringAttribute('regional_endpoint');
  }
  public set regionalEndpoint(value: string) {
    this._regionalEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalEndpointInput() {
    return this._regionalEndpoint;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new HttpLoadbalancerBotDefensePolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: HttpLoadbalancerBotDefensePolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }
}
export interface HttpLoadbalancerCaptchaChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerCaptchaChallengeToTerraform(struct?: HttpLoadbalancerCaptchaChallengeOutputReference | HttpLoadbalancerCaptchaChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerCaptchaChallengeToHclTerraform(struct?: HttpLoadbalancerCaptchaChallengeOutputReference | HttpLoadbalancerCaptchaChallenge): any {
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

export class HttpLoadbalancerCaptchaChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerCaptchaChallenge | undefined {
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

  public set internalValue(value: HttpLoadbalancerCaptchaChallenge | undefined) {
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
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exact_value HttpLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex_value HttpLoadbalancer#regex_value}
  */
  readonly regexValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#suffix_value HttpLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
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


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain): any {
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

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined {
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

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain | undefined) {
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
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata): any {
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

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata | undefined) {
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
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
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


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath): any {
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

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined {
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

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath | undefined) {
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
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#any_domain HttpLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * domain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#domain HttpLoadbalancer#domain}
  */
  readonly domain?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    domain: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToTerraform(struct!.domain),
    metadata: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToTerraform(struct!.metadata),
    path: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToTerraform(struct!.path),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable): any {
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
    domain: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainList",
    },
    metadata: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataList",
    },
    path: {
      value: httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
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

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._domain.internalValue = undefined;
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
      this._domain.internalValue = value.domain;
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

  // domain - computed: false, optional: true, required: false
  private _domain = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListPath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference {
    return new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept {
  /**
  * exclude_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/http_loadbalancer#exclude_list HttpLoadbalancer#exclude_list}
  */
  readonly excludeList?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable;
}

export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_list: cdktf.listMapper(httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToTerraform, true)(struct!.excludeList),
  }
}


export function httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptToHclTerraform(struct?: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference | HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_list: {
      value: cdktf.listMapperHcl(httpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructToHclTerraform, true)(struct!.excludeList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeList = this._excludeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExcept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeList.internalValue = value.excludeList;
    }
  }

  // exclude_list - computed: false, optional: true, required: false
  private _excludeList = new HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStructList(this, "exclude_list", false);
  public get excludeList() {
    return this._excludeList;
  }
  public putExcludeList(value: HttpLoadbalancerClientSideDefensePolicyJsInsertAllPagesExceptExcludeListStruct[] | cdktf.IResolvable) {
    this._excludeList.internalValue = value;
  }
  public resetExcludeList() {
    this._excludeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeListInput() {
    return this._excludeList.internalValue;
  }
}
