// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiVisionStreamGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#compartment_id AiVisionStreamGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#defined_tags AiVisionStreamGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#display_name AiVisionStreamGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#freeform_tags AiVisionStreamGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#id AiVisionStreamGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#is_enabled AiVisionStreamGroup#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#stream_source_ids AiVisionStreamGroup#stream_source_ids}
  */
  readonly streamSourceIds?: string[];
  /**
  * stream_overlaps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#stream_overlaps AiVisionStreamGroup#stream_overlaps}
  */
  readonly streamOverlaps?: AiVisionStreamGroupStreamOverlaps[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#timeouts AiVisionStreamGroup#timeouts}
  */
  readonly timeouts?: AiVisionStreamGroupTimeouts;
}
export interface AiVisionStreamGroupStreamOverlaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#overlapping_streams AiVisionStreamGroup#overlapping_streams}
  */
  readonly overlappingStreams?: string[];
}

export function aiVisionStreamGroupStreamOverlapsToTerraform(struct?: AiVisionStreamGroupStreamOverlaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overlapping_streams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.overlappingStreams),
  }
}


export function aiVisionStreamGroupStreamOverlapsToHclTerraform(struct?: AiVisionStreamGroupStreamOverlaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overlapping_streams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.overlappingStreams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionStreamGroupStreamOverlapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiVisionStreamGroupStreamOverlaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overlappingStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlappingStreams = this._overlappingStreams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionStreamGroupStreamOverlaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overlappingStreams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overlappingStreams = value.overlappingStreams;
    }
  }

  // overlapping_streams - computed: true, optional: true, required: false
  private _overlappingStreams?: string[]; 
  public get overlappingStreams() {
    return this.getListAttribute('overlapping_streams');
  }
  public set overlappingStreams(value: string[]) {
    this._overlappingStreams = value;
  }
  public resetOverlappingStreams() {
    this._overlappingStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlappingStreamsInput() {
    return this._overlappingStreams;
  }
}

export class AiVisionStreamGroupStreamOverlapsList extends cdktf.ComplexList {
  public internalValue? : AiVisionStreamGroupStreamOverlaps[] | cdktf.IResolvable

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
  public get(index: number): AiVisionStreamGroupStreamOverlapsOutputReference {
    return new AiVisionStreamGroupStreamOverlapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiVisionStreamGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#create AiVisionStreamGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#delete AiVisionStreamGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#update AiVisionStreamGroup#update}
  */
  readonly update?: string;
}

export function aiVisionStreamGroupTimeoutsToTerraform(struct?: AiVisionStreamGroupTimeouts | cdktf.IResolvable): any {
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


export function aiVisionStreamGroupTimeoutsToHclTerraform(struct?: AiVisionStreamGroupTimeouts | cdktf.IResolvable): any {
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

export class AiVisionStreamGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiVisionStreamGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiVisionStreamGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group oci_ai_vision_stream_group}
*/
export class AiVisionStreamGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_vision_stream_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiVisionStreamGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiVisionStreamGroup to import
  * @param importFromId The id of the existing AiVisionStreamGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiVisionStreamGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_vision_stream_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_group oci_ai_vision_stream_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiVisionStreamGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AiVisionStreamGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_vision_stream_group',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._streamSourceIds = config.streamSourceIds;
    this._streamOverlaps.internalValue = config.streamOverlaps;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_source_ids - computed: true, optional: true, required: false
  private _streamSourceIds?: string[]; 
  public get streamSourceIds() {
    return this.getListAttribute('stream_source_ids');
  }
  public set streamSourceIds(value: string[]) {
    this._streamSourceIds = value;
  }
  public resetStreamSourceIds() {
    this._streamSourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSourceIdsInput() {
    return this._streamSourceIds;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // stream_overlaps - computed: false, optional: true, required: false
  private _streamOverlaps = new AiVisionStreamGroupStreamOverlapsList(this, "stream_overlaps", false);
  public get streamOverlaps() {
    return this._streamOverlaps;
  }
  public putStreamOverlaps(value: AiVisionStreamGroupStreamOverlaps[] | cdktf.IResolvable) {
    this._streamOverlaps.internalValue = value;
  }
  public resetStreamOverlaps() {
    this._streamOverlaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOverlapsInput() {
    return this._streamOverlaps.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiVisionStreamGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiVisionStreamGroupTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      stream_source_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._streamSourceIds),
      stream_overlaps: cdktf.listMapper(aiVisionStreamGroupStreamOverlapsToTerraform, true)(this._streamOverlaps.internalValue),
      timeouts: aiVisionStreamGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stream_source_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._streamSourceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      stream_overlaps: {
        value: cdktf.listMapperHcl(aiVisionStreamGroupStreamOverlapsToHclTerraform, true)(this._streamOverlaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionStreamGroupStreamOverlapsList",
      },
      timeouts: {
        value: aiVisionStreamGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiVisionStreamGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
