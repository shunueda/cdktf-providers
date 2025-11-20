import * as cdktf from 'cdktf';
import { HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructToTerraform,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructToHclTerraform,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructOutputReference,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherToTerraform,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherToHclTerraform,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherOutputReference,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherToTerraform,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherToHclTerraform,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherOutputReference,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorToTerraform,
httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorToHclTerraform,
HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorOutputReference } from './structs1600'
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct): any {
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


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct): any {
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

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata): any {
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


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataOutputReference | HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata): any {
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

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata | undefined) {
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
export interface HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_asn HttpLoadbalancer#any_asn}
  */
  readonly anyAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#country_codes HttpLoadbalancer#country_codes}
  */
  readonly countryCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#none HttpLoadbalancer#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#origin_server_subsets_action HttpLoadbalancer#origin_server_subsets_action}
  */
  readonly originServerSubsetsAction: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#re_name_list HttpLoadbalancer#re_name_list}
  */
  readonly reNameList?: string[];
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher;
  /**
  * body_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#body_matcher HttpLoadbalancer#body_matcher}
  */
  readonly bodyMatcher?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata;
}

export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_asn: cdktf.booleanToTerraform(struct!.anyAsn),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countryCodes),
    none: cdktf.booleanToTerraform(struct!.none),
    origin_server_subsets_action: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.originServerSubsetsAction),
    re_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reNameList),
    asn_list: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherToTerraform(struct!.asnMatcher),
    body_matcher: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherToTerraform(struct!.bodyMatcher),
    client_selector: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorToTerraform(struct!.clientSelector),
    ip_matcher: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructToTerraform(struct!.ipPrefixList),
    metadata: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataToTerraform(struct!.metadata),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_asn: {
      value: cdktf.booleanToHclTerraform(struct!.anyAsn),
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
    country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_server_subsets_action: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.originServerSubsetsAction),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    re_name_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reNameList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    asn_list: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherList",
    },
    body_matcher: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherToHclTerraform(struct!.bodyMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorList",
    },
    ip_matcher: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructList",
    },
    metadata: {
      value: httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyAsn = this._anyAsn;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._originServerSubsetsAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServerSubsetsAction = this._originServerSubsetsAction;
    }
    if (this._reNameList !== undefined) {
      hasAnyValues = true;
      internalValueResult.reNameList = this._reNameList;
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
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyAsn = undefined;
      this._anyIp = undefined;
      this._countryCodes = undefined;
      this._none = undefined;
      this._originServerSubsetsAction = undefined;
      this._reNameList = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._bodyMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
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
      this._anyAsn = value.anyAsn;
      this._anyIp = value.anyIp;
      this._countryCodes = value.countryCodes;
      this._none = value.none;
      this._originServerSubsetsAction = value.originServerSubsetsAction;
      this._reNameList = value.reNameList;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._bodyMatcher.internalValue = value.bodyMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._metadata.internalValue = value.metadata;
    }
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

  // country_codes - computed: false, optional: true, required: false
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  public resetCountryCodes() {
    this._countryCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
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

  // origin_server_subsets_action - computed: false, optional: false, required: true
  private _originServerSubsetsAction?: { [key: string]: string }; 
  public get originServerSubsetsAction() {
    return this.getStringMapAttribute('origin_server_subsets_action');
  }
  public set originServerSubsetsAction(value: { [key: string]: string }) {
    this._originServerSubsetsAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServerSubsetsActionInput() {
    return this._originServerSubsetsAction;
  }

  // re_name_list - computed: false, optional: true, required: false
  private _reNameList?: string[]; 
  public get reNameList() {
    return this.getListAttribute('re_name_list');
  }
  public set reNameList(value: string[]) {
    this._reNameList = value;
  }
  public resetReNameList() {
    this._reNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reNameListInput() {
    return this._reNameList;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesAsnMatcher) {
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
  private _bodyMatcher = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcherOutputReference(this, "body_matcher");
  public get bodyMatcher() {
    return this._bodyMatcher;
  }
  public putBodyMatcher(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesBodyMatcher) {
    this._bodyMatcher.internalValue = value;
  }
  public resetBodyMatcher() {
    this._bodyMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMatcherInput() {
    return this._bodyMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesClientSelector) {
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
  private _ipMatcher = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesIpPrefixListStruct) {
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
  private _metadata = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesOutputReference {
    return new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerOriginServerSubsetRuleListStruct {
  /**
  * origin_server_subset_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#origin_server_subset_rules HttpLoadbalancer#origin_server_subset_rules}
  */
  readonly originServerSubsetRules?: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerOriginServerSubsetRuleListStructToTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListStructOutputReference | HttpLoadbalancerOriginServerSubsetRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_server_subset_rules: cdktf.listMapper(httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesToTerraform, true)(struct!.originServerSubsetRules),
  }
}


export function httpLoadbalancerOriginServerSubsetRuleListStructToHclTerraform(struct?: HttpLoadbalancerOriginServerSubsetRuleListStructOutputReference | HttpLoadbalancerOriginServerSubsetRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_server_subset_rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesToHclTerraform, true)(struct!.originServerSubsetRules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerOriginServerSubsetRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerOriginServerSubsetRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originServerSubsetRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServerSubsetRules = this._originServerSubsetRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerOriginServerSubsetRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originServerSubsetRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originServerSubsetRules.internalValue = value.originServerSubsetRules;
    }
  }

  // origin_server_subset_rules - computed: false, optional: true, required: false
  private _originServerSubsetRules = new HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRulesList(this, "origin_server_subset_rules", false);
  public get originServerSubsetRules() {
    return this._originServerSubsetRules;
  }
  public putOriginServerSubsetRules(value: HttpLoadbalancerOriginServerSubsetRuleListOriginServerSubsetRules[] | cdktf.IResolvable) {
    this._originServerSubsetRules.internalValue = value;
  }
  public resetOriginServerSubsetRules() {
    this._originServerSubsetRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originServerSubsetRulesInput() {
    return this._originServerSubsetRules.internalValue;
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference | HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference | HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters): any {
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

export class HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_expiry HttpLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_script_delay HttpLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function httpLoadbalancerPolicyBasedChallengeJsChallengeParametersToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference | HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters): any {
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


export function httpLoadbalancerPolicyBasedChallengeJsChallengeParametersToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference | HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters): any {
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

export class HttpLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference | HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation): any {
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


export function httpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference | HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation): any {
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

export class HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#description HttpLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable HttpLoadbalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable): any {
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
    item: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable): any {
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
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem) {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#as_numbers HttpLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#asn_sets HttpLoadbalancer#asn_sets}
  */
  readonly asnSets: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher | undefined) {
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
  private _asnSets = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#expressions HttpLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable): any {
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
    item: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable): any {
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
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem) {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable): any {
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
    item: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable): any {
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
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem) {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix_sets HttpLoadbalancer#prefix_sets}
  */
  readonly prefixSets: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher): any {
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
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher | undefined) {
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
  private _prefixSets = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_prefixes HttpLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix_values HttpLoadbalancer#prefix_values}
  */
  readonly prefixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#suffix_values HttpLoadbalancer#suffix_values}
  */
  readonly suffixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._invertMatcher = undefined;
      this._prefixValues = undefined;
      this._regexValues = undefined;
      this._suffixValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_values HttpLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#transformers HttpLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_not_present HttpLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#check_present HttpLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_matcher HttpLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#item HttpLoadbalancer#item}
  */
  readonly item?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable): any {
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
    item: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToTerraform(struct!.item),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable): any {
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
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable | undefined) {
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
  private _item = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem) {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#classes HttpLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact_values HttpLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#excluded_values HttpLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher): any {
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


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher): any {
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

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher | undefined) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_asn HttpLoadbalancer#any_asn}
  */
  readonly anyAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_client HttpLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#any_ip HttpLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_name HttpLoadbalancer#client_name}
  */
  readonly clientName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_challenge HttpLoadbalancer#disable_challenge}
  */
  readonly disableChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_captcha_challenge HttpLoadbalancer#enable_captcha_challenge}
  */
  readonly enableCaptchaChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_javascript_challenge HttpLoadbalancer#enable_javascript_challenge}
  */
  readonly enableJavascriptChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#expiration_timestamp HttpLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * arg_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#arg_matchers HttpLoadbalancer#arg_matchers}
  */
  readonly argMatchers?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers[] | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#asn_list HttpLoadbalancer#asn_list}
  */
  readonly asnList?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#asn_matcher HttpLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher;
  /**
  * body_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#body_matcher HttpLoadbalancer#body_matcher}
  */
  readonly bodyMatcher?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher;
  /**
  * client_name_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_name_matcher HttpLoadbalancer#client_name_matcher}
  */
  readonly clientNameMatcher?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#client_selector HttpLoadbalancer#client_selector}
  */
  readonly clientSelector?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector;
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie_matchers HttpLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable;
  /**
  * domain_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#domain_matcher HttpLoadbalancer#domain_matcher}
  */
  readonly domainMatcher?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_method HttpLoadbalancer#http_method}
  */
  readonly httpMethod?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_matcher HttpLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_prefix_list HttpLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct;
  /**
  * ja4_tls_fingerprint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ja4_tls_fingerprint HttpLoadbalancer#ja4_tls_fingerprint}
  */
  readonly ja4TlsFingerprint?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tls_fingerprint_matcher HttpLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_asn: cdktf.booleanToTerraform(struct!.anyAsn),
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    client_name: cdktf.stringToTerraform(struct!.clientName),
    disable_challenge: cdktf.booleanToTerraform(struct!.disableChallenge),
    enable_captcha_challenge: cdktf.booleanToTerraform(struct!.enableCaptchaChallenge),
    enable_javascript_challenge: cdktf.booleanToTerraform(struct!.enableJavascriptChallenge),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    arg_matchers: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToTerraform, true)(struct!.argMatchers),
    asn_list: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToTerraform(struct!.asnList),
    asn_matcher: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToTerraform(struct!.asnMatcher),
    body_matcher: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToTerraform(struct!.bodyMatcher),
    client_name_matcher: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherToTerraform(struct!.clientNameMatcher),
    client_selector: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToTerraform(struct!.clientSelector),
    cookie_matchers: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    domain_matcher: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToTerraform(struct!.domainMatcher),
    headers: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToTerraform, true)(struct!.headers),
    http_method: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToTerraform(struct!.httpMethod),
    ip_matcher: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ja4_tls_fingerprint: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintToTerraform(struct!.ja4TlsFingerprint),
    path: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToTerraform, true)(struct!.queryParams),
    tls_fingerprint_matcher: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_name: {
      value: cdktf.stringToHclTerraform(struct!.clientName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.disableChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_captcha_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.enableCaptchaChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_javascript_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.enableJavascriptChallenge),
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
    arg_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToHclTerraform, true)(struct!.argMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersList",
    },
    asn_list: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructList",
    },
    asn_matcher: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherList",
    },
    body_matcher: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToHclTerraform(struct!.bodyMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherList",
    },
    client_name_matcher: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherToHclTerraform(struct!.clientNameMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherList",
    },
    client_selector: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorList",
    },
    cookie_matchers: {
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersList",
    },
    domain_matcher: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToHclTerraform(struct!.domainMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersList",
    },
    http_method: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodList",
    },
    ip_matcher: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherList",
    },
    ip_prefix_list: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructList",
    },
    ja4_tls_fingerprint: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintToHclTerraform(struct!.ja4TlsFingerprint),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintList",
    },
    path: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathList",
    },
    query_params: {
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsList",
    },
    tls_fingerprint_matcher: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyAsn = this._anyAsn;
    }
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._clientName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientName = this._clientName;
    }
    if (this._disableChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChallenge = this._disableChallenge;
    }
    if (this._enableCaptchaChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaptchaChallenge = this._enableCaptchaChallenge;
    }
    if (this._enableJavascriptChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableJavascriptChallenge = this._enableJavascriptChallenge;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
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
    if (this._clientNameMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientNameMatcher = this._clientNameMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._domainMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatcher = this._domainMatcher?.internalValue;
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
    if (this._ja4TlsFingerprint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4TlsFingerprint = this._ja4TlsFingerprint?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyAsn = undefined;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._clientName = undefined;
      this._disableChallenge = undefined;
      this._enableCaptchaChallenge = undefined;
      this._enableJavascriptChallenge = undefined;
      this._expirationTimestamp = undefined;
      this._argMatchers.internalValue = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._bodyMatcher.internalValue = undefined;
      this._clientNameMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._cookieMatchers.internalValue = undefined;
      this._domainMatcher.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ja4TlsFingerprint.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyAsn = value.anyAsn;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._clientName = value.clientName;
      this._disableChallenge = value.disableChallenge;
      this._enableCaptchaChallenge = value.enableCaptchaChallenge;
      this._enableJavascriptChallenge = value.enableJavascriptChallenge;
      this._expirationTimestamp = value.expirationTimestamp;
      this._argMatchers.internalValue = value.argMatchers;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._bodyMatcher.internalValue = value.bodyMatcher;
      this._clientNameMatcher.internalValue = value.clientNameMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._domainMatcher.internalValue = value.domainMatcher;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ja4TlsFingerprint.internalValue = value.ja4TlsFingerprint;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
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

  // disable_challenge - computed: false, optional: true, required: false
  private _disableChallenge?: boolean | cdktf.IResolvable; 
  public get disableChallenge() {
    return this.getBooleanAttribute('disable_challenge');
  }
  public set disableChallenge(value: boolean | cdktf.IResolvable) {
    this._disableChallenge = value;
  }
  public resetDisableChallenge() {
    this._disableChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChallengeInput() {
    return this._disableChallenge;
  }

  // enable_captcha_challenge - computed: false, optional: true, required: false
  private _enableCaptchaChallenge?: boolean | cdktf.IResolvable; 
  public get enableCaptchaChallenge() {
    return this.getBooleanAttribute('enable_captcha_challenge');
  }
  public set enableCaptchaChallenge(value: boolean | cdktf.IResolvable) {
    this._enableCaptchaChallenge = value;
  }
  public resetEnableCaptchaChallenge() {
    this._enableCaptchaChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptchaChallengeInput() {
    return this._enableCaptchaChallenge;
  }

  // enable_javascript_challenge - computed: false, optional: true, required: false
  private _enableJavascriptChallenge?: boolean | cdktf.IResolvable; 
  public get enableJavascriptChallenge() {
    return this.getBooleanAttribute('enable_javascript_challenge');
  }
  public set enableJavascriptChallenge(value: boolean | cdktf.IResolvable) {
    this._enableJavascriptChallenge = value;
  }
  public resetEnableJavascriptChallenge() {
    this._enableJavascriptChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJavascriptChallengeInput() {
    return this._enableJavascriptChallenge;
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

  // arg_matchers - computed: false, optional: true, required: false
  private _argMatchers = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersList(this, "arg_matchers", false);
  public get argMatchers() {
    return this._argMatchers;
  }
  public putArgMatchers(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers[] | cdktf.IResolvable) {
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
  private _asnList = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct) {
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
  private _asnMatcher = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher) {
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
  private _bodyMatcher = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference(this, "body_matcher");
  public get bodyMatcher() {
    return this._bodyMatcher;
  }
  public putBodyMatcher(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher) {
    this._bodyMatcher.internalValue = value;
  }
  public resetBodyMatcher() {
    this._bodyMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMatcherInput() {
    return this._bodyMatcher.internalValue;
  }

  // client_name_matcher - computed: false, optional: true, required: false
  private _clientNameMatcher = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcherOutputReference(this, "client_name_matcher");
  public get clientNameMatcher() {
    return this._clientNameMatcher;
  }
  public putClientNameMatcher(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientNameMatcher) {
    this._clientNameMatcher.internalValue = value;
  }
  public resetClientNameMatcher() {
    this._clientNameMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameMatcherInput() {
    return this._clientNameMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable) {
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
  private _domainMatcher = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference(this, "domain_matcher");
  public get domainMatcher() {
    return this._domainMatcher;
  }
  public putDomainMatcher(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher) {
    this._domainMatcher.internalValue = value;
  }
  public resetDomainMatcher() {
    this._domainMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatcherInput() {
    return this._domainMatcher.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders[] | cdktf.IResolvable) {
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
  private _httpMethod = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod) {
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
  private _ipMatcher = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher) {
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
  private _ipPrefixList = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ja4_tls_fingerprint - computed: false, optional: true, required: false
  private _ja4TlsFingerprint = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprintOutputReference(this, "ja4_tls_fingerprint");
  public get ja4TlsFingerprint() {
    return this._ja4TlsFingerprint;
  }
  public putJa4TlsFingerprint(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecJa4TlsFingerprint) {
    this._ja4TlsFingerprint.internalValue = value;
  }
  public resetJa4TlsFingerprint() {
    this._ja4TlsFingerprint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4TlsFingerprintInput() {
    return this._ja4TlsFingerprint.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher) {
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
export interface HttpLoadbalancerPolicyBasedChallengeRuleListRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#metadata HttpLoadbalancer#metadata}
  */
  readonly metadata: HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#spec HttpLoadbalancer#spec}
  */
  readonly spec: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListRulesToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: httpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToTerraform(struct!.metadata),
    spec: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecToTerraform(struct!.spec),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListRulesToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataList",
    },
    spec: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListRulesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable | undefined) {
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
  private _metadata = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: HttpLoadbalancerPolicyBasedChallengeRuleListRulesSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerPolicyBasedChallengeRuleListRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerPolicyBasedChallengeRuleListRulesOutputReference {
    return new HttpLoadbalancerPolicyBasedChallengeRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerPolicyBasedChallengeRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#rules HttpLoadbalancer#rules}
  */
  readonly rules?: HttpLoadbalancerPolicyBasedChallengeRuleListRules[] | cdktf.IResolvable;
}

export function httpLoadbalancerPolicyBasedChallengeRuleListStructToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListStructOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(httpLoadbalancerPolicyBasedChallengeRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function httpLoadbalancerPolicyBasedChallengeRuleListStructToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeRuleListStructOutputReference | HttpLoadbalancerPolicyBasedChallengeRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(httpLoadbalancerPolicyBasedChallengeRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new HttpLoadbalancerPolicyBasedChallengeRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: HttpLoadbalancerPolicyBasedChallengeRuleListRules[] | cdktf.IResolvable) {
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
export interface HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_page HttpLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function httpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingOutputReference | HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function httpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingOutputReference | HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customPage = value.customPage;
    }
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
export interface HttpLoadbalancerPolicyBasedChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#always_enable_captcha_challenge HttpLoadbalancer#always_enable_captcha_challenge}
  */
  readonly alwaysEnableCaptchaChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#always_enable_js_challenge HttpLoadbalancer#always_enable_js_challenge}
  */
  readonly alwaysEnableJsChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_captcha_challenge_parameters HttpLoadbalancer#default_captcha_challenge_parameters}
  */
  readonly defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_js_challenge_parameters HttpLoadbalancer#default_js_challenge_parameters}
  */
  readonly defaultJsChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_mitigation_settings HttpLoadbalancer#default_mitigation_settings}
  */
  readonly defaultMitigationSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_temporary_blocking_parameters HttpLoadbalancer#default_temporary_blocking_parameters}
  */
  readonly defaultTemporaryBlockingParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_challenge HttpLoadbalancer#no_challenge}
  */
  readonly noChallenge?: boolean | cdktf.IResolvable;
  /**
  * captcha_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#captcha_challenge_parameters HttpLoadbalancer#captcha_challenge_parameters}
  */
  readonly captchaChallengeParameters?: HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters;
  /**
  * js_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#js_challenge_parameters HttpLoadbalancer#js_challenge_parameters}
  */
  readonly jsChallengeParameters?: HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters;
  /**
  * malicious_user_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#malicious_user_mitigation HttpLoadbalancer#malicious_user_mitigation}
  */
  readonly maliciousUserMitigation?: HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#rule_list HttpLoadbalancer#rule_list}
  */
  readonly ruleList?: HttpLoadbalancerPolicyBasedChallengeRuleListStruct;
  /**
  * temporary_user_blocking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#temporary_user_blocking HttpLoadbalancer#temporary_user_blocking}
  */
  readonly temporaryUserBlocking?: HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking;
}

export function httpLoadbalancerPolicyBasedChallengeToTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeOutputReference | HttpLoadbalancerPolicyBasedChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_enable_captcha_challenge: cdktf.booleanToTerraform(struct!.alwaysEnableCaptchaChallenge),
    always_enable_js_challenge: cdktf.booleanToTerraform(struct!.alwaysEnableJsChallenge),
    default_captcha_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultCaptchaChallengeParameters),
    default_js_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultJsChallengeParameters),
    default_mitigation_settings: cdktf.booleanToTerraform(struct!.defaultMitigationSettings),
    default_temporary_blocking_parameters: cdktf.booleanToTerraform(struct!.defaultTemporaryBlockingParameters),
    no_challenge: cdktf.booleanToTerraform(struct!.noChallenge),
    captcha_challenge_parameters: httpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToTerraform(struct!.captchaChallengeParameters),
    js_challenge_parameters: httpLoadbalancerPolicyBasedChallengeJsChallengeParametersToTerraform(struct!.jsChallengeParameters),
    malicious_user_mitigation: httpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToTerraform(struct!.maliciousUserMitigation),
    rule_list: httpLoadbalancerPolicyBasedChallengeRuleListStructToTerraform(struct!.ruleList),
    temporary_user_blocking: httpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingToTerraform(struct!.temporaryUserBlocking),
  }
}


export function httpLoadbalancerPolicyBasedChallengeToHclTerraform(struct?: HttpLoadbalancerPolicyBasedChallengeOutputReference | HttpLoadbalancerPolicyBasedChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_enable_captcha_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysEnableCaptchaChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_enable_js_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysEnableJsChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    default_temporary_blocking_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultTemporaryBlockingParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.noChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_challenge_parameters: {
      value: httpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToHclTerraform(struct!.captchaChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersList",
    },
    js_challenge_parameters: {
      value: httpLoadbalancerPolicyBasedChallengeJsChallengeParametersToHclTerraform(struct!.jsChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeJsChallengeParametersList",
    },
    malicious_user_mitigation: {
      value: httpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToHclTerraform(struct!.maliciousUserMitigation),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationList",
    },
    rule_list: {
      value: httpLoadbalancerPolicyBasedChallengeRuleListStructToHclTerraform(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeRuleListStructList",
    },
    temporary_user_blocking: {
      value: httpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingToHclTerraform(struct!.temporaryUserBlocking),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerPolicyBasedChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerPolicyBasedChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysEnableCaptchaChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysEnableCaptchaChallenge = this._alwaysEnableCaptchaChallenge;
    }
    if (this._alwaysEnableJsChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysEnableJsChallenge = this._alwaysEnableJsChallenge;
    }
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
    if (this._defaultTemporaryBlockingParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTemporaryBlockingParameters = this._defaultTemporaryBlockingParameters;
    }
    if (this._noChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.noChallenge = this._noChallenge;
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
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    if (this._temporaryUserBlocking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryUserBlocking = this._temporaryUserBlocking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerPolicyBasedChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysEnableCaptchaChallenge = undefined;
      this._alwaysEnableJsChallenge = undefined;
      this._defaultCaptchaChallengeParameters = undefined;
      this._defaultJsChallengeParameters = undefined;
      this._defaultMitigationSettings = undefined;
      this._defaultTemporaryBlockingParameters = undefined;
      this._noChallenge = undefined;
      this._captchaChallengeParameters.internalValue = undefined;
      this._jsChallengeParameters.internalValue = undefined;
      this._maliciousUserMitigation.internalValue = undefined;
      this._ruleList.internalValue = undefined;
      this._temporaryUserBlocking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysEnableCaptchaChallenge = value.alwaysEnableCaptchaChallenge;
      this._alwaysEnableJsChallenge = value.alwaysEnableJsChallenge;
      this._defaultCaptchaChallengeParameters = value.defaultCaptchaChallengeParameters;
      this._defaultJsChallengeParameters = value.defaultJsChallengeParameters;
      this._defaultMitigationSettings = value.defaultMitigationSettings;
      this._defaultTemporaryBlockingParameters = value.defaultTemporaryBlockingParameters;
      this._noChallenge = value.noChallenge;
      this._captchaChallengeParameters.internalValue = value.captchaChallengeParameters;
      this._jsChallengeParameters.internalValue = value.jsChallengeParameters;
      this._maliciousUserMitigation.internalValue = value.maliciousUserMitigation;
      this._ruleList.internalValue = value.ruleList;
      this._temporaryUserBlocking.internalValue = value.temporaryUserBlocking;
    }
  }

  // always_enable_captcha_challenge - computed: false, optional: true, required: false
  private _alwaysEnableCaptchaChallenge?: boolean | cdktf.IResolvable; 
  public get alwaysEnableCaptchaChallenge() {
    return this.getBooleanAttribute('always_enable_captcha_challenge');
  }
  public set alwaysEnableCaptchaChallenge(value: boolean | cdktf.IResolvable) {
    this._alwaysEnableCaptchaChallenge = value;
  }
  public resetAlwaysEnableCaptchaChallenge() {
    this._alwaysEnableCaptchaChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysEnableCaptchaChallengeInput() {
    return this._alwaysEnableCaptchaChallenge;
  }

  // always_enable_js_challenge - computed: false, optional: true, required: false
  private _alwaysEnableJsChallenge?: boolean | cdktf.IResolvable; 
  public get alwaysEnableJsChallenge() {
    return this.getBooleanAttribute('always_enable_js_challenge');
  }
  public set alwaysEnableJsChallenge(value: boolean | cdktf.IResolvable) {
    this._alwaysEnableJsChallenge = value;
  }
  public resetAlwaysEnableJsChallenge() {
    this._alwaysEnableJsChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysEnableJsChallengeInput() {
    return this._alwaysEnableJsChallenge;
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

  // default_temporary_blocking_parameters - computed: false, optional: true, required: false
  private _defaultTemporaryBlockingParameters?: boolean | cdktf.IResolvable; 
  public get defaultTemporaryBlockingParameters() {
    return this.getBooleanAttribute('default_temporary_blocking_parameters');
  }
  public set defaultTemporaryBlockingParameters(value: boolean | cdktf.IResolvable) {
    this._defaultTemporaryBlockingParameters = value;
  }
  public resetDefaultTemporaryBlockingParameters() {
    this._defaultTemporaryBlockingParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemporaryBlockingParametersInput() {
    return this._defaultTemporaryBlockingParameters;
  }

  // no_challenge - computed: false, optional: true, required: false
  private _noChallenge?: boolean | cdktf.IResolvable; 
  public get noChallenge() {
    return this.getBooleanAttribute('no_challenge');
  }
  public set noChallenge(value: boolean | cdktf.IResolvable) {
    this._noChallenge = value;
  }
  public resetNoChallenge() {
    this._noChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noChallengeInput() {
    return this._noChallenge;
  }

  // captcha_challenge_parameters - computed: false, optional: true, required: false
  private _captchaChallengeParameters = new HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference(this, "captcha_challenge_parameters");
  public get captchaChallengeParameters() {
    return this._captchaChallengeParameters;
  }
  public putCaptchaChallengeParameters(value: HttpLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters) {
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
  private _jsChallengeParameters = new HttpLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference(this, "js_challenge_parameters");
  public get jsChallengeParameters() {
    return this._jsChallengeParameters;
  }
  public putJsChallengeParameters(value: HttpLoadbalancerPolicyBasedChallengeJsChallengeParameters) {
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
  private _maliciousUserMitigation = new HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference(this, "malicious_user_mitigation");
  public get maliciousUserMitigation() {
    return this._maliciousUserMitigation;
  }
  public putMaliciousUserMitigation(value: HttpLoadbalancerPolicyBasedChallengeMaliciousUserMitigation) {
    this._maliciousUserMitigation.internalValue = value;
  }
  public resetMaliciousUserMitigation() {
    this._maliciousUserMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUserMitigationInput() {
    return this._maliciousUserMitigation.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new HttpLoadbalancerPolicyBasedChallengeRuleListStructOutputReference(this, "rule_list");
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: HttpLoadbalancerPolicyBasedChallengeRuleListStruct) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // temporary_user_blocking - computed: false, optional: true, required: false
  private _temporaryUserBlocking = new HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlockingOutputReference(this, "temporary_user_blocking");
  public get temporaryUserBlocking() {
    return this._temporaryUserBlocking;
  }
  public putTemporaryUserBlocking(value: HttpLoadbalancerPolicyBasedChallengeTemporaryUserBlocking) {
    this._temporaryUserBlocking.internalValue = value;
  }
  public resetTemporaryUserBlocking() {
    this._temporaryUserBlocking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryUserBlockingInput() {
    return this._temporaryUserBlocking.internalValue;
  }
}
export interface HttpLoadbalancerProtectedCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_tampering_protection HttpLoadbalancer#disable_tampering_protection}
  */
  readonly disableTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_tampering_protection HttpLoadbalancer#enable_tampering_protection}
  */
  readonly enableTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_max_age HttpLoadbalancer#ignore_max_age}
  */
  readonly ignoreMaxAge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_age_value HttpLoadbalancer#max_age_value}
  */
  readonly maxAgeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerProtectedCookiesToTerraform(struct?: HttpLoadbalancerProtectedCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    disable_tampering_protection: cdktf.booleanToTerraform(struct!.disableTamperingProtection),
    enable_tampering_protection: cdktf.booleanToTerraform(struct!.enableTamperingProtection),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_max_age: cdktf.booleanToTerraform(struct!.ignoreMaxAge),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    max_age_value: cdktf.numberToTerraform(struct!.maxAgeValue),
    name: cdktf.stringToTerraform(struct!.name),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
  }
}


export function httpLoadbalancerProtectedCookiesToHclTerraform(struct?: HttpLoadbalancerProtectedCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_tampering_protection: {
      value: cdktf.booleanToHclTerraform(struct!.disableTamperingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tampering_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enableTamperingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_value: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeValue),
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
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerProtectedCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerProtectedCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._disableTamperingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTamperingProtection = this._disableTamperingProtection;
    }
    if (this._enableTamperingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTamperingProtection = this._enableTamperingProtection;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaxAge = this._ignoreMaxAge;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._maxAgeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeValue = this._maxAgeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerProtectedCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._disableTamperingProtection = undefined;
      this._enableTamperingProtection = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreMaxAge = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._maxAgeValue = undefined;
      this._name = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._disableTamperingProtection = value.disableTamperingProtection;
      this._enableTamperingProtection = value.enableTamperingProtection;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreMaxAge = value.ignoreMaxAge;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._maxAgeValue = value.maxAgeValue;
      this._name = value.name;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // disable_tampering_protection - computed: false, optional: true, required: false
  private _disableTamperingProtection?: boolean | cdktf.IResolvable; 
  public get disableTamperingProtection() {
    return this.getBooleanAttribute('disable_tampering_protection');
  }
  public set disableTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._disableTamperingProtection = value;
  }
  public resetDisableTamperingProtection() {
    this._disableTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTamperingProtectionInput() {
    return this._disableTamperingProtection;
  }

  // enable_tampering_protection - computed: false, optional: true, required: false
  private _enableTamperingProtection?: boolean | cdktf.IResolvable; 
  public get enableTamperingProtection() {
    return this.getBooleanAttribute('enable_tampering_protection');
  }
  public set enableTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._enableTamperingProtection = value;
  }
  public resetEnableTamperingProtection() {
    this._enableTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTamperingProtectionInput() {
    return this._enableTamperingProtection;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_max_age - computed: false, optional: true, required: false
  private _ignoreMaxAge?: boolean | cdktf.IResolvable; 
  public get ignoreMaxAge() {
    return this.getBooleanAttribute('ignore_max_age');
  }
  public set ignoreMaxAge(value: boolean | cdktf.IResolvable) {
    this._ignoreMaxAge = value;
  }
  public resetIgnoreMaxAge() {
    this._ignoreMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaxAgeInput() {
    return this._ignoreMaxAge;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
  }

  // max_age_value - computed: false, optional: true, required: false
  private _maxAgeValue?: number; 
  public get maxAgeValue() {
    return this.getNumberAttribute('max_age_value');
  }
  public set maxAgeValue(value: number) {
    this._maxAgeValue = value;
  }
  public resetMaxAgeValue() {
    this._maxAgeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeValueInput() {
    return this._maxAgeValue;
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

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }
}

export class HttpLoadbalancerProtectedCookiesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerProtectedCookies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerProtectedCookiesOutputReference {
    return new HttpLoadbalancerProtectedCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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


export function httpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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

export class HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRateLimitCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#rate_limiter_allowed_prefixes HttpLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function httpLoadbalancerRateLimitCustomIpAllowedListStructToTerraform(struct?: HttpLoadbalancerRateLimitCustomIpAllowedListStructOutputReference | HttpLoadbalancerRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(httpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function httpLoadbalancerRateLimitCustomIpAllowedListStructToHclTerraform(struct?: HttpLoadbalancerRateLimitCustomIpAllowedListStructOutputReference | HttpLoadbalancerRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(httpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitCustomIpAllowedListStruct | undefined) {
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
  private _rateLimiterAllowedPrefixes = new HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: HttpLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface HttpLoadbalancerRateLimitIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ipv6_prefixes HttpLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefixes HttpLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function httpLoadbalancerRateLimitIpAllowedListStructToTerraform(struct?: HttpLoadbalancerRateLimitIpAllowedListStructOutputReference | HttpLoadbalancerRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function httpLoadbalancerRateLimitIpAllowedListStructToHclTerraform(struct?: HttpLoadbalancerRateLimitIpAllowedListStructOutputReference | HttpLoadbalancerRateLimitIpAllowedListStruct): any {
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

export class HttpLoadbalancerRateLimitIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitIpAllowedListStruct | undefined {
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

  public set internalValue(value: HttpLoadbalancerRateLimitIpAllowedListStruct | undefined) {
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
export interface HttpLoadbalancerRateLimitPoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRateLimitPoliciesPoliciesToTerraform(struct?: HttpLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable): any {
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


export function httpLoadbalancerRateLimitPoliciesPoliciesToHclTerraform(struct?: HttpLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable): any {
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

export class HttpLoadbalancerRateLimitPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerRateLimitPoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRateLimitPoliciesPolicies[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRateLimitPoliciesPoliciesOutputReference {
    return new HttpLoadbalancerRateLimitPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRateLimitPolicies {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#policies HttpLoadbalancer#policies}
  */
  readonly policies: HttpLoadbalancerRateLimitPoliciesPolicies[] | cdktf.IResolvable;
}

export function httpLoadbalancerRateLimitPoliciesToTerraform(struct?: HttpLoadbalancerRateLimitPoliciesOutputReference | HttpLoadbalancerRateLimitPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(httpLoadbalancerRateLimitPoliciesPoliciesToTerraform, true)(struct!.policies),
  }
}


export function httpLoadbalancerRateLimitPoliciesToHclTerraform(struct?: HttpLoadbalancerRateLimitPoliciesOutputReference | HttpLoadbalancerRateLimitPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(httpLoadbalancerRateLimitPoliciesPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitPoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitPolicies | undefined) {
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
  private _policies = new HttpLoadbalancerRateLimitPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: HttpLoadbalancerRateLimitPoliciesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface HttpLoadbalancerRateLimitRateLimiterActionBlockHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#duration HttpLoadbalancer#duration}
  */
  readonly duration?: number;
}

export function httpLoadbalancerRateLimitRateLimiterActionBlockHoursToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlockHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function httpLoadbalancerRateLimitRateLimiterActionBlockHoursToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlockHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiterActionBlockHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiterActionBlockHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#duration HttpLoadbalancer#duration}
  */
  readonly duration?: number;
}

export function httpLoadbalancerRateLimitRateLimiterActionBlockMinutesToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function httpLoadbalancerRateLimitRateLimiterActionBlockMinutesToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#duration HttpLoadbalancer#duration}
  */
  readonly duration?: number;
}

export function httpLoadbalancerRateLimitRateLimiterActionBlockSecondsToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function httpLoadbalancerRateLimitRateLimiterActionBlockSecondsToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface HttpLoadbalancerRateLimitRateLimiterActionBlock {
  /**
  * hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#hours HttpLoadbalancer#hours}
  */
  readonly hours?: HttpLoadbalancerRateLimitRateLimiterActionBlockHours;
  /**
  * minutes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#minutes HttpLoadbalancer#minutes}
  */
  readonly minutes?: HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes;
  /**
  * seconds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#seconds HttpLoadbalancer#seconds}
  */
  readonly seconds?: HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds;
}

export function httpLoadbalancerRateLimitRateLimiterActionBlockToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: httpLoadbalancerRateLimitRateLimiterActionBlockHoursToTerraform(struct!.hours),
    minutes: httpLoadbalancerRateLimitRateLimiterActionBlockMinutesToTerraform(struct!.minutes),
    seconds: httpLoadbalancerRateLimitRateLimiterActionBlockSecondsToTerraform(struct!.seconds),
  }
}


export function httpLoadbalancerRateLimitRateLimiterActionBlockToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterActionBlockOutputReference | HttpLoadbalancerRateLimitRateLimiterActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: httpLoadbalancerRateLimitRateLimiterActionBlockHoursToHclTerraform(struct!.hours),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterActionBlockHoursList",
    },
    minutes: {
      value: httpLoadbalancerRateLimitRateLimiterActionBlockMinutesToHclTerraform(struct!.minutes),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterActionBlockMinutesList",
    },
    seconds: {
      value: httpLoadbalancerRateLimitRateLimiterActionBlockSecondsToHclTerraform(struct!.seconds),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterActionBlockSecondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitRateLimiterActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiterActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours?.internalValue;
    }
    if (this._minutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes?.internalValue;
    }
    if (this._seconds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiterActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours.internalValue = undefined;
      this._minutes.internalValue = undefined;
      this._seconds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours.internalValue = value.hours;
      this._minutes.internalValue = value.minutes;
      this._seconds.internalValue = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours = new HttpLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
  public putHours(value: HttpLoadbalancerRateLimitRateLimiterActionBlockHours) {
    this._hours.internalValue = value;
  }
  public resetHours() {
    this._hours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours.internalValue;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes = new HttpLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference(this, "minutes");
  public get minutes() {
    return this._minutes;
  }
  public putMinutes(value: HttpLoadbalancerRateLimitRateLimiterActionBlockMinutes) {
    this._minutes.internalValue = value;
  }
  public resetMinutes() {
    this._minutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes.internalValue;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds = new HttpLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference(this, "seconds");
  public get seconds() {
    return this._seconds;
  }
  public putSeconds(value: HttpLoadbalancerRateLimitRateLimiterActionBlockSeconds) {
    this._seconds.internalValue = value;
  }
  public resetSeconds() {
    this._seconds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds.internalValue;
  }
}
export interface HttpLoadbalancerRateLimitRateLimiterLeakyBucket {
}

export function httpLoadbalancerRateLimitRateLimiterLeakyBucketToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterLeakyBucketOutputReference | HttpLoadbalancerRateLimitRateLimiterLeakyBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerRateLimitRateLimiterLeakyBucketToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterLeakyBucketOutputReference | HttpLoadbalancerRateLimitRateLimiterLeakyBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerRateLimitRateLimiterLeakyBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiterLeakyBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiterLeakyBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerRateLimitRateLimiterTokenBucket {
}

export function httpLoadbalancerRateLimitRateLimiterTokenBucketToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterTokenBucketOutputReference | HttpLoadbalancerRateLimitRateLimiterTokenBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function httpLoadbalancerRateLimitRateLimiterTokenBucketToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterTokenBucketOutputReference | HttpLoadbalancerRateLimitRateLimiterTokenBucket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class HttpLoadbalancerRateLimitRateLimiterTokenBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiterTokenBucket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiterTokenBucket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface HttpLoadbalancerRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#burst_multiplier HttpLoadbalancer#burst_multiplier}
  */
  readonly burstMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#period_multiplier HttpLoadbalancer#period_multiplier}
  */
  readonly periodMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#total_number HttpLoadbalancer#total_number}
  */
  readonly totalNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#unit HttpLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * action_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#action_block HttpLoadbalancer#action_block}
  */
  readonly actionBlock?: HttpLoadbalancerRateLimitRateLimiterActionBlock;
  /**
  * leaky_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#leaky_bucket HttpLoadbalancer#leaky_bucket}
  */
  readonly leakyBucket?: HttpLoadbalancerRateLimitRateLimiterLeakyBucket;
  /**
  * token_bucket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#token_bucket HttpLoadbalancer#token_bucket}
  */
  readonly tokenBucket?: HttpLoadbalancerRateLimitRateLimiterTokenBucket;
}

export function httpLoadbalancerRateLimitRateLimiterToTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterOutputReference | HttpLoadbalancerRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_multiplier: cdktf.numberToTerraform(struct!.burstMultiplier),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    period_multiplier: cdktf.numberToTerraform(struct!.periodMultiplier),
    total_number: cdktf.numberToTerraform(struct!.totalNumber),
    unit: cdktf.stringToTerraform(struct!.unit),
    action_block: httpLoadbalancerRateLimitRateLimiterActionBlockToTerraform(struct!.actionBlock),
    leaky_bucket: httpLoadbalancerRateLimitRateLimiterLeakyBucketToTerraform(struct!.leakyBucket),
    token_bucket: httpLoadbalancerRateLimitRateLimiterTokenBucketToTerraform(struct!.tokenBucket),
  }
}


export function httpLoadbalancerRateLimitRateLimiterToHclTerraform(struct?: HttpLoadbalancerRateLimitRateLimiterOutputReference | HttpLoadbalancerRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.burstMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    period_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.periodMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_number: {
      value: cdktf.numberToHclTerraform(struct!.totalNumber),
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
    action_block: {
      value: httpLoadbalancerRateLimitRateLimiterActionBlockToHclTerraform(struct!.actionBlock),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterActionBlockList",
    },
    leaky_bucket: {
      value: httpLoadbalancerRateLimitRateLimiterLeakyBucketToHclTerraform(struct!.leakyBucket),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterLeakyBucketList",
    },
    token_bucket: {
      value: httpLoadbalancerRateLimitRateLimiterTokenBucketToHclTerraform(struct!.tokenBucket),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterTokenBucketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstMultiplier = this._burstMultiplier;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._periodMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodMultiplier = this._periodMultiplier;
    }
    if (this._totalNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumber = this._totalNumber;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._actionBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock?.internalValue;
    }
    if (this._leakyBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leakyBucket = this._leakyBucket?.internalValue;
    }
    if (this._tokenBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenBucket = this._tokenBucket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burstMultiplier = undefined;
      this._disabled = undefined;
      this._periodMultiplier = undefined;
      this._totalNumber = undefined;
      this._unit = undefined;
      this._actionBlock.internalValue = undefined;
      this._leakyBucket.internalValue = undefined;
      this._tokenBucket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burstMultiplier = value.burstMultiplier;
      this._disabled = value.disabled;
      this._periodMultiplier = value.periodMultiplier;
      this._totalNumber = value.totalNumber;
      this._unit = value.unit;
      this._actionBlock.internalValue = value.actionBlock;
      this._leakyBucket.internalValue = value.leakyBucket;
      this._tokenBucket.internalValue = value.tokenBucket;
    }
  }

  // burst_multiplier - computed: false, optional: true, required: false
  private _burstMultiplier?: number; 
  public get burstMultiplier() {
    return this.getNumberAttribute('burst_multiplier');
  }
  public set burstMultiplier(value: number) {
    this._burstMultiplier = value;
  }
  public resetBurstMultiplier() {
    this._burstMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstMultiplierInput() {
    return this._burstMultiplier;
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

  // period_multiplier - computed: false, optional: true, required: false
  private _periodMultiplier?: number; 
  public get periodMultiplier() {
    return this.getNumberAttribute('period_multiplier');
  }
  public set periodMultiplier(value: number) {
    this._periodMultiplier = value;
  }
  public resetPeriodMultiplier() {
    this._periodMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodMultiplierInput() {
    return this._periodMultiplier;
  }

  // total_number - computed: false, optional: false, required: true
  private _totalNumber?: number; 
  public get totalNumber() {
    return this.getNumberAttribute('total_number');
  }
  public set totalNumber(value: number) {
    this._totalNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumberInput() {
    return this._totalNumber;
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

  // action_block - computed: false, optional: true, required: false
  private _actionBlock = new HttpLoadbalancerRateLimitRateLimiterActionBlockOutputReference(this, "action_block");
  public get actionBlock() {
    return this._actionBlock;
  }
  public putActionBlock(value: HttpLoadbalancerRateLimitRateLimiterActionBlock) {
    this._actionBlock.internalValue = value;
  }
  public resetActionBlock() {
    this._actionBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock.internalValue;
  }

  // leaky_bucket - computed: false, optional: true, required: false
  private _leakyBucket = new HttpLoadbalancerRateLimitRateLimiterLeakyBucketOutputReference(this, "leaky_bucket");
  public get leakyBucket() {
    return this._leakyBucket;
  }
  public putLeakyBucket(value: HttpLoadbalancerRateLimitRateLimiterLeakyBucket) {
    this._leakyBucket.internalValue = value;
  }
  public resetLeakyBucket() {
    this._leakyBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leakyBucketInput() {
    return this._leakyBucket.internalValue;
  }

  // token_bucket - computed: false, optional: true, required: false
  private _tokenBucket = new HttpLoadbalancerRateLimitRateLimiterTokenBucketOutputReference(this, "token_bucket");
  public get tokenBucket() {
    return this._tokenBucket;
  }
  public putTokenBucket(value: HttpLoadbalancerRateLimitRateLimiterTokenBucket) {
    this._tokenBucket.internalValue = value;
  }
  public resetTokenBucket() {
    this._tokenBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBucketInput() {
    return this._tokenBucket.internalValue;
  }
}
export interface HttpLoadbalancerRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_ip_allowed_list HttpLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_policies HttpLoadbalancer#no_policies}
  */
  readonly noPolicies?: boolean | cdktf.IResolvable;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_ip_allowed_list HttpLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: HttpLoadbalancerRateLimitCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ip_allowed_list HttpLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: HttpLoadbalancerRateLimitIpAllowedListStruct;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#policies HttpLoadbalancer#policies}
  */
  readonly policies?: HttpLoadbalancerRateLimitPolicies;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#rate_limiter HttpLoadbalancer#rate_limiter}
  */
  readonly rateLimiter?: HttpLoadbalancerRateLimitRateLimiter;
}

export function httpLoadbalancerRateLimitToTerraform(struct?: HttpLoadbalancerRateLimitOutputReference | HttpLoadbalancerRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    no_policies: cdktf.booleanToTerraform(struct!.noPolicies),
    custom_ip_allowed_list: httpLoadbalancerRateLimitCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: httpLoadbalancerRateLimitIpAllowedListStructToTerraform(struct!.ipAllowedList),
    policies: httpLoadbalancerRateLimitPoliciesToTerraform(struct!.policies),
    rate_limiter: httpLoadbalancerRateLimitRateLimiterToTerraform(struct!.rateLimiter),
  }
}


export function httpLoadbalancerRateLimitToHclTerraform(struct?: HttpLoadbalancerRateLimitOutputReference | HttpLoadbalancerRateLimit): any {
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
    no_policies: {
      value: cdktf.booleanToHclTerraform(struct!.noPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ip_allowed_list: {
      value: httpLoadbalancerRateLimitCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: httpLoadbalancerRateLimitIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitIpAllowedListStructList",
    },
    policies: {
      value: httpLoadbalancerRateLimitPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitPoliciesList",
    },
    rate_limiter: {
      value: httpLoadbalancerRateLimitRateLimiterToHclTerraform(struct!.rateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noIpAllowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpAllowedList = this._noIpAllowedList;
    }
    if (this._noPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPolicies = this._noPolicies;
    }
    if (this._customIpAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIpAllowedList = this._customIpAllowedList?.internalValue;
    }
    if (this._ipAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowedList = this._ipAllowedList?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noIpAllowedList = undefined;
      this._noPolicies = undefined;
      this._customIpAllowedList.internalValue = undefined;
      this._ipAllowedList.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noIpAllowedList = value.noIpAllowedList;
      this._noPolicies = value.noPolicies;
      this._customIpAllowedList.internalValue = value.customIpAllowedList;
      this._ipAllowedList.internalValue = value.ipAllowedList;
      this._policies.internalValue = value.policies;
      this._rateLimiter.internalValue = value.rateLimiter;
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

  // no_policies - computed: false, optional: true, required: false
  private _noPolicies?: boolean | cdktf.IResolvable; 
  public get noPolicies() {
    return this.getBooleanAttribute('no_policies');
  }
  public set noPolicies(value: boolean | cdktf.IResolvable) {
    this._noPolicies = value;
  }
  public resetNoPolicies() {
    this._noPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPoliciesInput() {
    return this._noPolicies;
  }

  // custom_ip_allowed_list - computed: false, optional: true, required: false
  private _customIpAllowedList = new HttpLoadbalancerRateLimitCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: HttpLoadbalancerRateLimitCustomIpAllowedListStruct) {
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
  private _ipAllowedList = new HttpLoadbalancerRateLimitIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: HttpLoadbalancerRateLimitIpAllowedListStruct) {
    this._ipAllowedList.internalValue = value;
  }
  public resetIpAllowedList() {
    this._ipAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowedListInput() {
    return this._ipAllowedList.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new HttpLoadbalancerRateLimitPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: HttpLoadbalancerRateLimitPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new HttpLoadbalancerRateLimitRateLimiterOutputReference(this, "rate_limiter");
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: HttpLoadbalancerRateLimitRateLimiter) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}
export interface HttpLoadbalancerRingHashHashPolicyCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ttl HttpLoadbalancer#ttl}
  */
  readonly ttl?: number;
}

export function httpLoadbalancerRingHashHashPolicyCookieToTerraform(struct?: HttpLoadbalancerRingHashHashPolicyCookieOutputReference | HttpLoadbalancerRingHashHashPolicyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function httpLoadbalancerRingHashHashPolicyCookieToHclTerraform(struct?: HttpLoadbalancerRingHashHashPolicyCookieOutputReference | HttpLoadbalancerRingHashHashPolicyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRingHashHashPolicyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRingHashHashPolicyCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRingHashHashPolicyCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._name = undefined;
      this._path = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._name = value.name;
      this._path = value.path;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._ttl = value.ttl;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
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

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface HttpLoadbalancerRingHashHashPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header_name HttpLoadbalancer#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#source_ip HttpLoadbalancer#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#terminal HttpLoadbalancer#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie HttpLoadbalancer#cookie}
  */
  readonly cookie?: HttpLoadbalancerRingHashHashPolicyCookie;
}

export function httpLoadbalancerRingHashHashPolicyToTerraform(struct?: HttpLoadbalancerRingHashHashPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    cookie: httpLoadbalancerRingHashHashPolicyCookieToTerraform(struct!.cookie),
  }
}


export function httpLoadbalancerRingHashHashPolicyToHclTerraform(struct?: HttpLoadbalancerRingHashHashPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie: {
      value: httpLoadbalancerRingHashHashPolicyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRingHashHashPolicyCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRingHashHashPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRingHashHashPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRingHashHashPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._sourceIp = undefined;
      this._terminal = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._sourceIp = value.sourceIp;
      this._terminal = value.terminal;
      this._cookie.internalValue = value.cookie;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttpLoadbalancerRingHashHashPolicyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttpLoadbalancerRingHashHashPolicyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}

export class HttpLoadbalancerRingHashHashPolicyList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRingHashHashPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRingHashHashPolicyOutputReference {
    return new HttpLoadbalancerRingHashHashPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRingHash {
  /**
  * hash_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#hash_policy HttpLoadbalancer#hash_policy}
  */
  readonly hashPolicy: HttpLoadbalancerRingHashHashPolicy[] | cdktf.IResolvable;
}

export function httpLoadbalancerRingHashToTerraform(struct?: HttpLoadbalancerRingHashOutputReference | HttpLoadbalancerRingHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_policy: cdktf.listMapper(httpLoadbalancerRingHashHashPolicyToTerraform, true)(struct!.hashPolicy),
  }
}


export function httpLoadbalancerRingHashToHclTerraform(struct?: HttpLoadbalancerRingHashOutputReference | HttpLoadbalancerRingHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_policy: {
      value: cdktf.listMapperHcl(httpLoadbalancerRingHashHashPolicyToHclTerraform, true)(struct!.hashPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRingHashHashPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRingHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRingHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashPolicy = this._hashPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRingHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashPolicy.internalValue = value.hashPolicy;
    }
  }

  // hash_policy - computed: false, optional: false, required: true
  private _hashPolicy = new HttpLoadbalancerRingHashHashPolicyList(this, "hash_policy", false);
  public get hashPolicy() {
    return this._hashPolicy;
  }
  public putHashPolicy(value: HttpLoadbalancerRingHashHashPolicy[] | cdktf.IResolvable) {
    this._hashPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyInput() {
    return this._hashPolicy.internalValue;
  }
}
export interface HttpLoadbalancerRoutesCustomRouteObjectRouteRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRoutesCustomRouteObjectRouteRefToTerraform(struct?: HttpLoadbalancerRoutesCustomRouteObjectRouteRefOutputReference | HttpLoadbalancerRoutesCustomRouteObjectRouteRef): any {
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


export function httpLoadbalancerRoutesCustomRouteObjectRouteRefToHclTerraform(struct?: HttpLoadbalancerRoutesCustomRouteObjectRouteRefOutputReference | HttpLoadbalancerRoutesCustomRouteObjectRouteRef): any {
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

export class HttpLoadbalancerRoutesCustomRouteObjectRouteRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesCustomRouteObjectRouteRef | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesCustomRouteObjectRouteRef | undefined) {
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
export interface HttpLoadbalancerRoutesCustomRouteObject {
  /**
  * route_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#route_ref HttpLoadbalancer#route_ref}
  */
  readonly routeRef?: HttpLoadbalancerRoutesCustomRouteObjectRouteRef;
}

export function httpLoadbalancerRoutesCustomRouteObjectToTerraform(struct?: HttpLoadbalancerRoutesCustomRouteObjectOutputReference | HttpLoadbalancerRoutesCustomRouteObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_ref: httpLoadbalancerRoutesCustomRouteObjectRouteRefToTerraform(struct!.routeRef),
  }
}


export function httpLoadbalancerRoutesCustomRouteObjectToHclTerraform(struct?: HttpLoadbalancerRoutesCustomRouteObjectOutputReference | HttpLoadbalancerRoutesCustomRouteObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_ref: {
      value: httpLoadbalancerRoutesCustomRouteObjectRouteRefToHclTerraform(struct!.routeRef),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesCustomRouteObjectRouteRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesCustomRouteObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesCustomRouteObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRef = this._routeRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesCustomRouteObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routeRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routeRef.internalValue = value.routeRef;
    }
  }

  // route_ref - computed: false, optional: true, required: false
  private _routeRef = new HttpLoadbalancerRoutesCustomRouteObjectRouteRefOutputReference(this, "route_ref");
  public get routeRef() {
    return this._routeRef;
  }
  public putRouteRef(value: HttpLoadbalancerRoutesCustomRouteObjectRouteRef) {
    this._routeRef.internalValue = value;
  }
  public resetRouteRef() {
    this._routeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRefInput() {
    return this._routeRef.internalValue;
  }
}
export interface HttpLoadbalancerRoutesDirectResponseRouteHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact HttpLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerRoutesDirectResponseRouteHeadersToTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteHeaders | cdktf.IResolvable): any {
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


export function httpLoadbalancerRoutesDirectResponseRouteHeadersToHclTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteHeaders | cdktf.IResolvable): any {
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

export class HttpLoadbalancerRoutesDirectResponseRouteHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesDirectResponseRouteHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesDirectResponseRouteHeaders | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerRoutesDirectResponseRouteHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesDirectResponseRouteHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesDirectResponseRouteHeadersOutputReference {
    return new HttpLoadbalancerRoutesDirectResponseRouteHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesDirectResponseRouteIncomingPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_port_match HttpLoadbalancer#no_port_match}
  */
  readonly noPortMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
}

export function httpLoadbalancerRoutesDirectResponseRouteIncomingPortToTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteIncomingPortOutputReference | HttpLoadbalancerRoutesDirectResponseRouteIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_port_match: cdktf.booleanToTerraform(struct!.noPortMatch),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function httpLoadbalancerRoutesDirectResponseRouteIncomingPortToHclTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteIncomingPortOutputReference | HttpLoadbalancerRoutesDirectResponseRouteIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_port_match: {
      value: cdktf.booleanToHclTerraform(struct!.noPortMatch),
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

export class HttpLoadbalancerRoutesDirectResponseRouteIncomingPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesDirectResponseRouteIncomingPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPortMatch = this._noPortMatch;
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

  public set internalValue(value: HttpLoadbalancerRoutesDirectResponseRouteIncomingPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noPortMatch = undefined;
      this._port = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noPortMatch = value.noPortMatch;
      this._port = value.port;
      this._portRanges = value.portRanges;
    }
  }

  // no_port_match - computed: false, optional: true, required: false
  private _noPortMatch?: boolean | cdktf.IResolvable; 
  public get noPortMatch() {
    return this.getBooleanAttribute('no_port_match');
  }
  public set noPortMatch(value: boolean | cdktf.IResolvable) {
    this._noPortMatch = value;
  }
  public resetNoPortMatch() {
    this._noPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPortMatchInput() {
    return this._noPortMatch;
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
export interface HttpLoadbalancerRoutesDirectResponseRoutePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerRoutesDirectResponseRoutePathToTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRoutePathOutputReference | HttpLoadbalancerRoutesDirectResponseRoutePath): any {
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


export function httpLoadbalancerRoutesDirectResponseRoutePathToHclTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRoutePathOutputReference | HttpLoadbalancerRoutesDirectResponseRoutePath): any {
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

export class HttpLoadbalancerRoutesDirectResponseRoutePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesDirectResponseRoutePath | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesDirectResponseRoutePath | undefined) {
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
export interface HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_body HttpLoadbalancer#response_body}
  */
  readonly responseBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_body_encoded HttpLoadbalancer#response_body_encoded}
  */
  readonly responseBodyEncoded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_code HttpLoadbalancer#response_code}
  */
  readonly responseCode?: number;
}

export function httpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseToTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseOutputReference | HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_body: cdktf.stringToTerraform(struct!.responseBody),
    response_body_encoded: cdktf.stringToTerraform(struct!.responseBodyEncoded),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
  }
}


export function httpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseToHclTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseOutputReference | HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_body: {
      value: cdktf.stringToHclTerraform(struct!.responseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_encoded: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBody = this._responseBody;
    }
    if (this._responseBodyEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyEncoded = this._responseBodyEncoded;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseBody = undefined;
      this._responseBodyEncoded = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseBody = value.responseBody;
      this._responseBodyEncoded = value.responseBodyEncoded;
      this._responseCode = value.responseCode;
    }
  }

  // response_body - computed: false, optional: true, required: false
  private _responseBody?: string; 
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }
  public set responseBody(value: string) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_body_encoded - computed: false, optional: true, required: false
  private _responseBodyEncoded?: string; 
  public get responseBodyEncoded() {
    return this.getStringAttribute('response_body_encoded');
  }
  public set responseBodyEncoded(value: string) {
    this._responseBodyEncoded = value;
  }
  public resetResponseBodyEncoded() {
    this._responseBodyEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyEncodedInput() {
    return this._responseBodyEncoded;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface HttpLoadbalancerRoutesDirectResponseRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_method HttpLoadbalancer#http_method}
  */
  readonly httpMethod?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerRoutesDirectResponseRouteHeaders[] | cdktf.IResolvable;
  /**
  * incoming_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#incoming_port HttpLoadbalancer#incoming_port}
  */
  readonly incomingPort?: HttpLoadbalancerRoutesDirectResponseRouteIncomingPort;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerRoutesDirectResponseRoutePath;
  /**
  * route_direct_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#route_direct_response HttpLoadbalancer#route_direct_response}
  */
  readonly routeDirectResponse?: HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse;
}

export function httpLoadbalancerRoutesDirectResponseRouteToTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteOutputReference | HttpLoadbalancerRoutesDirectResponseRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    headers: cdktf.listMapper(httpLoadbalancerRoutesDirectResponseRouteHeadersToTerraform, true)(struct!.headers),
    incoming_port: httpLoadbalancerRoutesDirectResponseRouteIncomingPortToTerraform(struct!.incomingPort),
    path: httpLoadbalancerRoutesDirectResponseRoutePathToTerraform(struct!.path),
    route_direct_response: httpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseToTerraform(struct!.routeDirectResponse),
  }
}


export function httpLoadbalancerRoutesDirectResponseRouteToHclTerraform(struct?: HttpLoadbalancerRoutesDirectResponseRouteOutputReference | HttpLoadbalancerRoutesDirectResponseRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesDirectResponseRouteHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesDirectResponseRouteHeadersList",
    },
    incoming_port: {
      value: httpLoadbalancerRoutesDirectResponseRouteIncomingPortToHclTerraform(struct!.incomingPort),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesDirectResponseRouteIncomingPortList",
    },
    path: {
      value: httpLoadbalancerRoutesDirectResponseRoutePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesDirectResponseRoutePathList",
    },
    route_direct_response: {
      value: httpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseToHclTerraform(struct!.routeDirectResponse),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesDirectResponseRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesDirectResponseRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._incomingPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingPort = this._incomingPort?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._routeDirectResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDirectResponse = this._routeDirectResponse?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesDirectResponseRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpMethod = undefined;
      this._headers.internalValue = undefined;
      this._incomingPort.internalValue = undefined;
      this._path.internalValue = undefined;
      this._routeDirectResponse.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpMethod = value.httpMethod;
      this._headers.internalValue = value.headers;
      this._incomingPort.internalValue = value.incomingPort;
      this._path.internalValue = value.path;
      this._routeDirectResponse.internalValue = value.routeDirectResponse;
    }
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerRoutesDirectResponseRouteHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerRoutesDirectResponseRouteHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // incoming_port - computed: false, optional: true, required: false
  private _incomingPort = new HttpLoadbalancerRoutesDirectResponseRouteIncomingPortOutputReference(this, "incoming_port");
  public get incomingPort() {
    return this._incomingPort;
  }
  public putIncomingPort(value: HttpLoadbalancerRoutesDirectResponseRouteIncomingPort) {
    this._incomingPort.internalValue = value;
  }
  public resetIncomingPort() {
    this._incomingPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPortInput() {
    return this._incomingPort.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerRoutesDirectResponseRoutePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerRoutesDirectResponseRoutePath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // route_direct_response - computed: false, optional: true, required: false
  private _routeDirectResponse = new HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponseOutputReference(this, "route_direct_response");
  public get routeDirectResponse() {
    return this._routeDirectResponse;
  }
  public putRouteDirectResponse(value: HttpLoadbalancerRoutesDirectResponseRouteRouteDirectResponse) {
    this._routeDirectResponse.internalValue = value;
  }
  public resetRouteDirectResponse() {
    this._routeDirectResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDirectResponseInput() {
    return this._routeDirectResponse.internalValue;
  }
}
export interface HttpLoadbalancerRoutesRedirectRouteHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact HttpLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerRoutesRedirectRouteHeadersToTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteHeaders | cdktf.IResolvable): any {
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


export function httpLoadbalancerRoutesRedirectRouteHeadersToHclTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteHeaders | cdktf.IResolvable): any {
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

export class HttpLoadbalancerRoutesRedirectRouteHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesRedirectRouteHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesRedirectRouteHeaders | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerRoutesRedirectRouteHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesRedirectRouteHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesRedirectRouteHeadersOutputReference {
    return new HttpLoadbalancerRoutesRedirectRouteHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesRedirectRouteIncomingPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_port_match HttpLoadbalancer#no_port_match}
  */
  readonly noPortMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
}

export function httpLoadbalancerRoutesRedirectRouteIncomingPortToTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteIncomingPortOutputReference | HttpLoadbalancerRoutesRedirectRouteIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_port_match: cdktf.booleanToTerraform(struct!.noPortMatch),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function httpLoadbalancerRoutesRedirectRouteIncomingPortToHclTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteIncomingPortOutputReference | HttpLoadbalancerRoutesRedirectRouteIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_port_match: {
      value: cdktf.booleanToHclTerraform(struct!.noPortMatch),
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

export class HttpLoadbalancerRoutesRedirectRouteIncomingPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesRedirectRouteIncomingPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPortMatch = this._noPortMatch;
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

  public set internalValue(value: HttpLoadbalancerRoutesRedirectRouteIncomingPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noPortMatch = undefined;
      this._port = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noPortMatch = value.noPortMatch;
      this._port = value.port;
      this._portRanges = value.portRanges;
    }
  }

  // no_port_match - computed: false, optional: true, required: false
  private _noPortMatch?: boolean | cdktf.IResolvable; 
  public get noPortMatch() {
    return this.getBooleanAttribute('no_port_match');
  }
  public set noPortMatch(value: boolean | cdktf.IResolvable) {
    this._noPortMatch = value;
  }
  public resetNoPortMatch() {
    this._noPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPortMatchInput() {
    return this._noPortMatch;
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
export interface HttpLoadbalancerRoutesRedirectRoutePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerRoutesRedirectRoutePathToTerraform(struct?: HttpLoadbalancerRoutesRedirectRoutePathOutputReference | HttpLoadbalancerRoutesRedirectRoutePath): any {
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


export function httpLoadbalancerRoutesRedirectRoutePathToHclTerraform(struct?: HttpLoadbalancerRoutesRedirectRoutePathOutputReference | HttpLoadbalancerRoutesRedirectRoutePath): any {
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

export class HttpLoadbalancerRoutesRedirectRoutePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesRedirectRoutePath | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesRedirectRoutePath | undefined) {
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
export interface HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: string[];
}

export function httpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsToTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsOutputReference | HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryParams),
  }
}


export function httpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsToHclTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsOutputReference | HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryParams = value.queryParams;
    }
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: string[]; 
  public get queryParams() {
    return this.getListAttribute('query_params');
  }
  public set queryParams(value: string[]) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface HttpLoadbalancerRoutesRedirectRouteRouteRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#all_params HttpLoadbalancer#all_params}
  */
  readonly allParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#host_redirect HttpLoadbalancer#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path_redirect HttpLoadbalancer#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_redirect HttpLoadbalancer#port_redirect}
  */
  readonly portRedirect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix_rewrite HttpLoadbalancer#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#proto_redirect HttpLoadbalancer#proto_redirect}
  */
  readonly protoRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#remove_all_params HttpLoadbalancer#remove_all_params}
  */
  readonly removeAllParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#replace_params HttpLoadbalancer#replace_params}
  */
  readonly replaceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_code HttpLoadbalancer#response_code}
  */
  readonly responseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retain_all_params HttpLoadbalancer#retain_all_params}
  */
  readonly retainAllParams?: boolean | cdktf.IResolvable;
  /**
  * strip_query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#strip_query_params HttpLoadbalancer#strip_query_params}
  */
  readonly stripQueryParams?: HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams;
}

export function httpLoadbalancerRoutesRedirectRouteRouteRedirectToTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteRouteRedirectOutputReference | HttpLoadbalancerRoutesRedirectRouteRouteRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_params: cdktf.booleanToTerraform(struct!.allParams),
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    port_redirect: cdktf.numberToTerraform(struct!.portRedirect),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    proto_redirect: cdktf.stringToTerraform(struct!.protoRedirect),
    remove_all_params: cdktf.booleanToTerraform(struct!.removeAllParams),
    replace_params: cdktf.stringToTerraform(struct!.replaceParams),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    retain_all_params: cdktf.booleanToTerraform(struct!.retainAllParams),
    strip_query_params: httpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsToTerraform(struct!.stripQueryParams),
  }
}


export function httpLoadbalancerRoutesRedirectRouteRouteRedirectToHclTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteRouteRedirectOutputReference | HttpLoadbalancerRoutesRedirectRouteRouteRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_params: {
      value: cdktf.booleanToHclTerraform(struct!.allParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_redirect: {
      value: cdktf.numberToHclTerraform(struct!.portRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_redirect: {
      value: cdktf.stringToHclTerraform(struct!.protoRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.removeAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_params: {
      value: cdktf.stringToHclTerraform(struct!.replaceParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.retainAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_query_params: {
      value: httpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsToHclTerraform(struct!.stripQueryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesRedirectRouteRouteRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesRedirectRouteRouteRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.allParams = this._allParams;
    }
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._portRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRedirect = this._portRedirect;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._protoRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoRedirect = this._protoRedirect;
    }
    if (this._removeAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAllParams = this._removeAllParams;
    }
    if (this._replaceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceParams = this._replaceParams;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._retainAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAllParams = this._retainAllParams;
    }
    if (this._stripQueryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQueryParams = this._stripQueryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesRedirectRouteRouteRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allParams = undefined;
      this._hostRedirect = undefined;
      this._pathRedirect = undefined;
      this._portRedirect = undefined;
      this._prefixRewrite = undefined;
      this._protoRedirect = undefined;
      this._removeAllParams = undefined;
      this._replaceParams = undefined;
      this._responseCode = undefined;
      this._retainAllParams = undefined;
      this._stripQueryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allParams = value.allParams;
      this._hostRedirect = value.hostRedirect;
      this._pathRedirect = value.pathRedirect;
      this._portRedirect = value.portRedirect;
      this._prefixRewrite = value.prefixRewrite;
      this._protoRedirect = value.protoRedirect;
      this._removeAllParams = value.removeAllParams;
      this._replaceParams = value.replaceParams;
      this._responseCode = value.responseCode;
      this._retainAllParams = value.retainAllParams;
      this._stripQueryParams.internalValue = value.stripQueryParams;
    }
  }

  // all_params - computed: false, optional: true, required: false
  private _allParams?: boolean | cdktf.IResolvable; 
  public get allParams() {
    return this.getBooleanAttribute('all_params');
  }
  public set allParams(value: boolean | cdktf.IResolvable) {
    this._allParams = value;
  }
  public resetAllParams() {
    this._allParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allParamsInput() {
    return this._allParams;
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // port_redirect - computed: false, optional: true, required: false
  private _portRedirect?: number; 
  public get portRedirect() {
    return this.getNumberAttribute('port_redirect');
  }
  public set portRedirect(value: number) {
    this._portRedirect = value;
  }
  public resetPortRedirect() {
    this._portRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRedirectInput() {
    return this._portRedirect;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // proto_redirect - computed: false, optional: true, required: false
  private _protoRedirect?: string; 
  public get protoRedirect() {
    return this.getStringAttribute('proto_redirect');
  }
  public set protoRedirect(value: string) {
    this._protoRedirect = value;
  }
  public resetProtoRedirect() {
    this._protoRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoRedirectInput() {
    return this._protoRedirect;
  }

  // remove_all_params - computed: false, optional: true, required: false
  private _removeAllParams?: boolean | cdktf.IResolvable; 
  public get removeAllParams() {
    return this.getBooleanAttribute('remove_all_params');
  }
  public set removeAllParams(value: boolean | cdktf.IResolvable) {
    this._removeAllParams = value;
  }
  public resetRemoveAllParams() {
    this._removeAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAllParamsInput() {
    return this._removeAllParams;
  }

  // replace_params - computed: false, optional: true, required: false
  private _replaceParams?: string; 
  public get replaceParams() {
    return this.getStringAttribute('replace_params');
  }
  public set replaceParams(value: string) {
    this._replaceParams = value;
  }
  public resetReplaceParams() {
    this._replaceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceParamsInput() {
    return this._replaceParams;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // retain_all_params - computed: false, optional: true, required: false
  private _retainAllParams?: boolean | cdktf.IResolvable; 
  public get retainAllParams() {
    return this.getBooleanAttribute('retain_all_params');
  }
  public set retainAllParams(value: boolean | cdktf.IResolvable) {
    this._retainAllParams = value;
  }
  public resetRetainAllParams() {
    this._retainAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAllParamsInput() {
    return this._retainAllParams;
  }

  // strip_query_params - computed: false, optional: true, required: false
  private _stripQueryParams = new HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParamsOutputReference(this, "strip_query_params");
  public get stripQueryParams() {
    return this._stripQueryParams;
  }
  public putStripQueryParams(value: HttpLoadbalancerRoutesRedirectRouteRouteRedirectStripQueryParams) {
    this._stripQueryParams.internalValue = value;
  }
  public resetStripQueryParams() {
    this._stripQueryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryParamsInput() {
    return this._stripQueryParams.internalValue;
  }
}
export interface HttpLoadbalancerRoutesRedirectRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_method HttpLoadbalancer#http_method}
  */
  readonly httpMethod?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerRoutesRedirectRouteHeaders[] | cdktf.IResolvable;
  /**
  * incoming_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#incoming_port HttpLoadbalancer#incoming_port}
  */
  readonly incomingPort?: HttpLoadbalancerRoutesRedirectRouteIncomingPort;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerRoutesRedirectRoutePath;
  /**
  * route_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#route_redirect HttpLoadbalancer#route_redirect}
  */
  readonly routeRedirect?: HttpLoadbalancerRoutesRedirectRouteRouteRedirect;
}

export function httpLoadbalancerRoutesRedirectRouteToTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteOutputReference | HttpLoadbalancerRoutesRedirectRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    headers: cdktf.listMapper(httpLoadbalancerRoutesRedirectRouteHeadersToTerraform, true)(struct!.headers),
    incoming_port: httpLoadbalancerRoutesRedirectRouteIncomingPortToTerraform(struct!.incomingPort),
    path: httpLoadbalancerRoutesRedirectRoutePathToTerraform(struct!.path),
    route_redirect: httpLoadbalancerRoutesRedirectRouteRouteRedirectToTerraform(struct!.routeRedirect),
  }
}


export function httpLoadbalancerRoutesRedirectRouteToHclTerraform(struct?: HttpLoadbalancerRoutesRedirectRouteOutputReference | HttpLoadbalancerRoutesRedirectRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesRedirectRouteHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesRedirectRouteHeadersList",
    },
    incoming_port: {
      value: httpLoadbalancerRoutesRedirectRouteIncomingPortToHclTerraform(struct!.incomingPort),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesRedirectRouteIncomingPortList",
    },
    path: {
      value: httpLoadbalancerRoutesRedirectRoutePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesRedirectRoutePathList",
    },
    route_redirect: {
      value: httpLoadbalancerRoutesRedirectRouteRouteRedirectToHclTerraform(struct!.routeRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesRedirectRouteRouteRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesRedirectRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesRedirectRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._incomingPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingPort = this._incomingPort?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._routeRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRedirect = this._routeRedirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesRedirectRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpMethod = undefined;
      this._headers.internalValue = undefined;
      this._incomingPort.internalValue = undefined;
      this._path.internalValue = undefined;
      this._routeRedirect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpMethod = value.httpMethod;
      this._headers.internalValue = value.headers;
      this._incomingPort.internalValue = value.incomingPort;
      this._path.internalValue = value.path;
      this._routeRedirect.internalValue = value.routeRedirect;
    }
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerRoutesRedirectRouteHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerRoutesRedirectRouteHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // incoming_port - computed: false, optional: true, required: false
  private _incomingPort = new HttpLoadbalancerRoutesRedirectRouteIncomingPortOutputReference(this, "incoming_port");
  public get incomingPort() {
    return this._incomingPort;
  }
  public putIncomingPort(value: HttpLoadbalancerRoutesRedirectRouteIncomingPort) {
    this._incomingPort.internalValue = value;
  }
  public resetIncomingPort() {
    this._incomingPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPortInput() {
    return this._incomingPort.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerRoutesRedirectRoutePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerRoutesRedirectRoutePath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // route_redirect - computed: false, optional: true, required: false
  private _routeRedirect = new HttpLoadbalancerRoutesRedirectRouteRouteRedirectOutputReference(this, "route_redirect");
  public get routeRedirect() {
    return this._routeRedirect;
  }
  public putRouteRedirect(value: HttpLoadbalancerRoutesRedirectRouteRouteRedirect) {
    this._routeRedirect.internalValue = value;
  }
  public resetRouteRedirect() {
    this._routeRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRedirectInput() {
    return this._routeRedirect.internalValue;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#javascript_tag HttpLoadbalancer#javascript_tag}
  */
  readonly javascriptTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tag_value HttpLoadbalancer#tag_value}
  */
  readonly tagValue?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_tag: cdktf.stringToTerraform(struct!.javascriptTag),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_tag: {
      value: cdktf.stringToHclTerraform(struct!.javascriptTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptTag = this._javascriptTag;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._javascriptTag = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._javascriptTag = value.javascriptTag;
      this._tagValue = value.tagValue;
    }
  }

  // javascript_tag - computed: false, optional: true, required: false
  private _javascriptTag?: string; 
  public get javascriptTag() {
    return this.getStringAttribute('javascript_tag');
  }
  public set javascriptTag(value: string) {
    this._javascriptTag = value;
  }
  public resetJavascriptTag() {
    this._javascriptTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptTagInput() {
    return this._javascriptTag;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#javascript_url HttpLoadbalancer#javascript_url}
  */
  readonly javascriptUrl: string;
  /**
  * tag_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tag_attributes HttpLoadbalancer#tag_attributes}
  */
  readonly tagAttributes?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes[] | cdktf.IResolvable;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_url: cdktf.stringToTerraform(struct!.javascriptUrl),
    tag_attributes: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToTerraform, true)(struct!.tagAttributes),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_url: {
      value: cdktf.stringToHclTerraform(struct!.javascriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_attributes: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToHclTerraform, true)(struct!.tagAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptUrl = this._javascriptUrl;
    }
    if (this._tagAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagAttributes = this._tagAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._javascriptUrl = undefined;
      this._tagAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._javascriptUrl = value.javascriptUrl;
      this._tagAttributes.internalValue = value.tagAttributes;
    }
  }

  // javascript_url - computed: false, optional: false, required: true
  private _javascriptUrl?: string; 
  public get javascriptUrl() {
    return this.getStringAttribute('javascript_url');
  }
  public set javascriptUrl(value: string) {
    this._javascriptUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptUrlInput() {
    return this._javascriptUrl;
  }

  // tag_attributes - computed: false, optional: true, required: false
  private _tagAttributes = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributesList(this, "tag_attributes", false);
  public get tagAttributes() {
    return this._tagAttributes;
  }
  public putTagAttributes(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsTagAttributes[] | cdktf.IResolvable) {
    this._tagAttributes.internalValue = value;
  }
  public resetTagAttributes() {
    this._tagAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagAttributesInput() {
    return this._tagAttributes.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#javascript_location HttpLoadbalancer#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * javascript_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#javascript_tags HttpLoadbalancer#javascript_tags}
  */
  readonly javascriptTags: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags[] | cdktf.IResolvable;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    javascript_tags: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsToTerraform, true)(struct!.javascriptTags),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection): any {
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
    javascript_tags: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsToHclTerraform, true)(struct!.javascriptTags),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._javascriptTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptTags = this._javascriptTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._javascriptTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._javascriptTags.internalValue = value.javascriptTags;
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

  // javascript_tags - computed: false, optional: false, required: true
  private _javascriptTags = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTagsList(this, "javascript_tags", false);
  public get javascriptTags() {
    return this._javascriptTags;
  }
  public putJavascriptTags(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionJavascriptTags[] | cdktf.IResolvable) {
    this._javascriptTags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptTagsInput() {
    return this._javascriptTags.internalValue;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_request_bytes HttpLoadbalancer#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_request_time HttpLoadbalancer#max_request_time}
  */
  readonly maxRequestTime?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    max_request_time: cdktf.numberToTerraform(struct!.maxRequestTime),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._maxRequestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestTime = this._maxRequestTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._maxRequestBytes = undefined;
      this._maxRequestTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._maxRequestBytes = value.maxRequestBytes;
      this._maxRequestTime = value.maxRequestTime;
    }
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

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // max_request_time - computed: false, optional: true, required: false
  private _maxRequestTime?: number; 
  public get maxRequestTime() {
    return this.getNumberAttribute('max_request_time');
  }
  public set maxRequestTime(value: number) {
    this._maxRequestTime = value;
  }
  public resetMaxRequestTime() {
    this._maxRequestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestTimeInput() {
    return this._maxRequestTime;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#allow_credentials HttpLoadbalancer#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#allow_headers HttpLoadbalancer#allow_headers}
  */
  readonly allowHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#allow_methods HttpLoadbalancer#allow_methods}
  */
  readonly allowMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#allow_origin HttpLoadbalancer#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#allow_origin_regex HttpLoadbalancer#allow_origin_regex}
  */
  readonly allowOriginRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#expose_headers HttpLoadbalancer#expose_headers}
  */
  readonly exposeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_age HttpLoadbalancer#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#maximum_age HttpLoadbalancer#maximum_age}
  */
  readonly maximumAge?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy): any {
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
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy): any {
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
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy | undefined {
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
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOriginRegex = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
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
      this._maxAge = value.maxAge;
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

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#domains HttpLoadbalancer#domains}
  */
  readonly domains: string[];
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#all_load_balancer_domains HttpLoadbalancer#all_load_balancer_domains}
  */
  readonly allLoadBalancerDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disabled HttpLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * custom_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_domain_list HttpLoadbalancer#custom_domain_list}
  */
  readonly customDomainList?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_load_balancer_domains: cdktf.booleanToTerraform(struct!.allLoadBalancerDomains),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    custom_domain_list: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructToTerraform(struct!.customDomainList),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy): any {
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
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructToHclTerraform(struct!.customDomainList),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy | undefined) {
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
  private _customDomainList = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStructOutputReference(this, "custom_domain_list");
  public get customDomainList() {
    return this._customDomainList;
  }
  public putCustomDomainList(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyCustomDomainListStruct) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#denominator HttpLoadbalancer#denominator}
  */
  readonly denominator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#numerator HttpLoadbalancer#numerator}
  */
  readonly numerator: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.numberToTerraform(struct!.numerator),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerator: {
      value: cdktf.numberToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: false, required: true
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: false, required: true
  private _numerator?: number; 
  public get numerator() {
    return this.getNumberAttribute('numerator');
  }
  public set numerator(value: number) {
    this._numerator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy {
  /**
  * origin_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#origin_pool HttpLoadbalancer#origin_pool}
  */
  readonly originPool: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool;
  /**
  * percent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#percent HttpLoadbalancer#percent}
  */
  readonly percent: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin_pool: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolToTerraform(struct!.originPool),
    percent: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentToTerraform(struct!.percent),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin_pool: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolToHclTerraform(struct!.originPool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolList",
    },
    percent: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentToHclTerraform(struct!.percent),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._originPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPool = this._originPool?.internalValue;
    }
    if (this._percent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._originPool.internalValue = undefined;
      this._percent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._originPool.internalValue = value.originPool;
      this._percent.internalValue = value.percent;
    }
  }

  // origin_pool - computed: false, optional: false, required: true
  private _originPool = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPoolOutputReference(this, "origin_pool");
  public get originPool() {
    return this._originPool;
  }
  public putOriginPool(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOriginPool) {
    this._originPool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originPoolInput() {
    return this._originPool.internalValue;
  }

  // percent - computed: false, optional: false, required: true
  private _percent = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercentOutputReference(this, "percent");
  public get percent() {
    return this._percent;
  }
  public putPercent(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyPercent) {
    this._percent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent.internalValue;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#pattern HttpLoadbalancer#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#substitution HttpLoadbalancer#substitution}
  */
  readonly substitution?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pattern = undefined;
      this._substitution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pattern = value.pattern;
      this._substitution = value.substitution;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // substitution - computed: false, optional: true, required: false
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  public resetSubstitution() {
    this._substitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue): any {
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
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueClearSecretInfo) {
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
  private _vaultSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueVaultSecretInfo) {
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
  private _wingmanSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueWingmanSecretInfo) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#overwrite HttpLoadbalancer#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd | cdktf.IResolvable): any {
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue): any {
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
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueClearSecretInfo) {
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
  private _vaultSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueVaultSecretInfo) {
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
  private _wingmanSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueWingmanSecretInfo) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#append HttpLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue): any {
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
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueClearSecretInfo) {
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
  private _vaultSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueVaultSecretInfo) {
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
  private _wingmanSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueWingmanSecretInfo) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_domain HttpLoadbalancer#add_domain}
  */
  readonly addDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_expiry HttpLoadbalancer#add_expiry}
  */
  readonly addExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_partitioned HttpLoadbalancer#add_partitioned}
  */
  readonly addPartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_path HttpLoadbalancer#add_path}
  */
  readonly addPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_domain HttpLoadbalancer#ignore_domain}
  */
  readonly ignoreDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_expiry HttpLoadbalancer#ignore_expiry}
  */
  readonly ignoreExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_max_age HttpLoadbalancer#ignore_max_age}
  */
  readonly ignoreMaxAge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_partitioned HttpLoadbalancer#ignore_partitioned}
  */
  readonly ignorePartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_path HttpLoadbalancer#ignore_path}
  */
  readonly ignorePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_value HttpLoadbalancer#ignore_value}
  */
  readonly ignoreValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_age_value HttpLoadbalancer#max_age_value}
  */
  readonly maxAgeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#overwrite HttpLoadbalancer#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_domain: cdktf.stringToTerraform(struct!.addDomain),
    add_expiry: cdktf.stringToTerraform(struct!.addExpiry),
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_partitioned: cdktf.booleanToTerraform(struct!.addPartitioned),
    add_path: cdktf.stringToTerraform(struct!.addPath),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_domain: cdktf.booleanToTerraform(struct!.ignoreDomain),
    ignore_expiry: cdktf.booleanToTerraform(struct!.ignoreExpiry),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_max_age: cdktf.booleanToTerraform(struct!.ignoreMaxAge),
    ignore_partitioned: cdktf.booleanToTerraform(struct!.ignorePartitioned),
    ignore_path: cdktf.booleanToTerraform(struct!.ignorePath),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    ignore_value: cdktf.booleanToTerraform(struct!.ignoreValue),
    max_age_value: cdktf.numberToTerraform(struct!.maxAgeValue),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_domain: {
      value: cdktf.stringToHclTerraform(struct!.addDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_expiry: {
      value: cdktf.stringToHclTerraform(struct!.addExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.addPartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_path: {
      value: cdktf.stringToHclTerraform(struct!.addPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_domain: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_path: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_value: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_value: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeValue),
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.addDomain = this._addDomain;
    }
    if (this._addExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.addExpiry = this._addExpiry;
    }
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addPartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPartitioned = this._addPartitioned;
    }
    if (this._addPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDomain = this._ignoreDomain;
    }
    if (this._ignoreExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExpiry = this._ignoreExpiry;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaxAge = this._ignoreMaxAge;
    }
    if (this._ignorePartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePartitioned = this._ignorePartitioned;
    }
    if (this._ignorePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePath = this._ignorePath;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._ignoreValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreValue = this._ignoreValue;
    }
    if (this._maxAgeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeValue = this._maxAgeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addDomain = undefined;
      this._addExpiry = undefined;
      this._addHttponly = undefined;
      this._addPartitioned = undefined;
      this._addPath = undefined;
      this._addSecure = undefined;
      this._ignoreDomain = undefined;
      this._ignoreExpiry = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreMaxAge = undefined;
      this._ignorePartitioned = undefined;
      this._ignorePath = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._ignoreValue = undefined;
      this._maxAgeValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addDomain = value.addDomain;
      this._addExpiry = value.addExpiry;
      this._addHttponly = value.addHttponly;
      this._addPartitioned = value.addPartitioned;
      this._addPath = value.addPath;
      this._addSecure = value.addSecure;
      this._ignoreDomain = value.ignoreDomain;
      this._ignoreExpiry = value.ignoreExpiry;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreMaxAge = value.ignoreMaxAge;
      this._ignorePartitioned = value.ignorePartitioned;
      this._ignorePath = value.ignorePath;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._ignoreValue = value.ignoreValue;
      this._maxAgeValue = value.maxAgeValue;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // add_domain - computed: false, optional: true, required: false
  private _addDomain?: string; 
  public get addDomain() {
    return this.getStringAttribute('add_domain');
  }
  public set addDomain(value: string) {
    this._addDomain = value;
  }
  public resetAddDomain() {
    this._addDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDomainInput() {
    return this._addDomain;
  }

  // add_expiry - computed: false, optional: true, required: false
  private _addExpiry?: string; 
  public get addExpiry() {
    return this.getStringAttribute('add_expiry');
  }
  public set addExpiry(value: string) {
    this._addExpiry = value;
  }
  public resetAddExpiry() {
    this._addExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addExpiryInput() {
    return this._addExpiry;
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_partitioned - computed: false, optional: true, required: false
  private _addPartitioned?: boolean | cdktf.IResolvable; 
  public get addPartitioned() {
    return this.getBooleanAttribute('add_partitioned');
  }
  public set addPartitioned(value: boolean | cdktf.IResolvable) {
    this._addPartitioned = value;
  }
  public resetAddPartitioned() {
    this._addPartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPartitionedInput() {
    return this._addPartitioned;
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath?: string; 
  public get addPath() {
    return this.getStringAttribute('add_path');
  }
  public set addPath(value: string) {
    this._addPath = value;
  }
  public resetAddPath() {
    this._addPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_domain - computed: false, optional: true, required: false
  private _ignoreDomain?: boolean | cdktf.IResolvable; 
  public get ignoreDomain() {
    return this.getBooleanAttribute('ignore_domain');
  }
  public set ignoreDomain(value: boolean | cdktf.IResolvable) {
    this._ignoreDomain = value;
  }
  public resetIgnoreDomain() {
    this._ignoreDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDomainInput() {
    return this._ignoreDomain;
  }

  // ignore_expiry - computed: false, optional: true, required: false
  private _ignoreExpiry?: boolean | cdktf.IResolvable; 
  public get ignoreExpiry() {
    return this.getBooleanAttribute('ignore_expiry');
  }
  public set ignoreExpiry(value: boolean | cdktf.IResolvable) {
    this._ignoreExpiry = value;
  }
  public resetIgnoreExpiry() {
    this._ignoreExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExpiryInput() {
    return this._ignoreExpiry;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_max_age - computed: false, optional: true, required: false
  private _ignoreMaxAge?: boolean | cdktf.IResolvable; 
  public get ignoreMaxAge() {
    return this.getBooleanAttribute('ignore_max_age');
  }
  public set ignoreMaxAge(value: boolean | cdktf.IResolvable) {
    this._ignoreMaxAge = value;
  }
  public resetIgnoreMaxAge() {
    this._ignoreMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaxAgeInput() {
    return this._ignoreMaxAge;
  }

  // ignore_partitioned - computed: false, optional: true, required: false
  private _ignorePartitioned?: boolean | cdktf.IResolvable; 
  public get ignorePartitioned() {
    return this.getBooleanAttribute('ignore_partitioned');
  }
  public set ignorePartitioned(value: boolean | cdktf.IResolvable) {
    this._ignorePartitioned = value;
  }
  public resetIgnorePartitioned() {
    this._ignorePartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePartitionedInput() {
    return this._ignorePartitioned;
  }

  // ignore_path - computed: false, optional: true, required: false
  private _ignorePath?: boolean | cdktf.IResolvable; 
  public get ignorePath() {
    return this.getBooleanAttribute('ignore_path');
  }
  public set ignorePath(value: boolean | cdktf.IResolvable) {
    this._ignorePath = value;
  }
  public resetIgnorePath() {
    this._ignorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePathInput() {
    return this._ignorePath;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
  }

  // ignore_value - computed: false, optional: true, required: false
  private _ignoreValue?: boolean | cdktf.IResolvable; 
  public get ignoreValue() {
    return this.getBooleanAttribute('ignore_value');
  }
  public set ignoreValue(value: boolean | cdktf.IResolvable) {
    this._ignoreValue = value;
  }
  public resetIgnoreValue() {
    this._ignoreValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreValueInput() {
    return this._ignoreValue;
  }

  // max_age_value - computed: false, optional: true, required: false
  private _maxAgeValue?: number; 
  public get maxAgeValue() {
    return this.getNumberAttribute('max_age_value');
  }
  public set maxAgeValue(value: number) {
    this._maxAgeValue = value;
  }
  public resetMaxAgeValue() {
    this._maxAgeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeValueInput() {
    return this._maxAgeValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#decryption_provider HttpLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#store_provider HttpLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#url HttpLoadbalancer#url}
  */
  readonly url: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#key HttpLoadbalancer#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#location HttpLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#provider HttpLoadbalancer#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding HttpLoadbalancer#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#version HttpLoadbalancer#version}
  */
  readonly version?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_encoding_type HttpLoadbalancer#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info HttpLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#blindfold_secret_info_internal HttpLoadbalancer#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#clear_secret_info HttpLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#vault_secret_info HttpLoadbalancer#vault_secret_info}
  */
  readonly vaultSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#wingman_secret_info HttpLoadbalancer#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue): any {
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
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue | undefined) {
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
  private _blindfoldSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueClearSecretInfo) {
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
  private _vaultSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueVaultSecretInfo) {
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
  private _wingmanSecretInfo = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueWingmanSecretInfo) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#append HttpLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#value HttpLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#secret_value HttpLoadbalancer#secret_value}
  */
  readonly secretValue?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#base_interval HttpLoadbalancer#base_interval}
  */
  readonly baseInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#max_interval HttpLoadbalancer#max_interval}
  */
  readonly maxInterval?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.numberToTerraform(struct!.baseInterval),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.numberToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: number; 
  public get baseInterval() {
    return this.getNumberAttribute('base_interval');
  }
  public set baseInterval(value: number) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#num_retries HttpLoadbalancer#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#per_try_timeout HttpLoadbalancer#per_try_timeout}
  */
  readonly perTryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retriable_status_codes HttpLoadbalancer#retriable_status_codes}
  */
  readonly retriableStatusCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retry_condition HttpLoadbalancer#retry_condition}
  */
  readonly retryCondition: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retry_on HttpLoadbalancer#retry_on}
  */
  readonly retryOn?: string;
  /**
  * back_off block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#back_off HttpLoadbalancer#back_off}
  */
  readonly backOff?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.numberToTerraform(struct!.perTryTimeout),
    retriable_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.retriableStatusCodes),
    retry_condition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryCondition),
    retry_on: cdktf.stringToTerraform(struct!.retryOn),
    back_off: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffToTerraform(struct!.backOff),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.numberToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retriable_status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.retriableStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    retry_condition: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryCondition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_on: {
      value: cdktf.stringToHclTerraform(struct!.retryOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_off: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffToHclTerraform(struct!.backOff),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retriableStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableStatusCodes = this._retriableStatusCodes;
    }
    if (this._retryCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCondition = this._retryCondition;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    if (this._backOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backOff = this._backOff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._retriableStatusCodes = undefined;
      this._retryCondition = undefined;
      this._retryOn = undefined;
      this._backOff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._retriableStatusCodes = value.retriableStatusCodes;
      this._retryCondition = value.retryCondition;
      this._retryOn = value.retryOn;
      this._backOff.internalValue = value.backOff;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: number; 
  public get perTryTimeout() {
    return this.getNumberAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: number) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retriable_status_codes - computed: false, optional: true, required: false
  private _retriableStatusCodes?: number[]; 
  public get retriableStatusCodes() {
    return this.getNumberListAttribute('retriable_status_codes');
  }
  public set retriableStatusCodes(value: number[]) {
    this._retriableStatusCodes = value;
  }
  public resetRetriableStatusCodes() {
    this._retriableStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableStatusCodesInput() {
    return this._retriableStatusCodes;
  }

  // retry_condition - computed: false, optional: false, required: true
  private _retryCondition?: string[]; 
  public get retryCondition() {
    return this.getListAttribute('retry_condition');
  }
  public set retryCondition(value: string[]) {
    this._retryCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionInput() {
    return this._retryCondition;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string; 
  public get retryOn() {
    return this.getStringAttribute('retry_on');
  }
  public set retryOn(value: string) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }

  // back_off - computed: false, optional: true, required: false
  private _backOff = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOffOutputReference(this, "back_off");
  public get backOff() {
    return this._backOff;
  }
  public putBackOff(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyBackOff) {
    this._backOff.internalValue = value;
  }
  public resetBackOff() {
    this._backOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backOffInput() {
    return this._backOff.internalValue;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_httponly HttpLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#add_secure HttpLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_httponly HttpLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_samesite HttpLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ignore_secure HttpLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_lax HttpLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_none HttpLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#samesite_strict HttpLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#ttl HttpLoadbalancer#ttl}
  */
  readonly ttl?: number;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._name = undefined;
      this._path = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._name = value.name;
      this._path = value.path;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._ttl = value.ttl;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
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

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#header_name HttpLoadbalancer#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#source_ip HttpLoadbalancer#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#terminal HttpLoadbalancer#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cookie HttpLoadbalancer#cookie}
  */
  readonly cookie?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    cookie: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieToTerraform(struct!.cookie),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._sourceIp = undefined;
      this._terminal = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._sourceIp = value.sourceIp;
      this._terminal = value.terminal;
      this._cookie.internalValue = value.cookie;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy {
  /**
  * hash_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#hash_policy HttpLoadbalancer#hash_policy}
  */
  readonly hashPolicy: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy[] | cdktf.IResolvable;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_policy: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyToTerraform, true)(struct!.hashPolicy),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_policy: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyToHclTerraform, true)(struct!.hashPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashPolicy = this._hashPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashPolicy.internalValue = value.hashPolicy;
    }
  }

  // hash_policy - computed: false, optional: false, required: true
  private _hashPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicyList(this, "hash_policy", false);
  public get hashPolicy() {
    return this._hashPolicy;
  }
  public putHashPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyHashPolicy[] | cdktf.IResolvable) {
    this._hashPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyInput() {
    return this._hashPolicy.internalValue;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy): any {
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


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy): any {
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

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#use_websocket HttpLoadbalancer#use_websocket}
  */
  readonly useWebsocket?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_websocket: cdktf.booleanToTerraform(struct!.useWebsocket),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_websocket: {
      value: cdktf.booleanToHclTerraform(struct!.useWebsocket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useWebsocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWebsocket = this._useWebsocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useWebsocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useWebsocket = value.useWebsocket;
    }
  }

  // use_websocket - computed: false, optional: true, required: false
  private _useWebsocket?: boolean | cdktf.IResolvable; 
  public get useWebsocket() {
    return this.getBooleanAttribute('use_websocket');
  }
  public set useWebsocket(value: boolean | cdktf.IResolvable) {
    this._useWebsocket = value;
  }
  public resetUseWebsocket() {
    this._useWebsocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWebsocketInput() {
    return this._useWebsocket;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#common_buffering HttpLoadbalancer#common_buffering}
  */
  readonly commonBuffering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#common_hash_policy HttpLoadbalancer#common_hash_policy}
  */
  readonly commonHashPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#default_retry_policy HttpLoadbalancer#default_retry_policy}
  */
  readonly defaultRetryPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_location_add HttpLoadbalancer#disable_location_add}
  */
  readonly disableLocationAdd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_mirroring HttpLoadbalancer#disable_mirroring}
  */
  readonly disableMirroring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_prefix_rewrite HttpLoadbalancer#disable_prefix_rewrite}
  */
  readonly disablePrefixRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_spdy HttpLoadbalancer#disable_spdy}
  */
  readonly disableSpdy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_waf HttpLoadbalancer#disable_waf}
  */
  readonly disableWaf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_web_socket_config HttpLoadbalancer#disable_web_socket_config}
  */
  readonly disableWebSocketConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#do_not_retract_cluster HttpLoadbalancer#do_not_retract_cluster}
  */
  readonly doNotRetractCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#enable_spdy HttpLoadbalancer#enable_spdy}
  */
  readonly enableSpdy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#endpoint_subsets HttpLoadbalancer#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#inherited_bot_defense_javascript_injection HttpLoadbalancer#inherited_bot_defense_javascript_injection}
  */
  readonly inheritedBotDefenseJavascriptInjection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#inherited_waf HttpLoadbalancer#inherited_waf}
  */
  readonly inheritedWaf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#inherited_waf_exclusion HttpLoadbalancer#inherited_waf_exclusion}
  */
  readonly inheritedWafExclusion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_retry_policy HttpLoadbalancer#no_retry_policy}
  */
  readonly noRetryPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix_rewrite HttpLoadbalancer#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#priority HttpLoadbalancer#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_cookies_to_remove HttpLoadbalancer#request_cookies_to_remove}
  */
  readonly requestCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_headers_to_remove HttpLoadbalancer#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_cookies_to_remove HttpLoadbalancer#response_cookies_to_remove}
  */
  readonly responseCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_headers_to_remove HttpLoadbalancer#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retract_cluster HttpLoadbalancer#retract_cluster}
  */
  readonly retractCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#timeout HttpLoadbalancer#timeout}
  */
  readonly timeout?: number;
  /**
  * app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#app_firewall HttpLoadbalancer#app_firewall}
  */
  readonly appFirewall?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall;
  /**
  * bot_defense_javascript_injection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#bot_defense_javascript_injection HttpLoadbalancer#bot_defense_javascript_injection}
  */
  readonly botDefenseJavascriptInjection?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection;
  /**
  * buffer_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#buffer_policy HttpLoadbalancer#buffer_policy}
  */
  readonly bufferPolicy?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cors_policy HttpLoadbalancer#cors_policy}
  */
  readonly corsPolicy?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy;
  /**
  * csrf_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#csrf_policy HttpLoadbalancer#csrf_policy}
  */
  readonly csrfPolicy?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy;
  /**
  * mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#mirror_policy HttpLoadbalancer#mirror_policy}
  */
  readonly mirrorPolicy?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy;
  /**
  * regex_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex_rewrite HttpLoadbalancer#regex_rewrite}
  */
  readonly regexRewrite?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite;
  /**
  * request_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_cookies_to_add HttpLoadbalancer#request_cookies_to_add}
  */
  readonly requestCookiesToAdd?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd[] | cdktf.IResolvable;
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#request_headers_to_add HttpLoadbalancer#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_cookies_to_add HttpLoadbalancer#response_cookies_to_add}
  */
  readonly responseCookiesToAdd?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#response_headers_to_add HttpLoadbalancer#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd[] | cdktf.IResolvable;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retry_policy HttpLoadbalancer#retry_policy}
  */
  readonly retryPolicy?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy;
  /**
  * specific_hash_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#specific_hash_policy HttpLoadbalancer#specific_hash_policy}
  */
  readonly specificHashPolicy?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy;
  /**
  * waf_exclusion_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#waf_exclusion_policy HttpLoadbalancer#waf_exclusion_policy}
  */
  readonly wafExclusionPolicy: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy;
  /**
  * web_socket_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#web_socket_config HttpLoadbalancer#web_socket_config}
  */
  readonly webSocketConfig?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig;
}

export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_buffering: cdktf.booleanToTerraform(struct!.commonBuffering),
    common_hash_policy: cdktf.booleanToTerraform(struct!.commonHashPolicy),
    default_retry_policy: cdktf.booleanToTerraform(struct!.defaultRetryPolicy),
    disable_location_add: cdktf.booleanToTerraform(struct!.disableLocationAdd),
    disable_mirroring: cdktf.booleanToTerraform(struct!.disableMirroring),
    disable_prefix_rewrite: cdktf.booleanToTerraform(struct!.disablePrefixRewrite),
    disable_spdy: cdktf.booleanToTerraform(struct!.disableSpdy),
    disable_waf: cdktf.booleanToTerraform(struct!.disableWaf),
    disable_web_socket_config: cdktf.booleanToTerraform(struct!.disableWebSocketConfig),
    do_not_retract_cluster: cdktf.booleanToTerraform(struct!.doNotRetractCluster),
    enable_spdy: cdktf.booleanToTerraform(struct!.enableSpdy),
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    inherited_bot_defense_javascript_injection: cdktf.booleanToTerraform(struct!.inheritedBotDefenseJavascriptInjection),
    inherited_waf: cdktf.booleanToTerraform(struct!.inheritedWaf),
    inherited_waf_exclusion: cdktf.booleanToTerraform(struct!.inheritedWafExclusion),
    no_retry_policy: cdktf.booleanToTerraform(struct!.noRetryPolicy),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    priority: cdktf.stringToTerraform(struct!.priority),
    request_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestCookiesToRemove),
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseCookiesToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    retract_cluster: cdktf.booleanToTerraform(struct!.retractCluster),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    app_firewall: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallToTerraform(struct!.appFirewall),
    bot_defense_javascript_injection: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionToTerraform(struct!.botDefenseJavascriptInjection),
    buffer_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyToTerraform(struct!.bufferPolicy),
    cors_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyToTerraform(struct!.corsPolicy),
    csrf_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyToTerraform(struct!.csrfPolicy),
    mirror_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyToTerraform(struct!.mirrorPolicy),
    regex_rewrite: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteToTerraform(struct!.regexRewrite),
    request_cookies_to_add: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddToTerraform, true)(struct!.requestCookiesToAdd),
    request_headers_to_add: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_cookies_to_add: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddToTerraform, true)(struct!.responseCookiesToAdd),
    response_headers_to_add: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
    retry_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyToTerraform(struct!.retryPolicy),
    specific_hash_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyToTerraform(struct!.specificHashPolicy),
    waf_exclusion_policy: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyToTerraform(struct!.wafExclusionPolicy),
    web_socket_config: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigToTerraform(struct!.webSocketConfig),
  }
}


export function httpLoadbalancerRoutesSimpleRouteAdvancedOptionsToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsOutputReference | HttpLoadbalancerRoutesSimpleRouteAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_buffering: {
      value: cdktf.booleanToHclTerraform(struct!.commonBuffering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_hash_policy: {
      value: cdktf.booleanToHclTerraform(struct!.commonHashPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_retry_policy: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRetryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_location_add: {
      value: cdktf.booleanToHclTerraform(struct!.disableLocationAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_mirroring: {
      value: cdktf.booleanToHclTerraform(struct!.disableMirroring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_prefix_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.disablePrefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_spdy: {
      value: cdktf.booleanToHclTerraform(struct!.disableSpdy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_waf: {
      value: cdktf.booleanToHclTerraform(struct!.disableWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_web_socket_config: {
      value: cdktf.booleanToHclTerraform(struct!.disableWebSocketConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_retract_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.doNotRetractCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_spdy: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpdy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    inherited_bot_defense_javascript_injection: {
      value: cdktf.booleanToHclTerraform(struct!.inheritedBotDefenseJavascriptInjection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited_waf: {
      value: cdktf.booleanToHclTerraform(struct!.inheritedWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited_waf_exclusion: {
      value: cdktf.booleanToHclTerraform(struct!.inheritedWafExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_retry_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noRetryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_cookies_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestCookiesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_cookies_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseCookiesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retract_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.retractCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_firewall: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallToHclTerraform(struct!.appFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallList",
    },
    bot_defense_javascript_injection: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionToHclTerraform(struct!.botDefenseJavascriptInjection),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionList",
    },
    buffer_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyToHclTerraform(struct!.bufferPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyList",
    },
    cors_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyList",
    },
    csrf_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyToHclTerraform(struct!.csrfPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyList",
    },
    mirror_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyToHclTerraform(struct!.mirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyList",
    },
    regex_rewrite: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteToHclTerraform(struct!.regexRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteList",
    },
    request_cookies_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddToHclTerraform, true)(struct!.requestCookiesToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddList",
    },
    response_cookies_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddToHclTerraform, true)(struct!.responseCookiesToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddList",
    },
    retry_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyList",
    },
    specific_hash_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyToHclTerraform(struct!.specificHashPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyList",
    },
    waf_exclusion_policy: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyToHclTerraform(struct!.wafExclusionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyList",
    },
    web_socket_config: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigToHclTerraform(struct!.webSocketConfig),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonBuffering !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonBuffering = this._commonBuffering;
    }
    if (this._commonHashPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonHashPolicy = this._commonHashPolicy;
    }
    if (this._defaultRetryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetryPolicy = this._defaultRetryPolicy;
    }
    if (this._disableLocationAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocationAdd = this._disableLocationAdd;
    }
    if (this._disableMirroring !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMirroring = this._disableMirroring;
    }
    if (this._disablePrefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePrefixRewrite = this._disablePrefixRewrite;
    }
    if (this._disableSpdy !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSpdy = this._disableSpdy;
    }
    if (this._disableWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaf = this._disableWaf;
    }
    if (this._disableWebSocketConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWebSocketConfig = this._disableWebSocketConfig;
    }
    if (this._doNotRetractCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotRetractCluster = this._doNotRetractCluster;
    }
    if (this._enableSpdy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpdy = this._enableSpdy;
    }
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._inheritedBotDefenseJavascriptInjection !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedBotDefenseJavascriptInjection = this._inheritedBotDefenseJavascriptInjection;
    }
    if (this._inheritedWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedWaf = this._inheritedWaf;
    }
    if (this._inheritedWafExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedWafExclusion = this._inheritedWafExclusion;
    }
    if (this._noRetryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRetryPolicy = this._noRetryPolicy;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._requestCookiesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookiesToRemove = this._requestCookiesToRemove;
    }
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseCookiesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCookiesToRemove = this._responseCookiesToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._retractCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.retractCluster = this._retractCluster;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._appFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewall = this._appFirewall?.internalValue;
    }
    if (this._botDefenseJavascriptInjection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDefenseJavascriptInjection = this._botDefenseJavascriptInjection?.internalValue;
    }
    if (this._bufferPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPolicy = this._bufferPolicy?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._csrfPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrfPolicy = this._csrfPolicy?.internalValue;
    }
    if (this._mirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorPolicy = this._mirrorPolicy?.internalValue;
    }
    if (this._regexRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRewrite = this._regexRewrite?.internalValue;
    }
    if (this._requestCookiesToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookiesToAdd = this._requestCookiesToAdd?.internalValue;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseCookiesToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCookiesToAdd = this._responseCookiesToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._specificHashPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificHashPolicy = this._specificHashPolicy?.internalValue;
    }
    if (this._wafExclusionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafExclusionPolicy = this._wafExclusionPolicy?.internalValue;
    }
    if (this._webSocketConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSocketConfig = this._webSocketConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonBuffering = undefined;
      this._commonHashPolicy = undefined;
      this._defaultRetryPolicy = undefined;
      this._disableLocationAdd = undefined;
      this._disableMirroring = undefined;
      this._disablePrefixRewrite = undefined;
      this._disableSpdy = undefined;
      this._disableWaf = undefined;
      this._disableWebSocketConfig = undefined;
      this._doNotRetractCluster = undefined;
      this._enableSpdy = undefined;
      this._endpointSubsets = undefined;
      this._inheritedBotDefenseJavascriptInjection = undefined;
      this._inheritedWaf = undefined;
      this._inheritedWafExclusion = undefined;
      this._noRetryPolicy = undefined;
      this._prefixRewrite = undefined;
      this._priority = undefined;
      this._requestCookiesToRemove = undefined;
      this._requestHeadersToRemove = undefined;
      this._responseCookiesToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._retractCluster = undefined;
      this._timeout = undefined;
      this._appFirewall.internalValue = undefined;
      this._botDefenseJavascriptInjection.internalValue = undefined;
      this._bufferPolicy.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._csrfPolicy.internalValue = undefined;
      this._mirrorPolicy.internalValue = undefined;
      this._regexRewrite.internalValue = undefined;
      this._requestCookiesToAdd.internalValue = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseCookiesToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._specificHashPolicy.internalValue = undefined;
      this._wafExclusionPolicy.internalValue = undefined;
      this._webSocketConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonBuffering = value.commonBuffering;
      this._commonHashPolicy = value.commonHashPolicy;
      this._defaultRetryPolicy = value.defaultRetryPolicy;
      this._disableLocationAdd = value.disableLocationAdd;
      this._disableMirroring = value.disableMirroring;
      this._disablePrefixRewrite = value.disablePrefixRewrite;
      this._disableSpdy = value.disableSpdy;
      this._disableWaf = value.disableWaf;
      this._disableWebSocketConfig = value.disableWebSocketConfig;
      this._doNotRetractCluster = value.doNotRetractCluster;
      this._enableSpdy = value.enableSpdy;
      this._endpointSubsets = value.endpointSubsets;
      this._inheritedBotDefenseJavascriptInjection = value.inheritedBotDefenseJavascriptInjection;
      this._inheritedWaf = value.inheritedWaf;
      this._inheritedWafExclusion = value.inheritedWafExclusion;
      this._noRetryPolicy = value.noRetryPolicy;
      this._prefixRewrite = value.prefixRewrite;
      this._priority = value.priority;
      this._requestCookiesToRemove = value.requestCookiesToRemove;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseCookiesToRemove = value.responseCookiesToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._retractCluster = value.retractCluster;
      this._timeout = value.timeout;
      this._appFirewall.internalValue = value.appFirewall;
      this._botDefenseJavascriptInjection.internalValue = value.botDefenseJavascriptInjection;
      this._bufferPolicy.internalValue = value.bufferPolicy;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._csrfPolicy.internalValue = value.csrfPolicy;
      this._mirrorPolicy.internalValue = value.mirrorPolicy;
      this._regexRewrite.internalValue = value.regexRewrite;
      this._requestCookiesToAdd.internalValue = value.requestCookiesToAdd;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseCookiesToAdd.internalValue = value.responseCookiesToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._specificHashPolicy.internalValue = value.specificHashPolicy;
      this._wafExclusionPolicy.internalValue = value.wafExclusionPolicy;
      this._webSocketConfig.internalValue = value.webSocketConfig;
    }
  }

  // common_buffering - computed: false, optional: true, required: false
  private _commonBuffering?: boolean | cdktf.IResolvable; 
  public get commonBuffering() {
    return this.getBooleanAttribute('common_buffering');
  }
  public set commonBuffering(value: boolean | cdktf.IResolvable) {
    this._commonBuffering = value;
  }
  public resetCommonBuffering() {
    this._commonBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonBufferingInput() {
    return this._commonBuffering;
  }

  // common_hash_policy - computed: false, optional: true, required: false
  private _commonHashPolicy?: boolean | cdktf.IResolvable; 
  public get commonHashPolicy() {
    return this.getBooleanAttribute('common_hash_policy');
  }
  public set commonHashPolicy(value: boolean | cdktf.IResolvable) {
    this._commonHashPolicy = value;
  }
  public resetCommonHashPolicy() {
    this._commonHashPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonHashPolicyInput() {
    return this._commonHashPolicy;
  }

  // default_retry_policy - computed: false, optional: true, required: false
  private _defaultRetryPolicy?: boolean | cdktf.IResolvable; 
  public get defaultRetryPolicy() {
    return this.getBooleanAttribute('default_retry_policy');
  }
  public set defaultRetryPolicy(value: boolean | cdktf.IResolvable) {
    this._defaultRetryPolicy = value;
  }
  public resetDefaultRetryPolicy() {
    this._defaultRetryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetryPolicyInput() {
    return this._defaultRetryPolicy;
  }

  // disable_location_add - computed: false, optional: true, required: false
  private _disableLocationAdd?: boolean | cdktf.IResolvable; 
  public get disableLocationAdd() {
    return this.getBooleanAttribute('disable_location_add');
  }
  public set disableLocationAdd(value: boolean | cdktf.IResolvable) {
    this._disableLocationAdd = value;
  }
  public resetDisableLocationAdd() {
    this._disableLocationAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocationAddInput() {
    return this._disableLocationAdd;
  }

  // disable_mirroring - computed: false, optional: true, required: false
  private _disableMirroring?: boolean | cdktf.IResolvable; 
  public get disableMirroring() {
    return this.getBooleanAttribute('disable_mirroring');
  }
  public set disableMirroring(value: boolean | cdktf.IResolvable) {
    this._disableMirroring = value;
  }
  public resetDisableMirroring() {
    this._disableMirroring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMirroringInput() {
    return this._disableMirroring;
  }

  // disable_prefix_rewrite - computed: false, optional: true, required: false
  private _disablePrefixRewrite?: boolean | cdktf.IResolvable; 
  public get disablePrefixRewrite() {
    return this.getBooleanAttribute('disable_prefix_rewrite');
  }
  public set disablePrefixRewrite(value: boolean | cdktf.IResolvable) {
    this._disablePrefixRewrite = value;
  }
  public resetDisablePrefixRewrite() {
    this._disablePrefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePrefixRewriteInput() {
    return this._disablePrefixRewrite;
  }

  // disable_spdy - computed: false, optional: true, required: false
  private _disableSpdy?: boolean | cdktf.IResolvable; 
  public get disableSpdy() {
    return this.getBooleanAttribute('disable_spdy');
  }
  public set disableSpdy(value: boolean | cdktf.IResolvable) {
    this._disableSpdy = value;
  }
  public resetDisableSpdy() {
    this._disableSpdy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSpdyInput() {
    return this._disableSpdy;
  }

  // disable_waf - computed: false, optional: true, required: false
  private _disableWaf?: boolean | cdktf.IResolvable; 
  public get disableWaf() {
    return this.getBooleanAttribute('disable_waf');
  }
  public set disableWaf(value: boolean | cdktf.IResolvable) {
    this._disableWaf = value;
  }
  public resetDisableWaf() {
    this._disableWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWafInput() {
    return this._disableWaf;
  }

  // disable_web_socket_config - computed: false, optional: true, required: false
  private _disableWebSocketConfig?: boolean | cdktf.IResolvable; 
  public get disableWebSocketConfig() {
    return this.getBooleanAttribute('disable_web_socket_config');
  }
  public set disableWebSocketConfig(value: boolean | cdktf.IResolvable) {
    this._disableWebSocketConfig = value;
  }
  public resetDisableWebSocketConfig() {
    this._disableWebSocketConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWebSocketConfigInput() {
    return this._disableWebSocketConfig;
  }

  // do_not_retract_cluster - computed: false, optional: true, required: false
  private _doNotRetractCluster?: boolean | cdktf.IResolvable; 
  public get doNotRetractCluster() {
    return this.getBooleanAttribute('do_not_retract_cluster');
  }
  public set doNotRetractCluster(value: boolean | cdktf.IResolvable) {
    this._doNotRetractCluster = value;
  }
  public resetDoNotRetractCluster() {
    this._doNotRetractCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRetractClusterInput() {
    return this._doNotRetractCluster;
  }

  // enable_spdy - computed: false, optional: true, required: false
  private _enableSpdy?: boolean | cdktf.IResolvable; 
  public get enableSpdy() {
    return this.getBooleanAttribute('enable_spdy');
  }
  public set enableSpdy(value: boolean | cdktf.IResolvable) {
    this._enableSpdy = value;
  }
  public resetEnableSpdy() {
    this._enableSpdy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpdyInput() {
    return this._enableSpdy;
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
  }

  // inherited_bot_defense_javascript_injection - computed: false, optional: true, required: false
  private _inheritedBotDefenseJavascriptInjection?: boolean | cdktf.IResolvable; 
  public get inheritedBotDefenseJavascriptInjection() {
    return this.getBooleanAttribute('inherited_bot_defense_javascript_injection');
  }
  public set inheritedBotDefenseJavascriptInjection(value: boolean | cdktf.IResolvable) {
    this._inheritedBotDefenseJavascriptInjection = value;
  }
  public resetInheritedBotDefenseJavascriptInjection() {
    this._inheritedBotDefenseJavascriptInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedBotDefenseJavascriptInjectionInput() {
    return this._inheritedBotDefenseJavascriptInjection;
  }

  // inherited_waf - computed: false, optional: true, required: false
  private _inheritedWaf?: boolean | cdktf.IResolvable; 
  public get inheritedWaf() {
    return this.getBooleanAttribute('inherited_waf');
  }
  public set inheritedWaf(value: boolean | cdktf.IResolvable) {
    this._inheritedWaf = value;
  }
  public resetInheritedWaf() {
    this._inheritedWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedWafInput() {
    return this._inheritedWaf;
  }

  // inherited_waf_exclusion - computed: false, optional: true, required: false
  private _inheritedWafExclusion?: boolean | cdktf.IResolvable; 
  public get inheritedWafExclusion() {
    return this.getBooleanAttribute('inherited_waf_exclusion');
  }
  public set inheritedWafExclusion(value: boolean | cdktf.IResolvable) {
    this._inheritedWafExclusion = value;
  }
  public resetInheritedWafExclusion() {
    this._inheritedWafExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedWafExclusionInput() {
    return this._inheritedWafExclusion;
  }

  // no_retry_policy - computed: false, optional: true, required: false
  private _noRetryPolicy?: boolean | cdktf.IResolvable; 
  public get noRetryPolicy() {
    return this.getBooleanAttribute('no_retry_policy');
  }
  public set noRetryPolicy(value: boolean | cdktf.IResolvable) {
    this._noRetryPolicy = value;
  }
  public resetNoRetryPolicy() {
    this._noRetryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRetryPolicyInput() {
    return this._noRetryPolicy;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // request_cookies_to_remove - computed: false, optional: true, required: false
  private _requestCookiesToRemove?: string[]; 
  public get requestCookiesToRemove() {
    return this.getListAttribute('request_cookies_to_remove');
  }
  public set requestCookiesToRemove(value: string[]) {
    this._requestCookiesToRemove = value;
  }
  public resetRequestCookiesToRemove() {
    this._requestCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToRemoveInput() {
    return this._requestCookiesToRemove;
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_cookies_to_remove - computed: false, optional: true, required: false
  private _responseCookiesToRemove?: string[]; 
  public get responseCookiesToRemove() {
    return this.getListAttribute('response_cookies_to_remove');
  }
  public set responseCookiesToRemove(value: string[]) {
    this._responseCookiesToRemove = value;
  }
  public resetResponseCookiesToRemove() {
    this._responseCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToRemoveInput() {
    return this._responseCookiesToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // retract_cluster - computed: false, optional: true, required: false
  private _retractCluster?: boolean | cdktf.IResolvable; 
  public get retractCluster() {
    return this.getBooleanAttribute('retract_cluster');
  }
  public set retractCluster(value: boolean | cdktf.IResolvable) {
    this._retractCluster = value;
  }
  public resetRetractCluster() {
    this._retractCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retractClusterInput() {
    return this._retractCluster;
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

  // app_firewall - computed: false, optional: true, required: false
  private _appFirewall = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewallOutputReference(this, "app_firewall");
  public get appFirewall() {
    return this._appFirewall;
  }
  public putAppFirewall(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsAppFirewall) {
    this._appFirewall.internalValue = value;
  }
  public resetAppFirewall() {
    this._appFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallInput() {
    return this._appFirewall.internalValue;
  }

  // bot_defense_javascript_injection - computed: false, optional: true, required: false
  private _botDefenseJavascriptInjection = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjectionOutputReference(this, "bot_defense_javascript_injection");
  public get botDefenseJavascriptInjection() {
    return this._botDefenseJavascriptInjection;
  }
  public putBotDefenseJavascriptInjection(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBotDefenseJavascriptInjection) {
    this._botDefenseJavascriptInjection.internalValue = value;
  }
  public resetBotDefenseJavascriptInjection() {
    this._botDefenseJavascriptInjection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDefenseJavascriptInjectionInput() {
    return this._botDefenseJavascriptInjection.internalValue;
  }

  // buffer_policy - computed: false, optional: true, required: false
  private _bufferPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicyOutputReference(this, "buffer_policy");
  public get bufferPolicy() {
    return this._bufferPolicy;
  }
  public putBufferPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsBufferPolicy) {
    this._bufferPolicy.internalValue = value;
  }
  public resetBufferPolicy() {
    this._bufferPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPolicyInput() {
    return this._bufferPolicy.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // csrf_policy - computed: false, optional: true, required: false
  private _csrfPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicyOutputReference(this, "csrf_policy");
  public get csrfPolicy() {
    return this._csrfPolicy;
  }
  public putCsrfPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsCsrfPolicy) {
    this._csrfPolicy.internalValue = value;
  }
  public resetCsrfPolicy() {
    this._csrfPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfPolicyInput() {
    return this._csrfPolicy.internalValue;
  }

  // mirror_policy - computed: false, optional: true, required: false
  private _mirrorPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicyOutputReference(this, "mirror_policy");
  public get mirrorPolicy() {
    return this._mirrorPolicy;
  }
  public putMirrorPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsMirrorPolicy) {
    this._mirrorPolicy.internalValue = value;
  }
  public resetMirrorPolicy() {
    this._mirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPolicyInput() {
    return this._mirrorPolicy.internalValue;
  }

  // regex_rewrite - computed: false, optional: true, required: false
  private _regexRewrite = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewriteOutputReference(this, "regex_rewrite");
  public get regexRewrite() {
    return this._regexRewrite;
  }
  public putRegexRewrite(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRegexRewrite) {
    this._regexRewrite.internalValue = value;
  }
  public resetRegexRewrite() {
    this._regexRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRewriteInput() {
    return this._regexRewrite.internalValue;
  }

  // request_cookies_to_add - computed: false, optional: true, required: false
  private _requestCookiesToAdd = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAddList(this, "request_cookies_to_add", false);
  public get requestCookiesToAdd() {
    return this._requestCookiesToAdd;
  }
  public putRequestCookiesToAdd(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestCookiesToAdd[] | cdktf.IResolvable) {
    this._requestCookiesToAdd.internalValue = value;
  }
  public resetRequestCookiesToAdd() {
    this._requestCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToAddInput() {
    return this._requestCookiesToAdd.internalValue;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_cookies_to_add - computed: false, optional: true, required: false
  private _responseCookiesToAdd = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAddList(this, "response_cookies_to_add", false);
  public get responseCookiesToAdd() {
    return this._responseCookiesToAdd;
  }
  public putResponseCookiesToAdd(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseCookiesToAdd[] | cdktf.IResolvable) {
    this._responseCookiesToAdd.internalValue = value;
  }
  public resetResponseCookiesToAdd() {
    this._responseCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToAddInput() {
    return this._responseCookiesToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // specific_hash_policy - computed: false, optional: true, required: false
  private _specificHashPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicyOutputReference(this, "specific_hash_policy");
  public get specificHashPolicy() {
    return this._specificHashPolicy;
  }
  public putSpecificHashPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsSpecificHashPolicy) {
    this._specificHashPolicy.internalValue = value;
  }
  public resetSpecificHashPolicy() {
    this._specificHashPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificHashPolicyInput() {
    return this._specificHashPolicy.internalValue;
  }

  // waf_exclusion_policy - computed: false, optional: false, required: true
  private _wafExclusionPolicy = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicyOutputReference(this, "waf_exclusion_policy");
  public get wafExclusionPolicy() {
    return this._wafExclusionPolicy;
  }
  public putWafExclusionPolicy(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWafExclusionPolicy) {
    this._wafExclusionPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafExclusionPolicyInput() {
    return this._wafExclusionPolicy.internalValue;
  }

  // web_socket_config - computed: false, optional: true, required: false
  private _webSocketConfig = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfigOutputReference(this, "web_socket_config");
  public get webSocketConfig() {
    return this._webSocketConfig;
  }
  public putWebSocketConfig(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsWebSocketConfig) {
    this._webSocketConfig.internalValue = value;
  }
  public resetWebSocketConfig() {
    this._webSocketConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketConfigInput() {
    return this._webSocketConfig.internalValue;
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#exact HttpLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#invert_match HttpLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#presence HttpLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerRoutesSimpleRouteHeadersToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteHeaders | cdktf.IResolvable): any {
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


export function httpLoadbalancerRoutesSimpleRouteHeadersToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteHeaders | cdktf.IResolvable): any {
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

export class HttpLoadbalancerRoutesSimpleRouteHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteHeaders | cdktf.IResolvable | undefined) {
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

export class HttpLoadbalancerRoutesSimpleRouteHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteHeadersOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRouteIncomingPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#no_port_match HttpLoadbalancer#no_port_match}
  */
  readonly noPortMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port HttpLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#port_ranges HttpLoadbalancer#port_ranges}
  */
  readonly portRanges?: string;
}

export function httpLoadbalancerRoutesSimpleRouteIncomingPortToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteIncomingPortOutputReference | HttpLoadbalancerRoutesSimpleRouteIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_port_match: cdktf.booleanToTerraform(struct!.noPortMatch),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function httpLoadbalancerRoutesSimpleRouteIncomingPortToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteIncomingPortOutputReference | HttpLoadbalancerRoutesSimpleRouteIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_port_match: {
      value: cdktf.booleanToHclTerraform(struct!.noPortMatch),
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

export class HttpLoadbalancerRoutesSimpleRouteIncomingPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteIncomingPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPortMatch = this._noPortMatch;
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteIncomingPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noPortMatch = undefined;
      this._port = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noPortMatch = value.noPortMatch;
      this._port = value.port;
      this._portRanges = value.portRanges;
    }
  }

  // no_port_match - computed: false, optional: true, required: false
  private _noPortMatch?: boolean | cdktf.IResolvable; 
  public get noPortMatch() {
    return this.getBooleanAttribute('no_port_match');
  }
  public set noPortMatch(value: boolean | cdktf.IResolvable) {
    this._noPortMatch = value;
  }
  public resetNoPortMatch() {
    this._noPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPortMatchInput() {
    return this._noPortMatch;
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
export interface HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRoutesSimpleRouteOriginPoolsClusterToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOriginPoolsClusterOutputReference | HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster): any {
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


export function httpLoadbalancerRoutesSimpleRouteOriginPoolsClusterToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOriginPoolsClusterOutputReference | HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster): any {
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

export class HttpLoadbalancerRoutesSimpleRouteOriginPoolsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#name HttpLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#namespace HttpLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#tenant HttpLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function httpLoadbalancerRoutesSimpleRouteOriginPoolsPoolToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOriginPoolsPoolOutputReference | HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool): any {
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


export function httpLoadbalancerRoutesSimpleRouteOriginPoolsPoolToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOriginPoolsPoolOutputReference | HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool): any {
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

export class HttpLoadbalancerRoutesSimpleRouteOriginPoolsPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteOriginPools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#endpoint_subsets HttpLoadbalancer#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#priority HttpLoadbalancer#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#weight HttpLoadbalancer#weight}
  */
  readonly weight?: number;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#cluster HttpLoadbalancer#cluster}
  */
  readonly cluster?: HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#pool HttpLoadbalancer#pool}
  */
  readonly pool?: HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool;
}

export function httpLoadbalancerRoutesSimpleRouteOriginPoolsToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOriginPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
    cluster: httpLoadbalancerRoutesSimpleRouteOriginPoolsClusterToTerraform(struct!.cluster),
    pool: httpLoadbalancerRoutesSimpleRouteOriginPoolsPoolToTerraform(struct!.pool),
  }
}


export function httpLoadbalancerRoutesSimpleRouteOriginPoolsToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOriginPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster: {
      value: httpLoadbalancerRoutesSimpleRouteOriginPoolsClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteOriginPoolsClusterList",
    },
    pool: {
      value: httpLoadbalancerRoutesSimpleRouteOriginPoolsPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteOriginPoolsPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteOriginPoolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteOriginPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteOriginPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointSubsets = undefined;
      this._priority = undefined;
      this._weight = undefined;
      this._cluster.internalValue = undefined;
      this._pool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointSubsets = value.endpointSubsets;
      this._priority = value.priority;
      this._weight = value.weight;
      this._cluster.internalValue = value.cluster;
      this._pool.internalValue = value.pool;
    }
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
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

  // cluster - computed: false, optional: true, required: false
  private _cluster = new HttpLoadbalancerRoutesSimpleRouteOriginPoolsClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: HttpLoadbalancerRoutesSimpleRouteOriginPoolsCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new HttpLoadbalancerRoutesSimpleRouteOriginPoolsPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: HttpLoadbalancerRoutesSimpleRouteOriginPoolsPool) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }
}

export class HttpLoadbalancerRoutesSimpleRouteOriginPoolsList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutesSimpleRouteOriginPools[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesSimpleRouteOriginPoolsOutputReference {
    return new HttpLoadbalancerRoutesSimpleRouteOriginPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerRoutesSimpleRoutePath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#prefix HttpLoadbalancer#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#regex HttpLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function httpLoadbalancerRoutesSimpleRoutePathToTerraform(struct?: HttpLoadbalancerRoutesSimpleRoutePathOutputReference | HttpLoadbalancerRoutesSimpleRoutePath): any {
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


export function httpLoadbalancerRoutesSimpleRoutePathToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRoutePathOutputReference | HttpLoadbalancerRoutesSimpleRoutePath): any {
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

export class HttpLoadbalancerRoutesSimpleRoutePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRoutePath | undefined {
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

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRoutePath | undefined) {
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
export interface HttpLoadbalancerRoutesSimpleRouteQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#remove_all_params HttpLoadbalancer#remove_all_params}
  */
  readonly removeAllParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#replace_params HttpLoadbalancer#replace_params}
  */
  readonly replaceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#retain_all_params HttpLoadbalancer#retain_all_params}
  */
  readonly retainAllParams?: boolean | cdktf.IResolvable;
}

export function httpLoadbalancerRoutesSimpleRouteQueryParamsToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteQueryParamsOutputReference | HttpLoadbalancerRoutesSimpleRouteQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_all_params: cdktf.booleanToTerraform(struct!.removeAllParams),
    replace_params: cdktf.stringToTerraform(struct!.replaceParams),
    retain_all_params: cdktf.booleanToTerraform(struct!.retainAllParams),
  }
}


export function httpLoadbalancerRoutesSimpleRouteQueryParamsToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteQueryParamsOutputReference | HttpLoadbalancerRoutesSimpleRouteQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.removeAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_params: {
      value: cdktf.stringToHclTerraform(struct!.replaceParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.retainAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRouteQueryParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._removeAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAllParams = this._removeAllParams;
    }
    if (this._replaceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceParams = this._replaceParams;
    }
    if (this._retainAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAllParams = this._retainAllParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRouteQueryParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._removeAllParams = undefined;
      this._replaceParams = undefined;
      this._retainAllParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._removeAllParams = value.removeAllParams;
      this._replaceParams = value.replaceParams;
      this._retainAllParams = value.retainAllParams;
    }
  }

  // remove_all_params - computed: false, optional: true, required: false
  private _removeAllParams?: boolean | cdktf.IResolvable; 
  public get removeAllParams() {
    return this.getBooleanAttribute('remove_all_params');
  }
  public set removeAllParams(value: boolean | cdktf.IResolvable) {
    this._removeAllParams = value;
  }
  public resetRemoveAllParams() {
    this._removeAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAllParamsInput() {
    return this._removeAllParams;
  }

  // replace_params - computed: false, optional: true, required: false
  private _replaceParams?: string; 
  public get replaceParams() {
    return this.getStringAttribute('replace_params');
  }
  public set replaceParams(value: string) {
    this._replaceParams = value;
  }
  public resetReplaceParams() {
    this._replaceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceParamsInput() {
    return this._replaceParams;
  }

  // retain_all_params - computed: false, optional: true, required: false
  private _retainAllParams?: boolean | cdktf.IResolvable; 
  public get retainAllParams() {
    return this.getBooleanAttribute('retain_all_params');
  }
  public set retainAllParams(value: boolean | cdktf.IResolvable) {
    this._retainAllParams = value;
  }
  public resetRetainAllParams() {
    this._retainAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAllParamsInput() {
    return this._retainAllParams;
  }
}
export interface HttpLoadbalancerRoutesSimpleRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#auto_host_rewrite HttpLoadbalancer#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#disable_host_rewrite HttpLoadbalancer#disable_host_rewrite}
  */
  readonly disableHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#host_rewrite HttpLoadbalancer#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#http_method HttpLoadbalancer#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#uuid HttpLoadbalancer#uuid}
  */
  readonly uuid?: string;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#advanced_options HttpLoadbalancer#advanced_options}
  */
  readonly advancedOptions?: HttpLoadbalancerRoutesSimpleRouteAdvancedOptions;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#headers HttpLoadbalancer#headers}
  */
  readonly headers?: HttpLoadbalancerRoutesSimpleRouteHeaders[] | cdktf.IResolvable;
  /**
  * incoming_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#incoming_port HttpLoadbalancer#incoming_port}
  */
  readonly incomingPort?: HttpLoadbalancerRoutesSimpleRouteIncomingPort;
  /**
  * origin_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#origin_pools HttpLoadbalancer#origin_pools}
  */
  readonly originPools: HttpLoadbalancerRoutesSimpleRouteOriginPools[] | cdktf.IResolvable;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: HttpLoadbalancerRoutesSimpleRoutePath;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#query_params HttpLoadbalancer#query_params}
  */
  readonly queryParams?: HttpLoadbalancerRoutesSimpleRouteQueryParams;
}

export function httpLoadbalancerRoutesSimpleRouteToTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOutputReference | HttpLoadbalancerRoutesSimpleRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    disable_host_rewrite: cdktf.booleanToTerraform(struct!.disableHostRewrite),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    advanced_options: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsToTerraform(struct!.advancedOptions),
    headers: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteHeadersToTerraform, true)(struct!.headers),
    incoming_port: httpLoadbalancerRoutesSimpleRouteIncomingPortToTerraform(struct!.incomingPort),
    origin_pools: cdktf.listMapper(httpLoadbalancerRoutesSimpleRouteOriginPoolsToTerraform, true)(struct!.originPools),
    path: httpLoadbalancerRoutesSimpleRoutePathToTerraform(struct!.path),
    query_params: httpLoadbalancerRoutesSimpleRouteQueryParamsToTerraform(struct!.queryParams),
  }
}


export function httpLoadbalancerRoutesSimpleRouteToHclTerraform(struct?: HttpLoadbalancerRoutesSimpleRouteOutputReference | HttpLoadbalancerRoutesSimpleRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_host_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.autoHostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_host_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.disableHostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_options: {
      value: httpLoadbalancerRoutesSimpleRouteAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsList",
    },
    headers: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteHeadersList",
    },
    incoming_port: {
      value: httpLoadbalancerRoutesSimpleRouteIncomingPortToHclTerraform(struct!.incomingPort),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteIncomingPortList",
    },
    origin_pools: {
      value: cdktf.listMapperHcl(httpLoadbalancerRoutesSimpleRouteOriginPoolsToHclTerraform, true)(struct!.originPools),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteOriginPoolsList",
    },
    path: {
      value: httpLoadbalancerRoutesSimpleRoutePathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRoutePathList",
    },
    query_params: {
      value: httpLoadbalancerRoutesSimpleRouteQueryParamsToHclTerraform(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesSimpleRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerRoutesSimpleRoute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._disableHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHostRewrite = this._disableHostRewrite;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._incomingPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingPort = this._incomingPort?.internalValue;
    }
    if (this._originPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPools = this._originPools?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutesSimpleRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHostRewrite = undefined;
      this._disableHostRewrite = undefined;
      this._hostRewrite = undefined;
      this._httpMethod = undefined;
      this._uuid = undefined;
      this._advancedOptions.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._incomingPort.internalValue = undefined;
      this._originPools.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHostRewrite = value.autoHostRewrite;
      this._disableHostRewrite = value.disableHostRewrite;
      this._hostRewrite = value.hostRewrite;
      this._httpMethod = value.httpMethod;
      this._uuid = value.uuid;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._headers.internalValue = value.headers;
      this._incomingPort.internalValue = value.incomingPort;
      this._originPools.internalValue = value.originPools;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // disable_host_rewrite - computed: false, optional: true, required: false
  private _disableHostRewrite?: boolean | cdktf.IResolvable; 
  public get disableHostRewrite() {
    return this.getBooleanAttribute('disable_host_rewrite');
  }
  public set disableHostRewrite(value: boolean | cdktf.IResolvable) {
    this._disableHostRewrite = value;
  }
  public resetDisableHostRewrite() {
    this._disableHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHostRewriteInput() {
    return this._disableHostRewrite;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new HttpLoadbalancerRoutesSimpleRouteAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: HttpLoadbalancerRoutesSimpleRouteAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new HttpLoadbalancerRoutesSimpleRouteHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: HttpLoadbalancerRoutesSimpleRouteHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // incoming_port - computed: false, optional: true, required: false
  private _incomingPort = new HttpLoadbalancerRoutesSimpleRouteIncomingPortOutputReference(this, "incoming_port");
  public get incomingPort() {
    return this._incomingPort;
  }
  public putIncomingPort(value: HttpLoadbalancerRoutesSimpleRouteIncomingPort) {
    this._incomingPort.internalValue = value;
  }
  public resetIncomingPort() {
    this._incomingPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPortInput() {
    return this._incomingPort.internalValue;
  }

  // origin_pools - computed: false, optional: false, required: true
  private _originPools = new HttpLoadbalancerRoutesSimpleRouteOriginPoolsList(this, "origin_pools", false);
  public get originPools() {
    return this._originPools;
  }
  public putOriginPools(value: HttpLoadbalancerRoutesSimpleRouteOriginPools[] | cdktf.IResolvable) {
    this._originPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originPoolsInput() {
    return this._originPools.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path = new HttpLoadbalancerRoutesSimpleRoutePathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: HttpLoadbalancerRoutesSimpleRoutePath) {
    this._path.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new HttpLoadbalancerRoutesSimpleRouteQueryParamsOutputReference(this, "query_params");
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: HttpLoadbalancerRoutesSimpleRouteQueryParams) {
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
export interface HttpLoadbalancerRoutes {
  /**
  * custom_route_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#custom_route_object HttpLoadbalancer#custom_route_object}
  */
  readonly customRouteObject?: HttpLoadbalancerRoutesCustomRouteObject;
  /**
  * direct_response_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#direct_response_route HttpLoadbalancer#direct_response_route}
  */
  readonly directResponseRoute?: HttpLoadbalancerRoutesDirectResponseRoute;
  /**
  * redirect_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#redirect_route HttpLoadbalancer#redirect_route}
  */
  readonly redirectRoute?: HttpLoadbalancerRoutesRedirectRoute;
  /**
  * simple_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#simple_route HttpLoadbalancer#simple_route}
  */
  readonly simpleRoute?: HttpLoadbalancerRoutesSimpleRoute;
}

export function httpLoadbalancerRoutesToTerraform(struct?: HttpLoadbalancerRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_route_object: httpLoadbalancerRoutesCustomRouteObjectToTerraform(struct!.customRouteObject),
    direct_response_route: httpLoadbalancerRoutesDirectResponseRouteToTerraform(struct!.directResponseRoute),
    redirect_route: httpLoadbalancerRoutesRedirectRouteToTerraform(struct!.redirectRoute),
    simple_route: httpLoadbalancerRoutesSimpleRouteToTerraform(struct!.simpleRoute),
  }
}


export function httpLoadbalancerRoutesToHclTerraform(struct?: HttpLoadbalancerRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_route_object: {
      value: httpLoadbalancerRoutesCustomRouteObjectToHclTerraform(struct!.customRouteObject),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesCustomRouteObjectList",
    },
    direct_response_route: {
      value: httpLoadbalancerRoutesDirectResponseRouteToHclTerraform(struct!.directResponseRoute),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesDirectResponseRouteList",
    },
    redirect_route: {
      value: httpLoadbalancerRoutesRedirectRouteToHclTerraform(struct!.redirectRoute),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesRedirectRouteList",
    },
    simple_route: {
      value: httpLoadbalancerRoutesSimpleRouteToHclTerraform(struct!.simpleRoute),
      isBlock: true,
      type: "list",
      storageClassType: "HttpLoadbalancerRoutesSimpleRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpLoadbalancerRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): HttpLoadbalancerRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRouteObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRouteObject = this._customRouteObject?.internalValue;
    }
    if (this._directResponseRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directResponseRoute = this._directResponseRoute?.internalValue;
    }
    if (this._redirectRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectRoute = this._redirectRoute?.internalValue;
    }
    if (this._simpleRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleRoute = this._simpleRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpLoadbalancerRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customRouteObject.internalValue = undefined;
      this._directResponseRoute.internalValue = undefined;
      this._redirectRoute.internalValue = undefined;
      this._simpleRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customRouteObject.internalValue = value.customRouteObject;
      this._directResponseRoute.internalValue = value.directResponseRoute;
      this._redirectRoute.internalValue = value.redirectRoute;
      this._simpleRoute.internalValue = value.simpleRoute;
    }
  }

  // custom_route_object - computed: false, optional: true, required: false
  private _customRouteObject = new HttpLoadbalancerRoutesCustomRouteObjectOutputReference(this, "custom_route_object");
  public get customRouteObject() {
    return this._customRouteObject;
  }
  public putCustomRouteObject(value: HttpLoadbalancerRoutesCustomRouteObject) {
    this._customRouteObject.internalValue = value;
  }
  public resetCustomRouteObject() {
    this._customRouteObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRouteObjectInput() {
    return this._customRouteObject.internalValue;
  }

  // direct_response_route - computed: false, optional: true, required: false
  private _directResponseRoute = new HttpLoadbalancerRoutesDirectResponseRouteOutputReference(this, "direct_response_route");
  public get directResponseRoute() {
    return this._directResponseRoute;
  }
  public putDirectResponseRoute(value: HttpLoadbalancerRoutesDirectResponseRoute) {
    this._directResponseRoute.internalValue = value;
  }
  public resetDirectResponseRoute() {
    this._directResponseRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directResponseRouteInput() {
    return this._directResponseRoute.internalValue;
  }

  // redirect_route - computed: false, optional: true, required: false
  private _redirectRoute = new HttpLoadbalancerRoutesRedirectRouteOutputReference(this, "redirect_route");
  public get redirectRoute() {
    return this._redirectRoute;
  }
  public putRedirectRoute(value: HttpLoadbalancerRoutesRedirectRoute) {
    this._redirectRoute.internalValue = value;
  }
  public resetRedirectRoute() {
    this._redirectRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRouteInput() {
    return this._redirectRoute.internalValue;
  }

  // simple_route - computed: false, optional: true, required: false
  private _simpleRoute = new HttpLoadbalancerRoutesSimpleRouteOutputReference(this, "simple_route");
  public get simpleRoute() {
    return this._simpleRoute;
  }
  public putSimpleRoute(value: HttpLoadbalancerRoutesSimpleRoute) {
    this._simpleRoute.internalValue = value;
  }
  public resetSimpleRoute() {
    this._simpleRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleRouteInput() {
    return this._simpleRoute.internalValue;
  }
}

export class HttpLoadbalancerRoutesList extends cdktf.ComplexList {
  public internalValue? : HttpLoadbalancerRoutes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): HttpLoadbalancerRoutesOutputReference {
    return new HttpLoadbalancerRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#methods HttpLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/http_loadbalancer#path HttpLoadbalancer#path}
  */
  readonly path: string;
}

export function httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointToTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointOutputReference | HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function httpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointToHclTerraform(struct?: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointOutputReference | HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint): any {
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

export class HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint | undefined {
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

  public set internalValue(value: HttpLoadbalancerSensitiveDataDisclosureRulesSensitiveDataTypesInResponseApiEndpoint | undefined) {
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
