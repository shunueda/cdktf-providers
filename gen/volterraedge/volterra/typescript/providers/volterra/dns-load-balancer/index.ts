// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#annotations DnsLoadBalancer#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#description DnsLoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#disable DnsLoadBalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#id DnsLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#labels DnsLoadBalancer#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#name DnsLoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#namespace DnsLoadBalancer#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#record_type DnsLoadBalancer#record_type}
  */
  readonly recordType: string;
  /**
  * fallback_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#fallback_pool DnsLoadBalancer#fallback_pool}
  */
  readonly fallbackPool?: DnsLoadBalancerFallbackPool;
  /**
  * response_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#response_cache DnsLoadBalancer#response_cache}
  */
  readonly responseCache?: DnsLoadBalancerResponseCache;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#rule_list DnsLoadBalancer#rule_list}
  */
  readonly ruleList: DnsLoadBalancerRuleListStruct;
}
export interface DnsLoadBalancerFallbackPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#name DnsLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#namespace DnsLoadBalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#tenant DnsLoadBalancer#tenant}
  */
  readonly tenant?: string;
}

export function dnsLoadBalancerFallbackPoolToTerraform(struct?: DnsLoadBalancerFallbackPoolOutputReference | DnsLoadBalancerFallbackPool): any {
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


export function dnsLoadBalancerFallbackPoolToHclTerraform(struct?: DnsLoadBalancerFallbackPoolOutputReference | DnsLoadBalancerFallbackPool): any {
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

export class DnsLoadBalancerFallbackPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerFallbackPool | undefined {
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

  public set internalValue(value: DnsLoadBalancerFallbackPool | undefined) {
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
export interface DnsLoadBalancerResponseCacheResponseCacheParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#cache_cidr_ipv4 DnsLoadBalancer#cache_cidr_ipv4}
  */
  readonly cacheCidrIpv4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#cache_cidr_ipv6 DnsLoadBalancer#cache_cidr_ipv6}
  */
  readonly cacheCidrIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#cache_ttl DnsLoadBalancer#cache_ttl}
  */
  readonly cacheTtl?: number;
}

export function dnsLoadBalancerResponseCacheResponseCacheParametersToTerraform(struct?: DnsLoadBalancerResponseCacheResponseCacheParametersOutputReference | DnsLoadBalancerResponseCacheResponseCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_cidr_ipv4: cdktf.numberToTerraform(struct!.cacheCidrIpv4),
    cache_cidr_ipv6: cdktf.numberToTerraform(struct!.cacheCidrIpv6),
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
  }
}


export function dnsLoadBalancerResponseCacheResponseCacheParametersToHclTerraform(struct?: DnsLoadBalancerResponseCacheResponseCacheParametersOutputReference | DnsLoadBalancerResponseCacheResponseCacheParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_cidr_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.cacheCidrIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_cidr_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.cacheCidrIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLoadBalancerResponseCacheResponseCacheParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerResponseCacheResponseCacheParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheCidrIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCidrIpv4 = this._cacheCidrIpv4;
    }
    if (this._cacheCidrIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheCidrIpv6 = this._cacheCidrIpv6;
    }
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerResponseCacheResponseCacheParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheCidrIpv4 = undefined;
      this._cacheCidrIpv6 = undefined;
      this._cacheTtl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheCidrIpv4 = value.cacheCidrIpv4;
      this._cacheCidrIpv6 = value.cacheCidrIpv6;
      this._cacheTtl = value.cacheTtl;
    }
  }

  // cache_cidr_ipv4 - computed: false, optional: true, required: false
  private _cacheCidrIpv4?: number; 
  public get cacheCidrIpv4() {
    return this.getNumberAttribute('cache_cidr_ipv4');
  }
  public set cacheCidrIpv4(value: number) {
    this._cacheCidrIpv4 = value;
  }
  public resetCacheCidrIpv4() {
    this._cacheCidrIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCidrIpv4Input() {
    return this._cacheCidrIpv4;
  }

  // cache_cidr_ipv6 - computed: false, optional: true, required: false
  private _cacheCidrIpv6?: number; 
  public get cacheCidrIpv6() {
    return this.getNumberAttribute('cache_cidr_ipv6');
  }
  public set cacheCidrIpv6(value: number) {
    this._cacheCidrIpv6 = value;
  }
  public resetCacheCidrIpv6() {
    this._cacheCidrIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCidrIpv6Input() {
    return this._cacheCidrIpv6;
  }

  // cache_ttl - computed: false, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }
}
export interface DnsLoadBalancerResponseCache {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#default_response_cache_parameters DnsLoadBalancer#default_response_cache_parameters}
  */
  readonly defaultResponseCacheParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#disable DnsLoadBalancer#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * response_cache_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#response_cache_parameters DnsLoadBalancer#response_cache_parameters}
  */
  readonly responseCacheParameters?: DnsLoadBalancerResponseCacheResponseCacheParameters;
}

export function dnsLoadBalancerResponseCacheToTerraform(struct?: DnsLoadBalancerResponseCacheOutputReference | DnsLoadBalancerResponseCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_response_cache_parameters: cdktf.booleanToTerraform(struct!.defaultResponseCacheParameters),
    disable: cdktf.booleanToTerraform(struct!.disable),
    response_cache_parameters: dnsLoadBalancerResponseCacheResponseCacheParametersToTerraform(struct!.responseCacheParameters),
  }
}


export function dnsLoadBalancerResponseCacheToHclTerraform(struct?: DnsLoadBalancerResponseCacheOutputReference | DnsLoadBalancerResponseCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_response_cache_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultResponseCacheParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_cache_parameters: {
      value: dnsLoadBalancerResponseCacheResponseCacheParametersToHclTerraform(struct!.responseCacheParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerResponseCacheResponseCacheParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLoadBalancerResponseCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerResponseCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultResponseCacheParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultResponseCacheParameters = this._defaultResponseCacheParameters;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._responseCacheParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCacheParameters = this._responseCacheParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerResponseCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultResponseCacheParameters = undefined;
      this._disable = undefined;
      this._responseCacheParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultResponseCacheParameters = value.defaultResponseCacheParameters;
      this._disable = value.disable;
      this._responseCacheParameters.internalValue = value.responseCacheParameters;
    }
  }

  // default_response_cache_parameters - computed: false, optional: true, required: false
  private _defaultResponseCacheParameters?: boolean | cdktf.IResolvable; 
  public get defaultResponseCacheParameters() {
    return this.getBooleanAttribute('default_response_cache_parameters');
  }
  public set defaultResponseCacheParameters(value: boolean | cdktf.IResolvable) {
    this._defaultResponseCacheParameters = value;
  }
  public resetDefaultResponseCacheParameters() {
    this._defaultResponseCacheParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultResponseCacheParametersInput() {
    return this._defaultResponseCacheParameters;
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

  // response_cache_parameters - computed: false, optional: true, required: false
  private _responseCacheParameters = new DnsLoadBalancerResponseCacheResponseCacheParametersOutputReference(this, "response_cache_parameters");
  public get responseCacheParameters() {
    return this._responseCacheParameters;
  }
  public putResponseCacheParameters(value: DnsLoadBalancerResponseCacheResponseCacheParameters) {
    this._responseCacheParameters.internalValue = value;
  }
  public resetResponseCacheParameters() {
    this._responseCacheParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheParametersInput() {
    return this._responseCacheParameters.internalValue;
  }
}
export interface DnsLoadBalancerRuleListRulesAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#as_numbers DnsLoadBalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function dnsLoadBalancerRuleListRulesAsnListStructToTerraform(struct?: DnsLoadBalancerRuleListRulesAsnListStructOutputReference | DnsLoadBalancerRuleListRulesAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function dnsLoadBalancerRuleListRulesAsnListStructToHclTerraform(struct?: DnsLoadBalancerRuleListRulesAsnListStructOutputReference | DnsLoadBalancerRuleListRulesAsnListStruct): any {
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

export class DnsLoadBalancerRuleListRulesAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerRuleListRulesAsnListStruct | undefined) {
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
export interface DnsLoadBalancerRuleListRulesAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#name DnsLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#namespace DnsLoadBalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#tenant DnsLoadBalancer#tenant}
  */
  readonly tenant?: string;
}

export function dnsLoadBalancerRuleListRulesAsnMatcherAsnSetsToTerraform(struct?: DnsLoadBalancerRuleListRulesAsnMatcherAsnSets | cdktf.IResolvable): any {
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


export function dnsLoadBalancerRuleListRulesAsnMatcherAsnSetsToHclTerraform(struct?: DnsLoadBalancerRuleListRulesAsnMatcherAsnSets | cdktf.IResolvable): any {
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

export class DnsLoadBalancerRuleListRulesAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesAsnMatcherAsnSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsLoadBalancerRuleListRulesAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
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

export class DnsLoadBalancerRuleListRulesAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : DnsLoadBalancerRuleListRulesAsnMatcherAsnSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DnsLoadBalancerRuleListRulesAsnMatcherAsnSetsOutputReference {
    return new DnsLoadBalancerRuleListRulesAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLoadBalancerRuleListRulesAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#asn_sets DnsLoadBalancer#asn_sets}
  */
  readonly asnSets: DnsLoadBalancerRuleListRulesAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function dnsLoadBalancerRuleListRulesAsnMatcherToTerraform(struct?: DnsLoadBalancerRuleListRulesAsnMatcherOutputReference | DnsLoadBalancerRuleListRulesAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(dnsLoadBalancerRuleListRulesAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function dnsLoadBalancerRuleListRulesAsnMatcherToHclTerraform(struct?: DnsLoadBalancerRuleListRulesAsnMatcherOutputReference | DnsLoadBalancerRuleListRulesAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(dnsLoadBalancerRuleListRulesAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLoadBalancerRuleListRulesAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerRuleListRulesAsnMatcher | undefined) {
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
  private _asnSets = new DnsLoadBalancerRuleListRulesAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: DnsLoadBalancerRuleListRulesAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface DnsLoadBalancerRuleListRulesGeoLocationLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#expressions DnsLoadBalancer#expressions}
  */
  readonly expressions: string[];
}

export function dnsLoadBalancerRuleListRulesGeoLocationLabelSelectorToTerraform(struct?: DnsLoadBalancerRuleListRulesGeoLocationLabelSelectorOutputReference | DnsLoadBalancerRuleListRulesGeoLocationLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function dnsLoadBalancerRuleListRulesGeoLocationLabelSelectorToHclTerraform(struct?: DnsLoadBalancerRuleListRulesGeoLocationLabelSelectorOutputReference | DnsLoadBalancerRuleListRulesGeoLocationLabelSelector): any {
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

export class DnsLoadBalancerRuleListRulesGeoLocationLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesGeoLocationLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerRuleListRulesGeoLocationLabelSelector | undefined) {
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
export interface DnsLoadBalancerRuleListRulesGeoLocationSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#name DnsLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#namespace DnsLoadBalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#tenant DnsLoadBalancer#tenant}
  */
  readonly tenant?: string;
}

export function dnsLoadBalancerRuleListRulesGeoLocationSetToTerraform(struct?: DnsLoadBalancerRuleListRulesGeoLocationSetOutputReference | DnsLoadBalancerRuleListRulesGeoLocationSet): any {
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


export function dnsLoadBalancerRuleListRulesGeoLocationSetToHclTerraform(struct?: DnsLoadBalancerRuleListRulesGeoLocationSetOutputReference | DnsLoadBalancerRuleListRulesGeoLocationSet): any {
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

export class DnsLoadBalancerRuleListRulesGeoLocationSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesGeoLocationSet | undefined {
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

  public set internalValue(value: DnsLoadBalancerRuleListRulesGeoLocationSet | undefined) {
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
export interface DnsLoadBalancerRuleListRulesIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#invert_match DnsLoadBalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#ip_prefixes DnsLoadBalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#ipv6_prefixes DnsLoadBalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function dnsLoadBalancerRuleListRulesIpPrefixListStructToTerraform(struct?: DnsLoadBalancerRuleListRulesIpPrefixListStructOutputReference | DnsLoadBalancerRuleListRulesIpPrefixListStruct): any {
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


export function dnsLoadBalancerRuleListRulesIpPrefixListStructToHclTerraform(struct?: DnsLoadBalancerRuleListRulesIpPrefixListStructOutputReference | DnsLoadBalancerRuleListRulesIpPrefixListStruct): any {
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

export class DnsLoadBalancerRuleListRulesIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesIpPrefixListStruct | undefined {
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

  public set internalValue(value: DnsLoadBalancerRuleListRulesIpPrefixListStruct | undefined) {
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
export interface DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#name DnsLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#namespace DnsLoadBalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#tenant DnsLoadBalancer#tenant}
  */
  readonly tenant?: string;
}

export function dnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsToTerraform(struct?: DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets | cdktf.IResolvable): any {
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


export function dnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsToHclTerraform(struct?: DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets | cdktf.IResolvable): any {
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

export class DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets | cdktf.IResolvable | undefined) {
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

export class DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsOutputReference {
    return new DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLoadBalancerRuleListRulesIpPrefixSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#invert_matcher DnsLoadBalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#prefix_sets DnsLoadBalancer#prefix_sets}
  */
  readonly prefixSets: DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets[] | cdktf.IResolvable;
}

export function dnsLoadBalancerRuleListRulesIpPrefixSetToTerraform(struct?: DnsLoadBalancerRuleListRulesIpPrefixSetOutputReference | DnsLoadBalancerRuleListRulesIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(dnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function dnsLoadBalancerRuleListRulesIpPrefixSetToHclTerraform(struct?: DnsLoadBalancerRuleListRulesIpPrefixSetOutputReference | DnsLoadBalancerRuleListRulesIpPrefixSet): any {
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
      value: cdktf.listMapperHcl(dnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLoadBalancerRuleListRulesIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesIpPrefixSet | undefined {
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

  public set internalValue(value: DnsLoadBalancerRuleListRulesIpPrefixSet | undefined) {
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
  private _prefixSets = new DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: DnsLoadBalancerRuleListRulesIpPrefixSetPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface DnsLoadBalancerRuleListRulesPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#name DnsLoadBalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#namespace DnsLoadBalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#tenant DnsLoadBalancer#tenant}
  */
  readonly tenant?: string;
}

export function dnsLoadBalancerRuleListRulesPoolToTerraform(struct?: DnsLoadBalancerRuleListRulesPoolOutputReference | DnsLoadBalancerRuleListRulesPool): any {
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


export function dnsLoadBalancerRuleListRulesPoolToHclTerraform(struct?: DnsLoadBalancerRuleListRulesPoolOutputReference | DnsLoadBalancerRuleListRulesPool): any {
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

export class DnsLoadBalancerRuleListRulesPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListRulesPool | undefined {
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

  public set internalValue(value: DnsLoadBalancerRuleListRulesPool | undefined) {
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
export interface DnsLoadBalancerRuleListRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#nxdomain DnsLoadBalancer#nxdomain}
  */
  readonly nxdomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#score DnsLoadBalancer#score}
  */
  readonly score?: number;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#asn_list DnsLoadBalancer#asn_list}
  */
  readonly asnList?: DnsLoadBalancerRuleListRulesAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#asn_matcher DnsLoadBalancer#asn_matcher}
  */
  readonly asnMatcher?: DnsLoadBalancerRuleListRulesAsnMatcher;
  /**
  * geo_location_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#geo_location_label_selector DnsLoadBalancer#geo_location_label_selector}
  */
  readonly geoLocationLabelSelector?: DnsLoadBalancerRuleListRulesGeoLocationLabelSelector;
  /**
  * geo_location_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#geo_location_set DnsLoadBalancer#geo_location_set}
  */
  readonly geoLocationSet?: DnsLoadBalancerRuleListRulesGeoLocationSet;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#ip_prefix_list DnsLoadBalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: DnsLoadBalancerRuleListRulesIpPrefixListStruct;
  /**
  * ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#ip_prefix_set DnsLoadBalancer#ip_prefix_set}
  */
  readonly ipPrefixSet?: DnsLoadBalancerRuleListRulesIpPrefixSet;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#pool DnsLoadBalancer#pool}
  */
  readonly pool?: DnsLoadBalancerRuleListRulesPool;
}

export function dnsLoadBalancerRuleListRulesToTerraform(struct?: DnsLoadBalancerRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nxdomain: cdktf.booleanToTerraform(struct!.nxdomain),
    score: cdktf.numberToTerraform(struct!.score),
    asn_list: dnsLoadBalancerRuleListRulesAsnListStructToTerraform(struct!.asnList),
    asn_matcher: dnsLoadBalancerRuleListRulesAsnMatcherToTerraform(struct!.asnMatcher),
    geo_location_label_selector: dnsLoadBalancerRuleListRulesGeoLocationLabelSelectorToTerraform(struct!.geoLocationLabelSelector),
    geo_location_set: dnsLoadBalancerRuleListRulesGeoLocationSetToTerraform(struct!.geoLocationSet),
    ip_prefix_list: dnsLoadBalancerRuleListRulesIpPrefixListStructToTerraform(struct!.ipPrefixList),
    ip_prefix_set: dnsLoadBalancerRuleListRulesIpPrefixSetToTerraform(struct!.ipPrefixSet),
    pool: dnsLoadBalancerRuleListRulesPoolToTerraform(struct!.pool),
  }
}


export function dnsLoadBalancerRuleListRulesToHclTerraform(struct?: DnsLoadBalancerRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nxdomain: {
      value: cdktf.booleanToHclTerraform(struct!.nxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asn_list: {
      value: dnsLoadBalancerRuleListRulesAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesAsnListStructList",
    },
    asn_matcher: {
      value: dnsLoadBalancerRuleListRulesAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesAsnMatcherList",
    },
    geo_location_label_selector: {
      value: dnsLoadBalancerRuleListRulesGeoLocationLabelSelectorToHclTerraform(struct!.geoLocationLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesGeoLocationLabelSelectorList",
    },
    geo_location_set: {
      value: dnsLoadBalancerRuleListRulesGeoLocationSetToHclTerraform(struct!.geoLocationSet),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesGeoLocationSetList",
    },
    ip_prefix_list: {
      value: dnsLoadBalancerRuleListRulesIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesIpPrefixListStructList",
    },
    ip_prefix_set: {
      value: dnsLoadBalancerRuleListRulesIpPrefixSetToHclTerraform(struct!.ipPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesIpPrefixSetList",
    },
    pool: {
      value: dnsLoadBalancerRuleListRulesPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLoadBalancerRuleListRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DnsLoadBalancerRuleListRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.nxdomain = this._nxdomain;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._geoLocationLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLabelSelector = this._geoLocationLabelSelector?.internalValue;
    }
    if (this._geoLocationSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationSet = this._geoLocationSet?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._ipPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixSet = this._ipPrefixSet?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerRuleListRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nxdomain = undefined;
      this._score = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._geoLocationLabelSelector.internalValue = undefined;
      this._geoLocationSet.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._ipPrefixSet.internalValue = undefined;
      this._pool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nxdomain = value.nxdomain;
      this._score = value.score;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._geoLocationLabelSelector.internalValue = value.geoLocationLabelSelector;
      this._geoLocationSet.internalValue = value.geoLocationSet;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._ipPrefixSet.internalValue = value.ipPrefixSet;
      this._pool.internalValue = value.pool;
    }
  }

  // nxdomain - computed: false, optional: true, required: false
  private _nxdomain?: boolean | cdktf.IResolvable; 
  public get nxdomain() {
    return this.getBooleanAttribute('nxdomain');
  }
  public set nxdomain(value: boolean | cdktf.IResolvable) {
    this._nxdomain = value;
  }
  public resetNxdomain() {
    this._nxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nxdomainInput() {
    return this._nxdomain;
  }

  // score - computed: false, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new DnsLoadBalancerRuleListRulesAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: DnsLoadBalancerRuleListRulesAsnListStruct) {
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
  private _asnMatcher = new DnsLoadBalancerRuleListRulesAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: DnsLoadBalancerRuleListRulesAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // geo_location_label_selector - computed: false, optional: true, required: false
  private _geoLocationLabelSelector = new DnsLoadBalancerRuleListRulesGeoLocationLabelSelectorOutputReference(this, "geo_location_label_selector");
  public get geoLocationLabelSelector() {
    return this._geoLocationLabelSelector;
  }
  public putGeoLocationLabelSelector(value: DnsLoadBalancerRuleListRulesGeoLocationLabelSelector) {
    this._geoLocationLabelSelector.internalValue = value;
  }
  public resetGeoLocationLabelSelector() {
    this._geoLocationLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLabelSelectorInput() {
    return this._geoLocationLabelSelector.internalValue;
  }

  // geo_location_set - computed: false, optional: true, required: false
  private _geoLocationSet = new DnsLoadBalancerRuleListRulesGeoLocationSetOutputReference(this, "geo_location_set");
  public get geoLocationSet() {
    return this._geoLocationSet;
  }
  public putGeoLocationSet(value: DnsLoadBalancerRuleListRulesGeoLocationSet) {
    this._geoLocationSet.internalValue = value;
  }
  public resetGeoLocationSet() {
    this._geoLocationSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationSetInput() {
    return this._geoLocationSet.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new DnsLoadBalancerRuleListRulesIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: DnsLoadBalancerRuleListRulesIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // ip_prefix_set - computed: false, optional: true, required: false
  private _ipPrefixSet = new DnsLoadBalancerRuleListRulesIpPrefixSetOutputReference(this, "ip_prefix_set");
  public get ipPrefixSet() {
    return this._ipPrefixSet;
  }
  public putIpPrefixSet(value: DnsLoadBalancerRuleListRulesIpPrefixSet) {
    this._ipPrefixSet.internalValue = value;
  }
  public resetIpPrefixSet() {
    this._ipPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixSetInput() {
    return this._ipPrefixSet.internalValue;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new DnsLoadBalancerRuleListRulesPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: DnsLoadBalancerRuleListRulesPool) {
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

export class DnsLoadBalancerRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : DnsLoadBalancerRuleListRules[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DnsLoadBalancerRuleListRulesOutputReference {
    return new DnsLoadBalancerRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsLoadBalancerRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#rules DnsLoadBalancer#rules}
  */
  readonly rules: DnsLoadBalancerRuleListRules[] | cdktf.IResolvable;
}

export function dnsLoadBalancerRuleListStructToTerraform(struct?: DnsLoadBalancerRuleListStructOutputReference | DnsLoadBalancerRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(dnsLoadBalancerRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function dnsLoadBalancerRuleListStructToHclTerraform(struct?: DnsLoadBalancerRuleListStructOutputReference | DnsLoadBalancerRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(dnsLoadBalancerRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DnsLoadBalancerRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsLoadBalancerRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsLoadBalancerRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsLoadBalancerRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DnsLoadBalancerRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DnsLoadBalancerRuleListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer volterra_dns_load_balancer}
*/
export class DnsLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_dns_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsLoadBalancer to import
  * @param importFromId The id of the existing DnsLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_dns_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/dns_load_balancer volterra_dns_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: DnsLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_dns_load_balancer',
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
    this._recordType = config.recordType;
    this._fallbackPool.internalValue = config.fallbackPool;
    this._responseCache.internalValue = config.responseCache;
    this._ruleList.internalValue = config.ruleList;
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

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // fallback_pool - computed: false, optional: true, required: false
  private _fallbackPool = new DnsLoadBalancerFallbackPoolOutputReference(this, "fallback_pool");
  public get fallbackPool() {
    return this._fallbackPool;
  }
  public putFallbackPool(value: DnsLoadBalancerFallbackPool) {
    this._fallbackPool.internalValue = value;
  }
  public resetFallbackPool() {
    this._fallbackPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPoolInput() {
    return this._fallbackPool.internalValue;
  }

  // response_cache - computed: false, optional: true, required: false
  private _responseCache = new DnsLoadBalancerResponseCacheOutputReference(this, "response_cache");
  public get responseCache() {
    return this._responseCache;
  }
  public putResponseCache(value: DnsLoadBalancerResponseCache) {
    this._responseCache.internalValue = value;
  }
  public resetResponseCache() {
    this._responseCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCacheInput() {
    return this._responseCache.internalValue;
  }

  // rule_list - computed: false, optional: false, required: true
  private _ruleList = new DnsLoadBalancerRuleListStructOutputReference(this, "rule_list");
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DnsLoadBalancerRuleListStruct) {
    this._ruleList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
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
      record_type: cdktf.stringToTerraform(this._recordType),
      fallback_pool: dnsLoadBalancerFallbackPoolToTerraform(this._fallbackPool.internalValue),
      response_cache: dnsLoadBalancerResponseCacheToTerraform(this._responseCache.internalValue),
      rule_list: dnsLoadBalancerRuleListStructToTerraform(this._ruleList.internalValue),
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
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_pool: {
        value: dnsLoadBalancerFallbackPoolToHclTerraform(this._fallbackPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLoadBalancerFallbackPoolList",
      },
      response_cache: {
        value: dnsLoadBalancerResponseCacheToHclTerraform(this._responseCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLoadBalancerResponseCacheList",
      },
      rule_list: {
        value: dnsLoadBalancerRuleListStructToHclTerraform(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsLoadBalancerRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
