// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SK8SMariadbComUserV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#metadata DataK8SK8SMariadbComUserV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata;
  /**
  * UserSpec defines the desired state of User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#spec DataK8SK8SMariadbComUserV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpec;
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#annotations DataK8SK8SMariadbComUserV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#labels DataK8SK8SMariadbComUserV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#namespace DataK8SK8SMariadbComUserV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SK8SMariadbComUserV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SK8SMariadbComUserV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#namespace DataK8SK8SMariadbComUserV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * WaitForIt indicates whether the controller using this reference should wait for MariaDB to be ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#wait_for_it DataK8SK8SMariadbComUserV1Alpha1Manifest#wait_for_it}
  */
  readonly waitForIt?: boolean | cdktf.IResolvable;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRefToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    wait_for_it: cdktf.booleanToTerraform(struct!.waitForIt),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable): any {
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
    wait_for_it: {
      value: cdktf.booleanToHclTerraform(struct!.waitForIt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined {
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
    if (this._waitForIt !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForIt = this._waitForIt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._waitForIt = undefined;
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
      this._waitForIt = value.waitForIt;
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

  // wait_for_it - computed: false, optional: true, required: false
  private _waitForIt?: boolean | cdktf.IResolvable; 
  public get waitForIt() {
    return this.getBooleanAttribute('wait_for_it');
  }
  public set waitForIt(value: boolean | cdktf.IResolvable) {
    this._waitForIt = value;
  }
  public resetWaitForIt() {
    this._waitForIt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForItInput() {
    return this._waitForIt;
  }
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#key DataK8SK8SMariadbComUserV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#key DataK8SK8SMariadbComUserV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#key DataK8SK8SMariadbComUserV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin {
  /**
  * PluginArgSecretKeyRef is a reference to the arguments to be provided to the authentication plugin for the User. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the authentication plugin arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#plugin_arg_secret_key_ref DataK8SK8SMariadbComUserV1Alpha1Manifest#plugin_arg_secret_key_ref}
  */
  readonly pluginArgSecretKeyRef?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef;
  /**
  * PluginNameSecretKeyRef is a reference to the authentication plugin to be used by the User. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the authentication plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#plugin_name_secret_key_ref DataK8SK8SMariadbComUserV1Alpha1Manifest#plugin_name_secret_key_ref}
  */
  readonly pluginNameSecretKeyRef?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_arg_secret_key_ref: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRefToTerraform(struct!.pluginArgSecretKeyRef),
    plugin_name_secret_key_ref: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRefToTerraform(struct!.pluginNameSecretKeyRef),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_arg_secret_key_ref: {
      value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRefToHclTerraform(struct!.pluginArgSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef",
    },
    plugin_name_secret_key_ref: {
      value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRefToHclTerraform(struct!.pluginNameSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginArgSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginArgSecretKeyRef = this._pluginArgSecretKeyRef?.internalValue;
    }
    if (this._pluginNameSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginNameSecretKeyRef = this._pluginNameSecretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pluginArgSecretKeyRef.internalValue = undefined;
      this._pluginNameSecretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pluginArgSecretKeyRef.internalValue = value.pluginArgSecretKeyRef;
      this._pluginNameSecretKeyRef.internalValue = value.pluginNameSecretKeyRef;
    }
  }

  // plugin_arg_secret_key_ref - computed: false, optional: true, required: false
  private _pluginArgSecretKeyRef = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRefOutputReference(this, "plugin_arg_secret_key_ref");
  public get pluginArgSecretKeyRef() {
    return this._pluginArgSecretKeyRef;
  }
  public putPluginArgSecretKeyRef(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginArgSecretKeyRef) {
    this._pluginArgSecretKeyRef.internalValue = value;
  }
  public resetPluginArgSecretKeyRef() {
    this._pluginArgSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginArgSecretKeyRefInput() {
    return this._pluginArgSecretKeyRef.internalValue;
  }

  // plugin_name_secret_key_ref - computed: false, optional: true, required: false
  private _pluginNameSecretKeyRef = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRefOutputReference(this, "plugin_name_secret_key_ref");
  public get pluginNameSecretKeyRef() {
    return this._pluginNameSecretKeyRef;
  }
  public putPluginNameSecretKeyRef(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginPluginNameSecretKeyRef) {
    this._pluginNameSecretKeyRef.internalValue = value;
  }
  public resetPluginNameSecretKeyRef() {
    this._pluginNameSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginNameSecretKeyRefInput() {
    return this._pluginNameSecretKeyRef.internalValue;
  }
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#key DataK8SK8SMariadbComUserV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRefToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRefToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
}
export interface DataK8SK8SMariadbComUserV1Alpha1ManifestSpec {
  /**
  * CleanupPolicy defines the behavior for cleaning up a SQL resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#cleanup_policy DataK8SK8SMariadbComUserV1Alpha1Manifest#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Host related to the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#host DataK8SK8SMariadbComUserV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * MariaDBRef is a reference to a MariaDB object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#maria_db_ref DataK8SK8SMariadbComUserV1Alpha1Manifest#maria_db_ref}
  */
  readonly mariaDbRef: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef;
  /**
  * MaxUserConnections defines the maximum number of simultaneous connections that the User can establish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#max_user_connections DataK8SK8SMariadbComUserV1Alpha1Manifest#max_user_connections}
  */
  readonly maxUserConnections?: number;
  /**
  * Name overrides the default name provided by metadata.name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#name DataK8SK8SMariadbComUserV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * PasswordHashSecretKeyRef is a reference to the password hash to be used by the User. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#password_hash_secret_key_ref DataK8SK8SMariadbComUserV1Alpha1Manifest#password_hash_secret_key_ref}
  */
  readonly passwordHashSecretKeyRef?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef;
  /**
  * PasswordPlugin is a reference to the password plugin and arguments to be used by the User.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#password_plugin DataK8SK8SMariadbComUserV1Alpha1Manifest#password_plugin}
  */
  readonly passwordPlugin?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin;
  /**
  * PasswordSecretKeyRef is a reference to the password to be used by the User. If not provided, the account will be locked and the password will expire. If the referred Secret is labeled with 'k8s.mariadb.com/watch', updates may be performed to the Secret in order to update the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#password_secret_key_ref DataK8SK8SMariadbComUserV1Alpha1Manifest#password_secret_key_ref}
  */
  readonly passwordSecretKeyRef?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef;
  /**
  * RequeueInterval is used to perform requeue reconciliations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#requeue_interval DataK8SK8SMariadbComUserV1Alpha1Manifest#requeue_interval}
  */
  readonly requeueInterval?: string;
  /**
  * RetryInterval is the interval used to perform retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#retry_interval DataK8SK8SMariadbComUserV1Alpha1Manifest#retry_interval}
  */
  readonly retryInterval?: string;
}

export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecToTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    host: cdktf.stringToTerraform(struct!.host),
    maria_db_ref: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRefToTerraform(struct!.mariaDbRef),
    max_user_connections: cdktf.numberToTerraform(struct!.maxUserConnections),
    name: cdktf.stringToTerraform(struct!.name),
    password_hash_secret_key_ref: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRefToTerraform(struct!.passwordHashSecretKeyRef),
    password_plugin: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginToTerraform(struct!.passwordPlugin),
    password_secret_key_ref: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRefToTerraform(struct!.passwordSecretKeyRef),
    requeue_interval: cdktf.stringToTerraform(struct!.requeueInterval),
    retry_interval: cdktf.stringToTerraform(struct!.retryInterval),
  }
}


export function dataK8SK8SMariadbComUserV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SK8SMariadbComUserV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maria_db_ref: {
      value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRefToHclTerraform(struct!.mariaDbRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef",
    },
    max_user_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxUserConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_hash_secret_key_ref: {
      value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRefToHclTerraform(struct!.passwordHashSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef",
    },
    password_plugin: {
      value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginToHclTerraform(struct!.passwordPlugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin",
    },
    password_secret_key_ref: {
      value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRefToHclTerraform(struct!.passwordSecretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef",
    },
    requeue_interval: {
      value: cdktf.stringToHclTerraform(struct!.requeueInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_interval: {
      value: cdktf.stringToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SK8SMariadbComUserV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SK8SMariadbComUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mariaDbRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mariaDbRef = this._mariaDbRef?.internalValue;
    }
    if (this._maxUserConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUserConnections = this._maxUserConnections;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passwordHashSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHashSecretKeyRef = this._passwordHashSecretKeyRef?.internalValue;
    }
    if (this._passwordPlugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordPlugin = this._passwordPlugin?.internalValue;
    }
    if (this._passwordSecretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretKeyRef = this._passwordSecretKeyRef?.internalValue;
    }
    if (this._requeueInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeueInterval = this._requeueInterval;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleanupPolicy = undefined;
      this._host = undefined;
      this._mariaDbRef.internalValue = undefined;
      this._maxUserConnections = undefined;
      this._name = undefined;
      this._passwordHashSecretKeyRef.internalValue = undefined;
      this._passwordPlugin.internalValue = undefined;
      this._passwordSecretKeyRef.internalValue = undefined;
      this._requeueInterval = undefined;
      this._retryInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleanupPolicy = value.cleanupPolicy;
      this._host = value.host;
      this._mariaDbRef.internalValue = value.mariaDbRef;
      this._maxUserConnections = value.maxUserConnections;
      this._name = value.name;
      this._passwordHashSecretKeyRef.internalValue = value.passwordHashSecretKeyRef;
      this._passwordPlugin.internalValue = value.passwordPlugin;
      this._passwordSecretKeyRef.internalValue = value.passwordSecretKeyRef;
      this._requeueInterval = value.requeueInterval;
      this._retryInterval = value.retryInterval;
    }
  }

  // cleanup_policy - computed: false, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // maria_db_ref - computed: false, optional: false, required: true
  private _mariaDbRef = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRefOutputReference(this, "maria_db_ref");
  public get mariaDbRef() {
    return this._mariaDbRef;
  }
  public putMariaDbRef(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecMariaDbRef) {
    this._mariaDbRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mariaDbRefInput() {
    return this._mariaDbRef.internalValue;
  }

  // max_user_connections - computed: false, optional: true, required: false
  private _maxUserConnections?: number; 
  public get maxUserConnections() {
    return this.getNumberAttribute('max_user_connections');
  }
  public set maxUserConnections(value: number) {
    this._maxUserConnections = value;
  }
  public resetMaxUserConnections() {
    this._maxUserConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUserConnectionsInput() {
    return this._maxUserConnections;
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

  // password_hash_secret_key_ref - computed: false, optional: true, required: false
  private _passwordHashSecretKeyRef = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRefOutputReference(this, "password_hash_secret_key_ref");
  public get passwordHashSecretKeyRef() {
    return this._passwordHashSecretKeyRef;
  }
  public putPasswordHashSecretKeyRef(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordHashSecretKeyRef) {
    this._passwordHashSecretKeyRef.internalValue = value;
  }
  public resetPasswordHashSecretKeyRef() {
    this._passwordHashSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashSecretKeyRefInput() {
    return this._passwordHashSecretKeyRef.internalValue;
  }

  // password_plugin - computed: false, optional: true, required: false
  private _passwordPlugin = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPluginOutputReference(this, "password_plugin");
  public get passwordPlugin() {
    return this._passwordPlugin;
  }
  public putPasswordPlugin(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordPlugin) {
    this._passwordPlugin.internalValue = value;
  }
  public resetPasswordPlugin() {
    this._passwordPlugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPluginInput() {
    return this._passwordPlugin.internalValue;
  }

  // password_secret_key_ref - computed: false, optional: true, required: false
  private _passwordSecretKeyRef = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRefOutputReference(this, "password_secret_key_ref");
  public get passwordSecretKeyRef() {
    return this._passwordSecretKeyRef;
  }
  public putPasswordSecretKeyRef(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpecPasswordSecretKeyRef) {
    this._passwordSecretKeyRef.internalValue = value;
  }
  public resetPasswordSecretKeyRef() {
    this._passwordSecretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretKeyRefInput() {
    return this._passwordSecretKeyRef.internalValue;
  }

  // requeue_interval - computed: false, optional: true, required: false
  private _requeueInterval?: string; 
  public get requeueInterval() {
    return this.getStringAttribute('requeue_interval');
  }
  public set requeueInterval(value: string) {
    this._requeueInterval = value;
  }
  public resetRequeueInterval() {
    this._requeueInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeueIntervalInput() {
    return this._requeueInterval;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: string; 
  public get retryInterval() {
    return this.getStringAttribute('retry_interval');
  }
  public set retryInterval(value: string) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest k8s_k8s_mariadb_com_user_v1alpha1_manifest}
*/
export class DataK8SK8SMariadbComUserV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_k8s_mariadb_com_user_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SK8SMariadbComUserV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SK8SMariadbComUserV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SK8SMariadbComUserV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SK8SMariadbComUserV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_k8s_mariadb_com_user_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/k8s_mariadb_com_user_v1alpha1_manifest k8s_k8s_mariadb_com_user_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SK8SMariadbComUserV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SK8SMariadbComUserV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_k8s_mariadb_com_user_v1alpha1_manifest',
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
  private _metadata = new DataK8SK8SMariadbComUserV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SK8SMariadbComUserV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SK8SMariadbComUserV1Alpha1ManifestSpec) {
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
      metadata: dataK8SK8SMariadbComUserV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SK8SMariadbComUserV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SK8SMariadbComUserV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SK8SMariadbComUserV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
