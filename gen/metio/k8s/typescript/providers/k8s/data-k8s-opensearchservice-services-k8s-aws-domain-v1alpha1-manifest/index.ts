// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#metadata DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata;
  /**
  * DomainSpec defines the desired state of Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#spec DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec;
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#annotations DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#labels DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#name DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#namespace DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#public_key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#roles_key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#subject_key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#subject_key}
  */
  readonly subjectKey?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._publicKey = undefined;
      this._rolesKey = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._publicKey = value.publicKey;
      this._rolesKey = value.rolesKey;
      this._subjectKey = value.subjectKey;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // roles_key - computed: false, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // subject_key - computed: false, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword {
  /**
  * Key is the key within the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * name is unique within a namespace to reference a secret resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#name DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * namespace defines the space within which the secret name must be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#namespace DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPasswordToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword | cdktf.IResolvable): any {
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


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPasswordToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword | cdktf.IResolvable): any {
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

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions {
  /**
  * The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities (https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in Using Amazon Web Services Identity and Access Management for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#master_user_arn DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#master_user_arn}
  */
  readonly masterUserArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#master_user_name DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * SecretKeyReference combines a k8s corev1.SecretReference with a specific key within the referred-to Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#master_user_password DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#master_user_password}
  */
  readonly masterUserPassword?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_user_arn: cdktf.stringToTerraform(struct!.masterUserArn),
    master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
    master_user_password: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPasswordToTerraform(struct!.masterUserPassword),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_user_arn: {
      value: cdktf.stringToHclTerraform(struct!.masterUserArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_name: {
      value: cdktf.stringToHclTerraform(struct!.masterUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_password: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPasswordToHclTerraform(struct!.masterUserPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterUserArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserArn = this._masterUserArn;
    }
    if (this._masterUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._masterUserPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserPassword = this._masterUserPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterUserArn = undefined;
      this._masterUserName = undefined;
      this._masterUserPassword.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterUserArn = value.masterUserArn;
      this._masterUserName = value.masterUserName;
      this._masterUserPassword.internalValue = value.masterUserPassword;
    }
  }

  // master_user_arn - computed: false, optional: true, required: false
  private _masterUserArn?: string; 
  public get masterUserArn() {
    return this.getStringAttribute('master_user_arn');
  }
  public set masterUserArn(value: string) {
    this._masterUserArn = value;
  }
  public resetMasterUserArn() {
    this._masterUserArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserArnInput() {
    return this._masterUserArn;
  }

  // master_user_name - computed: false, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // master_user_password - computed: false, optional: true, required: false
  private _masterUserPassword = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPasswordOutputReference(this, "master_user_password");
  public get masterUserPassword() {
    return this._masterUserPassword;
  }
  public putMasterUserPassword(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsMasterUserPassword) {
    this._masterUserPassword.internalValue = value;
  }
  public resetMasterUserPassword() {
    this._masterUserPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserPasswordInput() {
    return this._masterUserPassword.internalValue;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#entity_id DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#metadata_content DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#metadata_content}
  */
  readonly metadataContent?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdpToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    metadata_content: cdktf.stringToTerraform(struct!.metadataContent),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdpToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_content: {
      value: cdktf.stringToHclTerraform(struct!.metadataContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._metadataContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataContent = this._metadataContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._metadataContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._metadataContent = value.metadataContent;
    }
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // metadata_content - computed: false, optional: true, required: false
  private _metadataContent?: string; 
  public get metadataContent() {
    return this.getStringAttribute('metadata_content');
  }
  public set metadataContent(value: string) {
    this._metadataContent = value;
  }
  public resetMetadataContent() {
    this._metadataContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataContentInput() {
    return this._metadataContent;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The SAML identity povider information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#idp DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#idp}
  */
  readonly idp?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#master_backend_role DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#master_backend_role}
  */
  readonly masterBackendRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#master_user_name DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#master_user_name}
  */
  readonly masterUserName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#roles_key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#session_timeout_minutes DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#session_timeout_minutes}
  */
  readonly sessionTimeoutMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#subject_key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#subject_key}
  */
  readonly subjectKey?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idp: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdpToTerraform(struct!.idp),
    master_backend_role: cdktf.stringToTerraform(struct!.masterBackendRole),
    master_user_name: cdktf.stringToTerraform(struct!.masterUserName),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    session_timeout_minutes: cdktf.numberToTerraform(struct!.sessionTimeoutMinutes),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdpToHclTerraform(struct!.idp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp",
    },
    master_backend_role: {
      value: cdktf.stringToHclTerraform(struct!.masterBackendRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_user_name: {
      value: cdktf.stringToHclTerraform(struct!.masterUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout_minutes: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeoutMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idp = this._idp?.internalValue;
    }
    if (this._masterBackendRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterBackendRole = this._masterBackendRole;
    }
    if (this._masterUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserName = this._masterUserName;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._sessionTimeoutMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._idp.internalValue = undefined;
      this._masterBackendRole = undefined;
      this._masterUserName = undefined;
      this._rolesKey = undefined;
      this._sessionTimeoutMinutes = undefined;
      this._subjectKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._idp.internalValue = value.idp;
      this._masterBackendRole = value.masterBackendRole;
      this._masterUserName = value.masterUserName;
      this._rolesKey = value.rolesKey;
      this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
      this._subjectKey = value.subjectKey;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // idp - computed: false, optional: true, required: false
  private _idp = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdpOutputReference(this, "idp");
  public get idp() {
    return this._idp;
  }
  public putIdp(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsIdp) {
    this._idp.internalValue = value;
  }
  public resetIdp() {
    this._idp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInput() {
    return this._idp.internalValue;
  }

  // master_backend_role - computed: false, optional: true, required: false
  private _masterBackendRole?: string; 
  public get masterBackendRole() {
    return this.getStringAttribute('master_backend_role');
  }
  public set masterBackendRole(value: string) {
    this._masterBackendRole = value;
  }
  public resetMasterBackendRole() {
    this._masterBackendRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterBackendRoleInput() {
    return this._masterBackendRole;
  }

  // master_user_name - computed: false, optional: true, required: false
  private _masterUserName?: string; 
  public get masterUserName() {
    return this.getStringAttribute('master_user_name');
  }
  public set masterUserName(value: string) {
    this._masterUserName = value;
  }
  public resetMasterUserName() {
    this._masterUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserNameInput() {
    return this._masterUserName;
  }

  // roles_key - computed: false, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // session_timeout_minutes - computed: false, optional: true, required: false
  private _sessionTimeoutMinutes?: number; 
  public get sessionTimeoutMinutes() {
    return this.getNumberAttribute('session_timeout_minutes');
  }
  public set sessionTimeoutMinutes(value: number) {
    this._sessionTimeoutMinutes = value;
  }
  public resetSessionTimeoutMinutes() {
    this._sessionTimeoutMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutMinutesInput() {
    return this._sessionTimeoutMinutes;
  }

  // subject_key - computed: false, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#anonymous_auth_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#anonymous_auth_enabled}
  */
  readonly anonymousAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#internal_user_database_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#internal_user_database_enabled}
  */
  readonly internalUserDatabaseEnabled?: boolean | cdktf.IResolvable;
  /**
  * The JWT authentication and authorization configuration for an Amazon OpenSearch Service domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#jwt_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#jwt_options}
  */
  readonly jwtOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions;
  /**
  * Credentials for the master user for a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#master_user_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#master_user_options}
  */
  readonly masterUserOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions;
  /**
  * The SAML authentication configuration for an Amazon OpenSearch Service domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#s_aml_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#s_aml_options}
  */
  readonly sAmlOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous_auth_enabled: cdktf.booleanToTerraform(struct!.anonymousAuthEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    internal_user_database_enabled: cdktf.booleanToTerraform(struct!.internalUserDatabaseEnabled),
    jwt_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptionsToTerraform(struct!.jwtOptions),
    master_user_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsToTerraform(struct!.masterUserOptions),
    s_aml_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsToTerraform(struct!.sAmlOptions),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous_auth_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.anonymousAuthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    internal_user_database_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.internalUserDatabaseEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptionsToHclTerraform(struct!.jwtOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions",
    },
    master_user_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsToHclTerraform(struct!.masterUserOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions",
    },
    s_aml_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsToHclTerraform(struct!.sAmlOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymousAuthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymousAuthEnabled = this._anonymousAuthEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._internalUserDatabaseEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalUserDatabaseEnabled = this._internalUserDatabaseEnabled;
    }
    if (this._jwtOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtOptions = this._jwtOptions?.internalValue;
    }
    if (this._masterUserOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterUserOptions = this._masterUserOptions?.internalValue;
    }
    if (this._sAmlOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sAmlOptions = this._sAmlOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymousAuthEnabled = undefined;
      this._enabled = undefined;
      this._internalUserDatabaseEnabled = undefined;
      this._jwtOptions.internalValue = undefined;
      this._masterUserOptions.internalValue = undefined;
      this._sAmlOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymousAuthEnabled = value.anonymousAuthEnabled;
      this._enabled = value.enabled;
      this._internalUserDatabaseEnabled = value.internalUserDatabaseEnabled;
      this._jwtOptions.internalValue = value.jwtOptions;
      this._masterUserOptions.internalValue = value.masterUserOptions;
      this._sAmlOptions.internalValue = value.sAmlOptions;
    }
  }

  // anonymous_auth_enabled - computed: false, optional: true, required: false
  private _anonymousAuthEnabled?: boolean | cdktf.IResolvable; 
  public get anonymousAuthEnabled() {
    return this.getBooleanAttribute('anonymous_auth_enabled');
  }
  public set anonymousAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._anonymousAuthEnabled = value;
  }
  public resetAnonymousAuthEnabled() {
    this._anonymousAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousAuthEnabledInput() {
    return this._anonymousAuthEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // internal_user_database_enabled - computed: false, optional: true, required: false
  private _internalUserDatabaseEnabled?: boolean | cdktf.IResolvable; 
  public get internalUserDatabaseEnabled() {
    return this.getBooleanAttribute('internal_user_database_enabled');
  }
  public set internalUserDatabaseEnabled(value: boolean | cdktf.IResolvable) {
    this._internalUserDatabaseEnabled = value;
  }
  public resetInternalUserDatabaseEnabled() {
    this._internalUserDatabaseEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalUserDatabaseEnabledInput() {
    return this._internalUserDatabaseEnabled;
  }

  // jwt_options - computed: false, optional: true, required: false
  private _jwtOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptionsOutputReference(this, "jwt_options");
  public get jwtOptions() {
    return this._jwtOptions;
  }
  public putJwtOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsJwtOptions) {
    this._jwtOptions.internalValue = value;
  }
  public resetJwtOptions() {
    this._jwtOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtOptionsInput() {
    return this._jwtOptions.internalValue;
  }

  // master_user_options - computed: false, optional: true, required: false
  private _masterUserOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptionsOutputReference(this, "master_user_options");
  public get masterUserOptions() {
    return this._masterUserOptions;
  }
  public putMasterUserOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsMasterUserOptions) {
    this._masterUserOptions.internalValue = value;
  }
  public resetMasterUserOptions() {
    this._masterUserOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterUserOptionsInput() {
    return this._masterUserOptions.internalValue;
  }

  // s_aml_options - computed: false, optional: true, required: false
  private _sAmlOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptionsOutputReference(this, "s_aml_options");
  public get sAmlOptions() {
    return this._sAmlOptions;
  }
  public putSAmlOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsSAmlOptions) {
    this._sAmlOptions.internalValue = value;
  }
  public resetSAmlOptions() {
    this._sAmlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sAmlOptionsInput() {
    return this._sAmlOptions.internalValue;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#desired_state DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#desired_state}
  */
  readonly desiredState?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
    }
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions {
  /**
  * Container for parameters required to enable the natural language query generation feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#natural_language_query_generation_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#natural_language_query_generation_options}
  */
  readonly naturalLanguageQueryGenerationOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    natural_language_query_generation_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptionsToTerraform(struct!.naturalLanguageQueryGenerationOptions),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    natural_language_query_generation_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptionsToHclTerraform(struct!.naturalLanguageQueryGenerationOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._naturalLanguageQueryGenerationOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.naturalLanguageQueryGenerationOptions = this._naturalLanguageQueryGenerationOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._naturalLanguageQueryGenerationOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._naturalLanguageQueryGenerationOptions.internalValue = value.naturalLanguageQueryGenerationOptions;
    }
  }

  // natural_language_query_generation_options - computed: false, optional: true, required: false
  private _naturalLanguageQueryGenerationOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptionsOutputReference(this, "natural_language_query_generation_options");
  public get naturalLanguageQueryGenerationOptions() {
    return this._naturalLanguageQueryGenerationOptions;
  }
  public putNaturalLanguageQueryGenerationOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsNaturalLanguageQueryGenerationOptions) {
    this._naturalLanguageQueryGenerationOptions.internalValue = value;
  }
  public resetNaturalLanguageQueryGenerationOptions() {
    this._naturalLanguageQueryGenerationOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageQueryGenerationOptionsInput() {
    return this._naturalLanguageQueryGenerationOptions.internalValue;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration {
  /**
  * The unit of a maintenance schedule duration. Valid value is HOUR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#unit DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#unit}
  */
  readonly unit?: string;
  /**
  * Integer that specifies the value of a maintenance schedule duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#value DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#value}
  */
  readonly value?: number;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDurationToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDurationToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
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

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
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
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#cron_expression_for_recurrence DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#cron_expression_for_recurrence}
  */
  readonly cronExpressionForRecurrence?: string;
  /**
  * The duration of a maintenance schedule. For more information, see Auto-Tune for Amazon OpenSearch Service (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/auto-tune.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#duration DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#duration}
  */
  readonly duration?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#start_at DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#start_at}
  */
  readonly startAt?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression_for_recurrence: cdktf.stringToTerraform(struct!.cronExpressionForRecurrence),
    duration: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDurationToTerraform(struct!.duration),
    start_at: cdktf.stringToTerraform(struct!.startAt),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression_for_recurrence: {
      value: cdktf.stringToHclTerraform(struct!.cronExpressionForRecurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDurationToHclTerraform(struct!.duration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration",
    },
    start_at: {
      value: cdktf.stringToHclTerraform(struct!.startAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpressionForRecurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpressionForRecurrence = this._cronExpressionForRecurrence;
    }
    if (this._duration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration?.internalValue;
    }
    if (this._startAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAt = this._startAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cronExpressionForRecurrence = undefined;
      this._duration.internalValue = undefined;
      this._startAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cronExpressionForRecurrence = value.cronExpressionForRecurrence;
      this._duration.internalValue = value.duration;
      this._startAt = value.startAt;
    }
  }

  // cron_expression_for_recurrence - computed: false, optional: true, required: false
  private _cronExpressionForRecurrence?: string; 
  public get cronExpressionForRecurrence() {
    return this.getStringAttribute('cron_expression_for_recurrence');
  }
  public set cronExpressionForRecurrence(value: string) {
    this._cronExpressionForRecurrence = value;
  }
  public resetCronExpressionForRecurrence() {
    this._cronExpressionForRecurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionForRecurrenceInput() {
    return this._cronExpressionForRecurrence;
  }

  // duration - computed: false, optional: true, required: false
  private _duration = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDurationOutputReference(this, "duration");
  public get duration() {
    return this._duration;
  }
  public putDuration(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesDuration) {
    this._duration.internalValue = value;
  }
  public resetDuration() {
    this._duration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration.internalValue;
  }

  // start_at - computed: false, optional: true, required: false
  private _startAt?: string; 
  public get startAt() {
    return this.getStringAttribute('start_at');
  }
  public set startAt(value: string) {
    this._startAt = value;
  }
  public resetStartAt() {
    this._startAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startAtInput() {
    return this._startAt;
  }
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesOutputReference {
    return new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions {
  /**
  * The Auto-Tune desired state. Valid values are ENABLED and DISABLED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#desired_state DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#maintenance_schedules DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#maintenance_schedules}
  */
  readonly maintenanceSchedules?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#use_off_peak_window DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#use_off_peak_window}
  */
  readonly useOffPeakWindow?: boolean | cdktf.IResolvable;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    maintenance_schedules: cdktf.listMapper(dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesToTerraform, false)(struct!.maintenanceSchedules),
    use_off_peak_window: cdktf.booleanToTerraform(struct!.useOffPeakWindow),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_schedules: {
      value: cdktf.listMapperHcl(dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesToHclTerraform, false)(struct!.maintenanceSchedules),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesList",
    },
    use_off_peak_window: {
      value: cdktf.booleanToHclTerraform(struct!.useOffPeakWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._maintenanceSchedules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceSchedules = this._maintenanceSchedules?.internalValue;
    }
    if (this._useOffPeakWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOffPeakWindow = this._useOffPeakWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._desiredState = undefined;
      this._maintenanceSchedules.internalValue = undefined;
      this._useOffPeakWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._desiredState = value.desiredState;
      this._maintenanceSchedules.internalValue = value.maintenanceSchedules;
      this._useOffPeakWindow = value.useOffPeakWindow;
    }
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // maintenance_schedules - computed: false, optional: true, required: false
  private _maintenanceSchedules = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedulesList(this, "maintenance_schedules", false);
  public get maintenanceSchedules() {
    return this._maintenanceSchedules;
  }
  public putMaintenanceSchedules(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsMaintenanceSchedules[] | cdktf.IResolvable) {
    this._maintenanceSchedules.internalValue = value;
  }
  public resetMaintenanceSchedules() {
    this._maintenanceSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceSchedulesInput() {
    return this._maintenanceSchedules.internalValue;
  }

  // use_off_peak_window - computed: false, optional: true, required: false
  private _useOffPeakWindow?: boolean | cdktf.IResolvable; 
  public get useOffPeakWindow() {
    return this.getBooleanAttribute('use_off_peak_window');
  }
  public set useOffPeakWindow(value: boolean | cdktf.IResolvable) {
    this._useOffPeakWindow = value;
  }
  public resetUseOffPeakWindow() {
    this._useOffPeakWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOffPeakWindowInput() {
    return this._useOffPeakWindow;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#availability_zone_count DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#availability_zone_count}
  */
  readonly availabilityZoneCount?: number;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfigToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone_count: cdktf.numberToTerraform(struct!.availabilityZoneCount),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfigToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone_count: {
      value: cdktf.numberToHclTerraform(struct!.availabilityZoneCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZoneCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZoneCount = this._availabilityZoneCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZoneCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZoneCount = value.availabilityZoneCount;
    }
  }

  // availability_zone_count - computed: false, optional: true, required: false
  private _availabilityZoneCount?: number; 
  public get availabilityZoneCount() {
    return this.getNumberAttribute('availability_zone_count');
  }
  public set availabilityZoneCount(value: number) {
    this._availabilityZoneCount = value;
  }
  public resetAvailabilityZoneCount() {
    this._availabilityZoneCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneCountInput() {
    return this._availabilityZoneCount;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig {
  /**
  * Container for the parameters required to enable cold storage for an OpenSearch Service domain. For more information, see Cold storage for Amazon OpenSearch Service (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cold-storage.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#cold_storage_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#cold_storage_options}
  */
  readonly coldStorageOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#dedicated_master_count DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#dedicated_master_count}
  */
  readonly dedicatedMasterCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#dedicated_master_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#dedicated_master_enabled}
  */
  readonly dedicatedMasterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#dedicated_master_type DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#dedicated_master_type}
  */
  readonly dedicatedMasterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#instance_count DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#instance_type DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#multi_az_with_standby_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#multi_az_with_standby_enabled}
  */
  readonly multiAzWithStandbyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#warm_count DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#warm_count}
  */
  readonly warmCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#warm_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#warm_enabled}
  */
  readonly warmEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#warm_type DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#warm_type}
  */
  readonly warmType?: string;
  /**
  * The zone awareness configuration for an Amazon OpenSearch Service domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#zone_awareness_config DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#zone_awareness_config}
  */
  readonly zoneAwarenessConfig?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#zone_awareness_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#zone_awareness_enabled}
  */
  readonly zoneAwarenessEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cold_storage_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptionsToTerraform(struct!.coldStorageOptions),
    dedicated_master_count: cdktf.numberToTerraform(struct!.dedicatedMasterCount),
    dedicated_master_enabled: cdktf.booleanToTerraform(struct!.dedicatedMasterEnabled),
    dedicated_master_type: cdktf.stringToTerraform(struct!.dedicatedMasterType),
    instance_count: cdktf.numberToTerraform(struct!.instanceCount),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    multi_az_with_standby_enabled: cdktf.booleanToTerraform(struct!.multiAzWithStandbyEnabled),
    warm_count: cdktf.numberToTerraform(struct!.warmCount),
    warm_enabled: cdktf.booleanToTerraform(struct!.warmEnabled),
    warm_type: cdktf.stringToTerraform(struct!.warmType),
    zone_awareness_config: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfigToTerraform(struct!.zoneAwarenessConfig),
    zone_awareness_enabled: cdktf.booleanToTerraform(struct!.zoneAwarenessEnabled),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cold_storage_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptionsToHclTerraform(struct!.coldStorageOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions",
    },
    dedicated_master_count: {
      value: cdktf.numberToHclTerraform(struct!.dedicatedMasterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_master_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedicatedMasterEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dedicated_master_type: {
      value: cdktf.stringToHclTerraform(struct!.dedicatedMasterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_count: {
      value: cdktf.numberToHclTerraform(struct!.instanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_az_with_standby_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multiAzWithStandbyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warm_count: {
      value: cdktf.numberToHclTerraform(struct!.warmCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warm_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.warmEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warm_type: {
      value: cdktf.stringToHclTerraform(struct!.warmType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_awareness_config: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfigToHclTerraform(struct!.zoneAwarenessConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig",
    },
    zone_awareness_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zoneAwarenessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coldStorageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coldStorageOptions = this._coldStorageOptions?.internalValue;
    }
    if (this._dedicatedMasterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterCount = this._dedicatedMasterCount;
    }
    if (this._dedicatedMasterEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterEnabled = this._dedicatedMasterEnabled;
    }
    if (this._dedicatedMasterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedMasterType = this._dedicatedMasterType;
    }
    if (this._instanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceCount = this._instanceCount;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._multiAzWithStandbyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiAzWithStandbyEnabled = this._multiAzWithStandbyEnabled;
    }
    if (this._warmCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmCount = this._warmCount;
    }
    if (this._warmEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmEnabled = this._warmEnabled;
    }
    if (this._warmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warmType = this._warmType;
    }
    if (this._zoneAwarenessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessConfig = this._zoneAwarenessConfig?.internalValue;
    }
    if (this._zoneAwarenessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAwarenessEnabled = this._zoneAwarenessEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coldStorageOptions.internalValue = undefined;
      this._dedicatedMasterCount = undefined;
      this._dedicatedMasterEnabled = undefined;
      this._dedicatedMasterType = undefined;
      this._instanceCount = undefined;
      this._instanceType = undefined;
      this._multiAzWithStandbyEnabled = undefined;
      this._warmCount = undefined;
      this._warmEnabled = undefined;
      this._warmType = undefined;
      this._zoneAwarenessConfig.internalValue = undefined;
      this._zoneAwarenessEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coldStorageOptions.internalValue = value.coldStorageOptions;
      this._dedicatedMasterCount = value.dedicatedMasterCount;
      this._dedicatedMasterEnabled = value.dedicatedMasterEnabled;
      this._dedicatedMasterType = value.dedicatedMasterType;
      this._instanceCount = value.instanceCount;
      this._instanceType = value.instanceType;
      this._multiAzWithStandbyEnabled = value.multiAzWithStandbyEnabled;
      this._warmCount = value.warmCount;
      this._warmEnabled = value.warmEnabled;
      this._warmType = value.warmType;
      this._zoneAwarenessConfig.internalValue = value.zoneAwarenessConfig;
      this._zoneAwarenessEnabled = value.zoneAwarenessEnabled;
    }
  }

  // cold_storage_options - computed: false, optional: true, required: false
  private _coldStorageOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptionsOutputReference(this, "cold_storage_options");
  public get coldStorageOptions() {
    return this._coldStorageOptions;
  }
  public putColdStorageOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigColdStorageOptions) {
    this._coldStorageOptions.internalValue = value;
  }
  public resetColdStorageOptions() {
    this._coldStorageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageOptionsInput() {
    return this._coldStorageOptions.internalValue;
  }

  // dedicated_master_count - computed: false, optional: true, required: false
  private _dedicatedMasterCount?: number; 
  public get dedicatedMasterCount() {
    return this.getNumberAttribute('dedicated_master_count');
  }
  public set dedicatedMasterCount(value: number) {
    this._dedicatedMasterCount = value;
  }
  public resetDedicatedMasterCount() {
    this._dedicatedMasterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterCountInput() {
    return this._dedicatedMasterCount;
  }

  // dedicated_master_enabled - computed: false, optional: true, required: false
  private _dedicatedMasterEnabled?: boolean | cdktf.IResolvable; 
  public get dedicatedMasterEnabled() {
    return this.getBooleanAttribute('dedicated_master_enabled');
  }
  public set dedicatedMasterEnabled(value: boolean | cdktf.IResolvable) {
    this._dedicatedMasterEnabled = value;
  }
  public resetDedicatedMasterEnabled() {
    this._dedicatedMasterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterEnabledInput() {
    return this._dedicatedMasterEnabled;
  }

  // dedicated_master_type - computed: false, optional: true, required: false
  private _dedicatedMasterType?: string; 
  public get dedicatedMasterType() {
    return this.getStringAttribute('dedicated_master_type');
  }
  public set dedicatedMasterType(value: string) {
    this._dedicatedMasterType = value;
  }
  public resetDedicatedMasterType() {
    this._dedicatedMasterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedMasterTypeInput() {
    return this._dedicatedMasterType;
  }

  // instance_count - computed: false, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // multi_az_with_standby_enabled - computed: false, optional: true, required: false
  private _multiAzWithStandbyEnabled?: boolean | cdktf.IResolvable; 
  public get multiAzWithStandbyEnabled() {
    return this.getBooleanAttribute('multi_az_with_standby_enabled');
  }
  public set multiAzWithStandbyEnabled(value: boolean | cdktf.IResolvable) {
    this._multiAzWithStandbyEnabled = value;
  }
  public resetMultiAzWithStandbyEnabled() {
    this._multiAzWithStandbyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzWithStandbyEnabledInput() {
    return this._multiAzWithStandbyEnabled;
  }

  // warm_count - computed: false, optional: true, required: false
  private _warmCount?: number; 
  public get warmCount() {
    return this.getNumberAttribute('warm_count');
  }
  public set warmCount(value: number) {
    this._warmCount = value;
  }
  public resetWarmCount() {
    this._warmCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmCountInput() {
    return this._warmCount;
  }

  // warm_enabled - computed: false, optional: true, required: false
  private _warmEnabled?: boolean | cdktf.IResolvable; 
  public get warmEnabled() {
    return this.getBooleanAttribute('warm_enabled');
  }
  public set warmEnabled(value: boolean | cdktf.IResolvable) {
    this._warmEnabled = value;
  }
  public resetWarmEnabled() {
    this._warmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmEnabledInput() {
    return this._warmEnabled;
  }

  // warm_type - computed: false, optional: true, required: false
  private _warmType?: string; 
  public get warmType() {
    return this.getStringAttribute('warm_type');
  }
  public set warmType(value: string) {
    this._warmType = value;
  }
  public resetWarmType() {
    this._warmType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warmTypeInput() {
    return this._warmType;
  }

  // zone_awareness_config - computed: false, optional: true, required: false
  private _zoneAwarenessConfig = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfigOutputReference(this, "zone_awareness_config");
  public get zoneAwarenessConfig() {
    return this._zoneAwarenessConfig;
  }
  public putZoneAwarenessConfig(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigZoneAwarenessConfig) {
    this._zoneAwarenessConfig.internalValue = value;
  }
  public resetZoneAwarenessConfig() {
    this._zoneAwarenessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessConfigInput() {
    return this._zoneAwarenessConfig.internalValue;
  }

  // zone_awareness_enabled - computed: false, optional: true, required: false
  private _zoneAwarenessEnabled?: boolean | cdktf.IResolvable; 
  public get zoneAwarenessEnabled() {
    return this.getBooleanAttribute('zone_awareness_enabled');
  }
  public set zoneAwarenessEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneAwarenessEnabled = value;
  }
  public resetZoneAwarenessEnabled() {
    this._zoneAwarenessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAwarenessEnabledInput() {
    return this._zoneAwarenessEnabled;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#identity_pool_id DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#identity_pool_id}
  */
  readonly identityPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#role_arn DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#user_pool_id DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#user_pool_id}
  */
  readonly userPoolId?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    identity_pool_id: cdktf.stringToTerraform(struct!.identityPoolId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.identityPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._identityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityPoolId = this._identityPoolId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._identityPoolId = undefined;
      this._roleArn = undefined;
      this._userPoolId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._identityPoolId = value.identityPoolId;
      this._roleArn = value.roleArn;
      this._userPoolId = value.userPoolId;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // identity_pool_id - computed: false, optional: true, required: false
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  public resetIdentityPoolId() {
    this._identityPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // user_pool_id - computed: false, optional: true, required: false
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  public resetUserPoolId() {
    this._userPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#custom_endpoint DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#custom_endpoint}
  */
  readonly customEndpoint?: string;
  /**
  * The Amazon Resource Name (ARN) of the domain. See Identifiers for IAM Entities (https://docs.aws.amazon.com/IAM/latest/UserGuide/index.html) in Using Amazon Web Services Identity and Access Management for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#custom_endpoint_certificate_arn DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#custom_endpoint_certificate_arn}
  */
  readonly customEndpointCertificateArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#custom_endpoint_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#custom_endpoint_enabled}
  */
  readonly customEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enforce_https DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#tls_security_policy DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_endpoint: cdktf.stringToTerraform(struct!.customEndpoint),
    custom_endpoint_certificate_arn: cdktf.stringToTerraform(struct!.customEndpointCertificateArn),
    custom_endpoint_enabled: cdktf.booleanToTerraform(struct!.customEndpointEnabled),
    enforce_https: cdktf.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktf.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.customEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_endpoint_certificate_arn: {
      value: cdktf.stringToHclTerraform(struct!.customEndpointCertificateArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_https: {
      value: cdktf.booleanToHclTerraform(struct!.enforceHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpoint = this._customEndpoint;
    }
    if (this._customEndpointCertificateArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointCertificateArn = this._customEndpointCertificateArn;
    }
    if (this._customEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customEndpointEnabled = this._customEndpointEnabled;
    }
    if (this._enforceHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceHttps = this._enforceHttps;
    }
    if (this._tlsSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customEndpoint = undefined;
      this._customEndpointCertificateArn = undefined;
      this._customEndpointEnabled = undefined;
      this._enforceHttps = undefined;
      this._tlsSecurityPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customEndpoint = value.customEndpoint;
      this._customEndpointCertificateArn = value.customEndpointCertificateArn;
      this._customEndpointEnabled = value.customEndpointEnabled;
      this._enforceHttps = value.enforceHttps;
      this._tlsSecurityPolicy = value.tlsSecurityPolicy;
    }
  }

  // custom_endpoint - computed: false, optional: true, required: false
  private _customEndpoint?: string; 
  public get customEndpoint() {
    return this.getStringAttribute('custom_endpoint');
  }
  public set customEndpoint(value: string) {
    this._customEndpoint = value;
  }
  public resetCustomEndpoint() {
    this._customEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointInput() {
    return this._customEndpoint;
  }

  // custom_endpoint_certificate_arn - computed: false, optional: true, required: false
  private _customEndpointCertificateArn?: string; 
  public get customEndpointCertificateArn() {
    return this.getStringAttribute('custom_endpoint_certificate_arn');
  }
  public set customEndpointCertificateArn(value: string) {
    this._customEndpointCertificateArn = value;
  }
  public resetCustomEndpointCertificateArn() {
    this._customEndpointCertificateArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointCertificateArnInput() {
    return this._customEndpointCertificateArn;
  }

  // custom_endpoint_enabled - computed: false, optional: true, required: false
  private _customEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get customEndpointEnabled() {
    return this.getBooleanAttribute('custom_endpoint_enabled');
  }
  public set customEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._customEndpointEnabled = value;
  }
  public resetCustomEndpointEnabled() {
    this._customEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customEndpointEnabledInput() {
    return this._customEndpointEnabled;
  }

  // enforce_https - computed: false, optional: true, required: false
  private _enforceHttps?: boolean | cdktf.IResolvable; 
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https');
  }
  public set enforceHttps(value: boolean | cdktf.IResolvable) {
    this._enforceHttps = value;
  }
  public resetEnforceHttps() {
    this._enforceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHttpsInput() {
    return this._enforceHttps;
  }

  // tls_security_policy - computed: false, optional: true, required: false
  private _tlsSecurityPolicy?: string; 
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
  public set tlsSecurityPolicy(value: string) {
    this._tlsSecurityPolicy = value;
  }
  public resetTlsSecurityPolicy() {
    this._tlsSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecurityPolicyInput() {
    return this._tlsSecurityPolicy;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#ebs_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#ebs_enabled}
  */
  readonly ebsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#iops DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#throughput DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#throughput}
  */
  readonly throughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#volume_size DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * The type of EBS volume that a domain uses. For more information, see Configuring EBS-based storage (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/opensearch-createupdatedomains.html#opensearch-createdomain-configure-ebs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#volume_type DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#volume_type}
  */
  readonly volumeType?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebs_enabled: cdktf.booleanToTerraform(struct!.ebsEnabled),
    iops: cdktf.numberToTerraform(struct!.iops),
    throughput: cdktf.numberToTerraform(struct!.throughput),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ebsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsEnabled = this._ebsEnabled;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebsEnabled = undefined;
      this._iops = undefined;
      this._throughput = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebsEnabled = value.ebsEnabled;
      this._iops = value.iops;
      this._throughput = value.throughput;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // ebs_enabled - computed: false, optional: true, required: false
  private _ebsEnabled?: boolean | cdktf.IResolvable; 
  public get ebsEnabled() {
    return this.getBooleanAttribute('ebs_enabled');
  }
  public set ebsEnabled(value: boolean | cdktf.IResolvable) {
    this._ebsEnabled = value;
  }
  public resetEbsEnabled() {
    this._ebsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsEnabledInput() {
    return this._ebsEnabled;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#kms_key_id DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._kmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._kmsKeyId = value.kmsKeyId;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions {
  /**
  * ARN of the Cloudwatch log group to publish logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#cloud_watch_logs_log_group_arn DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#cloud_watch_logs_log_group_arn}
  */
  readonly cloudWatchLogsLogGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_watch_logs_log_group_arn: cdktf.stringToTerraform(struct!.cloudWatchLogsLogGroupArn),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_watch_logs_log_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudWatchLogsLogGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudWatchLogsLogGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudWatchLogsLogGroupArn = this._cloudWatchLogsLogGroupArn;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudWatchLogsLogGroupArn = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudWatchLogsLogGroupArn = value.cloudWatchLogsLogGroupArn;
      this._enabled = value.enabled;
    }
  }

  // cloud_watch_logs_log_group_arn - computed: false, optional: true, required: false
  private _cloudWatchLogsLogGroupArn?: string; 
  public get cloudWatchLogsLogGroupArn() {
    return this.getStringAttribute('cloud_watch_logs_log_group_arn');
  }
  public set cloudWatchLogsLogGroupArn(value: string) {
    this._cloudWatchLogsLogGroupArn = value;
  }
  public resetCloudWatchLogsLogGroupArn() {
    this._cloudWatchLogsLogGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudWatchLogsLogGroupArnInput() {
    return this._cloudWatchLogsLogGroupArn;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#hours DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#hours}
  */
  readonly hours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#minutes DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#minutes}
  */
  readonly minutes?: number;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hours = undefined;
      this._minutes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hours = value.hours;
      this._minutes = value.minutes;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow {
  /**
  * The desired start time for an off-peak maintenance window (https://docs.aws.amazon.com/opensearch-service/latest/APIReference/API_OffPeakWindow.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#window_start_time DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#window_start_time}
  */
  readonly windowStartTime?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_start_time: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTimeToTerraform(struct!.windowStartTime),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_start_time: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTimeToHclTerraform(struct!.windowStartTime),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowStartTime = this._windowStartTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._windowStartTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._windowStartTime.internalValue = value.windowStartTime;
    }
  }

  // window_start_time - computed: false, optional: true, required: false
  private _windowStartTime = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTimeOutputReference(this, "window_start_time");
  public get windowStartTime() {
    return this._windowStartTime;
  }
  public putWindowStartTime(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowWindowStartTime) {
    this._windowStartTime.internalValue = value;
  }
  public resetWindowStartTime() {
    this._windowStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowStartTimeInput() {
    return this._windowStartTime.internalValue;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A custom 10-hour, low-traffic window during which OpenSearch Service can perform mandatory configuration changes on the domain. These actions can include scheduled service software updates and blue/green Auto-Tune enhancements. OpenSearch Service will schedule these actions during the window that you specify. If you don't specify a window start time, it defaults to 10:00 P.M. local time. For more information, see Defining off-peak maintenance windows for Amazon OpenSearch Service (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#off_peak_window DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#off_peak_window}
  */
  readonly offPeakWindow?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    off_peak_window: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowToTerraform(struct!.offPeakWindow),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    off_peak_window: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowToHclTerraform(struct!.offPeakWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._offPeakWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakWindow = this._offPeakWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._offPeakWindow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._offPeakWindow.internalValue = value.offPeakWindow;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // off_peak_window - computed: false, optional: true, required: false
  private _offPeakWindow = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindowOutputReference(this, "off_peak_window");
  public get offPeakWindow() {
    return this._offPeakWindow;
  }
  public putOffPeakWindow(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOffPeakWindow) {
    this._offPeakWindow.internalValue = value;
  }
  public resetOffPeakWindow() {
    this._offPeakWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakWindowInput() {
    return this._offPeakWindow.internalValue;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#auto_software_update_enabled DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#auto_software_update_enabled}
  */
  readonly autoSoftwareUpdateEnabled?: boolean | cdktf.IResolvable;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_software_update_enabled: cdktf.booleanToTerraform(struct!.autoSoftwareUpdateEnabled),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_software_update_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoSoftwareUpdateEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSoftwareUpdateEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSoftwareUpdateEnabled = this._autoSoftwareUpdateEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSoftwareUpdateEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSoftwareUpdateEnabled = value.autoSoftwareUpdateEnabled;
    }
  }

  // auto_software_update_enabled - computed: false, optional: true, required: false
  private _autoSoftwareUpdateEnabled?: boolean | cdktf.IResolvable; 
  public get autoSoftwareUpdateEnabled() {
    return this.getBooleanAttribute('auto_software_update_enabled');
  }
  public set autoSoftwareUpdateEnabled(value: boolean | cdktf.IResolvable) {
    this._autoSoftwareUpdateEnabled = value;
  }
  public resetAutoSoftwareUpdateEnabled() {
    this._autoSoftwareUpdateEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSoftwareUpdateEnabledInput() {
    return this._autoSoftwareUpdateEnabled;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags {
  /**
  * A string between 1 to 128 characters that specifies the key for a tag. Tag keys must be unique for the domain to which they're attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#key DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * A string between 0 to 256 characters that specifies the value for a tag. Tag values can be null and don't have to be unique in a tag set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#value DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#security_group_i_ds DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#security_group_i_ds}
  */
  readonly securityGroupIDs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#subnet_i_ds DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#subnet_i_ds}
  */
  readonly subnetIDs?: string[];
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptionsToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIDs),
    subnet_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIDs),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptionsToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIDs = this._securityGroupIDs;
    }
    if (this._subnetIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIDs = this._subnetIDs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIDs = undefined;
      this._subnetIDs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIDs = value.securityGroupIDs;
      this._subnetIDs = value.subnetIDs;
    }
  }

  // security_group_i_ds - computed: false, optional: true, required: false
  private _securityGroupIDs?: string[]; 
  public get securityGroupIDs() {
    return this.getListAttribute('security_group_i_ds');
  }
  public set securityGroupIDs(value: string[]) {
    this._securityGroupIDs = value;
  }
  public resetSecurityGroupIDs() {
    this._securityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIDsInput() {
    return this._securityGroupIDs;
  }

  // subnet_i_ds - computed: false, optional: true, required: false
  private _subnetIDs?: string[]; 
  public get subnetIDs() {
    return this.getListAttribute('subnet_i_ds');
  }
  public set subnetIDs(value: string[]) {
    this._subnetIDs = value;
  }
  public resetSubnetIDs() {
    this._subnetIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIDsInput() {
    return this._subnetIDs;
  }
}
export interface DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec {
  /**
  * Identity and Access Management (IAM) policy document specifying the access policies for the new domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#access_policies DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#access_policies}
  */
  readonly accessPolicies?: string;
  /**
  * Key-value pairs to specify advanced configuration options. The following key-value pairs are supported: * 'rest.action.multi.allow_explicit_index': 'true' | 'false' - Note the use of a string rather than a boolean. Specifies whether explicit references to indexes are allowed inside the body of HTTP requests. If you want to configure access policies for domain sub-resources, such as specific indexes and domain APIs, you must disable this property. Default is true. * 'indices.fielddata.cache.size': '80' - Note the use of a string rather than a boolean. Specifies the percentage of heap space allocated to field data. Default is unbounded. * 'indices.query.bool.max_clause_count': '1024' - Note the use of a string rather than a boolean. Specifies the maximum number of clauses allowed in a Lucene boolean query. Default is 1,024. Queries with more than the permitted number of clauses result in a TooManyClauses error. * 'override_main_response_version': 'true' | 'false' - Note the use of a string rather than a boolean. Specifies whether the domain reports its version as 7.10 to allow Elasticsearch OSS clients and plugins to continue working with it. Default is false when creating a domain and true when upgrading a domain. For more information, see Advanced cluster parameters (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomain-configure-advanced-options).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#advanced_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#advanced_options}
  */
  readonly advancedOptions?: { [key: string]: string };
  /**
  * Options for fine-grained access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#advanced_security_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#advanced_security_options}
  */
  readonly advancedSecurityOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions;
  /**
  * Options for all machine learning features for the specified domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#aiml_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#aiml_options}
  */
  readonly aimlOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions;
  /**
  * Options for Auto-Tune.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#auto_tune_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#auto_tune_options}
  */
  readonly autoTuneOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions;
  /**
  * Container for the cluster configuration of a domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#cluster_config DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#cluster_config}
  */
  readonly clusterConfig?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig;
  /**
  * Key-value pairs to configure Amazon Cognito authentication. For more information, see Configuring Amazon Cognito authentication for OpenSearch Dashboards (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/cognito-auth.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#cognito_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#cognito_options}
  */
  readonly cognitoOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions;
  /**
  * Additional options for the domain endpoint, such as whether to require HTTPS for all traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#domain_endpoint_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#domain_endpoint_options}
  */
  readonly domainEndpointOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions;
  /**
  * Container for the parameters required to enable EBS-based storage for an OpenSearch Service domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#ebs_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#ebs_options}
  */
  readonly ebsOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions;
  /**
  * Key-value pairs to enable encryption at rest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#encryption_at_rest_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#encryption_at_rest_options}
  */
  readonly encryptionAtRestOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions;
  /**
  * String of format Elasticsearch_X.Y or OpenSearch_X.Y to specify the engine version for the OpenSearch Service domain. For example, OpenSearch_1.0 or Elasticsearch_7.9. For more information, see Creating and managing Amazon OpenSearch Service domains (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#engine_version DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Specify either dual stack or IPv4 as your IP address type. Dual stack allows you to share domain resources across IPv4 and IPv6 address types, and is the recommended option. If you set your IP address type to dual stack, you can't change your address type later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#ip_address_type DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Key-value pairs to configure log publishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#log_publishing_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#log_publishing_options}
  */
  readonly logPublishingOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions;
  /**
  * Name of the OpenSearch Service domain to create. Domain names are unique across the domains owned by an account within an Amazon Web Services Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#name DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Enables node-to-node encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#node_to_node_encryption_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#node_to_node_encryption_options}
  */
  readonly nodeToNodeEncryptionOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions;
  /**
  * Specifies a daily 10-hour time block during which OpenSearch Service can perform configuration changes on the domain, including service software updates and Auto-Tune enhancements that require a blue/green deployment. If no options are specified, the default start time of 10:00 P.M. local time (for the Region that the domain is created in) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#off_peak_window_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#off_peak_window_options}
  */
  readonly offPeakWindowOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions;
  /**
  * Software update options for the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#software_update_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#software_update_options}
  */
  readonly softwareUpdateOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions;
  /**
  * List of tags to add to the domain upon creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#tags DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * Container for the values required to configure VPC access domains. If you don't specify these values, OpenSearch Service creates the domain with a public endpoint. For more information, see Launching your Amazon OpenSearch Service domains using a VPC (https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#vpc_options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest#vpc_options}
  */
  readonly vpcOptions?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions;
}

export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_policies: cdktf.stringToTerraform(struct!.accessPolicies),
    advanced_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.advancedOptions),
    advanced_security_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsToTerraform(struct!.advancedSecurityOptions),
    aiml_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsToTerraform(struct!.aimlOptions),
    auto_tune_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsToTerraform(struct!.autoTuneOptions),
    cluster_config: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigToTerraform(struct!.clusterConfig),
    cognito_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptionsToTerraform(struct!.cognitoOptions),
    domain_endpoint_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptionsToTerraform(struct!.domainEndpointOptions),
    ebs_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptionsToTerraform(struct!.ebsOptions),
    encryption_at_rest_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptionsToTerraform(struct!.encryptionAtRestOptions),
    engine_version: cdktf.stringToTerraform(struct!.engineVersion),
    ip_address_type: cdktf.stringToTerraform(struct!.ipAddressType),
    log_publishing_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptionsToTerraform(struct!.logPublishingOptions),
    name: cdktf.stringToTerraform(struct!.name),
    node_to_node_encryption_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptionsToTerraform(struct!.nodeToNodeEncryptionOptions),
    off_peak_window_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsToTerraform(struct!.offPeakWindowOptions),
    software_update_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptionsToTerraform(struct!.softwareUpdateOptions),
    tags: cdktf.listMapper(dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    vpc_options: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptionsToTerraform(struct!.vpcOptions),
  }
}


export function dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_policies: {
      value: cdktf.stringToHclTerraform(struct!.accessPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.advancedOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    advanced_security_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsToHclTerraform(struct!.advancedSecurityOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions",
    },
    aiml_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsToHclTerraform(struct!.aimlOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions",
    },
    auto_tune_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsToHclTerraform(struct!.autoTuneOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions",
    },
    cluster_config: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigToHclTerraform(struct!.clusterConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig",
    },
    cognito_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptionsToHclTerraform(struct!.cognitoOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions",
    },
    domain_endpoint_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptionsToHclTerraform(struct!.domainEndpointOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions",
    },
    ebs_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptionsToHclTerraform(struct!.ebsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions",
    },
    encryption_at_rest_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptionsToHclTerraform(struct!.encryptionAtRestOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions",
    },
    engine_version: {
      value: cdktf.stringToHclTerraform(struct!.engineVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_type: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_publishing_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptionsToHclTerraform(struct!.logPublishingOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_to_node_encryption_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptionsToHclTerraform(struct!.nodeToNodeEncryptionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions",
    },
    off_peak_window_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsToHclTerraform(struct!.offPeakWindowOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions",
    },
    software_update_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptionsToHclTerraform(struct!.softwareUpdateOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsList",
    },
    vpc_options: {
      value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptionsToHclTerraform(struct!.vpcOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessPolicies = this._accessPolicies;
    }
    if (this._advancedOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions;
    }
    if (this._advancedSecurityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedSecurityOptions = this._advancedSecurityOptions?.internalValue;
    }
    if (this._aimlOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aimlOptions = this._aimlOptions?.internalValue;
    }
    if (this._autoTuneOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTuneOptions = this._autoTuneOptions?.internalValue;
    }
    if (this._clusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConfig = this._clusterConfig?.internalValue;
    }
    if (this._cognitoOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cognitoOptions = this._cognitoOptions?.internalValue;
    }
    if (this._domainEndpointOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainEndpointOptions = this._domainEndpointOptions?.internalValue;
    }
    if (this._ebsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebsOptions = this._ebsOptions?.internalValue;
    }
    if (this._encryptionAtRestOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAtRestOptions = this._encryptionAtRestOptions?.internalValue;
    }
    if (this._engineVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineVersion = this._engineVersion;
    }
    if (this._ipAddressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressType = this._ipAddressType;
    }
    if (this._logPublishingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPublishingOptions = this._logPublishingOptions?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeToNodeEncryptionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeToNodeEncryptionOptions = this._nodeToNodeEncryptionOptions?.internalValue;
    }
    if (this._offPeakWindowOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offPeakWindowOptions = this._offPeakWindowOptions?.internalValue;
    }
    if (this._softwareUpdateOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareUpdateOptions = this._softwareUpdateOptions?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vpcOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcOptions = this._vpcOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessPolicies = undefined;
      this._advancedOptions = undefined;
      this._advancedSecurityOptions.internalValue = undefined;
      this._aimlOptions.internalValue = undefined;
      this._autoTuneOptions.internalValue = undefined;
      this._clusterConfig.internalValue = undefined;
      this._cognitoOptions.internalValue = undefined;
      this._domainEndpointOptions.internalValue = undefined;
      this._ebsOptions.internalValue = undefined;
      this._encryptionAtRestOptions.internalValue = undefined;
      this._engineVersion = undefined;
      this._ipAddressType = undefined;
      this._logPublishingOptions.internalValue = undefined;
      this._name = undefined;
      this._nodeToNodeEncryptionOptions.internalValue = undefined;
      this._offPeakWindowOptions.internalValue = undefined;
      this._softwareUpdateOptions.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vpcOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessPolicies = value.accessPolicies;
      this._advancedOptions = value.advancedOptions;
      this._advancedSecurityOptions.internalValue = value.advancedSecurityOptions;
      this._aimlOptions.internalValue = value.aimlOptions;
      this._autoTuneOptions.internalValue = value.autoTuneOptions;
      this._clusterConfig.internalValue = value.clusterConfig;
      this._cognitoOptions.internalValue = value.cognitoOptions;
      this._domainEndpointOptions.internalValue = value.domainEndpointOptions;
      this._ebsOptions.internalValue = value.ebsOptions;
      this._encryptionAtRestOptions.internalValue = value.encryptionAtRestOptions;
      this._engineVersion = value.engineVersion;
      this._ipAddressType = value.ipAddressType;
      this._logPublishingOptions.internalValue = value.logPublishingOptions;
      this._name = value.name;
      this._nodeToNodeEncryptionOptions.internalValue = value.nodeToNodeEncryptionOptions;
      this._offPeakWindowOptions.internalValue = value.offPeakWindowOptions;
      this._softwareUpdateOptions.internalValue = value.softwareUpdateOptions;
      this._tags.internalValue = value.tags;
      this._vpcOptions.internalValue = value.vpcOptions;
    }
  }

  // access_policies - computed: false, optional: true, required: false
  private _accessPolicies?: string; 
  public get accessPolicies() {
    return this.getStringAttribute('access_policies');
  }
  public set accessPolicies(value: string) {
    this._accessPolicies = value;
  }
  public resetAccessPolicies() {
    this._accessPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPoliciesInput() {
    return this._accessPolicies;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions?: { [key: string]: string }; 
  public get advancedOptions() {
    return this.getStringMapAttribute('advanced_options');
  }
  public set advancedOptions(value: { [key: string]: string }) {
    this._advancedOptions = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions;
  }

  // advanced_security_options - computed: false, optional: true, required: false
  private _advancedSecurityOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptionsOutputReference(this, "advanced_security_options");
  public get advancedSecurityOptions() {
    return this._advancedSecurityOptions;
  }
  public putAdvancedSecurityOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAdvancedSecurityOptions) {
    this._advancedSecurityOptions.internalValue = value;
  }
  public resetAdvancedSecurityOptions() {
    this._advancedSecurityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSecurityOptionsInput() {
    return this._advancedSecurityOptions.internalValue;
  }

  // aiml_options - computed: false, optional: true, required: false
  private _aimlOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptionsOutputReference(this, "aiml_options");
  public get aimlOptions() {
    return this._aimlOptions;
  }
  public putAimlOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAimlOptions) {
    this._aimlOptions.internalValue = value;
  }
  public resetAimlOptions() {
    this._aimlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aimlOptionsInput() {
    return this._aimlOptions.internalValue;
  }

  // auto_tune_options - computed: false, optional: true, required: false
  private _autoTuneOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptionsOutputReference(this, "auto_tune_options");
  public get autoTuneOptions() {
    return this._autoTuneOptions;
  }
  public putAutoTuneOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecAutoTuneOptions) {
    this._autoTuneOptions.internalValue = value;
  }
  public resetAutoTuneOptions() {
    this._autoTuneOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTuneOptionsInput() {
    return this._autoTuneOptions.internalValue;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfigOutputReference(this, "cluster_config");
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public putClusterConfig(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecClusterConfig) {
    this._clusterConfig.internalValue = value;
  }
  public resetClusterConfig() {
    this._clusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig.internalValue;
  }

  // cognito_options - computed: false, optional: true, required: false
  private _cognitoOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptionsOutputReference(this, "cognito_options");
  public get cognitoOptions() {
    return this._cognitoOptions;
  }
  public putCognitoOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecCognitoOptions) {
    this._cognitoOptions.internalValue = value;
  }
  public resetCognitoOptions() {
    this._cognitoOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cognitoOptionsInput() {
    return this._cognitoOptions.internalValue;
  }

  // domain_endpoint_options - computed: false, optional: true, required: false
  private _domainEndpointOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptionsOutputReference(this, "domain_endpoint_options");
  public get domainEndpointOptions() {
    return this._domainEndpointOptions;
  }
  public putDomainEndpointOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecDomainEndpointOptions) {
    this._domainEndpointOptions.internalValue = value;
  }
  public resetDomainEndpointOptions() {
    this._domainEndpointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainEndpointOptionsInput() {
    return this._domainEndpointOptions.internalValue;
  }

  // ebs_options - computed: false, optional: true, required: false
  private _ebsOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptionsOutputReference(this, "ebs_options");
  public get ebsOptions() {
    return this._ebsOptions;
  }
  public putEbsOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEbsOptions) {
    this._ebsOptions.internalValue = value;
  }
  public resetEbsOptions() {
    this._ebsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebsOptionsInput() {
    return this._ebsOptions.internalValue;
  }

  // encryption_at_rest_options - computed: false, optional: true, required: false
  private _encryptionAtRestOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptionsOutputReference(this, "encryption_at_rest_options");
  public get encryptionAtRestOptions() {
    return this._encryptionAtRestOptions;
  }
  public putEncryptionAtRestOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecEncryptionAtRestOptions) {
    this._encryptionAtRestOptions.internalValue = value;
  }
  public resetEncryptionAtRestOptions() {
    this._encryptionAtRestOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAtRestOptionsInput() {
    return this._encryptionAtRestOptions.internalValue;
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
  }

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // log_publishing_options - computed: false, optional: true, required: false
  private _logPublishingOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptionsOutputReference(this, "log_publishing_options");
  public get logPublishingOptions() {
    return this._logPublishingOptions;
  }
  public putLogPublishingOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecLogPublishingOptions) {
    this._logPublishingOptions.internalValue = value;
  }
  public resetLogPublishingOptions() {
    this._logPublishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPublishingOptionsInput() {
    return this._logPublishingOptions.internalValue;
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

  // node_to_node_encryption_options - computed: false, optional: true, required: false
  private _nodeToNodeEncryptionOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptionsOutputReference(this, "node_to_node_encryption_options");
  public get nodeToNodeEncryptionOptions() {
    return this._nodeToNodeEncryptionOptions;
  }
  public putNodeToNodeEncryptionOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecNodeToNodeEncryptionOptions) {
    this._nodeToNodeEncryptionOptions.internalValue = value;
  }
  public resetNodeToNodeEncryptionOptions() {
    this._nodeToNodeEncryptionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeToNodeEncryptionOptionsInput() {
    return this._nodeToNodeEncryptionOptions.internalValue;
  }

  // off_peak_window_options - computed: false, optional: true, required: false
  private _offPeakWindowOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptionsOutputReference(this, "off_peak_window_options");
  public get offPeakWindowOptions() {
    return this._offPeakWindowOptions;
  }
  public putOffPeakWindowOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOffPeakWindowOptions) {
    this._offPeakWindowOptions.internalValue = value;
  }
  public resetOffPeakWindowOptions() {
    this._offPeakWindowOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offPeakWindowOptionsInput() {
    return this._offPeakWindowOptions.internalValue;
  }

  // software_update_options - computed: false, optional: true, required: false
  private _softwareUpdateOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptionsOutputReference(this, "software_update_options");
  public get softwareUpdateOptions() {
    return this._softwareUpdateOptions;
  }
  public putSoftwareUpdateOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecSoftwareUpdateOptions) {
    this._softwareUpdateOptions.internalValue = value;
  }
  public resetSoftwareUpdateOptions() {
    this._softwareUpdateOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareUpdateOptionsInput() {
    return this._softwareUpdateOptions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vpc_options - computed: false, optional: true, required: false
  private _vpcOptions = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptionsOutputReference(this, "vpc_options");
  public get vpcOptions() {
    return this._vpcOptions;
  }
  public putVpcOptions(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecVpcOptions) {
    this._vpcOptions.internalValue = value;
  }
  public resetVpcOptions() {
    this._vpcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcOptionsInput() {
    return this._vpcOptions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest k8s_opensearchservice_services_k8s_aws_domain_v1alpha1_manifest}
*/
export class DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_opensearchservice_services_k8s_aws_domain_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_opensearchservice_services_k8s_aws_domain_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/opensearchservice_services_k8s_aws_domain_v1alpha1_manifest k8s_opensearchservice_services_k8s_aws_domain_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_opensearchservice_services_k8s_aws_domain_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOpensearchserviceServicesK8SAwsDomainV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
