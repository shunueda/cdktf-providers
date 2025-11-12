// https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbaasNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access Control Lists for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#acls LbaasNetwork#acls}
  */
  readonly acls?: LbaasNetworkAcls[] | cdktf.IResolvable;
  /**
  * Backend configurations for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#backends LbaasNetwork#backends}
  */
  readonly backends: LbaasNetworkBackends[] | cdktf.IResolvable;
  /**
  * The description of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#description LbaasNetwork#description}
  */
  readonly description?: string;
  /**
  * Health check configurations for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#health_checks LbaasNetwork#health_checks}
  */
  readonly healthChecks?: LbaasNetworkHealthChecks[] | cdktf.IResolvable;
  /**
  * Listener configurations for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#listeners LbaasNetwork#listeners}
  */
  readonly listeners: LbaasNetworkListeners[] | cdktf.IResolvable;
  /**
  * The name of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#name LbaasNetwork#name}
  */
  readonly name: string;
  /**
  * The ID of the public IP associated with the load balancer. Required for external load balancers, must be omitted for internal load balancers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#public_ip_id LbaasNetwork#public_ip_id}
  */
  readonly publicIpId?: string;
  /**
  * The ID of the subnet pool for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#subnetpool_id LbaasNetwork#subnetpool_id}
  */
  readonly subnetpoolId?: string;
  /**
  * TLS certificate configurations for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#tls_certificates LbaasNetwork#tls_certificates}
  */
  readonly tlsCertificates?: LbaasNetworkTlsCertificates[] | cdktf.IResolvable;
  /**
  * The type of the load balancer. Only 'proxy' type is currently supported by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#type LbaasNetwork#type}
  */
  readonly type: string;
  /**
  * The visibility of the load balancer. Valid values: 'internal' (accessible only within VPC), 'external' (accessible from internet).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#visibility LbaasNetwork#visibility}
  */
  readonly visibility: string;
  /**
  * The ID of the VPC where the load balancer is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#vpc_id LbaasNetwork#vpc_id}
  */
  readonly vpcId: string;
}
export interface LbaasNetworkAcls {
  /**
  * The action for the ACL rule. Valid values: 'ALLOW', 'DENY', 'DENY_UNSPECIFIED'. Note: values are case-sensitive and must be uppercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#action LbaasNetwork#action}
  */
  readonly action: string;
  /**
  * The ethertype for the ACL rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#ethertype LbaasNetwork#ethertype}
  */
  readonly ethertype: string;
  /**
  * The name of the ACL rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#name LbaasNetwork#name}
  */
  readonly name: string;
  /**
  * The protocol for the ACL rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#protocol LbaasNetwork#protocol}
  */
  readonly protocol?: string;
  /**
  * The remote IP prefix for the ACL rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#remote_ip_prefix LbaasNetwork#remote_ip_prefix}
  */
  readonly remoteIpPrefix?: string;
}

export function lbaasNetworkAclsToTerraform(struct?: LbaasNetworkAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ethertype: cdktf.stringToTerraform(struct!.ethertype),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    remote_ip_prefix: cdktf.stringToTerraform(struct!.remoteIpPrefix),
  }
}


export function lbaasNetworkAclsToHclTerraform(struct?: LbaasNetworkAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ethertype: {
      value: cdktf.stringToHclTerraform(struct!.ethertype),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasNetworkAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbaasNetworkAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ethertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ethertype = this._ethertype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._remoteIpPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpPrefix = this._remoteIpPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasNetworkAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._ethertype = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._remoteIpPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._ethertype = value.ethertype;
      this._name = value.name;
      this._protocol = value.protocol;
      this._remoteIpPrefix = value.remoteIpPrefix;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ethertype - computed: false, optional: false, required: true
  private _ethertype?: string; 
  public get ethertype() {
    return this.getStringAttribute('ethertype');
  }
  public set ethertype(value: string) {
    this._ethertype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ethertypeInput() {
    return this._ethertype;
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

  // remote_ip_prefix - computed: false, optional: true, required: false
  private _remoteIpPrefix?: string; 
  public get remoteIpPrefix() {
    return this.getStringAttribute('remote_ip_prefix');
  }
  public set remoteIpPrefix(value: string) {
    this._remoteIpPrefix = value;
  }
  public resetRemoteIpPrefix() {
    this._remoteIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpPrefixInput() {
    return this._remoteIpPrefix;
  }
}

export class LbaasNetworkAclsList extends cdktf.ComplexList {
  public internalValue? : LbaasNetworkAcls[] | cdktf.IResolvable

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
  public get(index: number): LbaasNetworkAclsOutputReference {
    return new LbaasNetworkAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbaasNetworkBackendsTargets {
  /**
  * The IP address of the target. Required when targets_type is 'raw', must be empty when targets_type is 'instance'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#ip_address LbaasNetwork#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * The NIC ID of the target. Required when targets_type is 'instance', must be empty when targets_type is 'raw'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#nic_id LbaasNetwork#nic_id}
  */
  readonly nicId?: string;
  /**
  * The port of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#port LbaasNetwork#port}
  */
  readonly port: number;
}

export function lbaasNetworkBackendsTargetsToTerraform(struct?: LbaasNetworkBackendsTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    nic_id: cdktf.stringToTerraform(struct!.nicId),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function lbaasNetworkBackendsTargetsToHclTerraform(struct?: LbaasNetworkBackendsTargets | cdktf.IResolvable): any {
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
    nic_id: {
      value: cdktf.stringToHclTerraform(struct!.nicId),
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

export class LbaasNetworkBackendsTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbaasNetworkBackendsTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._nicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicId = this._nicId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasNetworkBackendsTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._nicId = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._nicId = value.nicId;
      this._port = value.port;
    }
  }

  // ip_address - computed: false, optional: true, required: false
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

  // nic_id - computed: false, optional: true, required: false
  private _nicId?: string; 
  public get nicId() {
    return this.getStringAttribute('nic_id');
  }
  public set nicId(value: string) {
    this._nicId = value;
  }
  public resetNicId() {
    this._nicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicIdInput() {
    return this._nicId;
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

export class LbaasNetworkBackendsTargetsList extends cdktf.ComplexList {
  public internalValue? : LbaasNetworkBackendsTargets[] | cdktf.IResolvable

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
  public get(index: number): LbaasNetworkBackendsTargetsOutputReference {
    return new LbaasNetworkBackendsTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbaasNetworkBackends {
  /**
  * The load balancing algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#balance_algorithm LbaasNetwork#balance_algorithm}
  */
  readonly balanceAlgorithm: string;
  /**
  * Whether to close connections when a host health check fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#close_connections_on_host_health_failure LbaasNetwork#close_connections_on_host_health_failure}
  */
  readonly closeConnectionsOnHostHealthFailure?: boolean | cdktf.IResolvable;
  /**
  * The description of the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#description LbaasNetwork#description}
  */
  readonly description?: string;
  /**
  * The name of the health check associated with this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#health_check_name LbaasNetwork#health_check_name}
  */
  readonly healthCheckName?: string;
  /**
  * The name of the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#name LbaasNetwork#name}
  */
  readonly name: string;
  /**
  * The panic threshold percentage for the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#panic_threshold LbaasNetwork#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * The targets for this backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#targets LbaasNetwork#targets}
  */
  readonly targets: LbaasNetworkBackendsTargets[] | cdktf.IResolvable;
  /**
  * The type of targets. Valid values: 'instance' (requires nic_id and port), 'raw' (requires ip_address and port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#targets_type LbaasNetwork#targets_type}
  */
  readonly targetsType: string;
}

export function lbaasNetworkBackendsToTerraform(struct?: LbaasNetworkBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balance_algorithm: cdktf.stringToTerraform(struct!.balanceAlgorithm),
    close_connections_on_host_health_failure: cdktf.booleanToTerraform(struct!.closeConnectionsOnHostHealthFailure),
    description: cdktf.stringToTerraform(struct!.description),
    health_check_name: cdktf.stringToTerraform(struct!.healthCheckName),
    name: cdktf.stringToTerraform(struct!.name),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    targets: cdktf.listMapper(lbaasNetworkBackendsTargetsToTerraform, false)(struct!.targets),
    targets_type: cdktf.stringToTerraform(struct!.targetsType),
  }
}


export function lbaasNetworkBackendsToHclTerraform(struct?: LbaasNetworkBackends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balance_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.balanceAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    close_connections_on_host_health_failure: {
      value: cdktf.booleanToHclTerraform(struct!.closeConnectionsOnHostHealthFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_name: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckName),
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
    panic_threshold: {
      value: cdktf.numberToHclTerraform(struct!.panicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    targets: {
      value: cdktf.listMapperHcl(lbaasNetworkBackendsTargetsToHclTerraform, false)(struct!.targets),
      isBlock: true,
      type: "set",
      storageClassType: "LbaasNetworkBackendsTargetsList",
    },
    targets_type: {
      value: cdktf.stringToHclTerraform(struct!.targetsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasNetworkBackendsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbaasNetworkBackends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balanceAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.balanceAlgorithm = this._balanceAlgorithm;
    }
    if (this._closeConnectionsOnHostHealthFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeConnectionsOnHostHealthFailure = this._closeConnectionsOnHostHealthFailure;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._healthCheckName !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckName = this._healthCheckName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._targets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targets = this._targets?.internalValue;
    }
    if (this._targetsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetsType = this._targetsType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasNetworkBackends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balanceAlgorithm = undefined;
      this._closeConnectionsOnHostHealthFailure = undefined;
      this._description = undefined;
      this._healthCheckName = undefined;
      this._name = undefined;
      this._panicThreshold = undefined;
      this._targets.internalValue = undefined;
      this._targetsType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balanceAlgorithm = value.balanceAlgorithm;
      this._closeConnectionsOnHostHealthFailure = value.closeConnectionsOnHostHealthFailure;
      this._description = value.description;
      this._healthCheckName = value.healthCheckName;
      this._name = value.name;
      this._panicThreshold = value.panicThreshold;
      this._targets.internalValue = value.targets;
      this._targetsType = value.targetsType;
    }
  }

  // balance_algorithm - computed: false, optional: false, required: true
  private _balanceAlgorithm?: string; 
  public get balanceAlgorithm() {
    return this.getStringAttribute('balance_algorithm');
  }
  public set balanceAlgorithm(value: string) {
    this._balanceAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get balanceAlgorithmInput() {
    return this._balanceAlgorithm;
  }

  // close_connections_on_host_health_failure - computed: true, optional: true, required: false
  private _closeConnectionsOnHostHealthFailure?: boolean | cdktf.IResolvable; 
  public get closeConnectionsOnHostHealthFailure() {
    return this.getBooleanAttribute('close_connections_on_host_health_failure');
  }
  public set closeConnectionsOnHostHealthFailure(value: boolean | cdktf.IResolvable) {
    this._closeConnectionsOnHostHealthFailure = value;
  }
  public resetCloseConnectionsOnHostHealthFailure() {
    this._closeConnectionsOnHostHealthFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeConnectionsOnHostHealthFailureInput() {
    return this._closeConnectionsOnHostHealthFailure;
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

  // health_check_name - computed: false, optional: true, required: false
  private _healthCheckName?: string; 
  public get healthCheckName() {
    return this.getStringAttribute('health_check_name');
  }
  public set healthCheckName(value: string) {
    this._healthCheckName = value;
  }
  public resetHealthCheckName() {
    this._healthCheckName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckNameInput() {
    return this._healthCheckName;
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

  // panic_threshold - computed: true, optional: true, required: false
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

  // targets - computed: false, optional: false, required: true
  private _targets = new LbaasNetworkBackendsTargetsList(this, "targets", true);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: LbaasNetworkBackendsTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // targets_type - computed: false, optional: false, required: true
  private _targetsType?: string; 
  public get targetsType() {
    return this.getStringAttribute('targets_type');
  }
  public set targetsType(value: string) {
    this._targetsType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsTypeInput() {
    return this._targetsType;
  }
}

export class LbaasNetworkBackendsList extends cdktf.ComplexList {
  public internalValue? : LbaasNetworkBackends[] | cdktf.IResolvable

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
  public get(index: number): LbaasNetworkBackendsOutputReference {
    return new LbaasNetworkBackendsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbaasNetworkHealthChecks {
  /**
  * The description of the health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#description LbaasNetwork#description}
  */
  readonly description?: string;
  /**
  * The HTTP status code considered healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#healthy_status_code LbaasNetwork#healthy_status_code}
  */
  readonly healthyStatusCode?: number;
  /**
  * The number of consecutive successful health checks required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#healthy_threshold_count LbaasNetwork#healthy_threshold_count}
  */
  readonly healthyThresholdCount?: number;
  /**
  * The initial delay before starting health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#initial_delay_seconds LbaasNetwork#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * The interval between health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#interval_seconds LbaasNetwork#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * The name of the health check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#name LbaasNetwork#name}
  */
  readonly name: string;
  /**
  * The path for HTTP health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#path LbaasNetwork#path}
  */
  readonly path?: string;
  /**
  * The port for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#port LbaasNetwork#port}
  */
  readonly port: number;
  /**
  * The protocol for health checks. Valid values: 'tcp', 'http'. Note: values are case-sensitive and must be lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#protocol LbaasNetwork#protocol}
  */
  readonly protocol: string;
  /**
  * The timeout for health checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#timeout_seconds LbaasNetwork#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The number of consecutive failed health checks before marking unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#unhealthy_threshold_count LbaasNetwork#unhealthy_threshold_count}
  */
  readonly unhealthyThresholdCount?: number;
}

export function lbaasNetworkHealthChecksToTerraform(struct?: LbaasNetworkHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    healthy_status_code: cdktf.numberToTerraform(struct!.healthyStatusCode),
    healthy_threshold_count: cdktf.numberToTerraform(struct!.healthyThresholdCount),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    unhealthy_threshold_count: cdktf.numberToTerraform(struct!.unhealthyThresholdCount),
  }
}


export function lbaasNetworkHealthChecksToHclTerraform(struct?: LbaasNetworkHealthChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthy_status_code: {
      value: cdktf.numberToHclTerraform(struct!.healthyStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.healthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold_count: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThresholdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasNetworkHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbaasNetworkHealthChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._healthyStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyStatusCode = this._healthyStatusCode;
    }
    if (this._healthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThresholdCount = this._healthyThresholdCount;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._unhealthyThresholdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThresholdCount = this._unhealthyThresholdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasNetworkHealthChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._healthyStatusCode = undefined;
      this._healthyThresholdCount = undefined;
      this._initialDelaySeconds = undefined;
      this._intervalSeconds = undefined;
      this._name = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._timeoutSeconds = undefined;
      this._unhealthyThresholdCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._healthyStatusCode = value.healthyStatusCode;
      this._healthyThresholdCount = value.healthyThresholdCount;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._intervalSeconds = value.intervalSeconds;
      this._name = value.name;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._timeoutSeconds = value.timeoutSeconds;
      this._unhealthyThresholdCount = value.unhealthyThresholdCount;
    }
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

  // healthy_status_code - computed: true, optional: true, required: false
  private _healthyStatusCode?: number; 
  public get healthyStatusCode() {
    return this.getNumberAttribute('healthy_status_code');
  }
  public set healthyStatusCode(value: number) {
    this._healthyStatusCode = value;
  }
  public resetHealthyStatusCode() {
    this._healthyStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyStatusCodeInput() {
    return this._healthyStatusCode;
  }

  // healthy_threshold_count - computed: true, optional: true, required: false
  private _healthyThresholdCount?: number; 
  public get healthyThresholdCount() {
    return this.getNumberAttribute('healthy_threshold_count');
  }
  public set healthyThresholdCount(value: number) {
    this._healthyThresholdCount = value;
  }
  public resetHealthyThresholdCount() {
    this._healthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdCountInput() {
    return this._healthyThresholdCount;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_delay_seconds - computed: true, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // interval_seconds - computed: true, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // timeout_seconds - computed: true, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // unhealthy_threshold_count - computed: true, optional: true, required: false
  private _unhealthyThresholdCount?: number; 
  public get unhealthyThresholdCount() {
    return this.getNumberAttribute('unhealthy_threshold_count');
  }
  public set unhealthyThresholdCount(value: number) {
    this._unhealthyThresholdCount = value;
  }
  public resetUnhealthyThresholdCount() {
    this._unhealthyThresholdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdCountInput() {
    return this._unhealthyThresholdCount;
  }
}

export class LbaasNetworkHealthChecksList extends cdktf.ComplexList {
  public internalValue? : LbaasNetworkHealthChecks[] | cdktf.IResolvable

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
  public get(index: number): LbaasNetworkHealthChecksOutputReference {
    return new LbaasNetworkHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbaasNetworkListeners {
  /**
  * The name of the backend associated with this listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#backend_name LbaasNetwork#backend_name}
  */
  readonly backendName: string;
  /**
  * The description of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#description LbaasNetwork#description}
  */
  readonly description?: string;
  /**
  * The name of the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#name LbaasNetwork#name}
  */
  readonly name: string;
  /**
  * The port for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#port LbaasNetwork#port}
  */
  readonly port: number;
  /**
  * The protocol for the listener. Valid values: 'tcp' (for network load balancers), 'tls' (for SSL/TLS termination). Note: values are case-sensitive and must be lowercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#protocol LbaasNetwork#protocol}
  */
  readonly protocol: string;
  /**
  * The name of the TLS certificate for HTTPS listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#tls_certificate_name LbaasNetwork#tls_certificate_name}
  */
  readonly tlsCertificateName?: string;
}

export function lbaasNetworkListenersToTerraform(struct?: LbaasNetworkListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_name: cdktf.stringToTerraform(struct!.backendName),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    tls_certificate_name: cdktf.stringToTerraform(struct!.tlsCertificateName),
  }
}


export function lbaasNetworkListenersToHclTerraform(struct?: LbaasNetworkListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_name: {
      value: cdktf.stringToHclTerraform(struct!.backendName),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsCertificateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasNetworkListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbaasNetworkListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendName = this._backendName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._tlsCertificateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificateName = this._tlsCertificateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasNetworkListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendName = undefined;
      this._description = undefined;
      this._name = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._tlsCertificateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendName = value.backendName;
      this._description = value.description;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
      this._tlsCertificateName = value.tlsCertificateName;
    }
  }

  // backend_name - computed: false, optional: false, required: true
  private _backendName?: string; 
  public get backendName() {
    return this.getStringAttribute('backend_name');
  }
  public set backendName(value: string) {
    this._backendName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendNameInput() {
    return this._backendName;
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

  // tls_certificate_name - computed: false, optional: true, required: false
  private _tlsCertificateName?: string; 
  public get tlsCertificateName() {
    return this.getStringAttribute('tls_certificate_name');
  }
  public set tlsCertificateName(value: string) {
    this._tlsCertificateName = value;
  }
  public resetTlsCertificateName() {
    this._tlsCertificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateNameInput() {
    return this._tlsCertificateName;
  }
}

export class LbaasNetworkListenersList extends cdktf.ComplexList {
  public internalValue? : LbaasNetworkListeners[] | cdktf.IResolvable

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
  public get(index: number): LbaasNetworkListenersOutputReference {
    return new LbaasNetworkListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbaasNetworkTlsCertificates {
  /**
  * The TLS certificate content. Must be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#certificate LbaasNetwork#certificate}
  */
  readonly certificate: string;
  /**
  * The description of the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#description LbaasNetwork#description}
  */
  readonly description?: string;
  /**
  * The name of the TLS certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#name LbaasNetwork#name}
  */
  readonly name: string;
  /**
  * The private key for the TLS certificate, must be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#private_key LbaasNetwork#private_key}
  */
  readonly privateKey: string;
}

export function lbaasNetworkTlsCertificatesToTerraform(struct?: LbaasNetworkTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: cdktf.stringToTerraform(struct!.certificate),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function lbaasNetworkTlsCertificatesToHclTerraform(struct?: LbaasNetworkTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasNetworkTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbaasNetworkTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasNetworkTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate = undefined;
      this._description = undefined;
      this._name = undefined;
      this._privateKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate = value.certificate;
      this._description = value.description;
      this._name = value.name;
      this._privateKey = value.privateKey;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
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

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }
}

export class LbaasNetworkTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : LbaasNetworkTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): LbaasNetworkTlsCertificatesOutputReference {
    return new LbaasNetworkTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network mgc_lbaas_network}
*/
export class LbaasNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mgc_lbaas_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbaasNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbaasNetwork to import
  * @param importFromId The id of the existing LbaasNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbaasNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mgc_lbaas_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/magalucloud/mgc/0.40.0/docs/resources/lbaas_network mgc_lbaas_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbaasNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: LbaasNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'mgc_lbaas_network',
      terraformGeneratorMetadata: {
        providerName: 'mgc',
        providerVersion: '0.40.0',
        providerVersionConstraint: '0.40.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acls.internalValue = config.acls;
    this._backends.internalValue = config.backends;
    this._description = config.description;
    this._healthChecks.internalValue = config.healthChecks;
    this._listeners.internalValue = config.listeners;
    this._name = config.name;
    this._publicIpId = config.publicIpId;
    this._subnetpoolId = config.subnetpoolId;
    this._tlsCertificates.internalValue = config.tlsCertificates;
    this._type = config.type;
    this._visibility = config.visibility;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acls - computed: false, optional: true, required: false
  private _acls = new LbaasNetworkAclsList(this, "acls", true);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: LbaasNetworkAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }

  // backends - computed: false, optional: false, required: true
  private _backends = new LbaasNetworkBackendsList(this, "backends", true);
  public get backends() {
    return this._backends;
  }
  public putBackends(value: LbaasNetworkBackends[] | cdktf.IResolvable) {
    this._backends.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends.internalValue;
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

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks = new LbaasNetworkHealthChecksList(this, "health_checks", true);
  public get healthChecks() {
    return this._healthChecks;
  }
  public putHealthChecks(value: LbaasNetworkHealthChecks[] | cdktf.IResolvable) {
    this._healthChecks.internalValue = value;
  }
  public resetHealthChecks() {
    this._healthChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listeners - computed: false, optional: false, required: true
  private _listeners = new LbaasNetworkListenersList(this, "listeners", true);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: LbaasNetworkListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
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

  // public_ip_id - computed: false, optional: true, required: false
  private _publicIpId?: string; 
  public get publicIpId() {
    return this.getStringAttribute('public_ip_id');
  }
  public set publicIpId(value: string) {
    this._publicIpId = value;
  }
  public resetPublicIpId() {
    this._publicIpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpIdInput() {
    return this._publicIpId;
  }

  // subnetpool_id - computed: true, optional: true, required: false
  private _subnetpoolId?: string; 
  public get subnetpoolId() {
    return this.getStringAttribute('subnetpool_id');
  }
  public set subnetpoolId(value: string) {
    this._subnetpoolId = value;
  }
  public resetSubnetpoolId() {
    this._subnetpoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetpoolIdInput() {
    return this._subnetpoolId;
  }

  // tls_certificates - computed: false, optional: true, required: false
  private _tlsCertificates = new LbaasNetworkTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: LbaasNetworkTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  public resetTlsCertificates() {
    this._tlsCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acls: cdktf.listMapper(lbaasNetworkAclsToTerraform, false)(this._acls.internalValue),
      backends: cdktf.listMapper(lbaasNetworkBackendsToTerraform, false)(this._backends.internalValue),
      description: cdktf.stringToTerraform(this._description),
      health_checks: cdktf.listMapper(lbaasNetworkHealthChecksToTerraform, false)(this._healthChecks.internalValue),
      listeners: cdktf.listMapper(lbaasNetworkListenersToTerraform, false)(this._listeners.internalValue),
      name: cdktf.stringToTerraform(this._name),
      public_ip_id: cdktf.stringToTerraform(this._publicIpId),
      subnetpool_id: cdktf.stringToTerraform(this._subnetpoolId),
      tls_certificates: cdktf.listMapper(lbaasNetworkTlsCertificatesToTerraform, false)(this._tlsCertificates.internalValue),
      type: cdktf.stringToTerraform(this._type),
      visibility: cdktf.stringToTerraform(this._visibility),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acls: {
        value: cdktf.listMapperHcl(lbaasNetworkAclsToHclTerraform, false)(this._acls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbaasNetworkAclsList",
      },
      backends: {
        value: cdktf.listMapperHcl(lbaasNetworkBackendsToHclTerraform, false)(this._backends.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbaasNetworkBackendsList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_checks: {
        value: cdktf.listMapperHcl(lbaasNetworkHealthChecksToHclTerraform, false)(this._healthChecks.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbaasNetworkHealthChecksList",
      },
      listeners: {
        value: cdktf.listMapperHcl(lbaasNetworkListenersToHclTerraform, false)(this._listeners.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbaasNetworkListenersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_ip_id: {
        value: cdktf.stringToHclTerraform(this._publicIpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetpool_id: {
        value: cdktf.stringToHclTerraform(this._subnetpoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_certificates: {
        value: cdktf.listMapperHcl(lbaasNetworkTlsCertificatesToHclTerraform, false)(this._tlsCertificates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasNetworkTlsCertificatesList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
