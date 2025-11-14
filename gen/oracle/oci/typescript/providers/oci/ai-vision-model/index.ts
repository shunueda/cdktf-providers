// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AiVisionModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#compartment_id AiVisionModel#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#defined_tags AiVisionModel#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#description AiVisionModel#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#display_name AiVisionModel#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#freeform_tags AiVisionModel#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#id AiVisionModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#is_quick_mode AiVisionModel#is_quick_mode}
  */
  readonly isQuickMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#max_training_duration_in_hours AiVisionModel#max_training_duration_in_hours}
  */
  readonly maxTrainingDurationInHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#model_type AiVisionModel#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#model_version AiVisionModel#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#project_id AiVisionModel#project_id}
  */
  readonly projectId: string;
  /**
  * testing_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#testing_dataset AiVisionModel#testing_dataset}
  */
  readonly testingDataset?: AiVisionModelTestingDataset;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#timeouts AiVisionModel#timeouts}
  */
  readonly timeouts?: AiVisionModelTimeouts;
  /**
  * training_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#training_dataset AiVisionModel#training_dataset}
  */
  readonly trainingDataset: AiVisionModelTrainingDataset;
  /**
  * validation_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#validation_dataset AiVisionModel#validation_dataset}
  */
  readonly validationDataset?: AiVisionModelValidationDataset;
}
export interface AiVisionModelTestingDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#object AiVisionModel#object}
  */
  readonly object?: string;
}

export function aiVisionModelTestingDatasetToTerraform(struct?: AiVisionModelTestingDatasetOutputReference | AiVisionModelTestingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function aiVisionModelTestingDatasetToHclTerraform(struct?: AiVisionModelTestingDatasetOutputReference | AiVisionModelTestingDataset): any {
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
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_type: {
      value: cdktf.stringToHclTerraform(struct!.datasetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionModelTestingDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiVisionModelTestingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionModelTestingDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._datasetId = undefined;
      this._datasetType = undefined;
      this._namespaceName = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._datasetId = value.datasetId;
      this._datasetType = value.datasetType;
      this._namespaceName = value.namespaceName;
      this._object = value.object;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // dataset_type - computed: false, optional: false, required: true
  private _datasetType?: string; 
  public get datasetType() {
    return this.getStringAttribute('dataset_type');
  }
  public set datasetType(value: string) {
    this._datasetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTypeInput() {
    return this._datasetType;
  }

  // namespace_name - computed: true, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AiVisionModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#create AiVisionModel#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#delete AiVisionModel#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#update AiVisionModel#update}
  */
  readonly update?: string;
}

export function aiVisionModelTimeoutsToTerraform(struct?: AiVisionModelTimeouts | cdktf.IResolvable): any {
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


export function aiVisionModelTimeoutsToHclTerraform(struct?: AiVisionModelTimeouts | cdktf.IResolvable): any {
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

export class AiVisionModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AiVisionModelTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AiVisionModelTimeouts | cdktf.IResolvable | undefined) {
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
export interface AiVisionModelTrainingDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#object AiVisionModel#object}
  */
  readonly object?: string;
}

export function aiVisionModelTrainingDatasetToTerraform(struct?: AiVisionModelTrainingDatasetOutputReference | AiVisionModelTrainingDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function aiVisionModelTrainingDatasetToHclTerraform(struct?: AiVisionModelTrainingDatasetOutputReference | AiVisionModelTrainingDataset): any {
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
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_type: {
      value: cdktf.stringToHclTerraform(struct!.datasetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionModelTrainingDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiVisionModelTrainingDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionModelTrainingDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._datasetId = undefined;
      this._datasetType = undefined;
      this._namespaceName = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._datasetId = value.datasetId;
      this._datasetType = value.datasetType;
      this._namespaceName = value.namespaceName;
      this._object = value.object;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // dataset_type - computed: false, optional: false, required: true
  private _datasetType?: string; 
  public get datasetType() {
    return this.getStringAttribute('dataset_type');
  }
  public set datasetType(value: string) {
    this._datasetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTypeInput() {
    return this._datasetType;
  }

  // namespace_name - computed: true, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface AiVisionModelValidationDataset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#bucket AiVisionModel#bucket}
  */
  readonly bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#dataset_id AiVisionModel#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#dataset_type AiVisionModel#dataset_type}
  */
  readonly datasetType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#namespace_name AiVisionModel#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#object AiVisionModel#object}
  */
  readonly object?: string;
}

export function aiVisionModelValidationDatasetToTerraform(struct?: AiVisionModelValidationDatasetOutputReference | AiVisionModelValidationDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    dataset_type: cdktf.stringToTerraform(struct!.datasetType),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function aiVisionModelValidationDatasetToHclTerraform(struct?: AiVisionModelValidationDatasetOutputReference | AiVisionModelValidationDataset): any {
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
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_type: {
      value: cdktf.stringToHclTerraform(struct!.datasetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AiVisionModelValidationDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AiVisionModelValidationDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._datasetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetType = this._datasetType;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AiVisionModelValidationDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._datasetId = undefined;
      this._datasetType = undefined;
      this._namespaceName = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._datasetId = value.datasetId;
      this._datasetType = value.datasetType;
      this._namespaceName = value.namespaceName;
      this._object = value.object;
    }
  }

  // bucket - computed: true, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // dataset_type - computed: false, optional: false, required: true
  private _datasetType?: string; 
  public get datasetType() {
    return this.getStringAttribute('dataset_type');
  }
  public set datasetType(value: string) {
    this._datasetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTypeInput() {
    return this._datasetType;
  }

  // namespace_name - computed: true, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model oci_ai_vision_model}
*/
export class AiVisionModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_ai_vision_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AiVisionModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AiVisionModel to import
  * @param importFromId The id of the existing AiVisionModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AiVisionModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_ai_vision_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/ai_vision_model oci_ai_vision_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AiVisionModelConfig
  */
  public constructor(scope: Construct, id: string, config: AiVisionModelConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_ai_vision_model',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isQuickMode = config.isQuickMode;
    this._maxTrainingDurationInHours = config.maxTrainingDurationInHours;
    this._modelType = config.modelType;
    this._modelVersion = config.modelVersion;
    this._projectId = config.projectId;
    this._testingDataset.internalValue = config.testingDataset;
    this._timeouts.internalValue = config.timeouts;
    this._trainingDataset.internalValue = config.trainingDataset;
    this._validationDataset.internalValue = config.validationDataset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // average_precision - computed: true, optional: false, required: false
  public get averagePrecision() {
    return this.getNumberAttribute('average_precision');
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

  // confidence_threshold - computed: true, optional: false, required: false
  public get confidenceThreshold() {
    return this.getNumberAttribute('confidence_threshold');
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

  // description - computed: true, optional: true, required: false
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

  // is_quick_mode - computed: true, optional: true, required: false
  private _isQuickMode?: boolean | cdktf.IResolvable; 
  public get isQuickMode() {
    return this.getBooleanAttribute('is_quick_mode');
  }
  public set isQuickMode(value: boolean | cdktf.IResolvable) {
    this._isQuickMode = value;
  }
  public resetIsQuickMode() {
    this._isQuickMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isQuickModeInput() {
    return this._isQuickMode;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // max_training_duration_in_hours - computed: true, optional: true, required: false
  private _maxTrainingDurationInHours?: number; 
  public get maxTrainingDurationInHours() {
    return this.getNumberAttribute('max_training_duration_in_hours');
  }
  public set maxTrainingDurationInHours(value: number) {
    this._maxTrainingDurationInHours = value;
  }
  public resetMaxTrainingDurationInHours() {
    this._maxTrainingDurationInHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrainingDurationInHoursInput() {
    return this._maxTrainingDurationInHours;
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getStringAttribute('metrics');
  }

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // model_version - computed: true, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
  }

  // precision - computed: true, optional: false, required: false
  public get precision() {
    return this.getNumberAttribute('precision');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // recall - computed: true, optional: false, required: false
  public get recall() {
    return this.getNumberAttribute('recall');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // test_image_count - computed: true, optional: false, required: false
  public get testImageCount() {
    return this.getNumberAttribute('test_image_count');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_image_count - computed: true, optional: false, required: false
  public get totalImageCount() {
    return this.getNumberAttribute('total_image_count');
  }

  // trained_duration_in_hours - computed: true, optional: false, required: false
  public get trainedDurationInHours() {
    return this.getNumberAttribute('trained_duration_in_hours');
  }

  // testing_dataset - computed: false, optional: true, required: false
  private _testingDataset = new AiVisionModelTestingDatasetOutputReference(this, "testing_dataset");
  public get testingDataset() {
    return this._testingDataset;
  }
  public putTestingDataset(value: AiVisionModelTestingDataset) {
    this._testingDataset.internalValue = value;
  }
  public resetTestingDataset() {
    this._testingDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testingDatasetInput() {
    return this._testingDataset.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AiVisionModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AiVisionModelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // training_dataset - computed: false, optional: false, required: true
  private _trainingDataset = new AiVisionModelTrainingDatasetOutputReference(this, "training_dataset");
  public get trainingDataset() {
    return this._trainingDataset;
  }
  public putTrainingDataset(value: AiVisionModelTrainingDataset) {
    this._trainingDataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingDatasetInput() {
    return this._trainingDataset.internalValue;
  }

  // validation_dataset - computed: false, optional: true, required: false
  private _validationDataset = new AiVisionModelValidationDatasetOutputReference(this, "validation_dataset");
  public get validationDataset() {
    return this._validationDataset;
  }
  public putValidationDataset(value: AiVisionModelValidationDataset) {
    this._validationDataset.internalValue = value;
  }
  public resetValidationDataset() {
    this._validationDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationDatasetInput() {
    return this._validationDataset.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_quick_mode: cdktf.booleanToTerraform(this._isQuickMode),
      max_training_duration_in_hours: cdktf.numberToTerraform(this._maxTrainingDurationInHours),
      model_type: cdktf.stringToTerraform(this._modelType),
      model_version: cdktf.stringToTerraform(this._modelVersion),
      project_id: cdktf.stringToTerraform(this._projectId),
      testing_dataset: aiVisionModelTestingDatasetToTerraform(this._testingDataset.internalValue),
      timeouts: aiVisionModelTimeoutsToTerraform(this._timeouts.internalValue),
      training_dataset: aiVisionModelTrainingDatasetToTerraform(this._trainingDataset.internalValue),
      validation_dataset: aiVisionModelValidationDatasetToTerraform(this._validationDataset.internalValue),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      is_quick_mode: {
        value: cdktf.booleanToHclTerraform(this._isQuickMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_training_duration_in_hours: {
        value: cdktf.numberToHclTerraform(this._maxTrainingDurationInHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model_type: {
        value: cdktf.stringToHclTerraform(this._modelType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_version: {
        value: cdktf.stringToHclTerraform(this._modelVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      testing_dataset: {
        value: aiVisionModelTestingDatasetToHclTerraform(this._testingDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionModelTestingDatasetList",
      },
      timeouts: {
        value: aiVisionModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AiVisionModelTimeouts",
      },
      training_dataset: {
        value: aiVisionModelTrainingDatasetToHclTerraform(this._trainingDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionModelTrainingDatasetList",
      },
      validation_dataset: {
        value: aiVisionModelValidationDatasetToHclTerraform(this._validationDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AiVisionModelValidationDatasetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
