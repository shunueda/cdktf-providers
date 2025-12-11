// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/policy_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxePolicyMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/policy_map#device DataIosxePolicyMap#device}
  */
  readonly device?: string;
  /**
  * Name of the policy map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/policy_map#name DataIosxePolicyMap#name}
  */
  readonly name: string;
}
export interface DataIosxePolicyMapClassesActions {
}

export function dataIosxePolicyMapClassesActionsToTerraform(struct?: DataIosxePolicyMapClassesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePolicyMapClassesActionsToHclTerraform(struct?: DataIosxePolicyMapClassesActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePolicyMapClassesActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePolicyMapClassesActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePolicyMapClassesActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_bits - computed: true, optional: false, required: false
  public get bandwidthBits() {
    return this.getNumberAttribute('bandwidth_bits');
  }

  // bandwidth_percent - computed: true, optional: false, required: false
  public get bandwidthPercent() {
    return this.getNumberAttribute('bandwidth_percent');
  }

  // bandwidth_remaining_option - computed: true, optional: false, required: false
  public get bandwidthRemainingOption() {
    return this.getStringAttribute('bandwidth_remaining_option');
  }

  // bandwidth_remaining_percent - computed: true, optional: false, required: false
  public get bandwidthRemainingPercent() {
    return this.getNumberAttribute('bandwidth_remaining_percent');
  }

  // bandwidth_remaining_ratio - computed: true, optional: false, required: false
  public get bandwidthRemainingRatio() {
    return this.getNumberAttribute('bandwidth_remaining_ratio');
  }

  // police_target_bitrate - computed: true, optional: false, required: false
  public get policeTargetBitrate() {
    return this.getNumberAttribute('police_target_bitrate');
  }

  // police_target_bitrate_conform_burst_byte - computed: true, optional: false, required: false
  public get policeTargetBitrateConformBurstByte() {
    return this.getNumberAttribute('police_target_bitrate_conform_burst_byte');
  }

  // police_target_bitrate_conform_transmit - computed: true, optional: false, required: false
  public get policeTargetBitrateConformTransmit() {
    return this.getBooleanAttribute('police_target_bitrate_conform_transmit');
  }

  // police_target_bitrate_exceed_transmit - computed: true, optional: false, required: false
  public get policeTargetBitrateExceedTransmit() {
    return this.getBooleanAttribute('police_target_bitrate_exceed_transmit');
  }

  // police_target_bitrate_excess_burst_byte - computed: true, optional: false, required: false
  public get policeTargetBitrateExcessBurstByte() {
    return this.getNumberAttribute('police_target_bitrate_excess_burst_byte');
  }

  // priority_burst - computed: true, optional: false, required: false
  public get priorityBurst() {
    return this.getNumberAttribute('priority_burst');
  }

  // priority_level - computed: true, optional: false, required: false
  public get priorityLevel() {
    return this.getNumberAttribute('priority_level');
  }

  // queue_limit - computed: true, optional: false, required: false
  public get queueLimit() {
    return this.getNumberAttribute('queue_limit');
  }

  // queue_limit_type - computed: true, optional: false, required: false
  public get queueLimitType() {
    return this.getStringAttribute('queue_limit_type');
  }

  // shape_average_bit_rate - computed: true, optional: false, required: false
  public get shapeAverageBitRate() {
    return this.getNumberAttribute('shape_average_bit_rate');
  }

  // shape_average_bits_per_interval_excess - computed: true, optional: false, required: false
  public get shapeAverageBitsPerIntervalExcess() {
    return this.getNumberAttribute('shape_average_bits_per_interval_excess');
  }

  // shape_average_bits_per_interval_sustained - computed: true, optional: false, required: false
  public get shapeAverageBitsPerIntervalSustained() {
    return this.getNumberAttribute('shape_average_bits_per_interval_sustained');
  }

  // shape_average_burst_size_sustained - computed: true, optional: false, required: false
  public get shapeAverageBurstSizeSustained() {
    return this.getNumberAttribute('shape_average_burst_size_sustained');
  }

  // shape_average_ms - computed: true, optional: false, required: false
  public get shapeAverageMs() {
    return this.getBooleanAttribute('shape_average_ms');
  }

  // shape_average_percent - computed: true, optional: false, required: false
  public get shapeAveragePercent() {
    return this.getNumberAttribute('shape_average_percent');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIosxePolicyMapClassesActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePolicyMapClassesActionsOutputReference {
    return new DataIosxePolicyMapClassesActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxePolicyMapClasses {
}

export function dataIosxePolicyMapClassesToTerraform(struct?: DataIosxePolicyMapClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxePolicyMapClassesToHclTerraform(struct?: DataIosxePolicyMapClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxePolicyMapClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxePolicyMapClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxePolicyMapClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions - computed: true, optional: false, required: false
  private _actions = new DataIosxePolicyMapClassesActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataIosxePolicyMapClassesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxePolicyMapClassesOutputReference {
    return new DataIosxePolicyMapClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/policy_map iosxe_policy_map}
*/
export class DataIosxePolicyMap extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_policy_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxePolicyMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxePolicyMap to import
  * @param importFromId The id of the existing DataIosxePolicyMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/policy_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxePolicyMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_policy_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/policy_map iosxe_policy_map} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxePolicyMapConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxePolicyMapConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_policy_map',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // classes - computed: true, optional: false, required: false
  private _classes = new DataIosxePolicyMapClassesList(this, "classes", false);
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

  // subscriber - computed: true, optional: false, required: false
  public get subscriber() {
    return this.getBooleanAttribute('subscriber');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
