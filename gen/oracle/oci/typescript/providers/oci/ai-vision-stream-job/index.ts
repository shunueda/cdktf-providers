// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiVisionStreamJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#compartment_id AiVisionStreamJob#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#defined_tags AiVisionStreamJob#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#display_name AiVisionStreamJob#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#freeform_tags AiVisionStreamJob#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#id AiVisionStreamJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#state AiVisionStreamJob#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#stream_source_id AiVisionStreamJob#stream_source_id}
  */
  readonly streamSourceId: string;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#features AiVisionStreamJob#features}
  */
  readonly features: AiVisionStreamJobFeatures[] | cdktf.IResolvable;
  /**
  * stream_output_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#stream_output_location AiVisionStreamJob#stream_output_location}
  */
  readonly streamOutputLocation: AiVisionStreamJobStreamOutputLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#timeouts AiVisionStreamJob#timeouts}
  */
  readonly timeouts?: AiVisionStreamJobTimeouts;
}
export interface AiVisionStreamJobFeaturesTrackingTypes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#biometric_store_compartment_id AiVisionStreamJob#biometric_store_compartment_id}
  */
  readonly biometricStoreCompartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#biometric_store_id AiVisionStreamJob#biometric_store_id}
  */
  readonly biometricStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#detection_model_id AiVisionStreamJob#detection_model_id}
  */
  readonly detectionModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#max_results AiVisionStreamJob#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#objects AiVisionStreamJob#objects}
  */
  readonly objects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#should_return_landmarks AiVisionStreamJob#should_return_landmarks}
  */
  readonly shouldReturnLandmarks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#tracking_model_id AiVisionStreamJob#tracking_model_id}
  */
  readonly trackingModelId?: string;
}

export function aiVisionStreamJobFeaturesTrackingTypesToTerraform(struct?: AiVisionStreamJobFeaturesTrackingTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    biometric_store_compartment_id: cdktf.stringToTerraform(struct!.biometricStoreCompartmentId),
    biometric_store_id: cdktf.stringToTerraform(struct!.biometricStoreId),
    detection_model_id: cdktf.stringToTerraform(struct!.detectionModelId),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    objects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.objects),
    should_return_landmarks: cdktf.booleanToTerraform(struct!.shouldReturnLandmarks),
    tracking_model_id: cdktf.stringToTerraform(struct!.trackingModelId),
  }
}


export function aiVisionStreamJobFeaturesTrackingTypesToHclTerraform(struct?: AiVisionStreamJobFeaturesTrackingTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    biometric_store_compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.biometricStoreCompartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    biometric_store_id: {
      value: cdktf.stringToHclTerraform(struct!.biometricStoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detection_model_id: {
      value: cdktf.stringToHclTerraform(struct!.detectionModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    objects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.objects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    should_return_landmarks: {
      value: cdktf.booleanToHclTerraform(struct!.shouldReturnLandmarks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracking_model_id: {
      value: cdktf.stringToHclTerraform(struct!.trackingModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionStreamJobFeaturesTrackingTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiVisionStreamJobFeaturesTrackingTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biometricStoreCompartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.biometricStoreCompartmentId = this._biometricStoreCompartmentId;
    }
    if (this._biometricStoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.biometricStoreId = this._biometricStoreId;
    }
    if (this._detectionModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionModelId = this._detectionModelId;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._objects !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects;
    }
    if (this._shouldReturnLandmarks !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldReturnLandmarks = this._shouldReturnLandmarks;
    }
    if (this._trackingModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingModelId = this._trackingModelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionStreamJobFeaturesTrackingTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biometricStoreCompartmentId = undefined;
      this._biometricStoreId = undefined;
      this._detectionModelId = undefined;
      this._maxResults = undefined;
      this._objects = undefined;
      this._shouldReturnLandmarks = undefined;
      this._trackingModelId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biometricStoreCompartmentId = value.biometricStoreCompartmentId;
      this._biometricStoreId = value.biometricStoreId;
      this._detectionModelId = value.detectionModelId;
      this._maxResults = value.maxResults;
      this._objects = value.objects;
      this._shouldReturnLandmarks = value.shouldReturnLandmarks;
      this._trackingModelId = value.trackingModelId;
    }
  }

  // biometric_store_compartment_id - computed: true, optional: true, required: false
  private _biometricStoreCompartmentId?: string; 
  public get biometricStoreCompartmentId() {
    return this.getStringAttribute('biometric_store_compartment_id');
  }
  public set biometricStoreCompartmentId(value: string) {
    this._biometricStoreCompartmentId = value;
  }
  public resetBiometricStoreCompartmentId() {
    this._biometricStoreCompartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biometricStoreCompartmentIdInput() {
    return this._biometricStoreCompartmentId;
  }

  // biometric_store_id - computed: true, optional: true, required: false
  private _biometricStoreId?: string; 
  public get biometricStoreId() {
    return this.getStringAttribute('biometric_store_id');
  }
  public set biometricStoreId(value: string) {
    this._biometricStoreId = value;
  }
  public resetBiometricStoreId() {
    this._biometricStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biometricStoreIdInput() {
    return this._biometricStoreId;
  }

  // detection_model_id - computed: true, optional: true, required: false
  private _detectionModelId?: string; 
  public get detectionModelId() {
    return this.getStringAttribute('detection_model_id');
  }
  public set detectionModelId(value: string) {
    this._detectionModelId = value;
  }
  public resetDetectionModelId() {
    this._detectionModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionModelIdInput() {
    return this._detectionModelId;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // objects - computed: true, optional: true, required: false
  private _objects?: string[]; 
  public get objects() {
    return this.getListAttribute('objects');
  }
  public set objects(value: string[]) {
    this._objects = value;
  }
  public resetObjects() {
    this._objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects;
  }

  // should_return_landmarks - computed: true, optional: true, required: false
  private _shouldReturnLandmarks?: boolean | cdktf.IResolvable; 
  public get shouldReturnLandmarks() {
    return this.getBooleanAttribute('should_return_landmarks');
  }
  public set shouldReturnLandmarks(value: boolean | cdktf.IResolvable) {
    this._shouldReturnLandmarks = value;
  }
  public resetShouldReturnLandmarks() {
    this._shouldReturnLandmarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldReturnLandmarksInput() {
    return this._shouldReturnLandmarks;
  }

  // tracking_model_id - computed: true, optional: true, required: false
  private _trackingModelId?: string; 
  public get trackingModelId() {
    return this.getStringAttribute('tracking_model_id');
  }
  public set trackingModelId(value: string) {
    this._trackingModelId = value;
  }
  public resetTrackingModelId() {
    this._trackingModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingModelIdInput() {
    return this._trackingModelId;
  }
}

export class AiVisionStreamJobFeaturesTrackingTypesList extends cdktf.ComplexList {
  public internalValue? : AiVisionStreamJobFeaturesTrackingTypes[] | cdktf.IResolvable

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
  public get(index: number): AiVisionStreamJobFeaturesTrackingTypesOutputReference {
    return new AiVisionStreamJobFeaturesTrackingTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiVisionStreamJobFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#feature_type AiVisionStreamJob#feature_type}
  */
  readonly featureType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#max_results AiVisionStreamJob#max_results}
  */
  readonly maxResults?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#should_return_landmarks AiVisionStreamJob#should_return_landmarks}
  */
  readonly shouldReturnLandmarks?: boolean | cdktf.IResolvable;
  /**
  * tracking_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#tracking_types AiVisionStreamJob#tracking_types}
  */
  readonly trackingTypes?: AiVisionStreamJobFeaturesTrackingTypes[] | cdktf.IResolvable;
}

export function aiVisionStreamJobFeaturesToTerraform(struct?: AiVisionStreamJobFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_type: cdktf.stringToTerraform(struct!.featureType),
    max_results: cdktf.numberToTerraform(struct!.maxResults),
    should_return_landmarks: cdktf.booleanToTerraform(struct!.shouldReturnLandmarks),
    tracking_types: cdktf.listMapper(aiVisionStreamJobFeaturesTrackingTypesToTerraform, true)(struct!.trackingTypes),
  }
}


export function aiVisionStreamJobFeaturesToHclTerraform(struct?: AiVisionStreamJobFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_type: {
      value: cdktf.stringToHclTerraform(struct!.featureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_results: {
      value: cdktf.numberToHclTerraform(struct!.maxResults),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    should_return_landmarks: {
      value: cdktf.booleanToHclTerraform(struct!.shouldReturnLandmarks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracking_types: {
      value: cdktf.listMapperHcl(aiVisionStreamJobFeaturesTrackingTypesToHclTerraform, true)(struct!.trackingTypes),
      isBlock: true,
      type: "list",
      storageClassType: "AiVisionStreamJobFeaturesTrackingTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionStreamJobFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AiVisionStreamJobFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureType = this._featureType;
    }
    if (this._maxResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxResults = this._maxResults;
    }
    if (this._shouldReturnLandmarks !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldReturnLandmarks = this._shouldReturnLandmarks;
    }
    if (this._trackingTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingTypes = this._trackingTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionStreamJobFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._featureType = undefined;
      this._maxResults = undefined;
      this._shouldReturnLandmarks = undefined;
      this._trackingTypes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._featureType = value.featureType;
      this._maxResults = value.maxResults;
      this._shouldReturnLandmarks = value.shouldReturnLandmarks;
      this._trackingTypes.internalValue = value.trackingTypes;
    }
  }

  // feature_type - computed: false, optional: false, required: true
  private _featureType?: string; 
  public get featureType() {
    return this.getStringAttribute('feature_type');
  }
  public set featureType(value: string) {
    this._featureType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureTypeInput() {
    return this._featureType;
  }

  // max_results - computed: true, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // should_return_landmarks - computed: true, optional: true, required: false
  private _shouldReturnLandmarks?: boolean | cdktf.IResolvable; 
  public get shouldReturnLandmarks() {
    return this.getBooleanAttribute('should_return_landmarks');
  }
  public set shouldReturnLandmarks(value: boolean | cdktf.IResolvable) {
    this._shouldReturnLandmarks = value;
  }
  public resetShouldReturnLandmarks() {
    this._shouldReturnLandmarks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldReturnLandmarksInput() {
    return this._shouldReturnLandmarks;
  }

  // tracking_types - computed: false, optional: true, required: false
  private _trackingTypes = new AiVisionStreamJobFeaturesTrackingTypesList(this, "tracking_types", false);
  public get trackingTypes() {
    return this._trackingTypes;
  }
  public putTrackingTypes(value: AiVisionStreamJobFeaturesTrackingTypes[] | cdktf.IResolvable) {
    this._trackingTypes.internalValue = value;
  }
  public resetTrackingTypes() {
    this._trackingTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingTypesInput() {
    return this._trackingTypes.internalValue;
  }
}

export class AiVisionStreamJobFeaturesList extends cdktf.ComplexList {
  public internalValue? : AiVisionStreamJobFeatures[] | cdktf.IResolvable

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
  public get(index: number): AiVisionStreamJobFeaturesOutputReference {
    return new AiVisionStreamJobFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AiVisionStreamJobStreamOutputLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#bucket AiVisionStreamJob#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#namespace AiVisionStreamJob#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#obo_token AiVisionStreamJob#obo_token}
  */
  readonly oboToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#output_location_type AiVisionStreamJob#output_location_type}
  */
  readonly outputLocationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#prefix AiVisionStreamJob#prefix}
  */
  readonly prefix: string;
}

export function aiVisionStreamJobStreamOutputLocationToTerraform(struct?: AiVisionStreamJobStreamOutputLocationOutputReference | AiVisionStreamJobStreamOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    obo_token: cdktf.stringToTerraform(struct!.oboToken),
    output_location_type: cdktf.stringToTerraform(struct!.outputLocationType),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function aiVisionStreamJobStreamOutputLocationToHclTerraform(struct?: AiVisionStreamJobStreamOutputLocationOutputReference | AiVisionStreamJobStreamOutputLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    obo_token: {
      value: cdktf.stringToHclTerraform(struct!.oboToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_location_type: {
      value: cdktf.stringToHclTerraform(struct!.outputLocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionStreamJobStreamOutputLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiVisionStreamJobStreamOutputLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._oboToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.oboToken = this._oboToken;
    }
    if (this._outputLocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocationType = this._outputLocationType;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionStreamJobStreamOutputLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._namespace = undefined;
      this._oboToken = undefined;
      this._outputLocationType = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._namespace = value.namespace;
      this._oboToken = value.oboToken;
      this._outputLocationType = value.outputLocationType;
      this._prefix = value.prefix;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // obo_token - computed: true, optional: true, required: false
  private _oboToken?: string; 
  public get oboToken() {
    return this.getStringAttribute('obo_token');
  }
  public set oboToken(value: string) {
    this._oboToken = value;
  }
  public resetOboToken() {
    this._oboToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oboTokenInput() {
    return this._oboToken;
  }

  // output_location_type - computed: false, optional: false, required: true
  private _outputLocationType?: string; 
  public get outputLocationType() {
    return this.getStringAttribute('output_location_type');
  }
  public set outputLocationType(value: string) {
    this._outputLocationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationTypeInput() {
    return this._outputLocationType;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface AiVisionStreamJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#create AiVisionStreamJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#delete AiVisionStreamJob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#update AiVisionStreamJob#update}
  */
  readonly update?: string;
}

export function aiVisionStreamJobTimeoutsToTerraform(struct?: AiVisionStreamJobTimeouts | cdktf.IResolvable): any {
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


export function aiVisionStreamJobTimeoutsToHclTerraform(struct?: AiVisionStreamJobTimeouts | cdktf.IResolvable): any {
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

export class AiVisionStreamJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiVisionStreamJobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiVisionStreamJobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job oci_ai_vision_stream_job}
*/
export class AiVisionStreamJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_vision_stream_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiVisionStreamJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiVisionStreamJob to import
  * @param importFromId The id of the existing AiVisionStreamJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiVisionStreamJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_vision_stream_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/ai_vision_stream_job oci_ai_vision_stream_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiVisionStreamJobConfig
  */
  public constructor(scope: Construct, id: string, config: AiVisionStreamJobConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_vision_stream_job',
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
    this._state = config.state;
    this._streamSourceId = config.streamSourceId;
    this._features.internalValue = config.features;
    this._streamOutputLocation.internalValue = config.streamOutputLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_participant_id - computed: true, optional: false, required: false
  public get agentParticipantId() {
    return this.getStringAttribute('agent_participant_id');
  }

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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // stream_source_id - computed: false, optional: false, required: true
  private _streamSourceId?: string; 
  public get streamSourceId() {
    return this.getStringAttribute('stream_source_id');
  }
  public set streamSourceId(value: string) {
    this._streamSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamSourceIdInput() {
    return this._streamSourceId;
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

  // features - computed: false, optional: false, required: true
  private _features = new AiVisionStreamJobFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: AiVisionStreamJobFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // stream_output_location - computed: false, optional: false, required: true
  private _streamOutputLocation = new AiVisionStreamJobStreamOutputLocationOutputReference(this, "stream_output_location");
  public get streamOutputLocation() {
    return this._streamOutputLocation;
  }
  public putStreamOutputLocation(value: AiVisionStreamJobStreamOutputLocation) {
    this._streamOutputLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamOutputLocationInput() {
    return this._streamOutputLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiVisionStreamJobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiVisionStreamJobTimeouts) {
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
      state: cdktf.stringToTerraform(this._state),
      stream_source_id: cdktf.stringToTerraform(this._streamSourceId),
      features: cdktf.listMapper(aiVisionStreamJobFeaturesToTerraform, true)(this._features.internalValue),
      stream_output_location: aiVisionStreamJobStreamOutputLocationToTerraform(this._streamOutputLocation.internalValue),
      timeouts: aiVisionStreamJobTimeoutsToTerraform(this._timeouts.internalValue),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_source_id: {
        value: cdktf.stringToHclTerraform(this._streamSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      features: {
        value: cdktf.listMapperHcl(aiVisionStreamJobFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionStreamJobFeaturesList",
      },
      stream_output_location: {
        value: aiVisionStreamJobStreamOutputLocationToHclTerraform(this._streamOutputLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionStreamJobStreamOutputLocationList",
      },
      timeouts: {
        value: aiVisionStreamJobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiVisionStreamJobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
