// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#are_operationally_active_backends_preferred NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#are_operationally_active_backends_preferred}
  */
  readonly areOperationallyActiveBackendsPreferred?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_version NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_fail_open NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_fail_open}
  */
  readonly isFailOpen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_enabled}
  */
  readonly isInstantFailoverEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_instant_failover_tcp_reset_enabled NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_instant_failover_tcp_reset_enabled}
  */
  readonly isInstantFailoverTcpResetEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_preserve_source NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_preserve_source}
  */
  readonly isPreserveSource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#network_load_balancer_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#policy NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#policy}
  */
  readonly policy: string;
  /**
  * backends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#backends NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#backends}
  */
  readonly backends?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[] | cdktf.IResolvable;
  /**
  * health_checker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#health_checker NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#health_checker}
  */
  readonly healthChecker: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeouts NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeouts}
  */
  readonly timeouts?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts;
}
export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#ip_address NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_backup NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_backup}
  */
  readonly isBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_drain NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_drain}
  */
  readonly isDrain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#is_offline NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#is_offline}
  */
  readonly isOffline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#target_id NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#target_id}
  */
  readonly targetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#weight NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#weight}
  */
  readonly weight?: number;
}

export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsToTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    is_backup: cdktf.booleanToTerraform(struct!.isBackup),
    is_drain: cdktf.booleanToTerraform(struct!.isDrain),
    is_offline: cdktf.booleanToTerraform(struct!.isOffline),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    target_id: cdktf.stringToTerraform(struct!.targetId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsToHclTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_backup: {
      value: cdktf.booleanToHclTerraform(struct!.isBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_drain: {
      value: cdktf.booleanToHclTerraform(struct!.isDrain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_offline: {
      value: cdktf.booleanToHclTerraform(struct!.isOffline),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._isBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.isBackup = this._isBackup;
    }
    if (this._isDrain !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDrain = this._isDrain;
    }
    if (this._isOffline !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOffline = this._isOffline;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._isBackup = undefined;
      this._isDrain = undefined;
      this._isOffline = undefined;
      this._name = undefined;
      this._port = undefined;
      this._targetId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._isBackup = value.isBackup;
      this._isDrain = value.isDrain;
      this._isOffline = value.isOffline;
      this._name = value.name;
      this._port = value.port;
      this._targetId = value.targetId;
      this._weight = value.weight;
    }
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // is_backup - computed: true, optional: true, required: false
  private _isBackup?: boolean | cdktf.IResolvable; 
  public get isBackup() {
    return this.getBooleanAttribute('is_backup');
  }
  public set isBackup(value: boolean | cdktf.IResolvable) {
    this._isBackup = value;
  }
  public resetIsBackup() {
    this._isBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBackupInput() {
    return this._isBackup;
  }

  // is_drain - computed: true, optional: true, required: false
  private _isDrain?: boolean | cdktf.IResolvable; 
  public get isDrain() {
    return this.getBooleanAttribute('is_drain');
  }
  public set isDrain(value: boolean | cdktf.IResolvable) {
    this._isDrain = value;
  }
  public resetIsDrain() {
    this._isDrain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDrainInput() {
    return this._isDrain;
  }

  // is_offline - computed: true, optional: true, required: false
  private _isOffline?: boolean | cdktf.IResolvable; 
  public get isOffline() {
    return this.getBooleanAttribute('is_offline');
  }
  public set isOffline(value: boolean | cdktf.IResolvable) {
    this._isOffline = value;
  }
  public resetIsOffline() {
    this._isOffline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOfflineInput() {
    return this._isOffline;
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // weight - computed: true, optional: true, required: false
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
}

export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList extends cdktf.ComplexList {
  public internalValue? : NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[] | cdktf.IResolvable

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
  public get(index: number): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference {
    return new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#domain_name NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_class}
  */
  readonly queryClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#query_type NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#query_type}
  */
  readonly queryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#rcodes NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#rcodes}
  */
  readonly rcodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#transport_protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#transport_protocol}
  */
  readonly transportProtocol?: string;
}

export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsToTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    query_class: cdktf.stringToTerraform(struct!.queryClass),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    rcodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rcodes),
    transport_protocol: cdktf.stringToTerraform(struct!.transportProtocol),
  }
}


export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsToHclTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_class: {
      value: cdktf.stringToHclTerraform(struct!.queryClass),
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
    rcodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rcodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transport_protocol: {
      value: cdktf.stringToHclTerraform(struct!.transportProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._queryClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryClass = this._queryClass;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._rcodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcodes = this._rcodes;
    }
    if (this._transportProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportProtocol = this._transportProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._queryClass = undefined;
      this._queryType = undefined;
      this._rcodes = undefined;
      this._transportProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._queryClass = value.queryClass;
      this._queryType = value.queryType;
      this._rcodes = value.rcodes;
      this._transportProtocol = value.transportProtocol;
    }
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // query_class - computed: true, optional: true, required: false
  private _queryClass?: string; 
  public get queryClass() {
    return this.getStringAttribute('query_class');
  }
  public set queryClass(value: string) {
    this._queryClass = value;
  }
  public resetQueryClass() {
    this._queryClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryClassInput() {
    return this._queryClass;
  }

  // query_type - computed: true, optional: true, required: false
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  public resetQueryType() {
    this._queryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // rcodes - computed: true, optional: true, required: false
  private _rcodes?: string[]; 
  public get rcodes() {
    return this.getListAttribute('rcodes');
  }
  public set rcodes(value: string[]) {
    this._rcodes = value;
  }
  public resetRcodes() {
    this._rcodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcodesInput() {
    return this._rcodes;
  }

  // transport_protocol - computed: true, optional: true, required: false
  private _transportProtocol?: string; 
  public get transportProtocol() {
    return this.getStringAttribute('transport_protocol');
  }
  public set transportProtocol(value: string) {
    this._transportProtocol = value;
  }
  public resetTransportProtocol() {
    this._transportProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportProtocolInput() {
    return this._transportProtocol;
  }
}
export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#interval_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#interval_in_millis}
  */
  readonly intervalInMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#port NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#protocol NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#request_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#request_data}
  */
  readonly requestData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_body_regex NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_body_regex}
  */
  readonly responseBodyRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#response_data NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#response_data}
  */
  readonly responseData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#retries NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#retries}
  */
  readonly retries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#return_code NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#return_code}
  */
  readonly returnCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#timeout_in_millis NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#timeout_in_millis}
  */
  readonly timeoutInMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#url_path NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#url_path}
  */
  readonly urlPath?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#dns NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#dns}
  */
  readonly dns?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns;
}

export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerToTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_in_millis: cdktf.numberToTerraform(struct!.intervalInMillis),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    request_data: cdktf.stringToTerraform(struct!.requestData),
    response_body_regex: cdktf.stringToTerraform(struct!.responseBodyRegex),
    response_data: cdktf.stringToTerraform(struct!.responseData),
    retries: cdktf.numberToTerraform(struct!.retries),
    return_code: cdktf.numberToTerraform(struct!.returnCode),
    timeout_in_millis: cdktf.numberToTerraform(struct!.timeoutInMillis),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
    dns: networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsToTerraform(struct!.dns),
  }
}


export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerToHclTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference | NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_in_millis: {
      value: cdktf.numberToHclTerraform(struct!.intervalInMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_data: {
      value: cdktf.stringToHclTerraform(struct!.requestData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_regex: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_data: {
      value: cdktf.stringToHclTerraform(struct!.responseData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    return_code: {
      value: cdktf.numberToHclTerraform(struct!.returnCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_in_millis: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalInMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInMillis = this._intervalInMillis;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._requestData !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestData = this._requestData;
    }
    if (this._responseBodyRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyRegex = this._responseBodyRegex;
    }
    if (this._responseData !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseData = this._responseData;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._returnCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCode = this._returnCode;
    }
    if (this._timeoutInMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMillis = this._timeoutInMillis;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalInMillis = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._requestData = undefined;
      this._responseBodyRegex = undefined;
      this._responseData = undefined;
      this._retries = undefined;
      this._returnCode = undefined;
      this._timeoutInMillis = undefined;
      this._urlPath = undefined;
      this._dns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalInMillis = value.intervalInMillis;
      this._port = value.port;
      this._protocol = value.protocol;
      this._requestData = value.requestData;
      this._responseBodyRegex = value.responseBodyRegex;
      this._responseData = value.responseData;
      this._retries = value.retries;
      this._returnCode = value.returnCode;
      this._timeoutInMillis = value.timeoutInMillis;
      this._urlPath = value.urlPath;
      this._dns.internalValue = value.dns;
    }
  }

  // interval_in_millis - computed: true, optional: true, required: false
  private _intervalInMillis?: number; 
  public get intervalInMillis() {
    return this.getNumberAttribute('interval_in_millis');
  }
  public set intervalInMillis(value: number) {
    this._intervalInMillis = value;
  }
  public resetIntervalInMillis() {
    this._intervalInMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInMillisInput() {
    return this._intervalInMillis;
  }

  // port - computed: true, optional: true, required: false
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // request_data - computed: true, optional: true, required: false
  private _requestData?: string; 
  public get requestData() {
    return this.getStringAttribute('request_data');
  }
  public set requestData(value: string) {
    this._requestData = value;
  }
  public resetRequestData() {
    this._requestData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDataInput() {
    return this._requestData;
  }

  // response_body_regex - computed: true, optional: true, required: false
  private _responseBodyRegex?: string; 
  public get responseBodyRegex() {
    return this.getStringAttribute('response_body_regex');
  }
  public set responseBodyRegex(value: string) {
    this._responseBodyRegex = value;
  }
  public resetResponseBodyRegex() {
    this._responseBodyRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyRegexInput() {
    return this._responseBodyRegex;
  }

  // response_data - computed: true, optional: true, required: false
  private _responseData?: string; 
  public get responseData() {
    return this.getStringAttribute('response_data');
  }
  public set responseData(value: string) {
    this._responseData = value;
  }
  public resetResponseData() {
    this._responseData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseDataInput() {
    return this._responseData;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // return_code - computed: true, optional: true, required: false
  private _returnCode?: number; 
  public get returnCode() {
    return this.getNumberAttribute('return_code');
  }
  public set returnCode(value: number) {
    this._returnCode = value;
  }
  public resetReturnCode() {
    this._returnCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCodeInput() {
    return this._returnCode;
  }

  // timeout_in_millis - computed: true, optional: true, required: false
  private _timeoutInMillis?: number; 
  public get timeoutInMillis() {
    return this.getNumberAttribute('timeout_in_millis');
  }
  public set timeoutInMillis(value: number) {
    this._timeoutInMillis = value;
  }
  public resetTimeoutInMillis() {
    this._timeoutInMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisInput() {
    return this._timeoutInMillis;
  }

  // url_path - computed: true, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}
export interface NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#create NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#delete NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#update NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified#update}
  */
  readonly update?: string;
}

export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsToTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsToHclTerraform(struct?: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified oci_network_load_balancer_network_load_balancers_backend_sets_unified}
*/
export class NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_network_load_balancers_backend_sets_unified";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import
  * @param importFromId The id of the existing NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnified to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_load_balancer_network_load_balancers_backend_sets_unified", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/network_load_balancer_network_load_balancers_backend_sets_unified oci_network_load_balancer_network_load_balancers_backend_sets_unified} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_network_load_balancers_backend_sets_unified',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areOperationallyActiveBackendsPreferred = config.areOperationallyActiveBackendsPreferred;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._isFailOpen = config.isFailOpen;
    this._isInstantFailoverEnabled = config.isInstantFailoverEnabled;
    this._isInstantFailoverTcpResetEnabled = config.isInstantFailoverTcpResetEnabled;
    this._isPreserveSource = config.isPreserveSource;
    this._name = config.name;
    this._networkLoadBalancerId = config.networkLoadBalancerId;
    this._policy = config.policy;
    this._backends.internalValue = config.backends;
    this._healthChecker.internalValue = config.healthChecker;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // are_operationally_active_backends_preferred - computed: true, optional: true, required: false
  private _areOperationallyActiveBackendsPreferred?: boolean | cdktf.IResolvable; 
  public get areOperationallyActiveBackendsPreferred() {
    return this.getBooleanAttribute('are_operationally_active_backends_preferred');
  }
  public set areOperationallyActiveBackendsPreferred(value: boolean | cdktf.IResolvable) {
    this._areOperationallyActiveBackendsPreferred = value;
  }
  public resetAreOperationallyActiveBackendsPreferred() {
    this._areOperationallyActiveBackendsPreferred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areOperationallyActiveBackendsPreferredInput() {
    return this._areOperationallyActiveBackendsPreferred;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // is_fail_open - computed: true, optional: true, required: false
  private _isFailOpen?: boolean | cdktf.IResolvable; 
  public get isFailOpen() {
    return this.getBooleanAttribute('is_fail_open');
  }
  public set isFailOpen(value: boolean | cdktf.IResolvable) {
    this._isFailOpen = value;
  }
  public resetIsFailOpen() {
    this._isFailOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFailOpenInput() {
    return this._isFailOpen;
  }

  // is_instant_failover_enabled - computed: true, optional: true, required: false
  private _isInstantFailoverEnabled?: boolean | cdktf.IResolvable; 
  public get isInstantFailoverEnabled() {
    return this.getBooleanAttribute('is_instant_failover_enabled');
  }
  public set isInstantFailoverEnabled(value: boolean | cdktf.IResolvable) {
    this._isInstantFailoverEnabled = value;
  }
  public resetIsInstantFailoverEnabled() {
    this._isInstantFailoverEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstantFailoverEnabledInput() {
    return this._isInstantFailoverEnabled;
  }

  // is_instant_failover_tcp_reset_enabled - computed: true, optional: true, required: false
  private _isInstantFailoverTcpResetEnabled?: boolean | cdktf.IResolvable; 
  public get isInstantFailoverTcpResetEnabled() {
    return this.getBooleanAttribute('is_instant_failover_tcp_reset_enabled');
  }
  public set isInstantFailoverTcpResetEnabled(value: boolean | cdktf.IResolvable) {
    this._isInstantFailoverTcpResetEnabled = value;
  }
  public resetIsInstantFailoverTcpResetEnabled() {
    this._isInstantFailoverTcpResetEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInstantFailoverTcpResetEnabledInput() {
    return this._isInstantFailoverTcpResetEnabled;
  }

  // is_preserve_source - computed: true, optional: true, required: false
  private _isPreserveSource?: boolean | cdktf.IResolvable; 
  public get isPreserveSource() {
    return this.getBooleanAttribute('is_preserve_source');
  }
  public set isPreserveSource(value: boolean | cdktf.IResolvable) {
    this._isPreserveSource = value;
  }
  public resetIsPreserveSource() {
    this._isPreserveSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPreserveSourceInput() {
    return this._isPreserveSource;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // backends - computed: false, optional: true, required: false
  private _backends = new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList(this, "backends", true);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  public resetBackends() {
    this._backends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
  }

  // health_checker - computed: false, optional: false, required: true
  private _healthChecker = new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerOutputReference(this, "health_checker");
  public get healthChecker() {
    return this._healthChecker;
  }
  public putHealthChecker(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthChecker) {
    this._healthChecker.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckerInput() {
    return this._healthChecker.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      are_operationally_active_backends_preferred: cdktf.booleanToTerraform(this._areOperationallyActiveBackendsPreferred),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      is_fail_open: cdktf.booleanToTerraform(this._isFailOpen),
      is_instant_failover_enabled: cdktf.booleanToTerraform(this._isInstantFailoverEnabled),
      is_instant_failover_tcp_reset_enabled: cdktf.booleanToTerraform(this._isInstantFailoverTcpResetEnabled),
      is_preserve_source: cdktf.booleanToTerraform(this._isPreserveSource),
      name: cdktf.stringToTerraform(this._name),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
      policy: cdktf.stringToTerraform(this._policy),
      backends: cdktf.listMapper(networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsToTerraform, true)(this._backends.internalValue),
      health_checker: networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerToTerraform(this._healthChecker.internalValue),
      timeouts: networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_operationally_active_backends_preferred: {
        value: cdktf.booleanToHclTerraform(this._areOperationallyActiveBackendsPreferred),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_fail_open: {
        value: cdktf.booleanToHclTerraform(this._isFailOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_instant_failover_enabled: {
        value: cdktf.booleanToHclTerraform(this._isInstantFailoverEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_instant_failover_tcp_reset_enabled: {
        value: cdktf.booleanToHclTerraform(this._isInstantFailoverTcpResetEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_preserve_source: {
        value: cdktf.booleanToHclTerraform(this._isPreserveSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backends: {
        value: cdktf.listMapperHcl(networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsToHclTerraform, true)(this._backends.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedBackendsList",
      },
      health_checker: {
        value: networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerToHclTerraform(this._healthChecker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedHealthCheckerList",
      },
      timeouts: {
        value: networkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkLoadBalancerNetworkLoadBalancersBackendSetsUnifiedTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
