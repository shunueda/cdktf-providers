// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#annotations Cluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#auto_http_config Cluster#auto_http_config}
  */
  readonly autoHttpConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#connection_timeout Cluster#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#default_subset Cluster#default_subset}
  */
  readonly defaultSubset?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#disable Cluster#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#disable_proxy_protocol Cluster#disable_proxy_protocol}
  */
  readonly disableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#endpoint_selection Cluster#endpoint_selection}
  */
  readonly endpointSelection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#fallback_policy Cluster#fallback_policy}
  */
  readonly fallbackPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#http_idle_timeout Cluster#http_idle_timeout}
  */
  readonly httpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#labels Cluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#loadbalancer_algorithm Cluster#loadbalancer_algorithm}
  */
  readonly loadbalancerAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#no_panic_threshold Cluster#no_panic_threshold}
  */
  readonly noPanicThreshold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#panic_threshold Cluster#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#proxy_protocol_v1 Cluster#proxy_protocol_v1}
  */
  readonly proxyProtocolV1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#proxy_protocol_v2 Cluster#proxy_protocol_v2}
  */
  readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
  /**
  * circuit_breaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#circuit_breaker Cluster#circuit_breaker}
  */
  readonly circuitBreaker?: ClusterCircuitBreaker;
  /**
  * endpoint_subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#endpoint_subsets Cluster#endpoint_subsets}
  */
  readonly endpointSubsets?: ClusterEndpointSubsets[] | cdktf.IResolvable;
  /**
  * endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#endpoints Cluster#endpoints}
  */
  readonly endpoints?: ClusterEndpoints[] | cdktf.IResolvable;
  /**
  * header_transformation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#header_transformation_type Cluster#header_transformation_type}
  */
  readonly headerTransformationType?: ClusterHeaderTransformationType;
  /**
  * health_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#health_checks Cluster#health_checks}
  */
  readonly healthChecks?: ClusterHealthChecks[] | cdktf.IResolvable;
  /**
  * http1_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#http1_config Cluster#http1_config}
  */
  readonly http1Config?: ClusterHttp1Config;
  /**
  * http2_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#http2_options Cluster#http2_options}
  */
  readonly http2Options?: ClusterHttp2Options;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#outlier_detection Cluster#outlier_detection}
  */
  readonly outlierDetection?: ClusterOutlierDetection;
  /**
  * tls_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tls_parameters Cluster#tls_parameters}
  */
  readonly tlsParameters?: ClusterTlsParameters;
  /**
  * upstream_conn_pool_reuse_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#upstream_conn_pool_reuse_type Cluster#upstream_conn_pool_reuse_type}
  */
  readonly upstreamConnPoolReuseType?: ClusterUpstreamConnPoolReuseType;
}
export interface ClusterCircuitBreaker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#connection_limit Cluster#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#max_requests Cluster#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#pending_requests Cluster#pending_requests}
  */
  readonly pendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#priority Cluster#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#retries Cluster#retries}
  */
  readonly retries?: number;
}

export function clusterCircuitBreakerToTerraform(struct?: ClusterCircuitBreakerOutputReference | ClusterCircuitBreaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    max_requests: cdktf.numberToTerraform(struct!.maxRequests),
    pending_requests: cdktf.numberToTerraform(struct!.pendingRequests),
    priority: cdktf.stringToTerraform(struct!.priority),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function clusterCircuitBreakerToHclTerraform(struct?: ClusterCircuitBreakerOutputReference | ClusterCircuitBreaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_requests: {
      value: cdktf.numberToHclTerraform(struct!.maxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_requests: {
      value: cdktf.numberToHclTerraform(struct!.pendingRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterCircuitBreakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterCircuitBreaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._maxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequests = this._maxRequests;
    }
    if (this._pendingRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingRequests = this._pendingRequests;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterCircuitBreaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionLimit = undefined;
      this._maxRequests = undefined;
      this._pendingRequests = undefined;
      this._priority = undefined;
      this._retries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionLimit = value.connectionLimit;
      this._maxRequests = value.maxRequests;
      this._pendingRequests = value.pendingRequests;
      this._priority = value.priority;
      this._retries = value.retries;
    }
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // max_requests - computed: false, optional: true, required: false
  private _maxRequests?: number; 
  public get maxRequests() {
    return this.getNumberAttribute('max_requests');
  }
  public set maxRequests(value: number) {
    this._maxRequests = value;
  }
  public resetMaxRequests() {
    this._maxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestsInput() {
    return this._maxRequests;
  }

  // pending_requests - computed: false, optional: true, required: false
  private _pendingRequests?: number; 
  public get pendingRequests() {
    return this.getNumberAttribute('pending_requests');
  }
  public set pendingRequests(value: number) {
    this._pendingRequests = value;
  }
  public resetPendingRequests() {
    this._pendingRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingRequestsInput() {
    return this._pendingRequests;
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

  // retries - computed: false, optional: true, required: false
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
}
export interface ClusterEndpointSubsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#keys Cluster#keys}
  */
  readonly keys: string[];
}

export function clusterEndpointSubsetsToTerraform(struct?: ClusterEndpointSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function clusterEndpointSubsetsToHclTerraform(struct?: ClusterEndpointSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterEndpointSubsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEndpointSubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterEndpointSubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}

export class ClusterEndpointSubsetsList extends cdktf.ComplexList {
  public internalValue? : ClusterEndpointSubsets[] | cdktf.IResolvable

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
  public get(index: number): ClusterEndpointSubsetsOutputReference {
    return new ClusterEndpointSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterEndpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tenant Cluster#tenant}
  */
  readonly tenant?: string;
}

export function clusterEndpointsToTerraform(struct?: ClusterEndpoints | cdktf.IResolvable): any {
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


export function clusterEndpointsToHclTerraform(struct?: ClusterEndpoints | cdktf.IResolvable): any {
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

export class ClusterEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterEndpoints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterEndpoints | cdktf.IResolvable | undefined) {
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

export class ClusterEndpointsList extends cdktf.ComplexList {
  public internalValue? : ClusterEndpoints[] | cdktf.IResolvable

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
  public get(index: number): ClusterEndpointsOutputReference {
    return new ClusterEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterHeaderTransformationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#default_header_transformation Cluster#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#legacy_header_transformation Cluster#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#preserve_case_header_transformation Cluster#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#proper_case_header_transformation Cluster#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function clusterHeaderTransformationTypeToTerraform(struct?: ClusterHeaderTransformationTypeOutputReference | ClusterHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function clusterHeaderTransformationTypeToHclTerraform(struct?: ClusterHeaderTransformationTypeOutputReference | ClusterHeaderTransformationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHeaderTransformationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterHeaderTransformationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHeaderTransformationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface ClusterHealthChecks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tenant Cluster#tenant}
  */
  readonly tenant?: string;
}

export function clusterHealthChecksToTerraform(struct?: ClusterHealthChecks | cdktf.IResolvable): any {
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


export function clusterHealthChecksToHclTerraform(struct?: ClusterHealthChecks | cdktf.IResolvable): any {
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

export class ClusterHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterHealthChecks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterHealthChecks | cdktf.IResolvable | undefined) {
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

export class ClusterHealthChecksList extends cdktf.ComplexList {
  public internalValue? : ClusterHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): ClusterHealthChecksOutputReference {
    return new ClusterHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterHttp1ConfigHeaderTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#default_header_transformation Cluster#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#legacy_header_transformation Cluster#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#preserve_case_header_transformation Cluster#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#proper_case_header_transformation Cluster#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function clusterHttp1ConfigHeaderTransformationToTerraform(struct?: ClusterHttp1ConfigHeaderTransformationOutputReference | ClusterHttp1ConfigHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_header_transformation: cdktf.booleanToTerraform(struct!.defaultHeaderTransformation),
    legacy_header_transformation: cdktf.booleanToTerraform(struct!.legacyHeaderTransformation),
    preserve_case_header_transformation: cdktf.booleanToTerraform(struct!.preserveCaseHeaderTransformation),
    proper_case_header_transformation: cdktf.booleanToTerraform(struct!.properCaseHeaderTransformation),
  }
}


export function clusterHttp1ConfigHeaderTransformationToHclTerraform(struct?: ClusterHttp1ConfigHeaderTransformationOutputReference | ClusterHttp1ConfigHeaderTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    legacy_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.legacyHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    preserve_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.preserveCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proper_case_header_transformation: {
      value: cdktf.booleanToHclTerraform(struct!.properCaseHeaderTransformation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHttp1ConfigHeaderTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterHttp1ConfigHeaderTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHeaderTransformation = this._defaultHeaderTransformation;
    }
    if (this._legacyHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.legacyHeaderTransformation = this._legacyHeaderTransformation;
    }
    if (this._preserveCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveCaseHeaderTransformation = this._preserveCaseHeaderTransformation;
    }
    if (this._properCaseHeaderTransformation !== undefined) {
      hasAnyValues = true;
      internalValueResult.properCaseHeaderTransformation = this._properCaseHeaderTransformation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHttp1ConfigHeaderTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultHeaderTransformation = undefined;
      this._legacyHeaderTransformation = undefined;
      this._preserveCaseHeaderTransformation = undefined;
      this._properCaseHeaderTransformation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultHeaderTransformation = value.defaultHeaderTransformation;
      this._legacyHeaderTransformation = value.legacyHeaderTransformation;
      this._preserveCaseHeaderTransformation = value.preserveCaseHeaderTransformation;
      this._properCaseHeaderTransformation = value.properCaseHeaderTransformation;
    }
  }

  // default_header_transformation - computed: false, optional: true, required: false
  private _defaultHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get defaultHeaderTransformation() {
    return this.getBooleanAttribute('default_header_transformation');
  }
  public set defaultHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._defaultHeaderTransformation = value;
  }
  public resetDefaultHeaderTransformation() {
    this._defaultHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHeaderTransformationInput() {
    return this._defaultHeaderTransformation;
  }

  // legacy_header_transformation - computed: false, optional: true, required: false
  private _legacyHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get legacyHeaderTransformation() {
    return this.getBooleanAttribute('legacy_header_transformation');
  }
  public set legacyHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._legacyHeaderTransformation = value;
  }
  public resetLegacyHeaderTransformation() {
    this._legacyHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacyHeaderTransformationInput() {
    return this._legacyHeaderTransformation;
  }

  // preserve_case_header_transformation - computed: false, optional: true, required: false
  private _preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get preserveCaseHeaderTransformation() {
    return this.getBooleanAttribute('preserve_case_header_transformation');
  }
  public set preserveCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._preserveCaseHeaderTransformation = value;
  }
  public resetPreserveCaseHeaderTransformation() {
    this._preserveCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveCaseHeaderTransformationInput() {
    return this._preserveCaseHeaderTransformation;
  }

  // proper_case_header_transformation - computed: false, optional: true, required: false
  private _properCaseHeaderTransformation?: boolean | cdktf.IResolvable; 
  public get properCaseHeaderTransformation() {
    return this.getBooleanAttribute('proper_case_header_transformation');
  }
  public set properCaseHeaderTransformation(value: boolean | cdktf.IResolvable) {
    this._properCaseHeaderTransformation = value;
  }
  public resetProperCaseHeaderTransformation() {
    this._properCaseHeaderTransformation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get properCaseHeaderTransformationInput() {
    return this._properCaseHeaderTransformation;
  }
}
export interface ClusterHttp1Config {
  /**
  * header_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#header_transformation Cluster#header_transformation}
  */
  readonly headerTransformation?: ClusterHttp1ConfigHeaderTransformation;
}

export function clusterHttp1ConfigToTerraform(struct?: ClusterHttp1ConfigOutputReference | ClusterHttp1Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformation: clusterHttp1ConfigHeaderTransformationToTerraform(struct!.headerTransformation),
  }
}


export function clusterHttp1ConfigToHclTerraform(struct?: ClusterHttp1ConfigOutputReference | ClusterHttp1Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformation: {
      value: clusterHttp1ConfigHeaderTransformationToHclTerraform(struct!.headerTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterHttp1ConfigHeaderTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHttp1ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterHttp1Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformation = this._headerTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHttp1Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerTransformation.internalValue = value.headerTransformation;
    }
  }

  // header_transformation - computed: false, optional: true, required: false
  private _headerTransformation = new ClusterHttp1ConfigHeaderTransformationOutputReference(this, "header_transformation");
  public get headerTransformation() {
    return this._headerTransformation;
  }
  public putHeaderTransformation(value: ClusterHttp1ConfigHeaderTransformation) {
    this._headerTransformation.internalValue = value;
  }
  public resetHeaderTransformation() {
    this._headerTransformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationInput() {
    return this._headerTransformation.internalValue;
  }
}
export interface ClusterHttp2Options {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#enabled Cluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function clusterHttp2OptionsToTerraform(struct?: ClusterHttp2OptionsOutputReference | ClusterHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function clusterHttp2OptionsToHclTerraform(struct?: ClusterHttp2OptionsOutputReference | ClusterHttp2Options): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterHttp2Options | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
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
}
export interface ClusterOutlierDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#base_ejection_time Cluster#base_ejection_time}
  */
  readonly baseEjectionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#consecutive_5xx Cluster#consecutive_5xx}
  */
  readonly consecutive5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#consecutive_gateway_failure Cluster#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#interval Cluster#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#max_ejection_percent Cluster#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
}

export function clusterOutlierDetectionToTerraform(struct?: ClusterOutlierDetectionOutputReference | ClusterOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_ejection_time: cdktf.numberToTerraform(struct!.baseEjectionTime),
    consecutive_5xx: cdktf.numberToTerraform(struct!.consecutive5Xx),
    consecutive_gateway_failure: cdktf.numberToTerraform(struct!.consecutiveGatewayFailure),
    interval: cdktf.numberToTerraform(struct!.interval),
    max_ejection_percent: cdktf.numberToTerraform(struct!.maxEjectionPercent),
  }
}


export function clusterOutlierDetectionToHclTerraform(struct?: ClusterOutlierDetectionOutputReference | ClusterOutlierDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_ejection_time: {
      value: cdktf.numberToHclTerraform(struct!.baseEjectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_5xx: {
      value: cdktf.numberToHclTerraform(struct!.consecutive5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consecutive_gateway_failure: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveGatewayFailure),
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
    max_ejection_percent: {
      value: cdktf.numberToHclTerraform(struct!.maxEjectionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOutlierDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseEjectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseEjectionTime = this._baseEjectionTime;
    }
    if (this._consecutive5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutive5Xx = this._consecutive5Xx;
    }
    if (this._consecutiveGatewayFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveGatewayFailure = this._consecutiveGatewayFailure;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._maxEjectionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxEjectionPercent = this._maxEjectionPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOutlierDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseEjectionTime = undefined;
      this._consecutive5Xx = undefined;
      this._consecutiveGatewayFailure = undefined;
      this._interval = undefined;
      this._maxEjectionPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseEjectionTime = value.baseEjectionTime;
      this._consecutive5Xx = value.consecutive5Xx;
      this._consecutiveGatewayFailure = value.consecutiveGatewayFailure;
      this._interval = value.interval;
      this._maxEjectionPercent = value.maxEjectionPercent;
    }
  }

  // base_ejection_time - computed: false, optional: true, required: false
  private _baseEjectionTime?: number; 
  public get baseEjectionTime() {
    return this.getNumberAttribute('base_ejection_time');
  }
  public set baseEjectionTime(value: number) {
    this._baseEjectionTime = value;
  }
  public resetBaseEjectionTime() {
    this._baseEjectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseEjectionTimeInput() {
    return this._baseEjectionTime;
  }

  // consecutive_5xx - computed: false, optional: true, required: false
  private _consecutive5Xx?: number; 
  public get consecutive5Xx() {
    return this.getNumberAttribute('consecutive_5xx');
  }
  public set consecutive5Xx(value: number) {
    this._consecutive5Xx = value;
  }
  public resetConsecutive5Xx() {
    this._consecutive5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutive5XxInput() {
    return this._consecutive5Xx;
  }

  // consecutive_gateway_failure - computed: false, optional: true, required: false
  private _consecutiveGatewayFailure?: number; 
  public get consecutiveGatewayFailure() {
    return this.getNumberAttribute('consecutive_gateway_failure');
  }
  public set consecutiveGatewayFailure(value: number) {
    this._consecutiveGatewayFailure = value;
  }
  public resetConsecutiveGatewayFailure() {
    this._consecutiveGatewayFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveGatewayFailureInput() {
    return this._consecutiveGatewayFailure;
  }

  // interval - computed: false, optional: true, required: false
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

  // max_ejection_percent - computed: false, optional: true, required: false
  private _maxEjectionPercent?: number; 
  public get maxEjectionPercent() {
    return this.getNumberAttribute('max_ejection_percent');
  }
  public set maxEjectionPercent(value: number) {
    this._maxEjectionPercent = value;
  }
  public resetMaxEjectionPercent() {
    this._maxEjectionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxEjectionPercentInput() {
    return this._maxEjectionPercent;
  }
}
export interface ClusterTlsParametersCertParamsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tenant Cluster#tenant}
  */
  readonly tenant?: string;
}

export function clusterTlsParametersCertParamsCertificatesToTerraform(struct?: ClusterTlsParametersCertParamsCertificates | cdktf.IResolvable): any {
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


export function clusterTlsParametersCertParamsCertificatesToHclTerraform(struct?: ClusterTlsParametersCertParamsCertificates | cdktf.IResolvable): any {
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

export class ClusterTlsParametersCertParamsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTlsParametersCertParamsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTlsParametersCertParamsCertificates | cdktf.IResolvable | undefined) {
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

export class ClusterTlsParametersCertParamsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ClusterTlsParametersCertParamsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ClusterTlsParametersCertParamsCertificatesOutputReference {
    return new ClusterTlsParametersCertParamsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tenant Cluster#tenant}
  */
  readonly tenant?: string;
}

export function clusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructToTerraform(struct?: ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable): any {
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


export function clusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructToHclTerraform(struct?: ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable): any {
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

export class ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable | undefined) {
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

export class ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructOutputReference {
    return new ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTlsParametersCertParamsValidationParamsTrustedCa {
  /**
  * trusted_ca_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca_list Cluster#trusted_ca_list}
  */
  readonly trustedCaList?: ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable;
}

export function clusterTlsParametersCertParamsValidationParamsTrustedCaToTerraform(struct?: ClusterTlsParametersCertParamsValidationParamsTrustedCaOutputReference | ClusterTlsParametersCertParamsValidationParamsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_list: cdktf.listMapper(clusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructToTerraform, true)(struct!.trustedCaList),
  }
}


export function clusterTlsParametersCertParamsValidationParamsTrustedCaToHclTerraform(struct?: ClusterTlsParametersCertParamsValidationParamsTrustedCaOutputReference | ClusterTlsParametersCertParamsValidationParamsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_list: {
      value: cdktf.listMapperHcl(clusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructToHclTerraform, true)(struct!.trustedCaList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCertParamsValidationParamsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCertParamsValidationParamsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaList = this._trustedCaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCertParamsValidationParamsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaList.internalValue = value.trustedCaList;
    }
  }

  // trusted_ca_list - computed: false, optional: true, required: false
  private _trustedCaList = new ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStructList(this, "trusted_ca_list", false);
  public get trustedCaList() {
    return this._trustedCaList;
  }
  public putTrustedCaList(value: ClusterTlsParametersCertParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable) {
    this._trustedCaList.internalValue = value;
  }
  public resetTrustedCaList() {
    this._trustedCaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaListInput() {
    return this._trustedCaList.internalValue;
  }
}
export interface ClusterTlsParametersCertParamsValidationParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#skip_hostname_verification Cluster#skip_hostname_verification}
  */
  readonly skipHostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca_url Cluster#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#use_volterra_trusted_ca_url Cluster#use_volterra_trusted_ca_url}
  */
  readonly useVolterraTrustedCaUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#verify_subject_alt_names Cluster#verify_subject_alt_names}
  */
  readonly verifySubjectAltNames?: string[];
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca Cluster#trusted_ca}
  */
  readonly trustedCa?: ClusterTlsParametersCertParamsValidationParamsTrustedCa;
}

export function clusterTlsParametersCertParamsValidationParamsToTerraform(struct?: ClusterTlsParametersCertParamsValidationParamsOutputReference | ClusterTlsParametersCertParamsValidationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_hostname_verification: cdktf.booleanToTerraform(struct!.skipHostnameVerification),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    use_volterra_trusted_ca_url: cdktf.booleanToTerraform(struct!.useVolterraTrustedCaUrl),
    verify_subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifySubjectAltNames),
    trusted_ca: clusterTlsParametersCertParamsValidationParamsTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function clusterTlsParametersCertParamsValidationParamsToHclTerraform(struct?: ClusterTlsParametersCertParamsValidationParamsOutputReference | ClusterTlsParametersCertParamsValidationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_hostname_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipHostnameVerification),
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
    use_volterra_trusted_ca_url: {
      value: cdktf.booleanToHclTerraform(struct!.useVolterraTrustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifySubjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: clusterTlsParametersCertParamsValidationParamsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCertParamsValidationParamsTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCertParamsValidationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCertParamsValidationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipHostnameVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHostnameVerification = this._skipHostnameVerification;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._useVolterraTrustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVolterraTrustedCaUrl = this._useVolterraTrustedCaUrl;
    }
    if (this._verifySubjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubjectAltNames = this._verifySubjectAltNames;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCertParamsValidationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipHostnameVerification = undefined;
      this._trustedCaUrl = undefined;
      this._useVolterraTrustedCaUrl = undefined;
      this._verifySubjectAltNames = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipHostnameVerification = value.skipHostnameVerification;
      this._trustedCaUrl = value.trustedCaUrl;
      this._useVolterraTrustedCaUrl = value.useVolterraTrustedCaUrl;
      this._verifySubjectAltNames = value.verifySubjectAltNames;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // skip_hostname_verification - computed: false, optional: true, required: false
  private _skipHostnameVerification?: boolean | cdktf.IResolvable; 
  public get skipHostnameVerification() {
    return this.getBooleanAttribute('skip_hostname_verification');
  }
  public set skipHostnameVerification(value: boolean | cdktf.IResolvable) {
    this._skipHostnameVerification = value;
  }
  public resetSkipHostnameVerification() {
    this._skipHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHostnameVerificationInput() {
    return this._skipHostnameVerification;
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

  // use_volterra_trusted_ca_url - computed: false, optional: true, required: false
  private _useVolterraTrustedCaUrl?: boolean | cdktf.IResolvable; 
  public get useVolterraTrustedCaUrl() {
    return this.getBooleanAttribute('use_volterra_trusted_ca_url');
  }
  public set useVolterraTrustedCaUrl(value: boolean | cdktf.IResolvable) {
    this._useVolterraTrustedCaUrl = value;
  }
  public resetUseVolterraTrustedCaUrl() {
    this._useVolterraTrustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVolterraTrustedCaUrlInput() {
    return this._useVolterraTrustedCaUrl;
  }

  // verify_subject_alt_names - computed: false, optional: true, required: false
  private _verifySubjectAltNames?: string[]; 
  public get verifySubjectAltNames() {
    return this.getListAttribute('verify_subject_alt_names');
  }
  public set verifySubjectAltNames(value: string[]) {
    this._verifySubjectAltNames = value;
  }
  public resetVerifySubjectAltNames() {
    this._verifySubjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySubjectAltNamesInput() {
    return this._verifySubjectAltNames;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new ClusterTlsParametersCertParamsValidationParamsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: ClusterTlsParametersCertParamsValidationParamsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }
}
export interface ClusterTlsParametersCertParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#cipher_suites Cluster#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#maximum_protocol_version Cluster#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#minimum_protocol_version Cluster#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#certificates Cluster#certificates}
  */
  readonly certificates: ClusterTlsParametersCertParamsCertificates[] | cdktf.IResolvable;
  /**
  * validation_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#validation_params Cluster#validation_params}
  */
  readonly validationParams?: ClusterTlsParametersCertParamsValidationParams;
}

export function clusterTlsParametersCertParamsToTerraform(struct?: ClusterTlsParametersCertParamsOutputReference | ClusterTlsParametersCertParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    certificates: cdktf.listMapper(clusterTlsParametersCertParamsCertificatesToTerraform, true)(struct!.certificates),
    validation_params: clusterTlsParametersCertParamsValidationParamsToTerraform(struct!.validationParams),
  }
}


export function clusterTlsParametersCertParamsToHclTerraform(struct?: ClusterTlsParametersCertParamsOutputReference | ClusterTlsParametersCertParams): any {
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
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificates: {
      value: cdktf.listMapperHcl(clusterTlsParametersCertParamsCertificatesToHclTerraform, true)(struct!.certificates),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCertParamsCertificatesList",
    },
    validation_params: {
      value: clusterTlsParametersCertParamsValidationParamsToHclTerraform(struct!.validationParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCertParamsValidationParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCertParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCertParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._validationParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationParams = this._validationParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCertParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
      this._certificates.internalValue = undefined;
      this._validationParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._certificates.internalValue = value.certificates;
      this._validationParams.internalValue = value.validationParams;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
  }

  // certificates - computed: false, optional: false, required: true
  private _certificates = new ClusterTlsParametersCertParamsCertificatesList(this, "certificates", false);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: ClusterTlsParametersCertParamsCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // validation_params - computed: false, optional: true, required: false
  private _validationParams = new ClusterTlsParametersCertParamsValidationParamsOutputReference(this, "validation_params");
  public get validationParams() {
    return this._validationParams;
  }
  public putValidationParams(value: ClusterTlsParametersCertParamsValidationParams) {
    this._validationParams.internalValue = value;
  }
  public resetValidationParams() {
    this._validationParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationParamsInput() {
    return this._validationParams.internalValue;
  }
}
export interface ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#hash_algorithms Cluster#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function clusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms): any {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling {
}

export function clusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#decryption_provider Cluster#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#location Cluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#store_provider Cluster#store_provider}
  */
  readonly storeProvider?: string;
}

export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#decryption_provider Cluster#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#location Cluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#store_provider Cluster#store_provider}
  */
  readonly storeProvider?: string;
}

export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
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


export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal): any {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal | undefined) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#provider Cluster#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#url Cluster#url}
  */
  readonly url: string;
}

export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#key Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#location Cluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#provider Cluster#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#secret_encoding Cluster#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#version Cluster#version}
  */
  readonly version?: number;
}

export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo): any {
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


export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo): any {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo | undefined) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name: string;
}

export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo): any {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo | undefined) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#secret_encoding_type Cluster#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#blindfold_secret_info Cluster#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#blindfold_secret_info_internal Cluster#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#clear_secret_info Cluster#clear_secret_info}
  */
  readonly clearSecretInfo?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#vault_secret_info Cluster#vault_secret_info}
  */
  readonly vaultSecretInfo?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#wingman_secret_info Cluster#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo;
}

export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey): any {
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
      value: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
    vault_secret_info: {
      value: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _blindfoldSecretInfoInternal = new ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyBlindfoldSecretInfoInternal) {
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
  private _clearSecretInfo = new ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyClearSecretInfo) {
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
  private _vaultSecretInfo = new ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyVaultSecretInfo) {
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
  private _wingmanSecretInfo = new ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyWingmanSecretInfo) {
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
export interface ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults {
}

export function clusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference | ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterTlsParametersCommonParamsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#certificate_url Cluster#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#description Cluster#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#custom_hash_algorithms Cluster#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#disable_ocsp_stapling Cluster#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#private_key Cluster#private_key}
  */
  readonly privateKey: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#use_system_defaults Cluster#use_system_defaults}
  */
  readonly useSystemDefaults?: ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults;
}

export function clusterTlsParametersCommonParamsTlsCertificatesToTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: clusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: clusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: clusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function clusterTlsParametersCommonParamsTlsCertificatesToHclTerraform(struct?: ClusterTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable): any {
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
      value: clusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: clusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: clusterTlsParametersCommonParamsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: clusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCommonParamsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: ClusterTlsParametersCommonParamsTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: ClusterTlsParametersCommonParamsTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new ClusterTlsParametersCommonParamsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: ClusterTlsParametersCommonParamsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: ClusterTlsParametersCommonParamsTlsCertificatesUseSystemDefaults) {
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

export class ClusterTlsParametersCommonParamsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : ClusterTlsParametersCommonParamsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): ClusterTlsParametersCommonParamsTlsCertificatesOutputReference {
    return new ClusterTlsParametersCommonParamsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#name Cluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tenant Cluster#tenant}
  */
  readonly tenant?: string;
}

export function clusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToTerraform(struct?: ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable): any {
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


export function clusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToHclTerraform(struct?: ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable): any {
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

export class ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct | cdktf.IResolvable | undefined) {
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

export class ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructList extends cdktf.ComplexList {
  public internalValue? : ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable

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
  public get(index: number): ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructOutputReference {
    return new ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterTlsParametersCommonParamsValidationParamsTrustedCa {
  /**
  * trusted_ca_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca_list Cluster#trusted_ca_list}
  */
  readonly trustedCaList?: ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable;
}

export function clusterTlsParametersCommonParamsValidationParamsTrustedCaToTerraform(struct?: ClusterTlsParametersCommonParamsValidationParamsTrustedCaOutputReference | ClusterTlsParametersCommonParamsValidationParamsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_list: cdktf.listMapper(clusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToTerraform, true)(struct!.trustedCaList),
  }
}


export function clusterTlsParametersCommonParamsValidationParamsTrustedCaToHclTerraform(struct?: ClusterTlsParametersCommonParamsValidationParamsTrustedCaOutputReference | ClusterTlsParametersCommonParamsValidationParamsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_list: {
      value: cdktf.listMapperHcl(clusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructToHclTerraform, true)(struct!.trustedCaList),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCommonParamsValidationParamsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsValidationParamsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaList = this._trustedCaList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParamsValidationParamsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaList.internalValue = value.trustedCaList;
    }
  }

  // trusted_ca_list - computed: false, optional: true, required: false
  private _trustedCaList = new ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStructList(this, "trusted_ca_list", false);
  public get trustedCaList() {
    return this._trustedCaList;
  }
  public putTrustedCaList(value: ClusterTlsParametersCommonParamsValidationParamsTrustedCaTrustedCaListStruct[] | cdktf.IResolvable) {
    this._trustedCaList.internalValue = value;
  }
  public resetTrustedCaList() {
    this._trustedCaList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaListInput() {
    return this._trustedCaList.internalValue;
  }
}
export interface ClusterTlsParametersCommonParamsValidationParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#skip_hostname_verification Cluster#skip_hostname_verification}
  */
  readonly skipHostnameVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca_url Cluster#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#use_volterra_trusted_ca_url Cluster#use_volterra_trusted_ca_url}
  */
  readonly useVolterraTrustedCaUrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#verify_subject_alt_names Cluster#verify_subject_alt_names}
  */
  readonly verifySubjectAltNames?: string[];
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca Cluster#trusted_ca}
  */
  readonly trustedCa?: ClusterTlsParametersCommonParamsValidationParamsTrustedCa;
}

export function clusterTlsParametersCommonParamsValidationParamsToTerraform(struct?: ClusterTlsParametersCommonParamsValidationParamsOutputReference | ClusterTlsParametersCommonParamsValidationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_hostname_verification: cdktf.booleanToTerraform(struct!.skipHostnameVerification),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    use_volterra_trusted_ca_url: cdktf.booleanToTerraform(struct!.useVolterraTrustedCaUrl),
    verify_subject_alt_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.verifySubjectAltNames),
    trusted_ca: clusterTlsParametersCommonParamsValidationParamsTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function clusterTlsParametersCommonParamsValidationParamsToHclTerraform(struct?: ClusterTlsParametersCommonParamsValidationParamsOutputReference | ClusterTlsParametersCommonParamsValidationParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_hostname_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipHostnameVerification),
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
    use_volterra_trusted_ca_url: {
      value: cdktf.booleanToHclTerraform(struct!.useVolterraTrustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_subject_alt_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.verifySubjectAltNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trusted_ca: {
      value: clusterTlsParametersCommonParamsValidationParamsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsValidationParamsTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCommonParamsValidationParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParamsValidationParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipHostnameVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipHostnameVerification = this._skipHostnameVerification;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._useVolterraTrustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVolterraTrustedCaUrl = this._useVolterraTrustedCaUrl;
    }
    if (this._verifySubjectAltNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifySubjectAltNames = this._verifySubjectAltNames;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParamsValidationParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._skipHostnameVerification = undefined;
      this._trustedCaUrl = undefined;
      this._useVolterraTrustedCaUrl = undefined;
      this._verifySubjectAltNames = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._skipHostnameVerification = value.skipHostnameVerification;
      this._trustedCaUrl = value.trustedCaUrl;
      this._useVolterraTrustedCaUrl = value.useVolterraTrustedCaUrl;
      this._verifySubjectAltNames = value.verifySubjectAltNames;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // skip_hostname_verification - computed: false, optional: true, required: false
  private _skipHostnameVerification?: boolean | cdktf.IResolvable; 
  public get skipHostnameVerification() {
    return this.getBooleanAttribute('skip_hostname_verification');
  }
  public set skipHostnameVerification(value: boolean | cdktf.IResolvable) {
    this._skipHostnameVerification = value;
  }
  public resetSkipHostnameVerification() {
    this._skipHostnameVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipHostnameVerificationInput() {
    return this._skipHostnameVerification;
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

  // use_volterra_trusted_ca_url - computed: false, optional: true, required: false
  private _useVolterraTrustedCaUrl?: boolean | cdktf.IResolvable; 
  public get useVolterraTrustedCaUrl() {
    return this.getBooleanAttribute('use_volterra_trusted_ca_url');
  }
  public set useVolterraTrustedCaUrl(value: boolean | cdktf.IResolvable) {
    this._useVolterraTrustedCaUrl = value;
  }
  public resetUseVolterraTrustedCaUrl() {
    this._useVolterraTrustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVolterraTrustedCaUrlInput() {
    return this._useVolterraTrustedCaUrl;
  }

  // verify_subject_alt_names - computed: false, optional: true, required: false
  private _verifySubjectAltNames?: string[]; 
  public get verifySubjectAltNames() {
    return this.getListAttribute('verify_subject_alt_names');
  }
  public set verifySubjectAltNames(value: string[]) {
    this._verifySubjectAltNames = value;
  }
  public resetVerifySubjectAltNames() {
    this._verifySubjectAltNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifySubjectAltNamesInput() {
    return this._verifySubjectAltNames;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new ClusterTlsParametersCommonParamsValidationParamsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: ClusterTlsParametersCommonParamsValidationParamsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }
}
export interface ClusterTlsParametersCommonParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#cipher_suites Cluster#cipher_suites}
  */
  readonly cipherSuites?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#maximum_protocol_version Cluster#maximum_protocol_version}
  */
  readonly maximumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#minimum_protocol_version Cluster#minimum_protocol_version}
  */
  readonly minimumProtocolVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#trusted_ca_url Cluster#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#tls_certificates Cluster#tls_certificates}
  */
  readonly tlsCertificates?: ClusterTlsParametersCommonParamsTlsCertificates[] | cdktf.IResolvable;
  /**
  * validation_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#validation_params Cluster#validation_params}
  */
  readonly validationParams?: ClusterTlsParametersCommonParamsValidationParams;
}

export function clusterTlsParametersCommonParamsToTerraform(struct?: ClusterTlsParametersCommonParamsOutputReference | ClusterTlsParametersCommonParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    maximum_protocol_version: cdktf.stringToTerraform(struct!.maximumProtocolVersion),
    minimum_protocol_version: cdktf.stringToTerraform(struct!.minimumProtocolVersion),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    tls_certificates: cdktf.listMapper(clusterTlsParametersCommonParamsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    validation_params: clusterTlsParametersCommonParamsValidationParamsToTerraform(struct!.validationParams),
  }
}


export function clusterTlsParametersCommonParamsToHclTerraform(struct?: ClusterTlsParametersCommonParamsOutputReference | ClusterTlsParametersCommonParams): any {
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
    maximum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.maximumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(clusterTlsParametersCommonParamsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsTlsCertificatesList",
    },
    validation_params: {
      value: clusterTlsParametersCommonParamsValidationParamsToHclTerraform(struct!.validationParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsValidationParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersCommonParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersCommonParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maximumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumProtocolVersion = this._maximumProtocolVersion;
    }
    if (this._minimumProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumProtocolVersion = this._minimumProtocolVersion;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._validationParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationParams = this._validationParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersCommonParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maximumProtocolVersion = undefined;
      this._minimumProtocolVersion = undefined;
      this._trustedCaUrl = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._validationParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maximumProtocolVersion = value.maximumProtocolVersion;
      this._minimumProtocolVersion = value.minimumProtocolVersion;
      this._trustedCaUrl = value.trustedCaUrl;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._validationParams.internalValue = value.validationParams;
    }
  }

  // cipher_suites - computed: false, optional: true, required: false
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  public resetCipherSuites() {
    this._cipherSuites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // maximum_protocol_version - computed: false, optional: true, required: false
  private _maximumProtocolVersion?: string; 
  public get maximumProtocolVersion() {
    return this.getStringAttribute('maximum_protocol_version');
  }
  public set maximumProtocolVersion(value: string) {
    this._maximumProtocolVersion = value;
  }
  public resetMaximumProtocolVersion() {
    this._maximumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumProtocolVersionInput() {
    return this._maximumProtocolVersion;
  }

  // minimum_protocol_version - computed: false, optional: true, required: false
  private _minimumProtocolVersion?: string; 
  public get minimumProtocolVersion() {
    return this.getStringAttribute('minimum_protocol_version');
  }
  public set minimumProtocolVersion(value: string) {
    this._minimumProtocolVersion = value;
  }
  public resetMinimumProtocolVersion() {
    this._minimumProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumProtocolVersionInput() {
    return this._minimumProtocolVersion;
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

  // tls_certificates - computed: false, optional: true, required: false
  private _tlsCertificates = new ClusterTlsParametersCommonParamsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: ClusterTlsParametersCommonParamsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  public resetTlsCertificates() {
    this._tlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // validation_params - computed: false, optional: true, required: false
  private _validationParams = new ClusterTlsParametersCommonParamsValidationParamsOutputReference(this, "validation_params");
  public get validationParams() {
    return this._validationParams;
  }
  public putValidationParams(value: ClusterTlsParametersCommonParamsValidationParams) {
    this._validationParams.internalValue = value;
  }
  public resetValidationParams() {
    this._validationParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationParamsInput() {
    return this._validationParams.internalValue;
  }
}
export interface ClusterTlsParametersDisableSni {
}

export function clusterTlsParametersDisableSniToTerraform(struct?: ClusterTlsParametersDisableSniOutputReference | ClusterTlsParametersDisableSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterTlsParametersDisableSniToHclTerraform(struct?: ClusterTlsParametersDisableSniOutputReference | ClusterTlsParametersDisableSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterTlsParametersDisableSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersDisableSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersDisableSni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterTlsParametersUseHostHeaderAsSni {
}

export function clusterTlsParametersUseHostHeaderAsSniToTerraform(struct?: ClusterTlsParametersUseHostHeaderAsSniOutputReference | ClusterTlsParametersUseHostHeaderAsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clusterTlsParametersUseHostHeaderAsSniToHclTerraform(struct?: ClusterTlsParametersUseHostHeaderAsSniOutputReference | ClusterTlsParametersUseHostHeaderAsSni): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClusterTlsParametersUseHostHeaderAsSniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParametersUseHostHeaderAsSni | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParametersUseHostHeaderAsSni | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ClusterTlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#default_session_key_caching Cluster#default_session_key_caching}
  */
  readonly defaultSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#disable_session_key_caching Cluster#disable_session_key_caching}
  */
  readonly disableSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#max_session_keys Cluster#max_session_keys}
  */
  readonly maxSessionKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#sni Cluster#sni}
  */
  readonly sni?: string;
  /**
  * cert_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#cert_params Cluster#cert_params}
  */
  readonly certParams?: ClusterTlsParametersCertParams;
  /**
  * common_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#common_params Cluster#common_params}
  */
  readonly commonParams?: ClusterTlsParametersCommonParams;
  /**
  * disable_sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#disable_sni Cluster#disable_sni}
  */
  readonly disableSni?: ClusterTlsParametersDisableSni;
  /**
  * use_host_header_as_sni block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#use_host_header_as_sni Cluster#use_host_header_as_sni}
  */
  readonly useHostHeaderAsSni?: ClusterTlsParametersUseHostHeaderAsSni;
}

export function clusterTlsParametersToTerraform(struct?: ClusterTlsParametersOutputReference | ClusterTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_session_key_caching: cdktf.booleanToTerraform(struct!.defaultSessionKeyCaching),
    disable_session_key_caching: cdktf.booleanToTerraform(struct!.disableSessionKeyCaching),
    max_session_keys: cdktf.numberToTerraform(struct!.maxSessionKeys),
    sni: cdktf.stringToTerraform(struct!.sni),
    cert_params: clusterTlsParametersCertParamsToTerraform(struct!.certParams),
    common_params: clusterTlsParametersCommonParamsToTerraform(struct!.commonParams),
    disable_sni: clusterTlsParametersDisableSniToTerraform(struct!.disableSni),
    use_host_header_as_sni: clusterTlsParametersUseHostHeaderAsSniToTerraform(struct!.useHostHeaderAsSni),
  }
}


export function clusterTlsParametersToHclTerraform(struct?: ClusterTlsParametersOutputReference | ClusterTlsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_session_key_caching: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSessionKeyCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_session_key_caching: {
      value: cdktf.booleanToHclTerraform(struct!.disableSessionKeyCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_session_keys: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_params: {
      value: clusterTlsParametersCertParamsToHclTerraform(struct!.certParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCertParamsList",
    },
    common_params: {
      value: clusterTlsParametersCommonParamsToHclTerraform(struct!.commonParams),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersCommonParamsList",
    },
    disable_sni: {
      value: clusterTlsParametersDisableSniToHclTerraform(struct!.disableSni),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersDisableSniList",
    },
    use_host_header_as_sni: {
      value: clusterTlsParametersUseHostHeaderAsSniToHclTerraform(struct!.useHostHeaderAsSni),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterTlsParametersUseHostHeaderAsSniList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterTlsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterTlsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSessionKeyCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSessionKeyCaching = this._defaultSessionKeyCaching;
    }
    if (this._disableSessionKeyCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSessionKeyCaching = this._disableSessionKeyCaching;
    }
    if (this._maxSessionKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionKeys = this._maxSessionKeys;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._certParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certParams = this._certParams?.internalValue;
    }
    if (this._commonParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonParams = this._commonParams?.internalValue;
    }
    if (this._disableSni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSni = this._disableSni?.internalValue;
    }
    if (this._useHostHeaderAsSni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostHeaderAsSni = this._useHostHeaderAsSni?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterTlsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSessionKeyCaching = undefined;
      this._disableSessionKeyCaching = undefined;
      this._maxSessionKeys = undefined;
      this._sni = undefined;
      this._certParams.internalValue = undefined;
      this._commonParams.internalValue = undefined;
      this._disableSni.internalValue = undefined;
      this._useHostHeaderAsSni.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSessionKeyCaching = value.defaultSessionKeyCaching;
      this._disableSessionKeyCaching = value.disableSessionKeyCaching;
      this._maxSessionKeys = value.maxSessionKeys;
      this._sni = value.sni;
      this._certParams.internalValue = value.certParams;
      this._commonParams.internalValue = value.commonParams;
      this._disableSni.internalValue = value.disableSni;
      this._useHostHeaderAsSni.internalValue = value.useHostHeaderAsSni;
    }
  }

  // default_session_key_caching - computed: false, optional: true, required: false
  private _defaultSessionKeyCaching?: boolean | cdktf.IResolvable; 
  public get defaultSessionKeyCaching() {
    return this.getBooleanAttribute('default_session_key_caching');
  }
  public set defaultSessionKeyCaching(value: boolean | cdktf.IResolvable) {
    this._defaultSessionKeyCaching = value;
  }
  public resetDefaultSessionKeyCaching() {
    this._defaultSessionKeyCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSessionKeyCachingInput() {
    return this._defaultSessionKeyCaching;
  }

  // disable_session_key_caching - computed: false, optional: true, required: false
  private _disableSessionKeyCaching?: boolean | cdktf.IResolvable; 
  public get disableSessionKeyCaching() {
    return this.getBooleanAttribute('disable_session_key_caching');
  }
  public set disableSessionKeyCaching(value: boolean | cdktf.IResolvable) {
    this._disableSessionKeyCaching = value;
  }
  public resetDisableSessionKeyCaching() {
    this._disableSessionKeyCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionKeyCachingInput() {
    return this._disableSessionKeyCaching;
  }

  // max_session_keys - computed: false, optional: true, required: false
  private _maxSessionKeys?: number; 
  public get maxSessionKeys() {
    return this.getNumberAttribute('max_session_keys');
  }
  public set maxSessionKeys(value: number) {
    this._maxSessionKeys = value;
  }
  public resetMaxSessionKeys() {
    this._maxSessionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionKeysInput() {
    return this._maxSessionKeys;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // cert_params - computed: false, optional: true, required: false
  private _certParams = new ClusterTlsParametersCertParamsOutputReference(this, "cert_params");
  public get certParams() {
    return this._certParams;
  }
  public putCertParams(value: ClusterTlsParametersCertParams) {
    this._certParams.internalValue = value;
  }
  public resetCertParams() {
    this._certParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certParamsInput() {
    return this._certParams.internalValue;
  }

  // common_params - computed: false, optional: true, required: false
  private _commonParams = new ClusterTlsParametersCommonParamsOutputReference(this, "common_params");
  public get commonParams() {
    return this._commonParams;
  }
  public putCommonParams(value: ClusterTlsParametersCommonParams) {
    this._commonParams.internalValue = value;
  }
  public resetCommonParams() {
    this._commonParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonParamsInput() {
    return this._commonParams.internalValue;
  }

  // disable_sni - computed: false, optional: true, required: false
  private _disableSni = new ClusterTlsParametersDisableSniOutputReference(this, "disable_sni");
  public get disableSni() {
    return this._disableSni;
  }
  public putDisableSni(value: ClusterTlsParametersDisableSni) {
    this._disableSni.internalValue = value;
  }
  public resetDisableSni() {
    this._disableSni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniInput() {
    return this._disableSni.internalValue;
  }

  // use_host_header_as_sni - computed: false, optional: true, required: false
  private _useHostHeaderAsSni = new ClusterTlsParametersUseHostHeaderAsSniOutputReference(this, "use_host_header_as_sni");
  public get useHostHeaderAsSni() {
    return this._useHostHeaderAsSni;
  }
  public putUseHostHeaderAsSni(value: ClusterTlsParametersUseHostHeaderAsSni) {
    this._useHostHeaderAsSni.internalValue = value;
  }
  public resetUseHostHeaderAsSni() {
    this._useHostHeaderAsSni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostHeaderAsSniInput() {
    return this._useHostHeaderAsSni.internalValue;
  }
}
export interface ClusterUpstreamConnPoolReuseType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#disable_conn_pool_reuse Cluster#disable_conn_pool_reuse}
  */
  readonly disableConnPoolReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#enable_conn_pool_reuse Cluster#enable_conn_pool_reuse}
  */
  readonly enableConnPoolReuse?: boolean | cdktf.IResolvable;
}

export function clusterUpstreamConnPoolReuseTypeToTerraform(struct?: ClusterUpstreamConnPoolReuseTypeOutputReference | ClusterUpstreamConnPoolReuseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_conn_pool_reuse: cdktf.booleanToTerraform(struct!.disableConnPoolReuse),
    enable_conn_pool_reuse: cdktf.booleanToTerraform(struct!.enableConnPoolReuse),
  }
}


export function clusterUpstreamConnPoolReuseTypeToHclTerraform(struct?: ClusterUpstreamConnPoolReuseTypeOutputReference | ClusterUpstreamConnPoolReuseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_conn_pool_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.disableConnPoolReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_conn_pool_reuse: {
      value: cdktf.booleanToHclTerraform(struct!.enableConnPoolReuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterUpstreamConnPoolReuseTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterUpstreamConnPoolReuseType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableConnPoolReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConnPoolReuse = this._disableConnPoolReuse;
    }
    if (this._enableConnPoolReuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConnPoolReuse = this._enableConnPoolReuse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterUpstreamConnPoolReuseType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableConnPoolReuse = undefined;
      this._enableConnPoolReuse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableConnPoolReuse = value.disableConnPoolReuse;
      this._enableConnPoolReuse = value.enableConnPoolReuse;
    }
  }

  // disable_conn_pool_reuse - computed: false, optional: true, required: false
  private _disableConnPoolReuse?: boolean | cdktf.IResolvable; 
  public get disableConnPoolReuse() {
    return this.getBooleanAttribute('disable_conn_pool_reuse');
  }
  public set disableConnPoolReuse(value: boolean | cdktf.IResolvable) {
    this._disableConnPoolReuse = value;
  }
  public resetDisableConnPoolReuse() {
    this._disableConnPoolReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConnPoolReuseInput() {
    return this._disableConnPoolReuse;
  }

  // enable_conn_pool_reuse - computed: false, optional: true, required: false
  private _enableConnPoolReuse?: boolean | cdktf.IResolvable; 
  public get enableConnPoolReuse() {
    return this.getBooleanAttribute('enable_conn_pool_reuse');
  }
  public set enableConnPoolReuse(value: boolean | cdktf.IResolvable) {
    this._enableConnPoolReuse = value;
  }
  public resetEnableConnPoolReuse() {
    this._enableConnPoolReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConnPoolReuseInput() {
    return this._enableConnPoolReuse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster volterra_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/cluster volterra_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_cluster',
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
    this._autoHttpConfig = config.autoHttpConfig;
    this._connectionTimeout = config.connectionTimeout;
    this._defaultSubset = config.defaultSubset;
    this._description = config.description;
    this._disable = config.disable;
    this._disableProxyProtocol = config.disableProxyProtocol;
    this._endpointSelection = config.endpointSelection;
    this._fallbackPolicy = config.fallbackPolicy;
    this._httpIdleTimeout = config.httpIdleTimeout;
    this._id = config.id;
    this._labels = config.labels;
    this._loadbalancerAlgorithm = config.loadbalancerAlgorithm;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noPanicThreshold = config.noPanicThreshold;
    this._panicThreshold = config.panicThreshold;
    this._proxyProtocolV1 = config.proxyProtocolV1;
    this._proxyProtocolV2 = config.proxyProtocolV2;
    this._circuitBreaker.internalValue = config.circuitBreaker;
    this._endpointSubsets.internalValue = config.endpointSubsets;
    this._endpoints.internalValue = config.endpoints;
    this._headerTransformationType.internalValue = config.headerTransformationType;
    this._healthChecks.internalValue = config.healthChecks;
    this._http1Config.internalValue = config.http1Config;
    this._http2Options.internalValue = config.http2Options;
    this._outlierDetection.internalValue = config.outlierDetection;
    this._tlsParameters.internalValue = config.tlsParameters;
    this._upstreamConnPoolReuseType.internalValue = config.upstreamConnPoolReuseType;
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

  // auto_http_config - computed: false, optional: true, required: false
  private _autoHttpConfig?: boolean | cdktf.IResolvable; 
  public get autoHttpConfig() {
    return this.getBooleanAttribute('auto_http_config');
  }
  public set autoHttpConfig(value: boolean | cdktf.IResolvable) {
    this._autoHttpConfig = value;
  }
  public resetAutoHttpConfig() {
    this._autoHttpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHttpConfigInput() {
    return this._autoHttpConfig;
  }

  // connection_timeout - computed: false, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // default_subset - computed: false, optional: true, required: false
  private _defaultSubset?: { [key: string]: string }; 
  public get defaultSubset() {
    return this.getStringMapAttribute('default_subset');
  }
  public set defaultSubset(value: { [key: string]: string }) {
    this._defaultSubset = value;
  }
  public resetDefaultSubset() {
    this._defaultSubset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubsetInput() {
    return this._defaultSubset;
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

  // disable_proxy_protocol - computed: false, optional: true, required: false
  private _disableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get disableProxyProtocol() {
    return this.getBooleanAttribute('disable_proxy_protocol');
  }
  public set disableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._disableProxyProtocol = value;
  }
  public resetDisableProxyProtocol() {
    this._disableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProxyProtocolInput() {
    return this._disableProxyProtocol;
  }

  // endpoint_selection - computed: false, optional: true, required: false
  private _endpointSelection?: string; 
  public get endpointSelection() {
    return this.getStringAttribute('endpoint_selection');
  }
  public set endpointSelection(value: string) {
    this._endpointSelection = value;
  }
  public resetEndpointSelection() {
    this._endpointSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSelectionInput() {
    return this._endpointSelection;
  }

  // fallback_policy - computed: false, optional: true, required: false
  private _fallbackPolicy?: string; 
  public get fallbackPolicy() {
    return this.getStringAttribute('fallback_policy');
  }
  public set fallbackPolicy(value: string) {
    this._fallbackPolicy = value;
  }
  public resetFallbackPolicy() {
    this._fallbackPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPolicyInput() {
    return this._fallbackPolicy;
  }

  // http_idle_timeout - computed: false, optional: true, required: false
  private _httpIdleTimeout?: number; 
  public get httpIdleTimeout() {
    return this.getNumberAttribute('http_idle_timeout');
  }
  public set httpIdleTimeout(value: number) {
    this._httpIdleTimeout = value;
  }
  public resetHttpIdleTimeout() {
    this._httpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIdleTimeoutInput() {
    return this._httpIdleTimeout;
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

  // loadbalancer_algorithm - computed: false, optional: true, required: false
  private _loadbalancerAlgorithm?: string; 
  public get loadbalancerAlgorithm() {
    return this.getStringAttribute('loadbalancer_algorithm');
  }
  public set loadbalancerAlgorithm(value: string) {
    this._loadbalancerAlgorithm = value;
  }
  public resetLoadbalancerAlgorithm() {
    this._loadbalancerAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerAlgorithmInput() {
    return this._loadbalancerAlgorithm;
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

  // no_panic_threshold - computed: false, optional: true, required: false
  private _noPanicThreshold?: boolean | cdktf.IResolvable; 
  public get noPanicThreshold() {
    return this.getBooleanAttribute('no_panic_threshold');
  }
  public set noPanicThreshold(value: boolean | cdktf.IResolvable) {
    this._noPanicThreshold = value;
  }
  public resetNoPanicThreshold() {
    this._noPanicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPanicThresholdInput() {
    return this._noPanicThreshold;
  }

  // panic_threshold - computed: false, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // proxy_protocol_v1 - computed: false, optional: true, required: false
  private _proxyProtocolV1?: boolean | cdktf.IResolvable; 
  public get proxyProtocolV1() {
    return this.getBooleanAttribute('proxy_protocol_v1');
  }
  public set proxyProtocolV1(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolV1 = value;
  }
  public resetProxyProtocolV1() {
    this._proxyProtocolV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolV1Input() {
    return this._proxyProtocolV1;
  }

  // proxy_protocol_v2 - computed: false, optional: true, required: false
  private _proxyProtocolV2?: boolean | cdktf.IResolvable; 
  public get proxyProtocolV2() {
    return this.getBooleanAttribute('proxy_protocol_v2');
  }
  public set proxyProtocolV2(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolV2 = value;
  }
  public resetProxyProtocolV2() {
    this._proxyProtocolV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolV2Input() {
    return this._proxyProtocolV2;
  }

  // circuit_breaker - computed: false, optional: true, required: false
  private _circuitBreaker = new ClusterCircuitBreakerOutputReference(this, "circuit_breaker");
  public get circuitBreaker() {
    return this._circuitBreaker;
  }
  public putCircuitBreaker(value: ClusterCircuitBreaker) {
    this._circuitBreaker.internalValue = value;
  }
  public resetCircuitBreaker() {
    this._circuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakerInput() {
    return this._circuitBreaker.internalValue;
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets = new ClusterEndpointSubsetsList(this, "endpoint_subsets", false);
  public get endpointSubsets() {
    return this._endpointSubsets;
  }
  public putEndpointSubsets(value: ClusterEndpointSubsets[] | cdktf.IResolvable) {
    this._endpointSubsets.internalValue = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets.internalValue;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints = new ClusterEndpointsList(this, "endpoints", false);
  public get endpoints() {
    return this._endpoints;
  }
  public putEndpoints(value: ClusterEndpoints[] | cdktf.IResolvable) {
    this._endpoints.internalValue = value;
  }
  public resetEndpoints() {
    this._endpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints.internalValue;
  }

  // header_transformation_type - computed: false, optional: true, required: false
  private _headerTransformationType = new ClusterHeaderTransformationTypeOutputReference(this, "header_transformation_type");
  public get headerTransformationType() {
    return this._headerTransformationType;
  }
  public putHeaderTransformationType(value: ClusterHeaderTransformationType) {
    this._headerTransformationType.internalValue = value;
  }
  public resetHeaderTransformationType() {
    this._headerTransformationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerTransformationTypeInput() {
    return this._headerTransformationType.internalValue;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new ClusterHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: ClusterHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // http1_config - computed: false, optional: true, required: false
  private _http1Config = new ClusterHttp1ConfigOutputReference(this, "http1_config");
  public get http1Config() {
    return this._http1Config;
  }
  public putHttp1Config(value: ClusterHttp1Config) {
    this._http1Config.internalValue = value;
  }
  public resetHttp1Config() {
    this._http1Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1ConfigInput() {
    return this._http1Config.internalValue;
  }

  // http2_options - computed: false, optional: true, required: false
  private _http2Options = new ClusterHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: ClusterHttp2Options) {
    this._http2Options.internalValue = value;
  }
  public resetHttp2Options() {
    this._http2Options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2OptionsInput() {
    return this._http2Options.internalValue;
  }

  // outlier_detection - computed: false, optional: true, required: false
  private _outlierDetection = new ClusterOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: ClusterOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }

  // tls_parameters - computed: false, optional: true, required: false
  private _tlsParameters = new ClusterTlsParametersOutputReference(this, "tls_parameters");
  public get tlsParameters() {
    return this._tlsParameters;
  }
  public putTlsParameters(value: ClusterTlsParameters) {
    this._tlsParameters.internalValue = value;
  }
  public resetTlsParameters() {
    this._tlsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsParametersInput() {
    return this._tlsParameters.internalValue;
  }

  // upstream_conn_pool_reuse_type - computed: false, optional: true, required: false
  private _upstreamConnPoolReuseType = new ClusterUpstreamConnPoolReuseTypeOutputReference(this, "upstream_conn_pool_reuse_type");
  public get upstreamConnPoolReuseType() {
    return this._upstreamConnPoolReuseType;
  }
  public putUpstreamConnPoolReuseType(value: ClusterUpstreamConnPoolReuseType) {
    this._upstreamConnPoolReuseType.internalValue = value;
  }
  public resetUpstreamConnPoolReuseType() {
    this._upstreamConnPoolReuseType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnPoolReuseTypeInput() {
    return this._upstreamConnPoolReuseType.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      auto_http_config: cdktf.booleanToTerraform(this._autoHttpConfig),
      connection_timeout: cdktf.numberToTerraform(this._connectionTimeout),
      default_subset: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultSubset),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_proxy_protocol: cdktf.booleanToTerraform(this._disableProxyProtocol),
      endpoint_selection: cdktf.stringToTerraform(this._endpointSelection),
      fallback_policy: cdktf.stringToTerraform(this._fallbackPolicy),
      http_idle_timeout: cdktf.numberToTerraform(this._httpIdleTimeout),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      loadbalancer_algorithm: cdktf.stringToTerraform(this._loadbalancerAlgorithm),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_panic_threshold: cdktf.booleanToTerraform(this._noPanicThreshold),
      panic_threshold: cdktf.numberToTerraform(this._panicThreshold),
      proxy_protocol_v1: cdktf.booleanToTerraform(this._proxyProtocolV1),
      proxy_protocol_v2: cdktf.booleanToTerraform(this._proxyProtocolV2),
      circuit_breaker: clusterCircuitBreakerToTerraform(this._circuitBreaker.internalValue),
      endpoint_subsets: cdktf.listMapper(clusterEndpointSubsetsToTerraform, true)(this._endpointSubsets.internalValue),
      endpoints: cdktf.listMapper(clusterEndpointsToTerraform, true)(this._endpoints.internalValue),
      header_transformation_type: clusterHeaderTransformationTypeToTerraform(this._headerTransformationType.internalValue),
      health_checks: cdktf.listMapper(clusterHealthChecksToTerraform, true)(this._healthChecks.internalValue),
      http1_config: clusterHttp1ConfigToTerraform(this._http1Config.internalValue),
      http2_options: clusterHttp2OptionsToTerraform(this._http2Options.internalValue),
      outlier_detection: clusterOutlierDetectionToTerraform(this._outlierDetection.internalValue),
      tls_parameters: clusterTlsParametersToTerraform(this._tlsParameters.internalValue),
      upstream_conn_pool_reuse_type: clusterUpstreamConnPoolReuseTypeToTerraform(this._upstreamConnPoolReuseType.internalValue),
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
      auto_http_config: {
        value: cdktf.booleanToHclTerraform(this._autoHttpConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_timeout: {
        value: cdktf.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_subset: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultSubset),
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
      disable_proxy_protocol: {
        value: cdktf.booleanToHclTerraform(this._disableProxyProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_selection: {
        value: cdktf.stringToHclTerraform(this._endpointSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_policy: {
        value: cdktf.stringToHclTerraform(this._fallbackPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._httpIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      loadbalancer_algorithm: {
        value: cdktf.stringToHclTerraform(this._loadbalancerAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      no_panic_threshold: {
        value: cdktf.booleanToHclTerraform(this._noPanicThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      panic_threshold: {
        value: cdktf.numberToHclTerraform(this._panicThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_protocol_v1: {
        value: cdktf.booleanToHclTerraform(this._proxyProtocolV1),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_protocol_v2: {
        value: cdktf.booleanToHclTerraform(this._proxyProtocolV2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      circuit_breaker: {
        value: clusterCircuitBreakerToHclTerraform(this._circuitBreaker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterCircuitBreakerList",
      },
      endpoint_subsets: {
        value: cdktf.listMapperHcl(clusterEndpointSubsetsToHclTerraform, true)(this._endpointSubsets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEndpointSubsetsList",
      },
      endpoints: {
        value: cdktf.listMapperHcl(clusterEndpointsToHclTerraform, true)(this._endpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterEndpointsList",
      },
      header_transformation_type: {
        value: clusterHeaderTransformationTypeToHclTerraform(this._headerTransformationType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterHeaderTransformationTypeList",
      },
      health_checks: {
        value: cdktf.listMapperHcl(clusterHealthChecksToHclTerraform, true)(this._healthChecks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterHealthChecksList",
      },
      http1_config: {
        value: clusterHttp1ConfigToHclTerraform(this._http1Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterHttp1ConfigList",
      },
      http2_options: {
        value: clusterHttp2OptionsToHclTerraform(this._http2Options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterHttp2OptionsList",
      },
      outlier_detection: {
        value: clusterOutlierDetectionToHclTerraform(this._outlierDetection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOutlierDetectionList",
      },
      tls_parameters: {
        value: clusterTlsParametersToHclTerraform(this._tlsParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterTlsParametersList",
      },
      upstream_conn_pool_reuse_type: {
        value: clusterUpstreamConnPoolReuseTypeToHclTerraform(this._upstreamConnPoolReuseType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterUpstreamConnPoolReuseTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
