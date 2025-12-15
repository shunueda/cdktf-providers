// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#metadata DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata;
  /**
  * DicomStudyBindingSpec defines the desired state of DicomStudyBinding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#spec DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec;
}
export interface DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#annotations DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#labels DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#name DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#namespace DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
}
export interface DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#name DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding {
  /**
  * Container Concurrency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#concurrency DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#image DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Max Replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#max_replicas DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#max_replicas}
  */
  readonly maxReplicas?: number;
  /**
  * Min Replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#min_replicas DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#min_replicas}
  */
  readonly minReplicas?: number;
}

export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBindingToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    image: cdktf.stringToTerraform(struct!.image),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBindingToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrency = undefined;
      this._image = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrency = value.concurrency;
      this._image = value.image;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
    }
  }

  // concurrency - computed: false, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // max_replicas - computed: false, optional: true, required: false
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  public resetMaxReplicas() {
    this._maxReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }
}
export interface DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec {
  /**
  * Binding Config Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#binding_config_name DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#binding_config_name}
  */
  readonly bindingConfigName?: string;
  /**
  * Binding Secret Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#binding_secret_name DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#binding_secret_name}
  */
  readonly bindingSecretName?: string;
  /**
  * DICOM Event Driven Ingestion Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#dicom_event_driven_ingestion_name DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#dicom_event_driven_ingestion_name}
  */
  readonly dicomEventDrivenIngestionName: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#image_pull_policy DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image Pull Secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#image_pull_secrets DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Study Binding Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#study_binding DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest#study_binding}
  */
  readonly studyBinding?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding;
}

export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_config_name: cdktf.stringToTerraform(struct!.bindingConfigName),
    binding_secret_name: cdktf.stringToTerraform(struct!.bindingSecretName),
    dicom_event_driven_ingestion_name: cdktf.stringToTerraform(struct!.dicomEventDrivenIngestionName),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    study_binding: dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBindingToTerraform(struct!.studyBinding),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_config_name: {
      value: cdktf.stringToHclTerraform(struct!.bindingConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binding_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.bindingSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dicom_event_driven_ingestion_name: {
      value: cdktf.stringToHclTerraform(struct!.dicomEventDrivenIngestionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsList",
    },
    study_binding: {
      value: dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBindingToHclTerraform(struct!.studyBinding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingConfigName = this._bindingConfigName;
    }
    if (this._bindingSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingSecretName = this._bindingSecretName;
    }
    if (this._dicomEventDrivenIngestionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dicomEventDrivenIngestionName = this._dicomEventDrivenIngestionName;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._studyBinding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.studyBinding = this._studyBinding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindingConfigName = undefined;
      this._bindingSecretName = undefined;
      this._dicomEventDrivenIngestionName = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._studyBinding.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindingConfigName = value.bindingConfigName;
      this._bindingSecretName = value.bindingSecretName;
      this._dicomEventDrivenIngestionName = value.dicomEventDrivenIngestionName;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._studyBinding.internalValue = value.studyBinding;
    }
  }

  // binding_config_name - computed: false, optional: true, required: false
  private _bindingConfigName?: string; 
  public get bindingConfigName() {
    return this.getStringAttribute('binding_config_name');
  }
  public set bindingConfigName(value: string) {
    this._bindingConfigName = value;
  }
  public resetBindingConfigName() {
    this._bindingConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingConfigNameInput() {
    return this._bindingConfigName;
  }

  // binding_secret_name - computed: false, optional: true, required: false
  private _bindingSecretName?: string; 
  public get bindingSecretName() {
    return this.getStringAttribute('binding_secret_name');
  }
  public set bindingSecretName(value: string) {
    this._bindingSecretName = value;
  }
  public resetBindingSecretName() {
    this._bindingSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingSecretNameInput() {
    return this._bindingSecretName;
  }

  // dicom_event_driven_ingestion_name - computed: false, optional: false, required: true
  private _dicomEventDrivenIngestionName?: string; 
  public get dicomEventDrivenIngestionName() {
    return this.getStringAttribute('dicom_event_driven_ingestion_name');
  }
  public set dicomEventDrivenIngestionName(value: string) {
    this._dicomEventDrivenIngestionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dicomEventDrivenIngestionNameInput() {
    return this._dicomEventDrivenIngestionName;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // study_binding - computed: false, optional: true, required: false
  private _studyBinding = new DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBindingOutputReference(this, "study_binding");
  public get studyBinding() {
    return this._studyBinding;
  }
  public putStudyBinding(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecStudyBinding) {
    this._studyBinding.internalValue = value;
  }
  public resetStudyBinding() {
    this._studyBinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get studyBindingInput() {
    return this._studyBinding.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest k8s_imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest}
*/
export class DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest k8s_imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_imaging_ingestion_alvearie_org_dicom_study_binding_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImagingIngestionAlvearieOrgDicomStudyBindingV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
