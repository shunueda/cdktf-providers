// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsKubernetesAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#cluster_id CsKubernetesAutoscaler#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#cool_down_duration CsKubernetesAutoscaler#cool_down_duration}
  */
  readonly coolDownDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#defer_scale_in_duration CsKubernetesAutoscaler#defer_scale_in_duration}
  */
  readonly deferScaleInDuration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#id CsKubernetesAutoscaler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#use_ecs_ram_role_token CsKubernetesAutoscaler#use_ecs_ram_role_token}
  */
  readonly useEcsRamRoleToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#utilization CsKubernetesAutoscaler#utilization}
  */
  readonly utilization: string;
  /**
  * nodepools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#nodepools CsKubernetesAutoscaler#nodepools}
  */
  readonly nodepools?: CsKubernetesAutoscalerNodepools[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#timeouts CsKubernetesAutoscaler#timeouts}
  */
  readonly timeouts?: CsKubernetesAutoscalerTimeouts;
}
export interface CsKubernetesAutoscalerNodepools {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#id CsKubernetesAutoscaler#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#labels CsKubernetesAutoscaler#labels}
  */
  readonly labels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#taints CsKubernetesAutoscaler#taints}
  */
  readonly taints?: string;
}

export function csKubernetesAutoscalerNodepoolsToTerraform(struct?: CsKubernetesAutoscalerNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    labels: cdktf.stringToTerraform(struct!.labels),
    taints: cdktf.stringToTerraform(struct!.taints),
  }
}


export function csKubernetesAutoscalerNodepoolsToHclTerraform(struct?: CsKubernetesAutoscalerNodepools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taints: {
      value: cdktf.stringToHclTerraform(struct!.taints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CsKubernetesAutoscalerNodepoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CsKubernetesAutoscalerNodepools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CsKubernetesAutoscalerNodepools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._labels = undefined;
      this._taints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._labels = value.labels;
      this._taints = value.taints;
    }
  }

  // id - computed: false, optional: true, required: false
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
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: string; 
  public get taints() {
    return this.getStringAttribute('taints');
  }
  public set taints(value: string) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }
}

export class CsKubernetesAutoscalerNodepoolsList extends cdktf.ComplexList {
  public internalValue? : CsKubernetesAutoscalerNodepools[] | cdktf.IResolvable

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
  public get(index: number): CsKubernetesAutoscalerNodepoolsOutputReference {
    return new CsKubernetesAutoscalerNodepoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CsKubernetesAutoscalerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#create CsKubernetesAutoscaler#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#delete CsKubernetesAutoscaler#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#update CsKubernetesAutoscaler#update}
  */
  readonly update?: string;
}

export function csKubernetesAutoscalerTimeoutsToTerraform(struct?: CsKubernetesAutoscalerTimeouts | cdktf.IResolvable): any {
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


export function csKubernetesAutoscalerTimeoutsToHclTerraform(struct?: CsKubernetesAutoscalerTimeouts | cdktf.IResolvable): any {
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

export class CsKubernetesAutoscalerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CsKubernetesAutoscalerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CsKubernetesAutoscalerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler alicloud_cs_kubernetes_autoscaler}
*/
export class CsKubernetesAutoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cs_kubernetes_autoscaler";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsKubernetesAutoscaler resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsKubernetesAutoscaler to import
  * @param importFromId The id of the existing CsKubernetesAutoscaler that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsKubernetesAutoscaler to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cs_kubernetes_autoscaler", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/cs_kubernetes_autoscaler alicloud_cs_kubernetes_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsKubernetesAutoscalerConfig
  */
  public constructor(scope: Construct, id: string, config: CsKubernetesAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cs_kubernetes_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
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
    this._coolDownDuration = config.coolDownDuration;
    this._deferScaleInDuration = config.deferScaleInDuration;
    this._id = config.id;
    this._useEcsRamRoleToken = config.useEcsRamRoleToken;
    this._utilization = config.utilization;
    this._nodepools.internalValue = config.nodepools;
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

  // cool_down_duration - computed: false, optional: false, required: true
  private _coolDownDuration?: string; 
  public get coolDownDuration() {
    return this.getStringAttribute('cool_down_duration');
  }
  public set coolDownDuration(value: string) {
    this._coolDownDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownDurationInput() {
    return this._coolDownDuration;
  }

  // defer_scale_in_duration - computed: false, optional: false, required: true
  private _deferScaleInDuration?: string; 
  public get deferScaleInDuration() {
    return this.getStringAttribute('defer_scale_in_duration');
  }
  public set deferScaleInDuration(value: string) {
    this._deferScaleInDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deferScaleInDurationInput() {
    return this._deferScaleInDuration;
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

  // use_ecs_ram_role_token - computed: false, optional: true, required: false
  private _useEcsRamRoleToken?: boolean | cdktf.IResolvable; 
  public get useEcsRamRoleToken() {
    return this.getBooleanAttribute('use_ecs_ram_role_token');
  }
  public set useEcsRamRoleToken(value: boolean | cdktf.IResolvable) {
    this._useEcsRamRoleToken = value;
  }
  public resetUseEcsRamRoleToken() {
    this._useEcsRamRoleToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEcsRamRoleTokenInput() {
    return this._useEcsRamRoleToken;
  }

  // utilization - computed: false, optional: false, required: true
  private _utilization?: string; 
  public get utilization() {
    return this.getStringAttribute('utilization');
  }
  public set utilization(value: string) {
    this._utilization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationInput() {
    return this._utilization;
  }

  // nodepools - computed: false, optional: true, required: false
  private _nodepools = new CsKubernetesAutoscalerNodepoolsList(this, "nodepools", true);
  public get nodepools() {
    return this._nodepools;
  }
  public putNodepools(value: CsKubernetesAutoscalerNodepools[] | cdktf.IResolvable) {
    this._nodepools.internalValue = value;
  }
  public resetNodepools() {
    this._nodepools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodepoolsInput() {
    return this._nodepools.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CsKubernetesAutoscalerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CsKubernetesAutoscalerTimeouts) {
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
      cool_down_duration: cdktf.stringToTerraform(this._coolDownDuration),
      defer_scale_in_duration: cdktf.stringToTerraform(this._deferScaleInDuration),
      id: cdktf.stringToTerraform(this._id),
      use_ecs_ram_role_token: cdktf.booleanToTerraform(this._useEcsRamRoleToken),
      utilization: cdktf.stringToTerraform(this._utilization),
      nodepools: cdktf.listMapper(csKubernetesAutoscalerNodepoolsToTerraform, true)(this._nodepools.internalValue),
      timeouts: csKubernetesAutoscalerTimeoutsToTerraform(this._timeouts.internalValue),
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
      cool_down_duration: {
        value: cdktf.stringToHclTerraform(this._coolDownDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defer_scale_in_duration: {
        value: cdktf.stringToHclTerraform(this._deferScaleInDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ecs_ram_role_token: {
        value: cdktf.booleanToHclTerraform(this._useEcsRamRoleToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      utilization: {
        value: cdktf.stringToHclTerraform(this._utilization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodepools: {
        value: cdktf.listMapperHcl(csKubernetesAutoscalerNodepoolsToHclTerraform, true)(this._nodepools.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CsKubernetesAutoscalerNodepoolsList",
      },
      timeouts: {
        value: csKubernetesAutoscalerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CsKubernetesAutoscalerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
