// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkLoadBalancerBackendSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#id DataOciNetworkLoadBalancerBackendSets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#network_load_balancer_id DataOciNetworkLoadBalancerBackendSets#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#filter DataOciNetworkLoadBalancerBackendSets#filter}
  */
  readonly filter?: DataOciNetworkLoadBalancerBackendSetsFilter[] | cdktf.IResolvable;
}
export interface DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends {
}

export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackends | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_backup - computed: true, optional: false, required: false
  public get isBackup() {
    return this.getBooleanAttribute('is_backup');
  }

  // is_drain - computed: true, optional: false, required: false
  public get isDrain() {
    return this.getBooleanAttribute('is_drain');
  }

  // is_offline - computed: true, optional: false, required: false
  public get isOffline() {
    return this.getBooleanAttribute('is_offline');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns {
}

export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // query_class - computed: true, optional: false, required: false
  public get queryClass() {
    return this.getStringAttribute('query_class');
  }

  // query_type - computed: true, optional: false, required: false
  public get queryType() {
    return this.getStringAttribute('query_type');
  }

  // rcodes - computed: true, optional: false, required: false
  public get rcodes() {
    return this.getListAttribute('rcodes');
  }

  // transport_protocol - computed: true, optional: false, required: false
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker {
}

export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthChecker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // interval_in_millis - computed: true, optional: false, required: false
  public get intervalInMillis() {
    return this.getNumberAttribute('interval_in_millis');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // request_data - computed: true, optional: false, required: false
  public get requestData() {
    return this.getStringAttribute('request_data');
  }

  // response_body_regex - computed: true, optional: false, required: false
  public get responseBodyRegex() {
    return this.getStringAttribute('response_body_regex');
  }

  // response_data - computed: true, optional: false, required: false
  public get responseData() {
    return this.getStringAttribute('response_data');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // return_code - computed: true, optional: false, required: false
  public get returnCode() {
    return this.getNumberAttribute('return_code');
  }

  // timeout_in_millis - computed: true, optional: false, required: false
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }

  // url_path - computed: true, optional: false, required: false
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems {
}

export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_operationally_active_backends_preferred - computed: true, optional: false, required: false
  public get areOperationallyActiveBackendsPreferred() {
    return this.getBooleanAttribute('are_operationally_active_backends_preferred');
  }

  // backends - computed: true, optional: false, required: false
  private _backends = new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }

  // health_checker - computed: true, optional: false, required: false
  private _healthChecker = new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsHealthCheckerList(this, "health_checker", false);
  public get healthChecker() {
    return this._healthChecker;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // is_fail_open - computed: true, optional: false, required: false
  public get isFailOpen() {
    return this.getBooleanAttribute('is_fail_open');
  }

  // is_instant_failover_enabled - computed: true, optional: false, required: false
  public get isInstantFailoverEnabled() {
    return this.getBooleanAttribute('is_instant_failover_enabled');
  }

  // is_instant_failover_tcp_reset_enabled - computed: true, optional: false, required: false
  public get isInstantFailoverTcpResetEnabled() {
    return this.getBooleanAttribute('is_instant_failover_tcp_reset_enabled');
  }

  // is_preserve_source - computed: true, optional: false, required: false
  public get isPreserveSource() {
    return this.getBooleanAttribute('is_preserve_source');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_load_balancer_id - computed: true, optional: false, required: false
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetsBackendSetCollection {
}

export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetsBackendSetCollectionToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsBackendSetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetsBackendSetCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetsBackendSetCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#name DataOciNetworkLoadBalancerBackendSets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#regex DataOciNetworkLoadBalancerBackendSets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#values DataOciNetworkLoadBalancerBackendSets#values}
  */
  readonly values: string[];
}

export function dataOciNetworkLoadBalancerBackendSetsFilterToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciNetworkLoadBalancerBackendSetsFilterToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciNetworkLoadBalancerBackendSetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciNetworkLoadBalancerBackendSetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciNetworkLoadBalancerBackendSetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetsFilterOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets oci_network_load_balancer_backend_sets}
*/
export class DataOciNetworkLoadBalancerBackendSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_backend_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSets to import
  * @param importFromId The id of the existing DataOciNetworkLoadBalancerBackendSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_load_balancer_backend_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/network_load_balancer_backend_sets oci_network_load_balancer_backend_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkLoadBalancerBackendSetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkLoadBalancerBackendSetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_backend_sets',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._networkLoadBalancerId = config.networkLoadBalancerId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_set_collection - computed: true, optional: false, required: false
  private _backendSetCollection = new DataOciNetworkLoadBalancerBackendSetsBackendSetCollectionList(this, "backend_set_collection", false);
  public get backendSetCollection() {
    return this._backendSetCollection;
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

  // network_load_balancer_id - computed: false, optional: false, required: true
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciNetworkLoadBalancerBackendSetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciNetworkLoadBalancerBackendSetsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
      filter: cdktf.listMapper(dataOciNetworkLoadBalancerBackendSetsFilterToTerraform, true)(this._filter.internalValue),
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
      network_load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._networkLoadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciNetworkLoadBalancerBackendSetsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciNetworkLoadBalancerBackendSetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
