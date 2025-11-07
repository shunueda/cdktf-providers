// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosMapPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#description QosMapPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#name QosMapPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of QoS schedulers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#qos_schedulers QosMapPolicyDefinition#qos_schedulers}
  */
  readonly qosSchedulers: QosMapPolicyDefinitionQosSchedulers[] | cdktf.IResolvable;
}
export interface QosMapPolicyDefinitionQosSchedulers {
  /**
  * Bandwidth percent
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#bandwidth_percent QosMapPolicyDefinition#bandwidth_percent}
  */
  readonly bandwidthPercent: number;
  /**
  * Buffer percent
  *   - Range: `0`-`100`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#buffer_percent QosMapPolicyDefinition#buffer_percent}
  */
  readonly bufferPercent: number;
  /**
  * Burst size
  *   - Range: `5000`-`10000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#burst QosMapPolicyDefinition#burst}
  */
  readonly burst?: number;
  /**
  * Class map ID (can be empty for queue 0 when left as Control)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#class_map_id QosMapPolicyDefinition#class_map_id}
  */
  readonly classMapId?: string;
  /**
  * Class map version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#class_map_version QosMapPolicyDefinition#class_map_version}
  */
  readonly classMapVersion?: number;
  /**
  * Drop type
  *   - Choices: `tail-drop`, `red-drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#drop_type QosMapPolicyDefinition#drop_type}
  */
  readonly dropType: string;
  /**
  * Queue number
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#queue QosMapPolicyDefinition#queue}
  */
  readonly queue: number;
  /**
  * Scheduling type
  *   - Choices: `llq`, `wrr`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#scheduling_type QosMapPolicyDefinition#scheduling_type}
  */
  readonly schedulingType: string;
}

export function qosMapPolicyDefinitionQosSchedulersToTerraform(struct?: QosMapPolicyDefinitionQosSchedulers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_percent: cdktf.numberToTerraform(struct!.bandwidthPercent),
    buffer_percent: cdktf.numberToTerraform(struct!.bufferPercent),
    burst: cdktf.numberToTerraform(struct!.burst),
    class_map_id: cdktf.stringToTerraform(struct!.classMapId),
    class_map_version: cdktf.numberToTerraform(struct!.classMapVersion),
    drop_type: cdktf.stringToTerraform(struct!.dropType),
    queue: cdktf.numberToTerraform(struct!.queue),
    scheduling_type: cdktf.stringToTerraform(struct!.schedulingType),
  }
}


export function qosMapPolicyDefinitionQosSchedulersToHclTerraform(struct?: QosMapPolicyDefinitionQosSchedulers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_percent: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_percent: {
      value: cdktf.numberToHclTerraform(struct!.bufferPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burst: {
      value: cdktf.numberToHclTerraform(struct!.burst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_map_id: {
      value: cdktf.stringToHclTerraform(struct!.classMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_map_version: {
      value: cdktf.numberToHclTerraform(struct!.classMapVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_type: {
      value: cdktf.stringToHclTerraform(struct!.dropType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.numberToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheduling_type: {
      value: cdktf.stringToHclTerraform(struct!.schedulingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosMapPolicyDefinitionQosSchedulersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosMapPolicyDefinitionQosSchedulers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPercent = this._bandwidthPercent;
    }
    if (this._bufferPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPercent = this._bufferPercent;
    }
    if (this._burst !== undefined) {
      hasAnyValues = true;
      internalValueResult.burst = this._burst;
    }
    if (this._classMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapId = this._classMapId;
    }
    if (this._classMapVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapVersion = this._classMapVersion;
    }
    if (this._dropType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropType = this._dropType;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._schedulingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingType = this._schedulingType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosMapPolicyDefinitionQosSchedulers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthPercent = undefined;
      this._bufferPercent = undefined;
      this._burst = undefined;
      this._classMapId = undefined;
      this._classMapVersion = undefined;
      this._dropType = undefined;
      this._queue = undefined;
      this._schedulingType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthPercent = value.bandwidthPercent;
      this._bufferPercent = value.bufferPercent;
      this._burst = value.burst;
      this._classMapId = value.classMapId;
      this._classMapVersion = value.classMapVersion;
      this._dropType = value.dropType;
      this._queue = value.queue;
      this._schedulingType = value.schedulingType;
    }
  }

  // bandwidth_percent - computed: false, optional: false, required: true
  private _bandwidthPercent?: number; 
  public get bandwidthPercent() {
    return this.getNumberAttribute('bandwidth_percent');
  }
  public set bandwidthPercent(value: number) {
    this._bandwidthPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPercentInput() {
    return this._bandwidthPercent;
  }

  // buffer_percent - computed: false, optional: false, required: true
  private _bufferPercent?: number; 
  public get bufferPercent() {
    return this.getNumberAttribute('buffer_percent');
  }
  public set bufferPercent(value: number) {
    this._bufferPercent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPercentInput() {
    return this._bufferPercent;
  }

  // burst - computed: false, optional: true, required: false
  private _burst?: number; 
  public get burst() {
    return this.getNumberAttribute('burst');
  }
  public set burst(value: number) {
    this._burst = value;
  }
  public resetBurst() {
    this._burst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstInput() {
    return this._burst;
  }

  // class_map_id - computed: false, optional: true, required: false
  private _classMapId?: string; 
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }
  public set classMapId(value: string) {
    this._classMapId = value;
  }
  public resetClassMapId() {
    this._classMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapIdInput() {
    return this._classMapId;
  }

  // class_map_version - computed: false, optional: true, required: false
  private _classMapVersion?: number; 
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }
  public set classMapVersion(value: number) {
    this._classMapVersion = value;
  }
  public resetClassMapVersion() {
    this._classMapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapVersionInput() {
    return this._classMapVersion;
  }

  // drop_type - computed: false, optional: false, required: true
  private _dropType?: string; 
  public get dropType() {
    return this.getStringAttribute('drop_type');
  }
  public set dropType(value: string) {
    this._dropType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropTypeInput() {
    return this._dropType;
  }

  // queue - computed: false, optional: false, required: true
  private _queue?: number; 
  public get queue() {
    return this.getNumberAttribute('queue');
  }
  public set queue(value: number) {
    this._queue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // scheduling_type - computed: false, optional: false, required: true
  private _schedulingType?: string; 
  public get schedulingType() {
    return this.getStringAttribute('scheduling_type');
  }
  public set schedulingType(value: string) {
    this._schedulingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingTypeInput() {
    return this._schedulingType;
  }
}

export class QosMapPolicyDefinitionQosSchedulersList extends cdktf.ComplexList {
  public internalValue? : QosMapPolicyDefinitionQosSchedulers[] | cdktf.IResolvable

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
  public get(index: number): QosMapPolicyDefinitionQosSchedulersOutputReference {
    return new QosMapPolicyDefinitionQosSchedulersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition sdwan_qos_map_policy_definition}
*/
export class QosMapPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_qos_map_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosMapPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosMapPolicyDefinition to import
  * @param importFromId The id of the existing QosMapPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosMapPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_qos_map_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/qos_map_policy_definition sdwan_qos_map_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosMapPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: QosMapPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_qos_map_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._qosSchedulers.internalValue = config.qosSchedulers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // qos_schedulers - computed: false, optional: false, required: true
  private _qosSchedulers = new QosMapPolicyDefinitionQosSchedulersList(this, "qos_schedulers", true);
  public get qosSchedulers() {
    return this._qosSchedulers;
  }
  public putQosSchedulers(value: QosMapPolicyDefinitionQosSchedulers[] | cdktf.IResolvable) {
    this._qosSchedulers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosSchedulersInput() {
    return this._qosSchedulers.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      qos_schedulers: cdktf.listMapper(qosMapPolicyDefinitionQosSchedulersToTerraform, false)(this._qosSchedulers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      qos_schedulers: {
        value: cdktf.listMapperHcl(qosMapPolicyDefinitionQosSchedulersToHclTerraform, false)(this._qosSchedulers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "QosMapPolicyDefinitionQosSchedulersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
