// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_t1_e1_controller_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanTransportT1E1ControllerFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_t1_e1_controller_feature#feature_profile_id DataSdwanTransportT1E1ControllerFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_t1_e1_controller_feature#id DataSdwanTransportT1E1ControllerFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroups {
}

export function dataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsToTerraform(struct?: DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsToHclTerraform(struct?: DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_group - computed: true, optional: false, required: false
  public get channelGroup() {
    return this.getNumberAttribute('channel_group');
  }

  // channel_group_variable - computed: true, optional: false, required: false
  public get channelGroupVariable() {
    return this.getStringAttribute('channel_group_variable');
  }

  // time_slot - computed: true, optional: false, required: false
  public get timeSlot() {
    return this.getStringAttribute('time_slot');
  }

  // time_slot_variable - computed: true, optional: false, required: false
  public get timeSlotVariable() {
    return this.getStringAttribute('time_slot_variable');
  }
}

export class DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsOutputReference {
    return new DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanTransportT1E1ControllerFeatureEntries {
}

export function dataSdwanTransportT1E1ControllerFeatureEntriesToTerraform(struct?: DataSdwanTransportT1E1ControllerFeatureEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanTransportT1E1ControllerFeatureEntriesToHclTerraform(struct?: DataSdwanTransportT1E1ControllerFeatureEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanTransportT1E1ControllerFeatureEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanTransportT1E1ControllerFeatureEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanTransportT1E1ControllerFeatureEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cable_length - computed: true, optional: false, required: false
  public get cableLength() {
    return this.getStringAttribute('cable_length');
  }

  // channel_groups - computed: true, optional: false, required: false
  private _channelGroups = new DataSdwanTransportT1E1ControllerFeatureEntriesChannelGroupsList(this, "channel_groups", false);
  public get channelGroups() {
    return this._channelGroups;
  }

  // clock_source - computed: true, optional: false, required: false
  public get clockSource() {
    return this.getStringAttribute('clock_source');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // description_variable - computed: true, optional: false, required: false
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }

  // e1_description - computed: true, optional: false, required: false
  public get e1Description() {
    return this.getStringAttribute('e1_description');
  }

  // e1_framing - computed: true, optional: false, required: false
  public get e1Framing() {
    return this.getStringAttribute('e1_framing');
  }

  // e1_framing_variable - computed: true, optional: false, required: false
  public get e1FramingVariable() {
    return this.getStringAttribute('e1_framing_variable');
  }

  // e1_linecode - computed: true, optional: false, required: false
  public get e1Linecode() {
    return this.getStringAttribute('e1_linecode');
  }

  // e1_linecode_variable - computed: true, optional: false, required: false
  public get e1LinecodeVariable() {
    return this.getStringAttribute('e1_linecode_variable');
  }

  // length_long - computed: true, optional: false, required: false
  public get lengthLong() {
    return this.getStringAttribute('length_long');
  }

  // length_long_variable - computed: true, optional: false, required: false
  public get lengthLongVariable() {
    return this.getStringAttribute('length_long_variable');
  }

  // length_short - computed: true, optional: false, required: false
  public get lengthShort() {
    return this.getStringAttribute('length_short');
  }

  // length_short_variable - computed: true, optional: false, required: false
  public get lengthShortVariable() {
    return this.getStringAttribute('length_short_variable');
  }

  // line_mode - computed: true, optional: false, required: false
  public get lineMode() {
    return this.getStringAttribute('line_mode');
  }

  // line_mode_variable - computed: true, optional: false, required: false
  public get lineModeVariable() {
    return this.getStringAttribute('line_mode_variable');
  }

  // t1_description - computed: true, optional: false, required: false
  public get t1Description() {
    return this.getStringAttribute('t1_description');
  }

  // t1_framing - computed: true, optional: false, required: false
  public get t1Framing() {
    return this.getStringAttribute('t1_framing');
  }

  // t1_framing_variable - computed: true, optional: false, required: false
  public get t1FramingVariable() {
    return this.getStringAttribute('t1_framing_variable');
  }

  // t1_linecode - computed: true, optional: false, required: false
  public get t1Linecode() {
    return this.getStringAttribute('t1_linecode');
  }

  // t1_linecode_variable - computed: true, optional: false, required: false
  public get t1LinecodeVariable() {
    return this.getStringAttribute('t1_linecode_variable');
  }
}

export class DataSdwanTransportT1E1ControllerFeatureEntriesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanTransportT1E1ControllerFeatureEntriesOutputReference {
    return new DataSdwanTransportT1E1ControllerFeatureEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_t1_e1_controller_feature sdwan_transport_t1_e1_controller_feature}
*/
export class DataSdwanTransportT1E1ControllerFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_t1_e1_controller_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanTransportT1E1ControllerFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanTransportT1E1ControllerFeature to import
  * @param importFromId The id of the existing DataSdwanTransportT1E1ControllerFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_t1_e1_controller_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanTransportT1E1ControllerFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_t1_e1_controller_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/transport_t1_e1_controller_feature sdwan_transport_t1_e1_controller_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanTransportT1E1ControllerFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanTransportT1E1ControllerFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_t1_e1_controller_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entries - computed: true, optional: false, required: false
  private _entries = new DataSdwanTransportT1E1ControllerFeatureEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slot - computed: true, optional: false, required: false
  public get slot() {
    return this.getStringAttribute('slot');
  }

  // slot_variable - computed: true, optional: false, required: false
  public get slotVariable() {
    return this.getStringAttribute('slot_variable');
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
