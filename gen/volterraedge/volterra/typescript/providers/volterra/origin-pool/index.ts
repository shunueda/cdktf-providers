// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OriginPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#annotations OriginPool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#automatic_port OriginPool#automatic_port}
  */
  readonly automaticPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#description OriginPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable OriginPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#endpoint_selection OriginPool#endpoint_selection}
  */
  readonly endpointSelection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#health_check_port OriginPool#health_check_port}
  */
  readonly healthCheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#id OriginPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#labels OriginPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#lb_port OriginPool#lb_port}
  */
  readonly lbPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#loadbalancer_algorithm OriginPool#loadbalancer_algorithm}
  */
  readonly loadbalancerAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_tls OriginPool#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#port OriginPool#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#same_as_endpoint_port OriginPool#same_as_endpoint_port}
  */
  readonly sameAsEndpointPort?: boolean | cdktf.IResolvable;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#advanced_options OriginPool#advanced_options}
  */
  readonly advancedOptions?: OriginPoolAdvancedOptions;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#healthcheck OriginPool#healthcheck}
  */
  readonly healthcheck?: OriginPoolHealthcheck[] | cdktf.IResolvable;
  /**
  * origin_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#origin_servers OriginPool#origin_servers}
  */
  readonly originServers: OriginPoolOriginServers[] | cdktf.IResolvable;
  /**
  * upstream_conn_pool_reuse_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#upstream_conn_pool_reuse_type OriginPool#upstream_conn_pool_reuse_type}
  */
  readonly upstreamConnPoolReuseType?: OriginPoolUpstreamConnPoolReuseType;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#use_tls OriginPool#use_tls}
  */
  readonly useTls?: OriginPoolUseTls;
}
export interface OriginPoolAdvancedOptionsCircuitBreaker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#connection_limit OriginPool#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#max_requests OriginPool#max_requests}
  */
  readonly maxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#pending_requests OriginPool#pending_requests}
  */
  readonly pendingRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#priority OriginPool#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#retries OriginPool#retries}
  */
  readonly retries?: number;
}

export function originPoolAdvancedOptionsCircuitBreakerToTerraform(struct?: OriginPoolAdvancedOptionsCircuitBreakerOutputReference | OriginPoolAdvancedOptionsCircuitBreaker): any {
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


export function originPoolAdvancedOptionsCircuitBreakerToHclTerraform(struct?: OriginPoolAdvancedOptionsCircuitBreakerOutputReference | OriginPoolAdvancedOptionsCircuitBreaker): any {
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

export class OriginPoolAdvancedOptionsCircuitBreakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsCircuitBreaker | undefined {
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

  public set internalValue(value: OriginPoolAdvancedOptionsCircuitBreaker | undefined) {
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
export interface OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#default_subset OriginPool#default_subset}
  */
  readonly defaultSubset?: { [key: string]: string };
}

export function originPoolAdvancedOptionsEnableSubsetsDefaultSubsetToTerraform(struct?: OriginPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference | OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_subset: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.defaultSubset),
  }
}


export function originPoolAdvancedOptionsEnableSubsetsDefaultSubsetToHclTerraform(struct?: OriginPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference | OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_subset: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.defaultSubset),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSubset !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubset = this._defaultSubset;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSubset = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSubset = value.defaultSubset;
    }
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
}
export interface OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#keys OriginPool#keys}
  */
  readonly keys: string[];
}

export function originPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToTerraform(struct?: OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function originPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToHclTerraform(struct?: OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable): any {
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

export class OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets | cdktf.IResolvable | undefined) {
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

export class OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsetsList extends cdktf.ComplexList {
  public internalValue? : OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets[] | cdktf.IResolvable

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
  public get(index: number): OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsetsOutputReference {
    return new OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginPoolAdvancedOptionsEnableSubsets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#any_endpoint OriginPool#any_endpoint}
  */
  readonly anyEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#fail_request OriginPool#fail_request}
  */
  readonly failRequest?: boolean | cdktf.IResolvable;
  /**
  * default_subset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#default_subset OriginPool#default_subset}
  */
  readonly defaultSubset?: OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset;
  /**
  * endpoint_subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#endpoint_subsets OriginPool#endpoint_subsets}
  */
  readonly endpointSubsets: OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets[] | cdktf.IResolvable;
}

export function originPoolAdvancedOptionsEnableSubsetsToTerraform(struct?: OriginPoolAdvancedOptionsEnableSubsetsOutputReference | OriginPoolAdvancedOptionsEnableSubsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_endpoint: cdktf.booleanToTerraform(struct!.anyEndpoint),
    fail_request: cdktf.booleanToTerraform(struct!.failRequest),
    default_subset: originPoolAdvancedOptionsEnableSubsetsDefaultSubsetToTerraform(struct!.defaultSubset),
    endpoint_subsets: cdktf.listMapper(originPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToTerraform, true)(struct!.endpointSubsets),
  }
}


export function originPoolAdvancedOptionsEnableSubsetsToHclTerraform(struct?: OriginPoolAdvancedOptionsEnableSubsetsOutputReference | OriginPoolAdvancedOptionsEnableSubsets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.anyEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_request: {
      value: cdktf.booleanToHclTerraform(struct!.failRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_subset: {
      value: originPoolAdvancedOptionsEnableSubsetsDefaultSubsetToHclTerraform(struct!.defaultSubset),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsEnableSubsetsDefaultSubsetList",
    },
    endpoint_subsets: {
      value: cdktf.listMapperHcl(originPoolAdvancedOptionsEnableSubsetsEndpointSubsetsToHclTerraform, true)(struct!.endpointSubsets),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolAdvancedOptionsEnableSubsetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsEnableSubsets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyEndpoint = this._anyEndpoint;
    }
    if (this._failRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.failRequest = this._failRequest;
    }
    if (this._defaultSubset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSubset = this._defaultSubset?.internalValue;
    }
    if (this._endpointSubsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolAdvancedOptionsEnableSubsets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyEndpoint = undefined;
      this._failRequest = undefined;
      this._defaultSubset.internalValue = undefined;
      this._endpointSubsets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyEndpoint = value.anyEndpoint;
      this._failRequest = value.failRequest;
      this._defaultSubset.internalValue = value.defaultSubset;
      this._endpointSubsets.internalValue = value.endpointSubsets;
    }
  }

  // any_endpoint - computed: false, optional: true, required: false
  private _anyEndpoint?: boolean | cdktf.IResolvable; 
  public get anyEndpoint() {
    return this.getBooleanAttribute('any_endpoint');
  }
  public set anyEndpoint(value: boolean | cdktf.IResolvable) {
    this._anyEndpoint = value;
  }
  public resetAnyEndpoint() {
    this._anyEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyEndpointInput() {
    return this._anyEndpoint;
  }

  // fail_request - computed: false, optional: true, required: false
  private _failRequest?: boolean | cdktf.IResolvable; 
  public get failRequest() {
    return this.getBooleanAttribute('fail_request');
  }
  public set failRequest(value: boolean | cdktf.IResolvable) {
    this._failRequest = value;
  }
  public resetFailRequest() {
    this._failRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failRequestInput() {
    return this._failRequest;
  }

  // default_subset - computed: false, optional: true, required: false
  private _defaultSubset = new OriginPoolAdvancedOptionsEnableSubsetsDefaultSubsetOutputReference(this, "default_subset");
  public get defaultSubset() {
    return this._defaultSubset;
  }
  public putDefaultSubset(value: OriginPoolAdvancedOptionsEnableSubsetsDefaultSubset) {
    this._defaultSubset.internalValue = value;
  }
  public resetDefaultSubset() {
    this._defaultSubset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubsetInput() {
    return this._defaultSubset.internalValue;
  }

  // endpoint_subsets - computed: false, optional: false, required: true
  private _endpointSubsets = new OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsetsList(this, "endpoint_subsets", false);
  public get endpointSubsets() {
    return this._endpointSubsets;
  }
  public putEndpointSubsets(value: OriginPoolAdvancedOptionsEnableSubsetsEndpointSubsets[] | cdktf.IResolvable) {
    this._endpointSubsets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets.internalValue;
  }
}
export interface OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#default_header_transformation OriginPool#default_header_transformation}
  */
  readonly defaultHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#legacy_header_transformation OriginPool#legacy_header_transformation}
  */
  readonly legacyHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#preserve_case_header_transformation OriginPool#preserve_case_header_transformation}
  */
  readonly preserveCaseHeaderTransformation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#proper_case_header_transformation OriginPool#proper_case_header_transformation}
  */
  readonly properCaseHeaderTransformation?: boolean | cdktf.IResolvable;
}

export function originPoolAdvancedOptionsHttp1ConfigHeaderTransformationToTerraform(struct?: OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference | OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation): any {
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


export function originPoolAdvancedOptionsHttp1ConfigHeaderTransformationToHclTerraform(struct?: OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference | OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation): any {
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

export class OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation | undefined {
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

  public set internalValue(value: OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation | undefined) {
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
export interface OriginPoolAdvancedOptionsHttp1Config {
  /**
  * header_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#header_transformation OriginPool#header_transformation}
  */
  readonly headerTransformation?: OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation;
}

export function originPoolAdvancedOptionsHttp1ConfigToTerraform(struct?: OriginPoolAdvancedOptionsHttp1ConfigOutputReference | OriginPoolAdvancedOptionsHttp1Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_transformation: originPoolAdvancedOptionsHttp1ConfigHeaderTransformationToTerraform(struct!.headerTransformation),
  }
}


export function originPoolAdvancedOptionsHttp1ConfigToHclTerraform(struct?: OriginPoolAdvancedOptionsHttp1ConfigOutputReference | OriginPoolAdvancedOptionsHttp1Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_transformation: {
      value: originPoolAdvancedOptionsHttp1ConfigHeaderTransformationToHclTerraform(struct!.headerTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolAdvancedOptionsHttp1ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsHttp1Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerTransformation = this._headerTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolAdvancedOptionsHttp1Config | undefined) {
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
  private _headerTransformation = new OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformationOutputReference(this, "header_transformation");
  public get headerTransformation() {
    return this._headerTransformation;
  }
  public putHeaderTransformation(value: OriginPoolAdvancedOptionsHttp1ConfigHeaderTransformation) {
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
export interface OriginPoolAdvancedOptionsHttp2Options {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#enabled OriginPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function originPoolAdvancedOptionsHttp2OptionsToTerraform(struct?: OriginPoolAdvancedOptionsHttp2OptionsOutputReference | OriginPoolAdvancedOptionsHttp2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function originPoolAdvancedOptionsHttp2OptionsToHclTerraform(struct?: OriginPoolAdvancedOptionsHttp2OptionsOutputReference | OriginPoolAdvancedOptionsHttp2Options): any {
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

export class OriginPoolAdvancedOptionsHttp2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsHttp2Options | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolAdvancedOptionsHttp2Options | undefined) {
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
export interface OriginPoolAdvancedOptionsOutlierDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#base_ejection_time OriginPool#base_ejection_time}
  */
  readonly baseEjectionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#consecutive_5xx OriginPool#consecutive_5xx}
  */
  readonly consecutive5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#consecutive_gateway_failure OriginPool#consecutive_gateway_failure}
  */
  readonly consecutiveGatewayFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#interval OriginPool#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#max_ejection_percent OriginPool#max_ejection_percent}
  */
  readonly maxEjectionPercent?: number;
}

export function originPoolAdvancedOptionsOutlierDetectionToTerraform(struct?: OriginPoolAdvancedOptionsOutlierDetectionOutputReference | OriginPoolAdvancedOptionsOutlierDetection): any {
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


export function originPoolAdvancedOptionsOutlierDetectionToHclTerraform(struct?: OriginPoolAdvancedOptionsOutlierDetectionOutputReference | OriginPoolAdvancedOptionsOutlierDetection): any {
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

export class OriginPoolAdvancedOptionsOutlierDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptionsOutlierDetection | undefined {
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

  public set internalValue(value: OriginPoolAdvancedOptionsOutlierDetection | undefined) {
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
export interface OriginPoolAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#auto_http_config OriginPool#auto_http_config}
  */
  readonly autoHttpConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#connection_timeout OriginPool#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#default_circuit_breaker OriginPool#default_circuit_breaker}
  */
  readonly defaultCircuitBreaker?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_circuit_breaker OriginPool#disable_circuit_breaker}
  */
  readonly disableCircuitBreaker?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_lb_source_ip_persistance OriginPool#disable_lb_source_ip_persistance}
  */
  readonly disableLbSourceIpPersistance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_outlier_detection OriginPool#disable_outlier_detection}
  */
  readonly disableOutlierDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_proxy_protocol OriginPool#disable_proxy_protocol}
  */
  readonly disableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_subsets OriginPool#disable_subsets}
  */
  readonly disableSubsets?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#enable_lb_source_ip_persistance OriginPool#enable_lb_source_ip_persistance}
  */
  readonly enableLbSourceIpPersistance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#http_idle_timeout OriginPool#http_idle_timeout}
  */
  readonly httpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_panic_threshold OriginPool#no_panic_threshold}
  */
  readonly noPanicThreshold?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#panic_threshold OriginPool#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#proxy_protocol_v1 OriginPool#proxy_protocol_v1}
  */
  readonly proxyProtocolV1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#proxy_protocol_v2 OriginPool#proxy_protocol_v2}
  */
  readonly proxyProtocolV2?: boolean | cdktf.IResolvable;
  /**
  * circuit_breaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#circuit_breaker OriginPool#circuit_breaker}
  */
  readonly circuitBreaker?: OriginPoolAdvancedOptionsCircuitBreaker;
  /**
  * enable_subsets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#enable_subsets OriginPool#enable_subsets}
  */
  readonly enableSubsets?: OriginPoolAdvancedOptionsEnableSubsets;
  /**
  * http1_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#http1_config OriginPool#http1_config}
  */
  readonly http1Config?: OriginPoolAdvancedOptionsHttp1Config;
  /**
  * http2_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#http2_options OriginPool#http2_options}
  */
  readonly http2Options?: OriginPoolAdvancedOptionsHttp2Options;
  /**
  * outlier_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#outlier_detection OriginPool#outlier_detection}
  */
  readonly outlierDetection?: OriginPoolAdvancedOptionsOutlierDetection;
}

export function originPoolAdvancedOptionsToTerraform(struct?: OriginPoolAdvancedOptionsOutputReference | OriginPoolAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_http_config: cdktf.booleanToTerraform(struct!.autoHttpConfig),
    connection_timeout: cdktf.numberToTerraform(struct!.connectionTimeout),
    default_circuit_breaker: cdktf.booleanToTerraform(struct!.defaultCircuitBreaker),
    disable_circuit_breaker: cdktf.booleanToTerraform(struct!.disableCircuitBreaker),
    disable_lb_source_ip_persistance: cdktf.booleanToTerraform(struct!.disableLbSourceIpPersistance),
    disable_outlier_detection: cdktf.booleanToTerraform(struct!.disableOutlierDetection),
    disable_proxy_protocol: cdktf.booleanToTerraform(struct!.disableProxyProtocol),
    disable_subsets: cdktf.booleanToTerraform(struct!.disableSubsets),
    enable_lb_source_ip_persistance: cdktf.booleanToTerraform(struct!.enableLbSourceIpPersistance),
    http_idle_timeout: cdktf.numberToTerraform(struct!.httpIdleTimeout),
    no_panic_threshold: cdktf.booleanToTerraform(struct!.noPanicThreshold),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    proxy_protocol_v1: cdktf.booleanToTerraform(struct!.proxyProtocolV1),
    proxy_protocol_v2: cdktf.booleanToTerraform(struct!.proxyProtocolV2),
    circuit_breaker: originPoolAdvancedOptionsCircuitBreakerToTerraform(struct!.circuitBreaker),
    enable_subsets: originPoolAdvancedOptionsEnableSubsetsToTerraform(struct!.enableSubsets),
    http1_config: originPoolAdvancedOptionsHttp1ConfigToTerraform(struct!.http1Config),
    http2_options: originPoolAdvancedOptionsHttp2OptionsToTerraform(struct!.http2Options),
    outlier_detection: originPoolAdvancedOptionsOutlierDetectionToTerraform(struct!.outlierDetection),
  }
}


export function originPoolAdvancedOptionsToHclTerraform(struct?: OriginPoolAdvancedOptionsOutputReference | OriginPoolAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_http_config: {
      value: cdktf.booleanToHclTerraform(struct!.autoHttpConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_circuit_breaker: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCircuitBreaker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_circuit_breaker: {
      value: cdktf.booleanToHclTerraform(struct!.disableCircuitBreaker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_lb_source_ip_persistance: {
      value: cdktf.booleanToHclTerraform(struct!.disableLbSourceIpPersistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_outlier_detection: {
      value: cdktf.booleanToHclTerraform(struct!.disableOutlierDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.disableProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_subsets: {
      value: cdktf.booleanToHclTerraform(struct!.disableSubsets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_lb_source_ip_persistance: {
      value: cdktf.booleanToHclTerraform(struct!.enableLbSourceIpPersistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_panic_threshold: {
      value: cdktf.booleanToHclTerraform(struct!.noPanicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    panic_threshold: {
      value: cdktf.numberToHclTerraform(struct!.panicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_protocol_v1: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolV1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_protocol_v2: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolV2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    circuit_breaker: {
      value: originPoolAdvancedOptionsCircuitBreakerToHclTerraform(struct!.circuitBreaker),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsCircuitBreakerList",
    },
    enable_subsets: {
      value: originPoolAdvancedOptionsEnableSubsetsToHclTerraform(struct!.enableSubsets),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsEnableSubsetsList",
    },
    http1_config: {
      value: originPoolAdvancedOptionsHttp1ConfigToHclTerraform(struct!.http1Config),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsHttp1ConfigList",
    },
    http2_options: {
      value: originPoolAdvancedOptionsHttp2OptionsToHclTerraform(struct!.http2Options),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsHttp2OptionsList",
    },
    outlier_detection: {
      value: originPoolAdvancedOptionsOutlierDetectionToHclTerraform(struct!.outlierDetection),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolAdvancedOptionsOutlierDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHttpConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHttpConfig = this._autoHttpConfig;
    }
    if (this._connectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionTimeout = this._connectionTimeout;
    }
    if (this._defaultCircuitBreaker !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCircuitBreaker = this._defaultCircuitBreaker;
    }
    if (this._disableCircuitBreaker !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCircuitBreaker = this._disableCircuitBreaker;
    }
    if (this._disableLbSourceIpPersistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLbSourceIpPersistance = this._disableLbSourceIpPersistance;
    }
    if (this._disableOutlierDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOutlierDetection = this._disableOutlierDetection;
    }
    if (this._disableProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProxyProtocol = this._disableProxyProtocol;
    }
    if (this._disableSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSubsets = this._disableSubsets;
    }
    if (this._enableLbSourceIpPersistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLbSourceIpPersistance = this._enableLbSourceIpPersistance;
    }
    if (this._httpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIdleTimeout = this._httpIdleTimeout;
    }
    if (this._noPanicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPanicThreshold = this._noPanicThreshold;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._proxyProtocolV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolV1 = this._proxyProtocolV1;
    }
    if (this._proxyProtocolV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolV2 = this._proxyProtocolV2;
    }
    if (this._circuitBreaker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitBreaker = this._circuitBreaker?.internalValue;
    }
    if (this._enableSubsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSubsets = this._enableSubsets?.internalValue;
    }
    if (this._http1Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1Config = this._http1Config?.internalValue;
    }
    if (this._http2Options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Options = this._http2Options?.internalValue;
    }
    if (this._outlierDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outlierDetection = this._outlierDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHttpConfig = undefined;
      this._connectionTimeout = undefined;
      this._defaultCircuitBreaker = undefined;
      this._disableCircuitBreaker = undefined;
      this._disableLbSourceIpPersistance = undefined;
      this._disableOutlierDetection = undefined;
      this._disableProxyProtocol = undefined;
      this._disableSubsets = undefined;
      this._enableLbSourceIpPersistance = undefined;
      this._httpIdleTimeout = undefined;
      this._noPanicThreshold = undefined;
      this._panicThreshold = undefined;
      this._proxyProtocolV1 = undefined;
      this._proxyProtocolV2 = undefined;
      this._circuitBreaker.internalValue = undefined;
      this._enableSubsets.internalValue = undefined;
      this._http1Config.internalValue = undefined;
      this._http2Options.internalValue = undefined;
      this._outlierDetection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHttpConfig = value.autoHttpConfig;
      this._connectionTimeout = value.connectionTimeout;
      this._defaultCircuitBreaker = value.defaultCircuitBreaker;
      this._disableCircuitBreaker = value.disableCircuitBreaker;
      this._disableLbSourceIpPersistance = value.disableLbSourceIpPersistance;
      this._disableOutlierDetection = value.disableOutlierDetection;
      this._disableProxyProtocol = value.disableProxyProtocol;
      this._disableSubsets = value.disableSubsets;
      this._enableLbSourceIpPersistance = value.enableLbSourceIpPersistance;
      this._httpIdleTimeout = value.httpIdleTimeout;
      this._noPanicThreshold = value.noPanicThreshold;
      this._panicThreshold = value.panicThreshold;
      this._proxyProtocolV1 = value.proxyProtocolV1;
      this._proxyProtocolV2 = value.proxyProtocolV2;
      this._circuitBreaker.internalValue = value.circuitBreaker;
      this._enableSubsets.internalValue = value.enableSubsets;
      this._http1Config.internalValue = value.http1Config;
      this._http2Options.internalValue = value.http2Options;
      this._outlierDetection.internalValue = value.outlierDetection;
    }
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

  // default_circuit_breaker - computed: false, optional: true, required: false
  private _defaultCircuitBreaker?: boolean | cdktf.IResolvable; 
  public get defaultCircuitBreaker() {
    return this.getBooleanAttribute('default_circuit_breaker');
  }
  public set defaultCircuitBreaker(value: boolean | cdktf.IResolvable) {
    this._defaultCircuitBreaker = value;
  }
  public resetDefaultCircuitBreaker() {
    this._defaultCircuitBreaker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCircuitBreakerInput() {
    return this._defaultCircuitBreaker;
  }

  // disable_circuit_breaker - computed: false, optional: true, required: false
  private _disableCircuitBreaker?: boolean | cdktf.IResolvable; 
  public get disableCircuitBreaker() {
    return this.getBooleanAttribute('disable_circuit_breaker');
  }
  public set disableCircuitBreaker(value: boolean | cdktf.IResolvable) {
    this._disableCircuitBreaker = value;
  }
  public resetDisableCircuitBreaker() {
    this._disableCircuitBreaker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCircuitBreakerInput() {
    return this._disableCircuitBreaker;
  }

  // disable_lb_source_ip_persistance - computed: false, optional: true, required: false
  private _disableLbSourceIpPersistance?: boolean | cdktf.IResolvable; 
  public get disableLbSourceIpPersistance() {
    return this.getBooleanAttribute('disable_lb_source_ip_persistance');
  }
  public set disableLbSourceIpPersistance(value: boolean | cdktf.IResolvable) {
    this._disableLbSourceIpPersistance = value;
  }
  public resetDisableLbSourceIpPersistance() {
    this._disableLbSourceIpPersistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLbSourceIpPersistanceInput() {
    return this._disableLbSourceIpPersistance;
  }

  // disable_outlier_detection - computed: false, optional: true, required: false
  private _disableOutlierDetection?: boolean | cdktf.IResolvable; 
  public get disableOutlierDetection() {
    return this.getBooleanAttribute('disable_outlier_detection');
  }
  public set disableOutlierDetection(value: boolean | cdktf.IResolvable) {
    this._disableOutlierDetection = value;
  }
  public resetDisableOutlierDetection() {
    this._disableOutlierDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOutlierDetectionInput() {
    return this._disableOutlierDetection;
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

  // disable_subsets - computed: false, optional: true, required: false
  private _disableSubsets?: boolean | cdktf.IResolvable; 
  public get disableSubsets() {
    return this.getBooleanAttribute('disable_subsets');
  }
  public set disableSubsets(value: boolean | cdktf.IResolvable) {
    this._disableSubsets = value;
  }
  public resetDisableSubsets() {
    this._disableSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSubsetsInput() {
    return this._disableSubsets;
  }

  // enable_lb_source_ip_persistance - computed: false, optional: true, required: false
  private _enableLbSourceIpPersistance?: boolean | cdktf.IResolvable; 
  public get enableLbSourceIpPersistance() {
    return this.getBooleanAttribute('enable_lb_source_ip_persistance');
  }
  public set enableLbSourceIpPersistance(value: boolean | cdktf.IResolvable) {
    this._enableLbSourceIpPersistance = value;
  }
  public resetEnableLbSourceIpPersistance() {
    this._enableLbSourceIpPersistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLbSourceIpPersistanceInput() {
    return this._enableLbSourceIpPersistance;
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
  private _circuitBreaker = new OriginPoolAdvancedOptionsCircuitBreakerOutputReference(this, "circuit_breaker");
  public get circuitBreaker() {
    return this._circuitBreaker;
  }
  public putCircuitBreaker(value: OriginPoolAdvancedOptionsCircuitBreaker) {
    this._circuitBreaker.internalValue = value;
  }
  public resetCircuitBreaker() {
    this._circuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitBreakerInput() {
    return this._circuitBreaker.internalValue;
  }

  // enable_subsets - computed: false, optional: true, required: false
  private _enableSubsets = new OriginPoolAdvancedOptionsEnableSubsetsOutputReference(this, "enable_subsets");
  public get enableSubsets() {
    return this._enableSubsets;
  }
  public putEnableSubsets(value: OriginPoolAdvancedOptionsEnableSubsets) {
    this._enableSubsets.internalValue = value;
  }
  public resetEnableSubsets() {
    this._enableSubsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSubsetsInput() {
    return this._enableSubsets.internalValue;
  }

  // http1_config - computed: false, optional: true, required: false
  private _http1Config = new OriginPoolAdvancedOptionsHttp1ConfigOutputReference(this, "http1_config");
  public get http1Config() {
    return this._http1Config;
  }
  public putHttp1Config(value: OriginPoolAdvancedOptionsHttp1Config) {
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
  private _http2Options = new OriginPoolAdvancedOptionsHttp2OptionsOutputReference(this, "http2_options");
  public get http2Options() {
    return this._http2Options;
  }
  public putHttp2Options(value: OriginPoolAdvancedOptionsHttp2Options) {
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
  private _outlierDetection = new OriginPoolAdvancedOptionsOutlierDetectionOutputReference(this, "outlier_detection");
  public get outlierDetection() {
    return this._outlierDetection;
  }
  public putOutlierDetection(value: OriginPoolAdvancedOptionsOutlierDetection) {
    this._outlierDetection.internalValue = value;
  }
  public resetOutlierDetection() {
    this._outlierDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outlierDetectionInput() {
    return this._outlierDetection.internalValue;
  }
}
export interface OriginPoolHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolHealthcheckToTerraform(struct?: OriginPoolHealthcheck | cdktf.IResolvable): any {
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


export function originPoolHealthcheckToHclTerraform(struct?: OriginPoolHealthcheck | cdktf.IResolvable): any {
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

export class OriginPoolHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OriginPoolHealthcheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OriginPoolHealthcheck | cdktf.IResolvable | undefined) {
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

export class OriginPoolHealthcheckList extends cdktf.ComplexList {
  public internalValue? : OriginPoolHealthcheck[] | cdktf.IResolvable

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
  public get(index: number): OriginPoolHealthcheckOutputReference {
    return new OriginPoolHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginPoolOriginServersCbipService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#service_name OriginPool#service_name}
  */
  readonly serviceName: string;
}

export function originPoolOriginServersCbipServiceToTerraform(struct?: OriginPoolOriginServersCbipServiceOutputReference | OriginPoolOriginServersCbipService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function originPoolOriginServersCbipServiceToHclTerraform(struct?: OriginPoolOriginServersCbipServiceOutputReference | OriginPoolOriginServersCbipService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersCbipServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersCbipService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolOriginServersCbipService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface OriginPoolOriginServersConsulServiceSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersConsulServiceSiteLocatorSiteToTerraform(struct?: OriginPoolOriginServersConsulServiceSiteLocatorSiteOutputReference | OriginPoolOriginServersConsulServiceSiteLocatorSite): any {
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


export function originPoolOriginServersConsulServiceSiteLocatorSiteToHclTerraform(struct?: OriginPoolOriginServersConsulServiceSiteLocatorSiteOutputReference | OriginPoolOriginServersConsulServiceSiteLocatorSite): any {
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

export class OriginPoolOriginServersConsulServiceSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersConsulServiceSiteLocatorSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersConsulServiceSiteLocatorSite | undefined) {
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
export interface OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersConsulServiceSiteLocatorVirtualSiteToTerraform(struct?: OriginPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite): any {
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


export function originPoolOriginServersConsulServiceSiteLocatorVirtualSiteToHclTerraform(struct?: OriginPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite): any {
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

export class OriginPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite | undefined) {
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
export interface OriginPoolOriginServersConsulServiceSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site OriginPool#site}
  */
  readonly site?: OriginPoolOriginServersConsulServiceSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#virtual_site OriginPool#virtual_site}
  */
  readonly virtualSite?: OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite;
}

export function originPoolOriginServersConsulServiceSiteLocatorToTerraform(struct?: OriginPoolOriginServersConsulServiceSiteLocatorOutputReference | OriginPoolOriginServersConsulServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: originPoolOriginServersConsulServiceSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: originPoolOriginServersConsulServiceSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function originPoolOriginServersConsulServiceSiteLocatorToHclTerraform(struct?: OriginPoolOriginServersConsulServiceSiteLocatorOutputReference | OriginPoolOriginServersConsulServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: originPoolOriginServersConsulServiceSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersConsulServiceSiteLocatorSiteList",
    },
    virtual_site: {
      value: originPoolOriginServersConsulServiceSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersConsulServiceSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersConsulServiceSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersConsulServiceSiteLocator | undefined {
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

  public set internalValue(value: OriginPoolOriginServersConsulServiceSiteLocator | undefined) {
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
  private _site = new OriginPoolOriginServersConsulServiceSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: OriginPoolOriginServersConsulServiceSiteLocatorSite) {
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
  private _virtualSite = new OriginPoolOriginServersConsulServiceSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: OriginPoolOriginServersConsulServiceSiteLocatorVirtualSite) {
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
export interface OriginPoolOriginServersConsulServiceSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6_prefixes OriginPool#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#prefixes OriginPool#prefixes}
  */
  readonly prefixes?: string[];
}

export function originPoolOriginServersConsulServiceSnatPoolSnatPoolToTerraform(struct?: OriginPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference | OriginPoolOriginServersConsulServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function originPoolOriginServersConsulServiceSnatPoolSnatPoolToHclTerraform(struct?: OriginPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference | OriginPoolOriginServersConsulServiceSnatPoolSnatPool): any {
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

export class OriginPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersConsulServiceSnatPoolSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersConsulServiceSnatPoolSnatPool | undefined) {
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
export interface OriginPoolOriginServersConsulServiceSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_snat_pool OriginPool#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersConsulServiceSnatPoolSnatPool;
}

export function originPoolOriginServersConsulServiceSnatPoolToTerraform(struct?: OriginPoolOriginServersConsulServiceSnatPoolOutputReference | OriginPoolOriginServersConsulServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: originPoolOriginServersConsulServiceSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersConsulServiceSnatPoolToHclTerraform(struct?: OriginPoolOriginServersConsulServiceSnatPoolOutputReference | OriginPoolOriginServersConsulServiceSnatPool): any {
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
      value: originPoolOriginServersConsulServiceSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersConsulServiceSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersConsulServiceSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersConsulServiceSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersConsulServiceSnatPool | undefined) {
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
  private _snatPool = new OriginPoolOriginServersConsulServiceSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersConsulServiceSnatPoolSnatPool) {
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
export interface OriginPoolOriginServersConsulService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#inside_network OriginPool#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#outside_network OriginPool#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#service_name OriginPool#service_name}
  */
  readonly serviceName: string;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site_locator OriginPool#site_locator}
  */
  readonly siteLocator: OriginPoolOriginServersConsulServiceSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersConsulServiceSnatPool;
}

export function originPoolOriginServersConsulServiceToTerraform(struct?: OriginPoolOriginServersConsulServiceOutputReference | OriginPoolOriginServersConsulService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    site_locator: originPoolOriginServersConsulServiceSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: originPoolOriginServersConsulServiceSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersConsulServiceToHclTerraform(struct?: OriginPoolOriginServersConsulServiceOutputReference | OriginPoolOriginServersConsulService): any {
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
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_locator: {
      value: originPoolOriginServersConsulServiceSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersConsulServiceSiteLocatorList",
    },
    snat_pool: {
      value: originPoolOriginServersConsulServiceSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersConsulServiceSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersConsulServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersConsulService | undefined {
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
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
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

  public set internalValue(value: OriginPoolOriginServersConsulService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._serviceName = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNetwork = value.insideNetwork;
      this._outsideNetwork = value.outsideNetwork;
      this._serviceName = value.serviceName;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new OriginPoolOriginServersConsulServiceSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: OriginPoolOriginServersConsulServiceSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new OriginPoolOriginServersConsulServiceSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersConsulServiceSnatPool) {
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
export interface OriginPoolOriginServersCustomEndpointObjectEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersCustomEndpointObjectEndpointToTerraform(struct?: OriginPoolOriginServersCustomEndpointObjectEndpointOutputReference | OriginPoolOriginServersCustomEndpointObjectEndpoint): any {
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


export function originPoolOriginServersCustomEndpointObjectEndpointToHclTerraform(struct?: OriginPoolOriginServersCustomEndpointObjectEndpointOutputReference | OriginPoolOriginServersCustomEndpointObjectEndpoint): any {
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

export class OriginPoolOriginServersCustomEndpointObjectEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersCustomEndpointObjectEndpoint | undefined {
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

  public set internalValue(value: OriginPoolOriginServersCustomEndpointObjectEndpoint | undefined) {
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
export interface OriginPoolOriginServersCustomEndpointObject {
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#endpoint OriginPool#endpoint}
  */
  readonly endpoint: OriginPoolOriginServersCustomEndpointObjectEndpoint;
}

export function originPoolOriginServersCustomEndpointObjectToTerraform(struct?: OriginPoolOriginServersCustomEndpointObjectOutputReference | OriginPoolOriginServersCustomEndpointObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: originPoolOriginServersCustomEndpointObjectEndpointToTerraform(struct!.endpoint),
  }
}


export function originPoolOriginServersCustomEndpointObjectToHclTerraform(struct?: OriginPoolOriginServersCustomEndpointObjectOutputReference | OriginPoolOriginServersCustomEndpointObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: originPoolOriginServersCustomEndpointObjectEndpointToHclTerraform(struct!.endpoint),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersCustomEndpointObjectEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersCustomEndpointObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersCustomEndpointObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolOriginServersCustomEndpointObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint.internalValue = value.endpoint;
    }
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new OriginPoolOriginServersCustomEndpointObjectEndpointOutputReference(this, "endpoint");
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: OriginPoolOriginServersCustomEndpointObjectEndpoint) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }
}
export interface OriginPoolOriginServersK8SServiceSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersK8SServiceSiteLocatorSiteToTerraform(struct?: OriginPoolOriginServersK8SServiceSiteLocatorSiteOutputReference | OriginPoolOriginServersK8SServiceSiteLocatorSite): any {
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


export function originPoolOriginServersK8SServiceSiteLocatorSiteToHclTerraform(struct?: OriginPoolOriginServersK8SServiceSiteLocatorSiteOutputReference | OriginPoolOriginServersK8SServiceSiteLocatorSite): any {
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

export class OriginPoolOriginServersK8SServiceSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersK8SServiceSiteLocatorSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersK8SServiceSiteLocatorSite | undefined) {
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
export interface OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersK8SServiceSiteLocatorVirtualSiteToTerraform(struct?: OriginPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite): any {
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


export function originPoolOriginServersK8SServiceSiteLocatorVirtualSiteToHclTerraform(struct?: OriginPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite): any {
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

export class OriginPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite | undefined) {
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
export interface OriginPoolOriginServersK8SServiceSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site OriginPool#site}
  */
  readonly site?: OriginPoolOriginServersK8SServiceSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#virtual_site OriginPool#virtual_site}
  */
  readonly virtualSite?: OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite;
}

export function originPoolOriginServersK8SServiceSiteLocatorToTerraform(struct?: OriginPoolOriginServersK8SServiceSiteLocatorOutputReference | OriginPoolOriginServersK8SServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: originPoolOriginServersK8SServiceSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: originPoolOriginServersK8SServiceSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function originPoolOriginServersK8SServiceSiteLocatorToHclTerraform(struct?: OriginPoolOriginServersK8SServiceSiteLocatorOutputReference | OriginPoolOriginServersK8SServiceSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: originPoolOriginServersK8SServiceSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersK8SServiceSiteLocatorSiteList",
    },
    virtual_site: {
      value: originPoolOriginServersK8SServiceSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersK8SServiceSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersK8SServiceSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersK8SServiceSiteLocator | undefined {
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

  public set internalValue(value: OriginPoolOriginServersK8SServiceSiteLocator | undefined) {
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
  private _site = new OriginPoolOriginServersK8SServiceSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: OriginPoolOriginServersK8SServiceSiteLocatorSite) {
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
  private _virtualSite = new OriginPoolOriginServersK8SServiceSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: OriginPoolOriginServersK8SServiceSiteLocatorVirtualSite) {
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
export interface OriginPoolOriginServersK8SServiceSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6_prefixes OriginPool#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#prefixes OriginPool#prefixes}
  */
  readonly prefixes?: string[];
}

export function originPoolOriginServersK8SServiceSnatPoolSnatPoolToTerraform(struct?: OriginPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference | OriginPoolOriginServersK8SServiceSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function originPoolOriginServersK8SServiceSnatPoolSnatPoolToHclTerraform(struct?: OriginPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference | OriginPoolOriginServersK8SServiceSnatPoolSnatPool): any {
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

export class OriginPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersK8SServiceSnatPoolSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersK8SServiceSnatPoolSnatPool | undefined) {
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
export interface OriginPoolOriginServersK8SServiceSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_snat_pool OriginPool#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersK8SServiceSnatPoolSnatPool;
}

export function originPoolOriginServersK8SServiceSnatPoolToTerraform(struct?: OriginPoolOriginServersK8SServiceSnatPoolOutputReference | OriginPoolOriginServersK8SServiceSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: originPoolOriginServersK8SServiceSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersK8SServiceSnatPoolToHclTerraform(struct?: OriginPoolOriginServersK8SServiceSnatPoolOutputReference | OriginPoolOriginServersK8SServiceSnatPool): any {
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
      value: originPoolOriginServersK8SServiceSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersK8SServiceSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersK8SServiceSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersK8SServiceSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersK8SServiceSnatPool | undefined) {
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
  private _snatPool = new OriginPoolOriginServersK8SServiceSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersK8SServiceSnatPoolSnatPool) {
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
export interface OriginPoolOriginServersK8SService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#inside_network OriginPool#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#outside_network OriginPool#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#protocol OriginPool#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#service_name OriginPool#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#vk8s_networks OriginPool#vk8s_networks}
  */
  readonly vk8SNetworks?: boolean | cdktf.IResolvable;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site_locator OriginPool#site_locator}
  */
  readonly siteLocator: OriginPoolOriginServersK8SServiceSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersK8SServiceSnatPool;
}

export function originPoolOriginServersK8SServiceToTerraform(struct?: OriginPoolOriginServersK8SServiceOutputReference | OriginPoolOriginServersK8SService): any {
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
    site_locator: originPoolOriginServersK8SServiceSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: originPoolOriginServersK8SServiceSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersK8SServiceToHclTerraform(struct?: OriginPoolOriginServersK8SServiceOutputReference | OriginPoolOriginServersK8SService): any {
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
    site_locator: {
      value: originPoolOriginServersK8SServiceSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersK8SServiceSiteLocatorList",
    },
    snat_pool: {
      value: originPoolOriginServersK8SServiceSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersK8SServiceSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersK8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersK8SService | undefined {
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

  public set internalValue(value: OriginPoolOriginServersK8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._protocol = undefined;
      this._serviceName = undefined;
      this._vk8SNetworks = undefined;
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

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new OriginPoolOriginServersK8SServiceSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: OriginPoolOriginServersK8SServiceSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new OriginPoolOriginServersK8SServiceSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersK8SServiceSnatPool) {
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
export interface OriginPoolOriginServersPrivateIpSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersPrivateIpSegmentToTerraform(struct?: OriginPoolOriginServersPrivateIpSegmentOutputReference | OriginPoolOriginServersPrivateIpSegment): any {
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


export function originPoolOriginServersPrivateIpSegmentToHclTerraform(struct?: OriginPoolOriginServersPrivateIpSegmentOutputReference | OriginPoolOriginServersPrivateIpSegment): any {
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

export class OriginPoolOriginServersPrivateIpSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIpSegment | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateIpSegment | undefined) {
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
export interface OriginPoolOriginServersPrivateIpSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersPrivateIpSiteLocatorSiteToTerraform(struct?: OriginPoolOriginServersPrivateIpSiteLocatorSiteOutputReference | OriginPoolOriginServersPrivateIpSiteLocatorSite): any {
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


export function originPoolOriginServersPrivateIpSiteLocatorSiteToHclTerraform(struct?: OriginPoolOriginServersPrivateIpSiteLocatorSiteOutputReference | OriginPoolOriginServersPrivateIpSiteLocatorSite): any {
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

export class OriginPoolOriginServersPrivateIpSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIpSiteLocatorSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateIpSiteLocatorSite | undefined) {
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
export interface OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersPrivateIpSiteLocatorVirtualSiteToTerraform(struct?: OriginPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite): any {
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


export function originPoolOriginServersPrivateIpSiteLocatorVirtualSiteToHclTerraform(struct?: OriginPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite): any {
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

export class OriginPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite | undefined) {
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
export interface OriginPoolOriginServersPrivateIpSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site OriginPool#site}
  */
  readonly site?: OriginPoolOriginServersPrivateIpSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#virtual_site OriginPool#virtual_site}
  */
  readonly virtualSite?: OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite;
}

export function originPoolOriginServersPrivateIpSiteLocatorToTerraform(struct?: OriginPoolOriginServersPrivateIpSiteLocatorOutputReference | OriginPoolOriginServersPrivateIpSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: originPoolOriginServersPrivateIpSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: originPoolOriginServersPrivateIpSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function originPoolOriginServersPrivateIpSiteLocatorToHclTerraform(struct?: OriginPoolOriginServersPrivateIpSiteLocatorOutputReference | OriginPoolOriginServersPrivateIpSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: originPoolOriginServersPrivateIpSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpSiteLocatorSiteList",
    },
    virtual_site: {
      value: originPoolOriginServersPrivateIpSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersPrivateIpSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIpSiteLocator | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateIpSiteLocator | undefined) {
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
  private _site = new OriginPoolOriginServersPrivateIpSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: OriginPoolOriginServersPrivateIpSiteLocatorSite) {
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
  private _virtualSite = new OriginPoolOriginServersPrivateIpSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: OriginPoolOriginServersPrivateIpSiteLocatorVirtualSite) {
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
export interface OriginPoolOriginServersPrivateIpSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6_prefixes OriginPool#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#prefixes OriginPool#prefixes}
  */
  readonly prefixes?: string[];
}

export function originPoolOriginServersPrivateIpSnatPoolSnatPoolToTerraform(struct?: OriginPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference | OriginPoolOriginServersPrivateIpSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function originPoolOriginServersPrivateIpSnatPoolSnatPoolToHclTerraform(struct?: OriginPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference | OriginPoolOriginServersPrivateIpSnatPoolSnatPool): any {
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

export class OriginPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIpSnatPoolSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateIpSnatPoolSnatPool | undefined) {
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
export interface OriginPoolOriginServersPrivateIpSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_snat_pool OriginPool#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersPrivateIpSnatPoolSnatPool;
}

export function originPoolOriginServersPrivateIpSnatPoolToTerraform(struct?: OriginPoolOriginServersPrivateIpSnatPoolOutputReference | OriginPoolOriginServersPrivateIpSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: originPoolOriginServersPrivateIpSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersPrivateIpSnatPoolToHclTerraform(struct?: OriginPoolOriginServersPrivateIpSnatPoolOutputReference | OriginPoolOriginServersPrivateIpSnatPool): any {
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
      value: originPoolOriginServersPrivateIpSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersPrivateIpSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIpSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateIpSnatPool | undefined) {
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
  private _snatPool = new OriginPoolOriginServersPrivateIpSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersPrivateIpSnatPoolSnatPool) {
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
export interface OriginPoolOriginServersPrivateIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#inside_network OriginPool#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ip OriginPool#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6 OriginPool#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#outside_network OriginPool#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#segment OriginPool#segment}
  */
  readonly segment?: OriginPoolOriginServersPrivateIpSegment;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site_locator OriginPool#site_locator}
  */
  readonly siteLocator: OriginPoolOriginServersPrivateIpSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersPrivateIpSnatPool;
}

export function originPoolOriginServersPrivateIpToTerraform(struct?: OriginPoolOriginServersPrivateIpOutputReference | OriginPoolOriginServersPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    segment: originPoolOriginServersPrivateIpSegmentToTerraform(struct!.segment),
    site_locator: originPoolOriginServersPrivateIpSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: originPoolOriginServersPrivateIpSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersPrivateIpToHclTerraform(struct?: OriginPoolOriginServersPrivateIpOutputReference | OriginPoolOriginServersPrivateIp): any {
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
    outside_network: {
      value: cdktf.booleanToHclTerraform(struct!.outsideNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment: {
      value: originPoolOriginServersPrivateIpSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpSegmentList",
    },
    site_locator: {
      value: originPoolOriginServersPrivateIpSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpSiteLocatorList",
    },
    snat_pool: {
      value: originPoolOriginServersPrivateIpSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersPrivateIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
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

  public set internalValue(value: OriginPoolOriginServersPrivateIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insideNetwork = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._outsideNetwork = undefined;
      this._segment.internalValue = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insideNetwork = value.insideNetwork;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._outsideNetwork = value.outsideNetwork;
      this._segment.internalValue = value.segment;
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

  // segment - computed: false, optional: true, required: false
  private _segment = new OriginPoolOriginServersPrivateIpSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: OriginPoolOriginServersPrivateIpSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new OriginPoolOriginServersPrivateIpSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: OriginPoolOriginServersPrivateIpSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new OriginPoolOriginServersPrivateIpSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersPrivateIpSnatPool) {
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
export interface OriginPoolOriginServersPrivateNameSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersPrivateNameSegmentToTerraform(struct?: OriginPoolOriginServersPrivateNameSegmentOutputReference | OriginPoolOriginServersPrivateNameSegment): any {
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


export function originPoolOriginServersPrivateNameSegmentToHclTerraform(struct?: OriginPoolOriginServersPrivateNameSegmentOutputReference | OriginPoolOriginServersPrivateNameSegment): any {
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

export class OriginPoolOriginServersPrivateNameSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateNameSegment | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateNameSegment | undefined) {
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
export interface OriginPoolOriginServersPrivateNameSiteLocatorSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersPrivateNameSiteLocatorSiteToTerraform(struct?: OriginPoolOriginServersPrivateNameSiteLocatorSiteOutputReference | OriginPoolOriginServersPrivateNameSiteLocatorSite): any {
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


export function originPoolOriginServersPrivateNameSiteLocatorSiteToHclTerraform(struct?: OriginPoolOriginServersPrivateNameSiteLocatorSiteOutputReference | OriginPoolOriginServersPrivateNameSiteLocatorSite): any {
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

export class OriginPoolOriginServersPrivateNameSiteLocatorSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateNameSiteLocatorSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateNameSiteLocatorSite | undefined) {
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
export interface OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersPrivateNameSiteLocatorVirtualSiteToTerraform(struct?: OriginPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite): any {
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


export function originPoolOriginServersPrivateNameSiteLocatorVirtualSiteToHclTerraform(struct?: OriginPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference | OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite): any {
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

export class OriginPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite | undefined) {
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
export interface OriginPoolOriginServersPrivateNameSiteLocator {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site OriginPool#site}
  */
  readonly site?: OriginPoolOriginServersPrivateNameSiteLocatorSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#virtual_site OriginPool#virtual_site}
  */
  readonly virtualSite?: OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite;
}

export function originPoolOriginServersPrivateNameSiteLocatorToTerraform(struct?: OriginPoolOriginServersPrivateNameSiteLocatorOutputReference | OriginPoolOriginServersPrivateNameSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: originPoolOriginServersPrivateNameSiteLocatorSiteToTerraform(struct!.site),
    virtual_site: originPoolOriginServersPrivateNameSiteLocatorVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function originPoolOriginServersPrivateNameSiteLocatorToHclTerraform(struct?: OriginPoolOriginServersPrivateNameSiteLocatorOutputReference | OriginPoolOriginServersPrivateNameSiteLocator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: originPoolOriginServersPrivateNameSiteLocatorSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameSiteLocatorSiteList",
    },
    virtual_site: {
      value: originPoolOriginServersPrivateNameSiteLocatorVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameSiteLocatorVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersPrivateNameSiteLocatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateNameSiteLocator | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateNameSiteLocator | undefined) {
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
  private _site = new OriginPoolOriginServersPrivateNameSiteLocatorSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: OriginPoolOriginServersPrivateNameSiteLocatorSite) {
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
  private _virtualSite = new OriginPoolOriginServersPrivateNameSiteLocatorVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: OriginPoolOriginServersPrivateNameSiteLocatorVirtualSite) {
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
export interface OriginPoolOriginServersPrivateNameSnatPoolSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6_prefixes OriginPool#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#prefixes OriginPool#prefixes}
  */
  readonly prefixes?: string[];
}

export function originPoolOriginServersPrivateNameSnatPoolSnatPoolToTerraform(struct?: OriginPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference | OriginPoolOriginServersPrivateNameSnatPoolSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function originPoolOriginServersPrivateNameSnatPoolSnatPoolToHclTerraform(struct?: OriginPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference | OriginPoolOriginServersPrivateNameSnatPoolSnatPool): any {
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

export class OriginPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateNameSnatPoolSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateNameSnatPoolSnatPool | undefined) {
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
export interface OriginPoolOriginServersPrivateNameSnatPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_snat_pool OriginPool#no_snat_pool}
  */
  readonly noSnatPool?: boolean | cdktf.IResolvable;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersPrivateNameSnatPoolSnatPool;
}

export function originPoolOriginServersPrivateNameSnatPoolToTerraform(struct?: OriginPoolOriginServersPrivateNameSnatPoolOutputReference | OriginPoolOriginServersPrivateNameSnatPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_snat_pool: cdktf.booleanToTerraform(struct!.noSnatPool),
    snat_pool: originPoolOriginServersPrivateNameSnatPoolSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersPrivateNameSnatPoolToHclTerraform(struct?: OriginPoolOriginServersPrivateNameSnatPoolOutputReference | OriginPoolOriginServersPrivateNameSnatPool): any {
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
      value: originPoolOriginServersPrivateNameSnatPoolSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameSnatPoolSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersPrivateNameSnatPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateNameSnatPool | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPrivateNameSnatPool | undefined) {
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
  private _snatPool = new OriginPoolOriginServersPrivateNameSnatPoolSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersPrivateNameSnatPoolSnatPool) {
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
export interface OriginPoolOriginServersPrivateName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#dns_name OriginPool#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#inside_network OriginPool#inside_network}
  */
  readonly insideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#outside_network OriginPool#outside_network}
  */
  readonly outsideNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#refresh_interval OriginPool#refresh_interval}
  */
  readonly refreshInterval?: number;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#segment OriginPool#segment}
  */
  readonly segment?: OriginPoolOriginServersPrivateNameSegment;
  /**
  * site_locator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#site_locator OriginPool#site_locator}
  */
  readonly siteLocator: OriginPoolOriginServersPrivateNameSiteLocator;
  /**
  * snat_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#snat_pool OriginPool#snat_pool}
  */
  readonly snatPool?: OriginPoolOriginServersPrivateNameSnatPool;
}

export function originPoolOriginServersPrivateNameToTerraform(struct?: OriginPoolOriginServersPrivateNameOutputReference | OriginPoolOriginServersPrivateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    inside_network: cdktf.booleanToTerraform(struct!.insideNetwork),
    outside_network: cdktf.booleanToTerraform(struct!.outsideNetwork),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
    segment: originPoolOriginServersPrivateNameSegmentToTerraform(struct!.segment),
    site_locator: originPoolOriginServersPrivateNameSiteLocatorToTerraform(struct!.siteLocator),
    snat_pool: originPoolOriginServersPrivateNameSnatPoolToTerraform(struct!.snatPool),
  }
}


export function originPoolOriginServersPrivateNameToHclTerraform(struct?: OriginPoolOriginServersPrivateNameOutputReference | OriginPoolOriginServersPrivateName): any {
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
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment: {
      value: originPoolOriginServersPrivateNameSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameSegmentList",
    },
    site_locator: {
      value: originPoolOriginServersPrivateNameSiteLocatorToHclTerraform(struct!.siteLocator),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameSiteLocatorList",
    },
    snat_pool: {
      value: originPoolOriginServersPrivateNameSnatPoolToHclTerraform(struct!.snatPool),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameSnatPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersPrivateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPrivateName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._insideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideNetwork = this._insideNetwork;
    }
    if (this._outsideNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideNetwork = this._outsideNetwork;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
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

  public set internalValue(value: OriginPoolOriginServersPrivateName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._insideNetwork = undefined;
      this._outsideNetwork = undefined;
      this._refreshInterval = undefined;
      this._segment.internalValue = undefined;
      this._siteLocator.internalValue = undefined;
      this._snatPool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._insideNetwork = value.insideNetwork;
      this._outsideNetwork = value.outsideNetwork;
      this._refreshInterval = value.refreshInterval;
      this._segment.internalValue = value.segment;
      this._siteLocator.internalValue = value.siteLocator;
      this._snatPool.internalValue = value.snatPool;
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

  // segment - computed: false, optional: true, required: false
  private _segment = new OriginPoolOriginServersPrivateNameSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: OriginPoolOriginServersPrivateNameSegment) {
    this._segment.internalValue = value;
  }
  public resetSegment() {
    this._segment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site_locator - computed: false, optional: false, required: true
  private _siteLocator = new OriginPoolOriginServersPrivateNameSiteLocatorOutputReference(this, "site_locator");
  public get siteLocator() {
    return this._siteLocator;
  }
  public putSiteLocator(value: OriginPoolOriginServersPrivateNameSiteLocator) {
    this._siteLocator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocatorInput() {
    return this._siteLocator.internalValue;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool = new OriginPoolOriginServersPrivateNameSnatPoolOutputReference(this, "snat_pool");
  public get snatPool() {
    return this._snatPool;
  }
  public putSnatPool(value: OriginPoolOriginServersPrivateNameSnatPool) {
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
export interface OriginPoolOriginServersPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ip OriginPool#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6 OriginPool#ipv6}
  */
  readonly ipv6?: string;
}

export function originPoolOriginServersPublicIpToTerraform(struct?: OriginPoolOriginServersPublicIpOutputReference | OriginPoolOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function originPoolOriginServersPublicIpToHclTerraform(struct?: OriginPoolOriginServersPublicIpOutputReference | OriginPoolOriginServersPublicIp): any {
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

export class OriginPoolOriginServersPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPublicIp | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPublicIp | undefined) {
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
export interface OriginPoolOriginServersPublicName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#dns_name OriginPool#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#refresh_interval OriginPool#refresh_interval}
  */
  readonly refreshInterval?: number;
}

export function originPoolOriginServersPublicNameToTerraform(struct?: OriginPoolOriginServersPublicNameOutputReference | OriginPoolOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}


export function originPoolOriginServersPublicNameToHclTerraform(struct?: OriginPoolOriginServersPublicNameOutputReference | OriginPoolOriginServersPublicName): any {
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

export class OriginPoolOriginServersPublicNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersPublicName | undefined {
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

  public set internalValue(value: OriginPoolOriginServersPublicName | undefined) {
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
export interface OriginPoolOriginServersVnPrivateIpVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersVnPrivateIpVirtualNetworkToTerraform(struct?: OriginPoolOriginServersVnPrivateIpVirtualNetworkOutputReference | OriginPoolOriginServersVnPrivateIpVirtualNetwork): any {
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


export function originPoolOriginServersVnPrivateIpVirtualNetworkToHclTerraform(struct?: OriginPoolOriginServersVnPrivateIpVirtualNetworkOutputReference | OriginPoolOriginServersVnPrivateIpVirtualNetwork): any {
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

export class OriginPoolOriginServersVnPrivateIpVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersVnPrivateIpVirtualNetwork | undefined {
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

  public set internalValue(value: OriginPoolOriginServersVnPrivateIpVirtualNetwork | undefined) {
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
export interface OriginPoolOriginServersVnPrivateIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ip OriginPool#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#ipv6 OriginPool#ipv6}
  */
  readonly ipv6?: string;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#virtual_network OriginPool#virtual_network}
  */
  readonly virtualNetwork: OriginPoolOriginServersVnPrivateIpVirtualNetwork;
}

export function originPoolOriginServersVnPrivateIpToTerraform(struct?: OriginPoolOriginServersVnPrivateIpOutputReference | OriginPoolOriginServersVnPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    virtual_network: originPoolOriginServersVnPrivateIpVirtualNetworkToTerraform(struct!.virtualNetwork),
  }
}


export function originPoolOriginServersVnPrivateIpToHclTerraform(struct?: OriginPoolOriginServersVnPrivateIpOutputReference | OriginPoolOriginServersVnPrivateIp): any {
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
    virtual_network: {
      value: originPoolOriginServersVnPrivateIpVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersVnPrivateIpVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersVnPrivateIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersVnPrivateIp | undefined {
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
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolOriginServersVnPrivateIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._virtualNetwork.internalValue = value.virtualNetwork;
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

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new OriginPoolOriginServersVnPrivateIpVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: OriginPoolOriginServersVnPrivateIpVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}
export interface OriginPoolOriginServersVnPrivateNamePrivateNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolOriginServersVnPrivateNamePrivateNetworkToTerraform(struct?: OriginPoolOriginServersVnPrivateNamePrivateNetworkOutputReference | OriginPoolOriginServersVnPrivateNamePrivateNetwork): any {
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


export function originPoolOriginServersVnPrivateNamePrivateNetworkToHclTerraform(struct?: OriginPoolOriginServersVnPrivateNamePrivateNetworkOutputReference | OriginPoolOriginServersVnPrivateNamePrivateNetwork): any {
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

export class OriginPoolOriginServersVnPrivateNamePrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersVnPrivateNamePrivateNetwork | undefined {
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

  public set internalValue(value: OriginPoolOriginServersVnPrivateNamePrivateNetwork | undefined) {
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
export interface OriginPoolOriginServersVnPrivateName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#dns_name OriginPool#dns_name}
  */
  readonly dnsName: string;
  /**
  * private_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#private_network OriginPool#private_network}
  */
  readonly privateNetwork: OriginPoolOriginServersVnPrivateNamePrivateNetwork;
}

export function originPoolOriginServersVnPrivateNameToTerraform(struct?: OriginPoolOriginServersVnPrivateNameOutputReference | OriginPoolOriginServersVnPrivateName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    private_network: originPoolOriginServersVnPrivateNamePrivateNetworkToTerraform(struct!.privateNetwork),
  }
}


export function originPoolOriginServersVnPrivateNameToHclTerraform(struct?: OriginPoolOriginServersVnPrivateNameOutputReference | OriginPoolOriginServersVnPrivateName): any {
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
    private_network: {
      value: originPoolOriginServersVnPrivateNamePrivateNetworkToHclTerraform(struct!.privateNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersVnPrivateNamePrivateNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersVnPrivateNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolOriginServersVnPrivateName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._privateNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetwork = this._privateNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolOriginServersVnPrivateName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._privateNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._privateNetwork.internalValue = value.privateNetwork;
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

  // private_network - computed: false, optional: false, required: true
  private _privateNetwork = new OriginPoolOriginServersVnPrivateNamePrivateNetworkOutputReference(this, "private_network");
  public get privateNetwork() {
    return this._privateNetwork;
  }
  public putPrivateNetwork(value: OriginPoolOriginServersVnPrivateNamePrivateNetwork) {
    this._privateNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork.internalValue;
  }
}
export interface OriginPoolOriginServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#labels OriginPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * cbip_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#cbip_service OriginPool#cbip_service}
  */
  readonly cbipService?: OriginPoolOriginServersCbipService;
  /**
  * consul_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#consul_service OriginPool#consul_service}
  */
  readonly consulService?: OriginPoolOriginServersConsulService;
  /**
  * custom_endpoint_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#custom_endpoint_object OriginPool#custom_endpoint_object}
  */
  readonly customEndpointObject?: OriginPoolOriginServersCustomEndpointObject;
  /**
  * k8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#k8s_service OriginPool#k8s_service}
  */
  readonly k8SService?: OriginPoolOriginServersK8SService;
  /**
  * private_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#private_ip OriginPool#private_ip}
  */
  readonly privateIp?: OriginPoolOriginServersPrivateIp;
  /**
  * private_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#private_name OriginPool#private_name}
  */
  readonly privateName?: OriginPoolOriginServersPrivateName;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#public_ip OriginPool#public_ip}
  */
  readonly publicIp?: OriginPoolOriginServersPublicIp;
  /**
  * public_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#public_name OriginPool#public_name}
  */
  readonly publicName?: OriginPoolOriginServersPublicName;
  /**
  * vn_private_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#vn_private_ip OriginPool#vn_private_ip}
  */
  readonly vnPrivateIp?: OriginPoolOriginServersVnPrivateIp;
  /**
  * vn_private_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#vn_private_name OriginPool#vn_private_name}
  */
  readonly vnPrivateName?: OriginPoolOriginServersVnPrivateName;
}

export function originPoolOriginServersToTerraform(struct?: OriginPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    cbip_service: originPoolOriginServersCbipServiceToTerraform(struct!.cbipService),
    consul_service: originPoolOriginServersConsulServiceToTerraform(struct!.consulService),
    custom_endpoint_object: originPoolOriginServersCustomEndpointObjectToTerraform(struct!.customEndpointObject),
    k8s_service: originPoolOriginServersK8SServiceToTerraform(struct!.k8SService),
    private_ip: originPoolOriginServersPrivateIpToTerraform(struct!.privateIp),
    private_name: originPoolOriginServersPrivateNameToTerraform(struct!.privateName),
    public_ip: originPoolOriginServersPublicIpToTerraform(struct!.publicIp),
    public_name: originPoolOriginServersPublicNameToTerraform(struct!.publicName),
    vn_private_ip: originPoolOriginServersVnPrivateIpToTerraform(struct!.vnPrivateIp),
    vn_private_name: originPoolOriginServersVnPrivateNameToTerraform(struct!.vnPrivateName),
  }
}


export function originPoolOriginServersToHclTerraform(struct?: OriginPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cbip_service: {
      value: originPoolOriginServersCbipServiceToHclTerraform(struct!.cbipService),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersCbipServiceList",
    },
    consul_service: {
      value: originPoolOriginServersConsulServiceToHclTerraform(struct!.consulService),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersConsulServiceList",
    },
    custom_endpoint_object: {
      value: originPoolOriginServersCustomEndpointObjectToHclTerraform(struct!.customEndpointObject),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersCustomEndpointObjectList",
    },
    k8s_service: {
      value: originPoolOriginServersK8SServiceToHclTerraform(struct!.k8SService),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersK8SServiceList",
    },
    private_ip: {
      value: originPoolOriginServersPrivateIpToHclTerraform(struct!.privateIp),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateIpList",
    },
    private_name: {
      value: originPoolOriginServersPrivateNameToHclTerraform(struct!.privateName),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPrivateNameList",
    },
    public_ip: {
      value: originPoolOriginServersPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPublicIpList",
    },
    public_name: {
      value: originPoolOriginServersPublicNameToHclTerraform(struct!.publicName),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersPublicNameList",
    },
    vn_private_ip: {
      value: originPoolOriginServersVnPrivateIpToHclTerraform(struct!.vnPrivateIp),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersVnPrivateIpList",
    },
    vn_private_name: {
      value: originPoolOriginServersVnPrivateNameToHclTerraform(struct!.vnPrivateName),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolOriginServersVnPrivateNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolOriginServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OriginPoolOriginServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._cbipService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cbipService = this._cbipService?.internalValue;
    }
    if (this._consulService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consulService = this._consulService?.internalValue;
    }
    if (this._customEndpointObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointObject = this._customEndpointObject?.internalValue;
    }
    if (this._k8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SService = this._k8SService?.internalValue;
    }
    if (this._privateIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp?.internalValue;
    }
    if (this._privateName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateName = this._privateName?.internalValue;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    if (this._publicName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicName = this._publicName?.internalValue;
    }
    if (this._vnPrivateIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnPrivateIp = this._vnPrivateIp?.internalValue;
    }
    if (this._vnPrivateName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnPrivateName = this._vnPrivateName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolOriginServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._cbipService.internalValue = undefined;
      this._consulService.internalValue = undefined;
      this._customEndpointObject.internalValue = undefined;
      this._k8SService.internalValue = undefined;
      this._privateIp.internalValue = undefined;
      this._privateName.internalValue = undefined;
      this._publicIp.internalValue = undefined;
      this._publicName.internalValue = undefined;
      this._vnPrivateIp.internalValue = undefined;
      this._vnPrivateName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._cbipService.internalValue = value.cbipService;
      this._consulService.internalValue = value.consulService;
      this._customEndpointObject.internalValue = value.customEndpointObject;
      this._k8SService.internalValue = value.k8SService;
      this._privateIp.internalValue = value.privateIp;
      this._privateName.internalValue = value.privateName;
      this._publicIp.internalValue = value.publicIp;
      this._publicName.internalValue = value.publicName;
      this._vnPrivateIp.internalValue = value.vnPrivateIp;
      this._vnPrivateName.internalValue = value.vnPrivateName;
    }
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

  // cbip_service - computed: false, optional: true, required: false
  private _cbipService = new OriginPoolOriginServersCbipServiceOutputReference(this, "cbip_service");
  public get cbipService() {
    return this._cbipService;
  }
  public putCbipService(value: OriginPoolOriginServersCbipService) {
    this._cbipService.internalValue = value;
  }
  public resetCbipService() {
    this._cbipService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cbipServiceInput() {
    return this._cbipService.internalValue;
  }

  // consul_service - computed: false, optional: true, required: false
  private _consulService = new OriginPoolOriginServersConsulServiceOutputReference(this, "consul_service");
  public get consulService() {
    return this._consulService;
  }
  public putConsulService(value: OriginPoolOriginServersConsulService) {
    this._consulService.internalValue = value;
  }
  public resetConsulService() {
    this._consulService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulServiceInput() {
    return this._consulService.internalValue;
  }

  // custom_endpoint_object - computed: false, optional: true, required: false
  private _customEndpointObject = new OriginPoolOriginServersCustomEndpointObjectOutputReference(this, "custom_endpoint_object");
  public get customEndpointObject() {
    return this._customEndpointObject;
  }
  public putCustomEndpointObject(value: OriginPoolOriginServersCustomEndpointObject) {
    this._customEndpointObject.internalValue = value;
  }
  public resetCustomEndpointObject() {
    this._customEndpointObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointObjectInput() {
    return this._customEndpointObject.internalValue;
  }

  // k8s_service - computed: false, optional: true, required: false
  private _k8SService = new OriginPoolOriginServersK8SServiceOutputReference(this, "k8s_service");
  public get k8SService() {
    return this._k8SService;
  }
  public putK8SService(value: OriginPoolOriginServersK8SService) {
    this._k8SService.internalValue = value;
  }
  public resetK8SService() {
    this._k8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SServiceInput() {
    return this._k8SService.internalValue;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp = new OriginPoolOriginServersPrivateIpOutputReference(this, "private_ip");
  public get privateIp() {
    return this._privateIp;
  }
  public putPrivateIp(value: OriginPoolOriginServersPrivateIp) {
    this._privateIp.internalValue = value;
  }
  public resetPrivateIp() {
    this._privateIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp.internalValue;
  }

  // private_name - computed: false, optional: true, required: false
  private _privateName = new OriginPoolOriginServersPrivateNameOutputReference(this, "private_name");
  public get privateName() {
    return this._privateName;
  }
  public putPrivateName(value: OriginPoolOriginServersPrivateName) {
    this._privateName.internalValue = value;
  }
  public resetPrivateName() {
    this._privateName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNameInput() {
    return this._privateName.internalValue;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new OriginPoolOriginServersPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: OriginPoolOriginServersPublicIp) {
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
  private _publicName = new OriginPoolOriginServersPublicNameOutputReference(this, "public_name");
  public get publicName() {
    return this._publicName;
  }
  public putPublicName(value: OriginPoolOriginServersPublicName) {
    this._publicName.internalValue = value;
  }
  public resetPublicName() {
    this._publicName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName.internalValue;
  }

  // vn_private_ip - computed: false, optional: true, required: false
  private _vnPrivateIp = new OriginPoolOriginServersVnPrivateIpOutputReference(this, "vn_private_ip");
  public get vnPrivateIp() {
    return this._vnPrivateIp;
  }
  public putVnPrivateIp(value: OriginPoolOriginServersVnPrivateIp) {
    this._vnPrivateIp.internalValue = value;
  }
  public resetVnPrivateIp() {
    this._vnPrivateIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnPrivateIpInput() {
    return this._vnPrivateIp.internalValue;
  }

  // vn_private_name - computed: false, optional: true, required: false
  private _vnPrivateName = new OriginPoolOriginServersVnPrivateNameOutputReference(this, "vn_private_name");
  public get vnPrivateName() {
    return this._vnPrivateName;
  }
  public putVnPrivateName(value: OriginPoolOriginServersVnPrivateName) {
    this._vnPrivateName.internalValue = value;
  }
  public resetVnPrivateName() {
    this._vnPrivateName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnPrivateNameInput() {
    return this._vnPrivateName.internalValue;
  }
}

export class OriginPoolOriginServersList extends cdktf.ComplexList {
  public internalValue? : OriginPoolOriginServers[] | cdktf.IResolvable

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
  public get(index: number): OriginPoolOriginServersOutputReference {
    return new OriginPoolOriginServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginPoolUpstreamConnPoolReuseType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_conn_pool_reuse OriginPool#disable_conn_pool_reuse}
  */
  readonly disableConnPoolReuse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#enable_conn_pool_reuse OriginPool#enable_conn_pool_reuse}
  */
  readonly enableConnPoolReuse?: boolean | cdktf.IResolvable;
}

export function originPoolUpstreamConnPoolReuseTypeToTerraform(struct?: OriginPoolUpstreamConnPoolReuseTypeOutputReference | OriginPoolUpstreamConnPoolReuseType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_conn_pool_reuse: cdktf.booleanToTerraform(struct!.disableConnPoolReuse),
    enable_conn_pool_reuse: cdktf.booleanToTerraform(struct!.enableConnPoolReuse),
  }
}


export function originPoolUpstreamConnPoolReuseTypeToHclTerraform(struct?: OriginPoolUpstreamConnPoolReuseTypeOutputReference | OriginPoolUpstreamConnPoolReuseType): any {
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

export class OriginPoolUpstreamConnPoolReuseTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUpstreamConnPoolReuseType | undefined {
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

  public set internalValue(value: OriginPoolUpstreamConnPoolReuseType | undefined) {
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
export interface OriginPoolUseTlsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#cipher_suites OriginPool#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#max_version OriginPool#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#min_version OriginPool#min_version}
  */
  readonly minVersion?: string;
}

export function originPoolUseTlsTlsConfigCustomSecurityToTerraform(struct?: OriginPoolUseTlsTlsConfigCustomSecurityOutputReference | OriginPoolUseTlsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function originPoolUseTlsTlsConfigCustomSecurityToHclTerraform(struct?: OriginPoolUseTlsTlsConfigCustomSecurityOutputReference | OriginPoolUseTlsTlsConfigCustomSecurity): any {
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
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface OriginPoolUseTlsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#default_security OriginPool#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#low_security OriginPool#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#medium_security OriginPool#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#custom_security OriginPool#custom_security}
  */
  readonly customSecurity?: OriginPoolUseTlsTlsConfigCustomSecurity;
}

export function originPoolUseTlsTlsConfigToTerraform(struct?: OriginPoolUseTlsTlsConfigOutputReference | OriginPoolUseTlsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: originPoolUseTlsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function originPoolUseTlsTlsConfigToHclTerraform(struct?: OriginPoolUseTlsTlsConfigOutputReference | OriginPoolUseTlsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: originPoolUseTlsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new OriginPoolUseTlsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: OriginPoolUseTlsTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#hash_algorithms OriginPool#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function originPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function originPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms): any {
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

export class OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms | undefined) {
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
export interface OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling {
}

export function originPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function originPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#decryption_provider OriginPool#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#location OriginPool#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#store_provider OriginPool#store_provider}
  */
  readonly storeProvider?: string;
}

export function originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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


export function originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
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

export class OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
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

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
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
export interface OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#provider OriginPool#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#url OriginPool#url}
  */
  readonly url: string;
}

export function originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo): any {
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

export class OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
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

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
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
export interface OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#blindfold_secret_info OriginPool#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#clear_secret_info OriginPool#clear_secret_info}
  */
  readonly clearSecretInfo?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo;
}

export function originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey | undefined {
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

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey | undefined) {
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
  private _blindfoldSecretInfo = new OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
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
  private _clearSecretInfo = new OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo) {
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
export interface OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults {
}

export function originPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function originPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference | OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface OriginPoolUseTlsUseMtlsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#certificate_url OriginPool#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#description OriginPool#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#custom_hash_algorithms OriginPool#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_ocsp_stapling OriginPool#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#private_key OriginPool#private_key}
  */
  readonly privateKey: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#use_system_defaults OriginPool#use_system_defaults}
  */
  readonly useSystemDefaults?: OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults;
}

export function originPoolUseTlsUseMtlsTlsCertificatesToTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: originPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: originPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: originPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function originPoolUseTlsUseMtlsTlsCertificatesToHclTerraform(struct?: OriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable): any {
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
      value: originPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: originPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: originPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: originPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsUseMtlsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable | undefined) {
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
  private _customHashAlgorithms = new OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: OriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms) {
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
  private _disableOcspStapling = new OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: OriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling) {
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
  private _privateKey = new OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: OriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: OriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults) {
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

export class OriginPoolUseTlsUseMtlsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : OriginPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): OriginPoolUseTlsUseMtlsTlsCertificatesOutputReference {
    return new OriginPoolUseTlsUseMtlsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OriginPoolUseTlsUseMtls {
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tls_certificates OriginPool#tls_certificates}
  */
  readonly tlsCertificates: OriginPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable;
}

export function originPoolUseTlsUseMtlsToTerraform(struct?: OriginPoolUseTlsUseMtlsOutputReference | OriginPoolUseTlsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_certificates: cdktf.listMapper(originPoolUseTlsUseMtlsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
  }
}


export function originPoolUseTlsUseMtlsToHclTerraform(struct?: OriginPoolUseTlsUseMtlsOutputReference | OriginPoolUseTlsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_certificates: {
      value: cdktf.listMapperHcl(originPoolUseTlsUseMtlsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsTlsCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertificates.internalValue = value.tlsCertificates;
    }
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new OriginPoolUseTlsUseMtlsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: OriginPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }
}
export interface OriginPoolUseTlsUseMtlsObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolUseTlsUseMtlsObjToTerraform(struct?: OriginPoolUseTlsUseMtlsObjOutputReference | OriginPoolUseTlsUseMtlsObj): any {
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


export function originPoolUseTlsUseMtlsObjToHclTerraform(struct?: OriginPoolUseTlsUseMtlsObjOutputReference | OriginPoolUseTlsUseMtlsObj): any {
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

export class OriginPoolUseTlsUseMtlsObjOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseMtlsObj | undefined {
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

  public set internalValue(value: OriginPoolUseTlsUseMtlsObj | undefined) {
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
export interface OriginPoolUseTlsUseServerVerificationTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#name OriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#namespace OriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tenant OriginPool#tenant}
  */
  readonly tenant?: string;
}

export function originPoolUseTlsUseServerVerificationTrustedCaToTerraform(struct?: OriginPoolUseTlsUseServerVerificationTrustedCaOutputReference | OriginPoolUseTlsUseServerVerificationTrustedCa): any {
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


export function originPoolUseTlsUseServerVerificationTrustedCaToHclTerraform(struct?: OriginPoolUseTlsUseServerVerificationTrustedCaOutputReference | OriginPoolUseTlsUseServerVerificationTrustedCa): any {
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

export class OriginPoolUseTlsUseServerVerificationTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseServerVerificationTrustedCa | undefined {
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

  public set internalValue(value: OriginPoolUseTlsUseServerVerificationTrustedCa | undefined) {
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
export interface OriginPoolUseTlsUseServerVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#trusted_ca_url OriginPool#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#trusted_ca OriginPool#trusted_ca}
  */
  readonly trustedCa?: OriginPoolUseTlsUseServerVerificationTrustedCa;
}

export function originPoolUseTlsUseServerVerificationToTerraform(struct?: OriginPoolUseTlsUseServerVerificationOutputReference | OriginPoolUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    trusted_ca: originPoolUseTlsUseServerVerificationTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function originPoolUseTlsUseServerVerificationToHclTerraform(struct?: OriginPoolUseTlsUseServerVerificationOutputReference | OriginPoolUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca: {
      value: originPoolUseTlsUseServerVerificationTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseServerVerificationTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsUseServerVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTlsUseServerVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTlsUseServerVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaUrl = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaUrl = value.trustedCaUrl;
      this._trustedCa.internalValue = value.trustedCa;
    }
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

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new OriginPoolUseTlsUseServerVerificationTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: OriginPoolUseTlsUseServerVerificationTrustedCa) {
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
export interface OriginPoolUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#default_session_key_caching OriginPool#default_session_key_caching}
  */
  readonly defaultSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_session_key_caching OriginPool#disable_session_key_caching}
  */
  readonly disableSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#disable_sni OriginPool#disable_sni}
  */
  readonly disableSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#max_session_keys OriginPool#max_session_keys}
  */
  readonly maxSessionKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#no_mtls OriginPool#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#skip_server_verification OriginPool#skip_server_verification}
  */
  readonly skipServerVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#sni OriginPool#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#use_host_header_as_sni OriginPool#use_host_header_as_sni}
  */
  readonly useHostHeaderAsSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#volterra_trusted_ca OriginPool#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#tls_config OriginPool#tls_config}
  */
  readonly tlsConfig: OriginPoolUseTlsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#use_mtls OriginPool#use_mtls}
  */
  readonly useMtls?: OriginPoolUseTlsUseMtls;
  /**
  * use_mtls_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#use_mtls_obj OriginPool#use_mtls_obj}
  */
  readonly useMtlsObj?: OriginPoolUseTlsUseMtlsObj;
  /**
  * use_server_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#use_server_verification OriginPool#use_server_verification}
  */
  readonly useServerVerification?: OriginPoolUseTlsUseServerVerification;
}

export function originPoolUseTlsToTerraform(struct?: OriginPoolUseTlsOutputReference | OriginPoolUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_session_key_caching: cdktf.booleanToTerraform(struct!.defaultSessionKeyCaching),
    disable_session_key_caching: cdktf.booleanToTerraform(struct!.disableSessionKeyCaching),
    disable_sni: cdktf.booleanToTerraform(struct!.disableSni),
    max_session_keys: cdktf.numberToTerraform(struct!.maxSessionKeys),
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    skip_server_verification: cdktf.booleanToTerraform(struct!.skipServerVerification),
    sni: cdktf.stringToTerraform(struct!.sni),
    use_host_header_as_sni: cdktf.booleanToTerraform(struct!.useHostHeaderAsSni),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    tls_config: originPoolUseTlsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: originPoolUseTlsUseMtlsToTerraform(struct!.useMtls),
    use_mtls_obj: originPoolUseTlsUseMtlsObjToTerraform(struct!.useMtlsObj),
    use_server_verification: originPoolUseTlsUseServerVerificationToTerraform(struct!.useServerVerification),
  }
}


export function originPoolUseTlsToHclTerraform(struct?: OriginPoolUseTlsOutputReference | OriginPoolUseTls): any {
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
    disable_sni: {
      value: cdktf.booleanToHclTerraform(struct!.disableSni),
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
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_server_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipServerVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_host_header_as_sni: {
      value: cdktf.booleanToHclTerraform(struct!.useHostHeaderAsSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_config: {
      value: originPoolUseTlsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsTlsConfigList",
    },
    use_mtls: {
      value: originPoolUseTlsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsList",
    },
    use_mtls_obj: {
      value: originPoolUseTlsUseMtlsObjToHclTerraform(struct!.useMtlsObj),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseMtlsObjList",
    },
    use_server_verification: {
      value: originPoolUseTlsUseServerVerificationToHclTerraform(struct!.useServerVerification),
      isBlock: true,
      type: "list",
      storageClassType: "OriginPoolUseTlsUseServerVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OriginPoolUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OriginPoolUseTls | undefined {
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
    if (this._disableSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSni = this._disableSni;
    }
    if (this._maxSessionKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionKeys = this._maxSessionKeys;
    }
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._skipServerVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipServerVerification = this._skipServerVerification;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._useHostHeaderAsSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostHeaderAsSni = this._useHostHeaderAsSni;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    if (this._useMtlsObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtlsObj = this._useMtlsObj?.internalValue;
    }
    if (this._useServerVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerVerification = this._useServerVerification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OriginPoolUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSessionKeyCaching = undefined;
      this._disableSessionKeyCaching = undefined;
      this._disableSni = undefined;
      this._maxSessionKeys = undefined;
      this._noMtls = undefined;
      this._skipServerVerification = undefined;
      this._sni = undefined;
      this._useHostHeaderAsSni = undefined;
      this._volterraTrustedCa = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
      this._useMtlsObj.internalValue = undefined;
      this._useServerVerification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSessionKeyCaching = value.defaultSessionKeyCaching;
      this._disableSessionKeyCaching = value.disableSessionKeyCaching;
      this._disableSni = value.disableSni;
      this._maxSessionKeys = value.maxSessionKeys;
      this._noMtls = value.noMtls;
      this._skipServerVerification = value.skipServerVerification;
      this._sni = value.sni;
      this._useHostHeaderAsSni = value.useHostHeaderAsSni;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
      this._useMtlsObj.internalValue = value.useMtlsObj;
      this._useServerVerification.internalValue = value.useServerVerification;
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

  // disable_sni - computed: false, optional: true, required: false
  private _disableSni?: boolean | cdktf.IResolvable; 
  public get disableSni() {
    return this.getBooleanAttribute('disable_sni');
  }
  public set disableSni(value: boolean | cdktf.IResolvable) {
    this._disableSni = value;
  }
  public resetDisableSni() {
    this._disableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniInput() {
    return this._disableSni;
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

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // skip_server_verification - computed: false, optional: true, required: false
  private _skipServerVerification?: boolean | cdktf.IResolvable; 
  public get skipServerVerification() {
    return this.getBooleanAttribute('skip_server_verification');
  }
  public set skipServerVerification(value: boolean | cdktf.IResolvable) {
    this._skipServerVerification = value;
  }
  public resetSkipServerVerification() {
    this._skipServerVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServerVerificationInput() {
    return this._skipServerVerification;
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

  // use_host_header_as_sni - computed: false, optional: true, required: false
  private _useHostHeaderAsSni?: boolean | cdktf.IResolvable; 
  public get useHostHeaderAsSni() {
    return this.getBooleanAttribute('use_host_header_as_sni');
  }
  public set useHostHeaderAsSni(value: boolean | cdktf.IResolvable) {
    this._useHostHeaderAsSni = value;
  }
  public resetUseHostHeaderAsSni() {
    this._useHostHeaderAsSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostHeaderAsSniInput() {
    return this._useHostHeaderAsSni;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // tls_config - computed: false, optional: false, required: true
  private _tlsConfig = new OriginPoolUseTlsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: OriginPoolUseTlsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new OriginPoolUseTlsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: OriginPoolUseTlsUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }

  // use_mtls_obj - computed: false, optional: true, required: false
  private _useMtlsObj = new OriginPoolUseTlsUseMtlsObjOutputReference(this, "use_mtls_obj");
  public get useMtlsObj() {
    return this._useMtlsObj;
  }
  public putUseMtlsObj(value: OriginPoolUseTlsUseMtlsObj) {
    this._useMtlsObj.internalValue = value;
  }
  public resetUseMtlsObj() {
    this._useMtlsObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsObjInput() {
    return this._useMtlsObj.internalValue;
  }

  // use_server_verification - computed: false, optional: true, required: false
  private _useServerVerification = new OriginPoolUseTlsUseServerVerificationOutputReference(this, "use_server_verification");
  public get useServerVerification() {
    return this._useServerVerification;
  }
  public putUseServerVerification(value: OriginPoolUseTlsUseServerVerification) {
    this._useServerVerification.internalValue = value;
  }
  public resetUseServerVerification() {
    this._useServerVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerVerificationInput() {
    return this._useServerVerification.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool volterra_origin_pool}
*/
export class OriginPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_origin_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OriginPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OriginPool to import
  * @param importFromId The id of the existing OriginPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OriginPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_origin_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/origin_pool volterra_origin_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OriginPoolConfig
  */
  public constructor(scope: Construct, id: string, config: OriginPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_origin_pool',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
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
    this._automaticPort = config.automaticPort;
    this._description = config.description;
    this._disable = config.disable;
    this._endpointSelection = config.endpointSelection;
    this._healthCheckPort = config.healthCheckPort;
    this._id = config.id;
    this._labels = config.labels;
    this._lbPort = config.lbPort;
    this._loadbalancerAlgorithm = config.loadbalancerAlgorithm;
    this._name = config.name;
    this._namespace = config.namespace;
    this._noTls = config.noTls;
    this._port = config.port;
    this._sameAsEndpointPort = config.sameAsEndpointPort;
    this._advancedOptions.internalValue = config.advancedOptions;
    this._healthcheck.internalValue = config.healthcheck;
    this._originServers.internalValue = config.originServers;
    this._upstreamConnPoolReuseType.internalValue = config.upstreamConnPoolReuseType;
    this._useTls.internalValue = config.useTls;
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

  // automatic_port - computed: false, optional: true, required: false
  private _automaticPort?: boolean | cdktf.IResolvable; 
  public get automaticPort() {
    return this.getBooleanAttribute('automatic_port');
  }
  public set automaticPort(value: boolean | cdktf.IResolvable) {
    this._automaticPort = value;
  }
  public resetAutomaticPort() {
    this._automaticPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticPortInput() {
    return this._automaticPort;
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

  // endpoint_selection - computed: false, optional: false, required: true
  private _endpointSelection?: string; 
  public get endpointSelection() {
    return this.getStringAttribute('endpoint_selection');
  }
  public set endpointSelection(value: string) {
    this._endpointSelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSelectionInput() {
    return this._endpointSelection;
  }

  // health_check_port - computed: false, optional: true, required: false
  private _healthCheckPort?: number; 
  public get healthCheckPort() {
    return this.getNumberAttribute('health_check_port');
  }
  public set healthCheckPort(value: number) {
    this._healthCheckPort = value;
  }
  public resetHealthCheckPort() {
    this._healthCheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPortInput() {
    return this._healthCheckPort;
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

  // lb_port - computed: false, optional: true, required: false
  private _lbPort?: boolean | cdktf.IResolvable; 
  public get lbPort() {
    return this.getBooleanAttribute('lb_port');
  }
  public set lbPort(value: boolean | cdktf.IResolvable) {
    this._lbPort = value;
  }
  public resetLbPort() {
    this._lbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbPortInput() {
    return this._lbPort;
  }

  // loadbalancer_algorithm - computed: false, optional: false, required: true
  private _loadbalancerAlgorithm?: string; 
  public get loadbalancerAlgorithm() {
    return this.getStringAttribute('loadbalancer_algorithm');
  }
  public set loadbalancerAlgorithm(value: string) {
    this._loadbalancerAlgorithm = value;
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

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
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

  // same_as_endpoint_port - computed: false, optional: true, required: false
  private _sameAsEndpointPort?: boolean | cdktf.IResolvable; 
  public get sameAsEndpointPort() {
    return this.getBooleanAttribute('same_as_endpoint_port');
  }
  public set sameAsEndpointPort(value: boolean | cdktf.IResolvable) {
    this._sameAsEndpointPort = value;
  }
  public resetSameAsEndpointPort() {
    this._sameAsEndpointPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameAsEndpointPortInput() {
    return this._sameAsEndpointPort;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new OriginPoolAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: OriginPoolAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new OriginPoolHealthcheckList(this, "healthcheck", false);
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: OriginPoolHealthcheck[] | cdktf.IResolvable) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // origin_servers - computed: false, optional: false, required: true
  private _originServers = new OriginPoolOriginServersList(this, "origin_servers", false);
  public get originServers() {
    return this._originServers;
  }
  public putOriginServers(value: OriginPoolOriginServers[] | cdktf.IResolvable) {
    this._originServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServersInput() {
    return this._originServers.internalValue;
  }

  // upstream_conn_pool_reuse_type - computed: false, optional: true, required: false
  private _upstreamConnPoolReuseType = new OriginPoolUpstreamConnPoolReuseTypeOutputReference(this, "upstream_conn_pool_reuse_type");
  public get upstreamConnPoolReuseType() {
    return this._upstreamConnPoolReuseType;
  }
  public putUpstreamConnPoolReuseType(value: OriginPoolUpstreamConnPoolReuseType) {
    this._upstreamConnPoolReuseType.internalValue = value;
  }
  public resetUpstreamConnPoolReuseType() {
    this._upstreamConnPoolReuseType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConnPoolReuseTypeInput() {
    return this._upstreamConnPoolReuseType.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new OriginPoolUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: OriginPoolUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      automatic_port: cdktf.booleanToTerraform(this._automaticPort),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      endpoint_selection: cdktf.stringToTerraform(this._endpointSelection),
      health_check_port: cdktf.numberToTerraform(this._healthCheckPort),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lb_port: cdktf.booleanToTerraform(this._lbPort),
      loadbalancer_algorithm: cdktf.stringToTerraform(this._loadbalancerAlgorithm),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      no_tls: cdktf.booleanToTerraform(this._noTls),
      port: cdktf.numberToTerraform(this._port),
      same_as_endpoint_port: cdktf.booleanToTerraform(this._sameAsEndpointPort),
      advanced_options: originPoolAdvancedOptionsToTerraform(this._advancedOptions.internalValue),
      healthcheck: cdktf.listMapper(originPoolHealthcheckToTerraform, true)(this._healthcheck.internalValue),
      origin_servers: cdktf.listMapper(originPoolOriginServersToTerraform, true)(this._originServers.internalValue),
      upstream_conn_pool_reuse_type: originPoolUpstreamConnPoolReuseTypeToTerraform(this._upstreamConnPoolReuseType.internalValue),
      use_tls: originPoolUseTlsToTerraform(this._useTls.internalValue),
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
      automatic_port: {
        value: cdktf.booleanToHclTerraform(this._automaticPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      endpoint_selection: {
        value: cdktf.stringToHclTerraform(this._endpointSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check_port: {
        value: cdktf.numberToHclTerraform(this._healthCheckPort),
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
      lb_port: {
        value: cdktf.booleanToHclTerraform(this._lbPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      no_tls: {
        value: cdktf.booleanToHclTerraform(this._noTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      same_as_endpoint_port: {
        value: cdktf.booleanToHclTerraform(this._sameAsEndpointPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advanced_options: {
        value: originPoolAdvancedOptionsToHclTerraform(this._advancedOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OriginPoolAdvancedOptionsList",
      },
      healthcheck: {
        value: cdktf.listMapperHcl(originPoolHealthcheckToHclTerraform, true)(this._healthcheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OriginPoolHealthcheckList",
      },
      origin_servers: {
        value: cdktf.listMapperHcl(originPoolOriginServersToHclTerraform, true)(this._originServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OriginPoolOriginServersList",
      },
      upstream_conn_pool_reuse_type: {
        value: originPoolUpstreamConnPoolReuseTypeToHclTerraform(this._upstreamConnPoolReuseType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OriginPoolUpstreamConnPoolReuseTypeList",
      },
      use_tls: {
        value: originPoolUseTlsToHclTerraform(this._useTls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OriginPoolUseTlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
