// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata;
  /**
  * ApimServiceSpec defines the desired state of ApimService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#spec DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#labels DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#name DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#app_insights_name DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#app_insights_name}
  */
  readonly appInsightsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#app_insights_resource_group DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#app_insights_resource_group}
  */
  readonly appInsightsResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#location DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#publisher_email DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#publisher_email}
  */
  readonly publisherEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#publisher_name DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#publisher_name}
  */
  readonly publisherName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#tier DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#tier}
  */
  readonly tier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#vnet_name DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#vnet_resource_group DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#vnet_resource_group}
  */
  readonly vnetResourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#vnet_subnet_name DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#vnet_subnet_name}
  */
  readonly vnetSubnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#vnet_type DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest#vnet_type}
  */
  readonly vnetType?: string;
}

export function dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_insights_name: cdktf.stringToTerraform(struct!.appInsightsName),
    app_insights_resource_group: cdktf.stringToTerraform(struct!.appInsightsResourceGroup),
    location: cdktf.stringToTerraform(struct!.location),
    publisher_email: cdktf.stringToTerraform(struct!.publisherEmail),
    publisher_name: cdktf.stringToTerraform(struct!.publisherName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    tier: cdktf.stringToTerraform(struct!.tier),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
    vnet_resource_group: cdktf.stringToTerraform(struct!.vnetResourceGroup),
    vnet_subnet_name: cdktf.stringToTerraform(struct!.vnetSubnetName),
    vnet_type: cdktf.stringToTerraform(struct!.vnetType),
  }
}


export function dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_insights_name: {
      value: cdktf.stringToHclTerraform(struct!.appInsightsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_insights_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.appInsightsResourceGroup),
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
    publisher_email: {
      value: cdktf.stringToHclTerraform(struct!.publisherEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher_name: {
      value: cdktf.stringToHclTerraform(struct!.publisherName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tier: {
      value: cdktf.stringToHclTerraform(struct!.tier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vnetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetSubnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_type: {
      value: cdktf.stringToHclTerraform(struct!.vnetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appInsightsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInsightsName = this._appInsightsName;
    }
    if (this._appInsightsResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.appInsightsResourceGroup = this._appInsightsResourceGroup;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._publisherEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisherEmail = this._publisherEmail;
    }
    if (this._publisherName !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisherName = this._publisherName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    if (this._vnetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetResourceGroup = this._vnetResourceGroup;
    }
    if (this._vnetSubnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetSubnetName = this._vnetSubnetName;
    }
    if (this._vnetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetType = this._vnetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appInsightsName = undefined;
      this._appInsightsResourceGroup = undefined;
      this._location = undefined;
      this._publisherEmail = undefined;
      this._publisherName = undefined;
      this._resourceGroup = undefined;
      this._tier = undefined;
      this._vnetName = undefined;
      this._vnetResourceGroup = undefined;
      this._vnetSubnetName = undefined;
      this._vnetType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appInsightsName = value.appInsightsName;
      this._appInsightsResourceGroup = value.appInsightsResourceGroup;
      this._location = value.location;
      this._publisherEmail = value.publisherEmail;
      this._publisherName = value.publisherName;
      this._resourceGroup = value.resourceGroup;
      this._tier = value.tier;
      this._vnetName = value.vnetName;
      this._vnetResourceGroup = value.vnetResourceGroup;
      this._vnetSubnetName = value.vnetSubnetName;
      this._vnetType = value.vnetType;
    }
  }

  // app_insights_name - computed: false, optional: true, required: false
  private _appInsightsName?: string; 
  public get appInsightsName() {
    return this.getStringAttribute('app_insights_name');
  }
  public set appInsightsName(value: string) {
    this._appInsightsName = value;
  }
  public resetAppInsightsName() {
    this._appInsightsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInsightsNameInput() {
    return this._appInsightsName;
  }

  // app_insights_resource_group - computed: false, optional: true, required: false
  private _appInsightsResourceGroup?: string; 
  public get appInsightsResourceGroup() {
    return this.getStringAttribute('app_insights_resource_group');
  }
  public set appInsightsResourceGroup(value: string) {
    this._appInsightsResourceGroup = value;
  }
  public resetAppInsightsResourceGroup() {
    this._appInsightsResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInsightsResourceGroupInput() {
    return this._appInsightsResourceGroup;
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

  // publisher_email - computed: false, optional: false, required: true
  private _publisherEmail?: string; 
  public get publisherEmail() {
    return this.getStringAttribute('publisher_email');
  }
  public set publisherEmail(value: string) {
    this._publisherEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherEmailInput() {
    return this._publisherEmail;
  }

  // publisher_name - computed: false, optional: false, required: true
  private _publisherName?: string; 
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherNameInput() {
    return this._publisherName;
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

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // vnet_name - computed: false, optional: true, required: false
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  public resetVnetName() {
    this._vnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // vnet_resource_group - computed: false, optional: false, required: true
  private _vnetResourceGroup?: string; 
  public get vnetResourceGroup() {
    return this.getStringAttribute('vnet_resource_group');
  }
  public set vnetResourceGroup(value: string) {
    this._vnetResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetResourceGroupInput() {
    return this._vnetResourceGroup;
  }

  // vnet_subnet_name - computed: false, optional: true, required: false
  private _vnetSubnetName?: string; 
  public get vnetSubnetName() {
    return this.getStringAttribute('vnet_subnet_name');
  }
  public set vnetSubnetName(value: string) {
    this._vnetSubnetName = value;
  }
  public resetVnetSubnetName() {
    this._vnetSubnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetSubnetNameInput() {
    return this._vnetSubnetName;
  }

  // vnet_type - computed: false, optional: true, required: false
  private _vnetType?: string; 
  public get vnetType() {
    return this.getStringAttribute('vnet_type');
  }
  public set vnetType(value: string) {
    this._vnetType = value;
  }
  public resetVnetType() {
    this._vnetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetTypeInput() {
    return this._vnetType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest k8s_azure_microsoft_com_apim_service_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_apim_service_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComApimServiceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_apim_service_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_apim_service_v1alpha1_manifest k8s_azure_microsoft_com_apim_service_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_apim_service_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComApimServiceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
