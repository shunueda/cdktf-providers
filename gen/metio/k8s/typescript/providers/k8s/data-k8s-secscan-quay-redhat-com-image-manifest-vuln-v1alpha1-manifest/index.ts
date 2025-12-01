// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#metadata DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#spec DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec;
}
export interface DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#annotations DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#labels DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#name DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#namespace DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#description DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#fixedby DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#fixedby}
  */
  readonly fixedby?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#link DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#link}
  */
  readonly link?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#metadata DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#name DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#namespace_name DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#severity DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#severity}
  */
  readonly severity?: string;
}

export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesToTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fixedby: cdktf.stringToTerraform(struct!.fixedby),
    link: cdktf.stringToTerraform(struct!.link),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesToHclTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities | cdktf.IResolvable): any {
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
    fixedby: {
      value: cdktf.stringToHclTerraform(struct!.fixedby),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link: {
      value: cdktf.stringToHclTerraform(struct!.link),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
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
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fixedby !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedby = this._fixedby;
    }
    if (this._link !== undefined) {
      hasAnyValues = true;
      internalValueResult.link = this._link;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fixedby = undefined;
      this._link = undefined;
      this._metadata = undefined;
      this._name = undefined;
      this._namespaceName = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fixedby = value.fixedby;
      this._link = value.link;
      this._metadata = value.metadata;
      this._name = value.name;
      this._namespaceName = value.namespaceName;
      this._severity = value.severity;
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

  // fixedby - computed: false, optional: true, required: false
  private _fixedby?: string; 
  public get fixedby() {
    return this.getStringAttribute('fixedby');
  }
  public set fixedby(value: string) {
    this._fixedby = value;
  }
  public resetFixedby() {
    this._fixedby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedbyInput() {
    return this._fixedby;
  }

  // link - computed: false, optional: true, required: false
  private _link?: string; 
  public get link() {
    return this.getStringAttribute('link');
  }
  public set link(value: string) {
    this._link = value;
  }
  public resetLink() {
    this._link = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkInput() {
    return this._link;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // namespace_name - computed: false, optional: true, required: false
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

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesOutputReference {
    return new DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#name DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#namespace_name DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#version DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#versionformat DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#versionformat}
  */
  readonly versionformat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#vulnerabilities DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#vulnerabilities}
  */
  readonly vulnerabilities?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities[] | cdktf.IResolvable;
}

export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesToTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
    version: cdktf.stringToTerraform(struct!.version),
    versionformat: cdktf.stringToTerraform(struct!.versionformat),
    vulnerabilities: cdktf.listMapper(dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesToTerraform, false)(struct!.vulnerabilities),
  }
}


export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesToHclTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures | cdktf.IResolvable): any {
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
    namespace_name: {
      value: cdktf.stringToHclTerraform(struct!.namespaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versionformat: {
      value: cdktf.stringToHclTerraform(struct!.versionformat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerabilities: {
      value: cdktf.listMapperHcl(dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesToHclTerraform, false)(struct!.vulnerabilities),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionformat = this._versionformat;
    }
    if (this._vulnerabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilities = this._vulnerabilities?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespaceName = undefined;
      this._version = undefined;
      this._versionformat = undefined;
      this._vulnerabilities.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespaceName = value.namespaceName;
      this._version = value.version;
      this._versionformat = value.versionformat;
      this._vulnerabilities.internalValue = value.vulnerabilities;
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

  // namespace_name - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // versionformat - computed: false, optional: true, required: false
  private _versionformat?: string; 
  public get versionformat() {
    return this.getStringAttribute('versionformat');
  }
  public set versionformat(value: string) {
    this._versionformat = value;
  }
  public resetVersionformat() {
    this._versionformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionformatInput() {
    return this._versionformat;
  }

  // vulnerabilities - computed: false, optional: true, required: false
  private _vulnerabilities = new DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilitiesList(this, "vulnerabilities", false);
  public get vulnerabilities() {
    return this._vulnerabilities;
  }
  public putVulnerabilities(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesVulnerabilities[] | cdktf.IResolvable) {
    this._vulnerabilities.internalValue = value;
  }
  public resetVulnerabilities() {
    this._vulnerabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilitiesInput() {
    return this._vulnerabilities.internalValue;
  }
}

export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesOutputReference {
    return new DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#features DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#features}
  */
  readonly features?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#image DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#manifest DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#manifest}
  */
  readonly manifest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#namespace_name DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest#namespace_name}
  */
  readonly namespaceName?: string;
}

export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    features: cdktf.listMapper(dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesToTerraform, false)(struct!.features),
    image: cdktf.stringToTerraform(struct!.image),
    manifest: cdktf.stringToTerraform(struct!.manifest),
    namespace_name: cdktf.stringToTerraform(struct!.namespaceName),
  }
}


export function dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    features: {
      value: cdktf.listMapperHcl(dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesToHclTerraform, false)(struct!.features),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    manifest: {
      value: cdktf.stringToHclTerraform(struct!.manifest),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._features?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._manifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest;
    }
    if (this._namespaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceName = this._namespaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._features.internalValue = undefined;
      this._image = undefined;
      this._manifest = undefined;
      this._namespaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._features.internalValue = value.features;
      this._image = value.image;
      this._manifest = value.manifest;
      this._namespaceName = value.namespaceName;
    }
  }

  // features - computed: false, optional: true, required: false
  private _features = new DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
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

  // manifest - computed: false, optional: true, required: false
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
  }

  // namespace_name - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest k8s_secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest}
*/
export class DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest k8s_secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_secscan_quay_redhat_com_image_manifest_vuln_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecscanQuayRedhatComImageManifestVulnV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
