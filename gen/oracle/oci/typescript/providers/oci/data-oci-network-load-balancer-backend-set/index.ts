// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/network_load_balancer_backend_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciNetworkLoadBalancerBackendSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/network_load_balancer_backend_set#backend_set_name DataOciNetworkLoadBalancerBackendSet#backend_set_name}
  */
  readonly backendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/network_load_balancer_backend_set#network_load_balancer_id DataOciNetworkLoadBalancerBackendSet#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
}
export interface DataOciNetworkLoadBalancerBackendSetBackends {
}

export function dataOciNetworkLoadBalancerBackendSetBackendsToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetBackendsToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetBackends): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetBackends | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetBackends | undefined) {
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

export class DataOciNetworkLoadBalancerBackendSetBackendsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetBackendsOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetHealthCheckerDns {
}

export function dataOciNetworkLoadBalancerBackendSetHealthCheckerDnsToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetHealthCheckerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetHealthCheckerDnsToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetHealthCheckerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetHealthCheckerDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetHealthCheckerDns | undefined) {
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

export class DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciNetworkLoadBalancerBackendSetHealthChecker {
}

export function dataOciNetworkLoadBalancerBackendSetHealthCheckerToTerraform(struct?: DataOciNetworkLoadBalancerBackendSetHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciNetworkLoadBalancerBackendSetHealthCheckerToHclTerraform(struct?: DataOciNetworkLoadBalancerBackendSetHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciNetworkLoadBalancerBackendSetHealthChecker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciNetworkLoadBalancerBackendSetHealthChecker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataOciNetworkLoadBalancerBackendSetHealthCheckerDnsList(this, "dns", false);
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

export class DataOciNetworkLoadBalancerBackendSetHealthCheckerList extends cdktf.ComplexList {

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
  public get(index: number): DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference {
    return new DataOciNetworkLoadBalancerBackendSetHealthCheckerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/network_load_balancer_backend_set oci_network_load_balancer_backend_set}
*/
export class DataOciNetworkLoadBalancerBackendSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_backend_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciNetworkLoadBalancerBackendSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciNetworkLoadBalancerBackendSet to import
  * @param importFromId The id of the existing DataOciNetworkLoadBalancerBackendSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/network_load_balancer_backend_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciNetworkLoadBalancerBackendSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_load_balancer_backend_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/network_load_balancer_backend_set oci_network_load_balancer_backend_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciNetworkLoadBalancerBackendSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciNetworkLoadBalancerBackendSetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_backend_set',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendSetName = config.backendSetName;
    this._networkLoadBalancerId = config.networkLoadBalancerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_operationally_active_backends_preferred - computed: true, optional: false, required: false
  public get areOperationallyActiveBackendsPreferred() {
    return this.getBooleanAttribute('are_operationally_active_backends_preferred');
  }

  // backend_set_name - computed: false, optional: false, required: true
  private _backendSetName?: string; 
  public get backendSetName() {
    return this.getStringAttribute('backend_set_name');
  }
  public set backendSetName(value: string) {
    this._backendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendSetNameInput() {
    return this._backendSetName;
  }

  // backends - computed: true, optional: false, required: false
  private _backends = new DataOciNetworkLoadBalancerBackendSetBackendsList(this, "backends", false);
  public get backends() {
    return this._backends;
  }

  // health_checker - computed: true, optional: false, required: false
  private _healthChecker = new DataOciNetworkLoadBalancerBackendSetHealthCheckerList(this, "health_checker", false);
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

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_set_name: cdktf.stringToTerraform(this._backendSetName),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_set_name: {
        value: cdktf.stringToHclTerraform(this._backendSetName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
