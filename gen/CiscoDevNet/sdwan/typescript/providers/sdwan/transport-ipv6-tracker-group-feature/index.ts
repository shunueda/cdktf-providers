// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransportIpv6TrackerGroupFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#description TransportIpv6TrackerGroupFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#feature_profile_id TransportIpv6TrackerGroupFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#name TransportIpv6TrackerGroupFeature#name}
  */
  readonly name: string;
  /**
  * tracker ref list combine boolean and or
  *   - Choices: `and`, `or`
  *   - Default value: `or`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#tracker_boolean TransportIpv6TrackerGroupFeature#tracker_boolean}
  */
  readonly trackerBoolean?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#tracker_boolean_variable TransportIpv6TrackerGroupFeature#tracker_boolean_variable}
  */
  readonly trackerBooleanVariable?: string;
  /**
  * trackers ref list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#tracker_elements TransportIpv6TrackerGroupFeature#tracker_elements}
  */
  readonly trackerElements?: TransportIpv6TrackerGroupFeatureTrackerElements[] | cdktf.IResolvable;
  /**
  * Tracker Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#tracker_name TransportIpv6TrackerGroupFeature#tracker_name}
  */
  readonly trackerName: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#tracker_name_variable TransportIpv6TrackerGroupFeature#tracker_name_variable}
  */
  readonly trackerNameVariable?: string;
}
export interface TransportIpv6TrackerGroupFeatureTrackerElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#tracker_id TransportIpv6TrackerGroupFeature#tracker_id}
  */
  readonly trackerId?: string;
}

export function transportIpv6TrackerGroupFeatureTrackerElementsToTerraform(struct?: TransportIpv6TrackerGroupFeatureTrackerElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tracker_id: cdktf.stringToTerraform(struct!.trackerId),
  }
}


export function transportIpv6TrackerGroupFeatureTrackerElementsToHclTerraform(struct?: TransportIpv6TrackerGroupFeatureTrackerElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tracker_id: {
      value: cdktf.stringToHclTerraform(struct!.trackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransportIpv6TrackerGroupFeatureTrackerElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransportIpv6TrackerGroupFeatureTrackerElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerId = this._trackerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransportIpv6TrackerGroupFeatureTrackerElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trackerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trackerId = value.trackerId;
    }
  }

  // tracker_id - computed: false, optional: true, required: false
  private _trackerId?: string; 
  public get trackerId() {
    return this.getStringAttribute('tracker_id');
  }
  public set trackerId(value: string) {
    this._trackerId = value;
  }
  public resetTrackerId() {
    this._trackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerIdInput() {
    return this._trackerId;
  }
}

export class TransportIpv6TrackerGroupFeatureTrackerElementsList extends cdktf.ComplexList {
  public internalValue? : TransportIpv6TrackerGroupFeatureTrackerElements[] | cdktf.IResolvable

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
  public get(index: number): TransportIpv6TrackerGroupFeatureTrackerElementsOutputReference {
    return new TransportIpv6TrackerGroupFeatureTrackerElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature sdwan_transport_ipv6_tracker_group_feature}
*/
export class TransportIpv6TrackerGroupFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_transport_ipv6_tracker_group_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransportIpv6TrackerGroupFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransportIpv6TrackerGroupFeature to import
  * @param importFromId The id of the existing TransportIpv6TrackerGroupFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransportIpv6TrackerGroupFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_transport_ipv6_tracker_group_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/transport_ipv6_tracker_group_feature sdwan_transport_ipv6_tracker_group_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransportIpv6TrackerGroupFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: TransportIpv6TrackerGroupFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_transport_ipv6_tracker_group_feature',
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
    this._featureProfileId = config.featureProfileId;
    this._name = config.name;
    this._trackerBoolean = config.trackerBoolean;
    this._trackerBooleanVariable = config.trackerBooleanVariable;
    this._trackerElements.internalValue = config.trackerElements;
    this._trackerName = config.trackerName;
    this._trackerNameVariable = config.trackerNameVariable;
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

  // tracker_boolean - computed: false, optional: true, required: false
  private _trackerBoolean?: string; 
  public get trackerBoolean() {
    return this.getStringAttribute('tracker_boolean');
  }
  public set trackerBoolean(value: string) {
    this._trackerBoolean = value;
  }
  public resetTrackerBoolean() {
    this._trackerBoolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerBooleanInput() {
    return this._trackerBoolean;
  }

  // tracker_boolean_variable - computed: false, optional: true, required: false
  private _trackerBooleanVariable?: string; 
  public get trackerBooleanVariable() {
    return this.getStringAttribute('tracker_boolean_variable');
  }
  public set trackerBooleanVariable(value: string) {
    this._trackerBooleanVariable = value;
  }
  public resetTrackerBooleanVariable() {
    this._trackerBooleanVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerBooleanVariableInput() {
    return this._trackerBooleanVariable;
  }

  // tracker_elements - computed: false, optional: true, required: false
  private _trackerElements = new TransportIpv6TrackerGroupFeatureTrackerElementsList(this, "tracker_elements", false);
  public get trackerElements() {
    return this._trackerElements;
  }
  public putTrackerElements(value: TransportIpv6TrackerGroupFeatureTrackerElements[] | cdktf.IResolvable) {
    this._trackerElements.internalValue = value;
  }
  public resetTrackerElements() {
    this._trackerElements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerElementsInput() {
    return this._trackerElements.internalValue;
  }

  // tracker_name - computed: false, optional: false, required: true
  private _trackerName?: string; 
  public get trackerName() {
    return this.getStringAttribute('tracker_name');
  }
  public set trackerName(value: string) {
    this._trackerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameInput() {
    return this._trackerName;
  }

  // tracker_name_variable - computed: false, optional: true, required: false
  private _trackerNameVariable?: string; 
  public get trackerNameVariable() {
    return this.getStringAttribute('tracker_name_variable');
  }
  public set trackerNameVariable(value: string) {
    this._trackerNameVariable = value;
  }
  public resetTrackerNameVariable() {
    this._trackerNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerNameVariableInput() {
    return this._trackerNameVariable;
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
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      name: cdktf.stringToTerraform(this._name),
      tracker_boolean: cdktf.stringToTerraform(this._trackerBoolean),
      tracker_boolean_variable: cdktf.stringToTerraform(this._trackerBooleanVariable),
      tracker_elements: cdktf.listMapper(transportIpv6TrackerGroupFeatureTrackerElementsToTerraform, false)(this._trackerElements.internalValue),
      tracker_name: cdktf.stringToTerraform(this._trackerName),
      tracker_name_variable: cdktf.stringToTerraform(this._trackerNameVariable),
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
      tracker_boolean: {
        value: cdktf.stringToHclTerraform(this._trackerBoolean),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_boolean_variable: {
        value: cdktf.stringToHclTerraform(this._trackerBooleanVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_elements: {
        value: cdktf.listMapperHcl(transportIpv6TrackerGroupFeatureTrackerElementsToHclTerraform, false)(this._trackerElements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransportIpv6TrackerGroupFeatureTrackerElementsList",
      },
      tracker_name: {
        value: cdktf.stringToHclTerraform(this._trackerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_name_variable: {
        value: cdktf.stringToHclTerraform(this._trackerNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
