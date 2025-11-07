// https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KarbonClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#id KarbonCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#name KarbonCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#version KarbonCluster#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#wait_timeout_minutes KarbonCluster#wait_timeout_minutes}
  */
  readonly waitTimeoutMinutes?: number;
  /**
  * active_passive_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#active_passive_config KarbonCluster#active_passive_config}
  */
  readonly activePassiveConfig?: KarbonClusterActivePassiveConfig;
  /**
  * cni_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#cni_config KarbonCluster#cni_config}
  */
  readonly cniConfig: KarbonClusterCniConfig;
  /**
  * etcd_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#etcd_node_pool KarbonCluster#etcd_node_pool}
  */
  readonly etcdNodePool: KarbonClusterEtcdNodePool;
  /**
  * external_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#external_lb_config KarbonCluster#external_lb_config}
  */
  readonly externalLbConfig?: KarbonClusterExternalLbConfig;
  /**
  * master_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#master_node_pool KarbonCluster#master_node_pool}
  */
  readonly masterNodePool: KarbonClusterMasterNodePool;
  /**
  * private_registry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#private_registry KarbonCluster#private_registry}
  */
  readonly privateRegistry?: KarbonClusterPrivateRegistry[] | cdktf.IResolvable;
  /**
  * single_master_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#single_master_config KarbonCluster#single_master_config}
  */
  readonly singleMasterConfig?: KarbonClusterSingleMasterConfig;
  /**
  * storage_class_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#storage_class_config KarbonCluster#storage_class_config}
  */
  readonly storageClassConfig: KarbonClusterStorageClassConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#timeouts KarbonCluster#timeouts}
  */
  readonly timeouts?: KarbonClusterTimeouts;
  /**
  * worker_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#worker_node_pool KarbonCluster#worker_node_pool}
  */
  readonly workerNodePool: KarbonClusterWorkerNodePool;
}
export interface KarbonClusterActivePassiveConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#external_ipv4_address KarbonCluster#external_ipv4_address}
  */
  readonly externalIpv4Address: string;
}

export function karbonClusterActivePassiveConfigToTerraform(struct?: KarbonClusterActivePassiveConfigOutputReference | KarbonClusterActivePassiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ipv4_address: cdktf.stringToTerraform(struct!.externalIpv4Address),
  }
}


export function karbonClusterActivePassiveConfigToHclTerraform(struct?: KarbonClusterActivePassiveConfigOutputReference | KarbonClusterActivePassiveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.externalIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterActivePassiveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterActivePassiveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv4Address = this._externalIpv4Address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterActivePassiveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalIpv4Address = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalIpv4Address = value.externalIpv4Address;
    }
  }

  // external_ipv4_address - computed: false, optional: false, required: true
  private _externalIpv4Address?: string; 
  public get externalIpv4Address() {
    return this.getStringAttribute('external_ipv4_address');
  }
  public set externalIpv4Address(value: string) {
    this._externalIpv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv4AddressInput() {
    return this._externalIpv4Address;
  }
}
export interface KarbonClusterCniConfigCalicoConfigIpPoolConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#cidr KarbonCluster#cidr}
  */
  readonly cidr?: string;
}

export function karbonClusterCniConfigCalicoConfigIpPoolConfigToTerraform(struct?: KarbonClusterCniConfigCalicoConfigIpPoolConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}


export function karbonClusterCniConfigCalicoConfigIpPoolConfigToHclTerraform(struct?: KarbonClusterCniConfigCalicoConfigIpPoolConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterCniConfigCalicoConfigIpPoolConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterCniConfigCalicoConfigIpPoolConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterCniConfigCalicoConfigIpPoolConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }
}

export class KarbonClusterCniConfigCalicoConfigIpPoolConfigList extends cdktf.ComplexList {
  public internalValue? : KarbonClusterCniConfigCalicoConfigIpPoolConfig[] | cdktf.IResolvable

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
  public get(index: number): KarbonClusterCniConfigCalicoConfigIpPoolConfigOutputReference {
    return new KarbonClusterCniConfigCalicoConfigIpPoolConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterCniConfigCalicoConfig {
  /**
  * ip_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#ip_pool_config KarbonCluster#ip_pool_config}
  */
  readonly ipPoolConfig?: KarbonClusterCniConfigCalicoConfigIpPoolConfig[] | cdktf.IResolvable;
}

export function karbonClusterCniConfigCalicoConfigToTerraform(struct?: KarbonClusterCniConfigCalicoConfigOutputReference | KarbonClusterCniConfigCalicoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool_config: cdktf.listMapper(karbonClusterCniConfigCalicoConfigIpPoolConfigToTerraform, true)(struct!.ipPoolConfig),
  }
}


export function karbonClusterCniConfigCalicoConfigToHclTerraform(struct?: KarbonClusterCniConfigCalicoConfigOutputReference | KarbonClusterCniConfigCalicoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool_config: {
      value: cdktf.listMapperHcl(karbonClusterCniConfigCalicoConfigIpPoolConfigToHclTerraform, true)(struct!.ipPoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterCniConfigCalicoConfigIpPoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterCniConfigCalicoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterCniConfigCalicoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolConfig = this._ipPoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterCniConfigCalicoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipPoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipPoolConfig.internalValue = value.ipPoolConfig;
    }
  }

  // ip_pool_config - computed: false, optional: true, required: false
  private _ipPoolConfig = new KarbonClusterCniConfigCalicoConfigIpPoolConfigList(this, "ip_pool_config", false);
  public get ipPoolConfig() {
    return this._ipPoolConfig;
  }
  public putIpPoolConfig(value: KarbonClusterCniConfigCalicoConfigIpPoolConfig[] | cdktf.IResolvable) {
    this._ipPoolConfig.internalValue = value;
  }
  public resetIpPoolConfig() {
    this._ipPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolConfigInput() {
    return this._ipPoolConfig.internalValue;
  }
}
export interface KarbonClusterCniConfigFlannelConfig {
}

export function karbonClusterCniConfigFlannelConfigToTerraform(struct?: KarbonClusterCniConfigFlannelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function karbonClusterCniConfigFlannelConfigToHclTerraform(struct?: KarbonClusterCniConfigFlannelConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KarbonClusterCniConfigFlannelConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterCniConfigFlannelConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterCniConfigFlannelConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class KarbonClusterCniConfigFlannelConfigList extends cdktf.ComplexList {
  public internalValue? : KarbonClusterCniConfigFlannelConfig[] | cdktf.IResolvable

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
  public get(index: number): KarbonClusterCniConfigFlannelConfigOutputReference {
    return new KarbonClusterCniConfigFlannelConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterCniConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#node_cidr_mask_size KarbonCluster#node_cidr_mask_size}
  */
  readonly nodeCidrMaskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#pod_ipv4_cidr KarbonCluster#pod_ipv4_cidr}
  */
  readonly podIpv4Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#service_ipv4_cidr KarbonCluster#service_ipv4_cidr}
  */
  readonly serviceIpv4Cidr?: string;
  /**
  * calico_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#calico_config KarbonCluster#calico_config}
  */
  readonly calicoConfig?: KarbonClusterCniConfigCalicoConfig;
  /**
  * flannel_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#flannel_config KarbonCluster#flannel_config}
  */
  readonly flannelConfig?: KarbonClusterCniConfigFlannelConfig[] | cdktf.IResolvable;
}

export function karbonClusterCniConfigToTerraform(struct?: KarbonClusterCniConfigOutputReference | KarbonClusterCniConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_cidr_mask_size: cdktf.numberToTerraform(struct!.nodeCidrMaskSize),
    pod_ipv4_cidr: cdktf.stringToTerraform(struct!.podIpv4Cidr),
    service_ipv4_cidr: cdktf.stringToTerraform(struct!.serviceIpv4Cidr),
    calico_config: karbonClusterCniConfigCalicoConfigToTerraform(struct!.calicoConfig),
    flannel_config: cdktf.listMapper(karbonClusterCniConfigFlannelConfigToTerraform, true)(struct!.flannelConfig),
  }
}


export function karbonClusterCniConfigToHclTerraform(struct?: KarbonClusterCniConfigOutputReference | KarbonClusterCniConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_cidr_mask_size: {
      value: cdktf.numberToHclTerraform(struct!.nodeCidrMaskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.podIpv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ipv4_cidr: {
      value: cdktf.stringToHclTerraform(struct!.serviceIpv4Cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    calico_config: {
      value: karbonClusterCniConfigCalicoConfigToHclTerraform(struct!.calicoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterCniConfigCalicoConfigList",
    },
    flannel_config: {
      value: cdktf.listMapperHcl(karbonClusterCniConfigFlannelConfigToHclTerraform, true)(struct!.flannelConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterCniConfigFlannelConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterCniConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterCniConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCidrMaskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCidrMaskSize = this._nodeCidrMaskSize;
    }
    if (this._podIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4Cidr = this._podIpv4Cidr;
    }
    if (this._serviceIpv4Cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIpv4Cidr = this._serviceIpv4Cidr;
    }
    if (this._calicoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.calicoConfig = this._calicoConfig?.internalValue;
    }
    if (this._flannelConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flannelConfig = this._flannelConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterCniConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeCidrMaskSize = undefined;
      this._podIpv4Cidr = undefined;
      this._serviceIpv4Cidr = undefined;
      this._calicoConfig.internalValue = undefined;
      this._flannelConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeCidrMaskSize = value.nodeCidrMaskSize;
      this._podIpv4Cidr = value.podIpv4Cidr;
      this._serviceIpv4Cidr = value.serviceIpv4Cidr;
      this._calicoConfig.internalValue = value.calicoConfig;
      this._flannelConfig.internalValue = value.flannelConfig;
    }
  }

  // node_cidr_mask_size - computed: false, optional: true, required: false
  private _nodeCidrMaskSize?: number; 
  public get nodeCidrMaskSize() {
    return this.getNumberAttribute('node_cidr_mask_size');
  }
  public set nodeCidrMaskSize(value: number) {
    this._nodeCidrMaskSize = value;
  }
  public resetNodeCidrMaskSize() {
    this._nodeCidrMaskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCidrMaskSizeInput() {
    return this._nodeCidrMaskSize;
  }

  // pod_ipv4_cidr - computed: false, optional: true, required: false
  private _podIpv4Cidr?: string; 
  public get podIpv4Cidr() {
    return this.getStringAttribute('pod_ipv4_cidr');
  }
  public set podIpv4Cidr(value: string) {
    this._podIpv4Cidr = value;
  }
  public resetPodIpv4Cidr() {
    this._podIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4CidrInput() {
    return this._podIpv4Cidr;
  }

  // service_ipv4_cidr - computed: false, optional: true, required: false
  private _serviceIpv4Cidr?: string; 
  public get serviceIpv4Cidr() {
    return this.getStringAttribute('service_ipv4_cidr');
  }
  public set serviceIpv4Cidr(value: string) {
    this._serviceIpv4Cidr = value;
  }
  public resetServiceIpv4Cidr() {
    this._serviceIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpv4CidrInput() {
    return this._serviceIpv4Cidr;
  }

  // calico_config - computed: false, optional: true, required: false
  private _calicoConfig = new KarbonClusterCniConfigCalicoConfigOutputReference(this, "calico_config");
  public get calicoConfig() {
    return this._calicoConfig;
  }
  public putCalicoConfig(value: KarbonClusterCniConfigCalicoConfig) {
    this._calicoConfig.internalValue = value;
  }
  public resetCalicoConfig() {
    this._calicoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calicoConfigInput() {
    return this._calicoConfig.internalValue;
  }

  // flannel_config - computed: false, optional: true, required: false
  private _flannelConfig = new KarbonClusterCniConfigFlannelConfigList(this, "flannel_config", false);
  public get flannelConfig() {
    return this._flannelConfig;
  }
  public putFlannelConfig(value: KarbonClusterCniConfigFlannelConfig[] | cdktf.IResolvable) {
    this._flannelConfig.internalValue = value;
  }
  public resetFlannelConfig() {
    this._flannelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flannelConfigInput() {
    return this._flannelConfig.internalValue;
  }
}
export interface KarbonClusterEtcdNodePoolNodes {
}

export function karbonClusterEtcdNodePoolNodesToTerraform(struct?: KarbonClusterEtcdNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function karbonClusterEtcdNodePoolNodesToHclTerraform(struct?: KarbonClusterEtcdNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KarbonClusterEtcdNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterEtcdNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterEtcdNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class KarbonClusterEtcdNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): KarbonClusterEtcdNodePoolNodesOutputReference {
    return new KarbonClusterEtcdNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterEtcdNodePoolAhvConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#cpu KarbonCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#disk_mib KarbonCluster#disk_mib}
  */
  readonly diskMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#memory_mib KarbonCluster#memory_mib}
  */
  readonly memoryMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#network_uuid KarbonCluster#network_uuid}
  */
  readonly networkUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#prism_element_cluster_uuid KarbonCluster#prism_element_cluster_uuid}
  */
  readonly prismElementClusterUuid: string;
}

export function karbonClusterEtcdNodePoolAhvConfigToTerraform(struct?: KarbonClusterEtcdNodePoolAhvConfigOutputReference | KarbonClusterEtcdNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_mib: cdktf.numberToTerraform(struct!.diskMib),
    memory_mib: cdktf.numberToTerraform(struct!.memoryMib),
    network_uuid: cdktf.stringToTerraform(struct!.networkUuid),
    prism_element_cluster_uuid: cdktf.stringToTerraform(struct!.prismElementClusterUuid),
  }
}


export function karbonClusterEtcdNodePoolAhvConfigToHclTerraform(struct?: KarbonClusterEtcdNodePoolAhvConfigOutputReference | KarbonClusterEtcdNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_mib: {
      value: cdktf.numberToHclTerraform(struct!.diskMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mib: {
      value: cdktf.numberToHclTerraform(struct!.memoryMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.networkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.prismElementClusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterEtcdNodePoolAhvConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterEtcdNodePoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskMib = this._diskMib;
    }
    if (this._memoryMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib;
    }
    if (this._networkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUuid = this._networkUuid;
    }
    if (this._prismElementClusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterUuid = this._prismElementClusterUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterEtcdNodePoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskMib = undefined;
      this._memoryMib = undefined;
      this._networkUuid = undefined;
      this._prismElementClusterUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskMib = value.diskMib;
      this._memoryMib = value.memoryMib;
      this._networkUuid = value.networkUuid;
      this._prismElementClusterUuid = value.prismElementClusterUuid;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_mib - computed: false, optional: true, required: false
  private _diskMib?: number; 
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }
  public set diskMib(value: number) {
    this._diskMib = value;
  }
  public resetDiskMib() {
    this._diskMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMibInput() {
    return this._diskMib;
  }

  // memory_mib - computed: false, optional: true, required: false
  private _memoryMib?: number; 
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }
  public set memoryMib(value: number) {
    this._memoryMib = value;
  }
  public resetMemoryMib() {
    this._memoryMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib;
  }

  // network_uuid - computed: false, optional: false, required: true
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // prism_element_cluster_uuid - computed: false, optional: false, required: true
  private _prismElementClusterUuid?: string; 
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
  public set prismElementClusterUuid(value: string) {
    this._prismElementClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterUuidInput() {
    return this._prismElementClusterUuid;
  }
}
export interface KarbonClusterEtcdNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#name KarbonCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#node_os_version KarbonCluster#node_os_version}
  */
  readonly nodeOsVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#num_instances KarbonCluster#num_instances}
  */
  readonly numInstances: number;
  /**
  * ahv_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#ahv_config KarbonCluster#ahv_config}
  */
  readonly ahvConfig?: KarbonClusterEtcdNodePoolAhvConfig;
}

export function karbonClusterEtcdNodePoolToTerraform(struct?: KarbonClusterEtcdNodePoolOutputReference | KarbonClusterEtcdNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_os_version: cdktf.stringToTerraform(struct!.nodeOsVersion),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    ahv_config: karbonClusterEtcdNodePoolAhvConfigToTerraform(struct!.ahvConfig),
  }
}


export function karbonClusterEtcdNodePoolToHclTerraform(struct?: KarbonClusterEtcdNodePoolOutputReference | KarbonClusterEtcdNodePool): any {
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
    node_os_version: {
      value: cdktf.stringToHclTerraform(struct!.nodeOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_instances: {
      value: cdktf.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ahv_config: {
      value: karbonClusterEtcdNodePoolAhvConfigToHclTerraform(struct!.ahvConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterEtcdNodePoolAhvConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterEtcdNodePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterEtcdNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeOsVersion = this._nodeOsVersion;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._ahvConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ahvConfig = this._ahvConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterEtcdNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nodeOsVersion = undefined;
      this._numInstances = undefined;
      this._ahvConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nodeOsVersion = value.nodeOsVersion;
      this._numInstances = value.numInstances;
      this._ahvConfig.internalValue = value.ahvConfig;
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

  // node_os_version - computed: false, optional: false, required: true
  private _nodeOsVersion?: string; 
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }
  public set nodeOsVersion(value: string) {
    this._nodeOsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsVersionInput() {
    return this._nodeOsVersion;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new KarbonClusterEtcdNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: false, optional: false, required: true
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // ahv_config - computed: false, optional: true, required: false
  private _ahvConfig = new KarbonClusterEtcdNodePoolAhvConfigOutputReference(this, "ahv_config");
  public get ahvConfig() {
    return this._ahvConfig;
  }
  public putAhvConfig(value: KarbonClusterEtcdNodePoolAhvConfig) {
    this._ahvConfig.internalValue = value;
  }
  public resetAhvConfig() {
    this._ahvConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahvConfigInput() {
    return this._ahvConfig.internalValue;
  }
}
export interface KarbonClusterExternalLbConfigMasterNodesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#ipv4_address KarbonCluster#ipv4_address}
  */
  readonly ipv4Address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#node_pool_name KarbonCluster#node_pool_name}
  */
  readonly nodePoolName?: string;
}

export function karbonClusterExternalLbConfigMasterNodesConfigToTerraform(struct?: KarbonClusterExternalLbConfigMasterNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    node_pool_name: cdktf.stringToTerraform(struct!.nodePoolName),
  }
}


export function karbonClusterExternalLbConfigMasterNodesConfigToHclTerraform(struct?: KarbonClusterExternalLbConfigMasterNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterExternalLbConfigMasterNodesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterExternalLbConfigMasterNodesConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._nodePoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolName = this._nodePoolName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterExternalLbConfigMasterNodesConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._nodePoolName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._nodePoolName = value.nodePoolName;
    }
  }

  // ipv4_address - computed: false, optional: false, required: true
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // node_pool_name - computed: false, optional: true, required: false
  private _nodePoolName?: string; 
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }
  public set nodePoolName(value: string) {
    this._nodePoolName = value;
  }
  public resetNodePoolName() {
    this._nodePoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNameInput() {
    return this._nodePoolName;
  }
}

export class KarbonClusterExternalLbConfigMasterNodesConfigList extends cdktf.ComplexList {
  public internalValue? : KarbonClusterExternalLbConfigMasterNodesConfig[] | cdktf.IResolvable

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
  public get(index: number): KarbonClusterExternalLbConfigMasterNodesConfigOutputReference {
    return new KarbonClusterExternalLbConfigMasterNodesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterExternalLbConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#external_ipv4_address KarbonCluster#external_ipv4_address}
  */
  readonly externalIpv4Address: string;
  /**
  * master_nodes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#master_nodes_config KarbonCluster#master_nodes_config}
  */
  readonly masterNodesConfig: KarbonClusterExternalLbConfigMasterNodesConfig[] | cdktf.IResolvable;
}

export function karbonClusterExternalLbConfigToTerraform(struct?: KarbonClusterExternalLbConfigOutputReference | KarbonClusterExternalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ipv4_address: cdktf.stringToTerraform(struct!.externalIpv4Address),
    master_nodes_config: cdktf.listMapper(karbonClusterExternalLbConfigMasterNodesConfigToTerraform, true)(struct!.masterNodesConfig),
  }
}


export function karbonClusterExternalLbConfigToHclTerraform(struct?: KarbonClusterExternalLbConfigOutputReference | KarbonClusterExternalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.externalIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_nodes_config: {
      value: cdktf.listMapperHcl(karbonClusterExternalLbConfigMasterNodesConfigToHclTerraform, true)(struct!.masterNodesConfig),
      isBlock: true,
      type: "set",
      storageClassType: "KarbonClusterExternalLbConfigMasterNodesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterExternalLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterExternalLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIpv4Address = this._externalIpv4Address;
    }
    if (this._masterNodesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterNodesConfig = this._masterNodesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterExternalLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalIpv4Address = undefined;
      this._masterNodesConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalIpv4Address = value.externalIpv4Address;
      this._masterNodesConfig.internalValue = value.masterNodesConfig;
    }
  }

  // external_ipv4_address - computed: false, optional: false, required: true
  private _externalIpv4Address?: string; 
  public get externalIpv4Address() {
    return this.getStringAttribute('external_ipv4_address');
  }
  public set externalIpv4Address(value: string) {
    this._externalIpv4Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv4AddressInput() {
    return this._externalIpv4Address;
  }

  // master_nodes_config - computed: false, optional: false, required: true
  private _masterNodesConfig = new KarbonClusterExternalLbConfigMasterNodesConfigList(this, "master_nodes_config", true);
  public get masterNodesConfig() {
    return this._masterNodesConfig;
  }
  public putMasterNodesConfig(value: KarbonClusterExternalLbConfigMasterNodesConfig[] | cdktf.IResolvable) {
    this._masterNodesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodesConfigInput() {
    return this._masterNodesConfig.internalValue;
  }
}
export interface KarbonClusterMasterNodePoolNodes {
}

export function karbonClusterMasterNodePoolNodesToTerraform(struct?: KarbonClusterMasterNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function karbonClusterMasterNodePoolNodesToHclTerraform(struct?: KarbonClusterMasterNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KarbonClusterMasterNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterMasterNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterMasterNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class KarbonClusterMasterNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): KarbonClusterMasterNodePoolNodesOutputReference {
    return new KarbonClusterMasterNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterMasterNodePoolAhvConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#cpu KarbonCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#disk_mib KarbonCluster#disk_mib}
  */
  readonly diskMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#memory_mib KarbonCluster#memory_mib}
  */
  readonly memoryMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#network_uuid KarbonCluster#network_uuid}
  */
  readonly networkUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#prism_element_cluster_uuid KarbonCluster#prism_element_cluster_uuid}
  */
  readonly prismElementClusterUuid: string;
}

export function karbonClusterMasterNodePoolAhvConfigToTerraform(struct?: KarbonClusterMasterNodePoolAhvConfigOutputReference | KarbonClusterMasterNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_mib: cdktf.numberToTerraform(struct!.diskMib),
    memory_mib: cdktf.numberToTerraform(struct!.memoryMib),
    network_uuid: cdktf.stringToTerraform(struct!.networkUuid),
    prism_element_cluster_uuid: cdktf.stringToTerraform(struct!.prismElementClusterUuid),
  }
}


export function karbonClusterMasterNodePoolAhvConfigToHclTerraform(struct?: KarbonClusterMasterNodePoolAhvConfigOutputReference | KarbonClusterMasterNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_mib: {
      value: cdktf.numberToHclTerraform(struct!.diskMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mib: {
      value: cdktf.numberToHclTerraform(struct!.memoryMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.networkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.prismElementClusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterMasterNodePoolAhvConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterMasterNodePoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskMib = this._diskMib;
    }
    if (this._memoryMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib;
    }
    if (this._networkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUuid = this._networkUuid;
    }
    if (this._prismElementClusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterUuid = this._prismElementClusterUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterMasterNodePoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskMib = undefined;
      this._memoryMib = undefined;
      this._networkUuid = undefined;
      this._prismElementClusterUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskMib = value.diskMib;
      this._memoryMib = value.memoryMib;
      this._networkUuid = value.networkUuid;
      this._prismElementClusterUuid = value.prismElementClusterUuid;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_mib - computed: false, optional: true, required: false
  private _diskMib?: number; 
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }
  public set diskMib(value: number) {
    this._diskMib = value;
  }
  public resetDiskMib() {
    this._diskMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMibInput() {
    return this._diskMib;
  }

  // memory_mib - computed: false, optional: true, required: false
  private _memoryMib?: number; 
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }
  public set memoryMib(value: number) {
    this._memoryMib = value;
  }
  public resetMemoryMib() {
    this._memoryMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib;
  }

  // network_uuid - computed: false, optional: false, required: true
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // prism_element_cluster_uuid - computed: false, optional: false, required: true
  private _prismElementClusterUuid?: string; 
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
  public set prismElementClusterUuid(value: string) {
    this._prismElementClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterUuidInput() {
    return this._prismElementClusterUuid;
  }
}
export interface KarbonClusterMasterNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#name KarbonCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#node_os_version KarbonCluster#node_os_version}
  */
  readonly nodeOsVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#num_instances KarbonCluster#num_instances}
  */
  readonly numInstances: number;
  /**
  * ahv_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#ahv_config KarbonCluster#ahv_config}
  */
  readonly ahvConfig?: KarbonClusterMasterNodePoolAhvConfig;
}

export function karbonClusterMasterNodePoolToTerraform(struct?: KarbonClusterMasterNodePoolOutputReference | KarbonClusterMasterNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_os_version: cdktf.stringToTerraform(struct!.nodeOsVersion),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    ahv_config: karbonClusterMasterNodePoolAhvConfigToTerraform(struct!.ahvConfig),
  }
}


export function karbonClusterMasterNodePoolToHclTerraform(struct?: KarbonClusterMasterNodePoolOutputReference | KarbonClusterMasterNodePool): any {
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
    node_os_version: {
      value: cdktf.stringToHclTerraform(struct!.nodeOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_instances: {
      value: cdktf.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ahv_config: {
      value: karbonClusterMasterNodePoolAhvConfigToHclTerraform(struct!.ahvConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterMasterNodePoolAhvConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterMasterNodePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterMasterNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeOsVersion = this._nodeOsVersion;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._ahvConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ahvConfig = this._ahvConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterMasterNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nodeOsVersion = undefined;
      this._numInstances = undefined;
      this._ahvConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nodeOsVersion = value.nodeOsVersion;
      this._numInstances = value.numInstances;
      this._ahvConfig.internalValue = value.ahvConfig;
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

  // node_os_version - computed: false, optional: false, required: true
  private _nodeOsVersion?: string; 
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }
  public set nodeOsVersion(value: string) {
    this._nodeOsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsVersionInput() {
    return this._nodeOsVersion;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new KarbonClusterMasterNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: false, optional: false, required: true
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // ahv_config - computed: false, optional: true, required: false
  private _ahvConfig = new KarbonClusterMasterNodePoolAhvConfigOutputReference(this, "ahv_config");
  public get ahvConfig() {
    return this._ahvConfig;
  }
  public putAhvConfig(value: KarbonClusterMasterNodePoolAhvConfig) {
    this._ahvConfig.internalValue = value;
  }
  public resetAhvConfig() {
    this._ahvConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahvConfigInput() {
    return this._ahvConfig.internalValue;
  }
}
export interface KarbonClusterPrivateRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#registry_name KarbonCluster#registry_name}
  */
  readonly registryName: string;
}

export function karbonClusterPrivateRegistryToTerraform(struct?: KarbonClusterPrivateRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_name: cdktf.stringToTerraform(struct!.registryName),
  }
}


export function karbonClusterPrivateRegistryToHclTerraform(struct?: KarbonClusterPrivateRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registry_name: {
      value: cdktf.stringToHclTerraform(struct!.registryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterPrivateRegistryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterPrivateRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryName = this._registryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterPrivateRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._registryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._registryName = value.registryName;
    }
  }

  // registry_name - computed: false, optional: false, required: true
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName;
  }
}

export class KarbonClusterPrivateRegistryList extends cdktf.ComplexList {
  public internalValue? : KarbonClusterPrivateRegistry[] | cdktf.IResolvable

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
  public get(index: number): KarbonClusterPrivateRegistryOutputReference {
    return new KarbonClusterPrivateRegistryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterSingleMasterConfig {
}

export function karbonClusterSingleMasterConfigToTerraform(struct?: KarbonClusterSingleMasterConfigOutputReference | KarbonClusterSingleMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function karbonClusterSingleMasterConfigToHclTerraform(struct?: KarbonClusterSingleMasterConfigOutputReference | KarbonClusterSingleMasterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KarbonClusterSingleMasterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterSingleMasterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterSingleMasterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface KarbonClusterStorageClassConfigVolumesConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#file_system KarbonCluster#file_system}
  */
  readonly fileSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#flash_mode KarbonCluster#flash_mode}
  */
  readonly flashMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#password KarbonCluster#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#prism_element_cluster_uuid KarbonCluster#prism_element_cluster_uuid}
  */
  readonly prismElementClusterUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#storage_container KarbonCluster#storage_container}
  */
  readonly storageContainer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#username KarbonCluster#username}
  */
  readonly username: string;
}

export function karbonClusterStorageClassConfigVolumesConfigToTerraform(struct?: KarbonClusterStorageClassConfigVolumesConfigOutputReference | KarbonClusterStorageClassConfigVolumesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_system: cdktf.stringToTerraform(struct!.fileSystem),
    flash_mode: cdktf.booleanToTerraform(struct!.flashMode),
    password: cdktf.stringToTerraform(struct!.password),
    prism_element_cluster_uuid: cdktf.stringToTerraform(struct!.prismElementClusterUuid),
    storage_container: cdktf.stringToTerraform(struct!.storageContainer),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function karbonClusterStorageClassConfigVolumesConfigToHclTerraform(struct?: KarbonClusterStorageClassConfigVolumesConfigOutputReference | KarbonClusterStorageClassConfigVolumesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_system: {
      value: cdktf.stringToHclTerraform(struct!.fileSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flash_mode: {
      value: cdktf.booleanToHclTerraform(struct!.flashMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.prismElementClusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_container: {
      value: cdktf.stringToHclTerraform(struct!.storageContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterStorageClassConfigVolumesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterStorageClassConfigVolumesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem;
    }
    if (this._flashMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.flashMode = this._flashMode;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._prismElementClusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterUuid = this._prismElementClusterUuid;
    }
    if (this._storageContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageContainer = this._storageContainer;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterStorageClassConfigVolumesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileSystem = undefined;
      this._flashMode = undefined;
      this._password = undefined;
      this._prismElementClusterUuid = undefined;
      this._storageContainer = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileSystem = value.fileSystem;
      this._flashMode = value.flashMode;
      this._password = value.password;
      this._prismElementClusterUuid = value.prismElementClusterUuid;
      this._storageContainer = value.storageContainer;
      this._username = value.username;
    }
  }

  // file_system - computed: false, optional: true, required: false
  private _fileSystem?: string; 
  public get fileSystem() {
    return this.getStringAttribute('file_system');
  }
  public set fileSystem(value: string) {
    this._fileSystem = value;
  }
  public resetFileSystem() {
    this._fileSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem;
  }

  // flash_mode - computed: false, optional: true, required: false
  private _flashMode?: boolean | cdktf.IResolvable; 
  public get flashMode() {
    return this.getBooleanAttribute('flash_mode');
  }
  public set flashMode(value: boolean | cdktf.IResolvable) {
    this._flashMode = value;
  }
  public resetFlashMode() {
    this._flashMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flashModeInput() {
    return this._flashMode;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prism_element_cluster_uuid - computed: false, optional: false, required: true
  private _prismElementClusterUuid?: string; 
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
  public set prismElementClusterUuid(value: string) {
    this._prismElementClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterUuidInput() {
    return this._prismElementClusterUuid;
  }

  // storage_container - computed: false, optional: false, required: true
  private _storageContainer?: string; 
  public get storageContainer() {
    return this.getStringAttribute('storage_container');
  }
  public set storageContainer(value: string) {
    this._storageContainer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerInput() {
    return this._storageContainer;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface KarbonClusterStorageClassConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#name KarbonCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#reclaim_policy KarbonCluster#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * volumes_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#volumes_config KarbonCluster#volumes_config}
  */
  readonly volumesConfig: KarbonClusterStorageClassConfigVolumesConfig;
}

export function karbonClusterStorageClassConfigToTerraform(struct?: KarbonClusterStorageClassConfigOutputReference | KarbonClusterStorageClassConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    reclaim_policy: cdktf.stringToTerraform(struct!.reclaimPolicy),
    volumes_config: karbonClusterStorageClassConfigVolumesConfigToTerraform(struct!.volumesConfig),
  }
}


export function karbonClusterStorageClassConfigToHclTerraform(struct?: KarbonClusterStorageClassConfigOutputReference | KarbonClusterStorageClassConfig): any {
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
    reclaim_policy: {
      value: cdktf.stringToHclTerraform(struct!.reclaimPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes_config: {
      value: karbonClusterStorageClassConfigVolumesConfigToHclTerraform(struct!.volumesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterStorageClassConfigVolumesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterStorageClassConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterStorageClassConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._reclaimPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimPolicy = this._reclaimPolicy;
    }
    if (this._volumesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumesConfig = this._volumesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterStorageClassConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._reclaimPolicy = undefined;
      this._volumesConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._reclaimPolicy = value.reclaimPolicy;
      this._volumesConfig.internalValue = value.volumesConfig;
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

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // volumes_config - computed: false, optional: false, required: true
  private _volumesConfig = new KarbonClusterStorageClassConfigVolumesConfigOutputReference(this, "volumes_config");
  public get volumesConfig() {
    return this._volumesConfig;
  }
  public putVolumesConfig(value: KarbonClusterStorageClassConfigVolumesConfig) {
    this._volumesConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesConfigInput() {
    return this._volumesConfig.internalValue;
  }
}
export interface KarbonClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#create KarbonCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#delete KarbonCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#update KarbonCluster#update}
  */
  readonly update?: string;
}

export function karbonClusterTimeoutsToTerraform(struct?: KarbonClusterTimeouts | cdktf.IResolvable): any {
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


export function karbonClusterTimeoutsToHclTerraform(struct?: KarbonClusterTimeouts | cdktf.IResolvable): any {
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

export class KarbonClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KarbonClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KarbonClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface KarbonClusterWorkerNodePoolNodes {
}

export function karbonClusterWorkerNodePoolNodesToTerraform(struct?: KarbonClusterWorkerNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function karbonClusterWorkerNodePoolNodesToHclTerraform(struct?: KarbonClusterWorkerNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KarbonClusterWorkerNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KarbonClusterWorkerNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterWorkerNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
}

export class KarbonClusterWorkerNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): KarbonClusterWorkerNodePoolNodesOutputReference {
    return new KarbonClusterWorkerNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KarbonClusterWorkerNodePoolAhvConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#cpu KarbonCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#disk_mib KarbonCluster#disk_mib}
  */
  readonly diskMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#memory_mib KarbonCluster#memory_mib}
  */
  readonly memoryMib?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#network_uuid KarbonCluster#network_uuid}
  */
  readonly networkUuid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#prism_element_cluster_uuid KarbonCluster#prism_element_cluster_uuid}
  */
  readonly prismElementClusterUuid: string;
}

export function karbonClusterWorkerNodePoolAhvConfigToTerraform(struct?: KarbonClusterWorkerNodePoolAhvConfigOutputReference | KarbonClusterWorkerNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_mib: cdktf.numberToTerraform(struct!.diskMib),
    memory_mib: cdktf.numberToTerraform(struct!.memoryMib),
    network_uuid: cdktf.stringToTerraform(struct!.networkUuid),
    prism_element_cluster_uuid: cdktf.stringToTerraform(struct!.prismElementClusterUuid),
  }
}


export function karbonClusterWorkerNodePoolAhvConfigToHclTerraform(struct?: KarbonClusterWorkerNodePoolAhvConfigOutputReference | KarbonClusterWorkerNodePoolAhvConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_mib: {
      value: cdktf.numberToHclTerraform(struct!.diskMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_mib: {
      value: cdktf.numberToHclTerraform(struct!.memoryMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.networkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prism_element_cluster_uuid: {
      value: cdktf.stringToHclTerraform(struct!.prismElementClusterUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterWorkerNodePoolAhvConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterWorkerNodePoolAhvConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskMib = this._diskMib;
    }
    if (this._memoryMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMib = this._memoryMib;
    }
    if (this._networkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUuid = this._networkUuid;
    }
    if (this._prismElementClusterUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.prismElementClusterUuid = this._prismElementClusterUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterWorkerNodePoolAhvConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskMib = undefined;
      this._memoryMib = undefined;
      this._networkUuid = undefined;
      this._prismElementClusterUuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskMib = value.diskMib;
      this._memoryMib = value.memoryMib;
      this._networkUuid = value.networkUuid;
      this._prismElementClusterUuid = value.prismElementClusterUuid;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_mib - computed: false, optional: true, required: false
  private _diskMib?: number; 
  public get diskMib() {
    return this.getNumberAttribute('disk_mib');
  }
  public set diskMib(value: number) {
    this._diskMib = value;
  }
  public resetDiskMib() {
    this._diskMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskMibInput() {
    return this._diskMib;
  }

  // memory_mib - computed: false, optional: true, required: false
  private _memoryMib?: number; 
  public get memoryMib() {
    return this.getNumberAttribute('memory_mib');
  }
  public set memoryMib(value: number) {
    this._memoryMib = value;
  }
  public resetMemoryMib() {
    this._memoryMib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMibInput() {
    return this._memoryMib;
  }

  // network_uuid - computed: false, optional: false, required: true
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // prism_element_cluster_uuid - computed: false, optional: false, required: true
  private _prismElementClusterUuid?: string; 
  public get prismElementClusterUuid() {
    return this.getStringAttribute('prism_element_cluster_uuid');
  }
  public set prismElementClusterUuid(value: string) {
    this._prismElementClusterUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prismElementClusterUuidInput() {
    return this._prismElementClusterUuid;
  }
}
export interface KarbonClusterWorkerNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#name KarbonCluster#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#node_os_version KarbonCluster#node_os_version}
  */
  readonly nodeOsVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#num_instances KarbonCluster#num_instances}
  */
  readonly numInstances: number;
  /**
  * ahv_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#ahv_config KarbonCluster#ahv_config}
  */
  readonly ahvConfig?: KarbonClusterWorkerNodePoolAhvConfig;
}

export function karbonClusterWorkerNodePoolToTerraform(struct?: KarbonClusterWorkerNodePoolOutputReference | KarbonClusterWorkerNodePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    node_os_version: cdktf.stringToTerraform(struct!.nodeOsVersion),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    ahv_config: karbonClusterWorkerNodePoolAhvConfigToTerraform(struct!.ahvConfig),
  }
}


export function karbonClusterWorkerNodePoolToHclTerraform(struct?: KarbonClusterWorkerNodePoolOutputReference | KarbonClusterWorkerNodePool): any {
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
    node_os_version: {
      value: cdktf.stringToHclTerraform(struct!.nodeOsVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_instances: {
      value: cdktf.numberToHclTerraform(struct!.numInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ahv_config: {
      value: karbonClusterWorkerNodePoolAhvConfigToHclTerraform(struct!.ahvConfig),
      isBlock: true,
      type: "list",
      storageClassType: "KarbonClusterWorkerNodePoolAhvConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KarbonClusterWorkerNodePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KarbonClusterWorkerNodePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeOsVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeOsVersion = this._nodeOsVersion;
    }
    if (this._numInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInstances = this._numInstances;
    }
    if (this._ahvConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ahvConfig = this._ahvConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KarbonClusterWorkerNodePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._nodeOsVersion = undefined;
      this._numInstances = undefined;
      this._ahvConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._nodeOsVersion = value.nodeOsVersion;
      this._numInstances = value.numInstances;
      this._ahvConfig.internalValue = value.ahvConfig;
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

  // node_os_version - computed: false, optional: false, required: true
  private _nodeOsVersion?: string; 
  public get nodeOsVersion() {
    return this.getStringAttribute('node_os_version');
  }
  public set nodeOsVersion(value: string) {
    this._nodeOsVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeOsVersionInput() {
    return this._nodeOsVersion;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new KarbonClusterWorkerNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // num_instances - computed: false, optional: false, required: true
  private _numInstances?: number; 
  public get numInstances() {
    return this.getNumberAttribute('num_instances');
  }
  public set numInstances(value: number) {
    this._numInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstancesInput() {
    return this._numInstances;
  }

  // ahv_config - computed: false, optional: true, required: false
  private _ahvConfig = new KarbonClusterWorkerNodePoolAhvConfigOutputReference(this, "ahv_config");
  public get ahvConfig() {
    return this._ahvConfig;
  }
  public putAhvConfig(value: KarbonClusterWorkerNodePoolAhvConfig) {
    this._ahvConfig.internalValue = value;
  }
  public resetAhvConfig() {
    this._ahvConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ahvConfigInput() {
    return this._ahvConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster nutanix_karbon_cluster}
*/
export class KarbonCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_karbon_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KarbonCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KarbonCluster to import
  * @param importFromId The id of the existing KarbonCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KarbonCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_karbon_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.3/docs/resources/karbon_cluster nutanix_karbon_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KarbonClusterConfig
  */
  public constructor(scope: Construct, id: string, config: KarbonClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_karbon_cluster',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.3'
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
    this._name = config.name;
    this._version = config.version;
    this._waitTimeoutMinutes = config.waitTimeoutMinutes;
    this._activePassiveConfig.internalValue = config.activePassiveConfig;
    this._cniConfig.internalValue = config.cniConfig;
    this._etcdNodePool.internalValue = config.etcdNodePool;
    this._externalLbConfig.internalValue = config.externalLbConfig;
    this._masterNodePool.internalValue = config.masterNodePool;
    this._privateRegistry.internalValue = config.privateRegistry;
    this._singleMasterConfig.internalValue = config.singleMasterConfig;
    this._storageClassConfig.internalValue = config.storageClassConfig;
    this._timeouts.internalValue = config.timeouts;
    this._workerNodePool.internalValue = config.workerNodePool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
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

  // kubeapi_server_ipv4_address - computed: true, optional: false, required: false
  public get kubeapiServerIpv4Address() {
    return this.getStringAttribute('kubeapi_server_ipv4_address');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // wait_timeout_minutes - computed: false, optional: true, required: false
  private _waitTimeoutMinutes?: number; 
  public get waitTimeoutMinutes() {
    return this.getNumberAttribute('wait_timeout_minutes');
  }
  public set waitTimeoutMinutes(value: number) {
    this._waitTimeoutMinutes = value;
  }
  public resetWaitTimeoutMinutes() {
    this._waitTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutMinutesInput() {
    return this._waitTimeoutMinutes;
  }

  // active_passive_config - computed: false, optional: true, required: false
  private _activePassiveConfig = new KarbonClusterActivePassiveConfigOutputReference(this, "active_passive_config");
  public get activePassiveConfig() {
    return this._activePassiveConfig;
  }
  public putActivePassiveConfig(value: KarbonClusterActivePassiveConfig) {
    this._activePassiveConfig.internalValue = value;
  }
  public resetActivePassiveConfig() {
    this._activePassiveConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePassiveConfigInput() {
    return this._activePassiveConfig.internalValue;
  }

  // cni_config - computed: false, optional: false, required: true
  private _cniConfig = new KarbonClusterCniConfigOutputReference(this, "cni_config");
  public get cniConfig() {
    return this._cniConfig;
  }
  public putCniConfig(value: KarbonClusterCniConfig) {
    this._cniConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cniConfigInput() {
    return this._cniConfig.internalValue;
  }

  // etcd_node_pool - computed: false, optional: false, required: true
  private _etcdNodePool = new KarbonClusterEtcdNodePoolOutputReference(this, "etcd_node_pool");
  public get etcdNodePool() {
    return this._etcdNodePool;
  }
  public putEtcdNodePool(value: KarbonClusterEtcdNodePool) {
    this._etcdNodePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdNodePoolInput() {
    return this._etcdNodePool.internalValue;
  }

  // external_lb_config - computed: false, optional: true, required: false
  private _externalLbConfig = new KarbonClusterExternalLbConfigOutputReference(this, "external_lb_config");
  public get externalLbConfig() {
    return this._externalLbConfig;
  }
  public putExternalLbConfig(value: KarbonClusterExternalLbConfig) {
    this._externalLbConfig.internalValue = value;
  }
  public resetExternalLbConfig() {
    this._externalLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLbConfigInput() {
    return this._externalLbConfig.internalValue;
  }

  // master_node_pool - computed: false, optional: false, required: true
  private _masterNodePool = new KarbonClusterMasterNodePoolOutputReference(this, "master_node_pool");
  public get masterNodePool() {
    return this._masterNodePool;
  }
  public putMasterNodePool(value: KarbonClusterMasterNodePool) {
    this._masterNodePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterNodePoolInput() {
    return this._masterNodePool.internalValue;
  }

  // private_registry - computed: false, optional: true, required: false
  private _privateRegistry = new KarbonClusterPrivateRegistryList(this, "private_registry", true);
  public get privateRegistry() {
    return this._privateRegistry;
  }
  public putPrivateRegistry(value: KarbonClusterPrivateRegistry[] | cdktf.IResolvable) {
    this._privateRegistry.internalValue = value;
  }
  public resetPrivateRegistry() {
    this._privateRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryInput() {
    return this._privateRegistry.internalValue;
  }

  // single_master_config - computed: false, optional: true, required: false
  private _singleMasterConfig = new KarbonClusterSingleMasterConfigOutputReference(this, "single_master_config");
  public get singleMasterConfig() {
    return this._singleMasterConfig;
  }
  public putSingleMasterConfig(value: KarbonClusterSingleMasterConfig) {
    this._singleMasterConfig.internalValue = value;
  }
  public resetSingleMasterConfig() {
    this._singleMasterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleMasterConfigInput() {
    return this._singleMasterConfig.internalValue;
  }

  // storage_class_config - computed: false, optional: false, required: true
  private _storageClassConfig = new KarbonClusterStorageClassConfigOutputReference(this, "storage_class_config");
  public get storageClassConfig() {
    return this._storageClassConfig;
  }
  public putStorageClassConfig(value: KarbonClusterStorageClassConfig) {
    this._storageClassConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassConfigInput() {
    return this._storageClassConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KarbonClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KarbonClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_node_pool - computed: false, optional: false, required: true
  private _workerNodePool = new KarbonClusterWorkerNodePoolOutputReference(this, "worker_node_pool");
  public get workerNodePool() {
    return this._workerNodePool;
  }
  public putWorkerNodePool(value: KarbonClusterWorkerNodePool) {
    this._workerNodePool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerNodePoolInput() {
    return this._workerNodePool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      wait_timeout_minutes: cdktf.numberToTerraform(this._waitTimeoutMinutes),
      active_passive_config: karbonClusterActivePassiveConfigToTerraform(this._activePassiveConfig.internalValue),
      cni_config: karbonClusterCniConfigToTerraform(this._cniConfig.internalValue),
      etcd_node_pool: karbonClusterEtcdNodePoolToTerraform(this._etcdNodePool.internalValue),
      external_lb_config: karbonClusterExternalLbConfigToTerraform(this._externalLbConfig.internalValue),
      master_node_pool: karbonClusterMasterNodePoolToTerraform(this._masterNodePool.internalValue),
      private_registry: cdktf.listMapper(karbonClusterPrivateRegistryToTerraform, true)(this._privateRegistry.internalValue),
      single_master_config: karbonClusterSingleMasterConfigToTerraform(this._singleMasterConfig.internalValue),
      storage_class_config: karbonClusterStorageClassConfigToTerraform(this._storageClassConfig.internalValue),
      timeouts: karbonClusterTimeoutsToTerraform(this._timeouts.internalValue),
      worker_node_pool: karbonClusterWorkerNodePoolToTerraform(this._workerNodePool.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_timeout_minutes: {
        value: cdktf.numberToHclTerraform(this._waitTimeoutMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_passive_config: {
        value: karbonClusterActivePassiveConfigToHclTerraform(this._activePassiveConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterActivePassiveConfigList",
      },
      cni_config: {
        value: karbonClusterCniConfigToHclTerraform(this._cniConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterCniConfigList",
      },
      etcd_node_pool: {
        value: karbonClusterEtcdNodePoolToHclTerraform(this._etcdNodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterEtcdNodePoolList",
      },
      external_lb_config: {
        value: karbonClusterExternalLbConfigToHclTerraform(this._externalLbConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterExternalLbConfigList",
      },
      master_node_pool: {
        value: karbonClusterMasterNodePoolToHclTerraform(this._masterNodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterMasterNodePoolList",
      },
      private_registry: {
        value: cdktf.listMapperHcl(karbonClusterPrivateRegistryToHclTerraform, true)(this._privateRegistry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KarbonClusterPrivateRegistryList",
      },
      single_master_config: {
        value: karbonClusterSingleMasterConfigToHclTerraform(this._singleMasterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterSingleMasterConfigList",
      },
      storage_class_config: {
        value: karbonClusterStorageClassConfigToHclTerraform(this._storageClassConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "KarbonClusterStorageClassConfigList",
      },
      timeouts: {
        value: karbonClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KarbonClusterTimeouts",
      },
      worker_node_pool: {
        value: karbonClusterWorkerNodePoolToHclTerraform(this._workerNodePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KarbonClusterWorkerNodePoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
