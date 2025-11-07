// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#metadata DataK8SApisixApacheOrgApisixConsumerV2Manifest#metadata}
  */
  readonly metadata: DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#spec DataK8SApisixApacheOrgApisixConsumerV2Manifest#spec}
  */
  readonly spec?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec;
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#annotations DataK8SApisixApacheOrgApisixConsumerV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#labels DataK8SApisixApacheOrgApisixConsumerV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#namespace DataK8SApisixApacheOrgApisixConsumerV2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestMetadataToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestMetadataToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRefToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRefToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#password DataK8SApisixApacheOrgApisixConsumerV2Manifest#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#username DataK8SApisixApacheOrgApisixConsumerV2Manifest#username}
  */
  readonly username: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValueToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValueToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#value DataK8SApisixApacheOrgApisixConsumerV2Manifest#value}
  */
  readonly value?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRefToTerraform(struct!.secretRef),
    value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValueToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef",
    },
    value: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._value.internalValue = value.value;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRefToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRefToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#access_key DataK8SApisixApacheOrgApisixConsumerV2Manifest#access_key}
  */
  readonly accessKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#algorithm DataK8SApisixApacheOrgApisixConsumerV2Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#clock_skew DataK8SApisixApacheOrgApisixConsumerV2Manifest#clock_skew}
  */
  readonly clockSkew?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#encode_uri_params DataK8SApisixApacheOrgApisixConsumerV2Manifest#encode_uri_params}
  */
  readonly encodeUriParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#keep_headers DataK8SApisixApacheOrgApisixConsumerV2Manifest#keep_headers}
  */
  readonly keepHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#max_req_body DataK8SApisixApacheOrgApisixConsumerV2Manifest#max_req_body}
  */
  readonly maxReqBody?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_key DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_key}
  */
  readonly secretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#signed_headers DataK8SApisixApacheOrgApisixConsumerV2Manifest#signed_headers}
  */
  readonly signedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#validate_request_body DataK8SApisixApacheOrgApisixConsumerV2Manifest#validate_request_body}
  */
  readonly validateRequestBody?: boolean | cdktf.IResolvable;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValueToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    clock_skew: cdktf.numberToTerraform(struct!.clockSkew),
    encode_uri_params: cdktf.booleanToTerraform(struct!.encodeUriParams),
    keep_headers: cdktf.booleanToTerraform(struct!.keepHeaders),
    max_req_body: cdktf.numberToTerraform(struct!.maxReqBody),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    signed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signedHeaders),
    validate_request_body: cdktf.booleanToTerraform(struct!.validateRequestBody),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValueToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clock_skew: {
      value: cdktf.numberToHclTerraform(struct!.clockSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encode_uri_params: {
      value: cdktf.booleanToHclTerraform(struct!.encodeUriParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_headers: {
      value: cdktf.booleanToHclTerraform(struct!.keepHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_req_body: {
      value: cdktf.numberToHclTerraform(struct!.maxReqBody),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signed_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validate_request_body: {
      value: cdktf.booleanToHclTerraform(struct!.validateRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._clockSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.clockSkew = this._clockSkew;
    }
    if (this._encodeUriParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodeUriParams = this._encodeUriParams;
    }
    if (this._keepHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepHeaders = this._keepHeaders;
    }
    if (this._maxReqBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReqBody = this._maxReqBody;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._signedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.signedHeaders = this._signedHeaders;
    }
    if (this._validateRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateRequestBody = this._validateRequestBody;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessKey = undefined;
      this._algorithm = undefined;
      this._clockSkew = undefined;
      this._encodeUriParams = undefined;
      this._keepHeaders = undefined;
      this._maxReqBody = undefined;
      this._secretKey = undefined;
      this._signedHeaders = undefined;
      this._validateRequestBody = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessKey = value.accessKey;
      this._algorithm = value.algorithm;
      this._clockSkew = value.clockSkew;
      this._encodeUriParams = value.encodeUriParams;
      this._keepHeaders = value.keepHeaders;
      this._maxReqBody = value.maxReqBody;
      this._secretKey = value.secretKey;
      this._signedHeaders = value.signedHeaders;
      this._validateRequestBody = value.validateRequestBody;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // clock_skew - computed: false, optional: true, required: false
  private _clockSkew?: number; 
  public get clockSkew() {
    return this.getNumberAttribute('clock_skew');
  }
  public set clockSkew(value: number) {
    this._clockSkew = value;
  }
  public resetClockSkew() {
    this._clockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clockSkewInput() {
    return this._clockSkew;
  }

  // encode_uri_params - computed: false, optional: true, required: false
  private _encodeUriParams?: boolean | cdktf.IResolvable; 
  public get encodeUriParams() {
    return this.getBooleanAttribute('encode_uri_params');
  }
  public set encodeUriParams(value: boolean | cdktf.IResolvable) {
    this._encodeUriParams = value;
  }
  public resetEncodeUriParams() {
    this._encodeUriParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeUriParamsInput() {
    return this._encodeUriParams;
  }

  // keep_headers - computed: false, optional: true, required: false
  private _keepHeaders?: boolean | cdktf.IResolvable; 
  public get keepHeaders() {
    return this.getBooleanAttribute('keep_headers');
  }
  public set keepHeaders(value: boolean | cdktf.IResolvable) {
    this._keepHeaders = value;
  }
  public resetKeepHeaders() {
    this._keepHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepHeadersInput() {
    return this._keepHeaders;
  }

  // max_req_body - computed: false, optional: true, required: false
  private _maxReqBody?: number; 
  public get maxReqBody() {
    return this.getNumberAttribute('max_req_body');
  }
  public set maxReqBody(value: number) {
    this._maxReqBody = value;
  }
  public resetMaxReqBody() {
    this._maxReqBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReqBodyInput() {
    return this._maxReqBody;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // signed_headers - computed: false, optional: true, required: false
  private _signedHeaders?: string[]; 
  public get signedHeaders() {
    return this.getListAttribute('signed_headers');
  }
  public set signedHeaders(value: string[]) {
    this._signedHeaders = value;
  }
  public resetSignedHeaders() {
    this._signedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signedHeadersInput() {
    return this._signedHeaders;
  }

  // validate_request_body - computed: false, optional: true, required: false
  private _validateRequestBody?: boolean | cdktf.IResolvable; 
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body');
  }
  public set validateRequestBody(value: boolean | cdktf.IResolvable) {
    this._validateRequestBody = value;
  }
  public resetValidateRequestBody() {
    this._validateRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestBodyInput() {
    return this._validateRequestBody;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#value DataK8SApisixApacheOrgApisixConsumerV2Manifest#value}
  */
  readonly value?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRefToTerraform(struct!.secretRef),
    value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValueToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef",
    },
    value: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._value.internalValue = value.value;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRefToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRefToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#algorithm DataK8SApisixApacheOrgApisixConsumerV2Manifest#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#base64_secret DataK8SApisixApacheOrgApisixConsumerV2Manifest#base64_secret}
  */
  readonly base64Secret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#exp DataK8SApisixApacheOrgApisixConsumerV2Manifest#exp}
  */
  readonly exp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#key DataK8SApisixApacheOrgApisixConsumerV2Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#lifetime_grace_period DataK8SApisixApacheOrgApisixConsumerV2Manifest#lifetime_grace_period}
  */
  readonly lifetimeGracePeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#public_key DataK8SApisixApacheOrgApisixConsumerV2Manifest#public_key}
  */
  readonly publicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret}
  */
  readonly secret?: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValueToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    base64_secret: cdktf.booleanToTerraform(struct!.base64Secret),
    exp: cdktf.numberToTerraform(struct!.exp),
    key: cdktf.stringToTerraform(struct!.key),
    lifetime_grace_period: cdktf.numberToTerraform(struct!.lifetimeGracePeriod),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValueToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_secret: {
      value: cdktf.booleanToHclTerraform(struct!.base64Secret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exp: {
      value: cdktf.numberToHclTerraform(struct!.exp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._base64Secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Secret = this._base64Secret;
    }
    if (this._exp !== undefined) {
      hasAnyValues = true;
      internalValueResult.exp = this._exp;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._lifetimeGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeGracePeriod = this._lifetimeGracePeriod;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._base64Secret = undefined;
      this._exp = undefined;
      this._key = undefined;
      this._lifetimeGracePeriod = undefined;
      this._publicKey = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._base64Secret = value.base64Secret;
      this._exp = value.exp;
      this._key = value.key;
      this._lifetimeGracePeriod = value.lifetimeGracePeriod;
      this._publicKey = value.publicKey;
      this._secret = value.secret;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // base64_secret - computed: false, optional: true, required: false
  private _base64Secret?: boolean | cdktf.IResolvable; 
  public get base64Secret() {
    return this.getBooleanAttribute('base64_secret');
  }
  public set base64Secret(value: boolean | cdktf.IResolvable) {
    this._base64Secret = value;
  }
  public resetBase64Secret() {
    this._base64Secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64SecretInput() {
    return this._base64Secret;
  }

  // exp - computed: false, optional: true, required: false
  private _exp?: number; 
  public get exp() {
    return this.getNumberAttribute('exp');
  }
  public set exp(value: number) {
    this._exp = value;
  }
  public resetExp() {
    this._exp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expInput() {
    return this._exp;
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

  // lifetime_grace_period - computed: false, optional: true, required: false
  private _lifetimeGracePeriod?: number; 
  public get lifetimeGracePeriod() {
    return this.getNumberAttribute('lifetime_grace_period');
  }
  public set lifetimeGracePeriod(value: number) {
    this._lifetimeGracePeriod = value;
  }
  public resetLifetimeGracePeriod() {
    this._lifetimeGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeGracePeriodInput() {
    return this._lifetimeGracePeriod;
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
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#value DataK8SApisixApacheOrgApisixConsumerV2Manifest#value}
  */
  readonly value?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRefToTerraform(struct!.secretRef),
    value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValueToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef",
    },
    value: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._value.internalValue = value.value;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRefToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRefToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#key DataK8SApisixApacheOrgApisixConsumerV2Manifest#key}
  */
  readonly key: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValueToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValueToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
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
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#value DataK8SApisixApacheOrgApisixConsumerV2Manifest#value}
  */
  readonly value?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRefToTerraform(struct!.secretRef),
    value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValueToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef",
    },
    value: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._value.internalValue = value.value;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRefToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRefToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#user_dn DataK8SApisixApacheOrgApisixConsumerV2Manifest#user_dn}
  */
  readonly userDn: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValueToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_dn: cdktf.stringToTerraform(struct!.userDn),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValueToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_dn: {
      value: cdktf.stringToHclTerraform(struct!.userDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDn = this._userDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._userDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._userDn = value.userDn;
    }
  }

  // user_dn - computed: false, optional: false, required: true
  private _userDn?: string; 
  public get userDn() {
    return this.getStringAttribute('user_dn');
  }
  public set userDn(value: string) {
    this._userDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDnInput() {
    return this._userDn;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#value DataK8SApisixApacheOrgApisixConsumerV2Manifest#value}
  */
  readonly value?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRefToTerraform(struct!.secretRef),
    value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValueToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef",
    },
    value: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._value.internalValue = value.value;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#name DataK8SApisixApacheOrgApisixConsumerV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRefToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRefToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef | cdktf.IResolvable): any {
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

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#appid DataK8SApisixApacheOrgApisixConsumerV2Manifest#appid}
  */
  readonly appid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#header_prefix DataK8SApisixApacheOrgApisixConsumerV2Manifest#header_prefix}
  */
  readonly headerPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#server DataK8SApisixApacheOrgApisixConsumerV2Manifest#server}
  */
  readonly server?: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValueToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    appid: cdktf.stringToTerraform(struct!.appid),
    header_prefix: cdktf.stringToTerraform(struct!.headerPrefix),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValueToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    appid: {
      value: cdktf.stringToHclTerraform(struct!.appid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_prefix: {
      value: cdktf.stringToHclTerraform(struct!.headerPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appid !== undefined) {
      hasAnyValues = true;
      internalValueResult.appid = this._appid;
    }
    if (this._headerPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerPrefix = this._headerPrefix;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appid = undefined;
      this._headerPrefix = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appid = value.appid;
      this._headerPrefix = value.headerPrefix;
      this._server = value.server;
    }
  }

  // appid - computed: false, optional: true, required: false
  private _appid?: string; 
  public get appid() {
    return this.getStringAttribute('appid');
  }
  public set appid(value: string) {
    this._appid = value;
  }
  public resetAppid() {
    this._appid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appidInput() {
    return this._appid;
  }

  // header_prefix - computed: false, optional: true, required: false
  private _headerPrefix?: string; 
  public get headerPrefix() {
    return this.getStringAttribute('header_prefix');
  }
  public set headerPrefix(value: string) {
    this._headerPrefix = value;
  }
  public resetHeaderPrefix() {
    this._headerPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerPrefixInput() {
    return this._headerPrefix;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#secret_ref DataK8SApisixApacheOrgApisixConsumerV2Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#value DataK8SApisixApacheOrgApisixConsumerV2Manifest#value}
  */
  readonly value?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_ref: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRefToTerraform(struct!.secretRef),
    value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValueToTerraform(struct!.value),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_ref: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef",
    },
    value: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretRef.internalValue = value.secretRef;
      this._value.internalValue = value.value;
    }
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#basic_auth DataK8SApisixApacheOrgApisixConsumerV2Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#hmac_auth DataK8SApisixApacheOrgApisixConsumerV2Manifest#hmac_auth}
  */
  readonly hmacAuth?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#jwt_auth DataK8SApisixApacheOrgApisixConsumerV2Manifest#jwt_auth}
  */
  readonly jwtAuth?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#key_auth DataK8SApisixApacheOrgApisixConsumerV2Manifest#key_auth}
  */
  readonly keyAuth?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#ldap_auth DataK8SApisixApacheOrgApisixConsumerV2Manifest#ldap_auth}
  */
  readonly ldapAuth?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#wolf_rbac DataK8SApisixApacheOrgApisixConsumerV2Manifest#wolf_rbac}
  */
  readonly wolfRbac?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthToTerraform(struct!.basicAuth),
    hmac_auth: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthToTerraform(struct!.hmacAuth),
    jwt_auth: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthToTerraform(struct!.jwtAuth),
    key_auth: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthToTerraform(struct!.keyAuth),
    ldap_auth: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthToTerraform(struct!.ldapAuth),
    wolf_rbac: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacToTerraform(struct!.wolfRbac),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth",
    },
    hmac_auth: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthToHclTerraform(struct!.hmacAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth",
    },
    jwt_auth: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthToHclTerraform(struct!.jwtAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth",
    },
    key_auth: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthToHclTerraform(struct!.keyAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth",
    },
    ldap_auth: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthToHclTerraform(struct!.ldapAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth",
    },
    wolf_rbac: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacToHclTerraform(struct!.wolfRbac),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._hmacAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hmacAuth = this._hmacAuth?.internalValue;
    }
    if (this._jwtAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuth = this._jwtAuth?.internalValue;
    }
    if (this._keyAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAuth = this._keyAuth?.internalValue;
    }
    if (this._ldapAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAuth = this._ldapAuth?.internalValue;
    }
    if (this._wolfRbac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wolfRbac = this._wolfRbac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._hmacAuth.internalValue = undefined;
      this._jwtAuth.internalValue = undefined;
      this._keyAuth.internalValue = undefined;
      this._ldapAuth.internalValue = undefined;
      this._wolfRbac.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._hmacAuth.internalValue = value.hmacAuth;
      this._jwtAuth.internalValue = value.jwtAuth;
      this._keyAuth.internalValue = value.keyAuth;
      this._ldapAuth.internalValue = value.ldapAuth;
      this._wolfRbac.internalValue = value.wolfRbac;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // hmac_auth - computed: false, optional: true, required: false
  private _hmacAuth = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuthOutputReference(this, "hmac_auth");
  public get hmacAuth() {
    return this._hmacAuth;
  }
  public putHmacAuth(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterHmacAuth) {
    this._hmacAuth.internalValue = value;
  }
  public resetHmacAuth() {
    this._hmacAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAuthInput() {
    return this._hmacAuth.internalValue;
  }

  // jwt_auth - computed: false, optional: true, required: false
  private _jwtAuth = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuthOutputReference(this, "jwt_auth");
  public get jwtAuth() {
    return this._jwtAuth;
  }
  public putJwtAuth(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterJwtAuth) {
    this._jwtAuth.internalValue = value;
  }
  public resetJwtAuth() {
    this._jwtAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthInput() {
    return this._jwtAuth.internalValue;
  }

  // key_auth - computed: false, optional: true, required: false
  private _keyAuth = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuthOutputReference(this, "key_auth");
  public get keyAuth() {
    return this._keyAuth;
  }
  public putKeyAuth(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterKeyAuth) {
    this._keyAuth.internalValue = value;
  }
  public resetKeyAuth() {
    this._keyAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAuthInput() {
    return this._keyAuth.internalValue;
  }

  // ldap_auth - computed: false, optional: true, required: false
  private _ldapAuth = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuthOutputReference(this, "ldap_auth");
  public get ldapAuth() {
    return this._ldapAuth;
  }
  public putLdapAuth(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterLdapAuth) {
    this._ldapAuth.internalValue = value;
  }
  public resetLdapAuth() {
    this._ldapAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAuthInput() {
    return this._ldapAuth.internalValue;
  }

  // wolf_rbac - computed: false, optional: true, required: false
  private _wolfRbac = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbacOutputReference(this, "wolf_rbac");
  public get wolfRbac() {
    return this._wolfRbac;
  }
  public putWolfRbac(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterWolfRbac) {
    this._wolfRbac.internalValue = value;
  }
  public resetWolfRbac() {
    this._wolfRbac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wolfRbacInput() {
    return this._wolfRbac.internalValue;
  }
}
export interface DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#auth_parameter DataK8SApisixApacheOrgApisixConsumerV2Manifest#auth_parameter}
  */
  readonly authParameter: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#ingress_class_name DataK8SApisixApacheOrgApisixConsumerV2Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
}

export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecToTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_parameter: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterToTerraform(struct!.authParameter),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
  }
}


export function dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecToHclTerraform(struct?: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_parameter: {
      value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterToHclTerraform(struct!.authParameter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authParameter = this._authParameter?.internalValue;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authParameter.internalValue = undefined;
      this._ingressClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authParameter.internalValue = value.authParameter;
      this._ingressClassName = value.ingressClassName;
    }
  }

  // auth_parameter - computed: false, optional: false, required: true
  private _authParameter = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameterOutputReference(this, "auth_parameter");
  public get authParameter() {
    return this._authParameter;
  }
  public putAuthParameter(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecAuthParameter) {
    this._authParameter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authParameterInput() {
    return this._authParameter.internalValue;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest k8s_apisix_apache_org_apisix_consumer_v2_manifest}
*/
export class DataK8SApisixApacheOrgApisixConsumerV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apisix_apache_org_apisix_consumer_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApisixApacheOrgApisixConsumerV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApisixApacheOrgApisixConsumerV2Manifest to import
  * @param importFromId The id of the existing DataK8SApisixApacheOrgApisixConsumerV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApisixApacheOrgApisixConsumerV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apisix_apache_org_apisix_consumer_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/apisix_apache_org_apisix_consumer_v2_manifest k8s_apisix_apache_org_apisix_consumer_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApisixApacheOrgApisixConsumerV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApisixApacheOrgApisixConsumerV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apisix_apache_org_apisix_consumer_v2_manifest',
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
  private _metadata = new DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApisixApacheOrgApisixConsumerV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec) {
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
      metadata: dataK8SApisixApacheOrgApisixConsumerV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApisixApacheOrgApisixConsumerV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestMetadata",
      },
      spec: {
        value: dataK8SApisixApacheOrgApisixConsumerV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApisixApacheOrgApisixConsumerV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
