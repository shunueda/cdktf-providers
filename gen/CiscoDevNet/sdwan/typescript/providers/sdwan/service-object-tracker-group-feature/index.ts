// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceObjectTrackerGroupFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#description ServiceObjectTrackerGroupFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#feature_profile_id ServiceObjectTrackerGroupFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#name ServiceObjectTrackerGroupFeature#name}
  */
  readonly name: string;
  /**
  * Object ID
  *   - Range: `1`-`1000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#object_tracker_id ServiceObjectTrackerGroupFeature#object_tracker_id}
  */
  readonly objectTrackerId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#object_tracker_id_variable ServiceObjectTrackerGroupFeature#object_tracker_id_variable}
  */
  readonly objectTrackerIdVariable?: string;
  /**
  * tracker ref list criteria boolean and or
  *   - Choices: `and`, `or`
  *   - Default value: `or`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#reachable ServiceObjectTrackerGroupFeature#reachable}
  */
  readonly reachable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#reachable_variable ServiceObjectTrackerGroupFeature#reachable_variable}
  */
  readonly reachableVariable?: string;
  /**
  * Group Tracks ID Refs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#tracker_elements ServiceObjectTrackerGroupFeature#tracker_elements}
  */
  readonly trackerElements?: ServiceObjectTrackerGroupFeatureTrackerElements[] | cdktf.IResolvable;
}
export interface ServiceObjectTrackerGroupFeatureTrackerElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#object_tracker_id ServiceObjectTrackerGroupFeature#object_tracker_id}
  */
  readonly objectTrackerId?: string;
}

export function serviceObjectTrackerGroupFeatureTrackerElementsToTerraform(struct?: ServiceObjectTrackerGroupFeatureTrackerElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_tracker_id: cdktf.stringToTerraform(struct!.objectTrackerId),
  }
}


export function serviceObjectTrackerGroupFeatureTrackerElementsToHclTerraform(struct?: ServiceObjectTrackerGroupFeatureTrackerElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_tracker_id: {
      value: cdktf.stringToHclTerraform(struct!.objectTrackerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceObjectTrackerGroupFeatureTrackerElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceObjectTrackerGroupFeatureTrackerElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectTrackerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTrackerId = this._objectTrackerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceObjectTrackerGroupFeatureTrackerElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectTrackerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectTrackerId = value.objectTrackerId;
    }
  }

  // object_tracker_id - computed: false, optional: true, required: false
  private _objectTrackerId?: string; 
  public get objectTrackerId() {
    return this.getStringAttribute('object_tracker_id');
  }
  public set objectTrackerId(value: string) {
    this._objectTrackerId = value;
  }
  public resetObjectTrackerId() {
    this._objectTrackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackerIdInput() {
    return this._objectTrackerId;
  }
}

export class ServiceObjectTrackerGroupFeatureTrackerElementsList extends cdktf.ComplexList {
  public internalValue? : ServiceObjectTrackerGroupFeatureTrackerElements[] | cdktf.IResolvable

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
  public get(index: number): ServiceObjectTrackerGroupFeatureTrackerElementsOutputReference {
    return new ServiceObjectTrackerGroupFeatureTrackerElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature sdwan_service_object_tracker_group_feature}
*/
export class ServiceObjectTrackerGroupFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_object_tracker_group_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceObjectTrackerGroupFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceObjectTrackerGroupFeature to import
  * @param importFromId The id of the existing ServiceObjectTrackerGroupFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceObjectTrackerGroupFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_object_tracker_group_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_object_tracker_group_feature sdwan_service_object_tracker_group_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceObjectTrackerGroupFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceObjectTrackerGroupFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_object_tracker_group_feature',
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
    this._objectTrackerId = config.objectTrackerId;
    this._objectTrackerIdVariable = config.objectTrackerIdVariable;
    this._reachable = config.reachable;
    this._reachableVariable = config.reachableVariable;
    this._trackerElements.internalValue = config.trackerElements;
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

  // object_tracker_id - computed: false, optional: true, required: false
  private _objectTrackerId?: number; 
  public get objectTrackerId() {
    return this.getNumberAttribute('object_tracker_id');
  }
  public set objectTrackerId(value: number) {
    this._objectTrackerId = value;
  }
  public resetObjectTrackerId() {
    this._objectTrackerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackerIdInput() {
    return this._objectTrackerId;
  }

  // object_tracker_id_variable - computed: false, optional: true, required: false
  private _objectTrackerIdVariable?: string; 
  public get objectTrackerIdVariable() {
    return this.getStringAttribute('object_tracker_id_variable');
  }
  public set objectTrackerIdVariable(value: string) {
    this._objectTrackerIdVariable = value;
  }
  public resetObjectTrackerIdVariable() {
    this._objectTrackerIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTrackerIdVariableInput() {
    return this._objectTrackerIdVariable;
  }

  // reachable - computed: false, optional: true, required: false
  private _reachable?: string; 
  public get reachable() {
    return this.getStringAttribute('reachable');
  }
  public set reachable(value: string) {
    this._reachable = value;
  }
  public resetReachable() {
    this._reachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableInput() {
    return this._reachable;
  }

  // reachable_variable - computed: false, optional: true, required: false
  private _reachableVariable?: string; 
  public get reachableVariable() {
    return this.getStringAttribute('reachable_variable');
  }
  public set reachableVariable(value: string) {
    this._reachableVariable = value;
  }
  public resetReachableVariable() {
    this._reachableVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableVariableInput() {
    return this._reachableVariable;
  }

  // tracker_elements - computed: false, optional: true, required: false
  private _trackerElements = new ServiceObjectTrackerGroupFeatureTrackerElementsList(this, "tracker_elements", false);
  public get trackerElements() {
    return this._trackerElements;
  }
  public putTrackerElements(value: ServiceObjectTrackerGroupFeatureTrackerElements[] | cdktf.IResolvable) {
    this._trackerElements.internalValue = value;
  }
  public resetTrackerElements() {
    this._trackerElements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerElementsInput() {
    return this._trackerElements.internalValue;
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
      object_tracker_id: cdktf.numberToTerraform(this._objectTrackerId),
      object_tracker_id_variable: cdktf.stringToTerraform(this._objectTrackerIdVariable),
      reachable: cdktf.stringToTerraform(this._reachable),
      reachable_variable: cdktf.stringToTerraform(this._reachableVariable),
      tracker_elements: cdktf.listMapper(serviceObjectTrackerGroupFeatureTrackerElementsToTerraform, false)(this._trackerElements.internalValue),
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
      object_tracker_id: {
        value: cdktf.numberToHclTerraform(this._objectTrackerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_tracker_id_variable: {
        value: cdktf.stringToHclTerraform(this._objectTrackerIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable: {
        value: cdktf.stringToHclTerraform(this._reachable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reachable_variable: {
        value: cdktf.stringToHclTerraform(this._reachableVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_elements: {
        value: cdktf.listMapperHcl(serviceObjectTrackerGroupFeatureTrackerElementsToHclTerraform, false)(this._trackerElements.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceObjectTrackerGroupFeatureTrackerElementsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
