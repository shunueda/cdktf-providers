// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata;
  /**
  * APIMgmtSpec defines the desired state of APIMgmt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#spec DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#labels DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#name DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets {
  /**
  * Description - Description of API Version Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#description DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * ID - Identifier for existing API Version Set. Omit this value to create a new Version Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#id DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name - The display Name of the API Version Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#name DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSetsToTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSetsToHclTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
    }
  }

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

  // id - computed: false, optional: true, required: false
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
export interface DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties {
  /**
  * APIRevision - Describes the Revision of the Api. If no value is provided, default revision 1 is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_revision DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_revision}
  */
  readonly apiRevision?: string;
  /**
  * APIRevisionDescription - Description of the Api Revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_revision_description DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_revision_description}
  */
  readonly apiRevisionDescription?: string;
  /**
  * APIVersion - Indicates the Version identifier of the API if the API is versioned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_version DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * APIVersionDescription - Description of the Api Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_version_description DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_version_description}
  */
  readonly apiVersionDescription?: string;
  /**
  * APIVersionSetID - A resource identifier for the related ApiVersionSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_version_set_id DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_version_set_id}
  */
  readonly apiVersionSetId?: string;
  /**
  * APIVersionSet - APIVersionSetContractDetails an API Version Set contains the common configuration for a set of API versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_version_sets DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_version_sets}
  */
  readonly apiVersionSets?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets;
  /**
  * Description - Description of the API. May include HTML formatting tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#description DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * DisplayName - API name. Must be 1 to 300 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#display_name DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#display_name}
  */
  readonly displayName?: string;
  /**
  * Format - Format of the Content in which the API is getting imported. Possible values include: 'WadlXML', 'WadlLinkJSON', 'SwaggerJSON', 'SwaggerLinkJSON', 'Wsdl', 'WsdlLink', 'Openapi', 'Openapijson', 'OpenapiLink'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#format DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#format}
  */
  readonly format?: string;
  /**
  * IsCurrent - Indicates if API revision is current api revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#is_current DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#is_current}
  */
  readonly isCurrent?: boolean | cdktf.IResolvable;
  /**
  * IsOnline - READ-ONLY; Indicates if API revision is accessible via the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#is_online DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#is_online}
  */
  readonly isOnline?: boolean | cdktf.IResolvable;
  /**
  * Path - Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#path DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Protocols - Describes on which protocols the operations in this API can be invoked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#protocols DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#protocols}
  */
  readonly protocols?: string[];
  /**
  * ServiceURL - Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#service_url DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#service_url}
  */
  readonly serviceUrl?: string;
  /**
  * SourceAPIID - API identifier of the source API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#source_api_id DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#source_api_id}
  */
  readonly sourceApiId?: string;
  /**
  * SubscriptionRequired - Specifies whether an API or Product subscription is required for accessing the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#subscription_required DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#subscription_required}
  */
  readonly subscriptionRequired?: boolean | cdktf.IResolvable;
}

export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesToTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_revision: cdktf.stringToTerraform(struct!.apiRevision),
    api_revision_description: cdktf.stringToTerraform(struct!.apiRevisionDescription),
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    api_version_description: cdktf.stringToTerraform(struct!.apiVersionDescription),
    api_version_set_id: cdktf.stringToTerraform(struct!.apiVersionSetId),
    api_version_sets: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSetsToTerraform(struct!.apiVersionSets),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    format: cdktf.stringToTerraform(struct!.format),
    is_current: cdktf.booleanToTerraform(struct!.isCurrent),
    is_online: cdktf.booleanToTerraform(struct!.isOnline),
    path: cdktf.stringToTerraform(struct!.path),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    service_url: cdktf.stringToTerraform(struct!.serviceUrl),
    source_api_id: cdktf.stringToTerraform(struct!.sourceApiId),
    subscription_required: cdktf.booleanToTerraform(struct!.subscriptionRequired),
  }
}


export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesToHclTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_revision: {
      value: cdktf.stringToHclTerraform(struct!.apiRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_revision_description: {
      value: cdktf.stringToHclTerraform(struct!.apiRevisionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version_description: {
      value: cdktf.stringToHclTerraform(struct!.apiVersionDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version_set_id: {
      value: cdktf.stringToHclTerraform(struct!.apiVersionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_version_sets: {
      value: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSetsToHclTerraform(struct!.apiVersionSets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_current: {
      value: cdktf.booleanToHclTerraform(struct!.isCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_online: {
      value: cdktf.booleanToHclTerraform(struct!.isOnline),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_url: {
      value: cdktf.stringToHclTerraform(struct!.serviceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_api_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceApiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_required: {
      value: cdktf.booleanToHclTerraform(struct!.subscriptionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRevision = this._apiRevision;
    }
    if (this._apiRevisionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiRevisionDescription = this._apiRevisionDescription;
    }
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._apiVersionDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersionDescription = this._apiVersionDescription;
    }
    if (this._apiVersionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersionSetId = this._apiVersionSetId;
    }
    if (this._apiVersionSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersionSets = this._apiVersionSets?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._isCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCurrent = this._isCurrent;
    }
    if (this._isOnline !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOnline = this._isOnline;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._serviceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUrl = this._serviceUrl;
    }
    if (this._sourceApiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceApiId = this._sourceApiId;
    }
    if (this._subscriptionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionRequired = this._subscriptionRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiRevision = undefined;
      this._apiRevisionDescription = undefined;
      this._apiVersion = undefined;
      this._apiVersionDescription = undefined;
      this._apiVersionSetId = undefined;
      this._apiVersionSets.internalValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._format = undefined;
      this._isCurrent = undefined;
      this._isOnline = undefined;
      this._path = undefined;
      this._protocols = undefined;
      this._serviceUrl = undefined;
      this._sourceApiId = undefined;
      this._subscriptionRequired = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiRevision = value.apiRevision;
      this._apiRevisionDescription = value.apiRevisionDescription;
      this._apiVersion = value.apiVersion;
      this._apiVersionDescription = value.apiVersionDescription;
      this._apiVersionSetId = value.apiVersionSetId;
      this._apiVersionSets.internalValue = value.apiVersionSets;
      this._description = value.description;
      this._displayName = value.displayName;
      this._format = value.format;
      this._isCurrent = value.isCurrent;
      this._isOnline = value.isOnline;
      this._path = value.path;
      this._protocols = value.protocols;
      this._serviceUrl = value.serviceUrl;
      this._sourceApiId = value.sourceApiId;
      this._subscriptionRequired = value.subscriptionRequired;
    }
  }

  // api_revision - computed: false, optional: true, required: false
  private _apiRevision?: string; 
  public get apiRevision() {
    return this.getStringAttribute('api_revision');
  }
  public set apiRevision(value: string) {
    this._apiRevision = value;
  }
  public resetApiRevision() {
    this._apiRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRevisionInput() {
    return this._apiRevision;
  }

  // api_revision_description - computed: false, optional: true, required: false
  private _apiRevisionDescription?: string; 
  public get apiRevisionDescription() {
    return this.getStringAttribute('api_revision_description');
  }
  public set apiRevisionDescription(value: string) {
    this._apiRevisionDescription = value;
  }
  public resetApiRevisionDescription() {
    this._apiRevisionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRevisionDescriptionInput() {
    return this._apiRevisionDescription;
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // api_version_description - computed: false, optional: true, required: false
  private _apiVersionDescription?: string; 
  public get apiVersionDescription() {
    return this.getStringAttribute('api_version_description');
  }
  public set apiVersionDescription(value: string) {
    this._apiVersionDescription = value;
  }
  public resetApiVersionDescription() {
    this._apiVersionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionDescriptionInput() {
    return this._apiVersionDescription;
  }

  // api_version_set_id - computed: false, optional: true, required: false
  private _apiVersionSetId?: string; 
  public get apiVersionSetId() {
    return this.getStringAttribute('api_version_set_id');
  }
  public set apiVersionSetId(value: string) {
    this._apiVersionSetId = value;
  }
  public resetApiVersionSetId() {
    this._apiVersionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionSetIdInput() {
    return this._apiVersionSetId;
  }

  // api_version_sets - computed: false, optional: true, required: false
  private _apiVersionSets = new DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSetsOutputReference(this, "api_version_sets");
  public get apiVersionSets() {
    return this._apiVersionSets;
  }
  public putApiVersionSets(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesApiVersionSets) {
    this._apiVersionSets.internalValue = value;
  }
  public resetApiVersionSets() {
    this._apiVersionSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionSetsInput() {
    return this._apiVersionSets.internalValue;
  }

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

  // display_name - computed: false, optional: true, required: false
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

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // is_current - computed: false, optional: true, required: false
  private _isCurrent?: boolean | cdktf.IResolvable; 
  public get isCurrent() {
    return this.getBooleanAttribute('is_current');
  }
  public set isCurrent(value: boolean | cdktf.IResolvable) {
    this._isCurrent = value;
  }
  public resetIsCurrent() {
    this._isCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCurrentInput() {
    return this._isCurrent;
  }

  // is_online - computed: false, optional: true, required: false
  private _isOnline?: boolean | cdktf.IResolvable; 
  public get isOnline() {
    return this.getBooleanAttribute('is_online');
  }
  public set isOnline(value: boolean | cdktf.IResolvable) {
    this._isOnline = value;
  }
  public resetIsOnline() {
    this._isOnline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOnlineInput() {
    return this._isOnline;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // service_url - computed: false, optional: true, required: false
  private _serviceUrl?: string; 
  public get serviceUrl() {
    return this.getStringAttribute('service_url');
  }
  public set serviceUrl(value: string) {
    this._serviceUrl = value;
  }
  public resetServiceUrl() {
    this._serviceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUrlInput() {
    return this._serviceUrl;
  }

  // source_api_id - computed: false, optional: true, required: false
  private _sourceApiId?: string; 
  public get sourceApiId() {
    return this.getStringAttribute('source_api_id');
  }
  public set sourceApiId(value: string) {
    this._sourceApiId = value;
  }
  public resetSourceApiId() {
    this._sourceApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceApiIdInput() {
    return this._sourceApiId;
  }

  // subscription_required - computed: false, optional: true, required: false
  private _subscriptionRequired?: boolean | cdktf.IResolvable; 
  public get subscriptionRequired() {
    return this.getBooleanAttribute('subscription_required');
  }
  public set subscriptionRequired(value: boolean | cdktf.IResolvable) {
    this._subscriptionRequired = value;
  }
  public resetSubscriptionRequired() {
    this._subscriptionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionRequiredInput() {
    return this._subscriptionRequired;
  }
}
export interface DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_id DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#api_service DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#api_service}
  */
  readonly apiService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#location DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#properties DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#properties}
  */
  readonly properties: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
}

export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    api_service: cdktf.stringToTerraform(struct!.apiService),
    location: cdktf.stringToTerraform(struct!.location),
    properties: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesToTerraform(struct!.properties),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_id: {
      value: cdktf.stringToHclTerraform(struct!.apiId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_service: {
      value: cdktf.stringToHclTerraform(struct!.apiService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiId !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiId = this._apiId;
    }
    if (this._apiService !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiService = this._apiService;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiId = undefined;
      this._apiService = undefined;
      this._location = undefined;
      this._properties.internalValue = undefined;
      this._resourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiId = value.apiId;
      this._apiService = value.apiService;
      this._location = value.location;
      this._properties.internalValue = value.properties;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_service - computed: false, optional: false, required: true
  private _apiService?: string; 
  public get apiService() {
    return this.getStringAttribute('api_service');
  }
  public set apiService(value: string) {
    this._apiService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServiceInput() {
    return this._apiService;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest k8s_azure_microsoft_com_api_mgmt_api_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_api_mgmt_api_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_api_mgmt_api_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/azure_microsoft_com_api_mgmt_api_v1alpha1_manifest k8s_azure_microsoft_com_api_mgmt_api_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_api_mgmt_api_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComApiMgmtApiV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
