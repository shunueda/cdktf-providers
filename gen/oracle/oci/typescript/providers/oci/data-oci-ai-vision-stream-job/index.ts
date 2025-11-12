// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ai_vision_stream_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAiVisionStreamJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ai_vision_stream_job#stream_job_id DataOciAiVisionStreamJob#stream_job_id}
  */
  readonly streamJobId: string;
}
export interface DataOciAiVisionStreamJobFeaturesTrackingTypes {
}

export function dataOciAiVisionStreamJobFeaturesTrackingTypesToTerraform(struct?: DataOciAiVisionStreamJobFeaturesTrackingTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiVisionStreamJobFeaturesTrackingTypesToHclTerraform(struct?: DataOciAiVisionStreamJobFeaturesTrackingTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiVisionStreamJobFeaturesTrackingTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiVisionStreamJobFeaturesTrackingTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiVisionStreamJobFeaturesTrackingTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // biometric_store_compartment_id - computed: true, optional: false, required: false
  public get biometricStoreCompartmentId() {
    return this.getStringAttribute('biometric_store_compartment_id');
  }

  // biometric_store_id - computed: true, optional: false, required: false
  public get biometricStoreId() {
    return this.getStringAttribute('biometric_store_id');
  }

  // detection_model_id - computed: true, optional: false, required: false
  public get detectionModelId() {
    return this.getStringAttribute('detection_model_id');
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // objects - computed: true, optional: false, required: false
  public get objects() {
    return this.getListAttribute('objects');
  }

  // should_return_landmarks - computed: true, optional: false, required: false
  public get shouldReturnLandmarks() {
    return this.getBooleanAttribute('should_return_landmarks');
  }

  // tracking_model_id - computed: true, optional: false, required: false
  public get trackingModelId() {
    return this.getStringAttribute('tracking_model_id');
  }
}

export class DataOciAiVisionStreamJobFeaturesTrackingTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiVisionStreamJobFeaturesTrackingTypesOutputReference {
    return new DataOciAiVisionStreamJobFeaturesTrackingTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiVisionStreamJobFeatures {
}

export function dataOciAiVisionStreamJobFeaturesToTerraform(struct?: DataOciAiVisionStreamJobFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiVisionStreamJobFeaturesToHclTerraform(struct?: DataOciAiVisionStreamJobFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiVisionStreamJobFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiVisionStreamJobFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiVisionStreamJobFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_type - computed: true, optional: false, required: false
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }

  // max_results - computed: true, optional: false, required: false
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }

  // should_return_landmarks - computed: true, optional: false, required: false
  public get shouldReturnLandmarks() {
    return this.getBooleanAttribute('should_return_landmarks');
  }

  // tracking_types - computed: true, optional: false, required: false
  private _trackingTypes = new DataOciAiVisionStreamJobFeaturesTrackingTypesList(this, "tracking_types", false);
  public get trackingTypes() {
    return this._trackingTypes;
  }
}

export class DataOciAiVisionStreamJobFeaturesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiVisionStreamJobFeaturesOutputReference {
    return new DataOciAiVisionStreamJobFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAiVisionStreamJobStreamOutputLocation {
}

export function dataOciAiVisionStreamJobStreamOutputLocationToTerraform(struct?: DataOciAiVisionStreamJobStreamOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAiVisionStreamJobStreamOutputLocationToHclTerraform(struct?: DataOciAiVisionStreamJobStreamOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAiVisionStreamJobStreamOutputLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAiVisionStreamJobStreamOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAiVisionStreamJobStreamOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // obo_token - computed: true, optional: false, required: false
  public get oboToken() {
    return this.getStringAttribute('obo_token');
  }

  // output_location_type - computed: true, optional: false, required: false
  public get outputLocationType() {
    return this.getStringAttribute('output_location_type');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataOciAiVisionStreamJobStreamOutputLocationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAiVisionStreamJobStreamOutputLocationOutputReference {
    return new DataOciAiVisionStreamJobStreamOutputLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ai_vision_stream_job oci_ai_vision_stream_job}
*/
export class DataOciAiVisionStreamJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_vision_stream_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAiVisionStreamJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAiVisionStreamJob to import
  * @param importFromId The id of the existing DataOciAiVisionStreamJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ai_vision_stream_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAiVisionStreamJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_vision_stream_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/ai_vision_stream_job oci_ai_vision_stream_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAiVisionStreamJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAiVisionStreamJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_vision_stream_job',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._streamJobId = config.streamJobId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_participant_id - computed: true, optional: false, required: false
  public get agentParticipantId() {
    return this.getStringAttribute('agent_participant_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // features - computed: true, optional: false, required: false
  private _features = new DataOciAiVisionStreamJobFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_job_id - computed: false, optional: false, required: true
  private _streamJobId?: string; 
  public get streamJobId() {
    return this.getStringAttribute('stream_job_id');
  }
  public set streamJobId(value: string) {
    this._streamJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamJobIdInput() {
    return this._streamJobId;
  }

  // stream_output_location - computed: true, optional: false, required: false
  private _streamOutputLocation = new DataOciAiVisionStreamJobStreamOutputLocationList(this, "stream_output_location", false);
  public get streamOutputLocation() {
    return this._streamOutputLocation;
  }

  // stream_source_id - computed: true, optional: false, required: false
  public get streamSourceId() {
    return this.getStringAttribute('stream_source_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      stream_job_id: cdktf.stringToTerraform(this._streamJobId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      stream_job_id: {
        value: cdktf.stringToHclTerraform(this._streamJobId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
