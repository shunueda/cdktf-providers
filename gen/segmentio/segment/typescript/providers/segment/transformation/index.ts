// https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The optional Destination metadata associated with the Transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#destination_metadata_id Transformation#destination_metadata_id}
  */
  readonly destinationMetadataId?: string;
  /**
  * If the Transformation is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#enabled Transformation#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Optional array for defining new properties in FQL. Currently limited to 1 property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#fql_defined_properties Transformation#fql_defined_properties}
  */
  readonly fqlDefinedProperties: TransformationFqlDefinedProperties[] | cdktf.IResolvable;
  /**
  * If statement (FQL) to match events.
  * 
  * 				For standard event matchers, use the following: Track -> "event='EVENT_NAME'" Identify -> "type='identify'" Group -> "type='group'"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#if Transformation#if}
  */
  readonly if: string;
  /**
  * The name of the Transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#name Transformation#name}
  */
  readonly name: string;
  /**
  * Optional new event name for renaming events. Works only for 'track' event type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#new_event_name Transformation#new_event_name}
  */
  readonly newEventName?: string;
  /**
  * Optional array for renaming properties collected by your events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#property_renames Transformation#property_renames}
  */
  readonly propertyRenames: TransformationPropertyRenames[] | cdktf.IResolvable;
  /**
  * Optional array for transforming properties and values collected by your events. Limited to 10 properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#property_value_transformations Transformation#property_value_transformations}
  */
  readonly propertyValueTransformations: TransformationPropertyValueTransformations[] | cdktf.IResolvable;
  /**
  * The Source associated with the Transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#source_id Transformation#source_id}
  */
  readonly sourceId: string;
}
export interface TransformationFqlDefinedProperties {
  /**
  * The FQL expression used to compute the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#fql Transformation#fql}
  */
  readonly fql: string;
  /**
  * The new property name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#property_name Transformation#property_name}
  */
  readonly propertyName: string;
}

export function transformationFqlDefinedPropertiesToTerraform(struct?: TransformationFqlDefinedProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fql: cdktf.stringToTerraform(struct!.fql),
    property_name: cdktf.stringToTerraform(struct!.propertyName),
  }
}


export function transformationFqlDefinedPropertiesToHclTerraform(struct?: TransformationFqlDefinedProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fql: {
      value: cdktf.stringToHclTerraform(struct!.fql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_name: {
      value: cdktf.stringToHclTerraform(struct!.propertyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationFqlDefinedPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransformationFqlDefinedProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fql !== undefined) {
      hasAnyValues = true;
      internalValueResult.fql = this._fql;
    }
    if (this._propertyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyName = this._propertyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationFqlDefinedProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fql = undefined;
      this._propertyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fql = value.fql;
      this._propertyName = value.propertyName;
    }
  }

  // fql - computed: false, optional: false, required: true
  private _fql?: string; 
  public get fql() {
    return this.getStringAttribute('fql');
  }
  public set fql(value: string) {
    this._fql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqlInput() {
    return this._fql;
  }

  // property_name - computed: false, optional: false, required: true
  private _propertyName?: string; 
  public get propertyName() {
    return this.getStringAttribute('property_name');
  }
  public set propertyName(value: string) {
    this._propertyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyNameInput() {
    return this._propertyName;
  }
}

export class TransformationFqlDefinedPropertiesList extends cdktf.ComplexList {
  public internalValue? : TransformationFqlDefinedProperties[] | cdktf.IResolvable

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
  public get(index: number): TransformationFqlDefinedPropertiesOutputReference {
    return new TransformationFqlDefinedPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformationPropertyRenames {
  /**
  * The new name to rename the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#new_name Transformation#new_name}
  */
  readonly newName: string;
  /**
  * The old name of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#old_name Transformation#old_name}
  */
  readonly oldName: string;
}

export function transformationPropertyRenamesToTerraform(struct?: TransformationPropertyRenames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_name: cdktf.stringToTerraform(struct!.newName),
    old_name: cdktf.stringToTerraform(struct!.oldName),
  }
}


export function transformationPropertyRenamesToHclTerraform(struct?: TransformationPropertyRenames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_name: {
      value: cdktf.stringToHclTerraform(struct!.newName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_name: {
      value: cdktf.stringToHclTerraform(struct!.oldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationPropertyRenamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransformationPropertyRenames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newName = this._newName;
    }
    if (this._oldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldName = this._oldName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationPropertyRenames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._newName = undefined;
      this._oldName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._newName = value.newName;
      this._oldName = value.oldName;
    }
  }

  // new_name - computed: false, optional: false, required: true
  private _newName?: string; 
  public get newName() {
    return this.getStringAttribute('new_name');
  }
  public set newName(value: string) {
    this._newName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newNameInput() {
    return this._newName;
  }

  // old_name - computed: false, optional: false, required: true
  private _oldName?: string; 
  public get oldName() {
    return this.getStringAttribute('old_name');
  }
  public set oldName(value: string) {
    this._oldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oldNameInput() {
    return this._oldName;
  }
}

export class TransformationPropertyRenamesList extends cdktf.ComplexList {
  public internalValue? : TransformationPropertyRenames[] | cdktf.IResolvable

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
  public get(index: number): TransformationPropertyRenamesOutputReference {
    return new TransformationPropertyRenamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformationPropertyValueTransformations {
  /**
  * The property paths. The maximum number of paths is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#property_paths Transformation#property_paths}
  */
  readonly propertyPaths: string[];
  /**
  * The new value of the property paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#property_value Transformation#property_value}
  */
  readonly propertyValue: string;
}

export function transformationPropertyValueTransformationsToTerraform(struct?: TransformationPropertyValueTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.propertyPaths),
    property_value: cdktf.stringToTerraform(struct!.propertyValue),
  }
}


export function transformationPropertyValueTransformationsToHclTerraform(struct?: TransformationPropertyValueTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.propertyPaths),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    property_value: {
      value: cdktf.stringToHclTerraform(struct!.propertyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformationPropertyValueTransformationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransformationPropertyValueTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyPaths = this._propertyPaths;
    }
    if (this._propertyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyValue = this._propertyValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformationPropertyValueTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._propertyPaths = undefined;
      this._propertyValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._propertyPaths = value.propertyPaths;
      this._propertyValue = value.propertyValue;
    }
  }

  // property_paths - computed: false, optional: false, required: true
  private _propertyPaths?: string[]; 
  public get propertyPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('property_paths'));
  }
  public set propertyPaths(value: string[]) {
    this._propertyPaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyPathsInput() {
    return this._propertyPaths;
  }

  // property_value - computed: false, optional: false, required: true
  private _propertyValue?: string; 
  public get propertyValue() {
    return this.getStringAttribute('property_value');
  }
  public set propertyValue(value: string) {
    this._propertyValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueInput() {
    return this._propertyValue;
  }
}

export class TransformationPropertyValueTransformationsList extends cdktf.ComplexList {
  public internalValue? : TransformationPropertyValueTransformations[] | cdktf.IResolvable

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
  public get(index: number): TransformationPropertyValueTransformationsOutputReference {
    return new TransformationPropertyValueTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation segment_transformation}
*/
export class Transformation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "segment_transformation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Transformation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Transformation to import
  * @param importFromId The id of the existing Transformation that should be imported. Refer to the {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Transformation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "segment_transformation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/segmentio/segment/1.6.0/docs/resources/transformation segment_transformation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformationConfig
  */
  public constructor(scope: Construct, id: string, config: TransformationConfig) {
    super(scope, id, {
      terraformResourceType: 'segment_transformation',
      terraformGeneratorMetadata: {
        providerName: 'segment',
        providerVersion: '1.6.0',
        providerVersionConstraint: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationMetadataId = config.destinationMetadataId;
    this._enabled = config.enabled;
    this._fqlDefinedProperties.internalValue = config.fqlDefinedProperties;
    this._if = config.if;
    this._name = config.name;
    this._newEventName = config.newEventName;
    this._propertyRenames.internalValue = config.propertyRenames;
    this._propertyValueTransformations.internalValue = config.propertyValueTransformations;
    this._sourceId = config.sourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_metadata_id - computed: false, optional: true, required: false
  private _destinationMetadataId?: string; 
  public get destinationMetadataId() {
    return this.getStringAttribute('destination_metadata_id');
  }
  public set destinationMetadataId(value: string) {
    this._destinationMetadataId = value;
  }
  public resetDestinationMetadataId() {
    this._destinationMetadataId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationMetadataIdInput() {
    return this._destinationMetadataId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fql_defined_properties - computed: false, optional: false, required: true
  private _fqlDefinedProperties = new TransformationFqlDefinedPropertiesList(this, "fql_defined_properties", true);
  public get fqlDefinedProperties() {
    return this._fqlDefinedProperties;
  }
  public putFqlDefinedProperties(value: TransformationFqlDefinedProperties[] | cdktf.IResolvable) {
    this._fqlDefinedProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqlDefinedPropertiesInput() {
    return this._fqlDefinedProperties.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // if - computed: false, optional: false, required: true
  private _if?: string; 
  public get if() {
    return this.getStringAttribute('if');
  }
  public set if(value: string) {
    this._if = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
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

  // new_event_name - computed: false, optional: true, required: false
  private _newEventName?: string; 
  public get newEventName() {
    return this.getStringAttribute('new_event_name');
  }
  public set newEventName(value: string) {
    this._newEventName = value;
  }
  public resetNewEventName() {
    this._newEventName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newEventNameInput() {
    return this._newEventName;
  }

  // property_renames - computed: false, optional: false, required: true
  private _propertyRenames = new TransformationPropertyRenamesList(this, "property_renames", true);
  public get propertyRenames() {
    return this._propertyRenames;
  }
  public putPropertyRenames(value: TransformationPropertyRenames[] | cdktf.IResolvable) {
    this._propertyRenames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyRenamesInput() {
    return this._propertyRenames.internalValue;
  }

  // property_value_transformations - computed: false, optional: false, required: true
  private _propertyValueTransformations = new TransformationPropertyValueTransformationsList(this, "property_value_transformations", true);
  public get propertyValueTransformations() {
    return this._propertyValueTransformations;
  }
  public putPropertyValueTransformations(value: TransformationPropertyValueTransformations[] | cdktf.IResolvable) {
    this._propertyValueTransformations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyValueTransformationsInput() {
    return this._propertyValueTransformations.internalValue;
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_metadata_id: cdktf.stringToTerraform(this._destinationMetadataId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fql_defined_properties: cdktf.listMapper(transformationFqlDefinedPropertiesToTerraform, false)(this._fqlDefinedProperties.internalValue),
      if: cdktf.stringToTerraform(this._if),
      name: cdktf.stringToTerraform(this._name),
      new_event_name: cdktf.stringToTerraform(this._newEventName),
      property_renames: cdktf.listMapper(transformationPropertyRenamesToTerraform, false)(this._propertyRenames.internalValue),
      property_value_transformations: cdktf.listMapper(transformationPropertyValueTransformationsToTerraform, false)(this._propertyValueTransformations.internalValue),
      source_id: cdktf.stringToTerraform(this._sourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_metadata_id: {
        value: cdktf.stringToHclTerraform(this._destinationMetadataId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fql_defined_properties: {
        value: cdktf.listMapperHcl(transformationFqlDefinedPropertiesToHclTerraform, false)(this._fqlDefinedProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TransformationFqlDefinedPropertiesList",
      },
      if: {
        value: cdktf.stringToHclTerraform(this._if),
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
      new_event_name: {
        value: cdktf.stringToHclTerraform(this._newEventName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_renames: {
        value: cdktf.listMapperHcl(transformationPropertyRenamesToHclTerraform, false)(this._propertyRenames.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TransformationPropertyRenamesList",
      },
      property_value_transformations: {
        value: cdktf.listMapperHcl(transformationPropertyValueTransformationsToHclTerraform, false)(this._propertyValueTransformations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TransformationPropertyValueTransformationsList",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
