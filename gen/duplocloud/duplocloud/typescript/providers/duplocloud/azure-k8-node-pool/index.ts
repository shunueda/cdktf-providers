// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureK8NodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation tags for this node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#allocation_tag AzureK8NodePool#allocation_tag}
  */
  readonly allocationTag?: string;
  /**
  * availability zones of node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#availability_zones AzureK8NodePool#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * The initial number of nodes which should exist within this Node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#desired_capacity AzureK8NodePool#desired_capacity}
  */
  readonly desiredCapacity: number;
  /**
  * Whether to enable auto-scaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#enable_auto_scaling AzureK8NodePool#enable_auto_scaling}
  */
  readonly enableAutoScaling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#id AzureK8NodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Node pool identifier. This field is deprecated, Please use `name` instead. identifier has been deprecated instead use name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#identifier AzureK8NodePool#identifier}
  */
  readonly identifier?: number;
  /**
  * The maximum number of nodes which should exist within this Node Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#max_capacity AzureK8NodePool#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * The minimum number of nodes which should exist within this Node Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#min_capacity AzureK8NodePool#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * The name of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#name AzureK8NodePool#name}
  */
  readonly name?: string;
  /**
  * A list of Kubernetes taints which should be applied to nodes in the agent pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#node_taints AzureK8NodePool#node_taints}
  */
  readonly nodeTaints?: string[];
  /**
  * The Agent Operating System disk size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#os_disk_size_gb AzureK8NodePool#os_disk_size_gb}
  */
  readonly osDiskSizeGb?: number;
  /**
  * Specifies the OS SKU used by the agent pool. Possible values are `AzureLinux`, `Ubuntu`, `Windows2019` and `Windows2022`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#os_sku AzureK8NodePool#os_sku}
  */
  readonly osSku?: string;
  /**
  * Specifies the OS used by the agent pool. Possible values are `Linux`, `Windows`. Defaults to `Linux`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#os_type AzureK8NodePool#os_type}
  */
  readonly osType?: string;
  /**
  * The GUID of the tenant that the azure node pool will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#tenant_id AzureK8NodePool#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The SKU which should be used for the Virtual Machines used in this Node Pool. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#vm_size AzureK8NodePool#vm_size}
  */
  readonly vmSize: string;
  /**
  * Whether or not to wait until node pool to be ready, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#wait_until_ready AzureK8NodePool#wait_until_ready}
  */
  readonly waitUntilReady?: boolean | cdktf.IResolvable;
  /**
  * node_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#node_labels AzureK8NodePool#node_labels}
  */
  readonly nodeLabels?: AzureK8NodePoolNodeLabels[] | cdktf.IResolvable;
  /**
  * scale_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#scale_priority AzureK8NodePool#scale_priority}
  */
  readonly scalePriority?: AzureK8NodePoolScalePriority;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#timeouts AzureK8NodePool#timeouts}
  */
  readonly timeouts?: AzureK8NodePoolTimeouts;
}
export interface AzureK8NodePoolNodeLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#key AzureK8NodePool#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#value AzureK8NodePool#value}
  */
  readonly value: string;
}

export function azureK8NodePoolNodeLabelsToTerraform(struct?: AzureK8NodePoolNodeLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function azureK8NodePoolNodeLabelsToHclTerraform(struct?: AzureK8NodePoolNodeLabels | cdktf.IResolvable): any {
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

export class AzureK8NodePoolNodeLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AzureK8NodePoolNodeLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AzureK8NodePoolNodeLabels | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AzureK8NodePoolNodeLabelsList extends cdktf.ComplexList {
  public internalValue? : AzureK8NodePoolNodeLabels[] | cdktf.IResolvable

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
  public get(index: number): AzureK8NodePoolNodeLabelsOutputReference {
    return new AzureK8NodePoolNodeLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AzureK8NodePoolScalePriority {
  /**
  * eviction policies Delete/Deallocate. Default value is Delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#eviction_policy AzureK8NodePool#eviction_policy}
  */
  readonly evictionPolicy?: string;
  /**
  * priority levels Regular/Spot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#priority AzureK8NodePool#priority}
  */
  readonly priority?: string;
  /**
  * for spot VMs sets the maximum price you're willing to pay, controlling costs, while priority.spot determines the scaling order of spot VM pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#spot_max_price AzureK8NodePool#spot_max_price}
  */
  readonly spotMaxPrice?: number;
}

export function azureK8NodePoolScalePriorityToTerraform(struct?: AzureK8NodePoolScalePriorityOutputReference | AzureK8NodePoolScalePriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eviction_policy: cdktf.stringToTerraform(struct!.evictionPolicy),
    priority: cdktf.stringToTerraform(struct!.priority),
    spot_max_price: cdktf.numberToTerraform(struct!.spotMaxPrice),
  }
}


export function azureK8NodePoolScalePriorityToHclTerraform(struct?: AzureK8NodePoolScalePriorityOutputReference | AzureK8NodePoolScalePriority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.evictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_max_price: {
      value: cdktf.numberToHclTerraform(struct!.spotMaxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureK8NodePoolScalePriorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AzureK8NodePoolScalePriority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.evictionPolicy = this._evictionPolicy;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._spotMaxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotMaxPrice = this._spotMaxPrice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureK8NodePoolScalePriority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evictionPolicy = undefined;
      this._priority = undefined;
      this._spotMaxPrice = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evictionPolicy = value.evictionPolicy;
      this._priority = value.priority;
      this._spotMaxPrice = value.spotMaxPrice;
    }
  }

  // eviction_policy - computed: true, optional: true, required: false
  private _evictionPolicy?: string; 
  public get evictionPolicy() {
    return this.getStringAttribute('eviction_policy');
  }
  public set evictionPolicy(value: string) {
    this._evictionPolicy = value;
  }
  public resetEvictionPolicy() {
    this._evictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evictionPolicyInput() {
    return this._evictionPolicy;
  }

  // priority - computed: true, optional: true, required: false
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

  // spot_max_price - computed: true, optional: true, required: false
  private _spotMaxPrice?: number; 
  public get spotMaxPrice() {
    return this.getNumberAttribute('spot_max_price');
  }
  public set spotMaxPrice(value: number) {
    this._spotMaxPrice = value;
  }
  public resetSpotMaxPrice() {
    this._spotMaxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotMaxPriceInput() {
    return this._spotMaxPrice;
  }
}
export interface AzureK8NodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#create AzureK8NodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#delete AzureK8NodePool#delete}
  */
  readonly delete?: string;
}

export function azureK8NodePoolTimeoutsToTerraform(struct?: AzureK8NodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function azureK8NodePoolTimeoutsToHclTerraform(struct?: AzureK8NodePoolTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AzureK8NodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AzureK8NodePoolTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AzureK8NodePoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool duplocloud_azure_k8_node_pool}
*/
export class AzureK8NodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_k8_node_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureK8NodePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureK8NodePool to import
  * @param importFromId The id of the existing AzureK8NodePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureK8NodePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_k8_node_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/azure_k8_node_pool duplocloud_azure_k8_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureK8NodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: AzureK8NodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_k8_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationTag = config.allocationTag;
    this._availabilityZones = config.availabilityZones;
    this._desiredCapacity = config.desiredCapacity;
    this._enableAutoScaling = config.enableAutoScaling;
    this._id = config.id;
    this._identifier = config.identifier;
    this._maxCapacity = config.maxCapacity;
    this._minCapacity = config.minCapacity;
    this._name = config.name;
    this._nodeTaints = config.nodeTaints;
    this._osDiskSizeGb = config.osDiskSizeGb;
    this._osSku = config.osSku;
    this._osType = config.osType;
    this._tenantId = config.tenantId;
    this._vmSize = config.vmSize;
    this._waitUntilReady = config.waitUntilReady;
    this._nodeLabels.internalValue = config.nodeLabels;
    this._scalePriority.internalValue = config.scalePriority;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_tag - computed: true, optional: true, required: false
  private _allocationTag?: string; 
  public get allocationTag() {
    return this.getStringAttribute('allocation_tag');
  }
  public set allocationTag(value: string) {
    this._allocationTag = value;
  }
  public resetAllocationTag() {
    this._allocationTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationTagInput() {
    return this._allocationTag;
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // desired_capacity - computed: false, optional: false, required: true
  private _desiredCapacity?: number; 
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number) {
    this._desiredCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // enable_auto_scaling - computed: true, optional: true, required: false
  private _enableAutoScaling?: boolean | cdktf.IResolvable; 
  public get enableAutoScaling() {
    return this.getBooleanAttribute('enable_auto_scaling');
  }
  public set enableAutoScaling(value: boolean | cdktf.IResolvable) {
    this._enableAutoScaling = value;
  }
  public resetEnableAutoScaling() {
    this._enableAutoScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoScalingInput() {
    return this._enableAutoScaling;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: number; 
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }
  public set identifier(value: number) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
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

  // node_taints - computed: true, optional: true, required: false
  private _nodeTaints?: string[]; 
  public get nodeTaints() {
    return this.getListAttribute('node_taints');
  }
  public set nodeTaints(value: string[]) {
    this._nodeTaints = value;
  }
  public resetNodeTaints() {
    this._nodeTaints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints;
  }

  // os_disk_size_gb - computed: true, optional: true, required: false
  private _osDiskSizeGb?: number; 
  public get osDiskSizeGb() {
    return this.getNumberAttribute('os_disk_size_gb');
  }
  public set osDiskSizeGb(value: number) {
    this._osDiskSizeGb = value;
  }
  public resetOsDiskSizeGb() {
    this._osDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osDiskSizeGbInput() {
    return this._osDiskSizeGb;
  }

  // os_sku - computed: true, optional: true, required: false
  private _osSku?: string; 
  public get osSku() {
    return this.getStringAttribute('os_sku');
  }
  public set osSku(value: string) {
    this._osSku = value;
  }
  public resetOsSku() {
    this._osSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osSkuInput() {
    return this._osSku;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
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

  // wait_until_ready - computed: false, optional: true, required: false
  private _waitUntilReady?: boolean | cdktf.IResolvable; 
  public get waitUntilReady() {
    return this.getBooleanAttribute('wait_until_ready');
  }
  public set waitUntilReady(value: boolean | cdktf.IResolvable) {
    this._waitUntilReady = value;
  }
  public resetWaitUntilReady() {
    this._waitUntilReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilReadyInput() {
    return this._waitUntilReady;
  }

  // node_labels - computed: false, optional: true, required: false
  private _nodeLabels = new AzureK8NodePoolNodeLabelsList(this, "node_labels", false);
  public get nodeLabels() {
    return this._nodeLabels;
  }
  public putNodeLabels(value: AzureK8NodePoolNodeLabels[] | cdktf.IResolvable) {
    this._nodeLabels.internalValue = value;
  }
  public resetNodeLabels() {
    this._nodeLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLabelsInput() {
    return this._nodeLabels.internalValue;
  }

  // scale_priority - computed: false, optional: true, required: false
  private _scalePriority = new AzureK8NodePoolScalePriorityOutputReference(this, "scale_priority");
  public get scalePriority() {
    return this._scalePriority;
  }
  public putScalePriority(value: AzureK8NodePoolScalePriority) {
    this._scalePriority.internalValue = value;
  }
  public resetScalePriority() {
    this._scalePriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalePriorityInput() {
    return this._scalePriority.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AzureK8NodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AzureK8NodePoolTimeouts) {
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
      allocation_tag: cdktf.stringToTerraform(this._allocationTag),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      desired_capacity: cdktf.numberToTerraform(this._desiredCapacity),
      enable_auto_scaling: cdktf.booleanToTerraform(this._enableAutoScaling),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.numberToTerraform(this._identifier),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      name: cdktf.stringToTerraform(this._name),
      node_taints: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeTaints),
      os_disk_size_gb: cdktf.numberToTerraform(this._osDiskSizeGb),
      os_sku: cdktf.stringToTerraform(this._osSku),
      os_type: cdktf.stringToTerraform(this._osType),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      wait_until_ready: cdktf.booleanToTerraform(this._waitUntilReady),
      node_labels: cdktf.listMapper(azureK8NodePoolNodeLabelsToTerraform, true)(this._nodeLabels.internalValue),
      scale_priority: azureK8NodePoolScalePriorityToTerraform(this._scalePriority.internalValue),
      timeouts: azureK8NodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_tag: {
        value: cdktf.stringToHclTerraform(this._allocationTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      desired_capacity: {
        value: cdktf.numberToHclTerraform(this._desiredCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_auto_scaling: {
        value: cdktf.booleanToHclTerraform(this._enableAutoScaling),
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
      identifier: {
        value: cdktf.numberToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_capacity: {
        value: cdktf.numberToHclTerraform(this._minCapacity),
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
      node_taints: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeTaints),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      os_disk_size_gb: {
        value: cdktf.numberToHclTerraform(this._osDiskSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      os_sku: {
        value: cdktf.stringToHclTerraform(this._osSku),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
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
      wait_until_ready: {
        value: cdktf.booleanToHclTerraform(this._waitUntilReady),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_labels: {
        value: cdktf.listMapperHcl(azureK8NodePoolNodeLabelsToHclTerraform, true)(this._nodeLabels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureK8NodePoolNodeLabelsList",
      },
      scale_priority: {
        value: azureK8NodePoolScalePriorityToHclTerraform(this._scalePriority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AzureK8NodePoolScalePriorityList",
      },
      timeouts: {
        value: azureK8NodePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AzureK8NodePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
