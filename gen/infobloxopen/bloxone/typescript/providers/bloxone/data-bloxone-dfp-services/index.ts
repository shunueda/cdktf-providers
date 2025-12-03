// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDfpServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#filters DataBloxoneDfpServices#filters}
  */
  readonly filters?: { [key: string]: string };
}
export interface DataBloxoneDfpServicesResultsHost {
  /**
  * The DNS Forwarding Proxy legacy ID object identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#legacy_host_id DataBloxoneDfpServices#legacy_host_id}
  */
  readonly legacyHostId?: number;
}

export function dataBloxoneDfpServicesResultsHostToTerraform(struct?: DataBloxoneDfpServicesResultsHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    legacy_host_id: cdktf.numberToTerraform(struct!.legacyHostId),
  }
}


export function dataBloxoneDfpServicesResultsHostToHclTerraform(struct?: DataBloxoneDfpServicesResultsHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    legacy_host_id: {
      value: cdktf.numberToHclTerraform(struct!.legacyHostId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDfpServicesResultsHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDfpServicesResultsHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._legacyHostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHostId = this._legacyHostId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDfpServicesResultsHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._legacyHostId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._legacyHostId = value.legacyHostId;
    }
  }

  // legacy_host_id - computed: true, optional: true, required: false
  private _legacyHostId?: number; 
  public get legacyHostId() {
    return this.getNumberAttribute('legacy_host_id');
  }
  public set legacyHostId(value: number) {
    this._legacyHostId = value;
  }
  public resetLegacyHostId() {
    this._legacyHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHostIdInput() {
    return this._legacyHostId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
}

export class DataBloxoneDfpServicesResultsHostList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDfpServicesResultsHost[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDfpServicesResultsHostOutputReference {
    return new DataBloxoneDfpServicesResultsHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDfpServicesResultsNetAddrPolicyIds {
  /**
  * Network address in IPv4 CIDR (address/bitmask length) string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#addr_net DataBloxoneDfpServices#addr_net}
  */
  readonly addrNet?: string;
  /**
  * Identifier of the security policy associated with this address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#policy_id DataBloxoneDfpServices#policy_id}
  */
  readonly policyId?: number;
}

export function dataBloxoneDfpServicesResultsNetAddrPolicyIdsToTerraform(struct?: DataBloxoneDfpServicesResultsNetAddrPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_net: cdktf.stringToTerraform(struct!.addrNet),
    policy_id: cdktf.numberToTerraform(struct!.policyId),
  }
}


export function dataBloxoneDfpServicesResultsNetAddrPolicyIdsToHclTerraform(struct?: DataBloxoneDfpServicesResultsNetAddrPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_net: {
      value: cdktf.stringToHclTerraform(struct!.addrNet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_id: {
      value: cdktf.numberToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDfpServicesResultsNetAddrPolicyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDfpServicesResultsNetAddrPolicyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrNet !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrNet = this._addrNet;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDfpServicesResultsNetAddrPolicyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrNet = undefined;
      this._policyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrNet = value.addrNet;
      this._policyId = value.policyId;
    }
  }

  // addr_net - computed: true, optional: true, required: false
  private _addrNet?: string; 
  public get addrNet() {
    return this.getStringAttribute('addr_net');
  }
  public set addrNet(value: string) {
    this._addrNet = value;
  }
  public resetAddrNet() {
    this._addrNet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrNetInput() {
    return this._addrNet;
  }

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: number; 
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }
  public set policyId(value: number) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }
}

export class DataBloxoneDfpServicesResultsNetAddrPolicyIdsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDfpServicesResultsNetAddrPolicyIds[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDfpServicesResultsNetAddrPolicyIdsOutputReference {
    return new DataBloxoneDfpServicesResultsNetAddrPolicyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDfpServicesResultsResolversAll {
  /**
  * Address that can be used as resolver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#address DataBloxoneDfpServices#address}
  */
  readonly address?: string;
  /**
  * Mark it true to set default DNS resolvers that will be used in case if the BloxOne Cloud is unreachable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#is_fallback DataBloxoneDfpServices#is_fallback}
  */
  readonly isFallback?: boolean | cdktf.IResolvable;
  /**
  * Mark it true to set internal or local DNS servers' IPv4 or IPv6 addresses that are used as DNS resolvers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#is_local DataBloxoneDfpServices#is_local}
  */
  readonly isLocal?: boolean | cdktf.IResolvable;
  /**
  * The list of DNS resolver communication protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#protocols DataBloxoneDfpServices#protocols}
  */
  readonly protocols?: string[];
}

export function dataBloxoneDfpServicesResultsResolversAllToTerraform(struct?: DataBloxoneDfpServicesResultsResolversAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    is_fallback: cdktf.booleanToTerraform(struct!.isFallback),
    is_local: cdktf.booleanToTerraform(struct!.isLocal),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
  }
}


export function dataBloxoneDfpServicesResultsResolversAllToHclTerraform(struct?: DataBloxoneDfpServicesResultsResolversAll | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_fallback: {
      value: cdktf.booleanToHclTerraform(struct!.isFallback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_local: {
      value: cdktf.booleanToHclTerraform(struct!.isLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDfpServicesResultsResolversAllOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDfpServicesResultsResolversAll | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._isFallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFallback = this._isFallback;
    }
    if (this._isLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.isLocal = this._isLocal;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDfpServicesResultsResolversAll | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._isFallback = undefined;
      this._isLocal = undefined;
      this._protocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._isFallback = value.isFallback;
      this._isLocal = value.isLocal;
      this._protocols = value.protocols;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // is_fallback - computed: true, optional: true, required: false
  private _isFallback?: boolean | cdktf.IResolvable; 
  public get isFallback() {
    return this.getBooleanAttribute('is_fallback');
  }
  public set isFallback(value: boolean | cdktf.IResolvable) {
    this._isFallback = value;
  }
  public resetIsFallback() {
    this._isFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFallbackInput() {
    return this._isFallback;
  }

  // is_local - computed: true, optional: true, required: false
  private _isLocal?: boolean | cdktf.IResolvable; 
  public get isLocal() {
    return this.getBooleanAttribute('is_local');
  }
  public set isLocal(value: boolean | cdktf.IResolvable) {
    this._isLocal = value;
  }
  public resetIsLocal() {
    this._isLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLocalInput() {
    return this._isLocal;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }
}

export class DataBloxoneDfpServicesResultsResolversAllList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDfpServicesResultsResolversAll[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDfpServicesResultsResolversAllOutputReference {
    return new DataBloxoneDfpServicesResultsResolversAllOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDfpServicesResults {
  /**
  * Policy Identifier for DNS Forwarding Proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#forwarding_policy DataBloxoneDfpServices#forwarding_policy}
  */
  readonly forwardingPolicy?: string;
  /**
  * The list of internal domains list IDs that are associated with this DFP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#internal_domain_lists DataBloxoneDfpServices#internal_domain_lists}
  */
  readonly internalDomainLists?: number[];
  /**
  * List of network-address-scoped security policy assignments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#net_addr_policy_ids DataBloxoneDfpServices#net_addr_policy_ids}
  */
  readonly netAddrPolicyIds?: DataBloxoneDfpServicesResultsNetAddrPolicyIds[] | cdktf.IResolvable;
  /**
  * List of DNS resolvers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#resolvers_all DataBloxoneDfpServices#resolvers_all}
  */
  readonly resolversAll?: DataBloxoneDfpServicesResultsResolversAll[] | cdktf.IResolvable;
  /**
  * The On-Prem Application Service identifier. For internal Use only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#service_id DataBloxoneDfpServices#service_id}
  */
  readonly serviceId: string;
}

export function dataBloxoneDfpServicesResultsToTerraform(struct?: DataBloxoneDfpServicesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_policy: cdktf.stringToTerraform(struct!.forwardingPolicy),
    internal_domain_lists: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.internalDomainLists),
    net_addr_policy_ids: cdktf.listMapper(dataBloxoneDfpServicesResultsNetAddrPolicyIdsToTerraform, false)(struct!.netAddrPolicyIds),
    resolvers_all: cdktf.listMapper(dataBloxoneDfpServicesResultsResolversAllToTerraform, false)(struct!.resolversAll),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
  }
}


export function dataBloxoneDfpServicesResultsToHclTerraform(struct?: DataBloxoneDfpServicesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forwarding_policy: {
      value: cdktf.stringToHclTerraform(struct!.forwardingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_domain_lists: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.internalDomainLists),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    net_addr_policy_ids: {
      value: cdktf.listMapperHcl(dataBloxoneDfpServicesResultsNetAddrPolicyIdsToHclTerraform, false)(struct!.netAddrPolicyIds),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDfpServicesResultsNetAddrPolicyIdsList",
    },
    resolvers_all: {
      value: cdktf.listMapperHcl(dataBloxoneDfpServicesResultsResolversAllToHclTerraform, false)(struct!.resolversAll),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDfpServicesResultsResolversAllList",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDfpServicesResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneDfpServicesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingPolicy = this._forwardingPolicy;
    }
    if (this._internalDomainLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDomainLists = this._internalDomainLists;
    }
    if (this._netAddrPolicyIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netAddrPolicyIds = this._netAddrPolicyIds?.internalValue;
    }
    if (this._resolversAll?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolversAll = this._resolversAll?.internalValue;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDfpServicesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardingPolicy = undefined;
      this._internalDomainLists = undefined;
      this._netAddrPolicyIds.internalValue = undefined;
      this._resolversAll.internalValue = undefined;
      this._serviceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardingPolicy = value.forwardingPolicy;
      this._internalDomainLists = value.internalDomainLists;
      this._netAddrPolicyIds.internalValue = value.netAddrPolicyIds;
      this._resolversAll.internalValue = value.resolversAll;
      this._serviceId = value.serviceId;
    }
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // elb_ip_list - computed: true, optional: false, required: false
  public get elbIpList() {
    return this.getListAttribute('elb_ip_list');
  }

  // forwarding_policy - computed: true, optional: true, required: false
  private _forwardingPolicy?: string; 
  public get forwardingPolicy() {
    return this.getStringAttribute('forwarding_policy');
  }
  public set forwardingPolicy(value: string) {
    this._forwardingPolicy = value;
  }
  public resetForwardingPolicy() {
    this._forwardingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingPolicyInput() {
    return this._forwardingPolicy;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataBloxoneDfpServicesResultsHostList(this, "host", false);
  public get host() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // internal_domain_lists - computed: true, optional: true, required: false
  private _internalDomainLists?: number[]; 
  public get internalDomainLists() {
    return this.getNumberListAttribute('internal_domain_lists');
  }
  public set internalDomainLists(value: number[]) {
    this._internalDomainLists = value;
  }
  public resetInternalDomainLists() {
    this._internalDomainLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDomainListsInput() {
    return this._internalDomainLists;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // net_addr_policy_ids - computed: true, optional: true, required: false
  private _netAddrPolicyIds = new DataBloxoneDfpServicesResultsNetAddrPolicyIdsList(this, "net_addr_policy_ids", false);
  public get netAddrPolicyIds() {
    return this._netAddrPolicyIds;
  }
  public putNetAddrPolicyIds(value: DataBloxoneDfpServicesResultsNetAddrPolicyIds[] | cdktf.IResolvable) {
    this._netAddrPolicyIds.internalValue = value;
  }
  public resetNetAddrPolicyIds() {
    this._netAddrPolicyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netAddrPolicyIdsInput() {
    return this._netAddrPolicyIds.internalValue;
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // pop_region_id - computed: true, optional: false, required: false
  public get popRegionId() {
    return this.getNumberAttribute('pop_region_id');
  }

  // resolvers_all - computed: true, optional: true, required: false
  private _resolversAll = new DataBloxoneDfpServicesResultsResolversAllList(this, "resolvers_all", false);
  public get resolversAll() {
    return this._resolversAll;
  }
  public putResolversAll(value: DataBloxoneDfpServicesResultsResolversAll[] | cdktf.IResolvable) {
    this._resolversAll.internalValue = value;
  }
  public resetResolversAll() {
    this._resolversAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolversAllInput() {
    return this._resolversAll.internalValue;
  }

  // service_id - computed: true, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }
}

export class DataBloxoneDfpServicesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDfpServicesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDfpServicesResultsOutputReference {
    return new DataBloxoneDfpServicesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services bloxone_dfp_services}
*/
export class DataBloxoneDfpServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dfp_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDfpServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDfpServices to import
  * @param importFromId The id of the existing DataBloxoneDfpServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDfpServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dfp_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dfp_services bloxone_dfp_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDfpServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDfpServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dfp_services',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneDfpServicesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
