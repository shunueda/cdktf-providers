// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#metadata DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#spec DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec;
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#annotations DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#labels DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#name DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#node DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#pod DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#services DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScopeToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScopeToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials {
  /**
  * [Scope](https://docs.stackable.tech/secret-operator/scope.html) of the [SecretClass](https://docs.stackable.tech/secret-operator/secretclass.html)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#scope DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/secret-operator/secretclass.html) containing the LDAP bind credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#secret_class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification {
  /**
  * [SecretClass](https://docs.stackable.tech/secret-operator/secretclass.html) which will provide ca.crt, tls.crt and tls.key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#secret_class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerificationToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerificationToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
    }
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert {
  /**
  * Name of the ConfigMap containing the ca cert. Key must be 'ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#configmap DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#configmap}
  */
  readonly configmap?: string;
  /**
  * Path to the ca cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#path DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Name of the Secret containing the ca cert. Key must be 'ca.crt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#secret DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#secret}
  */
  readonly secret?: string;
  /**
  * Name of the SecretClass which will provide the ca cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#secret_class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCertToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configmap: cdktf.stringToTerraform(struct!.configmap),
    path: cdktf.stringToTerraform(struct!.path),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCertToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configmap: {
      value: cdktf.stringToHclTerraform(struct!.configmap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmap = this._configmap;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configmap = undefined;
      this._path = undefined;
      this._secret = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configmap = value.configmap;
      this._path = value.path;
      this._secret = value.secret;
      this._secretClass = value.secretClass;
    }
  }

  // configmap - computed: false, optional: true, required: false
  private _configmap?: string; 
  public get configmap() {
    return this.getStringAttribute('configmap');
  }
  public set configmap(value: string) {
    this._configmap = value;
  }
  public resetConfigmap() {
    this._configmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmapInput() {
    return this._configmap;
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

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification {
  /**
  * Ca cert to verify the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#server_ca_cert DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#server_ca_cert}
  */
  readonly serverCaCert: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ca_cert: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCertToTerraform(struct!.serverCaCert),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ca_cert: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCertToHclTerraform(struct!.serverCaCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverCaCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCaCert = this._serverCaCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverCaCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverCaCert.internalValue = value.serverCaCert;
    }
  }

  // server_ca_cert - computed: false, optional: false, required: true
  private _serverCaCert = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCertOutputReference(this, "server_ca_cert");
  public get serverCaCert() {
    return this._serverCaCert;
  }
  public putServerCaCert(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationServerCaCert) {
    this._serverCaCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaCertInput() {
    return this._serverCaCert.internalValue;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls {
  /**
  * Use TLS but don't verify certificates. We have to use an empty struct instead of an empty Enum because of limitations of [kube-rs](https://github.com/kube-rs/kube-rs/)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#insecure DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#insecure}
  */
  readonly insecure?: { [key: string]: string };
  /**
  * Use TLS and ca certificate to verify the server and the client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#mutual_verification DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#mutual_verification}
  */
  readonly mutualVerification?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification;
  /**
  * Use TLS and ca certificate to verify the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#server_verification DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#server_verification}
  */
  readonly serverVerification?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification;
  /**
  * Use TLS and the ca certificates provided by the system - in this case the Docker image - to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#system_provided DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#system_provided}
  */
  readonly systemProvided?: { [key: string]: string };
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.insecure),
    mutual_verification: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerificationToTerraform(struct!.mutualVerification),
    server_verification: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationToTerraform(struct!.serverVerification),
    system_provided: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemProvided),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.insecure),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mutual_verification: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerificationToHclTerraform(struct!.mutualVerification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification",
    },
    server_verification: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationToHclTerraform(struct!.serverVerification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification",
    },
    system_provided: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemProvided),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._mutualVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutualVerification = this._mutualVerification?.internalValue;
    }
    if (this._serverVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverVerification = this._serverVerification?.internalValue;
    }
    if (this._systemProvided !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemProvided = this._systemProvided;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecure = undefined;
      this._mutualVerification.internalValue = undefined;
      this._serverVerification.internalValue = undefined;
      this._systemProvided = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecure = value.insecure;
      this._mutualVerification.internalValue = value.mutualVerification;
      this._serverVerification.internalValue = value.serverVerification;
      this._systemProvided = value.systemProvided;
    }
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: { [key: string]: string }; 
  public get insecure() {
    return this.getStringMapAttribute('insecure');
  }
  public set insecure(value: { [key: string]: string }) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // mutual_verification - computed: false, optional: true, required: false
  private _mutualVerification = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerificationOutputReference(this, "mutual_verification");
  public get mutualVerification() {
    return this._mutualVerification;
  }
  public putMutualVerification(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsMutualVerification) {
    this._mutualVerification.internalValue = value;
  }
  public resetMutualVerification() {
    this._mutualVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutualVerificationInput() {
    return this._mutualVerification.internalValue;
  }

  // server_verification - computed: false, optional: true, required: false
  private _serverVerification = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerificationOutputReference(this, "server_verification");
  public get serverVerification() {
    return this._serverVerification;
  }
  public putServerVerification(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsServerVerification) {
    this._serverVerification.internalValue = value;
  }
  public resetServerVerification() {
    this._serverVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverVerificationInput() {
    return this._serverVerification.internalValue;
  }

  // system_provided - computed: false, optional: true, required: false
  private _systemProvided?: { [key: string]: string }; 
  public get systemProvided() {
    return this.getStringMapAttribute('system_provided');
  }
  public set systemProvided(value: { [key: string]: string }) {
    this._systemProvided = value;
  }
  public resetSystemProvided() {
    this._systemProvided = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemProvidedInput() {
    return this._systemProvided;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap {
  /**
  * In case you need a special account for searching the LDAP server you can specify it here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#bind_credentials DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#bind_credentials}
  */
  readonly bindCredentials?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials;
  /**
  * The name of the email field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#email_field DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#email_field}
  */
  readonly emailField?: string;
  /**
  * The name of the firstname field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#firstname_field DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#firstname_field}
  */
  readonly firstnameField?: string;
  /**
  * The name of the group field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#group_field DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#group_field}
  */
  readonly groupField?: string;
  /**
  * Hostname of the LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#hostname DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#hostname}
  */
  readonly hostname: string;
  /**
  * The name of the lastname field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#lastname_field DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#lastname_field}
  */
  readonly lastnameField?: string;
  /**
  * Port of the LDAP server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#port DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * LDAP search base
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#search_base DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#search_base}
  */
  readonly searchBase?: string;
  /**
  * LDAP query to filter users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#search_filter DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#search_filter}
  */
  readonly searchFilter?: string;
  /**
  * Use a TLS connection. If not specified no TLS will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#tls DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls;
  /**
  * The name of the username field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#uid_field DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#uid_field}
  */
  readonly uidField?: string;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_credentials: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsToTerraform(struct!.bindCredentials),
    email_field: cdktf.stringToTerraform(struct!.emailField),
    firstname_field: cdktf.stringToTerraform(struct!.firstnameField),
    group_field: cdktf.stringToTerraform(struct!.groupField),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    lastname_field: cdktf.stringToTerraform(struct!.lastnameField),
    port: cdktf.numberToTerraform(struct!.port),
    search_base: cdktf.stringToTerraform(struct!.searchBase),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    tls: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsToTerraform(struct!.tls),
    uid_field: cdktf.stringToTerraform(struct!.uidField),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_credentials: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsToHclTerraform(struct!.bindCredentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials",
    },
    email_field: {
      value: cdktf.stringToHclTerraform(struct!.emailField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firstname_field: {
      value: cdktf.stringToHclTerraform(struct!.firstnameField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_field: {
      value: cdktf.stringToHclTerraform(struct!.groupField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastname_field: {
      value: cdktf.stringToHclTerraform(struct!.lastnameField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_base: {
      value: cdktf.stringToHclTerraform(struct!.searchBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls",
    },
    uid_field: {
      value: cdktf.stringToHclTerraform(struct!.uidField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindCredentials = this._bindCredentials?.internalValue;
    }
    if (this._emailField !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailField = this._emailField;
    }
    if (this._firstnameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstnameField = this._firstnameField;
    }
    if (this._groupField !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupField = this._groupField;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._lastnameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastnameField = this._lastnameField;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._searchBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBase = this._searchBase;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._uidField !== undefined) {
      hasAnyValues = true;
      internalValueResult.uidField = this._uidField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindCredentials.internalValue = undefined;
      this._emailField = undefined;
      this._firstnameField = undefined;
      this._groupField = undefined;
      this._hostname = undefined;
      this._lastnameField = undefined;
      this._port = undefined;
      this._searchBase = undefined;
      this._searchFilter = undefined;
      this._tls.internalValue = undefined;
      this._uidField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindCredentials.internalValue = value.bindCredentials;
      this._emailField = value.emailField;
      this._firstnameField = value.firstnameField;
      this._groupField = value.groupField;
      this._hostname = value.hostname;
      this._lastnameField = value.lastnameField;
      this._port = value.port;
      this._searchBase = value.searchBase;
      this._searchFilter = value.searchFilter;
      this._tls.internalValue = value.tls;
      this._uidField = value.uidField;
    }
  }

  // bind_credentials - computed: false, optional: true, required: false
  private _bindCredentials = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentialsOutputReference(this, "bind_credentials");
  public get bindCredentials() {
    return this._bindCredentials;
  }
  public putBindCredentials(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapBindCredentials) {
    this._bindCredentials.internalValue = value;
  }
  public resetBindCredentials() {
    this._bindCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindCredentialsInput() {
    return this._bindCredentials.internalValue;
  }

  // email_field - computed: false, optional: true, required: false
  private _emailField?: string; 
  public get emailField() {
    return this.getStringAttribute('email_field');
  }
  public set emailField(value: string) {
    this._emailField = value;
  }
  public resetEmailField() {
    this._emailField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFieldInput() {
    return this._emailField;
  }

  // firstname_field - computed: false, optional: true, required: false
  private _firstnameField?: string; 
  public get firstnameField() {
    return this.getStringAttribute('firstname_field');
  }
  public set firstnameField(value: string) {
    this._firstnameField = value;
  }
  public resetFirstnameField() {
    this._firstnameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameFieldInput() {
    return this._firstnameField;
  }

  // group_field - computed: false, optional: true, required: false
  private _groupField?: string; 
  public get groupField() {
    return this.getStringAttribute('group_field');
  }
  public set groupField(value: string) {
    this._groupField = value;
  }
  public resetGroupField() {
    this._groupField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFieldInput() {
    return this._groupField;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // lastname_field - computed: false, optional: true, required: false
  private _lastnameField?: string; 
  public get lastnameField() {
    return this.getStringAttribute('lastname_field');
  }
  public set lastnameField(value: string) {
    this._lastnameField = value;
  }
  public resetLastnameField() {
    this._lastnameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameFieldInput() {
    return this._lastnameField;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // search_base - computed: false, optional: true, required: false
  private _searchBase?: string; 
  public get searchBase() {
    return this.getStringAttribute('search_base');
  }
  public set searchBase(value: string) {
    this._searchBase = value;
  }
  public resetSearchBase() {
    this._searchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBaseInput() {
    return this._searchBase;
  }

  // search_filter - computed: false, optional: true, required: false
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  public resetSearchFilter() {
    this._searchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // uid_field - computed: false, optional: true, required: false
  private _uidField?: string; 
  public get uidField() {
    return this.getStringAttribute('uid_field');
  }
  public set uidField(value: string) {
    this._uidField = value;
  }
  public resetUidField() {
    this._uidField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidFieldInput() {
    return this._uidField;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#ldap DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#ldap}
  */
  readonly ldap?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ldap: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapToTerraform(struct!.ldap),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ldap: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ldap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ldap.internalValue = value.ldap;
    }
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }
}
export interface DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec {
  /**
  * Protocol used for authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#protocol DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest#protocol}
  */
  readonly protocol: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol;
}

export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolToTerraform(struct!.protocol),
  }
}


export function dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    protocol: {
      value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolToHclTerraform(struct!.protocol),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol.internalValue = value.protocol;
    }
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocolOutputReference(this, "protocol");
  public get protocol() {
    return this._protocol;
  }
  public putProtocol(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecProtocol) {
    this._protocol.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest k8s_authentication_stackable_tech_authentication_class_v1alpha1_manifest}
*/
export class DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_authentication_stackable_tech_authentication_class_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_authentication_stackable_tech_authentication_class_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/authentication_stackable_tech_authentication_class_v1alpha1_manifest k8s_authentication_stackable_tech_authentication_class_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_authentication_stackable_tech_authentication_class_v1alpha1_manifest',
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
  private _metadata = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAuthenticationStackableTechAuthenticationClassV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
