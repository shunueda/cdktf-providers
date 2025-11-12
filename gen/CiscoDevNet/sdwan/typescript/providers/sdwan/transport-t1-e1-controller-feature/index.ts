// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportT1E1ControllerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#description TransportT1E1ControllerFeature#description}
  */
  readonly description?: string;
  /**
  * Controller tx-ex List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#entries TransportT1E1ControllerFeature#entries}
  */
  readonly entries: TransportT1E1ControllerFeatureEntries[] | cdktf.IResolvable;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#feature_profile_id TransportT1E1ControllerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#name TransportT1E1ControllerFeature#name}
  */
  readonly name: string;
  /**
  * Slot number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#slot TransportT1E1ControllerFeature#slot}
  */
  readonly slot?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#slot_variable TransportT1E1ControllerFeature#slot_variable}
  */
  readonly slotVariable?: string;
  /**
  * Card Type
  *   - Choices: `e1`, `t1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#type TransportT1E1ControllerFeature#type}
  */
  readonly type: string;
}
export interface TransportT1E1ControllerFeatureEntriesChannelGroups {
  /**
  * Number
  *   - Range: `0`-`23`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#channel_group TransportT1E1ControllerFeature#channel_group}
  */
  readonly channelGroup?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#channel_group_variable TransportT1E1ControllerFeature#channel_group_variable}
  */
  readonly channelGroupVariable?: string;
  /**
  * Time slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#time_slot TransportT1E1ControllerFeature#time_slot}
  */
  readonly timeSlot?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#time_slot_variable TransportT1E1ControllerFeature#time_slot_variable}
  */
  readonly timeSlotVariable?: string;
}

export function transportT1E1ControllerFeatureEntriesChannelGroupsToTerraform(struct?: TransportT1E1ControllerFeatureEntriesChannelGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_group: cdktf.numberToTerraform(struct!.channelGroup),
    channel_group_variable: cdktf.stringToTerraform(struct!.channelGroupVariable),
    time_slot: cdktf.stringToTerraform(struct!.timeSlot),
    time_slot_variable: cdktf.stringToTerraform(struct!.timeSlotVariable),
  }
}


export function transportT1E1ControllerFeatureEntriesChannelGroupsToHclTerraform(struct?: TransportT1E1ControllerFeatureEntriesChannelGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_group: {
      value: cdktf.numberToHclTerraform(struct!.channelGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_group_variable: {
      value: cdktf.stringToHclTerraform(struct!.channelGroupVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slot: {
      value: cdktf.stringToHclTerraform(struct!.timeSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_slot_variable: {
      value: cdktf.stringToHclTerraform(struct!.timeSlotVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportT1E1ControllerFeatureEntriesChannelGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportT1E1ControllerFeatureEntriesChannelGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelGroup = this._channelGroup;
    }
    if (this._channelGroupVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelGroupVariable = this._channelGroupVariable;
    }
    if (this._timeSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlot = this._timeSlot;
    }
    if (this._timeSlotVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeSlotVariable = this._timeSlotVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportT1E1ControllerFeatureEntriesChannelGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelGroup = undefined;
      this._channelGroupVariable = undefined;
      this._timeSlot = undefined;
      this._timeSlotVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelGroup = value.channelGroup;
      this._channelGroupVariable = value.channelGroupVariable;
      this._timeSlot = value.timeSlot;
      this._timeSlotVariable = value.timeSlotVariable;
    }
  }

  // channel_group - computed: false, optional: true, required: false
  private _channelGroup?: number; 
  public get channelGroup() {
    return this.getNumberAttribute('channel_group');
  }
  public set channelGroup(value: number) {
    this._channelGroup = value;
  }
  public resetChannelGroup() {
    this._channelGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupInput() {
    return this._channelGroup;
  }

  // channel_group_variable - computed: false, optional: true, required: false
  private _channelGroupVariable?: string; 
  public get channelGroupVariable() {
    return this.getStringAttribute('channel_group_variable');
  }
  public set channelGroupVariable(value: string) {
    this._channelGroupVariable = value;
  }
  public resetChannelGroupVariable() {
    this._channelGroupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupVariableInput() {
    return this._channelGroupVariable;
  }

  // time_slot - computed: false, optional: true, required: false
  private _timeSlot?: string; 
  public get timeSlot() {
    return this.getStringAttribute('time_slot');
  }
  public set timeSlot(value: string) {
    this._timeSlot = value;
  }
  public resetTimeSlot() {
    this._timeSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotInput() {
    return this._timeSlot;
  }

  // time_slot_variable - computed: false, optional: true, required: false
  private _timeSlotVariable?: string; 
  public get timeSlotVariable() {
    return this.getStringAttribute('time_slot_variable');
  }
  public set timeSlotVariable(value: string) {
    this._timeSlotVariable = value;
  }
  public resetTimeSlotVariable() {
    this._timeSlotVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSlotVariableInput() {
    return this._timeSlotVariable;
  }
}

export class TransportT1E1ControllerFeatureEntriesChannelGroupsList extends cdktf.ComplexList {
  public internalValue? : TransportT1E1ControllerFeatureEntriesChannelGroups[] | cdktf.IResolvable

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
  public get(index: number): TransportT1E1ControllerFeatureEntriesChannelGroupsOutputReference {
    return new TransportT1E1ControllerFeatureEntriesChannelGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransportT1E1ControllerFeatureEntries {
  /**
  * Cable Config
  *   - Choices: `short`, `long`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#cable_length TransportT1E1ControllerFeature#cable_length}
  */
  readonly cableLength?: string;
  /**
  * Channel Group List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#channel_groups TransportT1E1ControllerFeature#channel_groups}
  */
  readonly channelGroups?: TransportT1E1ControllerFeatureEntriesChannelGroups[] | cdktf.IResolvable;
  /**
  * Clock Source
  *   - Choices: `line`, `internal`, `loop-timed`, `network`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#clock_source TransportT1E1ControllerFeature#clock_source}
  */
  readonly clockSource?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#description TransportT1E1ControllerFeature#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#description_variable TransportT1E1ControllerFeature#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * Card Type
  *   - Choices: `E1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#e1_description TransportT1E1ControllerFeature#e1_description}
  */
  readonly e1Description?: string;
  /**
  * Framing
  *   - Choices: `crc4`, `no-crc4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#e1_framing TransportT1E1ControllerFeature#e1_framing}
  */
  readonly e1Framing?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#e1_framing_variable TransportT1E1ControllerFeature#e1_framing_variable}
  */
  readonly e1FramingVariable?: string;
  /**
  * LineCode
  *   - Choices: `ami`, `hdb3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#e1_linecode TransportT1E1ControllerFeature#e1_linecode}
  */
  readonly e1Linecode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#e1_linecode_variable TransportT1E1ControllerFeature#e1_linecode_variable}
  */
  readonly e1LinecodeVariable?: string;
  /**
  * length, Attribute conditional on `cable_length` being equal to `long`
  *   - Choices: `-15db`, `-22.5db`, `-7.5db`, `0db`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#length_long TransportT1E1ControllerFeature#length_long}
  */
  readonly lengthLong?: string;
  /**
  * Variable name, Attribute conditional on `cable_length` being equal to `long`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#length_long_variable TransportT1E1ControllerFeature#length_long_variable}
  */
  readonly lengthLongVariable?: string;
  /**
  * length, Attribute conditional on `cable_length` being equal to `short`
  *   - Choices: `110ft`, `220ft`, `330ft`, `440ft`, `550ft`, `660ft`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#length_short TransportT1E1ControllerFeature#length_short}
  */
  readonly lengthShort?: string;
  /**
  * Variable name, Attribute conditional on `cable_length` being equal to `short`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#length_short_variable TransportT1E1ControllerFeature#length_short_variable}
  */
  readonly lengthShortVariable?: string;
  /**
  * Line Mode
  *   - Choices: `secondary`, `primary`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#line_mode TransportT1E1ControllerFeature#line_mode}
  */
  readonly lineMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#line_mode_variable TransportT1E1ControllerFeature#line_mode_variable}
  */
  readonly lineModeVariable?: string;
  /**
  * Card Type
  *   - Choices: `T1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#t1_description TransportT1E1ControllerFeature#t1_description}
  */
  readonly t1Description?: string;
  /**
  * Framing
  *   - Choices: `esf`, `sf`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#t1_framing TransportT1E1ControllerFeature#t1_framing}
  */
  readonly t1Framing?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#t1_framing_variable TransportT1E1ControllerFeature#t1_framing_variable}
  */
  readonly t1FramingVariable?: string;
  /**
  * LineCode
  *   - Choices: `ami`, `b8zs`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#t1_linecode TransportT1E1ControllerFeature#t1_linecode}
  */
  readonly t1Linecode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#t1_linecode_variable TransportT1E1ControllerFeature#t1_linecode_variable}
  */
  readonly t1LinecodeVariable?: string;
}

export function transportT1E1ControllerFeatureEntriesToTerraform(struct?: TransportT1E1ControllerFeatureEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cable_length: cdktf.stringToTerraform(struct!.cableLength),
    channel_groups: cdktf.listMapper(transportT1E1ControllerFeatureEntriesChannelGroupsToTerraform, false)(struct!.channelGroups),
    clock_source: cdktf.stringToTerraform(struct!.clockSource),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    e1_description: cdktf.stringToTerraform(struct!.e1Description),
    e1_framing: cdktf.stringToTerraform(struct!.e1Framing),
    e1_framing_variable: cdktf.stringToTerraform(struct!.e1FramingVariable),
    e1_linecode: cdktf.stringToTerraform(struct!.e1Linecode),
    e1_linecode_variable: cdktf.stringToTerraform(struct!.e1LinecodeVariable),
    length_long: cdktf.stringToTerraform(struct!.lengthLong),
    length_long_variable: cdktf.stringToTerraform(struct!.lengthLongVariable),
    length_short: cdktf.stringToTerraform(struct!.lengthShort),
    length_short_variable: cdktf.stringToTerraform(struct!.lengthShortVariable),
    line_mode: cdktf.stringToTerraform(struct!.lineMode),
    line_mode_variable: cdktf.stringToTerraform(struct!.lineModeVariable),
    t1_description: cdktf.stringToTerraform(struct!.t1Description),
    t1_framing: cdktf.stringToTerraform(struct!.t1Framing),
    t1_framing_variable: cdktf.stringToTerraform(struct!.t1FramingVariable),
    t1_linecode: cdktf.stringToTerraform(struct!.t1Linecode),
    t1_linecode_variable: cdktf.stringToTerraform(struct!.t1LinecodeVariable),
  }
}


export function transportT1E1ControllerFeatureEntriesToHclTerraform(struct?: TransportT1E1ControllerFeatureEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cable_length: {
      value: cdktf.stringToHclTerraform(struct!.cableLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_groups: {
      value: cdktf.listMapperHcl(transportT1E1ControllerFeatureEntriesChannelGroupsToHclTerraform, false)(struct!.channelGroups),
      isBlock: true,
      type: "list",
      storageClassType: "TransportT1E1ControllerFeatureEntriesChannelGroupsList",
    },
    clock_source: {
      value: cdktf.stringToHclTerraform(struct!.clockSource),
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
    description_variable: {
      value: cdktf.stringToHclTerraform(struct!.descriptionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e1_description: {
      value: cdktf.stringToHclTerraform(struct!.e1Description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e1_framing: {
      value: cdktf.stringToHclTerraform(struct!.e1Framing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e1_framing_variable: {
      value: cdktf.stringToHclTerraform(struct!.e1FramingVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e1_linecode: {
      value: cdktf.stringToHclTerraform(struct!.e1Linecode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e1_linecode_variable: {
      value: cdktf.stringToHclTerraform(struct!.e1LinecodeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length_long: {
      value: cdktf.stringToHclTerraform(struct!.lengthLong),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length_long_variable: {
      value: cdktf.stringToHclTerraform(struct!.lengthLongVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length_short: {
      value: cdktf.stringToHclTerraform(struct!.lengthShort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    length_short_variable: {
      value: cdktf.stringToHclTerraform(struct!.lengthShortVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_mode: {
      value: cdktf.stringToHclTerraform(struct!.lineMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line_mode_variable: {
      value: cdktf.stringToHclTerraform(struct!.lineModeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t1_description: {
      value: cdktf.stringToHclTerraform(struct!.t1Description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t1_framing: {
      value: cdktf.stringToHclTerraform(struct!.t1Framing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t1_framing_variable: {
      value: cdktf.stringToHclTerraform(struct!.t1FramingVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t1_linecode: {
      value: cdktf.stringToHclTerraform(struct!.t1Linecode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    t1_linecode_variable: {
      value: cdktf.stringToHclTerraform(struct!.t1LinecodeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportT1E1ControllerFeatureEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportT1E1ControllerFeatureEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cableLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.cableLength = this._cableLength;
    }
    if (this._channelGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelGroups = this._channelGroups?.internalValue;
    }
    if (this._clockSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockSource = this._clockSource;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._e1Description !== undefined) {
      hasAnyValues = true;
      internalValueResult.e1Description = this._e1Description;
    }
    if (this._e1Framing !== undefined) {
      hasAnyValues = true;
      internalValueResult.e1Framing = this._e1Framing;
    }
    if (this._e1FramingVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.e1FramingVariable = this._e1FramingVariable;
    }
    if (this._e1Linecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.e1Linecode = this._e1Linecode;
    }
    if (this._e1LinecodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.e1LinecodeVariable = this._e1LinecodeVariable;
    }
    if (this._lengthLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthLong = this._lengthLong;
    }
    if (this._lengthLongVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthLongVariable = this._lengthLongVariable;
    }
    if (this._lengthShort !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthShort = this._lengthShort;
    }
    if (this._lengthShortVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lengthShortVariable = this._lengthShortVariable;
    }
    if (this._lineMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMode = this._lineMode;
    }
    if (this._lineModeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineModeVariable = this._lineModeVariable;
    }
    if (this._t1Description !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1Description = this._t1Description;
    }
    if (this._t1Framing !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1Framing = this._t1Framing;
    }
    if (this._t1FramingVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1FramingVariable = this._t1FramingVariable;
    }
    if (this._t1Linecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1Linecode = this._t1Linecode;
    }
    if (this._t1LinecodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.t1LinecodeVariable = this._t1LinecodeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportT1E1ControllerFeatureEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cableLength = undefined;
      this._channelGroups.internalValue = undefined;
      this._clockSource = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._e1Description = undefined;
      this._e1Framing = undefined;
      this._e1FramingVariable = undefined;
      this._e1Linecode = undefined;
      this._e1LinecodeVariable = undefined;
      this._lengthLong = undefined;
      this._lengthLongVariable = undefined;
      this._lengthShort = undefined;
      this._lengthShortVariable = undefined;
      this._lineMode = undefined;
      this._lineModeVariable = undefined;
      this._t1Description = undefined;
      this._t1Framing = undefined;
      this._t1FramingVariable = undefined;
      this._t1Linecode = undefined;
      this._t1LinecodeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cableLength = value.cableLength;
      this._channelGroups.internalValue = value.channelGroups;
      this._clockSource = value.clockSource;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._e1Description = value.e1Description;
      this._e1Framing = value.e1Framing;
      this._e1FramingVariable = value.e1FramingVariable;
      this._e1Linecode = value.e1Linecode;
      this._e1LinecodeVariable = value.e1LinecodeVariable;
      this._lengthLong = value.lengthLong;
      this._lengthLongVariable = value.lengthLongVariable;
      this._lengthShort = value.lengthShort;
      this._lengthShortVariable = value.lengthShortVariable;
      this._lineMode = value.lineMode;
      this._lineModeVariable = value.lineModeVariable;
      this._t1Description = value.t1Description;
      this._t1Framing = value.t1Framing;
      this._t1FramingVariable = value.t1FramingVariable;
      this._t1Linecode = value.t1Linecode;
      this._t1LinecodeVariable = value.t1LinecodeVariable;
    }
  }

  // cable_length - computed: false, optional: true, required: false
  private _cableLength?: string; 
  public get cableLength() {
    return this.getStringAttribute('cable_length');
  }
  public set cableLength(value: string) {
    this._cableLength = value;
  }
  public resetCableLength() {
    this._cableLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cableLengthInput() {
    return this._cableLength;
  }

  // channel_groups - computed: false, optional: true, required: false
  private _channelGroups = new TransportT1E1ControllerFeatureEntriesChannelGroupsList(this, "channel_groups", false);
  public get channelGroups() {
    return this._channelGroups;
  }
  public putChannelGroups(value: TransportT1E1ControllerFeatureEntriesChannelGroups[] | cdktf.IResolvable) {
    this._channelGroups.internalValue = value;
  }
  public resetChannelGroups() {
    this._channelGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelGroupsInput() {
    return this._channelGroups.internalValue;
  }

  // clock_source - computed: false, optional: true, required: false
  private _clockSource?: string; 
  public get clockSource() {
    return this.getStringAttribute('clock_source');
  }
  public set clockSource(value: string) {
    this._clockSource = value;
  }
  public resetClockSource() {
    this._clockSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSourceInput() {
    return this._clockSource;
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

  // description_variable - computed: false, optional: true, required: false
  private _descriptionVariable?: string; 
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }
  public set descriptionVariable(value: string) {
    this._descriptionVariable = value;
  }
  public resetDescriptionVariable() {
    this._descriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionVariableInput() {
    return this._descriptionVariable;
  }

  // e1_description - computed: false, optional: true, required: false
  private _e1Description?: string; 
  public get e1Description() {
    return this.getStringAttribute('e1_description');
  }
  public set e1Description(value: string) {
    this._e1Description = value;
  }
  public resetE1Description() {
    this._e1Description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e1DescriptionInput() {
    return this._e1Description;
  }

  // e1_framing - computed: false, optional: true, required: false
  private _e1Framing?: string; 
  public get e1Framing() {
    return this.getStringAttribute('e1_framing');
  }
  public set e1Framing(value: string) {
    this._e1Framing = value;
  }
  public resetE1Framing() {
    this._e1Framing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e1FramingInput() {
    return this._e1Framing;
  }

  // e1_framing_variable - computed: false, optional: true, required: false
  private _e1FramingVariable?: string; 
  public get e1FramingVariable() {
    return this.getStringAttribute('e1_framing_variable');
  }
  public set e1FramingVariable(value: string) {
    this._e1FramingVariable = value;
  }
  public resetE1FramingVariable() {
    this._e1FramingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e1FramingVariableInput() {
    return this._e1FramingVariable;
  }

  // e1_linecode - computed: false, optional: true, required: false
  private _e1Linecode?: string; 
  public get e1Linecode() {
    return this.getStringAttribute('e1_linecode');
  }
  public set e1Linecode(value: string) {
    this._e1Linecode = value;
  }
  public resetE1Linecode() {
    this._e1Linecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e1LinecodeInput() {
    return this._e1Linecode;
  }

  // e1_linecode_variable - computed: false, optional: true, required: false
  private _e1LinecodeVariable?: string; 
  public get e1LinecodeVariable() {
    return this.getStringAttribute('e1_linecode_variable');
  }
  public set e1LinecodeVariable(value: string) {
    this._e1LinecodeVariable = value;
  }
  public resetE1LinecodeVariable() {
    this._e1LinecodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get e1LinecodeVariableInput() {
    return this._e1LinecodeVariable;
  }

  // length_long - computed: false, optional: true, required: false
  private _lengthLong?: string; 
  public get lengthLong() {
    return this.getStringAttribute('length_long');
  }
  public set lengthLong(value: string) {
    this._lengthLong = value;
  }
  public resetLengthLong() {
    this._lengthLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthLongInput() {
    return this._lengthLong;
  }

  // length_long_variable - computed: false, optional: true, required: false
  private _lengthLongVariable?: string; 
  public get lengthLongVariable() {
    return this.getStringAttribute('length_long_variable');
  }
  public set lengthLongVariable(value: string) {
    this._lengthLongVariable = value;
  }
  public resetLengthLongVariable() {
    this._lengthLongVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthLongVariableInput() {
    return this._lengthLongVariable;
  }

  // length_short - computed: false, optional: true, required: false
  private _lengthShort?: string; 
  public get lengthShort() {
    return this.getStringAttribute('length_short');
  }
  public set lengthShort(value: string) {
    this._lengthShort = value;
  }
  public resetLengthShort() {
    this._lengthShort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthShortInput() {
    return this._lengthShort;
  }

  // length_short_variable - computed: false, optional: true, required: false
  private _lengthShortVariable?: string; 
  public get lengthShortVariable() {
    return this.getStringAttribute('length_short_variable');
  }
  public set lengthShortVariable(value: string) {
    this._lengthShortVariable = value;
  }
  public resetLengthShortVariable() {
    this._lengthShortVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthShortVariableInput() {
    return this._lengthShortVariable;
  }

  // line_mode - computed: false, optional: true, required: false
  private _lineMode?: string; 
  public get lineMode() {
    return this.getStringAttribute('line_mode');
  }
  public set lineMode(value: string) {
    this._lineMode = value;
  }
  public resetLineMode() {
    this._lineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineModeInput() {
    return this._lineMode;
  }

  // line_mode_variable - computed: false, optional: true, required: false
  private _lineModeVariable?: string; 
  public get lineModeVariable() {
    return this.getStringAttribute('line_mode_variable');
  }
  public set lineModeVariable(value: string) {
    this._lineModeVariable = value;
  }
  public resetLineModeVariable() {
    this._lineModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineModeVariableInput() {
    return this._lineModeVariable;
  }

  // t1_description - computed: false, optional: true, required: false
  private _t1Description?: string; 
  public get t1Description() {
    return this.getStringAttribute('t1_description');
  }
  public set t1Description(value: string) {
    this._t1Description = value;
  }
  public resetT1Description() {
    this._t1Description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1DescriptionInput() {
    return this._t1Description;
  }

  // t1_framing - computed: false, optional: true, required: false
  private _t1Framing?: string; 
  public get t1Framing() {
    return this.getStringAttribute('t1_framing');
  }
  public set t1Framing(value: string) {
    this._t1Framing = value;
  }
  public resetT1Framing() {
    this._t1Framing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1FramingInput() {
    return this._t1Framing;
  }

  // t1_framing_variable - computed: false, optional: true, required: false
  private _t1FramingVariable?: string; 
  public get t1FramingVariable() {
    return this.getStringAttribute('t1_framing_variable');
  }
  public set t1FramingVariable(value: string) {
    this._t1FramingVariable = value;
  }
  public resetT1FramingVariable() {
    this._t1FramingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1FramingVariableInput() {
    return this._t1FramingVariable;
  }

  // t1_linecode - computed: false, optional: true, required: false
  private _t1Linecode?: string; 
  public get t1Linecode() {
    return this.getStringAttribute('t1_linecode');
  }
  public set t1Linecode(value: string) {
    this._t1Linecode = value;
  }
  public resetT1Linecode() {
    this._t1Linecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1LinecodeInput() {
    return this._t1Linecode;
  }

  // t1_linecode_variable - computed: false, optional: true, required: false
  private _t1LinecodeVariable?: string; 
  public get t1LinecodeVariable() {
    return this.getStringAttribute('t1_linecode_variable');
  }
  public set t1LinecodeVariable(value: string) {
    this._t1LinecodeVariable = value;
  }
  public resetT1LinecodeVariable() {
    this._t1LinecodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t1LinecodeVariableInput() {
    return this._t1LinecodeVariable;
  }
}

export class TransportT1E1ControllerFeatureEntriesList extends cdktf.ComplexList {
  public internalValue? : TransportT1E1ControllerFeatureEntries[] | cdktf.IResolvable

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
  public get(index: number): TransportT1E1ControllerFeatureEntriesOutputReference {
    return new TransportT1E1ControllerFeatureEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature sdwan_transport_t1_e1_controller_feature}
*/
export class TransportT1E1ControllerFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_t1_e1_controller_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportT1E1ControllerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportT1E1ControllerFeature to import
  * @param importFromId The id of the existing TransportT1E1ControllerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportT1E1ControllerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_t1_e1_controller_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_t1_e1_controller_feature sdwan_transport_t1_e1_controller_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportT1E1ControllerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportT1E1ControllerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_t1_e1_controller_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
    this._entries.internalValue = config.entries;
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._slot = config.slot;
    this._slotVariable = config.slotVariable;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entries - computed: false, optional: false, required: true
  private _entries = new TransportT1E1ControllerFeatureEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: TransportT1E1ControllerFeatureEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
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

  // slot - computed: false, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // slot_variable - computed: false, optional: true, required: false
  private _slotVariable?: string; 
  public get slotVariable() {
    return this.getStringAttribute('slot_variable');
  }
  public set slotVariable(value: string) {
    this._slotVariable = value;
  }
  public resetSlotVariable() {
    this._slotVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotVariableInput() {
    return this._slotVariable;
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
      entries: cdktf.listMapper(transportT1E1ControllerFeatureEntriesToTerraform, false)(this._entries.internalValue),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      slot: cdktf.stringToTerraform(this._slot),
      slot_variable: cdktf.stringToTerraform(this._slotVariable),
      type: cdktf.stringToTerraform(this._type),
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
      entries: {
        value: cdktf.listMapperHcl(transportT1E1ControllerFeatureEntriesToHclTerraform, false)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportT1E1ControllerFeatureEntriesList",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
      slot: {
        value: cdktf.stringToHclTerraform(this._slot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slot_variable: {
        value: cdktf.stringToHclTerraform(this._slotVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
