// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#metadata DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata;
  /**
  * TenantSpec defines the desired state of Tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#spec DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec;
}
export interface DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#annotations DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#labels DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#name DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#namespace DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#name DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#namespace DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRefToTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#name DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#namespace DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRefToTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef {
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#name DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#namespace DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRefToTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#email DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#finance_support_email DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#finance_support_email}
  */
  readonly financeSupportEmail?: string;
  /**
  * additional parameters, used for Update, as in master portal Api Docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#from_email DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#from_email}
  */
  readonly fromEmail?: string;
  /**
  * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#master_credentials_ref DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#master_credentials_ref}
  */
  readonly masterCredentialsRef: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#organization_name DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#organization_name}
  */
  readonly organizationName: string;
  /**
  * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#password_credentials_ref DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#password_credentials_ref}
  */
  readonly passwordCredentialsRef: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#site_access_code DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#site_access_code}
  */
  readonly siteAccessCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#support_email DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#system_master_url DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#system_master_url}
  */
  readonly systemMasterUrl: string;
  /**
  * SecretReference represents a Secret Reference. It has enough information to retrieve secret in any namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#tenant_secret_ref DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#tenant_secret_ref}
  */
  readonly tenantSecretRef: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#username DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest#username}
  */
  readonly username: string;
}

export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    finance_support_email: cdktf.stringToTerraform(struct!.financeSupportEmail),
    from_email: cdktf.stringToTerraform(struct!.fromEmail),
    master_credentials_ref: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRefToTerraform(struct!.masterCredentialsRef),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    password_credentials_ref: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRefToTerraform(struct!.passwordCredentialsRef),
    site_access_code: cdktf.stringToTerraform(struct!.siteAccessCode),
    support_email: cdktf.stringToTerraform(struct!.supportEmail),
    system_master_url: cdktf.stringToTerraform(struct!.systemMasterUrl),
    tenant_secret_ref: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRefToTerraform(struct!.tenantSecretRef),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finance_support_email: {
      value: cdktf.stringToHclTerraform(struct!.financeSupportEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_email: {
      value: cdktf.stringToHclTerraform(struct!.fromEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_credentials_ref: {
      value: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRefToHclTerraform(struct!.masterCredentialsRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_credentials_ref: {
      value: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRefToHclTerraform(struct!.passwordCredentialsRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef",
    },
    site_access_code: {
      value: cdktf.stringToHclTerraform(struct!.siteAccessCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_email: {
      value: cdktf.stringToHclTerraform(struct!.supportEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_master_url: {
      value: cdktf.stringToHclTerraform(struct!.systemMasterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_secret_ref: {
      value: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRefToHclTerraform(struct!.tenantSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._financeSupportEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.financeSupportEmail = this._financeSupportEmail;
    }
    if (this._fromEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromEmail = this._fromEmail;
    }
    if (this._masterCredentialsRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCredentialsRef = this._masterCredentialsRef?.internalValue;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._passwordCredentialsRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCredentialsRef = this._passwordCredentialsRef?.internalValue;
    }
    if (this._siteAccessCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteAccessCode = this._siteAccessCode;
    }
    if (this._supportEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportEmail = this._supportEmail;
    }
    if (this._systemMasterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemMasterUrl = this._systemMasterUrl;
    }
    if (this._tenantSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantSecretRef = this._tenantSecretRef?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._financeSupportEmail = undefined;
      this._fromEmail = undefined;
      this._masterCredentialsRef.internalValue = undefined;
      this._organizationName = undefined;
      this._passwordCredentialsRef.internalValue = undefined;
      this._siteAccessCode = undefined;
      this._supportEmail = undefined;
      this._systemMasterUrl = undefined;
      this._tenantSecretRef.internalValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._financeSupportEmail = value.financeSupportEmail;
      this._fromEmail = value.fromEmail;
      this._masterCredentialsRef.internalValue = value.masterCredentialsRef;
      this._organizationName = value.organizationName;
      this._passwordCredentialsRef.internalValue = value.passwordCredentialsRef;
      this._siteAccessCode = value.siteAccessCode;
      this._supportEmail = value.supportEmail;
      this._systemMasterUrl = value.systemMasterUrl;
      this._tenantSecretRef.internalValue = value.tenantSecretRef;
      this._username = value.username;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // finance_support_email - computed: false, optional: true, required: false
  private _financeSupportEmail?: string; 
  public get financeSupportEmail() {
    return this.getStringAttribute('finance_support_email');
  }
  public set financeSupportEmail(value: string) {
    this._financeSupportEmail = value;
  }
  public resetFinanceSupportEmail() {
    this._financeSupportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financeSupportEmailInput() {
    return this._financeSupportEmail;
  }

  // from_email - computed: false, optional: true, required: false
  private _fromEmail?: string; 
  public get fromEmail() {
    return this.getStringAttribute('from_email');
  }
  public set fromEmail(value: string) {
    this._fromEmail = value;
  }
  public resetFromEmail() {
    this._fromEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailInput() {
    return this._fromEmail;
  }

  // master_credentials_ref - computed: false, optional: false, required: true
  private _masterCredentialsRef = new DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRefOutputReference(this, "master_credentials_ref");
  public get masterCredentialsRef() {
    return this._masterCredentialsRef;
  }
  public putMasterCredentialsRef(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecMasterCredentialsRef) {
    this._masterCredentialsRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCredentialsRefInput() {
    return this._masterCredentialsRef.internalValue;
  }

  // organization_name - computed: false, optional: false, required: true
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // password_credentials_ref - computed: false, optional: false, required: true
  private _passwordCredentialsRef = new DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRefOutputReference(this, "password_credentials_ref");
  public get passwordCredentialsRef() {
    return this._passwordCredentialsRef;
  }
  public putPasswordCredentialsRef(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecPasswordCredentialsRef) {
    this._passwordCredentialsRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCredentialsRefInput() {
    return this._passwordCredentialsRef.internalValue;
  }

  // site_access_code - computed: false, optional: true, required: false
  private _siteAccessCode?: string; 
  public get siteAccessCode() {
    return this.getStringAttribute('site_access_code');
  }
  public set siteAccessCode(value: string) {
    this._siteAccessCode = value;
  }
  public resetSiteAccessCode() {
    this._siteAccessCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAccessCodeInput() {
    return this._siteAccessCode;
  }

  // support_email - computed: false, optional: true, required: false
  private _supportEmail?: string; 
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail;
  }

  // system_master_url - computed: false, optional: false, required: true
  private _systemMasterUrl?: string; 
  public get systemMasterUrl() {
    return this.getStringAttribute('system_master_url');
  }
  public set systemMasterUrl(value: string) {
    this._systemMasterUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemMasterUrlInput() {
    return this._systemMasterUrl;
  }

  // tenant_secret_ref - computed: false, optional: false, required: true
  private _tenantSecretRef = new DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRefOutputReference(this, "tenant_secret_ref");
  public get tenantSecretRef() {
    return this._tenantSecretRef;
  }
  public putTenantSecretRef(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecTenantSecretRef) {
    this._tenantSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantSecretRefInput() {
    return this._tenantSecretRef.internalValue;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest k8s_capabilities_3scale_net_tenant_v1alpha1_manifest}
*/
export class DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capabilities_3scale_net_tenant_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapabilities3ScaleNetTenantV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capabilities_3scale_net_tenant_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/capabilities_3scale_net_tenant_v1alpha1_manifest k8s_capabilities_3scale_net_tenant_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capabilities_3scale_net_tenant_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec) {
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
      metadata: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetTenantV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
