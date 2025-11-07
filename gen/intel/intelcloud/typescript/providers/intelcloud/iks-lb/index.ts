// https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IksLbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#cluster_uuid IksLb#cluster_uuid}
  */
  readonly clusterUuid: string;
  /**
  * load_balancers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#load_balancers IksLb#load_balancers}
  */
  readonly loadBalancers?: IksLbLoadBalancers;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#timeouts IksLb#timeouts}
  */
  readonly timeouts?: IksLbTimeouts;
}
export interface IksLbLoadBalancersListenersPool {
  /**
  * Load balancing mode (e.g., roundRobin).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#load_balancing_mode IksLb#load_balancing_mode}
  */
  readonly loadBalancingMode: string;
  /**
  * Health monitor type (e.g., https).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#monitor IksLb#monitor}
  */
  readonly monitor: string;
  /**
  * ID of the associated node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#node_group_id IksLb#node_group_id}
  */
  readonly nodeGroupId: string;
  /**
  * Pool port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#port IksLb#port}
  */
  readonly port: number;
}

export function iksLbLoadBalancersListenersPoolToTerraform(struct?: IksLbLoadBalancersListenersPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancing_mode: cdktf.stringToTerraform(struct!.loadBalancingMode),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    node_group_id: cdktf.stringToTerraform(struct!.nodeGroupId),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function iksLbLoadBalancersListenersPoolToHclTerraform(struct?: IksLbLoadBalancersListenersPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancing_mode: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksLbLoadBalancersListenersPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IksLbLoadBalancersListenersPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingMode = this._loadBalancingMode;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._nodeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupId = this._nodeGroupId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksLbLoadBalancersListenersPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancingMode = undefined;
      this._monitor = undefined;
      this._nodeGroupId = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancingMode = value.loadBalancingMode;
      this._monitor = value.monitor;
      this._nodeGroupId = value.nodeGroupId;
      this._port = value.port;
    }
  }

  // load_balancing_mode - computed: false, optional: false, required: true
  private _loadBalancingMode?: string; 
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }
  public set loadBalancingMode(value: string) {
    this._loadBalancingMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingModeInput() {
    return this._loadBalancingMode;
  }

  // monitor - computed: false, optional: false, required: true
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // node_group_id - computed: false, optional: false, required: true
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
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
}
export interface IksLbLoadBalancersListenersSecurity {
  /**
  * List of allowed source IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#source_ips IksLb#source_ips}
  */
  readonly sourceIps: string[];
}

export function iksLbLoadBalancersListenersSecurityToTerraform(struct?: IksLbLoadBalancersListenersSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
  }
}


export function iksLbLoadBalancersListenersSecurityToHclTerraform(struct?: IksLbLoadBalancersListenersSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksLbLoadBalancersListenersSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IksLbLoadBalancersListenersSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksLbLoadBalancersListenersSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIps = value.sourceIps;
    }
  }

  // source_ips - computed: false, optional: false, required: true
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return this.getListAttribute('source_ips');
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }
}
export interface IksLbLoadBalancersListeners {
  /**
  * Listener port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#port IksLb#port}
  */
  readonly port: number;
  /**
  * Listener protocol (e.g., LBProtocolTCP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#protocol IksLb#protocol}
  */
  readonly protocol: string;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#pool IksLb#pool}
  */
  readonly pool: IksLbLoadBalancersListenersPool;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#security IksLb#security}
  */
  readonly security: IksLbLoadBalancersListenersSecurity;
}

export function iksLbLoadBalancersListenersToTerraform(struct?: IksLbLoadBalancersListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    pool: iksLbLoadBalancersListenersPoolToTerraform(struct!.pool),
    security: iksLbLoadBalancersListenersSecurityToTerraform(struct!.security),
  }
}


export function iksLbLoadBalancersListenersToHclTerraform(struct?: IksLbLoadBalancersListeners | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: iksLbLoadBalancersListenersPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "IksLbLoadBalancersListenersPool",
    },
    security: {
      value: iksLbLoadBalancersListenersSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "IksLbLoadBalancersListenersSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksLbLoadBalancersListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IksLbLoadBalancersListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksLbLoadBalancersListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._pool.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
      this._pool.internalValue = value.pool;
      this._security.internalValue = value.security;
    }
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

  // pool - computed: false, optional: false, required: true
  private _pool = new IksLbLoadBalancersListenersPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: IksLbLoadBalancersListenersPool) {
    this._pool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new IksLbLoadBalancersListenersSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: IksLbLoadBalancersListenersSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}

export class IksLbLoadBalancersListenersList extends cdktf.ComplexList {
  public internalValue? : IksLbLoadBalancersListeners[] | cdktf.IResolvable

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
  public get(index: number): IksLbLoadBalancersListenersOutputReference {
    return new IksLbLoadBalancersListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IksLbLoadBalancersSecurity {
  /**
  * List of allowed source IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#source_ips IksLb#source_ips}
  */
  readonly sourceIps: string[];
}

export function iksLbLoadBalancersSecurityToTerraform(struct?: IksLbLoadBalancersSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
  }
}


export function iksLbLoadBalancersSecurityToHclTerraform(struct?: IksLbLoadBalancersSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksLbLoadBalancersSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IksLbLoadBalancersSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksLbLoadBalancersSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceIps = value.sourceIps;
    }
  }

  // source_ips - computed: false, optional: false, required: true
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return this.getListAttribute('source_ips');
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }
}
export interface IksLbLoadBalancers {
  /**
  * Name of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#name IksLb#name}
  */
  readonly name: string;
  /**
  * Schema under which the load balancer is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#schema IksLb#schema}
  */
  readonly schema: string;
  /**
  * listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#listeners IksLb#listeners}
  */
  readonly listeners?: IksLbLoadBalancersListeners[] | cdktf.IResolvable;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#security IksLb#security}
  */
  readonly security: IksLbLoadBalancersSecurity;
}

export function iksLbLoadBalancersToTerraform(struct?: IksLbLoadBalancers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    schema: cdktf.stringToTerraform(struct!.schema),
    listeners: cdktf.listMapper(iksLbLoadBalancersListenersToTerraform, true)(struct!.listeners),
    security: iksLbLoadBalancersSecurityToTerraform(struct!.security),
  }
}


export function iksLbLoadBalancersToHclTerraform(struct?: IksLbLoadBalancers | cdktf.IResolvable): any {
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
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listeners: {
      value: cdktf.listMapperHcl(iksLbLoadBalancersListenersToHclTerraform, true)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "IksLbLoadBalancersListenersList",
    },
    security: {
      value: iksLbLoadBalancersSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "IksLbLoadBalancersSecurity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksLbLoadBalancersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IksLbLoadBalancers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksLbLoadBalancers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._schema = undefined;
      this._listeners.internalValue = undefined;
      this._security.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._schema = value.schema;
      this._listeners.internalValue = value.listeners;
      this._security.internalValue = value.security;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // listeners - computed: false, optional: true, required: false
  private _listeners = new IksLbLoadBalancersListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: IksLbLoadBalancersListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // security - computed: false, optional: false, required: true
  private _security = new IksLbLoadBalancersSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: IksLbLoadBalancersSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }
}
export interface IksLbTimeouts {
  /**
  * Timeout for loadbalancer resource operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#resource_timeout IksLb#resource_timeout}
  */
  readonly resourceTimeout?: string;
}

export function iksLbTimeoutsToTerraform(struct?: IksLbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_timeout: cdktf.stringToTerraform(struct!.resourceTimeout),
  }
}


export function iksLbTimeoutsToHclTerraform(struct?: IksLbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_timeout: {
      value: cdktf.stringToHclTerraform(struct!.resourceTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IksLbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IksLbTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTimeout = this._resourceTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IksLbTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceTimeout = value.resourceTimeout;
    }
  }

  // resource_timeout - computed: true, optional: true, required: false
  private _resourceTimeout?: string; 
  public get resourceTimeout() {
    return this.getStringAttribute('resource_timeout');
  }
  public set resourceTimeout(value: string) {
    this._resourceTimeout = value;
  }
  public resetResourceTimeout() {
    this._resourceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTimeoutInput() {
    return this._resourceTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb intelcloud_iks_lb}
*/
export class IksLb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intelcloud_iks_lb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IksLb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IksLb to import
  * @param importFromId The id of the existing IksLb that should be imported. Refer to the {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IksLb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intelcloud_iks_lb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/intel/intelcloud/0.0.20/docs/resources/iks_lb intelcloud_iks_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IksLbConfig
  */
  public constructor(scope: Construct, id: string, config: IksLbConfig) {
    super(scope, id, {
      terraformResourceType: 'intelcloud_iks_lb',
      terraformGeneratorMetadata: {
        providerName: 'intelcloud',
        providerVersion: '0.0.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterUuid = config.clusterUuid;
    this._loadBalancers.internalValue = config.loadBalancers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_uuid - computed: false, optional: false, required: true
  private _clusterUuid?: string; 
  public get clusterUuid() {
    return this.getStringAttribute('cluster_uuid');
  }
  public set clusterUuid(value: string) {
    this._clusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUuidInput() {
    return this._clusterUuid;
  }

  // load_balancers - computed: false, optional: true, required: false
  private _loadBalancers = new IksLbLoadBalancersOutputReference(this, "load_balancers");
  public get loadBalancers() {
    return this._loadBalancers;
  }
  public putLoadBalancers(value: IksLbLoadBalancers) {
    this._loadBalancers.internalValue = value;
  }
  public resetLoadBalancers() {
    this._loadBalancers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancersInput() {
    return this._loadBalancers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IksLbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IksLbTimeouts) {
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
      cluster_uuid: cdktf.stringToTerraform(this._clusterUuid),
      load_balancers: iksLbLoadBalancersToTerraform(this._loadBalancers.internalValue),
      timeouts: iksLbTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_uuid: {
        value: cdktf.stringToHclTerraform(this._clusterUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancers: {
        value: iksLbLoadBalancersToHclTerraform(this._loadBalancers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IksLbLoadBalancers",
      },
      timeouts: {
        value: iksLbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IksLbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
