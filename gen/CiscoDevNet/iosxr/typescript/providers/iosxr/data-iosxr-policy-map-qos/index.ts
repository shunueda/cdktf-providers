// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/policy_map_qos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrPolicyMapQosConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/policy_map_qos#device DataIosxrPolicyMapQos#device}
  */
  readonly device?: string;
  /**
  * Name of the policymap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/policy_map_qos#policy_map_name DataIosxrPolicyMapQos#policy_map_name}
  */
  readonly policyMapName: string;
}
export interface DataIosxrPolicyMapQosClassesQueueLimits {
}

export function dataIosxrPolicyMapQosClassesQueueLimitsToTerraform(struct?: DataIosxrPolicyMapQosClassesQueueLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrPolicyMapQosClassesQueueLimitsToHclTerraform(struct?: DataIosxrPolicyMapQosClassesQueueLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrPolicyMapQosClassesQueueLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrPolicyMapQosClassesQueueLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrPolicyMapQosClassesQueueLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIosxrPolicyMapQosClassesQueueLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrPolicyMapQosClassesQueueLimitsOutputReference {
    return new DataIosxrPolicyMapQosClassesQueueLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrPolicyMapQosClasses {
}

export function dataIosxrPolicyMapQosClassesToTerraform(struct?: DataIosxrPolicyMapQosClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrPolicyMapQosClassesToHclTerraform(struct?: DataIosxrPolicyMapQosClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrPolicyMapQosClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrPolicyMapQosClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrPolicyMapQosClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_remaining_unit - computed: true, optional: false, required: false
  public get bandwidthRemainingUnit() {
    return this.getStringAttribute('bandwidth_remaining_unit');
  }

  // bandwidth_remaining_value - computed: true, optional: false, required: false
  public get bandwidthRemainingValue() {
    return this.getStringAttribute('bandwidth_remaining_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // police_conform_action_drop - computed: true, optional: false, required: false
  public get policeConformActionDrop() {
    return this.getBooleanAttribute('police_conform_action_drop');
  }

  // police_conform_action_transmit - computed: true, optional: false, required: false
  public get policeConformActionTransmit() {
    return this.getBooleanAttribute('police_conform_action_transmit');
  }

  // police_exceed_action_drop - computed: true, optional: false, required: false
  public get policeExceedActionDrop() {
    return this.getBooleanAttribute('police_exceed_action_drop');
  }

  // police_exceed_action_transmit - computed: true, optional: false, required: false
  public get policeExceedActionTransmit() {
    return this.getBooleanAttribute('police_exceed_action_transmit');
  }

  // police_rate_unit - computed: true, optional: false, required: false
  public get policeRateUnit() {
    return this.getStringAttribute('police_rate_unit');
  }

  // police_rate_value - computed: true, optional: false, required: false
  public get policeRateValue() {
    return this.getStringAttribute('police_rate_value');
  }

  // police_violate_action_drop - computed: true, optional: false, required: false
  public get policeViolateActionDrop() {
    return this.getBooleanAttribute('police_violate_action_drop');
  }

  // police_violate_action_transmit - computed: true, optional: false, required: false
  public get policeViolateActionTransmit() {
    return this.getBooleanAttribute('police_violate_action_transmit');
  }

  // priority_level - computed: true, optional: false, required: false
  public get priorityLevel() {
    return this.getNumberAttribute('priority_level');
  }

  // queue_limits - computed: true, optional: false, required: false
  private _queueLimits = new DataIosxrPolicyMapQosClassesQueueLimitsList(this, "queue_limits", false);
  public get queueLimits() {
    return this._queueLimits;
  }

  // service_policy_name - computed: true, optional: false, required: false
  public get servicePolicyName() {
    return this.getStringAttribute('service_policy_name');
  }

  // set_dscp - computed: true, optional: false, required: false
  public get setDscp() {
    return this.getStringAttribute('set_dscp');
  }

  // set_mpls_experimental_topmost - computed: true, optional: false, required: false
  public get setMplsExperimentalTopmost() {
    return this.getNumberAttribute('set_mpls_experimental_topmost');
  }

  // shape_average_rate_unit - computed: true, optional: false, required: false
  public get shapeAverageRateUnit() {
    return this.getStringAttribute('shape_average_rate_unit');
  }

  // shape_average_rate_value - computed: true, optional: false, required: false
  public get shapeAverageRateValue() {
    return this.getStringAttribute('shape_average_rate_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIosxrPolicyMapQosClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrPolicyMapQosClassesOutputReference {
    return new DataIosxrPolicyMapQosClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/policy_map_qos iosxr_policy_map_qos}
*/
export class DataIosxrPolicyMapQos extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_policy_map_qos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrPolicyMapQos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrPolicyMapQos to import
  * @param importFromId The id of the existing DataIosxrPolicyMapQos that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/policy_map_qos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrPolicyMapQos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_policy_map_qos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/policy_map_qos iosxr_policy_map_qos} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrPolicyMapQosConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxrPolicyMapQosConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_policy_map_qos',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._policyMapName = config.policyMapName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classes - computed: true, optional: false, required: false
  private _classes = new DataIosxrPolicyMapQosClassesList(this, "classes", false);
  public get classes() {
    return this._classes;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // policy_map_name - computed: false, optional: false, required: true
  private _policyMapName?: string; 
  public get policyMapName() {
    return this.getStringAttribute('policy_map_name');
  }
  public set policyMapName(value: string) {
    this._policyMapName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyMapNameInput() {
    return this._policyMapName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      policy_map_name: cdktf.stringToTerraform(this._policyMapName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_map_name: {
        value: cdktf.stringToHclTerraform(this._policyMapName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
