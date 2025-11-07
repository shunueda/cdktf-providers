// https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KubernetesNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Zones to place nodes in. If not set, they will be spread across multiple zones selected by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#availability_zones KubernetesNodePool#availability_zones}
  */
  readonly availabilityZones?: number[];
  /**
  * AWS-specific attributes that will be set if this resource is deployed in AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#aws_overrides KubernetesNodePool#aws_overrides}
  */
  readonly awsOverrides?: KubernetesNodePoolAwsOverrides;
  /**
  * Azure-specific attributes that will be set if this resource is deployed in Azure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#azure_overrides KubernetesNodePool#azure_overrides}
  */
  readonly azureOverrides?: KubernetesNodePoolAzureOverrides;
  /**
  * Id of the multy kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#cluster_id KubernetesNodePool#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Disk size used for each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#disk_size_gb KubernetesNodePool#disk_size_gb}
  */
  readonly diskSizeGb: number;
  /**
  * Labels to be applied to each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#labels KubernetesNodePool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maximum number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#max_node_count KubernetesNodePool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Minimum number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#min_node_count KubernetesNodePool#min_node_count}
  */
  readonly minNodeCount: number;
  /**
  * Name of kubernetes node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#name KubernetesNodePool#name}
  */
  readonly name: string;
  /**
  * Number of initial nodes. Defaults to the minimum number of nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#starting_node_count KubernetesNodePool#starting_node_count}
  */
  readonly startingNodeCount?: number;
  /**
  * Subnet to place the node and pods in. Must have access to the Internet to connect with the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#subnet_id KubernetesNodePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Size of Virtual Machine used for the nodes. Accepted values are `general_micro`, `general_medium`, `general_large`, `general_nano`, `general_small`, `general_xlarge`, `general_2xlarge`, `compute_large`, `compute_xlarge`, `compute_2xlarge`, `compute_4xlarge`, `compute_8xlarge`, `memory_large`, `memory_xlarge`, `memory_2xlarge`, `memory_4xlarge`, `memory_8xlarge`, `memory_12xlarge` or `memory_16xlarge`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#vm_size KubernetesNodePool#vm_size}
  */
  readonly vmSize: string;
}
export interface KubernetesNodePoolAws {
}

export function kubernetesNodePoolAwsToTerraform(struct?: KubernetesNodePoolAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesNodePoolAwsToHclTerraform(struct?: KubernetesNodePoolAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesNodePoolAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eks_node_pool_id - computed: true, optional: false, required: false
  public get eksNodePoolId() {
    return this.getStringAttribute('eks_node_pool_id');
  }

  // iam_role_arn - computed: true, optional: false, required: false
  public get iamRoleArn() {
    return this.getStringAttribute('iam_role_arn');
  }
}
export interface KubernetesNodePoolAwsOverrides {
  /**
  * The instance type to use for nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#instance_types KubernetesNodePool#instance_types}
  */
  readonly instanceTypes?: string[];
}

export function kubernetesNodePoolAwsOverridesToTerraform(struct?: KubernetesNodePoolAwsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
  }
}


export function kubernetesNodePoolAwsOverridesToHclTerraform(struct?: KubernetesNodePoolAwsOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolAwsOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolAwsOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAwsOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceTypes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceTypes = value.instanceTypes;
    }
  }

  // instance_types - computed: false, optional: true, required: false
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  public resetInstanceTypes() {
    this._instanceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }
}
export interface KubernetesNodePoolAzure {
}

export function kubernetesNodePoolAzureToTerraform(struct?: KubernetesNodePoolAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesNodePoolAzureToHclTerraform(struct?: KubernetesNodePoolAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesNodePoolAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aks_node_pool_id - computed: true, optional: false, required: false
  public get aksNodePoolId() {
    return this.getStringAttribute('aks_node_pool_id');
  }
}
export interface KubernetesNodePoolAzureOverrides {
  /**
  * The size to use for nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#vm_size KubernetesNodePool#vm_size}
  */
  readonly vmSize?: string;
}

export function kubernetesNodePoolAzureOverridesToTerraform(struct?: KubernetesNodePoolAzureOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
  }
}


export function kubernetesNodePoolAzureOverridesToHclTerraform(struct?: KubernetesNodePoolAzureOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vm_size: {
      value: cdktf.stringToHclTerraform(struct!.vmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KubernetesNodePoolAzureOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolAzureOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolAzureOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vmSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vmSize = value.vmSize;
    }
  }

  // vm_size - computed: false, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }
}
export interface KubernetesNodePoolGcp {
}

export function kubernetesNodePoolGcpToTerraform(struct?: KubernetesNodePoolGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function kubernetesNodePoolGcpToHclTerraform(struct?: KubernetesNodePoolGcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KubernetesNodePoolGcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KubernetesNodePoolGcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KubernetesNodePoolGcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gke_node_pool_id - computed: true, optional: false, required: false
  public get gkeNodePoolId() {
    return this.getStringAttribute('gke_node_pool_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool multy_kubernetes_node_pool}
*/
export class KubernetesNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multy_kubernetes_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KubernetesNodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KubernetesNodePool to import
  * @param importFromId The id of the existing KubernetesNodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KubernetesNodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multy_kubernetes_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/kubernetes_node_pool multy_kubernetes_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KubernetesNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: KubernetesNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'multy_kubernetes_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'multy',
        providerVersion: '0.0.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._awsOverrides.internalValue = config.awsOverrides;
    this._azureOverrides.internalValue = config.azureOverrides;
    this._clusterId = config.clusterId;
    this._diskSizeGb = config.diskSizeGb;
    this._labels = config.labels;
    this._maxNodeCount = config.maxNodeCount;
    this._minNodeCount = config.minNodeCount;
    this._name = config.name;
    this._startingNodeCount = config.startingNodeCount;
    this._subnetId = config.subnetId;
    this._vmSize = config.vmSize;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: number[]; 
  public get availabilityZones() {
    return this.getNumberListAttribute('availability_zones');
  }
  public set availabilityZones(value: number[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new KubernetesNodePoolAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }

  // aws_overrides - computed: false, optional: true, required: false
  private _awsOverrides = new KubernetesNodePoolAwsOverridesOutputReference(this, "aws_overrides");
  public get awsOverrides() {
    return this._awsOverrides;
  }
  public putAwsOverrides(value: KubernetesNodePoolAwsOverrides) {
    this._awsOverrides.internalValue = value;
  }
  public resetAwsOverrides() {
    this._awsOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOverridesInput() {
    return this._awsOverrides.internalValue;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new KubernetesNodePoolAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }

  // azure_overrides - computed: false, optional: true, required: false
  private _azureOverrides = new KubernetesNodePoolAzureOverridesOutputReference(this, "azure_overrides");
  public get azureOverrides() {
    return this._azureOverrides;
  }
  public putAzureOverrides(value: KubernetesNodePoolAzureOverrides) {
    this._azureOverrides.internalValue = value;
  }
  public resetAzureOverrides() {
    this._azureOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureOverridesInput() {
    return this._azureOverrides.internalValue;
  }

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

  // disk_size_gb - computed: false, optional: false, required: true
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // gcp - computed: true, optional: false, required: false
  private _gcp = new KubernetesNodePoolGcpOutputReference(this, "gcp");
  public get gcp() {
    return this._gcp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
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

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
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

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new cdktf.StringMap(this, "resource_status");
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // starting_node_count - computed: true, optional: true, required: false
  private _startingNodeCount?: number; 
  public get startingNodeCount() {
    return this.getNumberAttribute('starting_node_count');
  }
  public set startingNodeCount(value: number) {
    this._startingNodeCount = value;
  }
  public resetStartingNodeCount() {
    this._startingNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingNodeCountInput() {
    return this._startingNodeCount;
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

  // vm_size - computed: false, optional: false, required: true
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.numberToTerraform, false)(this._availabilityZones),
      aws_overrides: kubernetesNodePoolAwsOverridesToTerraform(this._awsOverrides.internalValue),
      azure_overrides: kubernetesNodePoolAzureOverridesToTerraform(this._azureOverrides.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      disk_size_gb: cdktf.numberToTerraform(this._diskSizeGb),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_node_count: cdktf.numberToTerraform(this._maxNodeCount),
      min_node_count: cdktf.numberToTerraform(this._minNodeCount),
      name: cdktf.stringToTerraform(this._name),
      starting_node_count: cdktf.numberToTerraform(this._startingNodeCount),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vm_size: cdktf.stringToTerraform(this._vmSize),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      aws_overrides: {
        value: kubernetesNodePoolAwsOverridesToHclTerraform(this._awsOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesNodePoolAwsOverrides",
      },
      azure_overrides: {
        value: kubernetesNodePoolAzureOverridesToHclTerraform(this._azureOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KubernetesNodePoolAzureOverrides",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._diskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_node_count: {
        value: cdktf.numberToHclTerraform(this._maxNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_node_count: {
        value: cdktf.numberToHclTerraform(this._minNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starting_node_count: {
        value: cdktf.numberToHclTerraform(this._startingNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_size: {
        value: cdktf.stringToHclTerraform(this._vmSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
