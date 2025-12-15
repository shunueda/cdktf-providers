// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#metadata DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata;
  /**
  * DimseIngestionServiceSpec defines the desired state of DimseIngestionService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#spec DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec;
}
export interface DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#annotations DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#labels DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#name DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#namespace DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService {
  /**
  * Image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#image DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#image}
  */
  readonly image?: string;
}

export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseServiceToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseServiceToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
    }
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
}
export interface DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#name DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec {
  /**
  * Application Entity Title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#application_entity_title DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#application_entity_title}
  */
  readonly applicationEntityTitle?: string;
  /**
  * Bucket Config Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#bucket_config_name DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#bucket_config_name}
  */
  readonly bucketConfigName?: string;
  /**
  * Bucket Secret Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#bucket_secret_name DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#bucket_secret_name}
  */
  readonly bucketSecretName?: string;
  /**
  * DICOM Event Driven Ingestion Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#dicom_event_driven_ingestion_name DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#dicom_event_driven_ingestion_name}
  */
  readonly dicomEventDrivenIngestionName: string;
  /**
  * DIMSE Service Spec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#dimse_service DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#dimse_service}
  */
  readonly dimseService?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#image_pull_policy DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image Pull Secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#image_pull_secrets DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Make NATS Connection Secure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#nats_secure DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#nats_secure}
  */
  readonly natsSecure?: boolean | cdktf.IResolvable;
  /**
  * NATS Subject Root
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#nats_subject_root DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#nats_subject_root}
  */
  readonly natsSubjectRoot?: string;
  /**
  * NATS Token Secret Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#nats_token_secret DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#nats_token_secret}
  */
  readonly natsTokenSecret?: string;
  /**
  * NATS URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#nats_url DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#nats_url}
  */
  readonly natsUrl?: string;
  /**
  * Provider Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#provider_name DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest#provider_name}
  */
  readonly providerName?: string;
}

export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_entity_title: cdktf.stringToTerraform(struct!.applicationEntityTitle),
    bucket_config_name: cdktf.stringToTerraform(struct!.bucketConfigName),
    bucket_secret_name: cdktf.stringToTerraform(struct!.bucketSecretName),
    dicom_event_driven_ingestion_name: cdktf.stringToTerraform(struct!.dicomEventDrivenIngestionName),
    dimse_service: dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseServiceToTerraform(struct!.dimseService),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    nats_secure: cdktf.booleanToTerraform(struct!.natsSecure),
    nats_subject_root: cdktf.stringToTerraform(struct!.natsSubjectRoot),
    nats_token_secret: cdktf.stringToTerraform(struct!.natsTokenSecret),
    nats_url: cdktf.stringToTerraform(struct!.natsUrl),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
  }
}


export function dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_entity_title: {
      value: cdktf.stringToHclTerraform(struct!.applicationEntityTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_config_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketSecretName),
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
    dimse_service: {
      value: dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseServiceToHclTerraform(struct!.dimseService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsList",
    },
    nats_secure: {
      value: cdktf.booleanToHclTerraform(struct!.natsSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nats_subject_root: {
      value: cdktf.stringToHclTerraform(struct!.natsSubjectRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nats_token_secret: {
      value: cdktf.stringToHclTerraform(struct!.natsTokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nats_url: {
      value: cdktf.stringToHclTerraform(struct!.natsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationEntityTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationEntityTitle = this._applicationEntityTitle;
    }
    if (this._bucketConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketConfigName = this._bucketConfigName;
    }
    if (this._bucketSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSecretName = this._bucketSecretName;
    }
    if (this._dicomEventDrivenIngestionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dicomEventDrivenIngestionName = this._dicomEventDrivenIngestionName;
    }
    if (this._dimseService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimseService = this._dimseService?.internalValue;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._natsSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.natsSecure = this._natsSecure;
    }
    if (this._natsSubjectRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.natsSubjectRoot = this._natsSubjectRoot;
    }
    if (this._natsTokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.natsTokenSecret = this._natsTokenSecret;
    }
    if (this._natsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.natsUrl = this._natsUrl;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationEntityTitle = undefined;
      this._bucketConfigName = undefined;
      this._bucketSecretName = undefined;
      this._dicomEventDrivenIngestionName = undefined;
      this._dimseService.internalValue = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._natsSecure = undefined;
      this._natsSubjectRoot = undefined;
      this._natsTokenSecret = undefined;
      this._natsUrl = undefined;
      this._providerName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationEntityTitle = value.applicationEntityTitle;
      this._bucketConfigName = value.bucketConfigName;
      this._bucketSecretName = value.bucketSecretName;
      this._dicomEventDrivenIngestionName = value.dicomEventDrivenIngestionName;
      this._dimseService.internalValue = value.dimseService;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._natsSecure = value.natsSecure;
      this._natsSubjectRoot = value.natsSubjectRoot;
      this._natsTokenSecret = value.natsTokenSecret;
      this._natsUrl = value.natsUrl;
      this._providerName = value.providerName;
    }
  }

  // application_entity_title - computed: false, optional: true, required: false
  private _applicationEntityTitle?: string; 
  public get applicationEntityTitle() {
    return this.getStringAttribute('application_entity_title');
  }
  public set applicationEntityTitle(value: string) {
    this._applicationEntityTitle = value;
  }
  public resetApplicationEntityTitle() {
    this._applicationEntityTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEntityTitleInput() {
    return this._applicationEntityTitle;
  }

  // bucket_config_name - computed: false, optional: true, required: false
  private _bucketConfigName?: string; 
  public get bucketConfigName() {
    return this.getStringAttribute('bucket_config_name');
  }
  public set bucketConfigName(value: string) {
    this._bucketConfigName = value;
  }
  public resetBucketConfigName() {
    this._bucketConfigName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketConfigNameInput() {
    return this._bucketConfigName;
  }

  // bucket_secret_name - computed: false, optional: true, required: false
  private _bucketSecretName?: string; 
  public get bucketSecretName() {
    return this.getStringAttribute('bucket_secret_name');
  }
  public set bucketSecretName(value: string) {
    this._bucketSecretName = value;
  }
  public resetBucketSecretName() {
    this._bucketSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSecretNameInput() {
    return this._bucketSecretName;
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

  // dimse_service - computed: false, optional: true, required: false
  private _dimseService = new DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseServiceOutputReference(this, "dimse_service");
  public get dimseService() {
    return this._dimseService;
  }
  public putDimseService(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecDimseService) {
    this._dimseService.internalValue = value;
  }
  public resetDimseService() {
    this._dimseService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimseServiceInput() {
    return this._dimseService.internalValue;
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
  private _imagePullSecrets = new DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // nats_secure - computed: false, optional: true, required: false
  private _natsSecure?: boolean | cdktf.IResolvable; 
  public get natsSecure() {
    return this.getBooleanAttribute('nats_secure');
  }
  public set natsSecure(value: boolean | cdktf.IResolvable) {
    this._natsSecure = value;
  }
  public resetNatsSecure() {
    this._natsSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natsSecureInput() {
    return this._natsSecure;
  }

  // nats_subject_root - computed: false, optional: true, required: false
  private _natsSubjectRoot?: string; 
  public get natsSubjectRoot() {
    return this.getStringAttribute('nats_subject_root');
  }
  public set natsSubjectRoot(value: string) {
    this._natsSubjectRoot = value;
  }
  public resetNatsSubjectRoot() {
    this._natsSubjectRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natsSubjectRootInput() {
    return this._natsSubjectRoot;
  }

  // nats_token_secret - computed: false, optional: true, required: false
  private _natsTokenSecret?: string; 
  public get natsTokenSecret() {
    return this.getStringAttribute('nats_token_secret');
  }
  public set natsTokenSecret(value: string) {
    this._natsTokenSecret = value;
  }
  public resetNatsTokenSecret() {
    this._natsTokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natsTokenSecretInput() {
    return this._natsTokenSecret;
  }

  // nats_url - computed: false, optional: true, required: false
  private _natsUrl?: string; 
  public get natsUrl() {
    return this.getStringAttribute('nats_url');
  }
  public set natsUrl(value: string) {
    this._natsUrl = value;
  }
  public resetNatsUrl() {
    this._natsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natsUrlInput() {
    return this._natsUrl;
  }

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest k8s_imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest}
*/
export class DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest k8s_imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_imaging_ingestion_alvearie_org_dimse_ingestion_service_v1alpha1_manifest',
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
  private _metadata = new DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SImagingIngestionAlvearieOrgDimseIngestionServiceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
