// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#cache DnsProxy#cache}
  */
  readonly cache?: DnsProxyCache;
  /**
  * Default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#default DnsProxy#default}
  */
  readonly default: DnsProxyDefault;
  /**
  * The device in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#device DnsProxy#device}
  */
  readonly device?: string;
  /**
  * DNS proxy rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#domain_servers DnsProxy#domain_servers}
  */
  readonly domainServers?: DnsProxyDomainServers[] | cdktf.IResolvable;
  /**
  * Enable DNS proxy?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#enabled DnsProxy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The folder in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#folder DnsProxy#folder}
  */
  readonly folder?: string;
  /**
  * Interfaces on which to enable DNS proxy service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#interface DnsProxy#interface}
  */
  readonly interface?: string[];
  /**
  * DNS proxy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name: string;
  /**
  * The snippet in which the resource is defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#snippet DnsProxy#snippet}
  */
  readonly snippet?: string;
  /**
  * Static entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#static_entries DnsProxy#static_entries}
  */
  readonly staticEntries?: DnsProxyStaticEntries[] | cdktf.IResolvable;
  /**
  * Tcp queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#tcp_queries DnsProxy#tcp_queries}
  */
  readonly tcpQueries?: DnsProxyTcpQueries;
  /**
  * Udp queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#udp_queries DnsProxy#udp_queries}
  */
  readonly udpQueries?: DnsProxyUdpQueries;
}
export interface DnsProxyCacheMaxTtl {
  /**
  * Enable max ttl for this DNS object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#enabled DnsProxy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Time in seconds after which entry is cleared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#time_to_live DnsProxy#time_to_live}
  */
  readonly timeToLive?: number;
}

export function dnsProxyCacheMaxTtlToTerraform(struct?: DnsProxyCacheMaxTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_to_live: cdktf.numberToTerraform(struct!.timeToLive),
  }
}


export function dnsProxyCacheMaxTtlToHclTerraform(struct?: DnsProxyCacheMaxTtl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_to_live: {
      value: cdktf.numberToHclTerraform(struct!.timeToLive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyCacheMaxTtlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyCacheMaxTtl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeToLive !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLive = this._timeToLive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyCacheMaxTtl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._timeToLive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._timeToLive = value.timeToLive;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // time_to_live - computed: true, optional: true, required: false
  private _timeToLive?: number; 
  public get timeToLive() {
    return this.getNumberAttribute('time_to_live');
  }
  public set timeToLive(value: number) {
    this._timeToLive = value;
  }
  public resetTimeToLive() {
    this._timeToLive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInput() {
    return this._timeToLive;
  }
}
export interface DnsProxyCache {
  /**
  * Cache EDNS UDP response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#cache_edns DnsProxy#cache_edns}
  */
  readonly cacheEdns?: boolean | cdktf.IResolvable;
  /**
  * Turn on caching for this DNS object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#enabled DnsProxy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Max ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#max_ttl DnsProxy#max_ttl}
  */
  readonly maxTtl?: DnsProxyCacheMaxTtl;
}

export function dnsProxyCacheToTerraform(struct?: DnsProxyCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_edns: cdktf.booleanToTerraform(struct!.cacheEdns),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_ttl: dnsProxyCacheMaxTtlToTerraform(struct!.maxTtl),
  }
}


export function dnsProxyCacheToHclTerraform(struct?: DnsProxyCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_edns: {
      value: cdktf.booleanToHclTerraform(struct!.cacheEdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ttl: {
      value: dnsProxyCacheMaxTtlToHclTerraform(struct!.maxTtl),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsProxyCacheMaxTtl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheEdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheEdns = this._cacheEdns;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxTtl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTtl = this._maxTtl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheEdns = undefined;
      this._enabled = undefined;
      this._maxTtl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheEdns = value.cacheEdns;
      this._enabled = value.enabled;
      this._maxTtl.internalValue = value.maxTtl;
    }
  }

  // cache_edns - computed: true, optional: true, required: false
  private _cacheEdns?: boolean | cdktf.IResolvable; 
  public get cacheEdns() {
    return this.getBooleanAttribute('cache_edns');
  }
  public set cacheEdns(value: boolean | cdktf.IResolvable) {
    this._cacheEdns = value;
  }
  public resetCacheEdns() {
    this._cacheEdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheEdnsInput() {
    return this._cacheEdns;
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl = new DnsProxyCacheMaxTtlOutputReference(this, "max_ttl");
  public get maxTtl() {
    return this._maxTtl;
  }
  public putMaxTtl(value: DnsProxyCacheMaxTtl) {
    this._maxTtl.internalValue = value;
  }
  public resetMaxTtl() {
    this._maxTtl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl.internalValue;
  }
}
export interface DnsProxyDefaultInheritance {
  /**
  * Dynamic interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#source DnsProxy#source}
  */
  readonly source?: string;
}

export function dnsProxyDefaultInheritanceToTerraform(struct?: DnsProxyDefaultInheritance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dnsProxyDefaultInheritanceToHclTerraform(struct?: DnsProxyDefaultInheritance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyDefaultInheritanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyDefaultInheritance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyDefaultInheritance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
    }
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DnsProxyDefault {
  /**
  * Inheritance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#inheritance DnsProxy#inheritance}
  */
  readonly inheritance?: DnsProxyDefaultInheritance;
  /**
  * Primary DNS Name server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#primary DnsProxy#primary}
  */
  readonly primary: string;
  /**
  * Secondary DNS Name server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#secondary DnsProxy#secondary}
  */
  readonly secondary?: string;
}

export function dnsProxyDefaultToTerraform(struct?: DnsProxyDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inheritance: dnsProxyDefaultInheritanceToTerraform(struct!.inheritance),
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dnsProxyDefaultToHclTerraform(struct?: DnsProxyDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inheritance: {
      value: dnsProxyDefaultInheritanceToHclTerraform(struct!.inheritance),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsProxyDefaultInheritance",
    },
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritance = this._inheritance?.internalValue;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inheritance.internalValue = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inheritance.internalValue = value.inheritance;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // inheritance - computed: false, optional: true, required: false
  private _inheritance = new DnsProxyDefaultInheritanceOutputReference(this, "inheritance");
  public get inheritance() {
    return this._inheritance;
  }
  public putInheritance(value: DnsProxyDefaultInheritance) {
    this._inheritance.internalValue = value;
  }
  public resetInheritance() {
    this._inheritance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritanceInput() {
    return this._inheritance.internalValue;
  }

  // primary - computed: false, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}
export interface DnsProxyDomainServers {
  /**
  * Enable caching for this DNS proxy rule?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#cacheable DnsProxy#cacheable}
  */
  readonly cacheable?: boolean | cdktf.IResolvable;
  /**
  * Domain names(s) that will be matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#domain_name DnsProxy#domain_name}
  */
  readonly domainName?: string[];
  /**
  * Proxy rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name: string;
  /**
  * Primary DNS server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#primary DnsProxy#primary}
  */
  readonly primary: string;
  /**
  * Secondary DNS server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#secondary DnsProxy#secondary}
  */
  readonly secondary?: string;
}

export function dnsProxyDomainServersToTerraform(struct?: DnsProxyDomainServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cacheable: cdktf.booleanToTerraform(struct!.cacheable),
    domain_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainName),
    name: cdktf.stringToTerraform(struct!.name),
    primary: cdktf.stringToTerraform(struct!.primary),
    secondary: cdktf.stringToTerraform(struct!.secondary),
  }
}


export function dnsProxyDomainServersToHclTerraform(struct?: DnsProxyDomainServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cacheable: {
      value: cdktf.booleanToHclTerraform(struct!.cacheable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary: {
      value: cdktf.stringToHclTerraform(struct!.secondary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyDomainServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyDomainServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheable !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheable = this._cacheable;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._secondary !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyDomainServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheable = undefined;
      this._domainName = undefined;
      this._name = undefined;
      this._primary = undefined;
      this._secondary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheable = value.cacheable;
      this._domainName = value.domainName;
      this._name = value.name;
      this._primary = value.primary;
      this._secondary = value.secondary;
    }
  }

  // cacheable - computed: false, optional: true, required: false
  private _cacheable?: boolean | cdktf.IResolvable; 
  public get cacheable() {
    return this.getBooleanAttribute('cacheable');
  }
  public set cacheable(value: boolean | cdktf.IResolvable) {
    this._cacheable = value;
  }
  public resetCacheable() {
    this._cacheable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheableInput() {
    return this._cacheable;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string[]; 
  public get domainName() {
    return this.getListAttribute('domain_name');
  }
  public set domainName(value: string[]) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // primary - computed: false, optional: false, required: true
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // secondary - computed: false, optional: true, required: false
  private _secondary?: string; 
  public get secondary() {
    return this.getStringAttribute('secondary');
  }
  public set secondary(value: string) {
    this._secondary = value;
  }
  public resetSecondary() {
    this._secondary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary;
  }
}

export class DnsProxyDomainServersList extends cdktf.ComplexList {
  public internalValue? : DnsProxyDomainServers[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyDomainServersOutputReference {
    return new DnsProxyDomainServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyStaticEntries {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#address DnsProxy#address}
  */
  readonly address: string[];
  /**
  * Fully qualified domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#domain DnsProxy#domain}
  */
  readonly domain: string;
  /**
  * Static entry name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name: string;
}

export function dnsProxyStaticEntriesToTerraform(struct?: DnsProxyStaticEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.address),
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsProxyStaticEntriesToHclTerraform(struct?: DnsProxyStaticEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.address),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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

export class DnsProxyStaticEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyStaticEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyStaticEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._domain = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._domain = value.domain;
      this._name = value.name;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string[]; 
  public get address() {
    return this.getListAttribute('address');
  }
  public set address(value: string[]) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

export class DnsProxyStaticEntriesList extends cdktf.ComplexList {
  public internalValue? : DnsProxyStaticEntries[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyStaticEntriesOutputReference {
    return new DnsProxyStaticEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyTcpQueries {
  /**
  * Turn on forwarding of TCP DNS queries?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#enabled DnsProxy#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Upper limit on number of concurrent TCP DNS requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#max_pending_requests DnsProxy#max_pending_requests}
  */
  readonly maxPendingRequests?: number;
}

export function dnsProxyTcpQueriesToTerraform(struct?: DnsProxyTcpQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_pending_requests: cdktf.numberToTerraform(struct!.maxPendingRequests),
  }
}


export function dnsProxyTcpQueriesToHclTerraform(struct?: DnsProxyTcpQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxPendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyTcpQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyTcpQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxPendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPendingRequests = this._maxPendingRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyTcpQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._maxPendingRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._maxPendingRequests = value.maxPendingRequests;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // max_pending_requests - computed: true, optional: true, required: false
  private _maxPendingRequests?: number; 
  public get maxPendingRequests() {
    return this.getNumberAttribute('max_pending_requests');
  }
  public set maxPendingRequests(value: number) {
    this._maxPendingRequests = value;
  }
  public resetMaxPendingRequests() {
    this._maxPendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPendingRequestsInput() {
    return this._maxPendingRequests;
  }
}
export interface DnsProxyUdpQueriesRetries {
  /**
  * Maximum number of retries before trying next name server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#attempts DnsProxy#attempts}
  */
  readonly attempts?: number;
  /**
  * Time in seconds for another request to be sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#interval DnsProxy#interval}
  */
  readonly interval?: number;
}

export function dnsProxyUdpQueriesRetriesToTerraform(struct?: DnsProxyUdpQueriesRetries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function dnsProxyUdpQueriesRetriesToHclTerraform(struct?: DnsProxyUdpQueriesRetries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyUdpQueriesRetriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyUdpQueriesRetries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyUdpQueriesRetries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._interval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._interval = value.interval;
    }
  }

  // attempts - computed: true, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface DnsProxyUdpQueries {
  /**
  * Retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#retries DnsProxy#retries}
  */
  readonly retries?: DnsProxyUdpQueriesRetries;
}

export function dnsProxyUdpQueriesToTerraform(struct?: DnsProxyUdpQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retries: dnsProxyUdpQueriesRetriesToTerraform(struct!.retries),
  }
}


export function dnsProxyUdpQueriesToHclTerraform(struct?: DnsProxyUdpQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retries: {
      value: dnsProxyUdpQueriesRetriesToHclTerraform(struct!.retries),
      isBlock: true,
      type: "struct",
      storageClassType: "DnsProxyUdpQueriesRetries",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyUdpQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsProxyUdpQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyUdpQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retries.internalValue = value.retries;
    }
  }

  // retries - computed: true, optional: true, required: false
  private _retries = new DnsProxyUdpQueriesRetriesOutputReference(this, "retries");
  public get retries() {
    return this._retries;
  }
  public putRetries(value: DnsProxyUdpQueriesRetries) {
    this._retries.internalValue = value;
  }
  public resetRetries() {
    this._retries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy scm_dns_proxy}
*/
export class DnsProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dns_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsProxy to import
  * @param importFromId The id of the existing DnsProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dns_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/dns_proxy scm_dns_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsProxyConfig
  */
  public constructor(scope: Construct, id: string, config: DnsProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_dns_proxy',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cache.internalValue = config.cache;
    this._default.internalValue = config.default;
    this._device = config.device;
    this._domainServers.internalValue = config.domainServers;
    this._enabled = config.enabled;
    this._folder = config.folder;
    this._interface = config.interface;
    this._name = config.name;
    this._snippet = config.snippet;
    this._staticEntries.internalValue = config.staticEntries;
    this._tcpQueries.internalValue = config.tcpQueries;
    this._udpQueries.internalValue = config.udpQueries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache - computed: true, optional: true, required: false
  private _cache = new DnsProxyCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: DnsProxyCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // default - computed: false, optional: false, required: true
  private _default = new DnsProxyDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DnsProxyDefault) {
    this._default.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // domain_servers - computed: false, optional: true, required: false
  private _domainServers = new DnsProxyDomainServersList(this, "domain_servers", false);
  public get domainServers() {
    return this._domainServers;
  }
  public putDomainServers(value: DnsProxyDomainServers[] | cdktf.IResolvable) {
    this._domainServers.internalValue = value;
  }
  public resetDomainServers() {
    this._domainServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainServersInput() {
    return this._domainServers.internalValue;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return this.getListAttribute('interface');
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // static_entries - computed: false, optional: true, required: false
  private _staticEntries = new DnsProxyStaticEntriesList(this, "static_entries", false);
  public get staticEntries() {
    return this._staticEntries;
  }
  public putStaticEntries(value: DnsProxyStaticEntries[] | cdktf.IResolvable) {
    this._staticEntries.internalValue = value;
  }
  public resetStaticEntries() {
    this._staticEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticEntriesInput() {
    return this._staticEntries.internalValue;
  }

  // tcp_queries - computed: true, optional: true, required: false
  private _tcpQueries = new DnsProxyTcpQueriesOutputReference(this, "tcp_queries");
  public get tcpQueries() {
    return this._tcpQueries;
  }
  public putTcpQueries(value: DnsProxyTcpQueries) {
    this._tcpQueries.internalValue = value;
  }
  public resetTcpQueries() {
    this._tcpQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpQueriesInput() {
    return this._tcpQueries.internalValue;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // udp_queries - computed: true, optional: true, required: false
  private _udpQueries = new DnsProxyUdpQueriesOutputReference(this, "udp_queries");
  public get udpQueries() {
    return this._udpQueries;
  }
  public putUdpQueries(value: DnsProxyUdpQueries) {
    this._udpQueries.internalValue = value;
  }
  public resetUdpQueries() {
    this._udpQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpQueriesInput() {
    return this._udpQueries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache: dnsProxyCacheToTerraform(this._cache.internalValue),
      default: dnsProxyDefaultToTerraform(this._default.internalValue),
      device: cdktf.stringToTerraform(this._device),
      domain_servers: cdktf.listMapper(dnsProxyDomainServersToTerraform, false)(this._domainServers.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      folder: cdktf.stringToTerraform(this._folder),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      name: cdktf.stringToTerraform(this._name),
      snippet: cdktf.stringToTerraform(this._snippet),
      static_entries: cdktf.listMapper(dnsProxyStaticEntriesToTerraform, false)(this._staticEntries.internalValue),
      tcp_queries: dnsProxyTcpQueriesToTerraform(this._tcpQueries.internalValue),
      udp_queries: dnsProxyUdpQueriesToTerraform(this._udpQueries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache: {
        value: dnsProxyCacheToHclTerraform(this._cache.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsProxyCache",
      },
      default: {
        value: dnsProxyDefaultToHclTerraform(this._default.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsProxyDefault",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_servers: {
        value: cdktf.listMapperHcl(dnsProxyDomainServersToHclTerraform, false)(this._domainServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyDomainServersList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_entries: {
        value: cdktf.listMapperHcl(dnsProxyStaticEntriesToHclTerraform, false)(this._staticEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyStaticEntriesList",
      },
      tcp_queries: {
        value: dnsProxyTcpQueriesToHclTerraform(this._tcpQueries.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsProxyTcpQueries",
      },
      udp_queries: {
        value: dnsProxyUdpQueriesToHclTerraform(this._udpQueries.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsProxyUdpQueries",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
