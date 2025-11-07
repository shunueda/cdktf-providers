// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UztnaOriginPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#annotations UztnaOriginPool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#description UztnaOriginPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#disable UztnaOriginPool#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#id UztnaOriginPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#labels UztnaOriginPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#name UztnaOriginPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#namespace UztnaOriginPool#namespace}
  */
  readonly namespace: string;
  /**
  * loadbalancer_algorithm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#loadbalancer_algorithm UztnaOriginPool#loadbalancer_algorithm}
  */
  readonly loadbalancerAlgorithm: UztnaOriginPoolLoadbalancerAlgorithm;
  /**
  * origin_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#origin_servers UztnaOriginPool#origin_servers}
  */
  readonly originServers: UztnaOriginPoolOriginServers[] | cdktf.IResolvable;
  /**
  * uztna_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#uztna_healthcheck UztnaOriginPool#uztna_healthcheck}
  */
  readonly uztnaHealthcheck?: UztnaOriginPoolUztnaHealthcheck[] | cdktf.IResolvable;
}
export interface UztnaOriginPoolLoadbalancerAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#least_connections UztnaOriginPool#least_connections}
  */
  readonly leastConnections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#round_robin UztnaOriginPool#round_robin}
  */
  readonly roundRobin?: boolean | cdktf.IResolvable;
}

export function uztnaOriginPoolLoadbalancerAlgorithmToTerraform(struct?: UztnaOriginPoolLoadbalancerAlgorithmOutputReference | UztnaOriginPoolLoadbalancerAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    least_connections: cdktf.booleanToTerraform(struct!.leastConnections),
    round_robin: cdktf.booleanToTerraform(struct!.roundRobin),
  }
}


export function uztnaOriginPoolLoadbalancerAlgorithmToHclTerraform(struct?: UztnaOriginPoolLoadbalancerAlgorithmOutputReference | UztnaOriginPoolLoadbalancerAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    least_connections: {
      value: cdktf.booleanToHclTerraform(struct!.leastConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class UztnaOriginPoolLoadbalancerAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaOriginPoolLoadbalancerAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leastConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.leastConnections = this._leastConnections;
    }
    if (this._roundRobin !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaOriginPoolLoadbalancerAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leastConnections = undefined;
      this._roundRobin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leastConnections = value.leastConnections;
      this._roundRobin = value.roundRobin;
    }
  }

  // least_connections - computed: false, optional: true, required: false
  private _leastConnections?: boolean | cdktf.IResolvable; 
  public get leastConnections() {
    return this.getBooleanAttribute('least_connections');
  }
  public set leastConnections(value: boolean | cdktf.IResolvable) {
    this._leastConnections = value;
  }
  public resetLeastConnections() {
    this._leastConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leastConnectionsInput() {
    return this._leastConnections;
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
export interface UztnaOriginPoolOriginServersPrivateIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#ip UztnaOriginPool#ip}
  */
  readonly ip?: string;
}

export function uztnaOriginPoolOriginServersPrivateIpToTerraform(struct?: UztnaOriginPoolOriginServersPrivateIpOutputReference | UztnaOriginPoolOriginServersPrivateIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function uztnaOriginPoolOriginServersPrivateIpToHclTerraform(struct?: UztnaOriginPoolOriginServersPrivateIpOutputReference | UztnaOriginPoolOriginServersPrivateIp): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaOriginPoolOriginServersPrivateIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UztnaOriginPoolOriginServersPrivateIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaOriginPoolOriginServersPrivateIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
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
}
export interface UztnaOriginPoolOriginServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#labels UztnaOriginPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#port UztnaOriginPool#port}
  */
  readonly port: number;
  /**
  * private_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#private_ip UztnaOriginPool#private_ip}
  */
  readonly privateIp?: UztnaOriginPoolOriginServersPrivateIp;
}

export function uztnaOriginPoolOriginServersToTerraform(struct?: UztnaOriginPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    port: cdktf.numberToTerraform(struct!.port),
    private_ip: uztnaOriginPoolOriginServersPrivateIpToTerraform(struct!.privateIp),
  }
}


export function uztnaOriginPoolOriginServersToHclTerraform(struct?: UztnaOriginPoolOriginServers | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip: {
      value: uztnaOriginPoolOriginServersPrivateIpToHclTerraform(struct!.privateIp),
      isBlock: true,
      type: "list",
      storageClassType: "UztnaOriginPoolOriginServersPrivateIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UztnaOriginPoolOriginServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaOriginPoolOriginServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UztnaOriginPoolOriginServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._port = undefined;
      this._privateIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._port = value.port;
      this._privateIp.internalValue = value.privateIp;
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

  // private_ip - computed: false, optional: true, required: false
  private _privateIp = new UztnaOriginPoolOriginServersPrivateIpOutputReference(this, "private_ip");
  public get privateIp() {
    return this._privateIp;
  }
  public putPrivateIp(value: UztnaOriginPoolOriginServersPrivateIp) {
    this._privateIp.internalValue = value;
  }
  public resetPrivateIp() {
    this._privateIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp.internalValue;
  }
}

export class UztnaOriginPoolOriginServersList extends cdktf.ComplexList {
  public internalValue? : UztnaOriginPoolOriginServers[] | cdktf.IResolvable

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
  public get(index: number): UztnaOriginPoolOriginServersOutputReference {
    return new UztnaOriginPoolOriginServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UztnaOriginPoolUztnaHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#name UztnaOriginPool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#namespace UztnaOriginPool#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#tenant UztnaOriginPool#tenant}
  */
  readonly tenant?: string;
}

export function uztnaOriginPoolUztnaHealthcheckToTerraform(struct?: UztnaOriginPoolUztnaHealthcheck | cdktf.IResolvable): any {
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


export function uztnaOriginPoolUztnaHealthcheckToHclTerraform(struct?: UztnaOriginPoolUztnaHealthcheck | cdktf.IResolvable): any {
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

export class UztnaOriginPoolUztnaHealthcheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UztnaOriginPoolUztnaHealthcheck | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UztnaOriginPoolUztnaHealthcheck | cdktf.IResolvable | undefined) {
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

export class UztnaOriginPoolUztnaHealthcheckList extends cdktf.ComplexList {
  public internalValue? : UztnaOriginPoolUztnaHealthcheck[] | cdktf.IResolvable

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
  public get(index: number): UztnaOriginPoolUztnaHealthcheckOutputReference {
    return new UztnaOriginPoolUztnaHealthcheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool volterra_uztna_origin_pool}
*/
export class UztnaOriginPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_uztna_origin_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UztnaOriginPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UztnaOriginPool to import
  * @param importFromId The id of the existing UztnaOriginPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UztnaOriginPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_uztna_origin_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/uztna_origin_pool volterra_uztna_origin_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UztnaOriginPoolConfig
  */
  public constructor(scope: Construct, id: string, config: UztnaOriginPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_uztna_origin_pool',
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
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._loadbalancerAlgorithm.internalValue = config.loadbalancerAlgorithm;
    this._originServers.internalValue = config.originServers;
    this._uztnaHealthcheck.internalValue = config.uztnaHealthcheck;
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

  // loadbalancer_algorithm - computed: false, optional: false, required: true
  private _loadbalancerAlgorithm = new UztnaOriginPoolLoadbalancerAlgorithmOutputReference(this, "loadbalancer_algorithm");
  public get loadbalancerAlgorithm() {
    return this._loadbalancerAlgorithm;
  }
  public putLoadbalancerAlgorithm(value: UztnaOriginPoolLoadbalancerAlgorithm) {
    this._loadbalancerAlgorithm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerAlgorithmInput() {
    return this._loadbalancerAlgorithm.internalValue;
  }

  // origin_servers - computed: false, optional: false, required: true
  private _originServers = new UztnaOriginPoolOriginServersList(this, "origin_servers", false);
  public get originServers() {
    return this._originServers;
  }
  public putOriginServers(value: UztnaOriginPoolOriginServers[] | cdktf.IResolvable) {
    this._originServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServersInput() {
    return this._originServers.internalValue;
  }

  // uztna_healthcheck - computed: false, optional: true, required: false
  private _uztnaHealthcheck = new UztnaOriginPoolUztnaHealthcheckList(this, "uztna_healthcheck", false);
  public get uztnaHealthcheck() {
    return this._uztnaHealthcheck;
  }
  public putUztnaHealthcheck(value: UztnaOriginPoolUztnaHealthcheck[] | cdktf.IResolvable) {
    this._uztnaHealthcheck.internalValue = value;
  }
  public resetUztnaHealthcheck() {
    this._uztnaHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uztnaHealthcheckInput() {
    return this._uztnaHealthcheck.internalValue;
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
      loadbalancer_algorithm: uztnaOriginPoolLoadbalancerAlgorithmToTerraform(this._loadbalancerAlgorithm.internalValue),
      origin_servers: cdktf.listMapper(uztnaOriginPoolOriginServersToTerraform, true)(this._originServers.internalValue),
      uztna_healthcheck: cdktf.listMapper(uztnaOriginPoolUztnaHealthcheckToTerraform, true)(this._uztnaHealthcheck.internalValue),
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
      loadbalancer_algorithm: {
        value: uztnaOriginPoolLoadbalancerAlgorithmToHclTerraform(this._loadbalancerAlgorithm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaOriginPoolLoadbalancerAlgorithmList",
      },
      origin_servers: {
        value: cdktf.listMapperHcl(uztnaOriginPoolOriginServersToHclTerraform, true)(this._originServers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaOriginPoolOriginServersList",
      },
      uztna_healthcheck: {
        value: cdktf.listMapperHcl(uztnaOriginPoolUztnaHealthcheckToHclTerraform, true)(this._uztnaHealthcheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UztnaOriginPoolUztnaHealthcheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
