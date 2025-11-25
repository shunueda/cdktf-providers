// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcK8SNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * K8S cluster ID for which node group should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#cluster_id TwcK8SNodeGroup#cluster_id}
  */
  readonly clusterId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#id TwcK8SNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Automatic recreating failed nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#is_autohealing TwcK8SNodeGroup#is_autohealing}
  */
  readonly isAutohealing?: boolean | cdktf.IResolvable;
  /**
  * Automatic increase/decrease of the number of nodes in a group depending on the load
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#is_autoscaling TwcK8SNodeGroup#is_autoscaling}
  */
  readonly isAutoscaling?: boolean | cdktf.IResolvable;
  /**
  * max count of nodes in group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#max_size TwcK8SNodeGroup#max_size}
  */
  readonly maxSize?: number;
  /**
  * min count of nodes in group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#min_size TwcK8SNodeGroup#min_size}
  */
  readonly minSize?: number;
  /**
  * K8S node group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#name TwcK8SNodeGroup#name}
  */
  readonly name: string;
  /**
  * Count of nodes in group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#node_count TwcK8SNodeGroup#node_count}
  */
  readonly nodeCount: number;
  /**
  * Preset ID for nodes in group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#preset_id TwcK8SNodeGroup#preset_id}
  */
  readonly presetId?: number;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#configuration TwcK8SNodeGroup#configuration}
  */
  readonly configuration?: TwcK8SNodeGroupConfiguration;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#labels TwcK8SNodeGroup#labels}
  */
  readonly labels?: TwcK8SNodeGroupLabels[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#taints TwcK8SNodeGroup#taints}
  */
  readonly taints?: TwcK8SNodeGroupTaints[] | cdktf.IResolvable;
}
export interface TwcK8SNodeGroupConfiguration {
  /**
  * Configurator ID for creating group node workers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#configurator_id TwcK8SNodeGroup#configurator_id}
  */
  readonly configuratorId: number;
  /**
  * CPU count for node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#cpu TwcK8SNodeGroup#cpu}
  */
  readonly cpu: number;
  /**
  * Disk node group size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#disk TwcK8SNodeGroup#disk}
  */
  readonly disk: number;
  /**
  * GPU count for node group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#gpu TwcK8SNodeGroup#gpu}
  */
  readonly gpu?: number;
  /**
  * RAM node group worker size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#ram TwcK8SNodeGroup#ram}
  */
  readonly ram: number;
}

export function twcK8SNodeGroupConfigurationToTerraform(struct?: TwcK8SNodeGroupConfigurationOutputReference | TwcK8SNodeGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configurator_id: cdktf.numberToTerraform(struct!.configuratorId),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk: cdktf.numberToTerraform(struct!.disk),
    gpu: cdktf.numberToTerraform(struct!.gpu),
    ram: cdktf.numberToTerraform(struct!.ram),
  }
}


export function twcK8SNodeGroupConfigurationToHclTerraform(struct?: TwcK8SNodeGroupConfigurationOutputReference | TwcK8SNodeGroupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configurator_id: {
      value: cdktf.numberToHclTerraform(struct!.configuratorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk: {
      value: cdktf.numberToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu: {
      value: cdktf.numberToHclTerraform(struct!.gpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ram: {
      value: cdktf.numberToHclTerraform(struct!.ram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TwcK8SNodeGroupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TwcK8SNodeGroupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuratorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuratorId = this._configuratorId;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._gpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu;
    }
    if (this._ram !== undefined) {
      hasAnyValues = true;
      internalValueResult.ram = this._ram;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TwcK8SNodeGroupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuratorId = undefined;
      this._cpu = undefined;
      this._disk = undefined;
      this._gpu = undefined;
      this._ram = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuratorId = value.configuratorId;
      this._cpu = value.cpu;
      this._disk = value.disk;
      this._gpu = value.gpu;
      this._ram = value.ram;
    }
  }

  // configurator_id - computed: false, optional: false, required: true
  private _configuratorId?: number; 
  public get configuratorId() {
    return this.getNumberAttribute('configurator_id');
  }
  public set configuratorId(value: number) {
    this._configuratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configuratorIdInput() {
    return this._configuratorId;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu?: number; 
  public get gpu() {
    return this.getNumberAttribute('gpu');
  }
  public set gpu(value: number) {
    this._gpu = value;
  }
  public resetGpu() {
    this._gpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu;
  }

  // ram - computed: false, optional: false, required: true
  private _ram?: number; 
  public get ram() {
    return this.getNumberAttribute('ram');
  }
  public set ram(value: number) {
    this._ram = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramInput() {
    return this._ram;
  }
}
export interface TwcK8SNodeGroupLabels {
  /**
  * K8S node group label key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#key TwcK8SNodeGroup#key}
  */
  readonly key: string;
  /**
  * K8S node group label value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#value TwcK8SNodeGroup#value}
  */
  readonly value: string;
}

export function twcK8SNodeGroupLabelsToTerraform(struct?: TwcK8SNodeGroupLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function twcK8SNodeGroupLabelsToHclTerraform(struct?: TwcK8SNodeGroupLabels | cdktf.IResolvable): any {
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

export class TwcK8SNodeGroupLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcK8SNodeGroupLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TwcK8SNodeGroupLabels | cdktf.IResolvable | undefined) {
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

export class TwcK8SNodeGroupLabelsList extends cdktf.ComplexList {
  public internalValue? : TwcK8SNodeGroupLabels[] | cdktf.IResolvable

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
  public get(index: number): TwcK8SNodeGroupLabelsOutputReference {
    return new TwcK8SNodeGroupLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TwcK8SNodeGroupTaints {
  /**
  * K8S node group taint effect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#effect TwcK8SNodeGroup#effect}
  */
  readonly effect: string;
  /**
  * K8S node group taint key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#key TwcK8SNodeGroup#key}
  */
  readonly key: string;
  /**
  * K8S node group taint value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#value TwcK8SNodeGroup#value}
  */
  readonly value: string;
}

export function twcK8SNodeGroupTaintsToTerraform(struct?: TwcK8SNodeGroupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function twcK8SNodeGroupTaintsToHclTerraform(struct?: TwcK8SNodeGroupTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class TwcK8SNodeGroupTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TwcK8SNodeGroupTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
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

  public set internalValue(value: TwcK8SNodeGroupTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

export class TwcK8SNodeGroupTaintsList extends cdktf.ComplexList {
  public internalValue? : TwcK8SNodeGroupTaints[] | cdktf.IResolvable

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
  public get(index: number): TwcK8SNodeGroupTaintsOutputReference {
    return new TwcK8SNodeGroupTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group twc_k8s_node_group}
*/
export class TwcK8SNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_k8s_node_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcK8SNodeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcK8SNodeGroup to import
  * @param importFromId The id of the existing TwcK8SNodeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcK8SNodeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_k8s_node_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.7/docs/resources/twc_k8s_node_group twc_k8s_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcK8SNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TwcK8SNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_k8s_node_group',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.7',
        providerVersionConstraint: '1.6.7'
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
    this._id = config.id;
    this._isAutohealing = config.isAutohealing;
    this._isAutoscaling = config.isAutoscaling;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._nodeCount = config.nodeCount;
    this._presetId = config.presetId;
    this._configuration.internalValue = config.configuration;
    this._labels.internalValue = config.labels;
    this._taints.internalValue = config.taints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: number; 
  public get clusterId() {
    return this.getNumberAttribute('cluster_id');
  }
  public set clusterId(value: number) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // is_autohealing - computed: true, optional: true, required: false
  private _isAutohealing?: boolean | cdktf.IResolvable; 
  public get isAutohealing() {
    return this.getBooleanAttribute('is_autohealing');
  }
  public set isAutohealing(value: boolean | cdktf.IResolvable) {
    this._isAutohealing = value;
  }
  public resetIsAutohealing() {
    this._isAutohealing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutohealingInput() {
    return this._isAutohealing;
  }

  // is_autoscaling - computed: false, optional: true, required: false
  private _isAutoscaling?: boolean | cdktf.IResolvable; 
  public get isAutoscaling() {
    return this.getBooleanAttribute('is_autoscaling');
  }
  public set isAutoscaling(value: boolean | cdktf.IResolvable) {
    this._isAutoscaling = value;
  }
  public resetIsAutoscaling() {
    this._isAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoscalingInput() {
    return this._isAutoscaling;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // preset_id - computed: true, optional: true, required: false
  private _presetId?: number; 
  public get presetId() {
    return this.getNumberAttribute('preset_id');
  }
  public set presetId(value: number) {
    this._presetId = value;
  }
  public resetPresetId() {
    this._presetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetIdInput() {
    return this._presetId;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new TwcK8SNodeGroupConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: TwcK8SNodeGroupConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new TwcK8SNodeGroupLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: TwcK8SNodeGroupLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new TwcK8SNodeGroupTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: TwcK8SNodeGroupTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.numberToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      is_autohealing: cdktf.booleanToTerraform(this._isAutohealing),
      is_autoscaling: cdktf.booleanToTerraform(this._isAutoscaling),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      preset_id: cdktf.numberToTerraform(this._presetId),
      configuration: twcK8SNodeGroupConfigurationToTerraform(this._configuration.internalValue),
      labels: cdktf.listMapper(twcK8SNodeGroupLabelsToTerraform, true)(this._labels.internalValue),
      taints: cdktf.listMapper(twcK8SNodeGroupTaintsToTerraform, true)(this._taints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.numberToHclTerraform(this._clusterId),
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
      is_autohealing: {
        value: cdktf.booleanToHclTerraform(this._isAutohealing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_autoscaling: {
        value: cdktf.booleanToHclTerraform(this._isAutoscaling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
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
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preset_id: {
        value: cdktf.numberToHclTerraform(this._presetId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configuration: {
        value: twcK8SNodeGroupConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcK8SNodeGroupConfigurationList",
      },
      labels: {
        value: cdktf.listMapperHcl(twcK8SNodeGroupLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcK8SNodeGroupLabelsList",
      },
      taints: {
        value: cdktf.listMapperHcl(twcK8SNodeGroupTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TwcK8SNodeGroupTaintsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
