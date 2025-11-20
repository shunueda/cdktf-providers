// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#annotations DnsProxy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#description DnsProxy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#disable DnsProxy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#id DnsProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#labels DnsProxy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#transport_type DnsProxy#transport_type}
  */
  readonly transportType: string;
  /**
  * cache_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#cache_profile DnsProxy#cache_profile}
  */
  readonly cacheProfile: DnsProxyCacheProfile;
  /**
  * ddos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ddos_profile DnsProxy#ddos_profile}
  */
  readonly ddosProfile: DnsProxyDdosProfile;
  /**
  * irules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#irules DnsProxy#irules}
  */
  readonly irules?: DnsProxyIrules[] | cdktf.IResolvable;
  /**
  * lb_algorithm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#lb_algorithm DnsProxy#lb_algorithm}
  */
  readonly lbAlgorithm?: DnsProxyLbAlgorithm;
  /**
  * origin_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#origin_servers DnsProxy#origin_servers}
  */
  readonly originServers: DnsProxyOriginServers;
  /**
  * protocol_inspection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#protocol_inspection DnsProxy#protocol_inspection}
  */
  readonly protocolInspection?: DnsProxyProtocolInspection;
  /**
  * proxy_advertisement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#proxy_advertisement DnsProxy#proxy_advertisement}
  */
  readonly proxyAdvertisement?: DnsProxyProxyAdvertisement;
}
export interface DnsProxyCacheProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#cache_size DnsProxy#cache_size}
  */
  readonly cacheSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#disable_cache_profile DnsProxy#disable_cache_profile}
  */
  readonly disableCacheProfile?: boolean | cdktf.IResolvable;
}

export function dnsProxyCacheProfileToTerraform(struct?: DnsProxyCacheProfileOutputReference | DnsProxyCacheProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_size: cdktf.numberToTerraform(struct!.cacheSize),
    disable_cache_profile: cdktf.booleanToTerraform(struct!.disableCacheProfile),
  }
}


export function dnsProxyCacheProfileToHclTerraform(struct?: DnsProxyCacheProfileOutputReference | DnsProxyCacheProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_size: {
      value: cdktf.numberToHclTerraform(struct!.cacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_cache_profile: {
      value: cdktf.booleanToHclTerraform(struct!.disableCacheProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyCacheProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyCacheProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSize = this._cacheSize;
    }
    if (this._disableCacheProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCacheProfile = this._disableCacheProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyCacheProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheSize = undefined;
      this._disableCacheProfile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheSize = value.cacheSize;
      this._disableCacheProfile = value.disableCacheProfile;
    }
  }

  // cache_size - computed: false, optional: true, required: false
  private _cacheSize?: number; 
  public get cacheSize() {
    return this.getNumberAttribute('cache_size');
  }
  public set cacheSize(value: number) {
    this._cacheSize = value;
  }
  public resetCacheSize() {
    this._cacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSizeInput() {
    return this._cacheSize;
  }

  // disable_cache_profile - computed: false, optional: true, required: false
  private _disableCacheProfile?: boolean | cdktf.IResolvable; 
  public get disableCacheProfile() {
    return this.getBooleanAttribute('disable_cache_profile');
  }
  public set disableCacheProfile(value: boolean | cdktf.IResolvable) {
    this._disableCacheProfile = value;
  }
  public resetDisableCacheProfile() {
    this._disableCacheProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCacheProfileInput() {
    return this._disableCacheProfile;
  }
}
export interface DnsProxyDdosProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#disable_ddos_mitigation DnsProxy#disable_ddos_mitigation}
  */
  readonly disableDdosMitigation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#enable_ddos_mitigation DnsProxy#enable_ddos_mitigation}
  */
  readonly enableDdosMitigation?: boolean | cdktf.IResolvable;
}

export function dnsProxyDdosProfileToTerraform(struct?: DnsProxyDdosProfileOutputReference | DnsProxyDdosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_ddos_mitigation: cdktf.booleanToTerraform(struct!.disableDdosMitigation),
    enable_ddos_mitigation: cdktf.booleanToTerraform(struct!.enableDdosMitigation),
  }
}


export function dnsProxyDdosProfileToHclTerraform(struct?: DnsProxyDdosProfileOutputReference | DnsProxyDdosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_ddos_mitigation: {
      value: cdktf.booleanToHclTerraform(struct!.disableDdosMitigation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ddos_mitigation: {
      value: cdktf.booleanToHclTerraform(struct!.enableDdosMitigation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyDdosProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyDdosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableDdosMitigation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDdosMitigation = this._disableDdosMitigation;
    }
    if (this._enableDdosMitigation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDdosMitigation = this._enableDdosMitigation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyDdosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableDdosMitigation = undefined;
      this._enableDdosMitigation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableDdosMitigation = value.disableDdosMitigation;
      this._enableDdosMitigation = value.enableDdosMitigation;
    }
  }

  // disable_ddos_mitigation - computed: false, optional: true, required: false
  private _disableDdosMitigation?: boolean | cdktf.IResolvable; 
  public get disableDdosMitigation() {
    return this.getBooleanAttribute('disable_ddos_mitigation');
  }
  public set disableDdosMitigation(value: boolean | cdktf.IResolvable) {
    this._disableDdosMitigation = value;
  }
  public resetDisableDdosMitigation() {
    this._disableDdosMitigation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDdosMitigationInput() {
    return this._disableDdosMitigation;
  }

  // enable_ddos_mitigation - computed: false, optional: true, required: false
  private _enableDdosMitigation?: boolean | cdktf.IResolvable; 
  public get enableDdosMitigation() {
    return this.getBooleanAttribute('enable_ddos_mitigation');
  }
  public set enableDdosMitigation(value: boolean | cdktf.IResolvable) {
    this._enableDdosMitigation = value;
  }
  public resetEnableDdosMitigation() {
    this._enableDdosMitigation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdosMitigationInput() {
    return this._enableDdosMitigation;
  }
}
export interface DnsProxyIrules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyIrulesToTerraform(struct?: DnsProxyIrules | cdktf.IResolvable): any {
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


export function dnsProxyIrulesToHclTerraform(struct?: DnsProxyIrules | cdktf.IResolvable): any {
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

export class DnsProxyIrulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyIrules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsProxyIrules | cdktf.IResolvable | undefined) {
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

export class DnsProxyIrulesList extends cdktf.ComplexList {
  public internalValue? : DnsProxyIrules[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyIrulesOutputReference {
    return new DnsProxyIrulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyLbAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#round_robin DnsProxy#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
}

export function dnsProxyLbAlgorithmToTerraform(struct?: DnsProxyLbAlgorithmOutputReference | DnsProxyLbAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    round_robin: cdktf.booleanToTerraform(struct!.roundRobin),
  }
}


export function dnsProxyLbAlgorithmToHclTerraform(struct?: DnsProxyLbAlgorithmOutputReference | DnsProxyLbAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    round_robin: {
      value: cdktf.booleanToHclTerraform(struct!.roundRobin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyLbAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyLbAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyLbAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roundRobin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roundRobin = value.roundRobin;
    }
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: boolean | cdktf.IResolvable; 
  public get roundRobin() {
    return this.getBooleanAttribute('round_robin');
  }
  public set roundRobin(value: boolean | cdktf.IResolvable) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }
}
export interface DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#expected_rcode DnsProxy#expected_rcode}
  */
  readonly expectedRcode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#expected_record_type DnsProxy#expected_record_type}
  */
  readonly expectedRecordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#expected_response DnsProxy#expected_response}
  */
  readonly expectedResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#query_name DnsProxy#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#query_type DnsProxy#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#reverse DnsProxy#reverse}
  */
  readonly reverse?: boolean | cdktf.IResolvable;
}

export function dnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckToTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckOutputReference | DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_rcode: cdktf.stringToTerraform(struct!.expectedRcode),
    expected_record_type: cdktf.stringToTerraform(struct!.expectedRecordType),
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    reverse: cdktf.booleanToTerraform(struct!.reverse),
  }
}


export function dnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckToHclTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckOutputReference | DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_rcode: {
      value: cdktf.stringToHclTerraform(struct!.expectedRcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_record_type: {
      value: cdktf.stringToHclTerraform(struct!.expectedRecordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse: {
      value: cdktf.booleanToHclTerraform(struct!.reverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedRcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedRcode = this._expectedRcode;
    }
    if (this._expectedRecordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedRecordType = this._expectedRecordType;
    }
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._reverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverse = this._reverse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedRcode = undefined;
      this._expectedRecordType = undefined;
      this._expectedResponse = undefined;
      this._queryName = undefined;
      this._queryType = undefined;
      this._reverse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedRcode = value.expectedRcode;
      this._expectedRecordType = value.expectedRecordType;
      this._expectedResponse = value.expectedResponse;
      this._queryName = value.queryName;
      this._queryType = value.queryType;
      this._reverse = value.reverse;
    }
  }

  // expected_rcode - computed: false, optional: false, required: true
  private _expectedRcode?: string; 
  public get expectedRcode() {
    return this.getStringAttribute('expected_rcode');
  }
  public set expectedRcode(value: string) {
    this._expectedRcode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedRcodeInput() {
    return this._expectedRcode;
  }

  // expected_record_type - computed: false, optional: false, required: true
  private _expectedRecordType?: string; 
  public get expectedRecordType() {
    return this.getStringAttribute('expected_record_type');
  }
  public set expectedRecordType(value: string) {
    this._expectedRecordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedRecordTypeInput() {
    return this._expectedRecordType;
  }

  // expected_response - computed: false, optional: false, required: true
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // reverse - computed: false, optional: true, required: false
  private _reverse?: boolean | cdktf.IResolvable; 
  public get reverse() {
    return this.getBooleanAttribute('reverse');
  }
  public set reverse(value: boolean | cdktf.IResolvable) {
    this._reverse = value;
  }
  public resetReverse() {
    this._reverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseInput() {
    return this._reverse;
  }
}
export interface DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#expected_response DnsProxy#expected_response}
  */
  readonly expectedResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#send_payload DnsProxy#send_payload}
  */
  readonly sendPayload: string;
}

export function dnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckToTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckOutputReference | DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    send_payload: cdktf.stringToTerraform(struct!.sendPayload),
  }
}


export function dnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckToHclTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckOutputReference | DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_payload: {
      value: cdktf.stringToHclTerraform(struct!.sendPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._sendPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPayload = this._sendPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedResponse = undefined;
      this._sendPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedResponse = value.expectedResponse;
      this._sendPayload = value.sendPayload;
    }
  }

  // expected_response - computed: false, optional: false, required: true
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // send_payload - computed: false, optional: false, required: true
  private _sendPayload?: string; 
  public get sendPayload() {
    return this.getStringAttribute('send_payload');
  }
  public set sendPayload(value: string) {
    this._sendPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPayloadInput() {
    return this._sendPayload;
  }
}
export interface DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#expected_response DnsProxy#expected_response}
  */
  readonly expectedResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#send_payload DnsProxy#send_payload}
  */
  readonly sendPayload: string;
}

export function dnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckToTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckOutputReference | DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    send_payload: cdktf.stringToTerraform(struct!.sendPayload),
  }
}


export function dnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckToHclTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckOutputReference | DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_payload: {
      value: cdktf.stringToHclTerraform(struct!.sendPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._sendPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPayload = this._sendPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedResponse = undefined;
      this._sendPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedResponse = value.expectedResponse;
      this._sendPayload = value.sendPayload;
    }
  }

  // expected_response - computed: false, optional: false, required: true
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // send_payload - computed: false, optional: false, required: true
  private _sendPayload?: string; 
  public get sendPayload() {
    return this.getStringAttribute('send_payload');
  }
  public set sendPayload(value: string) {
    this._sendPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPayloadInput() {
    return this._sendPayload;
  }
}
export interface DnsProxyOriginServersHealthChecksHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#icmp_health_check DnsProxy#icmp_health_check}
  */
  readonly icmpHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * dns_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#dns_health_check DnsProxy#dns_health_check}
  */
  readonly dnsHealthCheck?: DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck;
  /**
  * tcp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tcp_health_check DnsProxy#tcp_health_check}
  */
  readonly tcpHealthCheck?: DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck;
  /**
  * udp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#udp_health_check DnsProxy#udp_health_check}
  */
  readonly udpHealthCheck?: DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck;
}

export function dnsProxyOriginServersHealthChecksHealthCheckToTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_health_check: cdktf.booleanToTerraform(struct!.icmpHealthCheck),
    dns_health_check: dnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckToTerraform(struct!.dnsHealthCheck),
    tcp_health_check: dnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckToTerraform(struct!.tcpHealthCheck),
    udp_health_check: dnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckToTerraform(struct!.udpHealthCheck),
  }
}


export function dnsProxyOriginServersHealthChecksHealthCheckToHclTerraform(struct?: DnsProxyOriginServersHealthChecksHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.icmpHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dns_health_check: {
      value: dnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckToHclTerraform(struct!.dnsHealthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckList",
    },
    tcp_health_check: {
      value: dnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckToHclTerraform(struct!.tcpHealthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckList",
    },
    udp_health_check: {
      value: dnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckToHclTerraform(struct!.udpHealthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersHealthChecksHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyOriginServersHealthChecksHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpHealthCheck = this._icmpHealthCheck;
    }
    if (this._dnsHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsHealthCheck = this._dnsHealthCheck?.internalValue;
    }
    if (this._tcpHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpHealthCheck = this._tcpHealthCheck?.internalValue;
    }
    if (this._udpHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpHealthCheck = this._udpHealthCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersHealthChecksHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icmpHealthCheck = undefined;
      this._dnsHealthCheck.internalValue = undefined;
      this._tcpHealthCheck.internalValue = undefined;
      this._udpHealthCheck.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icmpHealthCheck = value.icmpHealthCheck;
      this._dnsHealthCheck.internalValue = value.dnsHealthCheck;
      this._tcpHealthCheck.internalValue = value.tcpHealthCheck;
      this._udpHealthCheck.internalValue = value.udpHealthCheck;
    }
  }

  // icmp_health_check - computed: false, optional: true, required: false
  private _icmpHealthCheck?: boolean | cdktf.IResolvable; 
  public get icmpHealthCheck() {
    return this.getBooleanAttribute('icmp_health_check');
  }
  public set icmpHealthCheck(value: boolean | cdktf.IResolvable) {
    this._icmpHealthCheck = value;
  }
  public resetIcmpHealthCheck() {
    this._icmpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpHealthCheckInput() {
    return this._icmpHealthCheck;
  }

  // dns_health_check - computed: false, optional: true, required: false
  private _dnsHealthCheck = new DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheckOutputReference(this, "dns_health_check");
  public get dnsHealthCheck() {
    return this._dnsHealthCheck;
  }
  public putDnsHealthCheck(value: DnsProxyOriginServersHealthChecksHealthCheckDnsHealthCheck) {
    this._dnsHealthCheck.internalValue = value;
  }
  public resetDnsHealthCheck() {
    this._dnsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHealthCheckInput() {
    return this._dnsHealthCheck.internalValue;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck = new DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheckOutputReference(this, "tcp_health_check");
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public putTcpHealthCheck(value: DnsProxyOriginServersHealthChecksHealthCheckTcpHealthCheck) {
    this._tcpHealthCheck.internalValue = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck.internalValue;
  }

  // udp_health_check - computed: false, optional: true, required: false
  private _udpHealthCheck = new DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheckOutputReference(this, "udp_health_check");
  public get udpHealthCheck() {
    return this._udpHealthCheck;
  }
  public putUdpHealthCheck(value: DnsProxyOriginServersHealthChecksHealthCheckUdpHealthCheck) {
    this._udpHealthCheck.internalValue = value;
  }
  public resetUdpHealthCheck() {
    this._udpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpHealthCheckInput() {
    return this._udpHealthCheck.internalValue;
  }
}

export class DnsProxyOriginServersHealthChecksHealthCheckList extends cdktf.ComplexList {
  public internalValue? : DnsProxyOriginServersHealthChecksHealthCheck[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyOriginServersHealthChecksHealthCheckOutputReference {
    return new DnsProxyOriginServersHealthChecksHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyOriginServersHealthChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#healthy_threshold DnsProxy#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#interval DnsProxy#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#jitter DnsProxy#jitter}
  */
  readonly jitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#jitter_percent DnsProxy#jitter_percent}
  */
  readonly jitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#timeout DnsProxy#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#unhealthy_threshold DnsProxy#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#health_check DnsProxy#health_check}
  */
  readonly healthCheck: DnsProxyOriginServersHealthChecksHealthCheck[] | cdktf.IResolvable;
}

export function dnsProxyOriginServersHealthChecksToTerraform(struct?: DnsProxyOriginServersHealthChecksOutputReference | DnsProxyOriginServersHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    jitter: cdktf.numberToTerraform(struct!.jitter),
    jitter_percent: cdktf.numberToTerraform(struct!.jitterPercent),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    health_check: cdktf.listMapper(dnsProxyOriginServersHealthChecksHealthCheckToTerraform, true)(struct!.healthCheck),
  }
}


export function dnsProxyOriginServersHealthChecksToHclTerraform(struct?: DnsProxyOriginServersHealthChecksOutputReference | DnsProxyOriginServersHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
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
    jitter: {
      value: cdktf.numberToHclTerraform(struct!.jitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_percent: {
      value: cdktf.numberToHclTerraform(struct!.jitterPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_check: {
      value: cdktf.listMapperHcl(dnsProxyOriginServersHealthChecksHealthCheckToHclTerraform, true)(struct!.healthCheck),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersHealthChecksHealthCheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersHealthChecksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitter = this._jitter;
    }
    if (this._jitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterPercent = this._jitterPercent;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._healthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersHealthChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._jitter = undefined;
      this._jitterPercent = undefined;
      this._timeout = undefined;
      this._unhealthyThreshold = undefined;
      this._healthCheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._jitter = value.jitter;
      this._jitterPercent = value.jitterPercent;
      this._timeout = value.timeout;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._healthCheck.internalValue = value.healthCheck;
    }
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // jitter - computed: false, optional: true, required: false
  private _jitter?: number; 
  public get jitter() {
    return this.getNumberAttribute('jitter');
  }
  public set jitter(value: number) {
    this._jitter = value;
  }
  public resetJitter() {
    this._jitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterInput() {
    return this._jitter;
  }

  // jitter_percent - computed: false, optional: true, required: false
  private _jitterPercent?: number; 
  public get jitterPercent() {
    return this.getNumberAttribute('jitter_percent');
  }
  public set jitterPercent(value: number) {
    this._jitterPercent = value;
  }
  public resetJitterPercent() {
    this._jitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterPercentInput() {
    return this._jitterPercent;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // health_check - computed: false, optional: false, required: true
  private _healthCheck = new DnsProxyOriginServersHealthChecksHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: DnsProxyOriginServersHealthChecksHealthCheck[] | cdktf.IResolvable) {
    this._healthCheck.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }
}
export interface DnsProxyOriginServersOriginServersK8SServiceServiceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#expressions DnsProxy#expressions}
  */
  readonly expressions: string[];
}

export function dnsProxyOriginServersOriginServersK8SServiceServiceSelectorToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceServiceSelectorOutputReference | DnsProxyOriginServersOriginServersK8SServiceServiceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function dnsProxyOriginServersOriginServersK8SServiceServiceSelectorToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceServiceSelectorOutputReference | DnsProxyOriginServersOriginServersK8SServiceServiceSelector): any {
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

export class DnsProxyOriginServersOriginServersK8SServiceServiceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SServiceServiceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SServiceServiceSelector | undefined) {
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
export interface DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteOutputReference | DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite): any {
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


export function dnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteOutputReference | DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite): any {
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

export class DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite | undefined {
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

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite | undefined) {
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
export interface DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference | DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite): any {
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


export function dnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference | DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite): any {
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

export class DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite | undefined {
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

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite | undefined) {
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
export interface DnsProxyOriginServersOriginServersK8SServiceSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site DnsProxy#site}
  */
  readonly site?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site DnsProxy#virtual_site}
  */
  readonly virtualSite?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite;
}

export function dnsProxyOriginServersOriginServersK8SServiceSiteLocatorToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorOutputReference | DnsProxyOriginServersOriginServersK8SServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: dnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: dnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function dnsProxyOriginServersOriginServersK8SServiceSiteLocatorToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorOutputReference | DnsProxyOriginServersOriginServersK8SServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: dnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteList",
    },
    virtual_site: {
      value: dnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOriginServersK8SServiceSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SServiceSiteLocator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SServiceSiteLocator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DnsProxyOriginServersOriginServersK8SServiceSiteLocatorVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6_prefixes DnsProxy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#prefixes DnsProxy#prefixes}
  */
  readonly prefixes?: string[];
}

export function dnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolOutputReference | DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function dnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolOutputReference | DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool): any {
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

export class DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool | undefined {
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

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool | undefined) {
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
export interface DnsProxyOriginServersOriginServersK8SServiceSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#no_snat_pool DnsProxy#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#snat_pool DnsProxy#snat_pool}
  */
  readonly snatPool?: DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool;
}

export function dnsProxyOriginServersOriginServersK8SServiceSnatPoolToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSnatPoolOutputReference | DnsProxyOriginServersOriginServersK8SServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: dnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function dnsProxyOriginServersOriginServersK8SServiceSnatPoolToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceSnatPoolOutputReference | DnsProxyOriginServersOriginServersK8SServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_snat_pool: {
      value: cdktf.booleanToHclTerraform(struct!.noSnatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snat_pool: {
      value: dnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOriginServersK8SServiceSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SServiceSnatPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noSnatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnatPool = this._noSnatPool;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SServiceSnatPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noSnatPool = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noSnatPool = value.noSnatPool;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // no_snat_pool - computed: false, optional: true, required: false
  private _noSnatPool?: boolean | cdktf.IResolvable; 
  public get noSnatPool() {
    return this.getBooleanAttribute('no_snat_pool');
  }
  public set noSnatPool(value: boolean | cdktf.IResolvable) {
    this._noSnatPool = value;
  }
  public resetNoSnatPool() {
    this._noSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnatPoolInput() {
    return this._noSnatPool;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: DnsProxyOriginServersOriginServersK8SServiceSnatPoolSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface DnsProxyOriginServersOriginServersK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#inside_network DnsProxy#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#outside_network DnsProxy#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#protocol DnsProxy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#service_name DnsProxy#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#vk8s_networks DnsProxy#vk8s_networks}
  */
  readonly vk8SNetworks?: boolean | cdktf.IResolvable;
  /**
  * service_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#service_selector DnsProxy#service_selector}
  */
  readonly serviceSelector?: DnsProxyOriginServersOriginServersK8SServiceServiceSelector;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site_locator DnsProxy#site_locator}
  */
  readonly siteLocator: DnsProxyOriginServersOriginServersK8SServiceSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#snat_pool DnsProxy#snat_pool}
  */
  readonly snatPool?: DnsProxyOriginServersOriginServersK8SServiceSnatPool;
}

export function dnsProxyOriginServersOriginServersK8SServiceToTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceOutputReference | DnsProxyOriginServersOriginServersK8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    vk8s_networks: cdktf.booleanToTerraform(struct!.vk8SNetworks),
    service_selector: dnsProxyOriginServersOriginServersK8SServiceServiceSelectorToTerraform(struct!.serviceSelector),
    site_locator: dnsProxyOriginServersOriginServersK8SServiceSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: dnsProxyOriginServersOriginServersK8SServiceSnatPoolToTerraform(struct!.snatPool),
  }
}


export function dnsProxyOriginServersOriginServersK8SServiceToHclTerraform(struct?: DnsProxyOriginServersOriginServersK8SServiceOutputReference | DnsProxyOriginServersOriginServersK8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inside_network: {
      value: cdktf.booleanToHclTerraform(struct!.insideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
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
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vk8s_networks: {
      value: cdktf.booleanToHclTerraform(struct!.vk8SNetworks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_selector: {
      value: dnsProxyOriginServersOriginServersK8SServiceServiceSelectorToHclTerraform(struct!.serviceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceServiceSelectorList",
    },
    site_locator: {
      value: dnsProxyOriginServersOriginServersK8SServiceSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceSiteLocatorList",
    },
    snat_pool: {
      value: dnsProxyOriginServersOriginServersK8SServiceSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOriginServersK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersK8SService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._vk8SNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SNetworks = this._vk8SNetworks;
    }
    if (this._serviceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSelector = this._serviceSelector?.internalValue;
    }
    if (this._siteLocator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocator = this._siteLocator?.internalValue;
    }
    if (this._snatPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersK8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._protocol = undefined;
      this._serviceName = undefined;
      this._vk8SNetworks = undefined;
      this._serviceSelector.internalValue = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNetwork = value.insideNetwork;
      this._outsideNetwork = value.outsideNetwork;
      this._protocol = value.protocol;
      this._serviceName = value.serviceName;
      this._vk8SNetworks = value.vk8SNetworks;
      this._serviceSelector.internalValue = value.serviceSelector;
      this._siteLocator.internalValue = value.siteLocator;
      this._snatPool.internalValue = value.snatPool;
    }
  }

  // inside_network - computed: false, optional: true, required: false
  private _insideNetwork?: boolean | cdktf.IResolvable; 
  public get insideNetwork() {
    return this.getBooleanAttribute('inside_network');
  }
  public set insideNetwork(value: boolean | cdktf.IResolvable) {
    this._insideNetwork = value;
  }
  public resetInsideNetwork() {
    this._insideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideNetworkInput() {
    return this._insideNetwork;
  }

  // outside_network - computed: false, optional: true, required: false
  private _outsideNetwork?: boolean | cdktf.IResolvable; 
  public get outsideNetwork() {
    return this.getBooleanAttribute('outside_network');
  }
  public set outsideNetwork(value: boolean | cdktf.IResolvable) {
    this._outsideNetwork = value;
  }
  public resetOutsideNetwork() {
    this._outsideNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideNetworkInput() {
    return this._outsideNetwork;
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

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // vk8s_networks - computed: false, optional: true, required: false
  private _vk8SNetworks?: boolean | cdktf.IResolvable; 
  public get vk8SNetworks() {
    return this.getBooleanAttribute('vk8s_networks');
  }
  public set vk8SNetworks(value: boolean | cdktf.IResolvable) {
    this._vk8SNetworks = value;
  }
  public resetVk8SNetworks() {
    this._vk8SNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SNetworksInput() {
    return this._vk8SNetworks;
  }

  // service_selector - computed: false, optional: true, required: false
  private _serviceSelector = new DnsProxyOriginServersOriginServersK8SServiceServiceSelectorOutputReference(this, "service_selector");
  public get serviceSelector() {
    return this._serviceSelector;
  }
  public putServiceSelector(value: DnsProxyOriginServersOriginServersK8SServiceServiceSelector) {
    this._serviceSelector.internalValue = value;
  }
  public resetServiceSelector() {
    this._serviceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSelectorInput() {
    return this._serviceSelector.internalValue;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new DnsProxyOriginServersOriginServersK8SServiceSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: DnsProxyOriginServersOriginServersK8SServiceSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new DnsProxyOriginServersOriginServersK8SServiceSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: DnsProxyOriginServersOriginServersK8SServiceSnatPool) {
    this._snatPool.internalValue = value;
  }
  public resetSnatPool() {
    this._snatPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool.internalValue;
  }
}
export interface DnsProxyOriginServersOriginServersPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ip DnsProxy#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6 DnsProxy#ipv6}
  */
  readonly ipv6?: string;
}

export function dnsProxyOriginServersOriginServersPublicIpToTerraform(struct?: DnsProxyOriginServersOriginServersPublicIpOutputReference | DnsProxyOriginServersOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dnsProxyOriginServersOriginServersPublicIpToHclTerraform(struct?: DnsProxyOriginServersOriginServersPublicIpOutputReference | DnsProxyOriginServersOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class DnsProxyOriginServersOriginServersPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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
export interface DnsProxyOriginServersOriginServersPublicName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#dns_name DnsProxy#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#refresh_interval DnsProxy#refresh_interval}
  */
  readonly refreshInterval?: number;
}

export function dnsProxyOriginServersOriginServersPublicNameToTerraform(struct?: DnsProxyOriginServersOriginServersPublicNameOutputReference | DnsProxyOriginServersOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}


export function dnsProxyOriginServersOriginServersPublicNameToHclTerraform(struct?: DnsProxyOriginServersOriginServersPublicNameOutputReference | DnsProxyOriginServersOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOriginServersPublicNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersPublicName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersPublicName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface DnsProxyOriginServersOriginServersSitePreferencesRefs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyOriginServersOriginServersSitePreferencesRefsToTerraform(struct?: DnsProxyOriginServersOriginServersSitePreferencesRefs | cdktf.IResolvable): any {
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


export function dnsProxyOriginServersOriginServersSitePreferencesRefsToHclTerraform(struct?: DnsProxyOriginServersOriginServersSitePreferencesRefs | cdktf.IResolvable): any {
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

export class DnsProxyOriginServersOriginServersSitePreferencesRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyOriginServersOriginServersSitePreferencesRefs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DnsProxyOriginServersOriginServersSitePreferencesRefs | cdktf.IResolvable | undefined) {
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

export class DnsProxyOriginServersOriginServersSitePreferencesRefsList extends cdktf.ComplexList {
  public internalValue? : DnsProxyOriginServersOriginServersSitePreferencesRefs[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyOriginServersOriginServersSitePreferencesRefsOutputReference {
    return new DnsProxyOriginServersOriginServersSitePreferencesRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyOriginServersOriginServersSitePreferences {
  /**
  * refs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#refs DnsProxy#refs}
  */
  readonly refs?: DnsProxyOriginServersOriginServersSitePreferencesRefs[] | cdktf.IResolvable;
}

export function dnsProxyOriginServersOriginServersSitePreferencesToTerraform(struct?: DnsProxyOriginServersOriginServersSitePreferencesOutputReference | DnsProxyOriginServersOriginServersSitePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refs: cdktf.listMapper(dnsProxyOriginServersOriginServersSitePreferencesRefsToTerraform, true)(struct!.refs),
  }
}


export function dnsProxyOriginServersOriginServersSitePreferencesToHclTerraform(struct?: DnsProxyOriginServersOriginServersSitePreferencesOutputReference | DnsProxyOriginServersOriginServersSitePreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refs: {
      value: cdktf.listMapperHcl(dnsProxyOriginServersOriginServersSitePreferencesRefsToHclTerraform, true)(struct!.refs),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersSitePreferencesRefsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOriginServersSitePreferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServersOriginServersSitePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refs = this._refs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServersSitePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refs.internalValue = value.refs;
    }
  }

  // refs - computed: false, optional: true, required: false
  private _refs = new DnsProxyOriginServersOriginServersSitePreferencesRefsList(this, "refs", false);
  public get refs() {
    return this._refs;
  }
  public putRefs(value: DnsProxyOriginServersOriginServersSitePreferencesRefs[] | cdktf.IResolvable) {
    this._refs.internalValue = value;
  }
  public resetRefs() {
    this._refs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refsInput() {
    return this._refs.internalValue;
  }
}
export interface DnsProxyOriginServersOriginServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#no_preference DnsProxy#no_preference}
  */
  readonly noPreference?: boolean | cdktf.IResolvable;
  /**
  * k8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#k8s_service DnsProxy#k8s_service}
  */
  readonly k8SService?: DnsProxyOriginServersOriginServersK8SService;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#public_ip DnsProxy#public_ip}
  */
  readonly publicIp?: DnsProxyOriginServersOriginServersPublicIp;
  /**
  * public_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#public_name DnsProxy#public_name}
  */
  readonly publicName?: DnsProxyOriginServersOriginServersPublicName;
  /**
  * site_preferences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site_preferences DnsProxy#site_preferences}
  */
  readonly sitePreferences?: DnsProxyOriginServersOriginServersSitePreferences;
}

export function dnsProxyOriginServersOriginServersToTerraform(struct?: DnsProxyOriginServersOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_preference: cdktf.booleanToTerraform(struct!.noPreference),
    k8s_service: dnsProxyOriginServersOriginServersK8SServiceToTerraform(struct!.k8SService),
    public_ip: dnsProxyOriginServersOriginServersPublicIpToTerraform(struct!.publicIp),
    public_name: dnsProxyOriginServersOriginServersPublicNameToTerraform(struct!.publicName),
    site_preferences: dnsProxyOriginServersOriginServersSitePreferencesToTerraform(struct!.sitePreferences),
  }
}


export function dnsProxyOriginServersOriginServersToHclTerraform(struct?: DnsProxyOriginServersOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_preference: {
      value: cdktf.booleanToHclTerraform(struct!.noPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    k8s_service: {
      value: dnsProxyOriginServersOriginServersK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersK8SServiceList",
    },
    public_ip: {
      value: dnsProxyOriginServersOriginServersPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersPublicIpList",
    },
    public_name: {
      value: dnsProxyOriginServersOriginServersPublicNameToHclTerraform(struct!.publicName),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersPublicNameList",
    },
    site_preferences: {
      value: dnsProxyOriginServersOriginServersSitePreferencesToHclTerraform(struct!.sitePreferences),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersSitePreferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOriginServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyOriginServersOriginServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPreference = this._noPreference;
    }
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    if (this._publicName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicName = this._publicName?.internalValue;
    }
    if (this._sitePreferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitePreferences = this._sitePreferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServersOriginServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noPreference = undefined;
      this._k8SService.internalValue = undefined;
      this._publicIp.internalValue = undefined;
      this._publicName.internalValue = undefined;
      this._sitePreferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noPreference = value.noPreference;
      this._k8SService.internalValue = value.k8SService;
      this._publicIp.internalValue = value.publicIp;
      this._publicName.internalValue = value.publicName;
      this._sitePreferences.internalValue = value.sitePreferences;
    }
  }

  // no_preference - computed: false, optional: true, required: false
  private _noPreference?: boolean | cdktf.IResolvable; 
  public get noPreference() {
    return this.getBooleanAttribute('no_preference');
  }
  public set noPreference(value: boolean | cdktf.IResolvable) {
    this._noPreference = value;
  }
  public resetNoPreference() {
    this._noPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPreferenceInput() {
    return this._noPreference;
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new DnsProxyOriginServersOriginServersK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: DnsProxyOriginServersOriginServersK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new DnsProxyOriginServersOriginServersPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: DnsProxyOriginServersOriginServersPublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }

  // public_name - computed: false, optional: true, required: false
  private _publicName = new DnsProxyOriginServersOriginServersPublicNameOutputReference(this, "public_name");
  public get publicName() {
    return this._publicName;
  }
  public putPublicName(value: DnsProxyOriginServersOriginServersPublicName) {
    this._publicName.internalValue = value;
  }
  public resetPublicName() {
    this._publicName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName.internalValue;
  }

  // site_preferences - computed: false, optional: true, required: false
  private _sitePreferences = new DnsProxyOriginServersOriginServersSitePreferencesOutputReference(this, "site_preferences");
  public get sitePreferences() {
    return this._sitePreferences;
  }
  public putSitePreferences(value: DnsProxyOriginServersOriginServersSitePreferences) {
    this._sitePreferences.internalValue = value;
  }
  public resetSitePreferences() {
    this._sitePreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePreferencesInput() {
    return this._sitePreferences.internalValue;
  }
}

export class DnsProxyOriginServersOriginServersList extends cdktf.ComplexList {
  public internalValue? : DnsProxyOriginServersOriginServers[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyOriginServersOriginServersOutputReference {
    return new DnsProxyOriginServersOriginServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyOriginServers {
  /**
  * health_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#health_checks DnsProxy#health_checks}
  */
  readonly healthChecks: DnsProxyOriginServersHealthChecks;
  /**
  * origin_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#origin_servers DnsProxy#origin_servers}
  */
  readonly originServers: DnsProxyOriginServersOriginServers[] | cdktf.IResolvable;
}

export function dnsProxyOriginServersToTerraform(struct?: DnsProxyOriginServersOutputReference | DnsProxyOriginServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_checks: dnsProxyOriginServersHealthChecksToTerraform(struct!.healthChecks),
    origin_servers: cdktf.listMapper(dnsProxyOriginServersOriginServersToTerraform, true)(struct!.originServers),
  }
}


export function dnsProxyOriginServersToHclTerraform(struct?: DnsProxyOriginServersOutputReference | DnsProxyOriginServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_checks: {
      value: dnsProxyOriginServersHealthChecksToHclTerraform(struct!.healthChecks),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersHealthChecksList",
    },
    origin_servers: {
      value: cdktf.listMapperHcl(dnsProxyOriginServersOriginServersToHclTerraform, true)(struct!.originServers),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyOriginServersOriginServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyOriginServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyOriginServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthChecks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthChecks = this._healthChecks?.internalValue;
    }
    if (this._originServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServers = this._originServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyOriginServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthChecks.internalValue = undefined;
      this._originServers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthChecks.internalValue = value.healthChecks;
      this._originServers.internalValue = value.originServers;
    }
  }

  // health_checks - computed: false, optional: false, required: true
  private _healthChecks = new DnsProxyOriginServersHealthChecksOutputReference(this, "health_checks");
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: DnsProxyOriginServersHealthChecks) {
    this._healthChecks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // origin_servers - computed: false, optional: false, required: true
  private _originServers = new DnsProxyOriginServersOriginServersList(this, "origin_servers", false);
  public get originServers() {
    return this._originServers;
  }
  public putOriginServers(value: DnsProxyOriginServersOriginServers[] | cdktf.IResolvable) {
    this._originServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServersInput() {
    return this._originServers.internalValue;
  }
}
export interface DnsProxyProtocolInspection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProtocolInspectionToTerraform(struct?: DnsProxyProtocolInspectionOutputReference | DnsProxyProtocolInspection): any {
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


export function dnsProxyProtocolInspectionToHclTerraform(struct?: DnsProxyProtocolInspectionOutputReference | DnsProxyProtocolInspection): any {
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

export class DnsProxyProtocolInspectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProtocolInspection | undefined {
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

  public set internalValue(value: DnsProxyProtocolInspection | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#public_ip DnsProxy#public_ip}
  */
  readonly publicIp: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ip DnsProxy#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6 DnsProxy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * cloud_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#cloud_edge DnsProxy#cloud_edge}
  */
  readonly cloudEdge: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#segment DnsProxy#segment}
  */
  readonly segment: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    cloud_edge: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToTerraform(struct!.cloudEdge),
    segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToTerraform(struct!.segment),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    cloud_edge: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeToHclTerraform(struct!.cloudEdge),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeList",
    },
    segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._cloudEdge?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudEdge = this._cloudEdge?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._cloudEdge.internalValue = undefined;
      this._segment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._cloudEdge.internalValue = value.cloudEdge;
      this._segment.internalValue = value.segment;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // cloud_edge - computed: false, optional: false, required: true
  private _cloudEdge = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdgeOutputReference(this, "cloud_edge");
  public get cloudEdge() {
    return this._cloudEdge;
  }
  public putCloudEdge(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentCloudEdge) {
    this._cloudEdge.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudEdgeInput() {
    return this._cloudEdge.internalValue;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv4_vip DnsProxy#ipv4_vip}
  */
  readonly ipv4Vip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6_vip DnsProxy#ipv6_vip}
  */
  readonly ipv6Vip?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#segment DnsProxy#segment}
  */
  readonly segment: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_vip: cdktf.stringToTerraform(struct!.ipv4Vip),
    ipv6_vip: cdktf.stringToTerraform(struct!.ipv6Vip),
    segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentToTerraform(struct!.segment),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_vip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_vip: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Vip = this._ipv4Vip;
    }
    if (this._ipv6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Vip = this._ipv6Vip;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4Vip = undefined;
      this._ipv6Vip = undefined;
      this._segment.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4Vip = value.ipv4Vip;
      this._ipv6Vip = value.ipv6Vip;
      this._segment.internalValue = value.segment;
    }
  }

  // ipv4_vip - computed: false, optional: false, required: true
  private _ipv4Vip?: string; 
  public get ipv4Vip() {
    return this.getStringAttribute('ipv4_vip');
  }
  public set ipv4Vip(value: string) {
    this._ipv4Vip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VipInput() {
    return this._ipv4Vip;
  }

  // ipv6_vip - computed: false, optional: true, required: false
  private _ipv6Vip?: string; 
  public get ipv6Vip() {
    return this.getStringAttribute('ipv6_vip');
  }
  public set ipv6Vip(value: string) {
    this._ipv6Vip = value;
  }
  public resetIpv6Vip() {
    this._ipv6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6VipInput() {
    return this._ipv6Vip;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ip DnsProxy#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6 DnsProxy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#network DnsProxy#network}
  */
  readonly network: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site DnsProxy#site}
  */
  readonly site: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct!.site),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // site - computed: false, optional: false, required: true
  private _site = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ip DnsProxy#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6 DnsProxy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#segment DnsProxy#segment}
  */
  readonly segment: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site DnsProxy#site}
  */
  readonly site: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct!.segment),
    site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct!.site),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentList",
    },
    site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // segment - computed: false, optional: false, required: true
  private _segment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site - computed: false, optional: false, required: true
  private _site = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#default_v6_vip DnsProxy#default_v6_vip}
  */
  readonly defaultV6Vip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#default_vip DnsProxy#default_vip}
  */
  readonly defaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#specific_v6_vip DnsProxy#specific_v6_vip}
  */
  readonly specificV6Vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#specific_vip DnsProxy#specific_vip}
  */
  readonly specificVip?: string;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_network DnsProxy#virtual_network}
  */
  readonly virtualNetwork: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_v6_vip: cdktf.booleanToTerraform(struct!.defaultV6Vip),
    default_vip: cdktf.booleanToTerraform(struct!.defaultVip),
    specific_v6_vip: cdktf.stringToTerraform(struct!.specificV6Vip),
    specific_vip: cdktf.stringToTerraform(struct!.specificVip),
    virtual_network: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct!.virtualNetwork),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_v6_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_v6_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultV6Vip = this._defaultV6Vip;
    }
    if (this._defaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVip = this._defaultVip;
    }
    if (this._specificV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificV6Vip = this._specificV6Vip;
    }
    if (this._specificVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificVip = this._specificVip;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultV6Vip = undefined;
      this._defaultVip = undefined;
      this._specificV6Vip = undefined;
      this._specificVip = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultV6Vip = value.defaultV6Vip;
      this._defaultVip = value.defaultVip;
      this._specificV6Vip = value.specificV6Vip;
      this._specificVip = value.specificVip;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // default_v6_vip - computed: false, optional: true, required: false
  private _defaultV6Vip?: boolean | cdktf.IResolvable; 
  public get defaultV6Vip() {
    return this.getBooleanAttribute('default_v6_vip');
  }
  public set defaultV6Vip(value: boolean | cdktf.IResolvable) {
    this._defaultV6Vip = value;
  }
  public resetDefaultV6Vip() {
    this._defaultV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultV6VipInput() {
    return this._defaultV6Vip;
  }

  // default_vip - computed: false, optional: true, required: false
  private _defaultVip?: boolean | cdktf.IResolvable; 
  public get defaultVip() {
    return this.getBooleanAttribute('default_vip');
  }
  public set defaultVip(value: boolean | cdktf.IResolvable) {
    this._defaultVip = value;
  }
  public resetDefaultVip() {
    this._defaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVipInput() {
    return this._defaultVip;
  }

  // specific_v6_vip - computed: false, optional: true, required: false
  private _specificV6Vip?: string; 
  public get specificV6Vip() {
    return this.getStringAttribute('specific_v6_vip');
  }
  public set specificV6Vip(value: string) {
    this._specificV6Vip = value;
  }
  public resetSpecificV6Vip() {
    this._specificV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificV6VipInput() {
    return this._specificV6Vip;
  }

  // specific_vip - computed: false, optional: true, required: false
  private _specificVip?: string; 
  public get specificVip() {
    return this.getStringAttribute('specific_vip');
  }
  public set specificVip(value: string) {
    this._specificVip = value;
  }
  public resetSpecificVip() {
    this._specificVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificVipInput() {
    return this._specificVip;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#network DnsProxy#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site DnsProxy#virtual_site}
  */
  readonly virtualSite: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ip DnsProxy#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6 DnsProxy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#segment DnsProxy#segment}
  */
  readonly segment: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site DnsProxy#virtual_site}
  */
  readonly virtualSite: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct!.segment),
    virtual_site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentList",
    },
    virtual_site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // segment - computed: false, optional: false, required: true
  private _segment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ip DnsProxy#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#ipv6 DnsProxy#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#network DnsProxy#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site DnsProxy#virtual_site}
  */
  readonly virtualSite: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
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


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
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

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site DnsProxy#site}
  */
  readonly site?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site DnsProxy#virtual_site}
  */
  readonly virtualSite?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct!.site),
    virtual_site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteList",
    },
    virtual_site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#port DnsProxy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#port_ranges DnsProxy#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#use_default_port DnsProxy#use_default_port}
  */
  readonly useDefaultPort?: boolean | cdktf.IResolvable;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#advertise_on_public DnsProxy#advertise_on_public}
  */
  readonly advertiseOnPublic?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic;
  /**
  * cloud_edge_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#cloud_edge_segment DnsProxy#cloud_edge_segment}
  */
  readonly cloudEdgeSegment?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#segment DnsProxy#segment}
  */
  readonly segment?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site DnsProxy#site}
  */
  readonly site?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite;
  /**
  * site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#site_segment DnsProxy#site_segment}
  */
  readonly siteSegment?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_network DnsProxy#virtual_network}
  */
  readonly virtualNetwork?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site DnsProxy#virtual_site}
  */
  readonly virtualSite?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite;
  /**
  * virtual_site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site_segment DnsProxy#virtual_site_segment}
  */
  readonly virtualSiteSegment?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment;
  /**
  * virtual_site_with_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#virtual_site_with_vip DnsProxy#virtual_site_with_vip}
  */
  readonly virtualSiteWithVip?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip;
  /**
  * vk8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#vk8s_service DnsProxy#vk8s_service}
  */
  readonly vk8SService?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    use_default_port: cdktf.booleanToTerraform(struct!.useDefaultPort),
    advertise_on_public: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct!.advertiseOnPublic),
    cloud_edge_segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToTerraform(struct!.cloudEdgeSegment),
    segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentToTerraform(struct!.segment),
    site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToTerraform(struct!.site),
    site_segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct!.siteSegment),
    virtual_network: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct!.virtualNetwork),
    virtual_site: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct!.virtualSite),
    virtual_site_segment: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct!.virtualSiteSegment),
    virtual_site_with_vip: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct!.virtualSiteWithVip),
    vk8s_service: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct!.vk8SService),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    use_default_port: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_public: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct!.advertiseOnPublic),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicList",
    },
    cloud_edge_segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentToHclTerraform(struct!.cloudEdgeSegment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentList",
    },
    segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentList",
    },
    site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteList",
    },
    site_segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct!.siteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentList",
    },
    virtual_network: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkList",
    },
    virtual_site: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteList",
    },
    virtual_site_segment: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct!.virtualSiteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentList",
    },
    virtual_site_with_vip: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct!.virtualSiteWithVip),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipList",
    },
    vk8s_service: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct!.vk8SService),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._useDefaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultPort = this._useDefaultPort;
    }
    if (this._advertiseOnPublic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublic = this._advertiseOnPublic?.internalValue;
    }
    if (this._cloudEdgeSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudEdgeSegment = this._cloudEdgeSegment?.internalValue;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._siteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteSegment = this._siteSegment?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    if (this._virtualSiteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteSegment = this._virtualSiteSegment?.internalValue;
    }
    if (this._virtualSiteWithVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteWithVip = this._virtualSiteWithVip?.internalValue;
    }
    if (this._vk8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SService = this._vk8SService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portRanges = undefined;
      this._useDefaultPort = undefined;
      this._advertiseOnPublic.internalValue = undefined;
      this._cloudEdgeSegment.internalValue = undefined;
      this._segment.internalValue = undefined;
      this._site.internalValue = undefined;
      this._siteSegment.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
      this._virtualSiteSegment.internalValue = undefined;
      this._virtualSiteWithVip.internalValue = undefined;
      this._vk8SService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portRanges = value.portRanges;
      this._useDefaultPort = value.useDefaultPort;
      this._advertiseOnPublic.internalValue = value.advertiseOnPublic;
      this._cloudEdgeSegment.internalValue = value.cloudEdgeSegment;
      this._segment.internalValue = value.segment;
      this._site.internalValue = value.site;
      this._siteSegment.internalValue = value.siteSegment;
      this._virtualNetwork.internalValue = value.virtualNetwork;
      this._virtualSite.internalValue = value.virtualSite;
      this._virtualSiteSegment.internalValue = value.virtualSiteSegment;
      this._virtualSiteWithVip.internalValue = value.virtualSiteWithVip;
      this._vk8SService.internalValue = value.vk8SService;
    }
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

  // use_default_port - computed: false, optional: true, required: false
  private _useDefaultPort?: boolean | cdktf.IResolvable; 
  public get useDefaultPort() {
    return this.getBooleanAttribute('use_default_port');
  }
  public set useDefaultPort(value: boolean | cdktf.IResolvable) {
    this._useDefaultPort = value;
  }
  public resetUseDefaultPort() {
    this._useDefaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPortInput() {
    return this._useDefaultPort;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }

  // cloud_edge_segment - computed: false, optional: true, required: false
  private _cloudEdgeSegment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegmentOutputReference(this, "cloud_edge_segment");
  public get cloudEdgeSegment() {
    return this._cloudEdgeSegment;
  }
  public putCloudEdgeSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereCloudEdgeSegment) {
    this._cloudEdgeSegment.internalValue = value;
  }
  public resetCloudEdgeSegment() {
    this._cloudEdgeSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudEdgeSegmentInput() {
    return this._cloudEdgeSegment.internalValue;
  }

  // segment - computed: false, optional: true, required: false
  private _segment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // site_segment - computed: false, optional: true, required: false
  private _siteSegment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference(this, "site_segment");
  public get siteSegment() {
    return this._siteSegment;
  }
  public putSiteSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment) {
    this._siteSegment.internalValue = value;
  }
  public resetSiteSegment() {
    this._siteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSegmentInput() {
    return this._siteSegment.internalValue;
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }

  // virtual_site_segment - computed: false, optional: true, required: false
  private _virtualSiteSegment = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference(this, "virtual_site_segment");
  public get virtualSiteSegment() {
    return this._virtualSiteSegment;
  }
  public putVirtualSiteSegment(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment) {
    this._virtualSiteSegment.internalValue = value;
  }
  public resetVirtualSiteSegment() {
    this._virtualSiteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteSegmentInput() {
    return this._virtualSiteSegment.internalValue;
  }

  // virtual_site_with_vip - computed: false, optional: true, required: false
  private _virtualSiteWithVip = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference(this, "virtual_site_with_vip");
  public get virtualSiteWithVip() {
    return this._virtualSiteWithVip;
  }
  public putVirtualSiteWithVip(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip) {
    this._virtualSiteWithVip.internalValue = value;
  }
  public resetVirtualSiteWithVip() {
    this._virtualSiteWithVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteWithVipInput() {
    return this._virtualSiteWithVip.internalValue;
  }

  // vk8s_service - computed: false, optional: true, required: false
  private _vk8SService = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference(this, "vk8s_service");
  public get vk8SService() {
    return this._vk8SService;
  }
  public putVk8SService(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService) {
    this._vk8SService.internalValue = value;
  }
  public resetVk8SService() {
    this._vk8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SServiceInput() {
    return this._vk8SService.internalValue;
  }
}

export class DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereList extends cdktf.ComplexList {
  public internalValue? : DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable

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
  public get(index: number): DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereOutputReference {
    return new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseCustom {
  /**
  * advertise_where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#advertise_where DnsProxy#advertise_where}
  */
  readonly advertiseWhere: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable;
}

export function dnsProxyProxyAdvertisementAdvertiseCustomToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomOutputReference | DnsProxyProxyAdvertisementAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_where: cdktf.listMapper(dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereToTerraform, true)(struct!.advertiseWhere),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseCustomToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseCustomOutputReference | DnsProxyProxyAdvertisementAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_where: {
      value: cdktf.listMapperHcl(dnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereToHclTerraform, true)(struct!.advertiseWhere),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseWhere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseWhere = this._advertiseWhere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseWhere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseWhere.internalValue = value.advertiseWhere;
    }
  }

  // advertise_where - computed: false, optional: false, required: true
  private _advertiseWhere = new DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhereList(this, "advertise_where", false);
  public get advertiseWhere() {
    return this._advertiseWhere;
  }
  public putAdvertiseWhere(value: DnsProxyProxyAdvertisementAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable) {
    this._advertiseWhere.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseWhereInput() {
    return this._advertiseWhere.internalValue;
  }
}
export interface DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#name DnsProxy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#namespace DnsProxy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#tenant DnsProxy#tenant}
  */
  readonly tenant?: string;
}

export function dnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference | DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp): any {
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


export function dnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference | DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp): any {
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

export class DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp | undefined {
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

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp | undefined) {
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
export interface DnsProxyProxyAdvertisementAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#public_ip DnsProxy#public_ip}
  */
  readonly publicIp: DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp;
}

export function dnsProxyProxyAdvertisementAdvertiseOnPublicToTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseOnPublicOutputReference | DnsProxyProxyAdvertisementAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: dnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function dnsProxyProxyAdvertisementAdvertiseOnPublicToHclTerraform(struct?: DnsProxyProxyAdvertisementAdvertiseOnPublicOutputReference | DnsProxyProxyAdvertisementAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: dnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisementAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisementAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: DnsProxyProxyAdvertisementAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface DnsProxyProxyAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#advertise_on_public_default_vip DnsProxy#advertise_on_public_default_vip}
  */
  readonly advertiseOnPublicDefaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#do_not_advertise DnsProxy#do_not_advertise}
  */
  readonly doNotAdvertise?: boolean | cdktf.IResolvable;
  /**
  * advertise_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#advertise_custom DnsProxy#advertise_custom}
  */
  readonly advertiseCustom?: DnsProxyProxyAdvertisementAdvertiseCustom;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#advertise_on_public DnsProxy#advertise_on_public}
  */
  readonly advertiseOnPublic?: DnsProxyProxyAdvertisementAdvertiseOnPublic;
}

export function dnsProxyProxyAdvertisementToTerraform(struct?: DnsProxyProxyAdvertisementOutputReference | DnsProxyProxyAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_public_default_vip: cdktf.booleanToTerraform(struct!.advertiseOnPublicDefaultVip),
    do_not_advertise: cdktf.booleanToTerraform(struct!.doNotAdvertise),
    advertise_custom: dnsProxyProxyAdvertisementAdvertiseCustomToTerraform(struct!.advertiseCustom),
    advertise_on_public: dnsProxyProxyAdvertisementAdvertiseOnPublicToTerraform(struct!.advertiseOnPublic),
  }
}


export function dnsProxyProxyAdvertisementToHclTerraform(struct?: DnsProxyProxyAdvertisementOutputReference | DnsProxyProxyAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_public_default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnPublicDefaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_advertise: {
      value: cdktf.booleanToHclTerraform(struct!.doNotAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_custom: {
      value: dnsProxyProxyAdvertisementAdvertiseCustomToHclTerraform(struct!.advertiseCustom),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseCustomList",
    },
    advertise_on_public: {
      value: dnsProxyProxyAdvertisementAdvertiseOnPublicToHclTerraform(struct!.advertiseOnPublic),
      isBlock: true,
      type: "list",
      storageClassType: "DnsProxyProxyAdvertisementAdvertiseOnPublicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsProxyProxyAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsProxyProxyAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnPublicDefaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublicDefaultVip = this._advertiseOnPublicDefaultVip;
    }
    if (this._doNotAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotAdvertise = this._doNotAdvertise;
    }
    if (this._advertiseCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseCustom = this._advertiseCustom?.internalValue;
    }
    if (this._advertiseOnPublic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublic = this._advertiseOnPublic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsProxyProxyAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnPublicDefaultVip = undefined;
      this._doNotAdvertise = undefined;
      this._advertiseCustom.internalValue = undefined;
      this._advertiseOnPublic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnPublicDefaultVip = value.advertiseOnPublicDefaultVip;
      this._doNotAdvertise = value.doNotAdvertise;
      this._advertiseCustom.internalValue = value.advertiseCustom;
      this._advertiseOnPublic.internalValue = value.advertiseOnPublic;
    }
  }

  // advertise_on_public_default_vip - computed: false, optional: true, required: false
  private _advertiseOnPublicDefaultVip?: boolean | cdktf.IResolvable; 
  public get advertiseOnPublicDefaultVip() {
    return this.getBooleanAttribute('advertise_on_public_default_vip');
  }
  public set advertiseOnPublicDefaultVip(value: boolean | cdktf.IResolvable) {
    this._advertiseOnPublicDefaultVip = value;
  }
  public resetAdvertiseOnPublicDefaultVip() {
    this._advertiseOnPublicDefaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicDefaultVipInput() {
    return this._advertiseOnPublicDefaultVip;
  }

  // do_not_advertise - computed: false, optional: true, required: false
  private _doNotAdvertise?: boolean | cdktf.IResolvable; 
  public get doNotAdvertise() {
    return this.getBooleanAttribute('do_not_advertise');
  }
  public set doNotAdvertise(value: boolean | cdktf.IResolvable) {
    this._doNotAdvertise = value;
  }
  public resetDoNotAdvertise() {
    this._doNotAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotAdvertiseInput() {
    return this._doNotAdvertise;
  }

  // advertise_custom - computed: false, optional: true, required: false
  private _advertiseCustom = new DnsProxyProxyAdvertisementAdvertiseCustomOutputReference(this, "advertise_custom");
  public get advertiseCustom() {
    return this._advertiseCustom;
  }
  public putAdvertiseCustom(value: DnsProxyProxyAdvertisementAdvertiseCustom) {
    this._advertiseCustom.internalValue = value;
  }
  public resetAdvertiseCustom() {
    this._advertiseCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseCustomInput() {
    return this._advertiseCustom.internalValue;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new DnsProxyProxyAdvertisementAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: DnsProxyProxyAdvertisementAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy volterra_dns_proxy}
*/
export class DnsProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_dns_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsProxy to import
  * @param importFromId The id of the existing DnsProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_dns_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/dns_proxy volterra_dns_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsProxyConfig
  */
  public constructor(scope: Construct, id: string, config: DnsProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_dns_proxy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
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
    this._transportType = config.transportType;
    this._cacheProfile.internalValue = config.cacheProfile;
    this._ddosProfile.internalValue = config.ddosProfile;
    this._irules.internalValue = config.irules;
    this._lbAlgorithm.internalValue = config.lbAlgorithm;
    this._originServers.internalValue = config.originServers;
    this._protocolInspection.internalValue = config.protocolInspection;
    this._proxyAdvertisement.internalValue = config.proxyAdvertisement;
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

  // transport_type - computed: false, optional: false, required: true
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // cache_profile - computed: false, optional: false, required: true
  private _cacheProfile = new DnsProxyCacheProfileOutputReference(this, "cache_profile");
  public get cacheProfile() {
    return this._cacheProfile;
  }
  public putCacheProfile(value: DnsProxyCacheProfile) {
    this._cacheProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheProfileInput() {
    return this._cacheProfile.internalValue;
  }

  // ddos_profile - computed: false, optional: false, required: true
  private _ddosProfile = new DnsProxyDdosProfileOutputReference(this, "ddos_profile");
  public get ddosProfile() {
    return this._ddosProfile;
  }
  public putDdosProfile(value: DnsProxyDdosProfile) {
    this._ddosProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProfileInput() {
    return this._ddosProfile.internalValue;
  }

  // irules - computed: false, optional: true, required: false
  private _irules = new DnsProxyIrulesList(this, "irules", false);
  public get irules() {
    return this._irules;
  }
  public putIrules(value: DnsProxyIrules[] | cdktf.IResolvable) {
    this._irules.internalValue = value;
  }
  public resetIrules() {
    this._irules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get irulesInput() {
    return this._irules.internalValue;
  }

  // lb_algorithm - computed: false, optional: true, required: false
  private _lbAlgorithm = new DnsProxyLbAlgorithmOutputReference(this, "lb_algorithm");
  public get lbAlgorithm() {
    return this._lbAlgorithm;
  }
  public putLbAlgorithm(value: DnsProxyLbAlgorithm) {
    this._lbAlgorithm.internalValue = value;
  }
  public resetLbAlgorithm() {
    this._lbAlgorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmInput() {
    return this._lbAlgorithm.internalValue;
  }

  // origin_servers - computed: false, optional: false, required: true
  private _originServers = new DnsProxyOriginServersOutputReference(this, "origin_servers");
  public get originServers() {
    return this._originServers;
  }
  public putOriginServers(value: DnsProxyOriginServers) {
    this._originServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServersInput() {
    return this._originServers.internalValue;
  }

  // protocol_inspection - computed: false, optional: true, required: false
  private _protocolInspection = new DnsProxyProtocolInspectionOutputReference(this, "protocol_inspection");
  public get protocolInspection() {
    return this._protocolInspection;
  }
  public putProtocolInspection(value: DnsProxyProtocolInspection) {
    this._protocolInspection.internalValue = value;
  }
  public resetProtocolInspection() {
    this._protocolInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInspectionInput() {
    return this._protocolInspection.internalValue;
  }

  // proxy_advertisement - computed: false, optional: true, required: false
  private _proxyAdvertisement = new DnsProxyProxyAdvertisementOutputReference(this, "proxy_advertisement");
  public get proxyAdvertisement() {
    return this._proxyAdvertisement;
  }
  public putProxyAdvertisement(value: DnsProxyProxyAdvertisement) {
    this._proxyAdvertisement.internalValue = value;
  }
  public resetProxyAdvertisement() {
    this._proxyAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAdvertisementInput() {
    return this._proxyAdvertisement.internalValue;
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
      transport_type: cdktf.stringToTerraform(this._transportType),
      cache_profile: dnsProxyCacheProfileToTerraform(this._cacheProfile.internalValue),
      ddos_profile: dnsProxyDdosProfileToTerraform(this._ddosProfile.internalValue),
      irules: cdktf.listMapper(dnsProxyIrulesToTerraform, true)(this._irules.internalValue),
      lb_algorithm: dnsProxyLbAlgorithmToTerraform(this._lbAlgorithm.internalValue),
      origin_servers: dnsProxyOriginServersToTerraform(this._originServers.internalValue),
      protocol_inspection: dnsProxyProtocolInspectionToTerraform(this._protocolInspection.internalValue),
      proxy_advertisement: dnsProxyProxyAdvertisementToTerraform(this._proxyAdvertisement.internalValue),
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
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_profile: {
        value: dnsProxyCacheProfileToHclTerraform(this._cacheProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyCacheProfileList",
      },
      ddos_profile: {
        value: dnsProxyDdosProfileToHclTerraform(this._ddosProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyDdosProfileList",
      },
      irules: {
        value: cdktf.listMapperHcl(dnsProxyIrulesToHclTerraform, true)(this._irules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyIrulesList",
      },
      lb_algorithm: {
        value: dnsProxyLbAlgorithmToHclTerraform(this._lbAlgorithm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyLbAlgorithmList",
      },
      origin_servers: {
        value: dnsProxyOriginServersToHclTerraform(this._originServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyOriginServersList",
      },
      protocol_inspection: {
        value: dnsProxyProtocolInspectionToHclTerraform(this._protocolInspection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyProtocolInspectionList",
      },
      proxy_advertisement: {
        value: dnsProxyProxyAdvertisementToHclTerraform(this._proxyAdvertisement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsProxyProxyAdvertisementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
