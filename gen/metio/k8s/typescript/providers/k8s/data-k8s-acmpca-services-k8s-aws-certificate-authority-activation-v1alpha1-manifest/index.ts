// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#metadata DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata;
  /**
  * CertificateAuthorityActivationSpec defines the desired state of CertificateAuthorityActivation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#spec DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec;
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#annotations DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#labels DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#key DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFromToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFromToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#from DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFromToTerraform(struct!.from),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefFrom) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#key DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChainToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChainToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#key DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutputToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutputToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
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
      this._key = value.key;
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec {
  /**
  * SecretKeyReference combines a k8s corev1.SecretReference with a specific key within the referred-to Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#certificate DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#certificate}
  */
  readonly certificate: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate;
  /**
  * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority (https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#certificate_authority_arn DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#certificate_authority_ref DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#certificate_authority_ref}
  */
  readonly certificateAuthorityRef?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef;
  /**
  * SecretKeyReference combines a k8s corev1.SecretReference with a specific key within the referred-to Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#certificate_chain DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#certificate_chain}
  */
  readonly certificateChain?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain;
  /**
  * SecretKeyReference combines a k8s corev1.SecretReference with a specific key within the referred-to Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#complete_certificate_chain_output DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#complete_certificate_chain_output}
  */
  readonly completeCertificateChainOutput?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#status DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest#status}
  */
  readonly status?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateToTerraform(struct!.certificate),
    certificate_authority_arn: cdktf.stringToTerraform(struct!.certificateAuthorityArn),
    certificate_authority_ref: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefToTerraform(struct!.certificateAuthorityRef),
    certificate_chain: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChainToTerraform(struct!.certificateChain),
    complete_certificate_chain_output: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutputToTerraform(struct!.completeCertificateChainOutput),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate",
    },
    certificate_authority_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_authority_ref: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefToHclTerraform(struct!.certificateAuthorityRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef",
    },
    certificate_chain: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChainToHclTerraform(struct!.certificateChain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain",
    },
    complete_certificate_chain_output: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutputToHclTerraform(struct!.completeCertificateChainOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    if (this._certificateAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
    }
    if (this._certificateAuthorityRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityRef = this._certificateAuthorityRef?.internalValue;
    }
    if (this._certificateChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateChain = this._certificateChain?.internalValue;
    }
    if (this._completeCertificateChainOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completeCertificateChainOutput = this._completeCertificateChainOutput?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificate.internalValue = undefined;
      this._certificateAuthorityArn = undefined;
      this._certificateAuthorityRef.internalValue = undefined;
      this._certificateChain.internalValue = undefined;
      this._completeCertificateChainOutput.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificate.internalValue = value.certificate;
      this._certificateAuthorityArn = value.certificateAuthorityArn;
      this._certificateAuthorityRef.internalValue = value.certificateAuthorityRef;
      this._certificateChain.internalValue = value.certificateChain;
      this._completeCertificateChainOutput.internalValue = value.completeCertificateChainOutput;
      this._status = value.status;
    }
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // certificate_authority_arn - computed: false, optional: true, required: false
  private _certificateAuthorityArn?: string; 
  public get certificateAuthorityArn() {
    return this.getStringAttribute('certificate_authority_arn');
  }
  public set certificateAuthorityArn(value: string) {
    this._certificateAuthorityArn = value;
  }
  public resetCertificateAuthorityArn() {
    this._certificateAuthorityArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityArnInput() {
    return this._certificateAuthorityArn;
  }

  // certificate_authority_ref - computed: false, optional: true, required: false
  private _certificateAuthorityRef = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRefOutputReference(this, "certificate_authority_ref");
  public get certificateAuthorityRef() {
    return this._certificateAuthorityRef;
  }
  public putCertificateAuthorityRef(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateAuthorityRef) {
    this._certificateAuthorityRef.internalValue = value;
  }
  public resetCertificateAuthorityRef() {
    this._certificateAuthorityRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityRefInput() {
    return this._certificateAuthorityRef.internalValue;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChainOutputReference(this, "certificate_chain");
  public get certificateChain() {
    return this._certificateChain;
  }
  public putCertificateChain(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCertificateChain) {
    this._certificateChain.internalValue = value;
  }
  public resetCertificateChain() {
    this._certificateChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain.internalValue;
  }

  // complete_certificate_chain_output - computed: false, optional: true, required: false
  private _completeCertificateChainOutput = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutputOutputReference(this, "complete_certificate_chain_output");
  public get completeCertificateChainOutput() {
    return this._completeCertificateChainOutput;
  }
  public putCompleteCertificateChainOutput(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecCompleteCertificateChainOutput) {
    this._completeCertificateChainOutput.internalValue = value;
  }
  public resetCompleteCertificateChainOutput() {
    this._completeCertificateChainOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completeCertificateChainOutputInput() {
    return this._completeCertificateChainOutput.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest k8s_acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest}
*/
export class DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest k8s_acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_acmpca_services_k8s_aws_certificate_authority_activation_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateAuthorityActivationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
