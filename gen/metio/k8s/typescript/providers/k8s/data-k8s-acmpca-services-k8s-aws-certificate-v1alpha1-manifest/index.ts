// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#metadata DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata;
  /**
  * CertificateSpec defines the desired state of Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#spec DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec;
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#annotations DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#labels DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#cps_uri DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#cps_uri}
  */
  readonly cpsUri?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cps_uri: cdktf.stringToTerraform(struct!.cpsUri),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cps_uri: {
      value: cdktf.stringToHclTerraform(struct!.cpsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpsUri = this._cpsUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpsUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpsUri = value.cpsUri;
    }
  }

  // cps_uri - computed: false, optional: true, required: false
  private _cpsUri?: string; 
  public get cpsUri() {
    return this.getStringAttribute('cps_uri');
  }
  public set cpsUri(value: string) {
    this._cpsUri = value;
  }
  public resetCpsUri() {
    this._cpsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsUriInput() {
    return this._cpsUri;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#policy_qualifier_id DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#policy_qualifier_id}
  */
  readonly policyQualifierId?: string;
  /**
  * Defines a PolicyInformation qualifier. Amazon Web Services Private CA supports the certification practice statement (CPS) qualifier (https://datatracker.ietf.org/doc/html/rfc5280#section-4.2.1.4) defined in RFC 5280.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#qualifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#qualifier}
  */
  readonly qualifier?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_qualifier_id: cdktf.stringToTerraform(struct!.policyQualifierId),
    qualifier: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToTerraform(struct!.qualifier),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_qualifier_id: {
      value: cdktf.stringToHclTerraform(struct!.policyQualifierId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierToHclTerraform(struct!.qualifier),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyQualifierId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyQualifierId = this._policyQualifierId;
    }
    if (this._qualifier?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyQualifierId = undefined;
      this._qualifier.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyQualifierId = value.policyQualifierId;
      this._qualifier.internalValue = value.qualifier;
    }
  }

  // policy_qualifier_id - computed: false, optional: true, required: false
  private _policyQualifierId?: string; 
  public get policyQualifierId() {
    return this.getStringAttribute('policy_qualifier_id');
  }
  public set policyQualifierId(value: string) {
    this._policyQualifierId = value;
  }
  public resetPolicyQualifierId() {
    this._policyQualifierId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyQualifierIdInput() {
    return this._policyQualifierId;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifierOutputReference(this, "qualifier");
  public get qualifier() {
    return this._qualifier;
  }
  public putQualifier(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersQualifier) {
    this._qualifier.internalValue = value;
  }
  public resetQualifier() {
    this._qualifier.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier.internalValue;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#cert_policy_id DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#cert_policy_id}
  */
  readonly certPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#policy_qualifiers DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#policy_qualifiers}
  */
  readonly policyQualifiers?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[] | cdktf.IResolvable;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_policy_id: cdktf.stringToTerraform(struct!.certPolicyId),
    policy_qualifiers: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToTerraform, false)(struct!.policyQualifiers),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.certPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_qualifiers: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersToHclTerraform, false)(struct!.policyQualifiers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPolicyId = this._certPolicyId;
    }
    if (this._policyQualifiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyQualifiers = this._policyQualifiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certPolicyId = undefined;
      this._policyQualifiers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certPolicyId = value.certPolicyId;
      this._policyQualifiers.internalValue = value.policyQualifiers;
    }
  }

  // cert_policy_id - computed: false, optional: true, required: false
  private _certPolicyId?: string; 
  public get certPolicyId() {
    return this.getStringAttribute('cert_policy_id');
  }
  public set certPolicyId(value: string) {
    this._certPolicyId = value;
  }
  public resetCertPolicyId() {
    this._certPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPolicyIdInput() {
    return this._certPolicyId;
  }

  // policy_qualifiers - computed: false, optional: true, required: false
  private _policyQualifiers = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiersList(this, "policy_qualifiers", false);
  public get policyQualifiers() {
    return this._policyQualifiers;
  }
  public putPolicyQualifiers(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesPolicyQualifiers[] | cdktf.IResolvable) {
    this._policyQualifiers.internalValue = value;
  }
  public resetPolicyQualifiers() {
    this._policyQualifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyQualifiersInput() {
    return this._policyQualifiers.internalValue;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#critical DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#object_identifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    object_identifier: cdktf.stringToTerraform(struct!.objectIdentifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.booleanToHclTerraform(struct!.critical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.objectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // object_identifier - computed: false, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#extended_key_usage_object_identifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#extended_key_usage_object_identifier}
  */
  readonly extendedKeyUsageObjectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#extended_key_usage_type DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#extended_key_usage_type}
  */
  readonly extendedKeyUsageType?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_key_usage_object_identifier: cdktf.stringToTerraform(struct!.extendedKeyUsageObjectIdentifier),
    extended_key_usage_type: cdktf.stringToTerraform(struct!.extendedKeyUsageType),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_key_usage_object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.extendedKeyUsageObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_key_usage_type: {
      value: cdktf.stringToHclTerraform(struct!.extendedKeyUsageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedKeyUsageObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsageObjectIdentifier = this._extendedKeyUsageObjectIdentifier;
    }
    if (this._extendedKeyUsageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsageType = this._extendedKeyUsageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedKeyUsageObjectIdentifier = undefined;
      this._extendedKeyUsageType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedKeyUsageObjectIdentifier = value.extendedKeyUsageObjectIdentifier;
      this._extendedKeyUsageType = value.extendedKeyUsageType;
    }
  }

  // extended_key_usage_object_identifier - computed: false, optional: true, required: false
  private _extendedKeyUsageObjectIdentifier?: string; 
  public get extendedKeyUsageObjectIdentifier() {
    return this.getStringAttribute('extended_key_usage_object_identifier');
  }
  public set extendedKeyUsageObjectIdentifier(value: string) {
    this._extendedKeyUsageObjectIdentifier = value;
  }
  public resetExtendedKeyUsageObjectIdentifier() {
    this._extendedKeyUsageObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageObjectIdentifierInput() {
    return this._extendedKeyUsageObjectIdentifier;
  }

  // extended_key_usage_type - computed: false, optional: true, required: false
  private _extendedKeyUsageType?: string; 
  public get extendedKeyUsageType() {
    return this.getStringAttribute('extended_key_usage_type');
  }
  public set extendedKeyUsageType(value: string) {
    this._extendedKeyUsageType = value;
  }
  public resetExtendedKeyUsageType() {
    this._extendedKeyUsageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageTypeInput() {
    return this._extendedKeyUsageType;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#crl_sign DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#data_encipherment DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#decipher_only DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#digital_signature DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#encipher_only DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#key_agreement DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#key_cert_sign DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#key_cert_sign}
  */
  readonly keyCertSign?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#key_encipherment DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#non_repudiation DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#non_repudiation}
  */
  readonly nonRepudiation?: boolean | cdktf.IResolvable;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsageToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crl_sign: cdktf.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktf.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktf.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktf.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktf.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktf.booleanToTerraform(struct!.keyAgreement),
    key_cert_sign: cdktf.booleanToTerraform(struct!.keyCertSign),
    key_encipherment: cdktf.booleanToTerraform(struct!.keyEncipherment),
    non_repudiation: cdktf.booleanToTerraform(struct!.nonRepudiation),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsageToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crl_sign: {
      value: cdktf.booleanToHclTerraform(struct!.crlSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_encipherment: {
      value: cdktf.booleanToHclTerraform(struct!.dataEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decipher_only: {
      value: cdktf.booleanToHclTerraform(struct!.decipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digital_signature: {
      value: cdktf.booleanToHclTerraform(struct!.digitalSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encipher_only: {
      value: cdktf.booleanToHclTerraform(struct!.encipherOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_agreement: {
      value: cdktf.booleanToHclTerraform(struct!.keyAgreement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_cert_sign: {
      value: cdktf.booleanToHclTerraform(struct!.keyCertSign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encipherment: {
      value: cdktf.booleanToHclTerraform(struct!.keyEncipherment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    non_repudiation: {
      value: cdktf.booleanToHclTerraform(struct!.nonRepudiation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyCertSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyCertSign = this._keyCertSign;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    if (this._nonRepudiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonRepudiation = this._nonRepudiation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyCertSign = undefined;
      this._keyEncipherment = undefined;
      this._nonRepudiation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyCertSign = value.keyCertSign;
      this._keyEncipherment = value.keyEncipherment;
      this._nonRepudiation = value.nonRepudiation;
    }
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktf.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktf.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktf.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktf.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktf.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktf.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktf.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktf.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktf.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktf.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktf.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktf.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_cert_sign - computed: false, optional: true, required: false
  private _keyCertSign?: boolean | cdktf.IResolvable; 
  public get keyCertSign() {
    return this.getBooleanAttribute('key_cert_sign');
  }
  public set keyCertSign(value: boolean | cdktf.IResolvable) {
    this._keyCertSign = value;
  }
  public resetKeyCertSign() {
    this._keyCertSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyCertSignInput() {
    return this._keyCertSign;
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktf.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktf.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }

  // non_repudiation - computed: false, optional: true, required: false
  private _nonRepudiation?: boolean | cdktf.IResolvable; 
  public get nonRepudiation() {
    return this.getBooleanAttribute('non_repudiation');
  }
  public set nonRepudiation(value: boolean | cdktf.IResolvable) {
    this._nonRepudiation = value;
  }
  public resetNonRepudiation() {
    this._nonRepudiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonRepudiationInput() {
    return this._nonRepudiation;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#object_identifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_identifier: cdktf.stringToTerraform(struct!.objectIdentifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.objectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // object_identifier - computed: false, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#common_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#country DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#custom_attributes DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#custom_attributes}
  */
  readonly customAttributes?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#distinguished_name_qualifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#generation_qualifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#given_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#initials DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#locality DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#organization DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#organizational_unit DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#pseudonym DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#serial_number DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#state DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#surname DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#title DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#title}
  */
  readonly title?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    custom_attributes: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesToTerraform, false)(struct!.customAttributes),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList",
    },
    distinguished_name_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktf.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktf.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._customAttributes.internalValue = undefined;
      this._distinguishedNameQualifier = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._state = undefined;
      this._surname = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._customAttributes.internalValue = value.customAttributes;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._state = value.state;
      this._surname = value.surname;
      this._title = value.title;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameCustomAttributes[] | cdktf.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // distinguished_name_qualifier - computed: false, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // generation_qualifier - computed: false, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: false, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state - computed: false, optional: true, required: false
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

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#name_assigner DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#name_assigner}
  */
  readonly nameAssigner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#party_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#party_name}
  */
  readonly partyName?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name_assigner: cdktf.stringToTerraform(struct!.nameAssigner),
    party_name: cdktf.stringToTerraform(struct!.partyName),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name_assigner: {
      value: cdktf.stringToHclTerraform(struct!.nameAssigner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    party_name: {
      value: cdktf.stringToHclTerraform(struct!.partyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nameAssigner !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAssigner = this._nameAssigner;
    }
    if (this._partyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partyName = this._partyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nameAssigner = undefined;
      this._partyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nameAssigner = value.nameAssigner;
      this._partyName = value.partyName;
    }
  }

  // name_assigner - computed: false, optional: true, required: false
  private _nameAssigner?: string; 
  public get nameAssigner() {
    return this.getStringAttribute('name_assigner');
  }
  public set nameAssigner(value: string) {
    this._nameAssigner = value;
  }
  public resetNameAssigner() {
    this._nameAssigner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAssignerInput() {
    return this._nameAssigner;
  }

  // party_name - computed: false, optional: true, required: false
  private _partyName?: string; 
  public get partyName() {
    return this.getStringAttribute('party_name');
  }
  public set partyName(value: string) {
    this._partyName = value;
  }
  public resetPartyName() {
    this._partyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partyNameInput() {
    return this._partyName;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#type_id DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#type_id}
  */
  readonly typeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_id: cdktf.stringToTerraform(struct!.typeId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._typeId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._typeId = value.typeId;
      this._value = value.value;
    }
  }

  // type_id - computed: false, optional: true, required: false
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  public resetTypeId() {
    this._typeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames {
  /**
  * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#directory_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#directory_name}
  */
  readonly directoryName?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#dns_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Describes an Electronic Data Interchange (EDI) entity as described in as defined in Subject Alternative Name (https://datatracker.ietf.org/doc/html/rfc5280) in RFC 5280.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#edi_party_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#edi_party_name}
  */
  readonly ediPartyName?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#ip_address DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Defines a custom ASN.1 X.400 GeneralName using an object identifier (OID) and value. The OID must satisfy the regular expression shown below. For more information, see NIST's definition of Object Identifier (OID) (https://csrc.nist.gov/glossary/term/Object_Identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#other_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#other_name}
  */
  readonly otherName?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#registered_id DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#registered_id}
  */
  readonly registeredId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#rfc822_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#rfc822_name}
  */
  readonly rfc822Name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#uniform_resource_identifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#uniform_resource_identifier}
  */
  readonly uniformResourceIdentifier?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory_name: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToTerraform(struct!.directoryName),
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    edi_party_name: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToTerraform(struct!.ediPartyName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    other_name: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToTerraform(struct!.otherName),
    registered_id: cdktf.stringToTerraform(struct!.registeredId),
    rfc822_name: cdktf.stringToTerraform(struct!.rfc822Name),
    uniform_resource_identifier: cdktf.stringToTerraform(struct!.uniformResourceIdentifier),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory_name: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameToHclTerraform(struct!.directoryName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName",
    },
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edi_party_name: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameToHclTerraform(struct!.ediPartyName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_name: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherNameToHclTerraform(struct!.otherName),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName",
    },
    registered_id: {
      value: cdktf.stringToHclTerraform(struct!.registeredId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc822_name: {
      value: cdktf.stringToHclTerraform(struct!.rfc822Name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniform_resource_identifier: {
      value: cdktf.stringToHclTerraform(struct!.uniformResourceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directoryName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName?.internalValue;
    }
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._ediPartyName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ediPartyName = this._ediPartyName?.internalValue;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._otherName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherName = this._otherName?.internalValue;
    }
    if (this._registeredId !== undefined) {
      hasAnyValues = true;
      internalValueResult.registeredId = this._registeredId;
    }
    if (this._rfc822Name !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc822Name = this._rfc822Name;
    }
    if (this._uniformResourceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniformResourceIdentifier = this._uniformResourceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directoryName.internalValue = undefined;
      this._dnsName = undefined;
      this._ediPartyName.internalValue = undefined;
      this._ipAddress = undefined;
      this._otherName.internalValue = undefined;
      this._registeredId = undefined;
      this._rfc822Name = undefined;
      this._uniformResourceIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directoryName.internalValue = value.directoryName;
      this._dnsName = value.dnsName;
      this._ediPartyName.internalValue = value.ediPartyName;
      this._ipAddress = value.ipAddress;
      this._otherName.internalValue = value.otherName;
      this._registeredId = value.registeredId;
      this._rfc822Name = value.rfc822Name;
      this._uniformResourceIdentifier = value.uniformResourceIdentifier;
    }
  }

  // directory_name - computed: false, optional: true, required: false
  private _directoryName = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryNameOutputReference(this, "directory_name");
  public get directoryName() {
    return this._directoryName;
  }
  public putDirectoryName(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesDirectoryName) {
    this._directoryName.internalValue = value;
  }
  public resetDirectoryName() {
    this._directoryName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName.internalValue;
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // edi_party_name - computed: false, optional: true, required: false
  private _ediPartyName = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyNameOutputReference(this, "edi_party_name");
  public get ediPartyName() {
    return this._ediPartyName;
  }
  public putEdiPartyName(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesEdiPartyName) {
    this._ediPartyName.internalValue = value;
  }
  public resetEdiPartyName() {
    this._ediPartyName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ediPartyNameInput() {
    return this._ediPartyName.internalValue;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // other_name - computed: false, optional: true, required: false
  private _otherName = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherNameOutputReference(this, "other_name");
  public get otherName() {
    return this._otherName;
  }
  public putOtherName(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOtherName) {
    this._otherName.internalValue = value;
  }
  public resetOtherName() {
    this._otherName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherNameInput() {
    return this._otherName.internalValue;
  }

  // registered_id - computed: false, optional: true, required: false
  private _registeredId?: string; 
  public get registeredId() {
    return this.getStringAttribute('registered_id');
  }
  public set registeredId(value: string) {
    this._registeredId = value;
  }
  public resetRegisteredId() {
    this._registeredId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredIdInput() {
    return this._registeredId;
  }

  // rfc822_name - computed: false, optional: true, required: false
  private _rfc822Name?: string; 
  public get rfc822Name() {
    return this.getStringAttribute('rfc822_name');
  }
  public set rfc822Name(value: string) {
    this._rfc822Name = value;
  }
  public resetRfc822Name() {
    this._rfc822Name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc822NameInput() {
    return this._rfc822Name;
  }

  // uniform_resource_identifier - computed: false, optional: true, required: false
  private _uniformResourceIdentifier?: string; 
  public get uniformResourceIdentifier() {
    return this.getStringAttribute('uniform_resource_identifier');
  }
  public set uniformResourceIdentifier(value: string) {
    this._uniformResourceIdentifier = value;
  }
  public resetUniformResourceIdentifier() {
    this._uniformResourceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformResourceIdentifierInput() {
    return this._uniformResourceIdentifier;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#certificate_policies DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#certificate_policies}
  */
  readonly certificatePolicies?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#custom_extensions DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#custom_extensions}
  */
  readonly customExtensions?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#extended_key_usage DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#extended_key_usage}
  */
  readonly extendedKeyUsage?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage[] | cdktf.IResolvable;
  /**
  * Defines one or more purposes for which the key contained in the certificate can be used. Default value for each option is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#key_usage DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#key_usage}
  */
  readonly keyUsage?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#subject_alternative_names DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames[] | cdktf.IResolvable;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_policies: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesToTerraform, false)(struct!.certificatePolicies),
    custom_extensions: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsToTerraform, false)(struct!.customExtensions),
    extended_key_usage: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageToTerraform, false)(struct!.extendedKeyUsage),
    key_usage: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsageToTerraform(struct!.keyUsage),
    subject_alternative_names: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesToTerraform, false)(struct!.subjectAlternativeNames),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_policies: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesToHclTerraform, false)(struct!.certificatePolicies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesList",
    },
    custom_extensions: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsToHclTerraform, false)(struct!.customExtensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsList",
    },
    extended_key_usage: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageToHclTerraform, false)(struct!.extendedKeyUsage),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageList",
    },
    key_usage: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsageToHclTerraform(struct!.keyUsage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage",
    },
    subject_alternative_names: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesToHclTerraform, false)(struct!.subjectAlternativeNames),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatePolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePolicies = this._certificatePolicies?.internalValue;
    }
    if (this._customExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customExtensions = this._customExtensions?.internalValue;
    }
    if (this._extendedKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._subjectAlternativeNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificatePolicies.internalValue = undefined;
      this._customExtensions.internalValue = undefined;
      this._extendedKeyUsage.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._subjectAlternativeNames.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificatePolicies.internalValue = value.certificatePolicies;
      this._customExtensions.internalValue = value.customExtensions;
      this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
      this._keyUsage.internalValue = value.keyUsage;
      this._subjectAlternativeNames.internalValue = value.subjectAlternativeNames;
    }
  }

  // certificate_policies - computed: false, optional: true, required: false
  private _certificatePolicies = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePoliciesList(this, "certificate_policies", false);
  public get certificatePolicies() {
    return this._certificatePolicies;
  }
  public putCertificatePolicies(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCertificatePolicies[] | cdktf.IResolvable) {
    this._certificatePolicies.internalValue = value;
  }
  public resetCertificatePolicies() {
    this._certificatePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePoliciesInput() {
    return this._certificatePolicies.internalValue;
  }

  // custom_extensions - computed: false, optional: true, required: false
  private _customExtensions = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensionsList(this, "custom_extensions", false);
  public get customExtensions() {
    return this._customExtensions;
  }
  public putCustomExtensions(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsCustomExtensions[] | cdktf.IResolvable) {
    this._customExtensions.internalValue = value;
  }
  public resetCustomExtensions() {
    this._customExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customExtensionsInput() {
    return this._customExtensions.internalValue;
  }

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsageList(this, "extended_key_usage", false);
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsExtendedKeyUsage[] | cdktf.IResolvable) {
    this._extendedKeyUsage.internalValue = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // subject_alternative_names - computed: false, optional: true, required: false
  private _subjectAlternativeNames = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNamesList(this, "subject_alternative_names", false);
  public get subjectAlternativeNames() {
    return this._subjectAlternativeNames;
  }
  public putSubjectAlternativeNames(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsSubjectAlternativeNames[] | cdktf.IResolvable) {
    this._subjectAlternativeNames.internalValue = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames.internalValue;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#object_identifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#object_identifier}
  */
  readonly objectIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_identifier: cdktf.stringToTerraform(struct!.objectIdentifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.objectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdentifier = this._objectIdentifier;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdentifier = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdentifier = value.objectIdentifier;
      this._value = value.value;
    }
  }

  // object_identifier - computed: false, optional: true, required: false
  private _objectIdentifier?: string; 
  public get objectIdentifier() {
    return this.getStringAttribute('object_identifier');
  }
  public set objectIdentifier(value: string) {
    this._objectIdentifier = value;
  }
  public resetObjectIdentifier() {
    this._objectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdentifierInput() {
    return this._objectIdentifier;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesOutputReference {
    return new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#common_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#common_name}
  */
  readonly commonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#country DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#custom_attributes DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#custom_attributes}
  */
  readonly customAttributes?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#distinguished_name_qualifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#distinguished_name_qualifier}
  */
  readonly distinguishedNameQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#generation_qualifier DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#generation_qualifier}
  */
  readonly generationQualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#given_name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#given_name}
  */
  readonly givenName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#initials DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#initials}
  */
  readonly initials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#locality DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#locality}
  */
  readonly locality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#organization DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#organizational_unit DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#pseudonym DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#pseudonym}
  */
  readonly pseudonym?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#serial_number DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#state DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#surname DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#surname}
  */
  readonly surname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#title DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#title}
  */
  readonly title?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country: cdktf.stringToTerraform(struct!.country),
    custom_attributes: cdktf.listMapper(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesToTerraform, false)(struct!.customAttributes),
    distinguished_name_qualifier: cdktf.stringToTerraform(struct!.distinguishedNameQualifier),
    generation_qualifier: cdktf.stringToTerraform(struct!.generationQualifier),
    given_name: cdktf.stringToTerraform(struct!.givenName),
    initials: cdktf.stringToTerraform(struct!.initials),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    pseudonym: cdktf.stringToTerraform(struct!.pseudonym),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    state: cdktf.stringToTerraform(struct!.state),
    surname: cdktf.stringToTerraform(struct!.surname),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_name: {
      value: cdktf.stringToHclTerraform(struct!.commonName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktf.listMapperHcl(dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesToHclTerraform, false)(struct!.customAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesList",
    },
    distinguished_name_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.distinguishedNameQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation_qualifier: {
      value: cdktf.stringToHclTerraform(struct!.generationQualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    given_name: {
      value: cdktf.stringToHclTerraform(struct!.givenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initials: {
      value: cdktf.stringToHclTerraform(struct!.initials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locality: {
      value: cdktf.stringToHclTerraform(struct!.locality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization: {
      value: cdktf.stringToHclTerraform(struct!.organization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pseudonym: {
      value: cdktf.stringToHclTerraform(struct!.pseudonym),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    surname: {
      value: cdktf.stringToHclTerraform(struct!.surname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._customAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes?.internalValue;
    }
    if (this._distinguishedNameQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.distinguishedNameQualifier = this._distinguishedNameQualifier;
    }
    if (this._generationQualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationQualifier = this._generationQualifier;
    }
    if (this._givenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.givenName = this._givenName;
    }
    if (this._initials !== undefined) {
      hasAnyValues = true;
      internalValueResult.initials = this._initials;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._pseudonym !== undefined) {
      hasAnyValues = true;
      internalValueResult.pseudonym = this._pseudonym;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._surname !== undefined) {
      hasAnyValues = true;
      internalValueResult.surname = this._surname;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonName = undefined;
      this._country = undefined;
      this._customAttributes.internalValue = undefined;
      this._distinguishedNameQualifier = undefined;
      this._generationQualifier = undefined;
      this._givenName = undefined;
      this._initials = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._pseudonym = undefined;
      this._serialNumber = undefined;
      this._state = undefined;
      this._surname = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonName = value.commonName;
      this._country = value.country;
      this._customAttributes.internalValue = value.customAttributes;
      this._distinguishedNameQualifier = value.distinguishedNameQualifier;
      this._generationQualifier = value.generationQualifier;
      this._givenName = value.givenName;
      this._initials = value.initials;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._pseudonym = value.pseudonym;
      this._serialNumber = value.serialNumber;
      this._state = value.state;
      this._surname = value.surname;
      this._title = value.title;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributesList(this, "custom_attributes", false);
  public get customAttributes() {
    return this._customAttributes;
  }
  public putCustomAttributes(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectCustomAttributes[] | cdktf.IResolvable) {
    this._customAttributes.internalValue = value;
  }
  public resetCustomAttributes() {
    this._customAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes.internalValue;
  }

  // distinguished_name_qualifier - computed: false, optional: true, required: false
  private _distinguishedNameQualifier?: string; 
  public get distinguishedNameQualifier() {
    return this.getStringAttribute('distinguished_name_qualifier');
  }
  public set distinguishedNameQualifier(value: string) {
    this._distinguishedNameQualifier = value;
  }
  public resetDistinguishedNameQualifier() {
    this._distinguishedNameQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distinguishedNameQualifierInput() {
    return this._distinguishedNameQualifier;
  }

  // generation_qualifier - computed: false, optional: true, required: false
  private _generationQualifier?: string; 
  public get generationQualifier() {
    return this.getStringAttribute('generation_qualifier');
  }
  public set generationQualifier(value: string) {
    this._generationQualifier = value;
  }
  public resetGenerationQualifier() {
    this._generationQualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationQualifierInput() {
    return this._generationQualifier;
  }

  // given_name - computed: false, optional: true, required: false
  private _givenName?: string; 
  public get givenName() {
    return this.getStringAttribute('given_name');
  }
  public set givenName(value: string) {
    this._givenName = value;
  }
  public resetGivenName() {
    this._givenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get givenNameInput() {
    return this._givenName;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // pseudonym - computed: false, optional: true, required: false
  private _pseudonym?: string; 
  public get pseudonym() {
    return this.getStringAttribute('pseudonym');
  }
  public set pseudonym(value: string) {
    this._pseudonym = value;
  }
  public resetPseudonym() {
    this._pseudonym = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pseudonymInput() {
    return this._pseudonym;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // state - computed: false, optional: true, required: false
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

  // surname - computed: false, optional: true, required: false
  private _surname?: string; 
  public get surname() {
    return this.getStringAttribute('surname');
  }
  public set surname(value: string) {
    this._surname = value;
  }
  public resetSurname() {
    this._surname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surnameInput() {
    return this._surname;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough {
  /**
  * Contains X.509 extension information for a certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#extensions DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#extensions}
  */
  readonly extensions?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions;
  /**
  * Contains information about the certificate subject. The Subject field in the certificate identifies the entity that owns or controls the public key in the certificate. The entity can be a user, computer, device, or service. The Subject must contain an X.500 distinguished name (DN). A DN is a sequence of relative distinguished names (RDNs). The RDNs are separated by commas in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#subject DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#subject}
  */
  readonly subject?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extensions: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsToTerraform(struct!.extensions),
    subject: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectToTerraform(struct!.subject),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extensions: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions",
    },
    subject: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectToHclTerraform(struct!.subject),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensions.internalValue = undefined;
      this._subject.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensions.internalValue = value.extensions;
      this._subject.internalValue = value.subject;
    }
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughExtensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
  }

  // subject - computed: false, optional: true, required: false
  private _subject = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughSubject) {
    this._subject.internalValue = value;
  }
  public resetSubject() {
    this._subject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFromToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFromToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#from DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFromToTerraform(struct!.from),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefFrom) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#key DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutputToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput | cdktf.IResolvable): any {
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


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutputToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#name DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#namespace DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFromToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFromToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom | cdktf.IResolvable): any {
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

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef {
  /**
  * AWSResourceReference provides all the values necessary to reference another k8s resource for finding the identifier(Id/ARN/Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#from DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFromToTerraform(struct!.from),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFromToHclTerraform(struct!.from),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef | cdktf.IResolvable | undefined) {
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
  private _from = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFromOutputReference(this, "from");
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefFrom) {
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
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#type DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#type DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#value DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBeforeToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBeforeToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec {
  /**
  * Specifies X.509 certificate information to be included in the issued certificate. An APIPassthrough or APICSRPassthrough template variant must be selected, or else this parameter is ignored. For more information about using these templates, see Understanding Certificate Templates (https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html). If conflicting or duplicate certificate information is supplied during certificate issuance, Amazon Web Services Private CA applies order of operation rules (https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations) to determine what information is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#api_passthrough DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#api_passthrough}
  */
  readonly apiPassthrough?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough;
  /**
  * The Amazon Resource Name (ARN) that was returned when you called CreateCertificateAuthority (https://docs.aws.amazon.com/privateca/latest/APIReference/API_CreateCertificateAuthority.html). This must be of the form: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#certificate_authority_arn DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#certificate_authority_arn}
  */
  readonly certificateAuthorityArn?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#certificate_authority_ref DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#certificate_authority_ref}
  */
  readonly certificateAuthorityRef?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef;
  /**
  * SecretKeyReference combines a k8s corev1.SecretReference with a specific key within the referred-to Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#certificate_output DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#certificate_output}
  */
  readonly certificateOutput?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#certificate_signing_request DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#certificate_signing_request}
  */
  readonly certificateSigningRequest?: string;
  /**
  * AWSResourceReferenceWrapper provides a wrapper around *AWSResourceReference type to provide more user friendly syntax for references using 'from' field Ex: APIIDRef: from: name: my-api
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#certificate_signing_request_ref DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#certificate_signing_request_ref}
  */
  readonly certificateSigningRequestRef?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef;
  /**
  * The name of the algorithm that will be used to sign the certificate to be issued. This parameter should not be confused with the SigningAlgorithm parameter used to sign a CSR in the CreateCertificateAuthority action. The specified signing algorithm family (RSA or ECDSA) must match the algorithm family of the CA's secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#signing_algorithm DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#signing_algorithm}
  */
  readonly signingAlgorithm: string;
  /**
  * Specifies a custom configuration template to use when issuing a certificate. If this parameter is not provided, Amazon Web Services Private CA defaults to the EndEntityCertificate/V1 template. For CA certificates, you should choose the shortest path length that meets your needs. The path length is indicated by the PathLenN portion of the ARN, where N is the CA depth (https://docs.aws.amazon.com/privateca/latest/userguide/PcaTerms.html#terms-cadepth). Note: The CA depth configured on a subordinate CA certificate must not exceed the limit set by its parents in the CA hierarchy. For a list of TemplateArn values supported by Amazon Web Services Private CA, see Understanding Certificate Templates (https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#template_arn DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#template_arn}
  */
  readonly templateArn?: string;
  /**
  * Information describing the end of the validity period of the certificate. This parameter sets the “Not After” date for the certificate. Certificate validity is the period of time during which a certificate is valid. Validity can be expressed as an explicit date and time when the certificate expires, or as a span of time after issuance, stated in days, months, or years. For more information, see Validity (https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5) in RFC 5280. This value is unaffected when ValidityNotBefore is also specified. For example, if Validity is set to 20 days in the future, the certificate will expire 20 days from issuance time regardless of the ValidityNotBefore value. The end of the validity period configured on a certificate must not exceed the limit set on its parents in the CA hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#validity DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#validity}
  */
  readonly validity: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity;
  /**
  * Information describing the start of the validity period of the certificate. This parameter sets the “Not Before' date for the certificate. By default, when issuing a certificate, Amazon Web Services Private CA sets the 'Not Before' date to the issuance time minus 60 minutes. This compensates for clock inconsistencies across computer systems. The ValidityNotBefore parameter can be used to customize the “Not Before” value. Unlike the Validity parameter, the ValidityNotBefore parameter is optional. The ValidityNotBefore value is expressed as an explicit date and time, using the Validity type value ABSOLUTE. For more information, see Validity (https://docs.aws.amazon.com/privateca/latest/APIReference/API_Validity.html) in this API reference and Validity (https://datatracker.ietf.org/doc/html/rfc5280#section-4.1.2.5) in RFC 5280.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#validity_not_before DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest#validity_not_before}
  */
  readonly validityNotBefore?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore;
}

export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_passthrough: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughToTerraform(struct!.apiPassthrough),
    certificate_authority_arn: cdktf.stringToTerraform(struct!.certificateAuthorityArn),
    certificate_authority_ref: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefToTerraform(struct!.certificateAuthorityRef),
    certificate_output: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutputToTerraform(struct!.certificateOutput),
    certificate_signing_request: cdktf.stringToTerraform(struct!.certificateSigningRequest),
    certificate_signing_request_ref: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefToTerraform(struct!.certificateSigningRequestRef),
    signing_algorithm: cdktf.stringToTerraform(struct!.signingAlgorithm),
    template_arn: cdktf.stringToTerraform(struct!.templateArn),
    validity: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityToTerraform(struct!.validity),
    validity_not_before: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBeforeToTerraform(struct!.validityNotBefore),
  }
}


export function dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_passthrough: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughToHclTerraform(struct!.apiPassthrough),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough",
    },
    certificate_authority_arn: {
      value: cdktf.stringToHclTerraform(struct!.certificateAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_authority_ref: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefToHclTerraform(struct!.certificateAuthorityRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef",
    },
    certificate_output: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutputToHclTerraform(struct!.certificateOutput),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput",
    },
    certificate_signing_request: {
      value: cdktf.stringToHclTerraform(struct!.certificateSigningRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_signing_request_ref: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefToHclTerraform(struct!.certificateSigningRequestRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef",
    },
    signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_arn: {
      value: cdktf.stringToHclTerraform(struct!.templateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validity: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityToHclTerraform(struct!.validity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity",
    },
    validity_not_before: {
      value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBeforeToHclTerraform(struct!.validityNotBefore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiPassthrough?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiPassthrough = this._apiPassthrough?.internalValue;
    }
    if (this._certificateAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityArn = this._certificateAuthorityArn;
    }
    if (this._certificateAuthorityRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityRef = this._certificateAuthorityRef?.internalValue;
    }
    if (this._certificateOutput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateOutput = this._certificateOutput?.internalValue;
    }
    if (this._certificateSigningRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSigningRequest = this._certificateSigningRequest;
    }
    if (this._certificateSigningRequestRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSigningRequestRef = this._certificateSigningRequestRef?.internalValue;
    }
    if (this._signingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingAlgorithm = this._signingAlgorithm;
    }
    if (this._templateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateArn = this._templateArn;
    }
    if (this._validity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validity = this._validity?.internalValue;
    }
    if (this._validityNotBefore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validityNotBefore = this._validityNotBefore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiPassthrough.internalValue = undefined;
      this._certificateAuthorityArn = undefined;
      this._certificateAuthorityRef.internalValue = undefined;
      this._certificateOutput.internalValue = undefined;
      this._certificateSigningRequest = undefined;
      this._certificateSigningRequestRef.internalValue = undefined;
      this._signingAlgorithm = undefined;
      this._templateArn = undefined;
      this._validity.internalValue = undefined;
      this._validityNotBefore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiPassthrough.internalValue = value.apiPassthrough;
      this._certificateAuthorityArn = value.certificateAuthorityArn;
      this._certificateAuthorityRef.internalValue = value.certificateAuthorityRef;
      this._certificateOutput.internalValue = value.certificateOutput;
      this._certificateSigningRequest = value.certificateSigningRequest;
      this._certificateSigningRequestRef.internalValue = value.certificateSigningRequestRef;
      this._signingAlgorithm = value.signingAlgorithm;
      this._templateArn = value.templateArn;
      this._validity.internalValue = value.validity;
      this._validityNotBefore.internalValue = value.validityNotBefore;
    }
  }

  // api_passthrough - computed: false, optional: true, required: false
  private _apiPassthrough = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthroughOutputReference(this, "api_passthrough");
  public get apiPassthrough() {
    return this._apiPassthrough;
  }
  public putApiPassthrough(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecApiPassthrough) {
    this._apiPassthrough.internalValue = value;
  }
  public resetApiPassthrough() {
    this._apiPassthrough.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPassthroughInput() {
    return this._apiPassthrough.internalValue;
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
  private _certificateAuthorityRef = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRefOutputReference(this, "certificate_authority_ref");
  public get certificateAuthorityRef() {
    return this._certificateAuthorityRef;
  }
  public putCertificateAuthorityRef(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateAuthorityRef) {
    this._certificateAuthorityRef.internalValue = value;
  }
  public resetCertificateAuthorityRef() {
    this._certificateAuthorityRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityRefInput() {
    return this._certificateAuthorityRef.internalValue;
  }

  // certificate_output - computed: false, optional: true, required: false
  private _certificateOutput = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutputOutputReference(this, "certificate_output");
  public get certificateOutput() {
    return this._certificateOutput;
  }
  public putCertificateOutput(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateOutput) {
    this._certificateOutput.internalValue = value;
  }
  public resetCertificateOutput() {
    this._certificateOutput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateOutputInput() {
    return this._certificateOutput.internalValue;
  }

  // certificate_signing_request - computed: false, optional: true, required: false
  private _certificateSigningRequest?: string; 
  public get certificateSigningRequest() {
    return this.getStringAttribute('certificate_signing_request');
  }
  public set certificateSigningRequest(value: string) {
    this._certificateSigningRequest = value;
  }
  public resetCertificateSigningRequest() {
    this._certificateSigningRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestInput() {
    return this._certificateSigningRequest;
  }

  // certificate_signing_request_ref - computed: false, optional: true, required: false
  private _certificateSigningRequestRef = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRefOutputReference(this, "certificate_signing_request_ref");
  public get certificateSigningRequestRef() {
    return this._certificateSigningRequestRef;
  }
  public putCertificateSigningRequestRef(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecCertificateSigningRequestRef) {
    this._certificateSigningRequestRef.internalValue = value;
  }
  public resetCertificateSigningRequestRef() {
    this._certificateSigningRequestRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSigningRequestRefInput() {
    return this._certificateSigningRequestRef.internalValue;
  }

  // signing_algorithm - computed: false, optional: false, required: true
  private _signingAlgorithm?: string; 
  public get signingAlgorithm() {
    return this.getStringAttribute('signing_algorithm');
  }
  public set signingAlgorithm(value: string) {
    this._signingAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingAlgorithmInput() {
    return this._signingAlgorithm;
  }

  // template_arn - computed: false, optional: true, required: false
  private _templateArn?: string; 
  public get templateArn() {
    return this.getStringAttribute('template_arn');
  }
  public set templateArn(value: string) {
    this._templateArn = value;
  }
  public resetTemplateArn() {
    this._templateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateArnInput() {
    return this._templateArn;
  }

  // validity - computed: false, optional: false, required: true
  private _validity = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityOutputReference(this, "validity");
  public get validity() {
    return this._validity;
  }
  public putValidity(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidity) {
    this._validity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validityInput() {
    return this._validity.internalValue;
  }

  // validity_not_before - computed: false, optional: true, required: false
  private _validityNotBefore = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBeforeOutputReference(this, "validity_not_before");
  public get validityNotBefore() {
    return this._validityNotBefore;
  }
  public putValidityNotBefore(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecValidityNotBefore) {
    this._validityNotBefore.internalValue = value;
  }
  public resetValidityNotBefore() {
    this._validityNotBefore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityNotBeforeInput() {
    return this._validityNotBefore.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest k8s_acmpca_services_k8s_aws_certificate_v1alpha1_manifest}
*/
export class DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_acmpca_services_k8s_aws_certificate_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_acmpca_services_k8s_aws_certificate_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/acmpca_services_k8s_aws_certificate_v1alpha1_manifest k8s_acmpca_services_k8s_aws_certificate_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_acmpca_services_k8s_aws_certificate_v1alpha1_manifest',
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
  private _metadata = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcmpcaServicesK8SAwsCertificateV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
