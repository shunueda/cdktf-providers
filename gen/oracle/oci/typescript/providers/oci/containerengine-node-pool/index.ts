// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerengineNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}
  */
  readonly nodeImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}
  */
  readonly nodeImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}
  */
  readonly nodeMetadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}
  */
  readonly nodeShape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}
  */
  readonly quantityPerSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}
  */
  readonly subnetIds?: string[];
  /**
  * initial_node_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#initial_node_labels ContainerengineNodePool#initial_node_labels}
  */
  readonly initialNodeLabels?: ContainerengineNodePoolInitialNodeLabels[] | cdktf.IResolvable;
  /**
  * node_config_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_config_details ContainerengineNodePool#node_config_details}
  */
  readonly nodeConfigDetails?: ContainerengineNodePoolNodeConfigDetails;
  /**
  * node_eviction_node_pool_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_eviction_node_pool_settings ContainerengineNodePool#node_eviction_node_pool_settings}
  */
  readonly nodeEvictionNodePoolSettings?: ContainerengineNodePoolNodeEvictionNodePoolSettings;
  /**
  * node_pool_cycling_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_pool_cycling_details ContainerengineNodePool#node_pool_cycling_details}
  */
  readonly nodePoolCyclingDetails?: ContainerengineNodePoolNodePoolCyclingDetails;
  /**
  * node_shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_shape_config ContainerengineNodePool#node_shape_config}
  */
  readonly nodeShapeConfig?: ContainerengineNodePoolNodeShapeConfig;
  /**
  * node_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_source_details ContainerengineNodePool#node_source_details}
  */
  readonly nodeSourceDetails?: ContainerengineNodePoolNodeSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#timeouts ContainerengineNodePool#timeouts}
  */
  readonly timeouts?: ContainerengineNodePoolTimeouts;
}
export interface ContainerengineNodePoolNodeSource {
}

export function containerengineNodePoolNodeSourceToTerraform(struct?: ContainerengineNodePoolNodeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerengineNodePoolNodeSourceToHclTerraform(struct?: ContainerengineNodePoolNodeSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerengineNodePoolNodeSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineNodePoolNodeSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class ContainerengineNodePoolNodeSourceList extends cdktf.ComplexList {

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
  public get(index: number): ContainerengineNodePoolNodeSourceOutputReference {
    return new ContainerengineNodePoolNodeSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineNodePoolNodesError {
}

export function containerengineNodePoolNodesErrorToTerraform(struct?: ContainerengineNodePoolNodesError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerengineNodePoolNodesErrorToHclTerraform(struct?: ContainerengineNodePoolNodesError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerengineNodePoolNodesErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineNodePoolNodesError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodesError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ContainerengineNodePoolNodesErrorList extends cdktf.ComplexList {

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
  public get(index: number): ContainerengineNodePoolNodesErrorOutputReference {
    return new ContainerengineNodePoolNodesErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineNodePoolNodes {
}

export function containerengineNodePoolNodesToTerraform(struct?: ContainerengineNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerengineNodePoolNodesToHclTerraform(struct?: ContainerengineNodePoolNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerengineNodePoolNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineNodePoolNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // error - computed: true, optional: false, required: false
  private _error = new ContainerengineNodePoolNodesErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_pool_id - computed: true, optional: false, required: false
  public get nodePoolId() {
    return this.getStringAttribute('node_pool_id');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class ContainerengineNodePoolNodesList extends cdktf.ComplexList {

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
  public get(index: number): ContainerengineNodePoolNodesOutputReference {
    return new ContainerengineNodePoolNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineNodePoolInitialNodeLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}
  */
  readonly value?: string;
}

export function containerengineNodePoolInitialNodeLabelsToTerraform(struct?: ContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerengineNodePoolInitialNodeLabelsToHclTerraform(struct?: ContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolInitialNodeLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolInitialNodeLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerengineNodePoolInitialNodeLabelsList extends cdktf.ComplexList {
  public internalValue? : ContainerengineNodePoolInitialNodeLabels[] | cdktf.IResolvable

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
  public get(index: number): ContainerengineNodePoolInitialNodeLabelsOutputReference {
    return new ContainerengineNodePoolInitialNodeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}
  */
  readonly cniType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}
  */
  readonly podNsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}
  */
  readonly podSubnetIds?: string[];
}

export function containerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsToTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference | ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cni_type: cdktf.stringToTerraform(struct!.cniType),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    pod_nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podNsgIds),
    pod_subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podSubnetIds),
  }
}


export function containerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsToHclTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference | ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cni_type: {
      value: cdktf.stringToHclTerraform(struct!.cniType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podNsgIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podSubnetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cniType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cniType = this._cniType;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._podNsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.podNsgIds = this._podNsgIds;
    }
    if (this._podSubnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSubnetIds = this._podSubnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cniType = undefined;
      this._maxPodsPerNode = undefined;
      this._podNsgIds = undefined;
      this._podSubnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cniType = value.cniType;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._podNsgIds = value.podNsgIds;
      this._podSubnetIds = value.podSubnetIds;
    }
  }

  // cni_type - computed: false, optional: false, required: true
  private _cniType?: string; 
  public get cniType() {
    return this.getStringAttribute('cni_type');
  }
  public set cniType(value: string) {
    this._cniType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cniTypeInput() {
    return this._cniType;
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }

  // pod_nsg_ids - computed: true, optional: true, required: false
  private _podNsgIds?: string[]; 
  public get podNsgIds() {
    return this.getListAttribute('pod_nsg_ids');
  }
  public set podNsgIds(value: string[]) {
    this._podNsgIds = value;
  }
  public resetPodNsgIds() {
    this._podNsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNsgIdsInput() {
    return this._podNsgIds;
  }

  // pod_subnet_ids - computed: true, optional: true, required: false
  private _podSubnetIds?: string[]; 
  public get podSubnetIds() {
    return this.getListAttribute('pod_subnet_ids');
  }
  public set podSubnetIds(value: string[]) {
    this._podSubnetIds = value;
  }
  public resetPodSubnetIds() {
    this._podSubnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSubnetIdsInput() {
    return this._podSubnetIds;
  }
}
export interface ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}
  */
  readonly isPreserveBootVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}
  */
  readonly type: string;
}

export function containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionToTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference | ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_preserve_boot_volume: cdktf.booleanToTerraform(struct!.isPreserveBootVolume),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionToHclTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference | ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_preserve_boot_volume: {
      value: cdktf.booleanToHclTerraform(struct!.isPreserveBootVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPreserveBootVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPreserveBootVolume = this._isPreserveBootVolume;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPreserveBootVolume = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPreserveBootVolume = value.isPreserveBootVolume;
      this._type = value.type;
    }
  }

  // is_preserve_boot_volume - computed: true, optional: true, required: false
  private _isPreserveBootVolume?: boolean | cdktf.IResolvable; 
  public get isPreserveBootVolume() {
    return this.getBooleanAttribute('is_preserve_boot_volume');
  }
  public set isPreserveBootVolume(value: boolean | cdktf.IResolvable) {
    this._isPreserveBootVolume = value;
  }
  public resetIsPreserveBootVolume() {
    this._isPreserveBootVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPreserveBootVolumeInput() {
    return this._isPreserveBootVolume;
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
}
export interface ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig {
  /**
  * preemption_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#preemption_action ContainerengineNodePool#preemption_action}
  */
  readonly preemptionAction: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction;
}

export function containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigToTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference | ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemption_action: containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionToTerraform(struct!.preemptionAction),
  }
}


export function containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigToHclTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference | ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemption_action: {
      value: containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionToHclTerraform(struct!.preemptionAction),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptionAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptionAction = this._preemptionAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptionAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptionAction.internalValue = value.preemptionAction;
    }
  }

  // preemption_action - computed: false, optional: false, required: true
  private _preemptionAction = new ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(this, "preemption_action");
  public get preemptionAction() {
    return this._preemptionAction;
  }
  public putPreemptionAction(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction) {
    this._preemptionAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionActionInput() {
    return this._preemptionAction.internalValue;
  }
}
export interface ContainerengineNodePoolNodeConfigDetailsPlacementConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}
  */
  readonly capacityReservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}
  */
  readonly faultDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * preemptible_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#preemptible_node_config ContainerengineNodePool#preemptible_node_config}
  */
  readonly preemptibleNodeConfig?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig;
}

export function containerengineNodePoolNodeConfigDetailsPlacementConfigsToTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    capacity_reservation_id: cdktf.stringToTerraform(struct!.capacityReservationId),
    fault_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.faultDomains),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    preemptible_node_config: containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigToTerraform(struct!.preemptibleNodeConfig),
  }
}


export function containerengineNodePoolNodeConfigDetailsPlacementConfigsToHclTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capacity_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.capacityReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fault_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.faultDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preemptible_node_config: {
      value: containerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigToHclTerraform(struct!.preemptibleNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._capacityReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityReservationId = this._capacityReservationId;
    }
    if (this._faultDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomains = this._faultDomains;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._preemptibleNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptibleNodeConfig = this._preemptibleNodeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityDomain = undefined;
      this._capacityReservationId = undefined;
      this._faultDomains = undefined;
      this._subnetId = undefined;
      this._preemptibleNodeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityDomain = value.availabilityDomain;
      this._capacityReservationId = value.capacityReservationId;
      this._faultDomains = value.faultDomains;
      this._subnetId = value.subnetId;
      this._preemptibleNodeConfig.internalValue = value.preemptibleNodeConfig;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // capacity_reservation_id - computed: true, optional: true, required: false
  private _capacityReservationId?: string; 
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }
  public set capacityReservationId(value: string) {
    this._capacityReservationId = value;
  }
  public resetCapacityReservationId() {
    this._capacityReservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityReservationIdInput() {
    return this._capacityReservationId;
  }

  // fault_domains - computed: true, optional: true, required: false
  private _faultDomains?: string[]; 
  public get faultDomains() {
    return this.getListAttribute('fault_domains');
  }
  public set faultDomains(value: string[]) {
    this._faultDomains = value;
  }
  public resetFaultDomains() {
    this._faultDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainsInput() {
    return this._faultDomains;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // preemptible_node_config - computed: false, optional: true, required: false
  private _preemptibleNodeConfig = new ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(this, "preemptible_node_config");
  public get preemptibleNodeConfig() {
    return this._preemptibleNodeConfig;
  }
  public putPreemptibleNodeConfig(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig) {
    this._preemptibleNodeConfig.internalValue = value;
  }
  public resetPreemptibleNodeConfig() {
    this._preemptibleNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleNodeConfigInput() {
    return this._preemptibleNodeConfig.internalValue;
  }
}

export class ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList extends cdktf.ComplexList {
  public internalValue? : ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[] | cdktf.IResolvable

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
  public get(index: number): ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference {
    return new ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerengineNodePoolNodeConfigDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}
  */
  readonly isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}
  */
  readonly size: number;
  /**
  * node_pool_pod_network_option_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#node_pool_pod_network_option_details ContainerengineNodePool#node_pool_pod_network_option_details}
  */
  readonly nodePoolPodNetworkOptionDetails?: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails;
  /**
  * placement_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#placement_configs ContainerengineNodePool#placement_configs}
  */
  readonly placementConfigs: ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[] | cdktf.IResolvable;
}

export function containerengineNodePoolNodeConfigDetailsToTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsOutputReference | ContainerengineNodePoolNodeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.definedTags),
    freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.freeformTags),
    is_pv_encryption_in_transit_enabled: cdktf.booleanToTerraform(struct!.isPvEncryptionInTransitEnabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    size: cdktf.numberToTerraform(struct!.size),
    node_pool_pod_network_option_details: containerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsToTerraform(struct!.nodePoolPodNetworkOptionDetails),
    placement_configs: cdktf.listMapper(containerengineNodePoolNodeConfigDetailsPlacementConfigsToTerraform, true)(struct!.placementConfigs),
  }
}


export function containerengineNodePoolNodeConfigDetailsToHclTerraform(struct?: ContainerengineNodePoolNodeConfigDetailsOutputReference | ContainerengineNodePoolNodeConfigDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.definedTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    freeform_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.freeformTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    is_pv_encryption_in_transit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPvEncryptionInTransitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_pool_pod_network_option_details: {
      value: containerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsToHclTerraform(struct!.nodePoolPodNetworkOptionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsList",
    },
    placement_configs: {
      value: cdktf.listMapperHcl(containerengineNodePoolNodeConfigDetailsPlacementConfigsToHclTerraform, true)(struct!.placementConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeConfigDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeConfigDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags;
    }
    if (this._freeformTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags;
    }
    if (this._isPvEncryptionInTransitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPvEncryptionInTransitEnabled = this._isPvEncryptionInTransitEnabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._nodePoolPodNetworkOptionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolPodNetworkOptionDetails = this._nodePoolPodNetworkOptionDetails?.internalValue;
    }
    if (this._placementConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConfigs = this._placementConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeConfigDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags = undefined;
      this._freeformTags = undefined;
      this._isPvEncryptionInTransitEnabled = undefined;
      this._kmsKeyId = undefined;
      this._nsgIds = undefined;
      this._size = undefined;
      this._nodePoolPodNetworkOptionDetails.internalValue = undefined;
      this._placementConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags = value.definedTags;
      this._freeformTags = value.freeformTags;
      this._isPvEncryptionInTransitEnabled = value.isPvEncryptionInTransitEnabled;
      this._kmsKeyId = value.kmsKeyId;
      this._nsgIds = value.nsgIds;
      this._size = value.size;
      this._nodePoolPodNetworkOptionDetails.internalValue = value.nodePoolPodNetworkOptionDetails;
      this._placementConfigs.internalValue = value.placementConfigs;
    }
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: true, required: false
  private _isPvEncryptionInTransitEnabled?: boolean | cdktf.IResolvable; 
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }
  public set isPvEncryptionInTransitEnabled(value: boolean | cdktf.IResolvable) {
    this._isPvEncryptionInTransitEnabled = value;
  }
  public resetIsPvEncryptionInTransitEnabled() {
    this._isPvEncryptionInTransitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPvEncryptionInTransitEnabledInput() {
    return this._isPvEncryptionInTransitEnabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // node_pool_pod_network_option_details - computed: false, optional: true, required: false
  private _nodePoolPodNetworkOptionDetails = new ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(this, "node_pool_pod_network_option_details");
  public get nodePoolPodNetworkOptionDetails() {
    return this._nodePoolPodNetworkOptionDetails;
  }
  public putNodePoolPodNetworkOptionDetails(value: ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails) {
    this._nodePoolPodNetworkOptionDetails.internalValue = value;
  }
  public resetNodePoolPodNetworkOptionDetails() {
    this._nodePoolPodNetworkOptionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolPodNetworkOptionDetailsInput() {
    return this._nodePoolPodNetworkOptionDetails.internalValue;
  }

  // placement_configs - computed: false, optional: false, required: true
  private _placementConfigs = new ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList(this, "placement_configs", true);
  public get placementConfigs() {
    return this._placementConfigs;
  }
  public putPlacementConfigs(value: ContainerengineNodePoolNodeConfigDetailsPlacementConfigs[] | cdktf.IResolvable) {
    this._placementConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConfigsInput() {
    return this._placementConfigs.internalValue;
  }
}
export interface ContainerengineNodePoolNodeEvictionNodePoolSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}
  */
  readonly evictionGraceDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#is_force_action_after_grace_duration ContainerengineNodePool#is_force_action_after_grace_duration}
  */
  readonly isForceActionAfterGraceDuration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}
  */
  readonly isForceDeleteAfterGraceDuration?: boolean | cdktf.IResolvable;
}

export function containerengineNodePoolNodeEvictionNodePoolSettingsToTerraform(struct?: ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference | ContainerengineNodePoolNodeEvictionNodePoolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_grace_duration: cdktf.stringToTerraform(struct!.evictionGraceDuration),
    is_force_action_after_grace_duration: cdktf.booleanToTerraform(struct!.isForceActionAfterGraceDuration),
    is_force_delete_after_grace_duration: cdktf.booleanToTerraform(struct!.isForceDeleteAfterGraceDuration),
  }
}


export function containerengineNodePoolNodeEvictionNodePoolSettingsToHclTerraform(struct?: ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference | ContainerengineNodePoolNodeEvictionNodePoolSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_grace_duration: {
      value: cdktf.stringToHclTerraform(struct!.evictionGraceDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_force_action_after_grace_duration: {
      value: cdktf.booleanToHclTerraform(struct!.isForceActionAfterGraceDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_force_delete_after_grace_duration: {
      value: cdktf.booleanToHclTerraform(struct!.isForceDeleteAfterGraceDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeEvictionNodePoolSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionGraceDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionGraceDuration = this._evictionGraceDuration;
    }
    if (this._isForceActionAfterGraceDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceActionAfterGraceDuration = this._isForceActionAfterGraceDuration;
    }
    if (this._isForceDeleteAfterGraceDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.isForceDeleteAfterGraceDuration = this._isForceDeleteAfterGraceDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeEvictionNodePoolSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evictionGraceDuration = undefined;
      this._isForceActionAfterGraceDuration = undefined;
      this._isForceDeleteAfterGraceDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evictionGraceDuration = value.evictionGraceDuration;
      this._isForceActionAfterGraceDuration = value.isForceActionAfterGraceDuration;
      this._isForceDeleteAfterGraceDuration = value.isForceDeleteAfterGraceDuration;
    }
  }

  // eviction_grace_duration - computed: true, optional: true, required: false
  private _evictionGraceDuration?: string; 
  public get evictionGraceDuration() {
    return this.getStringAttribute('eviction_grace_duration');
  }
  public set evictionGraceDuration(value: string) {
    this._evictionGraceDuration = value;
  }
  public resetEvictionGraceDuration() {
    this._evictionGraceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionGraceDurationInput() {
    return this._evictionGraceDuration;
  }

  // is_force_action_after_grace_duration - computed: true, optional: true, required: false
  private _isForceActionAfterGraceDuration?: boolean | cdktf.IResolvable; 
  public get isForceActionAfterGraceDuration() {
    return this.getBooleanAttribute('is_force_action_after_grace_duration');
  }
  public set isForceActionAfterGraceDuration(value: boolean | cdktf.IResolvable) {
    this._isForceActionAfterGraceDuration = value;
  }
  public resetIsForceActionAfterGraceDuration() {
    this._isForceActionAfterGraceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceActionAfterGraceDurationInput() {
    return this._isForceActionAfterGraceDuration;
  }

  // is_force_delete_after_grace_duration - computed: true, optional: true, required: false
  private _isForceDeleteAfterGraceDuration?: boolean | cdktf.IResolvable; 
  public get isForceDeleteAfterGraceDuration() {
    return this.getBooleanAttribute('is_force_delete_after_grace_duration');
  }
  public set isForceDeleteAfterGraceDuration(value: boolean | cdktf.IResolvable) {
    this._isForceDeleteAfterGraceDuration = value;
  }
  public resetIsForceDeleteAfterGraceDuration() {
    this._isForceDeleteAfterGraceDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isForceDeleteAfterGraceDurationInput() {
    return this._isForceDeleteAfterGraceDuration;
  }
}
export interface ContainerengineNodePoolNodePoolCyclingDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#cycle_modes ContainerengineNodePool#cycle_modes}
  */
  readonly cycleModes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}
  */
  readonly isNodeCyclingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}
  */
  readonly maximumSurge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}
  */
  readonly maximumUnavailable?: string;
}

export function containerengineNodePoolNodePoolCyclingDetailsToTerraform(struct?: ContainerengineNodePoolNodePoolCyclingDetailsOutputReference | ContainerengineNodePoolNodePoolCyclingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cycle_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cycleModes),
    is_node_cycling_enabled: cdktf.booleanToTerraform(struct!.isNodeCyclingEnabled),
    maximum_surge: cdktf.stringToTerraform(struct!.maximumSurge),
    maximum_unavailable: cdktf.stringToTerraform(struct!.maximumUnavailable),
  }
}


export function containerengineNodePoolNodePoolCyclingDetailsToHclTerraform(struct?: ContainerengineNodePoolNodePoolCyclingDetailsOutputReference | ContainerengineNodePoolNodePoolCyclingDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cycle_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cycleModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_node_cycling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isNodeCyclingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    maximum_surge: {
      value: cdktf.stringToHclTerraform(struct!.maximumSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maximumUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodePoolCyclingDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodePoolCyclingDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cycleModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleModes = this._cycleModes;
    }
    if (this._isNodeCyclingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNodeCyclingEnabled = this._isNodeCyclingEnabled;
    }
    if (this._maximumSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumSurge = this._maximumSurge;
    }
    if (this._maximumUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumUnavailable = this._maximumUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodePoolCyclingDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cycleModes = undefined;
      this._isNodeCyclingEnabled = undefined;
      this._maximumSurge = undefined;
      this._maximumUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cycleModes = value.cycleModes;
      this._isNodeCyclingEnabled = value.isNodeCyclingEnabled;
      this._maximumSurge = value.maximumSurge;
      this._maximumUnavailable = value.maximumUnavailable;
    }
  }

  // cycle_modes - computed: true, optional: true, required: false
  private _cycleModes?: string[]; 
  public get cycleModes() {
    return this.getListAttribute('cycle_modes');
  }
  public set cycleModes(value: string[]) {
    this._cycleModes = value;
  }
  public resetCycleModes() {
    this._cycleModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleModesInput() {
    return this._cycleModes;
  }

  // is_node_cycling_enabled - computed: true, optional: true, required: false
  private _isNodeCyclingEnabled?: boolean | cdktf.IResolvable; 
  public get isNodeCyclingEnabled() {
    return this.getBooleanAttribute('is_node_cycling_enabled');
  }
  public set isNodeCyclingEnabled(value: boolean | cdktf.IResolvable) {
    this._isNodeCyclingEnabled = value;
  }
  public resetIsNodeCyclingEnabled() {
    this._isNodeCyclingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNodeCyclingEnabledInput() {
    return this._isNodeCyclingEnabled;
  }

  // maximum_surge - computed: true, optional: true, required: false
  private _maximumSurge?: string; 
  public get maximumSurge() {
    return this.getStringAttribute('maximum_surge');
  }
  public set maximumSurge(value: string) {
    this._maximumSurge = value;
  }
  public resetMaximumSurge() {
    this._maximumSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSurgeInput() {
    return this._maximumSurge;
  }

  // maximum_unavailable - computed: true, optional: true, required: false
  private _maximumUnavailable?: string; 
  public get maximumUnavailable() {
    return this.getStringAttribute('maximum_unavailable');
  }
  public set maximumUnavailable(value: string) {
    this._maximumUnavailable = value;
  }
  public resetMaximumUnavailable() {
    this._maximumUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumUnavailableInput() {
    return this._maximumUnavailable;
  }
}
export interface ContainerengineNodePoolNodeShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}
  */
  readonly memoryInGbs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}
  */
  readonly ocpus?: number;
}

export function containerengineNodePoolNodeShapeConfigToTerraform(struct?: ContainerengineNodePoolNodeShapeConfigOutputReference | ContainerengineNodePoolNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
  }
}


export function containerengineNodePoolNodeShapeConfigToHclTerraform(struct?: ContainerengineNodePoolNodeShapeConfigOutputReference | ContainerengineNodePoolNodeShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface ContainerengineNodePoolNodeSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}
  */
  readonly bootVolumeSizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}
  */
  readonly sourceType: string;
}

export function containerengineNodePoolNodeSourceDetailsToTerraform(struct?: ContainerengineNodePoolNodeSourceDetailsOutputReference | ContainerengineNodePoolNodeSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume_size_in_gbs: cdktf.stringToTerraform(struct!.bootVolumeSizeInGbs),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
  }
}


export function containerengineNodePoolNodeSourceDetailsToHclTerraform(struct?: ContainerengineNodePoolNodeSourceDetailsOutputReference | ContainerengineNodePoolNodeSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume_size_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.bootVolumeSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerengineNodePoolNodeSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerengineNodePoolNodeSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolumeSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolumeSizeInGbs = this._bootVolumeSizeInGbs;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerengineNodePoolNodeSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootVolumeSizeInGbs = undefined;
      this._imageId = undefined;
      this._sourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootVolumeSizeInGbs = value.bootVolumeSizeInGbs;
      this._imageId = value.imageId;
      this._sourceType = value.sourceType;
    }
  }

  // boot_volume_size_in_gbs - computed: true, optional: true, required: false
  private _bootVolumeSizeInGbs?: string; 
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }
  public set bootVolumeSizeInGbs(value: string) {
    this._bootVolumeSizeInGbs = value;
  }
  public resetBootVolumeSizeInGbs() {
    this._bootVolumeSizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeSizeInGbsInput() {
    return this._bootVolumeSizeInGbs;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }
}
export interface ContainerengineNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}
  */
  readonly update?: string;
}

export function containerengineNodePoolTimeoutsToTerraform(struct?: ContainerengineNodePoolTimeouts | cdktf.IResolvable): any {
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


export function containerengineNodePoolTimeoutsToHclTerraform(struct?: ContainerengineNodePoolTimeouts | cdktf.IResolvable): any {
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

export class ContainerengineNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerengineNodePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerengineNodePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool oci_containerengine_node_pool}
*/
export class ContainerengineNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_containerengine_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerengineNodePool to import
  * @param importFromId The id of the existing ContainerengineNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerengineNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_containerengine_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/containerengine_node_pool oci_containerengine_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerengineNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerengineNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_containerengine_node_pool',
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
    this._clusterId = config.clusterId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._kubernetesVersion = config.kubernetesVersion;
    this._name = config.name;
    this._nodeImageId = config.nodeImageId;
    this._nodeImageName = config.nodeImageName;
    this._nodeMetadata = config.nodeMetadata;
    this._nodeShape = config.nodeShape;
    this._quantityPerSubnet = config.quantityPerSubnet;
    this._sshPublicKey = config.sshPublicKey;
    this._subnetIds = config.subnetIds;
    this._initialNodeLabels.internalValue = config.initialNodeLabels;
    this._nodeConfigDetails.internalValue = config.nodeConfigDetails;
    this._nodeEvictionNodePoolSettings.internalValue = config.nodeEvictionNodePoolSettings;
    this._nodePoolCyclingDetails.internalValue = config.nodePoolCyclingDetails;
    this._nodeShapeConfig.internalValue = config.nodeShapeConfig;
    this._nodeSourceDetails.internalValue = config.nodeSourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // kubernetes_version - computed: true, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // node_image_id - computed: true, optional: true, required: false
  private _nodeImageId?: string; 
  public get nodeImageId() {
    return this.getStringAttribute('node_image_id');
  }
  public set nodeImageId(value: string) {
    this._nodeImageId = value;
  }
  public resetNodeImageId() {
    this._nodeImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageIdInput() {
    return this._nodeImageId;
  }

  // node_image_name - computed: true, optional: true, required: false
  private _nodeImageName?: string; 
  public get nodeImageName() {
    return this.getStringAttribute('node_image_name');
  }
  public set nodeImageName(value: string) {
    this._nodeImageName = value;
  }
  public resetNodeImageName() {
    this._nodeImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeImageNameInput() {
    return this._nodeImageName;
  }

  // node_metadata - computed: true, optional: true, required: false
  private _nodeMetadata?: { [key: string]: string }; 
  public get nodeMetadata() {
    return this.getStringMapAttribute('node_metadata');
  }
  public set nodeMetadata(value: { [key: string]: string }) {
    this._nodeMetadata = value;
  }
  public resetNodeMetadata() {
    this._nodeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetadataInput() {
    return this._nodeMetadata;
  }

  // node_shape - computed: false, optional: false, required: true
  private _nodeShape?: string; 
  public get nodeShape() {
    return this.getStringAttribute('node_shape');
  }
  public set nodeShape(value: string) {
    this._nodeShape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeShapeInput() {
    return this._nodeShape;
  }

  // node_source - computed: true, optional: false, required: false
  private _nodeSource = new ContainerengineNodePoolNodeSourceList(this, "node_source", false);
  public get nodeSource() {
    return this._nodeSource;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new ContainerengineNodePoolNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // quantity_per_subnet - computed: true, optional: true, required: false
  private _quantityPerSubnet?: number; 
  public get quantityPerSubnet() {
    return this.getNumberAttribute('quantity_per_subnet');
  }
  public set quantityPerSubnet(value: number) {
    this._quantityPerSubnet = value;
  }
  public resetQuantityPerSubnet() {
    this._quantityPerSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantityPerSubnetInput() {
    return this._quantityPerSubnet;
  }

  // ssh_public_key - computed: true, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_ids - computed: true, optional: true, required: false
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  public resetSubnetIds() {
    this._subnetIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // initial_node_labels - computed: false, optional: true, required: false
  private _initialNodeLabels = new ContainerengineNodePoolInitialNodeLabelsList(this, "initial_node_labels", false);
  public get initialNodeLabels() {
    return this._initialNodeLabels;
  }
  public putInitialNodeLabels(value: ContainerengineNodePoolInitialNodeLabels[] | cdktf.IResolvable) {
    this._initialNodeLabels.internalValue = value;
  }
  public resetInitialNodeLabels() {
    this._initialNodeLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeLabelsInput() {
    return this._initialNodeLabels.internalValue;
  }

  // node_config_details - computed: false, optional: true, required: false
  private _nodeConfigDetails = new ContainerengineNodePoolNodeConfigDetailsOutputReference(this, "node_config_details");
  public get nodeConfigDetails() {
    return this._nodeConfigDetails;
  }
  public putNodeConfigDetails(value: ContainerengineNodePoolNodeConfigDetails) {
    this._nodeConfigDetails.internalValue = value;
  }
  public resetNodeConfigDetails() {
    this._nodeConfigDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDetailsInput() {
    return this._nodeConfigDetails.internalValue;
  }

  // node_eviction_node_pool_settings - computed: false, optional: true, required: false
  private _nodeEvictionNodePoolSettings = new ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference(this, "node_eviction_node_pool_settings");
  public get nodeEvictionNodePoolSettings() {
    return this._nodeEvictionNodePoolSettings;
  }
  public putNodeEvictionNodePoolSettings(value: ContainerengineNodePoolNodeEvictionNodePoolSettings) {
    this._nodeEvictionNodePoolSettings.internalValue = value;
  }
  public resetNodeEvictionNodePoolSettings() {
    this._nodeEvictionNodePoolSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeEvictionNodePoolSettingsInput() {
    return this._nodeEvictionNodePoolSettings.internalValue;
  }

  // node_pool_cycling_details - computed: false, optional: true, required: false
  private _nodePoolCyclingDetails = new ContainerengineNodePoolNodePoolCyclingDetailsOutputReference(this, "node_pool_cycling_details");
  public get nodePoolCyclingDetails() {
    return this._nodePoolCyclingDetails;
  }
  public putNodePoolCyclingDetails(value: ContainerengineNodePoolNodePoolCyclingDetails) {
    this._nodePoolCyclingDetails.internalValue = value;
  }
  public resetNodePoolCyclingDetails() {
    this._nodePoolCyclingDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolCyclingDetailsInput() {
    return this._nodePoolCyclingDetails.internalValue;
  }

  // node_shape_config - computed: false, optional: true, required: false
  private _nodeShapeConfig = new ContainerengineNodePoolNodeShapeConfigOutputReference(this, "node_shape_config");
  public get nodeShapeConfig() {
    return this._nodeShapeConfig;
  }
  public putNodeShapeConfig(value: ContainerengineNodePoolNodeShapeConfig) {
    this._nodeShapeConfig.internalValue = value;
  }
  public resetNodeShapeConfig() {
    this._nodeShapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeShapeConfigInput() {
    return this._nodeShapeConfig.internalValue;
  }

  // node_source_details - computed: false, optional: true, required: false
  private _nodeSourceDetails = new ContainerengineNodePoolNodeSourceDetailsOutputReference(this, "node_source_details");
  public get nodeSourceDetails() {
    return this._nodeSourceDetails;
  }
  public putNodeSourceDetails(value: ContainerengineNodePoolNodeSourceDetails) {
    this._nodeSourceDetails.internalValue = value;
  }
  public resetNodeSourceDetails() {
    this._nodeSourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSourceDetailsInput() {
    return this._nodeSourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerengineNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerengineNodePoolTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      name: cdktf.stringToTerraform(this._name),
      node_image_id: cdktf.stringToTerraform(this._nodeImageId),
      node_image_name: cdktf.stringToTerraform(this._nodeImageName),
      node_metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._nodeMetadata),
      node_shape: cdktf.stringToTerraform(this._nodeShape),
      quantity_per_subnet: cdktf.numberToTerraform(this._quantityPerSubnet),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnetIds),
      initial_node_labels: cdktf.listMapper(containerengineNodePoolInitialNodeLabelsToTerraform, true)(this._initialNodeLabels.internalValue),
      node_config_details: containerengineNodePoolNodeConfigDetailsToTerraform(this._nodeConfigDetails.internalValue),
      node_eviction_node_pool_settings: containerengineNodePoolNodeEvictionNodePoolSettingsToTerraform(this._nodeEvictionNodePoolSettings.internalValue),
      node_pool_cycling_details: containerengineNodePoolNodePoolCyclingDetailsToTerraform(this._nodePoolCyclingDetails.internalValue),
      node_shape_config: containerengineNodePoolNodeShapeConfigToTerraform(this._nodeShapeConfig.internalValue),
      node_source_details: containerengineNodePoolNodeSourceDetailsToTerraform(this._nodeSourceDetails.internalValue),
      timeouts: containerengineNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
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
      node_image_id: {
        value: cdktf.stringToHclTerraform(this._nodeImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_image_name: {
        value: cdktf.stringToHclTerraform(this._nodeImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nodeMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      node_shape: {
        value: cdktf.stringToHclTerraform(this._nodeShape),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quantity_per_subnet: {
        value: cdktf.numberToHclTerraform(this._quantityPerSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnetIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      initial_node_labels: {
        value: cdktf.listMapperHcl(containerengineNodePoolInitialNodeLabelsToHclTerraform, true)(this._initialNodeLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineNodePoolInitialNodeLabelsList",
      },
      node_config_details: {
        value: containerengineNodePoolNodeConfigDetailsToHclTerraform(this._nodeConfigDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineNodePoolNodeConfigDetailsList",
      },
      node_eviction_node_pool_settings: {
        value: containerengineNodePoolNodeEvictionNodePoolSettingsToHclTerraform(this._nodeEvictionNodePoolSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineNodePoolNodeEvictionNodePoolSettingsList",
      },
      node_pool_cycling_details: {
        value: containerengineNodePoolNodePoolCyclingDetailsToHclTerraform(this._nodePoolCyclingDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineNodePoolNodePoolCyclingDetailsList",
      },
      node_shape_config: {
        value: containerengineNodePoolNodeShapeConfigToHclTerraform(this._nodeShapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineNodePoolNodeShapeConfigList",
      },
      node_source_details: {
        value: containerengineNodePoolNodeSourceDetailsToHclTerraform(this._nodeSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerengineNodePoolNodeSourceDetailsList",
      },
      timeouts: {
        value: containerengineNodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerengineNodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
