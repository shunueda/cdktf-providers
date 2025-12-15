// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#metadata DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata;
  /**
  * VMNodeScrapeSpec defines specification for VMNodeScrape.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#spec DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec;
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#annotations DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#namespace DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadataToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentialsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentialsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization {
  /**
  * Reference to the secret with value for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#credentials DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#credentials}
  */
  readonly credentials?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials;
  /**
  * File with value for authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#credentials_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#credentials_file}
  */
  readonly credentialsFile?: string;
  /**
  * Type of authorization, default to bearer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#type DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credentials: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentialsToTerraform(struct!.credentials),
    credentials_file: cdktf.stringToTerraform(struct!.credentialsFile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credentials: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials",
    },
    credentials_file: {
      value: cdktf.stringToHclTerraform(struct!.credentialsFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._credentialsFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsFile = this._credentialsFile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentials.internalValue = undefined;
      this._credentialsFile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentials.internalValue = value.credentials;
      this._credentialsFile = value.credentialsFile;
      this._type = value.type;
    }
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // credentials_file - computed: false, optional: true, required: false
  private _credentialsFile?: string; 
  public get credentialsFile() {
    return this.getStringAttribute('credentials_file');
  }
  public set credentialsFile(value: string) {
    this._credentialsFile = value;
  }
  public resetCredentialsFile() {
    this._credentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsFileInput() {
    return this._credentialsFile;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#action DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * If represents metricsQL match expression (or list of expressions): '{__name__=~'foo_.*'}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#if DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#if}
  */
  readonly if?: { [key: string]: string };
  /**
  * Labels is used together with Match for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match is used together with Labels for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#match DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#match}
  */
  readonly match?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#modulus DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)' victoriaMetrics supports multiline regex joined with | https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#regex DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#regex}
  */
  readonly regex?: { [key: string]: string };
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#replacement DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#separator DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#source_labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#target_label DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    if: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.if),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    match: cdktf.stringToTerraform(struct!.match),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.if),
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
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.regex),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._if !== undefined) {
      hasAnyValues = true;
      internalValueResult.if = this._if;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._if = undefined;
      this._labels = undefined;
      this._match = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._if = value.if;
      this._labels = value.labels;
      this._match = value.match;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // if - computed: false, optional: true, required: false
  private _if?: { [key: string]: string }; 
  public get if() {
    return this.getStringMapAttribute('if');
  }
  public set if(value: { [key: string]: string }) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: { [key: string]: string }; 
  public get regex() {
    return this.getStringMapAttribute('regex');
  }
  public set regex(value: { [key: string]: string }) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2 {
  /**
  * The secret or configmap containing the OAuth2 client id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#client_id DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#client_id}
  */
  readonly clientId: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId;
  /**
  * The secret containing the OAuth2 client secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#client_secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret;
  /**
  * ClientSecretFile defines path for client secret file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#client_secret_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#client_secret_file}
  */
  readonly clientSecretFile?: string;
  /**
  * Parameters to append to the token URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#endpoint_params DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#endpoint_params}
  */
  readonly endpointParams?: { [key: string]: string };
  /**
  * OAuth2 scopes used for the token request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#scopes DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#scopes}
  */
  readonly scopes?: string[];
  /**
  * The URL to fetch the token from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#token_url DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#token_url}
  */
  readonly tokenUrl: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdToTerraform(struct!.clientId),
    client_secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecretToTerraform(struct!.clientSecret),
    client_secret_file: cdktf.stringToTerraform(struct!.clientSecretFile),
    endpoint_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointParams),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdToHclTerraform(struct!.clientId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId",
    },
    client_secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret",
    },
    client_secret_file: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId?.internalValue;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._clientSecretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretFile = this._clientSecretFile;
    }
    if (this._endpointParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointParams = this._endpointParams;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId.internalValue = undefined;
      this._clientSecret.internalValue = undefined;
      this._clientSecretFile = undefined;
      this._endpointParams = undefined;
      this._scopes = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId.internalValue = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._clientSecretFile = value.clientSecretFile;
      this._endpointParams = value.endpointParams;
      this._scopes = value.scopes;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientIdOutputReference(this, "client_id");
  public get clientId() {
    return this._clientId;
  }
  public putClientId(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientId) {
    this._clientId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId.internalValue;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // client_secret_file - computed: false, optional: true, required: false
  private _clientSecretFile?: string; 
  public get clientSecretFile() {
    return this.getStringAttribute('client_secret_file');
  }
  public set clientSecretFile(value: string) {
    this._clientSecretFile = value;
  }
  public resetClientSecretFile() {
    this._clientSecretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretFileInput() {
    return this._clientSecretFile;
  }

  // endpoint_params - computed: false, optional: true, required: false
  private _endpointParams?: { [key: string]: string }; 
  public get endpointParams() {
    return this.getStringMapAttribute('endpoint_params');
  }
  public set endpointParams(value: { [key: string]: string }) {
    this._endpointParams = value;
  }
  public resetEndpointParams() {
    this._endpointParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointParamsInput() {
    return this._endpointParams;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs {
  /**
  * Action to perform based on regex matching. Default is 'replace'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#action DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#action}
  */
  readonly action?: string;
  /**
  * If represents metricsQL match expression (or list of expressions): '{__name__=~'foo_.*'}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#if DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#if}
  */
  readonly if?: { [key: string]: string };
  /**
  * Labels is used together with Match for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Match is used together with Labels for 'action: graphite'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#match DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#match}
  */
  readonly match?: string;
  /**
  * Modulus to take of the hash of the source label values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#modulus DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#modulus}
  */
  readonly modulus?: number;
  /**
  * Regular expression against which the extracted value is matched. Default is '(.*)' victoriaMetrics supports multiline regex joined with | https://docs.victoriametrics.com/vmagent/#relabeling-enhancements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#regex DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#regex}
  */
  readonly regex?: { [key: string]: string };
  /**
  * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default is '$1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#replacement DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#replacement}
  */
  readonly replacement?: string;
  /**
  * Separator placed between concatenated source label values. default is ';'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#separator DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#separator}
  */
  readonly separator?: string;
  /**
  * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#source_labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#source_labels}
  */
  readonly sourceLabels?: string[];
  /**
  * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#target_label DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#target_label}
  */
  readonly targetLabel?: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    if: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.if),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    match: cdktf.stringToTerraform(struct!.match),
    modulus: cdktf.numberToTerraform(struct!.modulus),
    regex: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.regex),
    replacement: cdktf.stringToTerraform(struct!.replacement),
    separator: cdktf.stringToTerraform(struct!.separator),
    source_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceLabels),
    target_label: cdktf.stringToTerraform(struct!.targetLabel),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.if),
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
    match: {
      value: cdktf.stringToHclTerraform(struct!.match),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modulus: {
      value: cdktf.numberToHclTerraform(struct!.modulus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.regex),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replacement: {
      value: cdktf.stringToHclTerraform(struct!.replacement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_label: {
      value: cdktf.stringToHclTerraform(struct!.targetLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._if !== undefined) {
      hasAnyValues = true;
      internalValueResult.if = this._if;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._match !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match;
    }
    if (this._modulus !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulus = this._modulus;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._replacement !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacement = this._replacement;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._sourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabels = this._sourceLabels;
    }
    if (this._targetLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabel = this._targetLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._if = undefined;
      this._labels = undefined;
      this._match = undefined;
      this._modulus = undefined;
      this._regex = undefined;
      this._replacement = undefined;
      this._separator = undefined;
      this._sourceLabels = undefined;
      this._targetLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._if = value.if;
      this._labels = value.labels;
      this._match = value.match;
      this._modulus = value.modulus;
      this._regex = value.regex;
      this._replacement = value.replacement;
      this._separator = value.separator;
      this._sourceLabels = value.sourceLabels;
      this._targetLabel = value.targetLabel;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // if - computed: false, optional: true, required: false
  private _if?: { [key: string]: string }; 
  public get if() {
    return this.getStringMapAttribute('if');
  }
  public set if(value: { [key: string]: string }) {
    this._if = value;
  }
  public resetIf() {
    this._if = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifInput() {
    return this._if;
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

  // match - computed: false, optional: true, required: false
  private _match?: string; 
  public get match() {
    return this.getStringAttribute('match');
  }
  public set match(value: string) {
    this._match = value;
  }
  public resetMatch() {
    this._match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match;
  }

  // modulus - computed: false, optional: true, required: false
  private _modulus?: number; 
  public get modulus() {
    return this.getNumberAttribute('modulus');
  }
  public set modulus(value: number) {
    this._modulus = value;
  }
  public resetModulus() {
    this._modulus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulusInput() {
    return this._modulus;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: { [key: string]: string }; 
  public get regex() {
    return this.getStringMapAttribute('regex');
  }
  public set regex(value: { [key: string]: string }) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // replacement - computed: false, optional: true, required: false
  private _replacement?: string; 
  public get replacement() {
    return this.getStringAttribute('replacement');
  }
  public set replacement(value: string) {
    this._replacement = value;
  }
  public resetReplacement() {
    this._replacement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementInput() {
    return this._replacement;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // source_labels - computed: false, optional: true, required: false
  private _sourceLabels?: string[]; 
  public get sourceLabels() {
    return this.getListAttribute('source_labels');
  }
  public set sourceLabels(value: string[]) {
    this._sourceLabels = value;
  }
  public resetSourceLabels() {
    this._sourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelsInput() {
    return this._sourceLabels;
  }

  // target_label - computed: false, optional: true, required: false
  private _targetLabel?: string; 
  public get targetLabel() {
    return this.getStringAttribute('target_label');
  }
  public set targetLabel(value: string) {
    this._targetLabel = value;
  }
  public resetTargetLabel() {
    this._targetLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelInput() {
    return this._targetLabel;
  }
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#operator DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#values DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#match_expressions DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#match_labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig {
  /**
  * Stuct containing the CA cert to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#ca DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa;
  /**
  * Path to the CA cert in the container to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#ca_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Struct containing the client cert file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#cert DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#cert}
  */
  readonly cert?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert;
  /**
  * Path to the client cert file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#insecure_skip_verify DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Path to the client key file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key_secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#server_name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaToTerraform(struct!.ca),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertToTerraform(struct!.cert),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecretToTerraform(struct!.keySecret),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._caFile = undefined;
      this._cert.internalValue = undefined;
      this._certFile = undefined;
      this._insecureSkipVerify = undefined;
      this._keyFile = undefined;
      this._keySecret.internalValue = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._caFile = value.caFile;
      this._cert.internalValue = value.cert;
      this._certFile = value.certFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keyFile = value.keyFile;
      this._keySecret.internalValue = value.keySecret;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPasswordToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPasswordToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsernameToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsernameToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth {
  /**
  * Password defines reference for secret with password value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#password DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#password}
  */
  readonly password?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword;
  /**
  * PasswordFile defines path to password file at disk must be pre-mounted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#password_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Username defines reference for secret with username value The secret needs to be in the same namespace as scrape object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#username DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#username}
  */
  readonly username?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPasswordToTerraform(struct!.password),
    password_file: cdktf.stringToTerraform(struct!.passwordFile),
    username: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsernameToTerraform(struct!.username),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword",
    },
    password_file: {
      value: cdktf.stringToHclTerraform(struct!.passwordFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._passwordFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordFile = this._passwordFile;
    }
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password.internalValue = undefined;
      this._passwordFile = undefined;
      this._username.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password.internalValue = value.password;
      this._passwordFile = value.passwordFile;
      this._username.internalValue = value.username;
    }
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // username - computed: false, optional: true, required: false
  private _username = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerTokenToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerTokenToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMapToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMapToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert {
  /**
  * ConfigMap containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#config_map DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#config_map}
  */
  readonly configMap?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap;
  /**
  * Secret containing data to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#secret}
  */
  readonly secret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMapToTerraform(struct!.configMap),
    secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecretToTerraform(struct!.secret),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap",
    },
    secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._secret.internalValue = value.secret;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#optional DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecretToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecretToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig {
  /**
  * Stuct containing the CA cert to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#ca DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#ca}
  */
  readonly ca?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa;
  /**
  * Path to the CA cert in the container to use for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#ca_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Struct containing the client cert file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#cert DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#cert}
  */
  readonly cert?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert;
  /**
  * Path to the client cert file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#cert_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#cert_file}
  */
  readonly certFile?: string;
  /**
  * Disable target certificate validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#insecure_skip_verify DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Path to the client key file in the container for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key_file}
  */
  readonly keyFile?: string;
  /**
  * Secret containing the client key file for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#key_secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#key_secret}
  */
  readonly keySecret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret;
  /**
  * Used to verify the hostname for the targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#server_name DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#server_name}
  */
  readonly serverName?: string;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaToTerraform(struct!.ca),
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    cert: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertToTerraform(struct!.cert),
    cert_file: cdktf.stringToTerraform(struct!.certFile),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    key_file: cdktf.stringToTerraform(struct!.keyFile),
    key_secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecretToTerraform(struct!.keySecret),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa",
    },
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertToHclTerraform(struct!.cert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert",
    },
    cert_file: {
      value: cdktf.stringToHclTerraform(struct!.certFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_file: {
      value: cdktf.stringToHclTerraform(struct!.keyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecretToHclTerraform(struct!.keySecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._cert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert?.internalValue;
    }
    if (this._certFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certFile = this._certFile;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._keyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyFile = this._keyFile;
    }
    if (this._keySecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySecret = this._keySecret?.internalValue;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._caFile = undefined;
      this._cert.internalValue = undefined;
      this._certFile = undefined;
      this._insecureSkipVerify = undefined;
      this._keyFile = undefined;
      this._keySecret.internalValue = undefined;
      this._serverName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._caFile = value.caFile;
      this._cert.internalValue = value.cert;
      this._certFile = value.certFile;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._keyFile = value.keyFile;
      this._keySecret.internalValue = value.keySecret;
      this._serverName = value.serverName;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // cert - computed: false, optional: true, required: false
  private _cert = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCertOutputReference(this, "cert");
  public get cert() {
    return this._cert;
  }
  public putCert(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigCert) {
    this._cert.internalValue = value;
  }
  public resetCert() {
    this._cert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert.internalValue;
  }

  // cert_file - computed: false, optional: true, required: false
  private _certFile?: string; 
  public get certFile() {
    return this.getStringAttribute('cert_file');
  }
  public set certFile(value: string) {
    this._certFile = value;
  }
  public resetCertFile() {
    this._certFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certFileInput() {
    return this._certFile;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // key_file - computed: false, optional: true, required: false
  private _keyFile?: string; 
  public get keyFile() {
    return this.getStringAttribute('key_file');
  }
  public set keyFile(value: string) {
    this._keyFile = value;
  }
  public resetKeyFile() {
    this._keyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyFileInput() {
    return this._keyFile;
  }

  // key_secret - computed: false, optional: true, required: false
  private _keySecret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecretOutputReference(this, "key_secret");
  public get keySecret() {
    return this._keySecret;
  }
  public putKeySecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigKeySecret) {
    this._keySecret.internalValue = value;
  }
  public resetKeySecret() {
    this._keySecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySecretInput() {
    return this._keySecret.internalValue;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig {
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#bearer_token DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#bearer_token}
  */
  readonly bearerToken?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * TLSConfig specifies TLSConfig configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthToTerraform(struct!.basicAuth),
    bearer_token: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerTokenToTerraform(struct!.bearerToken),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    tls_config: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth",
    },
    bearer_token: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerTokenToHclTerraform(struct!.bearerToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_config: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerToken.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerToken.internalValue = value.bearerToken;
      this._bearerTokenFile = value.bearerTokenFile;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerTokenOutputReference(this, "bearer_token");
  public get bearerToken() {
    return this._bearerToken;
  }
  public putBearerToken(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigBearerToken) {
    this._bearerToken.internalValue = value;
  }
  public resetBearerToken() {
    this._bearerToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams {
  /**
  * DisableCompression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#disable_compression DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#disable_compression}
  */
  readonly disableCompression?: boolean | cdktf.IResolvable;
  /**
  * disable_keepalive allows disabling HTTP keep-alive when scraping targets. By default, HTTP keep-alive is enabled, so TCP connections to scrape targets could be re-used. See https://docs.victoriametrics.com/vmagent#scrape_config-enhancements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#disable_keep_alive DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#disable_keep_alive}
  */
  readonly disableKeepAlive?: boolean | cdktf.IResolvable;
  /**
  * Headers allows sending custom headers to scrape targets must be in of semicolon separated header with it's value eg: headerName: headerValue vmagent supports since 1.79.0 version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#headers DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#no_stale_markers DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#no_stale_markers}
  */
  readonly noStaleMarkers?: boolean | cdktf.IResolvable;
  /**
  * ProxyClientConfig configures proxy auth settings for scraping See feature description https://docs.victoriametrics.com/vmagent#scraping-targets-via-a-proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#proxy_client_config DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#proxy_client_config}
  */
  readonly proxyClientConfig?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#scrape_align_interval DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#scrape_align_interval}
  */
  readonly scrapeAlignInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#scrape_offset DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#scrape_offset}
  */
  readonly scrapeOffset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#stream_parse DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#stream_parse}
  */
  readonly streamParse?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_compression: cdktf.booleanToTerraform(struct!.disableCompression),
    disable_keep_alive: cdktf.booleanToTerraform(struct!.disableKeepAlive),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    no_stale_markers: cdktf.booleanToTerraform(struct!.noStaleMarkers),
    proxy_client_config: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigToTerraform(struct!.proxyClientConfig),
    scrape_align_interval: cdktf.stringToTerraform(struct!.scrapeAlignInterval),
    scrape_offset: cdktf.stringToTerraform(struct!.scrapeOffset),
    stream_parse: cdktf.booleanToTerraform(struct!.streamParse),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_compression: {
      value: cdktf.booleanToHclTerraform(struct!.disableCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_keep_alive: {
      value: cdktf.booleanToHclTerraform(struct!.disableKeepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    no_stale_markers: {
      value: cdktf.booleanToHclTerraform(struct!.noStaleMarkers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_client_config: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigToHclTerraform(struct!.proxyClientConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig",
    },
    scrape_align_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeAlignInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_offset: {
      value: cdktf.stringToHclTerraform(struct!.scrapeOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_parse: {
      value: cdktf.booleanToHclTerraform(struct!.streamParse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCompression = this._disableCompression;
    }
    if (this._disableKeepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableKeepAlive = this._disableKeepAlive;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._noStaleMarkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStaleMarkers = this._noStaleMarkers;
    }
    if (this._proxyClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyClientConfig = this._proxyClientConfig?.internalValue;
    }
    if (this._scrapeAlignInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeAlignInterval = this._scrapeAlignInterval;
    }
    if (this._scrapeOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeOffset = this._scrapeOffset;
    }
    if (this._streamParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamParse = this._streamParse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableCompression = undefined;
      this._disableKeepAlive = undefined;
      this._headers = undefined;
      this._noStaleMarkers = undefined;
      this._proxyClientConfig.internalValue = undefined;
      this._scrapeAlignInterval = undefined;
      this._scrapeOffset = undefined;
      this._streamParse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableCompression = value.disableCompression;
      this._disableKeepAlive = value.disableKeepAlive;
      this._headers = value.headers;
      this._noStaleMarkers = value.noStaleMarkers;
      this._proxyClientConfig.internalValue = value.proxyClientConfig;
      this._scrapeAlignInterval = value.scrapeAlignInterval;
      this._scrapeOffset = value.scrapeOffset;
      this._streamParse = value.streamParse;
    }
  }

  // disable_compression - computed: false, optional: true, required: false
  private _disableCompression?: boolean | cdktf.IResolvable; 
  public get disableCompression() {
    return this.getBooleanAttribute('disable_compression');
  }
  public set disableCompression(value: boolean | cdktf.IResolvable) {
    this._disableCompression = value;
  }
  public resetDisableCompression() {
    this._disableCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCompressionInput() {
    return this._disableCompression;
  }

  // disable_keep_alive - computed: false, optional: true, required: false
  private _disableKeepAlive?: boolean | cdktf.IResolvable; 
  public get disableKeepAlive() {
    return this.getBooleanAttribute('disable_keep_alive');
  }
  public set disableKeepAlive(value: boolean | cdktf.IResolvable) {
    this._disableKeepAlive = value;
  }
  public resetDisableKeepAlive() {
    this._disableKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKeepAliveInput() {
    return this._disableKeepAlive;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // no_stale_markers - computed: false, optional: true, required: false
  private _noStaleMarkers?: boolean | cdktf.IResolvable; 
  public get noStaleMarkers() {
    return this.getBooleanAttribute('no_stale_markers');
  }
  public set noStaleMarkers(value: boolean | cdktf.IResolvable) {
    this._noStaleMarkers = value;
  }
  public resetNoStaleMarkers() {
    this._noStaleMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStaleMarkersInput() {
    return this._noStaleMarkers;
  }

  // proxy_client_config - computed: false, optional: true, required: false
  private _proxyClientConfig = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfigOutputReference(this, "proxy_client_config");
  public get proxyClientConfig() {
    return this._proxyClientConfig;
  }
  public putProxyClientConfig(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsProxyClientConfig) {
    this._proxyClientConfig.internalValue = value;
  }
  public resetProxyClientConfig() {
    this._proxyClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyClientConfigInput() {
    return this._proxyClientConfig.internalValue;
  }

  // scrape_align_interval - computed: false, optional: true, required: false
  private _scrapeAlignInterval?: string; 
  public get scrapeAlignInterval() {
    return this.getStringAttribute('scrape_align_interval');
  }
  public set scrapeAlignInterval(value: string) {
    this._scrapeAlignInterval = value;
  }
  public resetScrapeAlignInterval() {
    this._scrapeAlignInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeAlignIntervalInput() {
    return this._scrapeAlignInterval;
  }

  // scrape_offset - computed: false, optional: true, required: false
  private _scrapeOffset?: string; 
  public get scrapeOffset() {
    return this.getStringAttribute('scrape_offset');
  }
  public set scrapeOffset(value: string) {
    this._scrapeOffset = value;
  }
  public resetScrapeOffset() {
    this._scrapeOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeOffsetInput() {
    return this._scrapeOffset;
  }

  // stream_parse - computed: false, optional: true, required: false
  private _streamParse?: boolean | cdktf.IResolvable; 
  public get streamParse() {
    return this.getBooleanAttribute('stream_parse');
  }
  public set streamParse(value: boolean | cdktf.IResolvable) {
    this._streamParse = value;
  }
  public resetStreamParse() {
    this._streamParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamParseInput() {
    return this._streamParse;
  }
}
export interface DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec {
  /**
  * Authorization with http header Authorization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#authorization DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#authorization}
  */
  readonly authorization?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization;
  /**
  * BasicAuth allow an endpoint to authenticate over basic authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#basic_auth DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth;
  /**
  * File to read bearer token for scraping targets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#bearer_token_file DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#bearer_token_file}
  */
  readonly bearerTokenFile?: string;
  /**
  * Secret to mount to read bearer token for scraping targets. The secret needs to be in the same namespace as the scrape object and accessible by the victoria-metrics operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#bearer_token_secret DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#bearer_token_secret}
  */
  readonly bearerTokenSecret?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret;
  /**
  * FollowRedirects controls redirects for scraping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#follow_redirects DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * HonorLabels chooses the metric's labels on collisions with target labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#honor_labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#honor_labels}
  */
  readonly honorLabels?: boolean | cdktf.IResolvable;
  /**
  * HonorTimestamps controls whether vmagent respects the timestamps present in scraped data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#honor_timestamps DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#honor_timestamps}
  */
  readonly honorTimestamps?: boolean | cdktf.IResolvable;
  /**
  * Interval at which metrics should be scraped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#interval DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#interval}
  */
  readonly interval?: string;
  /**
  * The label to use to retrieve the job name from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#job_label DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#job_label}
  */
  readonly jobLabel?: string;
  /**
  * MaxScrapeSize defines a maximum size of scraped data for a job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#max_scrape_size DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#max_scrape_size}
  */
  readonly maxScrapeSize?: string;
  /**
  * MetricRelabelConfigs to apply to samples after scrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#metric_relabel_configs DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#metric_relabel_configs}
  */
  readonly metricRelabelConfigs?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs[] | cdktf.IResolvable;
  /**
  * OAuth2 defines auth configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#oauth2 DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#oauth2}
  */
  readonly oauth2?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2;
  /**
  * Optional HTTP URL parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#params DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#params}
  */
  readonly params?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * HTTP path to scrape for metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#path DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name of the port exposed at Node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#port DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#port}
  */
  readonly port?: string;
  /**
  * ProxyURL eg http://proxyserver:2195 Directs scrapes to proxy through this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#proxy_url DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * RelabelConfigs to apply to samples during service discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#relabel_configs DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#relabel_configs}
  */
  readonly relabelConfigs?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs[] | cdktf.IResolvable;
  /**
  * SampleLimit defines per-scrape limit on number of scraped samples that will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#sample_limit DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#sample_limit}
  */
  readonly sampleLimit?: number;
  /**
  * HTTP scheme to use for scraping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#scheme DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#scheme}
  */
  readonly scheme?: string;
  /**
  * ScrapeInterval is the same as Interval and has priority over it. one of scrape_interval or interval can be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#scrape_interval DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#scrape_interval}
  */
  readonly scrapeInterval?: string;
  /**
  * Timeout after which the scrape is ended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#scrape_timeout DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#scrape_timeout}
  */
  readonly scrapeTimeout?: string;
  /**
  * Selector to select kubernetes Nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#selector DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector;
  /**
  * SeriesLimit defines per-scrape limit on number of unique time series a single target can expose during all the scrapes on the time window of 24h.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#series_limit DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#series_limit}
  */
  readonly seriesLimit?: number;
  /**
  * TargetLabels transfers labels on the Kubernetes Node onto the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#target_labels DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#target_labels}
  */
  readonly targetLabels?: string[];
  /**
  * TLSConfig configuration to use when scraping the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#tls_config DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#tls_config}
  */
  readonly tlsConfig?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig;
  /**
  * VMScrapeParams defines VictoriaMetrics specific scrape parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#vm_scrape_params DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest#vm_scrape_params}
  */
  readonly vmScrapeParams?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams;
}

export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecToTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationToTerraform(struct!.authorization),
    basic_auth: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthToTerraform(struct!.basicAuth),
    bearer_token_file: cdktf.stringToTerraform(struct!.bearerTokenFile),
    bearer_token_secret: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecretToTerraform(struct!.bearerTokenSecret),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    honor_labels: cdktf.booleanToTerraform(struct!.honorLabels),
    honor_timestamps: cdktf.booleanToTerraform(struct!.honorTimestamps),
    interval: cdktf.stringToTerraform(struct!.interval),
    job_label: cdktf.stringToTerraform(struct!.jobLabel),
    max_scrape_size: cdktf.stringToTerraform(struct!.maxScrapeSize),
    metric_relabel_configs: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsToTerraform, false)(struct!.metricRelabelConfigs),
    oauth2: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ToTerraform(struct!.oauth2),
    params: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.params),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    relabel_configs: cdktf.listMapper(dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsToTerraform, false)(struct!.relabelConfigs),
    sample_limit: cdktf.numberToTerraform(struct!.sampleLimit),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    scrape_interval: cdktf.stringToTerraform(struct!.scrapeInterval),
    scrape_timeout: cdktf.stringToTerraform(struct!.scrapeTimeout),
    selector: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorToTerraform(struct!.selector),
    series_limit: cdktf.numberToTerraform(struct!.seriesLimit),
    target_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetLabels),
    tls_config: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigToTerraform(struct!.tlsConfig),
    vm_scrape_params: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsToTerraform(struct!.vmScrapeParams),
  }
}


export function dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization",
    },
    basic_auth: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth",
    },
    bearer_token_file: {
      value: cdktf.stringToHclTerraform(struct!.bearerTokenFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token_secret: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecretToHclTerraform(struct!.bearerTokenSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret",
    },
    follow_redirects: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honor_labels: {
      value: cdktf.booleanToHclTerraform(struct!.honorLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    honor_timestamps: {
      value: cdktf.booleanToHclTerraform(struct!.honorTimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_label: {
      value: cdktf.stringToHclTerraform(struct!.jobLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_scrape_size: {
      value: cdktf.stringToHclTerraform(struct!.maxScrapeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsToHclTerraform, false)(struct!.metricRelabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsList",
    },
    oauth2: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relabel_configs: {
      value: cdktf.listMapperHcl(dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsToHclTerraform, false)(struct!.relabelConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsList",
    },
    sample_limit: {
      value: cdktf.numberToHclTerraform(struct!.sampleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_interval: {
      value: cdktf.stringToHclTerraform(struct!.scrapeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_timeout: {
      value: cdktf.stringToHclTerraform(struct!.scrapeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector",
    },
    series_limit: {
      value: cdktf.numberToHclTerraform(struct!.seriesLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_config: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig",
    },
    vm_scrape_params: {
      value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsToHclTerraform(struct!.vmScrapeParams),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._bearerTokenFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenFile = this._bearerTokenFile;
    }
    if (this._bearerTokenSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerTokenSecret = this._bearerTokenSecret?.internalValue;
    }
    if (this._followRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirects = this._followRedirects;
    }
    if (this._honorLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorLabels = this._honorLabels;
    }
    if (this._honorTimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.honorTimestamps = this._honorTimestamps;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._jobLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobLabel = this._jobLabel;
    }
    if (this._maxScrapeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScrapeSize = this._maxScrapeSize;
    }
    if (this._metricRelabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRelabelConfigs = this._metricRelabelConfigs?.internalValue;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._relabelConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relabelConfigs = this._relabelConfigs?.internalValue;
    }
    if (this._sampleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleLimit = this._sampleLimit;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._scrapeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeInterval = this._scrapeInterval;
    }
    if (this._scrapeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTimeout = this._scrapeTimeout;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._seriesLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.seriesLimit = this._seriesLimit;
    }
    if (this._targetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLabels = this._targetLabels;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._vmScrapeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmScrapeParams = this._vmScrapeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorization.internalValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._bearerTokenFile = undefined;
      this._bearerTokenSecret.internalValue = undefined;
      this._followRedirects = undefined;
      this._honorLabels = undefined;
      this._honorTimestamps = undefined;
      this._interval = undefined;
      this._jobLabel = undefined;
      this._maxScrapeSize = undefined;
      this._metricRelabelConfigs.internalValue = undefined;
      this._oauth2.internalValue = undefined;
      this._params = undefined;
      this._path = undefined;
      this._port = undefined;
      this._proxyUrl = undefined;
      this._relabelConfigs.internalValue = undefined;
      this._sampleLimit = undefined;
      this._scheme = undefined;
      this._scrapeInterval = undefined;
      this._scrapeTimeout = undefined;
      this._selector.internalValue = undefined;
      this._seriesLimit = undefined;
      this._targetLabels = undefined;
      this._tlsConfig.internalValue = undefined;
      this._vmScrapeParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorization.internalValue = value.authorization;
      this._basicAuth.internalValue = value.basicAuth;
      this._bearerTokenFile = value.bearerTokenFile;
      this._bearerTokenSecret.internalValue = value.bearerTokenSecret;
      this._followRedirects = value.followRedirects;
      this._honorLabels = value.honorLabels;
      this._honorTimestamps = value.honorTimestamps;
      this._interval = value.interval;
      this._jobLabel = value.jobLabel;
      this._maxScrapeSize = value.maxScrapeSize;
      this._metricRelabelConfigs.internalValue = value.metricRelabelConfigs;
      this._oauth2.internalValue = value.oauth2;
      this._params = value.params;
      this._path = value.path;
      this._port = value.port;
      this._proxyUrl = value.proxyUrl;
      this._relabelConfigs.internalValue = value.relabelConfigs;
      this._sampleLimit = value.sampleLimit;
      this._scheme = value.scheme;
      this._scrapeInterval = value.scrapeInterval;
      this._scrapeTimeout = value.scrapeTimeout;
      this._selector.internalValue = value.selector;
      this._seriesLimit = value.seriesLimit;
      this._targetLabels = value.targetLabels;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._vmScrapeParams.internalValue = value.vmScrapeParams;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // bearer_token_file - computed: false, optional: true, required: false
  private _bearerTokenFile?: string; 
  public get bearerTokenFile() {
    return this.getStringAttribute('bearer_token_file');
  }
  public set bearerTokenFile(value: string) {
    this._bearerTokenFile = value;
  }
  public resetBearerTokenFile() {
    this._bearerTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenFileInput() {
    return this._bearerTokenFile;
  }

  // bearer_token_secret - computed: false, optional: true, required: false
  private _bearerTokenSecret = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecretOutputReference(this, "bearer_token_secret");
  public get bearerTokenSecret() {
    return this._bearerTokenSecret;
  }
  public putBearerTokenSecret(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecBearerTokenSecret) {
    this._bearerTokenSecret.internalValue = value;
  }
  public resetBearerTokenSecret() {
    this._bearerTokenSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenSecretInput() {
    return this._bearerTokenSecret.internalValue;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // honor_labels - computed: false, optional: true, required: false
  private _honorLabels?: boolean | cdktf.IResolvable; 
  public get honorLabels() {
    return this.getBooleanAttribute('honor_labels');
  }
  public set honorLabels(value: boolean | cdktf.IResolvable) {
    this._honorLabels = value;
  }
  public resetHonorLabels() {
    this._honorLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorLabelsInput() {
    return this._honorLabels;
  }

  // honor_timestamps - computed: false, optional: true, required: false
  private _honorTimestamps?: boolean | cdktf.IResolvable; 
  public get honorTimestamps() {
    return this.getBooleanAttribute('honor_timestamps');
  }
  public set honorTimestamps(value: boolean | cdktf.IResolvable) {
    this._honorTimestamps = value;
  }
  public resetHonorTimestamps() {
    this._honorTimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honorTimestampsInput() {
    return this._honorTimestamps;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // job_label - computed: false, optional: true, required: false
  private _jobLabel?: string; 
  public get jobLabel() {
    return this.getStringAttribute('job_label');
  }
  public set jobLabel(value: string) {
    this._jobLabel = value;
  }
  public resetJobLabel() {
    this._jobLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobLabelInput() {
    return this._jobLabel;
  }

  // max_scrape_size - computed: false, optional: true, required: false
  private _maxScrapeSize?: string; 
  public get maxScrapeSize() {
    return this.getStringAttribute('max_scrape_size');
  }
  public set maxScrapeSize(value: string) {
    this._maxScrapeSize = value;
  }
  public resetMaxScrapeSize() {
    this._maxScrapeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScrapeSizeInput() {
    return this._maxScrapeSize;
  }

  // metric_relabel_configs - computed: false, optional: true, required: false
  private _metricRelabelConfigs = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigsList(this, "metric_relabel_configs", false);
  public get metricRelabelConfigs() {
    return this._metricRelabelConfigs;
  }
  public putMetricRelabelConfigs(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecMetricRelabelConfigs[] | cdktf.IResolvable) {
    this._metricRelabelConfigs.internalValue = value;
  }
  public resetMetricRelabelConfigs() {
    this._metricRelabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRelabelConfigsInput() {
    return this._metricRelabelConfigs.internalValue;
  }

  // oauth2 - computed: false, optional: true, required: false
  private _oauth2 = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get params() {
    return this.interpolationForAttribute('params');
  }
  public set params(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // relabel_configs - computed: false, optional: true, required: false
  private _relabelConfigs = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigsList(this, "relabel_configs", false);
  public get relabelConfigs() {
    return this._relabelConfigs;
  }
  public putRelabelConfigs(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecRelabelConfigs[] | cdktf.IResolvable) {
    this._relabelConfigs.internalValue = value;
  }
  public resetRelabelConfigs() {
    this._relabelConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relabelConfigsInput() {
    return this._relabelConfigs.internalValue;
  }

  // sample_limit - computed: false, optional: true, required: false
  private _sampleLimit?: number; 
  public get sampleLimit() {
    return this.getNumberAttribute('sample_limit');
  }
  public set sampleLimit(value: number) {
    this._sampleLimit = value;
  }
  public resetSampleLimit() {
    this._sampleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLimitInput() {
    return this._sampleLimit;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // scrape_interval - computed: false, optional: true, required: false
  private _scrapeInterval?: string; 
  public get scrapeInterval() {
    return this.getStringAttribute('scrape_interval');
  }
  public set scrapeInterval(value: string) {
    this._scrapeInterval = value;
  }
  public resetScrapeInterval() {
    this._scrapeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeIntervalInput() {
    return this._scrapeInterval;
  }

  // scrape_timeout - computed: false, optional: true, required: false
  private _scrapeTimeout?: string; 
  public get scrapeTimeout() {
    return this.getStringAttribute('scrape_timeout');
  }
  public set scrapeTimeout(value: string) {
    this._scrapeTimeout = value;
  }
  public resetScrapeTimeout() {
    this._scrapeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTimeoutInput() {
    return this._scrapeTimeout;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // series_limit - computed: false, optional: true, required: false
  private _seriesLimit?: number; 
  public get seriesLimit() {
    return this.getNumberAttribute('series_limit');
  }
  public set seriesLimit(value: number) {
    this._seriesLimit = value;
  }
  public resetSeriesLimit() {
    this._seriesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seriesLimitInput() {
    return this._seriesLimit;
  }

  // target_labels - computed: false, optional: true, required: false
  private _targetLabels?: string[]; 
  public get targetLabels() {
    return this.getListAttribute('target_labels');
  }
  public set targetLabels(value: string[]) {
    this._targetLabels = value;
  }
  public resetTargetLabels() {
    this._targetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLabelsInput() {
    return this._targetLabels;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // vm_scrape_params - computed: false, optional: true, required: false
  private _vmScrapeParams = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParamsOutputReference(this, "vm_scrape_params");
  public get vmScrapeParams() {
    return this._vmScrapeParams;
  }
  public putVmScrapeParams(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecVmScrapeParams) {
    this._vmScrapeParams.internalValue = value;
  }
  public resetVmScrapeParams() {
    this._vmScrapeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmScrapeParamsInput() {
    return this._vmScrapeParams.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest k8s_operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest}
*/
export class DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest k8s_operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_victoriametrics_com_vm_node_scrape_v1beta1_manifest',
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
  private _metadata = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec) {
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
      metadata: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorVictoriametricsComVmNodeScrapeV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
